/**
 * Mulwa Clinical Exam Portal
 * End of Year 2 Exam (3) (2024) - Comprehensive Clinical Nursing
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_14_QUESTIONS_PART1 } from './paper14_part1';
import { PAPER_14_QUESTIONS_PART2 } from './paper14_part2';

export const PAPER_14: PastPaper = {
  id: "eoy2-mixed-3",
  year: "2024",
  title: "End of Year 2 Exam (3)",
  category: "End of Year 2",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_14_QUESTIONS_PART1,
    ...PAPER_14_QUESTIONS_PART2
  ]
};
