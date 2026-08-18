/**
 * Mulwa Clinical Exam Portal
 * Past Papers Archive View
 *
 * Displays the complete directory of official examination papers, total question counts,
 * and completion status indicators.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import React from 'react';
import { ArrowLeft, Inbox, GraduationCap, ChevronRight } from 'lucide-react';
import { SessionProgress } from '../types';
import { PAST_PAPERS } from '../data/questions';

interface PastPapersLibraryProps {
  /** Ephemeral session progress state */
  progress: SessionProgress;
  /** Callback triggered when user selects a past paper */
  onSelectPaper: (paperId: string) => void;
  /** Navigation back to dashboard */
  onBack: () => void;
}

/**
 * Archive directory component listing all available examination past papers.
 */
export default function PastPapersLibrary({ progress, onSelectPaper, onBack }: PastPapersLibraryProps) {
  return (
    <div className="space-y-5" id="screen-past-papers">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <button
          onClick={onBack}
          className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-lg active:scale-95 transition-transform"
          title="Back"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
        </button>
        <h2 className="text-sm font-black text-[#0B1B3D] tracking-wider uppercase">
          Past Papers Archive
        </h2>
      </div>

      {PAST_PAPERS.length === 0 ? (
        <div className="border border-slate-200 bg-slate-50/50 p-10 rounded-lg flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
            <Inbox className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-slate-400">No papers available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3">
          {PAST_PAPERS.map((paper) => {
            const completedCount = Object.keys(progress.completedSets).filter((key) =>
              key.startsWith(paper.id)
            ).length;

            return (
              <div
                key={paper.id}
                onClick={() => onSelectPaper(paper.id)}
                className="group bg-white border border-slate-200 p-4 sm:p-5 rounded-lg hover:border-[#0B1B3D] hover:shadow-sm active:scale-[0.99] cursor-pointer transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-[#0B1B3D] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                        {paper.year}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">
                        {paper.questions.length} MCQs
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1B3D] mt-1 group-hover:text-indigo-600 transition-colors uppercase tracking-tight truncate">
                      {paper.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {completedCount > 0 && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      {completedCount} Done
                    </span>
                  )}
                  <div className="w-7 h-7 rounded-full border border-slate-200 group-hover:border-[#0B1B3D] flex items-center justify-center transition-colors">
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0B1B3D]" />
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
