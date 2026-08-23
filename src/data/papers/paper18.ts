/**
 * Mulwa Clinical Exam Portal
 * End of Year 1 Exam (14) (2022) - Comprehensive Clinical Nursing
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_18_QUESTIONS_PART1 } from './paper18_part1';
import { PAPER_18_QUESTIONS_PART2 } from './paper18_part2';

export const PAPER_18: PastPaper = {
  id: "eoy1-comprehensive-nursing-14",
  year: "2022",
  title: "End of Year 1 Exam (14)",
  category: "End of Year 1",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_18_QUESTIONS_PART1,
    ...PAPER_18_QUESTIONS_PART2
  ]
};
