/**
 * Mulwa Clinical Exam Portal
 * Session Storage & State Persistence Layer
 *
 * Handles progress synchronization, metric computations, mistake tracking,
 * and ephemeral browser session management.
 *
 * @author MULWA <martinmulwa95@gmail.com>
 * @version 1.0.0
 */

import { SessionProgress, ActivityLog, IncorrectQuestionRecord } from '../types';
import { PAST_PAPERS, findPaper } from '../data/questions';

/** Storage key specifically scoped for browser session lifecycle */
const SESSION_STORAGE_KEY = 'mulwa_clinical_portal_session_progress';

/**
 * Initial empty session state
 */
export const INITIAL_SESSION: SessionProgress = {
  completedSets: {},
  inProgressSets: {},
  bookmarkedQuestions: [],
  incorrectQuestions: []
};

/**
 * Generates an unambiguous composite key for a paper + set combination.
 * Uses a triple underscore delimiter to avoid collision with hyphenated paper IDs.
 *
 * @param paperId - ID of the past paper
 * @param setId - ID of the revision set (e.g. "set1")
 */
export function makeSetKey(paperId: string, setId: string): string {
  return `${paperId}___${setId}`;
}

/**
 * Parses a composite key back into its constituent paper ID and set ID.
 *
 * @param key - The raw composite key
 */
export function parseSetKey(key: string): { paperId: string; setId: string } {
  if (key.includes('___')) {
    const [pId, sId] = key.split('___');
    return { paperId: pId, setId: sId };
  }
  
  // Legacy fallback parser for previous hyphen formats
  const lastHyphenIndex = key.lastIndexOf('-set');
  if (lastHyphenIndex !== -1) {
    return {
      paperId: key.substring(0, lastHyphenIndex),
      setId: key.substring(lastHyphenIndex + 1)
    };
  }

  const lastDash = key.lastIndexOf('-');
  if (lastDash !== -1) {
    return {
      paperId: key.substring(0, lastDash),
      setId: key.substring(lastDash + 1)
    };
  }

  return { paperId: key, setId: 'set1' };
}

/**
 * Reconciles and dedupes incorrect answers recorded across active and completed revision sets.
 *
 * @param progress - Current session progress object
 */
export function syncIncorrectQuestions(progress: SessionProgress): IncorrectQuestionRecord[] {
  const map = new Map<string, IncorrectQuestionRecord>();
  
  // Retain existing registered mistakes
  (progress.incorrectQuestions || []).forEach(rec => {
    map.set(rec.questionId, rec);
  });

  // Scan in-progress sets for any questions answered incorrectly
  Object.entries(progress.inProgressSets || {}).forEach(([comboKey, state]) => {
    const { paperId, setId } = parseSetKey(comboKey);
    const paper = findPaper(paperId);
    if (!paper) return;

    Object.entries(state.answers || {}).forEach(([qId, ans]) => {
      const q = paper.questions.find(item => item.id === qId);
      if (q && q.correctAnswer !== ans) {
        if (!map.has(qId)) {
          map.set(qId, {
            id: `err_${paper.id}_${qId}`,
            questionId: qId,
            paperId: paper.id,
            setId,
            selectedAnswer: ans,
            timestamp: state.timestamp || new Date().toISOString()
          });
        }
      }
    });
  });

  return Array.from(map.values());
}

/**
 * Loads session progress from `window.sessionStorage`.
 * Progress persists across page reloads in the same tab, but resets when the tab or browser is closed.
 */
export function loadProgress(): SessionProgress {
  try {
    // Purge old persistent localStorage keys so stale data is never restored across browser sessions
    if (typeof window !== 'undefined' && window.localStorage) {
      [
        'mulwa_clinical_portal_progress',
        'mulwa_clinical_portal_progress_v1',
        'mulwa_clinical_portal_progress_v2',
        'mulwa_clinical_portal_progress_v3',
        'mulwa_clinical_portal_progress_v4'
      ].forEach(k => {
        try { window.localStorage.removeItem(k); } catch (_) {}
      });
    }

    if (typeof window !== 'undefined' && window.sessionStorage) {
      const data = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        const prog: SessionProgress = {
          completedSets: parsed.completedSets || {},
          inProgressSets: parsed.inProgressSets || {},
          bookmarkedQuestions: Array.isArray(parsed.bookmarkedQuestions) ? parsed.bookmarkedQuestions : [],
          incorrectQuestions: Array.isArray(parsed.incorrectQuestions) ? parsed.incorrectQuestions : []
        };
        prog.incorrectQuestions = syncIncorrectQuestions(prog);
        return prog;
      }
    }
  } catch (err) {
    console.error('Session progress read error:', err);
  }
  return INITIAL_SESSION;
}

/**
 * Persists the given session progress object to `window.sessionStorage`.
 *
 * @param progress - Current session progress state
 */
export function saveProgress(progress: SessionProgress): void {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(progress));
    }
  } catch (err) {
    console.error('Session progress write error:', err);
  }
}

