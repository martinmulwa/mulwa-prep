/**
 * Mulwa Clinical Exam Portal
 * End of Year 1 Exam (12) (2023) - Comprehensive Clinical Nursing
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_16_QUESTIONS_PART1 } from './paper16_part1';
import { PAPER_16_QUESTIONS_PART2 } from './paper16_part2';

export const PAPER_16: PastPaper = {
  id: "eoy1-comprehensive-nursing-12",
  year: "2023",
  title: "End of Year 1 Exam (12)",
  category: "End of Year 1",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_16_QUESTIONS_PART1,
    ...PAPER_16_QUESTIONS_PART2
  ]
};
