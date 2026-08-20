/**
 * Mulwa Clinical Exam Portal
 * Type Definitions & Domain Interfaces
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

/**
 * Multiple Choice Question (MCQ) structure for nursing and medical examinations.
 */
export interface Question {
  /** Unique question identifier e.g. "eoy1-anatomy-physiology-2023_q1" */
  id: string;
  /** Reference to the parent past paper */
  paperId: string;
  /** 1-based revision set number (20 questions per set) */
  setNumber: number;
  /** The clinical clinical stem or question prompt */
  text: string;
  /** 4 selectable choices */
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  /** Correct choice key */
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  /** Thorough rationale explaining why the correct choice is valid and addressing distractors */
  explanation: string;
}

/**
 * Grouped subset of an exam paper (standardized to 20 MCQs for cognitive pacing).
 */
export interface RevisionSet {
  id: string; // e.g. "2023-set1"
  name: string; // e.g. "Set 1"
  questionsRange: string; // e.g. "Questions 1 – 20"
  startNum: number;
  endNum: number;
}

/**
 * Standard Past Paper representation.
 */
export interface PastPaper {
  id: string;
  year: string;
  title: string;
  totalQuestions: number;
  totalSets: number;
  questions: Question[];
  category?: 'End of Year 1' | 'End of Year 2';
}

/**
 * In-progress snapshot of a candidate practicing a specific set.
 */
export interface InProgressSetState {
  currentQuestionIndex: number;
  answers: { [questionId: string]: 'A' | 'B' | 'C' | 'D' };
  timestamp: string;
}

/**
 * Historical mistake log item for targeted review and spaced practice.
 */
export interface IncorrectQuestionRecord {
  id: string;
  questionId: string;
  paperId: string;
  setId: string;
  selectedAnswer: 'A' | 'B' | 'C' | 'D';
  timestamp: string;
}

/**
 * Session storage state structure maintaining ephemeral user progress.
 */
export interface SessionProgress {
  completedSets: { [setId: string]: { score: number; date: string } };
  inProgressSets: { [setId: string]: InProgressSetState };
  bookmarkedQuestions: string[];
  incorrectQuestions: IncorrectQuestionRecord[];
}

/**
 * Dashboard activity feed item.
 */
export interface ActivityLog {
  id: string;
  paperId: string;
  setId: string;
  paperTitle: string;
  setName: string;
  scoreText: string;
  timestamp: string;
}
