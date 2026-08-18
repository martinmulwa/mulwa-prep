/**
 * Mulwa Clinical Exam Portal
 * Revision Set Results Screen
 *
 * Summarizes the score, accuracy percentage, time elapsed, and provides actionable pathways
 * (mistake review queue, set retries, advancing to the next set, or returning to dashboard).
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import React from 'react';
import { Award, Clock, ArrowRight, RotateCcw, Home, AlertCircle } from 'lucide-react';

interface ResultsScreenProps {
  /** Final score achieved in the set */
  score: number;
  /** Total number of questions in the set */
  totalQuestions: number;
  /** Duration taken in seconds */
  timeTakenSeconds: number;
  /** Trigger to open incorrect answers review */
  onReviewIncorrect: () => void;
  /** Restart the current set */
  onRetry: () => void;
  /** Advance to the next sequential set */
  onNextSet: () => void;
  /** Return to home dashboard */
  onGoToHome: () => void;
  /** Paper year display string */
  paperYear: string;
  /** Set name display string */
  setName: string;
}

/**
 * Scorecard component displayed upon completing a 20-question practice set.
 */
export default function ResultsScreen({
  score,
  totalQuestions,
  timeTakenSeconds,
  onReviewIncorrect,
  onRetry,
  onNextSet,
  onGoToHome
}: ResultsScreenProps) {
  const accuracy = Math.round((score / totalQuestions) * 100);

  const mins = Math.floor(timeTakenSeconds / 60);
  const secs = timeTakenSeconds % 60;
  const timeStr = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

  return (
    <div className="space-y-6 text-center max-w-sm mx-auto py-4" id="screen-results">
      
      {/* Performance Badge */}
      <div className="w-12 h-12 bg-indigo-50 text-[#0B1B3D] border border-indigo-100 flex items-center justify-center mx-auto rounded-lg">
        <Award className="w-6 h-6" strokeWidth={2.5} />
      </div>

      <div>
        <h2 className="text-lg font-black tracking-tight uppercase text-[#0B1B3D]">
          {accuracy >= 80 ? 'Excellent' : accuracy >= 60 ? 'Completed' : 'Review Needed'}
        </h2>
      </div>

      {/* Stats Summary Cards */}
      <div className="border border-slate-200 divide-y divide-slate-200 bg-slate-50/50 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-slate-200">
          <div className="p-4 bg-white">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Score</span>
            <p className="text-xl font-black text-[#0B1B3D] mt-1">{score} / {totalQuestions}</p>
          </div>
          <div className="p-4 bg-white">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Accuracy</span>
            <p className="text-xl font-black text-[#0B1B3D] mt-1">{accuracy}%</p>
          </div>
        </div>
        <div className="p-3 bg-white flex items-center justify-center gap-1.5 text-slate-500 text-xs font-bold">
          <Clock className="w-3.5 h-3.5" />
          <span>{timeStr}</span>
        </div>
      </div>

      {/* Action Controls */}
      <div className="space-y-3 pt-2">
        
        {score < totalQuestions && (
          <button
            onClick={onReviewIncorrect}
            className="w-full bg-[#0B1B3D] hover:bg-[#162f5f] text-white font-black text-xs py-3 px-4 rounded-lg uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all"
            id="results-review-mistakes-button"
            title="Review Mistakes"
          >
            <AlertCircle className="w-4 h-4" />
            <span>Review Mistakes ({totalQuestions - score})</span>
          </button>
        )}

        {/* Primary Action Button Row */}
        <div className="grid grid-cols-3 gap-2.5">
          <button
            onClick={onGoToHome}
            className="p-3 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg flex items-center justify-center transition-all active:scale-95"
            title="Dashboard"
          >
            <Home className="w-5 h-5" />
          </button>

          <button
            onClick={onRetry}
            className="p-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-lg flex items-center justify-center transition-all active:scale-95"
            title="Retry Set"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <button
            onClick={onNextSet}
            className="p-3 bg-[#0B1B3D] hover:bg-[#162f5f] text-white rounded-lg flex items-center justify-center transition-all active:scale-95"
            title="Next Set"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </div>
  );
}
