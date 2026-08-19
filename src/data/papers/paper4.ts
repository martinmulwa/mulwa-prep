/**
 * Mulwa Clinical Exam Portal
 * End of Year 1 Exam (4)
 *
 * Comprehensive multi-domain clinical examination paper containing 120 MCQs
 * partitioned into 6 standardized 20-question practice modules.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 */

import { PastPaper } from '../../types';
import { PAPER_4_QUESTIONS_PART1 } from './paper4_part1';
import { PAPER_4_QUESTIONS_PART2 } from './paper4_part2';

export const PAPER_4: PastPaper = {
  id: "eoy1-comprehensive-nursing-4",
  year: "Comprehensive",
  title: "End of Year 1 Exam (4)",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_4_QUESTIONS_PART1,
    ...PAPER_4_QUESTIONS_PART2
  ]
};
