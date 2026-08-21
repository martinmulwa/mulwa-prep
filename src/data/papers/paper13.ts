/**
 * Mulwa Clinical Exam Portal
 * End of Year 2 Exam (4) (2023) - Comprehensive Clinical Nursing
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_13_QUESTIONS_PART1 } from './paper13_part1';
import { PAPER_13_QUESTIONS_PART2 } from './paper13_part2';

export const PAPER_13: PastPaper = {
  id: "eoy2-comprehensive-nursing-4",
  year: "2023",
  title: "End of Year 2 Exam (4)",
  category: "End of Year 2",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_13_QUESTIONS_PART1,
    ...PAPER_13_QUESTIONS_PART2
  ]
};
