/**
 * Mulwa Clinical Exam Portal
 * End of Year 1 Exam (11) (2023) - Comprehensive Clinical Nursing
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_15_QUESTIONS_PART1 } from './paper15_part1';
import { PAPER_15_QUESTIONS_PART2 } from './paper15_part2';

export const PAPER_15: PastPaper = {
  id: "eoy1-comprehensive-nursing-11",
  year: "2023",
  title: "End of Year 1 Exam (11)",
  category: "End of Year 1",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_15_QUESTIONS_PART1,
    ...PAPER_15_QUESTIONS_PART2
  ]
};
