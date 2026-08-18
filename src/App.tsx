/**
 * Mulwa Clinical Exam Portal
 * Root Application Controller & Practice Engine
 *
 * Manages master navigation, view switching, active examination session state,
 * bookmarking, answer grading, mistake logging, and session storage persistence.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HomeDashboard from './components/HomeDashboard';
import PastPapersLibrary from './components/PastPapersLibrary';
import RevisionSetSelection from './components/RevisionSetSelection';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';
import ReviewIncorrectScreen from './components/ReviewIncorrectScreen';

import { SessionProgress, InProgressSetState } from './types';
import { loadProgress, saveProgress, resetProgress, makeSetKey, INITIAL_SESSION } from './utils/storage';
import { getQuestionsForSet, PAST_PAPERS, findPaper } from './data/questions';

/**
 * Root component managing overall application state, session persistence, and views.
 */
export default function App() {
  // Navigation Routing States (Dashboard, Papers, Mistakes Review Queue)
  const [activeTab, setActiveTab] = useState<'home' | 'papers' | 'review'>('home');
  const [view, setView] = useState<'tabs' | 'sets_selection' | 'active_exam' | 'results'>('tabs');
  
  // Active Context Identifiers
  const [selectedPaperId, setSelectedPaperId] = useState<string>(PAST_PAPERS[0]?.id || 'eoy1-anatomy-physiology-2023');
  const [selectedSetId, setSelectedSetId] = useState<string>('set1');
  
  // Examination Active Session States
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [activeAnswers, setActiveAnswers] = useState<{ [qId: string]: 'A' | 'B' | 'C' | 'D' }>({});
  const [examStartTime, setExamStartTime] = useState<number>(0);
  const [examDurationSeconds, setExamDurationSeconds] = useState<number>(0);
  const [latestScore, setLatestScore] = useState<number>(0);

  // Session Progress (Browser sessionStorage based - persists across reloads, clears on tab/browser close)
  const [progress, setProgress] = useState<SessionProgress>(INITIAL_SESSION);

  // Mount hook: load saved session progress
  useEffect(() => {
    const loaded = loadProgress();
    setProgress(loaded);
  }, []);

  /**
   * Switches the active top-level tab and restores the tabbed view.
   */
  const handleTabNavigation = (tab: 'home' | 'papers' | 'review') => {
    setActiveTab(tab);
    setView('tabs');
  };

  /**
   * Navigates into the set selection screen for a given past paper.
   */
  const handleSelectPaper = (paperId: string) => {
    setSelectedPaperId(paperId);
    setView('sets_selection');
  };

  /**
   * Launches or resumes a specific 20-question revision set.
   */
  const handleSelectSet = (paperId: string, setId: string) => {
    const resolvedPaper = findPaper(paperId);
    const resolvedPaperId = resolvedPaper ? resolvedPaper.id : paperId;

    setSelectedPaperId(resolvedPaperId);
    setSelectedSetId(setId);
    
    const combinedSetId = makeSetKey(resolvedPaperId, setId);
    const savedState = progress.inProgressSets[combinedSetId];

    if (savedState) {
      setCurrentQuestionIndex(savedState.currentQuestionIndex || 0);
      setActiveAnswers(savedState.answers || {});
    } else {
      setCurrentQuestionIndex(0);
      setActiveAnswers({});

      // Immediately register that this set is started / in-progress
      const initialProgress: InProgressSetState = {
        currentQuestionIndex: 0,
        answers: {},
        timestamp: new Date().toISOString()
      };

      setProgress(prev => {
        const updated = {
          ...prev,
          inProgressSets: {
            ...prev.inProgressSets,
            [combinedSetId]: initialProgress
          }
        };
        saveProgress(updated);
        return updated;
      });
    }

    setExamStartTime(Date.now());
    setView('active_exam');
  };

  /**
   * Records candidate answer selection, registers mistakes, and persists state.
   */
  const handleSelectAnswer = (answer: 'A' | 'B' | 'C' | 'D') => {
    const questions = getQuestionsForSet(selectedPaperId, selectedSetId);
    const currentQ = questions[currentQuestionIndex];
    if (!currentQ) return;

    const newAnswers = { ...activeAnswers, [currentQ.id]: answer };
    setActiveAnswers(newAnswers);

    const isIncorrect = answer !== currentQ.correctAnswer;
    const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);

    setProgress(prev => {
      let updatedIncorrect = [...prev.incorrectQuestions];

      if (isIncorrect) {
        const exists = updatedIncorrect.some(r => r.questionId === currentQ.id);
        if (!exists) {
          updatedIncorrect.push({
            id: `mistake_${Date.now()}_${currentQ.id}`,
            questionId: currentQ.id,
            paperId: selectedPaperId,
            setId: selectedSetId,
            selectedAnswer: answer,
            timestamp: new Date().toISOString()
          });
        }
      } else {
        // If question was previously marked incorrect and now answered correctly in active attempt, resolve it
        updatedIncorrect = updatedIncorrect.filter(r => r.questionId !== currentQ.id);
      }

      const updated = {
        ...prev,
        inProgressSets: {
          ...prev.inProgressSets,
          [combinedSetId]: {
            currentQuestionIndex,
            answers: newAnswers,
            timestamp: new Date().toISOString()
          }
        },
        incorrectQuestions: updatedIncorrect
      };

      saveProgress(updated);
      return updated;
    });
  };

  /**
   * Navigates to the previous question within the active set.
   */
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      const prevIdx = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIdx);

      const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);
      setProgress(prev => {
        const currentSaved = prev.inProgressSets[combinedSetId];
        if (!currentSaved) return prev;
        const updated = {
          ...prev,
          inProgressSets: {
            ...prev.inProgressSets,
            [combinedSetId]: {
              ...currentSaved,
              currentQuestionIndex: prevIdx,
              timestamp: new Date().toISOString()
            }
          }
        };
        saveProgress(updated);
        return updated;
      });
    }
  };

  /**
   * Advances to the next question or finalizes the set and computes the score.
   */
  const handleNextQuestion = () => {
    const questions = getQuestionsForSet(selectedPaperId, selectedSetId);
    
    if (currentQuestionIndex + 1 < questions.length) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);

      const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);
      setProgress(prev => {
        const updated = {
          ...prev,
          inProgressSets: {
            ...prev.inProgressSets,
            [combinedSetId]: {
              currentQuestionIndex: nextIndex,
              answers: activeAnswers,
              timestamp: new Date().toISOString()
            }
          }
        };
        saveProgress(updated);
        return updated;
      });
    } else {
      // Calculate final test score
      let correctCount = 0;
      questions.forEach(q => {
        if (activeAnswers[q.id] === q.correctAnswer) {
          correctCount += 1;
        }
      });

      const elapsedSeconds = Math.round((Date.now() - examStartTime) / 1000);
      setLatestScore(correctCount);
      setExamDurationSeconds(elapsedSeconds);

      const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);

      setProgress(prev => {
        const updatedInProgress = { ...prev.inProgressSets };
        delete updatedInProgress[combinedSetId];

        const updated = {
          ...prev,
          completedSets: {
            ...prev.completedSets,
            [combinedSetId]: {
              score: correctCount,
              date: new Date().toISOString()
            }
          },
          inProgressSets: updatedInProgress
        };

        saveProgress(updated);
        return updated;
      });

      setView('results');
    }
  };

  /**
   * Toggles bookmarking for the current question.
   */
  const handleToggleBookmark = (questionId: string) => {
    setProgress(prev => {
      const isBookmarked = prev.bookmarkedQuestions.includes(questionId);
      const updatedBookmarks = isBookmarked
        ? prev.bookmarkedQuestions.filter(id => id !== questionId)
        : [...prev.bookmarkedQuestions, questionId];

      const updated = {
        ...prev,
        bookmarkedQuestions: updatedBookmarks
      };
      saveProgress(updated);
      return updated;
    });
  };

  /**
   * Removes a resolved mistake from the mistake review queue.
   */
  const handleRemoveMistakeRecord = (recordId: string) => {
    setProgress(prev => {
      const updated = {
        ...prev,
        incorrectQuestions: prev.incorrectQuestions.filter(r => r.id !== recordId)
      };
      saveProgress(updated);
      return updated;
    });
  };

  /**
   * Resets all progress data for the current browser session.
   */
  const handleClearProgress = () => {
    const cleanSession = resetProgress();
    setProgress(cleanSession);
  };

  /**
   * Restarts the current set from question 1.
   */
  const handleRetrySet = () => {
    const combinedSetId = makeSetKey(selectedPaperId, selectedSetId);
    
    // Clear out in-progress and completed keys for this set
    setProgress(prev => {
      const updatedCompleted = { ...prev.completedSets };
      delete updatedCompleted[combinedSetId];

      const updatedInProgress = { ...prev.inProgressSets };
      delete updatedInProgress[combinedSetId];

      const updated = {
        ...prev,
        completedSets: updatedCompleted,
        inProgressSets: updatedInProgress
      };
      saveProgress(updated);
      return updated;
    });

    handleSelectSet(selectedPaperId, selectedSetId);
  };

  /**
   * Advances sequentially to the next available set in the current paper.
   */
  const handleNextSet = () => {
    const currentNum = parseInt(selectedSetId.replace('set', ''), 10) || 1;
    const nextSetId = `set${currentNum + 1}`;
    const nextQuestions = getQuestionsForSet(selectedPaperId, nextSetId);

    if (nextQuestions.length > 0) {
      handleSelectSet(selectedPaperId, nextSetId);
    } else {
      // If at end of sets, return to library
      setActiveTab('papers');
      setView('tabs');
    }
  };

  const currentQuestions = getQuestionsForSet(selectedPaperId, selectedSetId);
  const activeQuestion = currentQuestions[currentQuestionIndex];
  const isCurrentBookmarked = activeQuestion ? progress.bookmarkedQuestions.includes(activeQuestion.id) : false;
  const currentPaper = findPaper(selectedPaperId);

  return (
    <Layout
      activeTab={activeTab}
      setActiveTab={handleTabNavigation}
    >
      {/* Tabbed Views */}
      {view === 'tabs' && (
        <>
          {activeTab === 'home' && (
            <HomeDashboard
              progress={progress}
              onNavigate={handleTabNavigation}
              onContinueSet={handleSelectSet}
              onClearProgress={handleClearProgress}
            />
          )}

          {activeTab === 'papers' && (
            <PastPapersLibrary
              progress={progress}
              onSelectPaper={handleSelectPaper}
              onBack={() => handleTabNavigation('home')}
            />
          )}

          {activeTab === 'review' && (
            <ReviewIncorrectScreen
              progress={progress}
              onBack={() => handleTabNavigation('home')}
              onRemoveRecord={handleRemoveMistakeRecord}
            />
          )}
        </>
      )}

      {/* Revision Set Selection View */}
      {view === 'sets_selection' && (
        <RevisionSetSelection
          paperId={selectedPaperId}
          progress={progress}
          onSelectSet={handleSelectSet}
          onBack={() => {
            setActiveTab('papers');
            setView('tabs');
          }}
        />
      )}

      {/* Active Examination View */}
      {view === 'active_exam' && (
        <QuestionScreen
          paperId={selectedPaperId}
          setId={selectedSetId}
          questions={currentQuestions}
          currentQuestionIndex={currentQuestionIndex}
          answers={activeAnswers}
          isBookmarked={isCurrentBookmarked}
          onSelectAnswer={handleSelectAnswer}
          onPrevQuestion={handlePrevQuestion}
          onNextQuestion={handleNextQuestion}
          onToggleBookmark={() => activeQuestion && handleToggleBookmark(activeQuestion.id)}
          onExit={() => setView('sets_selection')}
        />
      )}

      {/* Results View */}
      {view === 'results' && (
        <ResultsScreen
          score={latestScore}
          totalQuestions={currentQuestions.length}
          timeTakenSeconds={examDurationSeconds}
          paperYear={currentPaper?.year || '2023'}
          setName={`Set ${selectedSetId.replace('set', '')}`}
          onReviewIncorrect={() => {
            setActiveTab('review');
            setView('tabs');
          }}
          onRetry={handleRetrySet}
          onNextSet={handleNextSet}
          onGoToHome={() => {
            setActiveTab('home');
            setView('tabs');
          }}
        />
      )}
    </Layout>
  );
}
