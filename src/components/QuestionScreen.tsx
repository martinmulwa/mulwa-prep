/**
 * Mulwa Clinical Exam Portal
 * Interactive Examination Workspace
 *
 * Renders individual multiple choice questions, handles option selection,
 * displays immediate rationale feedback with correct/incorrect distinctions,
 * tracks bookmarks, and provides seamless forward/back navigation.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Bookmark, Check, X, CheckCircle2, AlertCircle, ChevronLeft } from 'lucide-react';
import { Question } from '../types';
import { findPaper } from '../data/questions';

interface QuestionScreenProps {
  /** Target past paper ID */
  paperId: string;
  /** Active revision set ID */
  setId: string;
  /** Questions array belonging to this set */
  questions: Question[];
  /** Current question index within the set */
  currentQuestionIndex: number;
  /** Map of candidate answers keyed by question ID */
  answers: { [qId: string]: 'A' | 'B' | 'C' | 'D' };
  /** Bookmark status for the active question */
  isBookmarked: boolean;
  /** Callback on answer selection */
  onSelectAnswer: (answer: 'A' | 'B' | 'C' | 'D') => void;
  /** Step back to previous question in set */
  onPrevQuestion: () => void;
  /** Advance to next question or complete set */
  onNextQuestion: () => void;
  /** Toggle bookmark flag */
  onToggleBookmark: () => void;
  /** Exit examination workspace */
  onExit: () => void;
}

/**
 * Focus mode question interface for taking clinical MCQ tests.
 */
export default function QuestionScreen({
  paperId,
  setId,
  questions,
  currentQuestionIndex,
  answers,
  isBookmarked,
  onSelectAnswer,
  onPrevQuestion,
  onNextQuestion,
  onToggleBookmark,
  onExit
}: QuestionScreenProps) {
  const currentPaper = findPaper(paperId);
  const currentQuestion = questions[currentQuestionIndex] || {
    id: 'unknown',
    paperId,
    setNumber: 1,
    text: 'Question not found',
    options: { A: '', B: '', C: '', D: '' },
    correctAnswer: 'A',
    explanation: ''
  };
  const selectedAnswer = answers[currentQuestion.id];
  const isAnswered = selectedAnswer !== undefined;

  const progressPercentage = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);
  const setNum = parseInt(setId.replace('set', ''), 10) || 1;
  const hasPrevious = currentQuestionIndex > 0;
  const isLastQuestion = currentQuestionIndex + 1 === questions.length;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentQuestionIndex]);

  return (
    <div className="space-y-5 max-w-2xl mx-auto" id="active-revision-pane">
      
      {/* Upper Navigation Row */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <button
            onClick={onExit}
            className="p-2 bg-white border border-slate-200 hover:border-[#0B1B3D] text-slate-700 hover:text-[#0B1B3D] transition-all rounded-lg active:scale-95 shrink-0"
            id="exit-revision-button"
            title="Exit / Back to Sets"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
          </button>

          {hasPrevious && (
            <button
              onClick={onPrevQuestion}
              className="p-2 bg-white border border-slate-200 hover:border-[#0B1B3D] text-slate-700 hover:text-[#0B1B3D] transition-all rounded-lg active:scale-95 shrink-0"
              id="prev-question-header-btn"
              title="Previous Question"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
            </button>
          )}

          <div className="px-2.5 py-1 bg-slate-100/80 border border-slate-200 text-[#0B1B3D] text-xs font-black rounded-lg uppercase tracking-wider">
            Set {setNum}
          </div>
        </div>

        {/* Numerical Question Counter */}
        <div className="flex items-center">
          <div className="px-3 py-1 bg-indigo-50/70 border border-indigo-100/80 rounded-lg text-xs font-black text-[#0B1B3D]">
            <span>{currentQuestionIndex + 1}</span>
            <span className="text-slate-400 font-semibold mx-1">/</span>
            <span className="text-slate-500 font-semibold">{questions.length}</span>
          </div>
        </div>
      </div>

      {/* Thin Linear Progress Indicator */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-[#0B1B3D] h-full transition-all duration-300 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Clinical Question Card */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
            {currentQuestion.text}
          </h3>

          <button
            onClick={onToggleBookmark}
            className={`p-2 rounded-lg border transition-colors shrink-0 ${
              isBookmarked
                ? 'border-indigo-600 bg-indigo-50 text-[#0B1B3D]'
                : 'border-slate-200 bg-white text-slate-400 hover:text-slate-600'
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-indigo-600' : ''}`} />
          </button>
        </div>

        {/* Options List */}
        <div className="space-y-2.5 pt-2">
          {(['A', 'B', 'C', 'D'] as const).map((key) => {
            const isSelected = selectedAnswer === key;
            const isCorrect = currentQuestion.correctAnswer === key;
            
            let btnStyle = 'bg-white border-slate-200 hover:border-[#0B1B3D] text-slate-800';

            if (isAnswered) {
              if (isCorrect) {
                btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
              } else if (isSelected && !isCorrect) {
                btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-bold';
              } else {
                btnStyle = 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={key}
                disabled={isAnswered}
                onClick={() => onSelectAnswer(key)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-lg border transition-all flex items-start justify-between gap-3 ${btnStyle}`}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span className={`w-5 h-5 rounded flex items-center justify-center text-xs font-black shrink-0 ${
                    isAnswered && isCorrect
                      ? 'bg-emerald-600 text-white'
                      : isAnswered && isSelected && !isCorrect
                      ? 'bg-rose-600 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {key}
                  </span>
                  <span className="text-xs sm:text-sm leading-relaxed min-w-0 break-words font-medium">
                    {currentQuestion.options[key]}
                  </span>
                </div>

                {isAnswered && isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Clinical Rationale Feedback */}
        {isAnswered && (
          <div className="mt-4 p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-lg space-y-2 animate-fade-in">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider">
              {selectedAnswer === currentQuestion.correctAnswer ? (
                <span className="text-emerald-700 flex items-center gap-1.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                  Correct
                </span>
              ) : (
                <span className="text-rose-700 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 stroke-[3]" />
                  Incorrect (Correct: Option {currentQuestion.correctAnswer})
                </span>
              )}
            </div>
            
            <p className="text-xs text-slate-700 leading-relaxed font-normal pt-1">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Bottom Navigation Buttons */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-200">
          <div>
            {hasPrevious ? (
              <button
                onClick={onPrevQuestion}
                className="px-4 py-2.5 bg-white border border-slate-200 hover:border-[#0B1B3D] text-slate-700 hover:text-[#0B1B3D] text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 active:scale-95 transition-all"
                id="bottom-prev-question-btn"
                title="Previous Question"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
            ) : (
              <div />
            )}
          </div>

          <div className="flex items-center gap-2">
            {isAnswered ? (
              <button
                onClick={onNextQuestion}
                className="px-5 py-2.5 bg-[#0B1B3D] hover:bg-[#162f5f] text-white text-xs font-black uppercase tracking-wider rounded-lg flex items-center gap-2 active:scale-95 transition-all shadow-xs"
                id="next-question-btn"
              >
                <span>{isLastQuestion ? 'View Results' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                disabled
                className="px-5 py-2.5 bg-slate-100 text-slate-400 text-xs font-black uppercase tracking-wider rounded-lg cursor-not-allowed"
              >
                Select an option
              </button>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
