/**
 * Mulwa Clinical Exam Portal
 * End of Year 2 Exam (1) (2023) - Comprehensive Clinical Nursing
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_11_QUESTIONS_PART1 } from './paper11_part1';
import { PAPER_11_QUESTIONS_PART2 } from './paper11_part2';

export const PAPER_11: PastPaper = {
  id: "eoy2-comprehensive-nursing-1",
  year: "2023",
  title: "End of Year 2 Exam (1)",
  category: "End of Year 2",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_11_QUESTIONS_PART1,
    ...PAPER_11_QUESTIONS_PART2
  ]
};
