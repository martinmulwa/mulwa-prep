/**
 * Mulwa Clinical Exam Portal
 * End of Year 2 Exam (5) (2024) - Comprehensive Clinical Nursing
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_19_QUESTIONS_PART1 } from './paper19_part1';
import { PAPER_19_QUESTIONS_PART2 } from './paper19_part2';

export const PAPER_19: PastPaper = {
  id: "eoy2-mixed-5",
  year: "2024",
  title: "End of Year 2 Exam (5)",
  category: "End of Year 2",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_19_QUESTIONS_PART1,
    ...PAPER_19_QUESTIONS_PART2
  ]
};
