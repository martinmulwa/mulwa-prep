/**
 * Mulwa Clinical Exam Portal
 * End of Year 1 Exam (16) (2024) - Comprehensive Clinical Nursing
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_22_QUESTIONS_PART1 } from './paper22_part1';
import { PAPER_22_QUESTIONS_PART2 } from './paper22_part2';

export const PAPER_22: PastPaper = {
  id: "eoy1-mixed-16",
  year: "2024",
  title: "End of Year 1 Exam (16)",
  category: "End of Year 1",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_22_QUESTIONS_PART1,
    ...PAPER_22_QUESTIONS_PART2
  ]
};
