/**
 * Mulwa Clinical Exam Portal
 * Past Papers Archive View
 *
 * Categorized past examination papers with tabbed sections for
 * "End of Year 1" and "End of Year 2", along with comprehensive metrics.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 2.0.0
 */

import React, { useState } from 'react';
import { ArrowLeft, Inbox, GraduationCap, ChevronRight, BookOpen, CheckCircle, Search } from 'lucide-react';
import { SessionProgress } from '../types';
import { PAST_PAPERS, getPaperCategory, ExamYearCategory } from '../data/questions';

interface PastPapersLibraryProps {
  /** Ephemeral session progress state */
  progress: SessionProgress;
  /** Callback triggered when user selects a past paper */
  onSelectPaper: (paperId: string) => void;
  /** Navigation back to dashboard */
  onBack: () => void;
}

type TabSelection = 'Year 1' | 'Year 2' | 'All';

/**
 * Categorized archive directory listing past examination papers by academic stage.
 */
export default function PastPapersLibrary({ progress, onSelectPaper, onBack }: PastPapersLibraryProps) {
  const [activeTab, setActiveTab] = useState<TabSelection>('Year 1');
  const [searchQuery, setSearchQuery] = useState('');

  const year1Papers = PAST_PAPERS.filter((p) => getPaperCategory(p) === 'End of Year 1');
  const year2Papers = PAST_PAPERS.filter((p) => getPaperCategory(p) === 'End of Year 2');

  // Filter papers based on active tab and search query
  const displayedPapers = PAST_PAPERS.filter((paper) => {
    const category = getPaperCategory(paper);
    const matchesTab =
      activeTab === 'All' ||
      (activeTab === 'Year 1' && category === 'End of Year 1') ||
      (activeTab === 'Year 2' && category === 'End of Year 2');

    const matchesSearch =
      searchQuery.trim() === '' ||
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.year.includes(searchQuery) ||
      paper.id.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  // Calculate statistics for the active tab
  const targetCategoryPapers =
    activeTab === 'Year 1' ? year1Papers : activeTab === 'Year 2' ? year2Papers : PAST_PAPERS;

  const totalQuestionsInTab = targetCategoryPapers.reduce((sum, p) => sum + p.questions.length, 0);

  const completedSetsInTab = targetCategoryPapers.reduce((acc, paper) => {
    const count = Object.keys(progress.completedSets).filter((key) => key.startsWith(paper.id)).length;
    return acc + count;
  }, 0);

  return (
    <div className="space-y-5" id="screen-past-papers">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <button
          onClick={onBack}
          className="p-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 rounded-lg active:scale-95 transition-transform"
          id="back-btn-library"
          title="Back to Dashboard"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
        </button>
        <div className="text-right">
          <h2 className="text-sm font-black text-[#0B1B3D] tracking-wider uppercase">
            Past Papers Archive
          </h2>
          <p className="text-[10px] font-bold text-slate-400">
            {PAST_PAPERS.length} Total Curated Exams
          </p>
        </div>
      </div>

      {/* Categorization Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-xl border border-slate-200/80" id="paper-category-tabs">
        <button
          onClick={() => setActiveTab('Year 1')}
          id="tab-end-of-year-1"
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-black transition-all ${
            activeTab === 'Year 1'
              ? 'bg-[#0B1B3D] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          <span>End of Year 1</span>
          <span
            className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
              activeTab === 'Year 1' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
            }`}
          >
            {year1Papers.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('Year 2')}
          id="tab-end-of-year-2"
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-black transition-all ${
            activeTab === 'Year 2'
              ? 'bg-[#0B1B3D] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          <span>End of Year 2</span>
          <span
            className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
              activeTab === 'Year 2' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
            }`}
          >
            {year2Papers.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('All')}
          id="tab-all-papers"
          className={`hidden sm:flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-black transition-all ${
            activeTab === 'All'
              ? 'bg-[#0B1B3D] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          <span>All</span>
          <span
            className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
              activeTab === 'All' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
            }`}
          >
            {PAST_PAPERS.length}
          </span>
        </button>
      </div>

      {/* Category Info Strip */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-800">
            {activeTab === 'Year 1' ? 'End of Year 1 Exams' : activeTab === 'Year 2' ? 'End of Year 2 Exams' : 'All Past Papers'}
          </span>
          <span className="text-slate-300">•</span>
          <span>{totalQuestionsInTab} MCQs</span>
        </div>
        {completedSetsInTab > 0 && (
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
            {completedSetsInTab} Completed Sets
          </span>
        )}
      </div>

      {/* Search Input Filter */}
      {targetCategoryPapers.length > 4 && (
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Filter ${activeTab === 'All' ? 'papers' : activeTab} by title or year...`}
            className="w-full bg-white border border-slate-200 text-slate-800 text-xs rounded-lg pl-9 pr-4 py-2.5 placeholder:text-slate-400 focus:outline-none focus:border-[#0B1B3D] transition-colors"
          />
        </div>
      )}

      {/* Papers Grid */}
      {displayedPapers.length === 0 ? (
        <div className="border border-slate-200 bg-slate-50/50 p-10 rounded-lg flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
            <Inbox className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-slate-500">
            {searchQuery ? 'No matching papers found' : `No papers currently in ${activeTab}`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3">
          {displayedPapers.map((paper) => {
            const completedCount = Object.keys(progress.completedSets).filter((key) =>
              key.startsWith(paper.id)
            ).length;
            const category = getPaperCategory(paper);
            const totalSets = Math.ceil(paper.questions.length / 20);

            return (
              <div
                key={paper.id}
                onClick={() => onSelectPaper(paper.id)}
                id={`paper-card-${paper.id}`}
                className="group bg-white border border-slate-200 p-4 sm:p-5 rounded-lg hover:border-[#0B1B3D] hover:shadow-xs active:scale-[0.99] cursor-pointer transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    category === 'End of Year 2'
                      ? 'bg-amber-50 text-amber-800 border border-amber-200/60'
                      : 'bg-indigo-50 text-[#0B1B3D] border border-indigo-100/60'
                  }`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                        category === 'End of Year 2'
                          ? 'bg-amber-100/80 text-amber-900'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {category === 'End of Year 2' ? 'Year 2' : 'Year 1'}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                        {paper.year}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">
                        {paper.questions.length} MCQs · {totalSets} Sets
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
                      {completedCount}/{totalSets} Done
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
