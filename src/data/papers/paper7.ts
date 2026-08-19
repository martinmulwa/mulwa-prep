/**
 * Mulwa Clinical Exam Portal
 * End of Year 1 Exam (7)
 *
 * Comprehensive clinical examination paper containing 120 MCQs
 * partitioned into 6 standardized 20-question practice modules.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_7_QUESTIONS_PART1 } from './paper7_part1';
import { PAPER_7_QUESTIONS_PART2 } from './paper7_part2';

export const PAPER_7: PastPaper = {
  id: "eoy1-comprehensive-nursing-7",
  year: "Comprehensive",
  title: "End of Year 1 Exam (7)",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_7_QUESTIONS_PART1,
    ...PAPER_7_QUESTIONS_PART2
  ]
};
