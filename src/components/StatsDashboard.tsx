'use client';

import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { Award, Flame, Calendar, Trophy, Zap, AlertTriangle, CheckCircle, FileText, RefreshCw } from 'lucide-react';
import { soundManager } from './SoundManager';

export const StatsDashboard: React.FC = () => {
  const { stats, badges, resetProgress } = useProgress();

  const level = stats.level;
  const xp = stats.xp;
  const xpForCurrentLevel = (level - 1) * 250;
  const xpForNextLevel = level * 250;
  const levelProgressPercent = Math.min(100, Math.max(0, ((xp - xpForCurrentLevel) / 250) * 100));

  const totalStudyMinutes = Math.round(stats.quizTime / 60);

  // Local leaderboard mock data
  const leaderboard = [
    { name: 'Thomas', xp: 1250, rank: 1, avatar: '👨‍🎓' },
    { name: 'Sarah', xp: 1080, rank: 2, avatar: '👩‍🎓' },
    { name: 'Vous', xp: stats.xp, rank: stats.xp >= 1250 ? 1 : stats.xp >= 1080 ? 2 : 3, avatar: '🦊', isUser: true },
    { name: 'Marie', xp: 620, rank: stats.xp >= 620 ? 4 : 3, avatar: '👩‍🎓' },
    { name: 'Antoine', xp: 450, rank: stats.xp >= 450 ? 5 : 4, avatar: '👨‍🎓' },
  ].sort((a, b) => b.xp - a.xp).map((item, index) => ({ ...item, rank: index + 1 }));

  const handleExportPDF = () => {
    soundManager.playClick();
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleReset = () => {
    if (confirm('Voulez-vous vraiment réinitialiser toute votre progression ? Cette action est irréversible.')) {
      soundManager.playFailure();
      resetProgress();
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto py-6 px-4 print:p-0">
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 print:grid-cols-4">
        {/* XP & Level */}
        <div className="bg-white dark:bg-slate-950 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3.5 bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 rounded-2xl">
            <Zap className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block">Progression</span>
            <span className="text-xl font-black text-slate-800 dark:text-slate-100">Niveau {level}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">{xp} XP au total</span>
          </div>
        </div>

        {/* Streak */}
        <div className="bg-white dark:bg-slate-950 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3.5 bg-orange-50 dark:bg-orange-950/30 text-orange-500 rounded-2xl">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block">Série Active</span>
            <span className="text-xl font-black text-slate-800 dark:text-slate-100">{stats.streak} {stats.streak > 1 ? 'Jours' : 'Jour'}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">Série en cours</span>
          </div>
        </div>

        {/* Time Spent */}
        <div className="bg-white dark:bg-slate-950 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3.5 bg-blue-50 dark:bg-blue-950/30 text-blue-500 rounded-2xl">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block">Temps de révision</span>
            <span className="text-xl font-black text-slate-800 dark:text-slate-100">{totalStudyMinutes} Min</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">{stats.quizzesCompleted} quiz complétés</span>
          </div>
        </div>

        {/* Success Rate */}
        <div className="bg-white dark:bg-slate-950 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="p-3.5 bg-green-50 dark:bg-green-950/30 text-green-550 rounded-2xl">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block">Taux de réussite</span>
            <span className="text-xl font-black text-slate-800 dark:text-slate-100">{stats.successRate}%</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">Moyenne générale</span>
          </div>
        </div>
      </div>

      {/* Level progression bar */}
      <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm print:hidden">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Progression vers le niveau {level + 1}</span>
          <span className="text-xs font-bold text-violet-600 dark:text-violet-400">{xpProgressInLevel(xp)} / 250 XP</span>
        </div>
        <div className="w-full h-3.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-violet-650 transition-all duration-300 rounded-full"
            style={{ width: `${levelProgressPercent}%` }}
          />
        </div>
      </div>

      {/* Strength & Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mastered */}
        <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold text-slate-850 dark:text-slate-100 uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <CheckCircle className="w-4.5 h-4.5 text-green-500" />
            Chapitres Maîtrisés ({stats.masteredChapters.length})
          </h3>
          {stats.masteredChapters.length > 0 ? (
            <div className="space-y-2.5">
              {stats.masteredChapters.map((slug) => (
                <div key={slug} className="p-3 bg-green-50 dark:bg-green-950/20 text-green-800 dark:text-green-300 rounded-xl text-xs font-bold capitalize">
                  {slug.replace(/-/g, ' ')}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-450 dark:text-slate-500">Obtenez un score de 16/20 ou plus à un quiz pour maîtriser un chapitre.</p>
          )}
        </div>

        {/* Weaknesses */}
        <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold text-slate-850 dark:text-slate-100 uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <AlertTriangle className="w-4.5 h-4.5 text-orange-500" />
            Points à travailler ({stats.weakChapters.length})
          </h3>
          {stats.weakChapters.length > 0 ? (
            <div className="space-y-2.5">
              {stats.weakChapters.map((slug) => (
                <div key={slug} className="p-3 bg-orange-50/50 dark:bg-orange-950/20 text-orange-705 dark:text-orange-300 rounded-xl text-xs font-bold capitalize">
                  {slug.replace(/-/g, ' ')}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-450 dark:text-slate-500">Aucun point faible identifié. Bon travail !</p>
          )}
        </div>
      </div>

      {/* Badges section */}
      <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <h3 className="text-sm font-bold text-slate-850 dark:text-slate-100 uppercase tracking-wider mb-6 flex items-center gap-1.5">
          <Trophy className="w-4.5 h-4.5 text-blue-500" />
          Badges & Récompenses ({stats.badges.length} / {badges.length})
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {badges.map((badge) => {
            const isUnlocked = stats.badges.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border text-center flex flex-col items-center justify-center transition-all duration-200 ${
                  isUnlocked
                    ? 'bg-slate-50 dark:bg-slate-900 border-slate-200/50 dark:border-slate-800'
                    : 'bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-900 opacity-40 grayscale select-none'
                }`}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <h4 className="font-bold text-xs text-slate-800 dark:text-slate-150 mb-0.5">{badge.title}</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-450 leading-tight">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm max-w-md mx-auto print:hidden">
        <h3 className="text-sm font-bold text-slate-850 dark:text-slate-100 uppercase tracking-wider mb-4 flex items-center gap-1.5 justify-center">
          <Trophy className="w-4.5 h-4.5 text-yellow-500" />
          Classement local (3ème C)
        </h3>
        
        <div className="space-y-2">
          {leaderboard.map((user) => (
            <div
              key={user.name}
              className={`flex items-center justify-between p-3 rounded-2xl border ${
                user.isUser
                  ? 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800'
                  : 'bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 w-4">{user.rank}.</span>
                <span className="text-lg">{user.avatar}</span>
                <span className={`text-xs font-bold ${user.isUser ? 'text-blue-700 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>
                  {user.name} {user.isUser && '(Vous)'}
                </span>
              </div>
              <span className="text-xs font-extrabold text-slate-800 dark:text-slate-100">
                {user.xp} XP
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Controls / Print */}
      <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-850 pt-6 print:hidden">
        <button
          onClick={handleReset}
          className="py-2.5 px-4 text-xs font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-all duration-150 flex items-center gap-1"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Réinitialiser mes données
        </button>
        <button
          onClick={handleExportPDF}
          className="py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md text-xs flex items-center gap-1.5 transition-all duration-150"
        >
          <FileText className="w-3.5 h-3.5" /> Exporter mon Bilan (PDF)
        </button>
      </div>

    </div>
  );
};

// Helper for sub-level math
function xpProgressInLevel(xp: number): number {
  return xp % 250;
}
