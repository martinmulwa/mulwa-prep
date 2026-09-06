/**
 * Mulwa Clinical Exam Portal
 * End of Year 1 Exam (15) (2024) - Comprehensive Clinical Nursing
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_21_QUESTIONS_PART1 } from './paper21_part1';
import { PAPER_21_QUESTIONS_PART2 } from './paper21_part2';

export const PAPER_21: PastPaper = {
  id: "eoy1-mixed-15",
  year: "2024",
  title: "End of Year 1 Exam (15)",
  category: "End of Year 1",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_21_QUESTIONS_PART1,
    ...PAPER_21_QUESTIONS_PART2
  ]
};
