/**
 * Mulwa Clinical Exam Portal
 * End of Year 1 Exam (9) - Paper Definition
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_9_QUESTIONS_PART1 } from './paper9_part1';
import { PAPER_9_QUESTIONS_PART2 } from './paper9_part2';

export const PAPER_9: PastPaper = {
  id: "eoy1-comprehensive-nursing-9",
  year: "2022",
  title: "End of Year 1 Exam (9)",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_9_QUESTIONS_PART1,
    ...PAPER_9_QUESTIONS_PART2
  ]
};
