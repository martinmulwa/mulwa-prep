/**
 * Mulwa Clinical Exam Portal
 * End of Year 2 Exam (2) (2024) - Comprehensive Clinical Nursing
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_12_QUESTIONS_PART1 } from './paper12_part1';
import { PAPER_12_QUESTIONS_PART2 } from './paper12_part2';

export const PAPER_12: PastPaper = {
  id: "eoy2-comprehensive-nursing-2",
  year: "2024",
  title: "End of Year 2 Exam (2)",
  category: "End of Year 2",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_12_QUESTIONS_PART1,
    ...PAPER_12_QUESTIONS_PART2
  ]
};
