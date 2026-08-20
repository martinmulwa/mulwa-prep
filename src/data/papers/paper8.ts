/**
 * Mulwa Clinical Exam Portal
 * End of Year 1 Exam (8) - Paper Definition
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { PastPaper } from '../../types';
import { PAPER_8_QUESTIONS_PART1 } from './paper8_part1';
import { PAPER_8_QUESTIONS_PART2 } from './paper8_part2';

export const PAPER_8: PastPaper = {
  id: "eoy1-comprehensive-nursing-8",
  year: "Comprehensive",
  title: "End of Year 1 Exam (8)",
  totalQuestions: 120,
  totalSets: 6,
  questions: [
    ...PAPER_8_QUESTIONS_PART1,
    ...PAPER_8_QUESTIONS_PART2
  ]
};
