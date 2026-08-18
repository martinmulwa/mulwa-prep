/**
 * Mulwa Clinical Exam Portal
 * Revision Set Partition & Selection View
 *
 * Divides full-length examination past papers into bite-sized 20-question practice modules.
 * Displays completed scores, in-progress indicators, and direct launch triggers.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import React from 'react';
import { ArrowLeft, Inbox, CheckCircle, ChevronRight, Play } from 'lucide-react';
import { SessionProgress } from '../types';
import { PAST_PAPERS, getRevisionSetsForPaper, findPaper } from '../data/questions';
import { makeSetKey } from '../utils/storage';

interface RevisionSetSelectionProps {
  /** Target past paper ID */
  paperId: string;
  /** Current session state */
  progress: SessionProgress;
  /** Set selection handler */
  onSelectSet: (paperId: string, setId: string) => void;
  /** Return to library view */
  onBack: () => void;
}

/**
 * Grid view displaying available 20-question sets for the selected past paper.
 */
export default function RevisionSetSelection({ paperId, progress, onSelectSet, onBack }: RevisionSetSelectionProps) {
  const matchedPaper = findPaper(paperId);
  const sets = getRevisionSetsForPaper(matchedPaper ? matchedPaper.id : paperId);

  if (!matchedPaper) {
    return (
      <div className="space-y-4" id="screen-set-selection">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 border border-slate-200 bg-white hover:bg-slate-50 rounded-lg">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-bold text-slate-500">Not found</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5" id="screen-set-selection">
      
      {/* Selection Header Bar */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <button
          onClick={onBack}
          className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-lg active:scale-95 transition-transform shrink-0"
          id="back-button-sets"
          title="Back"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
        </button>
        <div className="text-right min-w-0 flex-1">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block truncate">
            {matchedPaper.year}
          </span>
          <h2 className="text-xs sm:text-sm font-extrabold text-[#0B1B3D] uppercase truncate">
            {matchedPaper.title}
          </h2>
        </div>
      </div>

      {sets.length === 0 ? (
        <div className="border border-slate-200 bg-slate-50/50 p-10 rounded-lg flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
            <Inbox className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-slate-400">No revision sets available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sets.map((setId, index) => {
            const compositeKey = makeSetKey(matchedPaper.id, setId);
            const isCompleted = !!progress.completedSets[compositeKey];
            const inProgress = progress.inProgressSets[compositeKey];
            const startIdx = index * 20;
            const endIdx = Math.min(startIdx + 20, matchedPaper.questions.length);
            const totalQuestionsInSet = endIdx - startIdx;
            const answeredCount = inProgress ? Object.keys(inProgress.answers || {}).length : 0;
            const completedScore = isCompleted ? progress.completedSets[compositeKey].score : 0;

            return (
              <div
                key={setId}
                onClick={() => onSelectSet(matchedPaper.id, setId)}
                className={`group bg-white border p-4 sm:p-5 rounded-lg active:scale-[0.99] cursor-pointer transition-all flex flex-col justify-between min-h-[130px] ${
                  inProgress
                    ? 'border-amber-400 bg-amber-50/10 shadow-sm'
                    : isCompleted
                    ? 'border-emerald-300 bg-emerald-50/10'
                    : 'border-slate-200 hover:border-[#0B1B3D] hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-indigo-600 uppercase tracking-wider">
                      Set {index + 1}
                    </span>
                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded uppercase">
                        <CheckCircle className="w-3 h-3" />
                        {completedScore}/{totalQuestionsInSet}
                      </span>
                    ) : inProgress ? (
                      <span className="flex items-center gap-1 text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded uppercase">
                        <Play className="w-3 h-3 fill-amber-800" />
                        {answeredCount}/{totalQuestionsInSet}
                      </span>
                    ) : (
                      <span className="text-[10px] font-extrabold text-slate-400 bg-slate-100 px-2 py-0.5 rounded uppercase">
                        {totalQuestionsInSet} Qs
                      </span>
                    )}
                  </div>

                  <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1B3D] mt-2 uppercase tracking-tight">
                    Questions {startIdx + 1} – {endIdx}
                  </h3>
                </div>

                <div className="border-t border-slate-100 pt-2.5 mt-3 flex items-center justify-between">
                  <span className={`text-[11px] font-bold ${
                    isCompleted ? 'text-emerald-700' : inProgress ? 'text-amber-800' : 'text-slate-500'
                  }`}>
                    {isCompleted ? 'Review' : inProgress ? 'Resume' : 'Start'}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-slate-200 group-hover:border-[#0B1B3D] flex items-center justify-center transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0B1B3D]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