/**
 * Completely resets all progress for the current session.
 */
export function resetProgress(): SessionProgress {
  try {
    if (typeof window !== 'undefined') {
      if (window.sessionStorage) {
        window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
      }
      if (window.localStorage) {
        [
          'mulwa_clinical_portal_progress',
          'mulwa_clinical_portal_progress_v1',
          'mulwa_clinical_portal_progress_v2',
          'mulwa_clinical_portal_progress_v3',
          'mulwa_clinical_portal_progress_v4'
        ].forEach(k => {
          try { window.localStorage.removeItem(k); } catch (_) {}
        });
      }
    }
  } catch (err) {
    console.error('Session progress clear error:', err);
  }
  return {
    completedSets: {},
    inProgressSets: {},
    bookmarkedQuestions: [],
    incorrectQuestions: []
  };
}

/**
 * Calculates the exact number of questions contained in a given set.
 *
 * @param paperId - Past paper ID
 * @param setId - Revision set ID (e.g., "set1")
 */
export function getSetTotalQuestions(paperId: string, setId: string): number {
  const paper = findPaper(paperId);
  if (!paper) return 20;
  const num = parseInt(setId.replace('set', ''), 10) || 1;
  const start = (num - 1) * 20;
  const end = Math.min(start + 20, paper.questions.length);
  return Math.max(1, end - start);
}

/**
 * Derives comprehensive session performance metrics (attempted, correct, accuracy percentage).
 *
 * @param progress - The current session progress
 */
export function getMetrics(progress: SessionProgress) {
  let questionsAnswered = 0;
  let correctAnswers = 0;

  // Aggregate stats from completed sets
  Object.entries(progress.completedSets || {}).forEach(([key, data]) => {
    const { paperId, setId } = parseSetKey(key);
    // If currently actively retaking in inProgressSets, count the active attempt instead
    if (progress.inProgressSets && progress.inProgressSets[key]) {
      return;
    }
    const total = getSetTotalQuestions(paperId, setId);
    questionsAnswered += total;
    correctAnswers += (data.score || 0);
  });

  // Aggregate stats from active in-progress sets
  Object.entries(progress.inProgressSets || {}).forEach(([key, state]) => {
    const { paperId } = parseSetKey(key);
    const paper = findPaper(paperId);
    const answeredCount = Object.keys(state.answers || {}).length;
    questionsAnswered += answeredCount;

    if (paper) {
      Object.entries(state.answers || {}).forEach(([qId, ans]) => {
        const q = paper.questions.find(item => item.id === qId);
        if (q && q.correctAnswer === ans) {
          correctAnswers += 1;
        }
      });
    }
  });

  const accuracy = questionsAnswered > 0 ? Math.round((correctAnswers / questionsAnswered) * 100) : 0;
  const setsCompletedCount = Object.keys(progress.completedSets || {}).length;

  return {
    questionsAnswered,
    correctAnswers,
    accuracy,
    setsCompletedCount
  };
}

/**
 * Builds chronological activity log entries for completed and active sets.
 *
 * @param progress - Current session progress
 */
export function getActivityLog(progress: SessionProgress): ActivityLog[] {
  const logs: ActivityLog[] = [];

  // Completed sets
  Object.entries(progress.completedSets || {}).forEach(([id, data]) => {
    const { paperId, setId } = parseSetKey(id);
    const paper = findPaper(paperId);
    const paperTitle = paper ? `${paper.year} · ${paper.title}` : 'End of Year 1 Exam (1)';
    const totalInSet = getSetTotalQuestions(paperId, setId);
    const scorePercentage = Math.round(((data.score || 0) / totalInSet) * 100);
    const setNum = parseInt(setId.replace('set', ''), 10) || 1;

    logs.push({
      id: `log-comp-${id}`,
      paperId: paper ? paper.id : paperId,
      setId,
      paperTitle,
      setName: `Set ${setNum}`,
      scoreText: `${data.score}/${totalInSet} (${scorePercentage}%)`,
      timestamp: data.date ? new Date(data.date).toLocaleDateString() : 'Completed'
    });
  });

  // In-progress sets
  Object.entries(progress.inProgressSets || {}).forEach(([id, state]) => {
    const { paperId, setId } = parseSetKey(id);
    const paper = findPaper(paperId);
    const paperTitle = paper ? `${paper.year} · ${paper.title}` : 'End of Year 1 Exam (1)';
    const totalInSet = getSetTotalQuestions(paperId, setId);
    const answeredCount = Object.keys(state.answers || {}).length;
    const pct = Math.round((answeredCount / totalInSet) * 100);
    const setNum = parseInt(setId.replace('set', ''), 10) || 1;

    logs.push({
      id: `log-ip-${id}`,
      paperId: paper ? paper.id : paperId,
      setId,
      paperTitle,
      setName: `Set ${setNum}`,
      scoreText: `${answeredCount}/${totalInSet} (${pct}%)`,
      timestamp: 'In Progress'
    });
  });

  return logs;
}
