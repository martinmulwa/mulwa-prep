/**
 * Mulwa Clinical Exam Portal
 * Examination Repository & Question Bank Registry
 *
 * Central aggregator providing access to all modular exam papers, revision set
 * slicing helpers, and validation utilities.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { Question, PastPaper } from '../types';
import { ALL_PAPERS, PAPER_1, PAPER_2, PAPER_3, PAPER_4, PAPER_5, PAPER_6, PAPER_7, PAPER_8, PAPER_9 } from './papers';
import { validatePastPaper, validateAllPapers, PaperValidationReport } from './validator';

/** Master collection of curated past examination papers */
export const PAST_PAPERS: PastPaper[] = ALL_PAPERS;

/**
 * Finds a past paper by exact ID, title, or fuzzy match. Defaults to the first paper if not found.
 *
 * @param paperId - ID or search token for the paper
 */
export function findPaper(paperId?: string): PastPaper | undefined {
  if (!paperId) return PAST_PAPERS[0];
  return (
    PAST_PAPERS.find(p => p.id === paperId) ||
    PAST_PAPERS.find(p => p.title === paperId) ||
    PAST_PAPERS.find(p => p.id.includes(paperId)) ||
    PAST_PAPERS[0]
  );
}

/**
 * Retrieves the specific 20-question slice corresponding to a revision set ID.
 *
 * @param paperId - ID of the past paper
 * @param setId - Revision set string (e.g. "set1", "set2")
 */
export function getQuestionsForSet(paperId: string, setId: string): Question[] {
  const paper = findPaper(paperId);
  if (!paper) return [];
  const num = parseInt(setId.replace('set', ''), 10) || 1;
  const start = (num - 1) * 20;
  return paper.questions.slice(start, start + 20);
}

/**
 * Calculates and returns the list of set keys (e.g. ['set1', 'set2', ...]) for a given paper.
 *
 * @param paperId - ID of the past paper
 */
export function getRevisionSetsForPaper(paperId: string): string[] {
  const paper = findPaper(paperId);
  if (!paper) return [];
  const count = Math.ceil(paper.questions.length / 20);
  return Array.from({ length: count }, (_, i) => `set${i + 1}`);
}

export {
  PAPER_1,
  PAPER_2,
  PAPER_3,
  PAPER_4,
  PAPER_5,
  PAPER_6,
  PAPER_7,
  PAPER_8,
  PAPER_9,
  validatePastPaper,
  validateAllPapers,
  type PaperValidationReport
};
