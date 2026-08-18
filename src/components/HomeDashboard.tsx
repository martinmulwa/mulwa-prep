/**
 * Mulwa Clinical Exam Portal
 * Home Dashboard View
 *
 * Displays session-level analytics (questions attempted, correct count, accuracy rate),
 * an instant resume card for active revision sets, quick navigation, and recent activity logs.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import React, { useState } from 'react';
import { ChevronRight, Play, BookOpen, AlertCircle, CheckCircle2, Award, RotateCcw, Trash2, X } from 'lucide-react';
import { SessionProgress } from '../types';
import { getMetrics, getActivityLog, parseSetKey } from '../utils/storage';
import { PAST_PAPERS, findPaper } from '../data/questions';

interface HomeDashboardProps {
  /** Ephemeral session progress state */
  progress: SessionProgress;
  /** Tab navigation trigger */
  onNavigate: (tab: 'home' | 'papers' | 'review') => void;
  /** Resume or jump into a revision set */
  onContinueSet: (paperId: string, setId: string) => void;
  /** Reset session progress action */
  onClearProgress: () => void;
}

/**
 * Main overview dashboard providing rapid access to exam stats, mistake reviews, and practice sets.
 */
export default function HomeDashboard({ progress, onNavigate, onContinueSet, onClearProgress }: HomeDashboardProps) {
  const [showClearModal, setShowClearModal] = useState(false);
  const metrics = getMetrics(progress);
  const logs = getActivityLog(progress);

  // Determine the most recently updated in-progress set
  const inProgressList = Object.entries(progress.inProgressSets);
  let continuePaperId = PAST_PAPERS[0]?.id || 'eoy1-anatomy-physiology-2023';
  let continueSetId = 'set1';
  let continueText = 'Resume Practice';

  if (inProgressList.length > 0) {
    const sortedIP = inProgressList.sort((a, b) => new Date(b[1].timestamp).getTime() - new Date(a[1].timestamp).getTime());
    const [id, state] = sortedIP[0];
    const { paperId, setId } = parseSetKey(id);
    const paper = findPaper(paperId);
    continuePaperId = paper ? paper.id : paperId;
    continueSetId = setId;
    const setNum = parseInt(setId.replace('set', ''), 10) || 1;
    const qIndex = (state.currentQuestionIndex || 0) + 1;
    continueText = `${paper ? paper.year : '2023'} · Set ${setNum} · Q${qIndex}`;
  }

  const hasAnyProgress = 
    metrics.questionsAnswered > 0 || 
    inProgressList.length > 0 || 
    Object.keys(progress.completedSets).length > 0 || 
    progress.incorrectQuestions.length > 0;

  const handleConfirmClear = () => {
    onClearProgress();
    setShowClearModal(false);
  };

  return (
    <div className="space-y-6" id="screen-home-dashboard">
      
      {/* Session Metrics Grid */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5" id="session-metrics-grid">
        
        {/* Attempted */}
        <div className="p-3 sm:p-4 bg-white border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
          <div className="w-7 h-7 sm:w-9 sm:h-9 bg-indigo-50 text-[#0B1B3D] flex items-center justify-center shrink-0 rounded-lg">
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.5} />
          </div>
          <div className="min-w-0">
            <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate">Attempted</p>
            <p className="text-base sm:text-xl font-black text-[#0B1B3D] leading-none mt-0.5">{metrics.questionsAnswered}</p>
          </div>
        </div>

        {/* Correct */}
        <div className="p-3 sm:p-4 bg-white border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
          <div className="w-7 h-7 sm:w-9 sm:h-9 bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 rounded-lg">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.5} />
          </div>
          <div className="min-w-0">
            <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate">Correct</p>
            <p className="text-base sm:text-xl font-black text-[#0B1B3D] leading-none mt-0.5">{metrics.correctAnswers}</p>
          </div>
        </div>

        {/* Accuracy */}
        <div className="p-3 sm:p-4 bg-white border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
          <div className="w-7 h-7 sm:w-9 sm:h-9 bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 rounded-lg">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.5} />
          </div>
          <div className="min-w-0">
            <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate">Accuracy</p>
            <p className="text-base sm:text-xl font-black text-[#0B1B3D] leading-none mt-0.5">{metrics.accuracy}%</p>
          </div>
        </div>

      </div>

      {/* Quick Resume Card */}
      {inProgressList.length > 0 && (
        <button
          onClick={() => onContinueSet(continuePaperId, continueSetId)}
          className="w-full bg-[#0B1B3D] text-left p-4 sm:p-5 flex justify-between items-center rounded-lg group transition-all hover:bg-[#162f5f] focus:outline-none"
          id="continue-revision-card"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-white">
              <Play className="w-4 h-4 fill-white" />
            </div>
            <div className="min-w-0">
              <h4 className="text-white font-black text-xs uppercase tracking-wider truncate">Resume Practice</h4>
              <p className="text-indigo-200 text-xs mt-0.5 font-semibold truncate">{continueText}</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-indigo-300 group-hover:text-white transition-colors shrink-0 ml-2" strokeWidth={2.5} />
        </button>
      )}

      {/* Quick Access Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        
        {/* Past Papers Library Tile */}
        <button
          onClick={() => onNavigate('papers')}
          className="bg-white rounded-lg border border-slate-200 hover:border-[#0B1B3D] p-4 sm:p-5 flex justify-between items-center transition-all text-left group"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-9 h-9 bg-indigo-50 flex items-center justify-center text-[#0B1B3D] rounded-lg shrink-0">
              <BookOpen className="w-4 h-4" strokeWidth={2.5} />
            </div>
            <div className="min-w-0">
              <h4 className="font-extrabold text-xs text-[#0B1B3D] uppercase tracking-wider truncate">Past Papers</h4>
              <p className="text-xs text-slate-400 mt-0.5 font-semibold truncate">Official exam archive</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0B1B3D] transition-colors shrink-0 ml-2" strokeWidth={2.5} />
        </button>

        {/* Mistakes Review Queue Tile */}
        <button
          onClick={() => onNavigate('review')}
          className="bg-white rounded-lg border border-slate-200 hover:border-[#0B1B3D] p-4 sm:p-5 flex justify-between items-center transition-all text-left group"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-9 h-9 bg-rose-50 flex items-center justify-center text-rose-700 rounded-lg shrink-0">
              <AlertCircle className="w-4 h-4" strokeWidth={2.5} />
            </div>
            <div className="min-w-0">
              <h4 className="font-extrabold text-xs text-[#0B1B3D] uppercase tracking-wider truncate">Mistakes</h4>
              <p className="text-xs text-slate-400 mt-0.5 font-semibold truncate">Questions to review</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 ml-2">
            <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg border ${
              progress.incorrectQuestions.length > 0
                ? 'bg-rose-50 text-rose-800 border-rose-200'
                : 'bg-slate-50 text-slate-600 border-slate-200'
            }`}>
              {progress.incorrectQuestions.length}
            </span>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0B1B3D] transition-colors" strokeWidth={2.5} />
          </div>
        </button>

      </div>

      {/* Activity Log Section */}
      <div className="space-y-3 pt-2" id="section-recent-activity">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Activity Log</h3>
          
          {hasAnyProgress && (
            <button
              onClick={() => setShowClearModal(true)}
              className="flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-rose-600 transition-colors"
              id="clear-progress-btn"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear Progress</span>
            </button>
          )}
        </div>

        {logs.length > 0 ? (
          <div className="border border-slate-200 rounded-lg divide-y divide-slate-200 overflow-hidden bg-white">
            {logs.slice(0, 4).map((log) => (
              <button
                key={log.id}
                onClick={() => onContinueSet(log.paperId, log.setId)}
                className="w-full p-3.5 sm:p-4 flex justify-between items-center hover:bg-slate-50 transition-colors text-left"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-7 h-7 bg-slate-100 flex items-center justify-center text-[#0B1B3D] rounded-lg shrink-0">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-xs font-bold text-slate-900 truncate">{log.paperTitle} – {log.setName}</h5>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-semibold">{log.timestamp}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg border ${
                    log.scoreText.includes('%') && !log.scoreText.includes('In Progress')
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                      : 'bg-amber-50 text-amber-800 border-amber-100'
                  }`}>
                    {log.scoreText}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" strokeWidth={2.5} />
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="border border-slate-200 p-6 sm:p-8 text-center rounded-lg bg-slate-50/50">
            <button
              onClick={() => onNavigate('papers')}
              className="w-11 h-11 mx-auto bg-[#0B1B3D] text-white flex items-center justify-center rounded-lg hover:bg-[#162f5f] transition-all active:scale-95"
              title="Start Practicing"
            >
              <Play className="w-5 h-5 fill-white ml-0.5" />
            </button>
            <p className="text-xs font-bold text-slate-500 mt-3">Select a paper to start practicing</p>
          </div>
        )}
      </div>

      {/* Confirmation Modal for Resetting Session Progress */}
      {showClearModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 max-w-sm w-full shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
                <Trash2 className="w-5 h-5" />
              </div>
              <button
                onClick={() => setShowClearModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900">Clear Session Progress?</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                This will reset all questions attempted, active sets, completed scores, and mistake review lists for this session.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setShowClearModal(false)}
                className="flex-1 px-4 py-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmClear}
                className="flex-1 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
