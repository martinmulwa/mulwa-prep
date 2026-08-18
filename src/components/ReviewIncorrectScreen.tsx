/**
 * Mulwa Clinical Exam Portal
 * Mistakes Review Queue Screen
 *
 * Provides a dedicated interface for reviewing questions answered incorrectly.
 * Shows original choices, candidate's mistake, the correct key, detailed clinical rationale,
 * and an "Understood" action to mark items as resolved.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, ChevronDown, CheckCircle, Check } from 'lucide-react';
import { SessionProgress, Question } from '../types';
import { PAST_PAPERS } from '../data/questions';

interface ReviewIncorrectScreenProps {
  /** Ephemeral session progress */
  progress: SessionProgress;
  /** Navigation back to dashboard */
  onBack: () => void;
  /** Handler to remove an understood question from the review list */
  onRemoveRecord: (recordId: string) => void;
}

/**
 * Mistakes review screen allowing students to master weak areas with full rationales.
 */
export default function ReviewIncorrectScreen({ progress, onBack, onRemoveRecord }: ReviewIncorrectScreenProps) {
  const [expandedRecordId, setExpandedRecordId] = useState<string | null>(null);

  const incorrectRecords = progress.incorrectQuestions;

  // Build a lookup map of all questions across all past papers
  const allQuestionsMap = new Map<string, Question>();
  PAST_PAPERS.forEach(paper => {
    paper.questions.forEach(q => {
      allQuestionsMap.set(q.id, q);
    });
  });

  const resolvedQuestions = incorrectRecords.map(record => {
    const matchedQ = allQuestionsMap.get(record.questionId);
    return {
      record,
      question: matchedQ
    };
  }).filter(item => item.question !== undefined) as { record: typeof incorrectRecords[0]; question: Question }[];

  const handleToggleExpand = (id: string) => {
    setExpandedRecordId(expandedRecordId === id ? null : id);
  };

  return (
    <div className="space-y-5" id="screen-review-incorrect">
      
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <button
          onClick={onBack}
          className="p-2 bg-white border border-slate-200 hover:border-[#0B1B3D] text-slate-800 transition-all rounded-lg active:scale-95 shrink-0"
          id="back-button-review"
          title="Back to Dashboard"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
        </button>
        <h2 className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-wider">
          Mistakes ({resolvedQuestions.length})
        </h2>
      </div>

      {/* Mistakes List */}
      {resolvedQuestions.length === 0 ? (
        <div className="text-center py-12 px-4 bg-white border border-slate-200 rounded-lg" id="empty-review-state">
          <div className="w-10 h-10 bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center mx-auto mb-3 rounded-lg">
            <CheckCircle className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-slate-500">No mistakes to review</p>
        </div>
      ) : (
        <div className="border border-slate-200 divide-y divide-slate-200 rounded-lg overflow-hidden" id="mistakes-queue-list">
          {resolvedQuestions.map(({ record, question }) => {
            const isExpanded = expandedRecordId === record.id;
            const setNum = parseInt(record.setId.replace('set', ''), 10) || 1;

            return (
              <div
                key={record.id}
                className="bg-white transition-colors overflow-hidden"
              >
                {/* Header preview row */}
                <div
                  onClick={() => handleToggleExpand(record.id)}
                  className="p-4 cursor-pointer hover:bg-slate-50/50 transition-colors flex justify-between items-start gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 text-[9px] font-black text-[#0B1B3D] bg-indigo-50 px-2 py-0.5 rounded w-fit mb-1.5 uppercase">
                      <span>{PAST_PAPERS.find(p => p.id === record.paperId)?.year || '2023'} · Set {setNum}</span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 leading-relaxed truncate pr-2">
                      {question.text}
                    </h4>

                    <div className="mt-2 flex items-center gap-2 text-[10px] font-bold uppercase">
                      <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                        Chosen: {record.selectedAnswer}
                      </span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        Correct: {question.correctAnswer}
                      </span>
                    </div>
                  </div>

                  <div className="self-center shrink-0">
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
                    )}
                  </div>
                </div>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-2 border-t border-slate-100 bg-slate-50/30 space-y-3">
                    
                    <p className="text-xs text-slate-900 leading-relaxed font-bold">{question.text}</p>

                    <div className="space-y-1">
                      {(['A', 'B', 'C', 'D'] as const).map(key => {
                        const isSelect = record.selectedAnswer === key;
                        const isCorr = question.correctAnswer === key;

                        return (
                          <div
                            key={key}
                            className={`p-2.5 text-xs flex items-center justify-between border rounded ${
                              isCorr
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-950 font-semibold'
                                : isSelect
                                ? 'bg-rose-50 border-rose-100 text-rose-950 font-semibold'
                                : 'bg-white border-slate-200 text-slate-500'
                            }`}
                          >
                            <span>{key}. {question.options[key]}</span>
                            {isCorr && <span className="text-[9px] font-bold text-emerald-700 uppercase">Correct</span>}
                            {isSelect && !isCorr && <span className="text-[9px] font-bold text-rose-600 uppercase">Chosen</span>}
                          </div>
                        );
                      })}
                    </div>

                    <div className="bg-white border border-slate-200 p-3.5 rounded">
                      <p className="text-xs text-slate-700 leading-relaxed font-semibold">{question.explanation}</p>
                    </div>

                    <div className="flex justify-end pt-1">
                      <button
                        onClick={() => onRemoveRecord(record.id)}
                        className="bg-[#0B1B3D] hover:bg-[#162f5f] text-white p-2.5 rounded-lg flex items-center gap-1.5 text-xs font-bold transition-all active:scale-95"
                        title="Mark as Understood & Clear"
                      >
                        <Check className="w-4 h-4" />
                        <span>Understood</span>
                      </button>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
