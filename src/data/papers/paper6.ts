/**
 * Mulwa Clinical Exam Portal
 * End of Year 1 Exam (6)
 *
 * Comprehensive clinical examination paper (2022) containing 120 MCQs
 * partitioned into 6 standardized 20-question practice modules.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_6_QUESTIONS_PART1 } from './paper6_part1';
import { PAPER_6_QUESTIONS_PART2 } from './paper6_part2';

export const PAPER_6: PastPaper = {
  id: "eoy1-comprehensive-nursing-6",
  year: "2022",
  title: "End of Year 1 Exam (6)",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_6_QUESTIONS_PART1,
    ...PAPER_6_QUESTIONS_PART2
  ]
};
