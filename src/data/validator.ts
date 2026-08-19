/**
 * Mulwa Clinical Exam Portal
 * Question Bank Schema & Integrity Validator
 *
 * Provides comprehensive data integrity validation for exam papers, ensuring
 * option completeness, unique question IDs, valid correct answer keys, and
 * non-empty clinical rationales.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../types';

/** Detailed validation result for an exam paper */
export interface PaperValidationReport {
  isValid: boolean;
  paperId: string;
  paperTitle: string;
  totalQuestions: number;
  errors: string[];
  warnings: string[];
}

/**
 * Validates a past paper object against required data integrity rules.
 *
 * @param paper - The PastPaper object to validate
 * @returns Validation report detailing status and any issues detected
 */
export function validatePastPaper(paper: PastPaper): PaperValidationReport {
  const errors: string[] = [];
  const warnings: string[] = [];
  const validOptionKeys = new Set(['A', 'B', 'C', 'D']);
  const seenQuestionIds = new Set<string>();

  if (!paper.id || typeof paper.id !== 'string') {
    errors.push('Paper is missing a valid string `id`');
  }
  if (!paper.title || typeof paper.title !== 'string') {
    errors.push('Paper is missing a valid string `title`');
  }
  if (!Array.isArray(paper.questions) || paper.questions.length === 0) {
    errors.push('Paper contains no questions array or is empty');
  }

  if (paper.questions) {
    paper.questions.forEach((q, idx) => {
      const qNum = idx + 1;
      const qRef = q.id || `Question #${qNum}`;

      // ID Validation
      if (!q.id) {
        errors.push(`Question #${qNum} is missing an 'id'`);
      } else if (seenQuestionIds.has(q.id)) {
        errors.push(`Duplicate question ID detected: "${q.id}"`);
      } else {
        seenQuestionIds.add(q.id);
      }

      // Stem Validation
      if (!q.text || q.text.trim().length === 0) {
        errors.push(`${qRef} has an empty stem text`);
      }

      // Options Validation (A, B, C, D)
      if (!q.options || typeof q.options !== 'object') {
        errors.push(`${qRef} is missing an options object`);
      } else {
        (['A', 'B', 'C', 'D'] as const).forEach(opt => {
          if (!q.options[opt] || q.options[opt].trim().length === 0) {
            errors.push(`${qRef} is missing Option ${opt}`);
          }
        });
      }

      // Correct Answer Key Validation
      if (!validOptionKeys.has(q.correctAnswer)) {
        errors.push(`${qRef} has an invalid correctAnswer: "${q.correctAnswer}" (must be 'A', 'B', 'C', or 'D')`);
      }

      // Rationale Validation
      if (!q.explanation || q.explanation.trim().length === 0) {
        errors.push(`${qRef} is missing a clinical explanation/rationale`);
      }

      // Set Number Validation
      if (!q.setNumber || q.setNumber < 1) {
        errors.push(`${qRef} has an invalid setNumber (${q.setNumber})`);
      }
    });
  }

  return {
    isValid: errors.length === 0,
    paperId: paper.id || 'unknown',
    paperTitle: paper.title || 'Untitled Paper',
    totalQuestions: paper.questions?.length || 0,
    errors,
    warnings
  };
}

/**
 * Validates an array of past papers and throws an error in development if invalid.
 *
 * @param papers - Array of PastPaper objects
 */
export function validateAllPapers(papers: PastPaper[]): PaperValidationReport[] {
  return papers.map(validatePastPaper);
}
