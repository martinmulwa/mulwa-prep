/**
 * Mulwa Clinical Exam Portal
 * End of Year 1 Exam (5)
 *
 * Comprehensive multi-domain clinical examination paper containing 120 MCQs
 * partitioned into 6 standardized 20-question practice modules.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_5_QUESTIONS_PART1 } from './paper5_part1';
import { PAPER_5_QUESTIONS_PART2 } from './paper5_part2';

export const PAPER_5: PastPaper = {
  id: "eoy1-comprehensive-nursing-5",
  year: "Comprehensive",
  title: "End of Year 1 Exam (5)",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_5_QUESTIONS_PART1,
    ...PAPER_5_QUESTIONS_PART2
  ]
};
