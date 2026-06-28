'use client';

import React, { useState } from 'react';
import { chaptersData } from '../data/chaptersData';
import { useProgress } from '../context/ProgressContext';
import { CourseViewer } from './CourseViewer';
import { ExamSimulator } from './ExamSimulator';
import { StatsDashboard } from './StatsDashboard';
import { GlossarySearch } from './GlossarySearch';
import { QuizEngine } from './QuizEngine';
import { soundManager } from './SoundManager';
import { ReviewsView } from './ReviewsView';
import { 
  BookOpen, Trophy, Search, Flame, Zap, CheckCircle, ShieldAlert, 
  HelpCircle, Volume2, VolumeX, Award, Calendar, MessageSquare
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { stats, favorites, toggleSound } = useProgress();
  const [activeView, setActiveView] = useState<'home' | 'chapter' | 'exam' | 'stats' | 'search' | 'quiz-select' | 'reviews'>('home');
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [soundOn, setSoundOn] = useState(soundManager.isEnabled());
  
  // Custom standalone quiz setup states
  const [quizChapterId, setQuizChapterId] = useState<string>('all');
  const [quizDifficulty, setQuizDifficulty] = useState<'easy' | 'medium' | 'hard' | 'expert'>('easy');
  const [quizActive, setQuizActive] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const masteredCount = chaptersData.filter(ch => stats.masteredChapters.includes(ch.slug)).length;
  const progressPercent = Math.round((masteredCount / chaptersData.length) * 100) || 0;

  const activeChapter = chaptersData.find((c) => c.id === selectedChapterId);

  const handleOpenChapter = (id: string) => {
    soundManager.playClick();
    setSelectedChapterId(id);
    setActiveView('chapter');
  };

  const handleToggleSound = () => {
    const next = toggleSound();
    setSoundOn(next);
    soundManager.playClick();
  };

  const handleNavigateToChapter = (slug: string, tab?: string) => {
    const chapter = chaptersData.find((c) => c.slug === slug);
    if (chapter) {
      setSelectedChapterId(chapter.id);
      setActiveView('chapter');
      // If we need to set the tab, we could pass it or just let the viewer handle defaults.
    }
  };

  // Daily quest progress summary
  const dailyQuests = [
    { label: 'Faire 1 quiz', completed: stats.dailyQuestProgress.quizDone, reward: '+100 XP' },
    { label: 'Révéler 1 flashcard', completed: stats.dailyQuestProgress.flashcardsDone, reward: '+50 XP' },
    { label: 'Gagner 50 XP aujourd\'hui', completed: stats.dailyQuestProgress.xpEarned >= 50, reward: '+50 XP' }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-850 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div 
            onClick={() => { soundManager.playClick(); setActiveView('home'); }}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <span className="text-2xl">🎓</span>
            <span className="font-black text-base md:text-lg bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Brevet Histoire-Géo 3e
            </span>
          </div>

          {/* Quick stats on Navbar */}
          <div className="flex items-center gap-4">
            {/* Streak */}
            <div className="flex items-center gap-1 bg-orange-50 dark:bg-orange-950/20 text-orange-600 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
              <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
              <span>{stats.streak} {stats.streak > 1 ? 'Jours' : 'Jour'}</span>
            </div>

            {/* Level and XP */}
            <div className="flex items-center gap-1.5 bg-violet-50 dark:bg-violet-950/20 text-violet-700 dark:text-violet-400 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
              <Zap className="w-4 h-4 text-violet-500 fill-violet-500 animate-pulse" />
              <span>Niv. {stats.level} • {stats.xp} XP</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={handleToggleSound}
              className="p-2 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-550 dark:text-slate-400 border border-slate-200/50 dark:border-slate-850 rounded-full transition-all duration-150"
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto py-8 px-6">
        
        {/* Navigation Sidebar/Top tabs */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => { soundManager.playClick(); setActiveView('home'); }}
            className={`py-2 px-5 font-bold text-xs rounded-full border transition-all duration-150 flex items-center gap-1.5 ${
              activeView === 'home' || activeView === 'chapter'
                ? 'bg-blue-600 border-transparent text-white shadow-md shadow-blue-500/10'
                : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Chapitres</span>
          </button>
          <button
            onClick={() => { soundManager.playClick(); setQuizActive(false); setActiveView('quiz-select'); }}
            className={`py-2 px-5 font-bold text-xs rounded-full border transition-all duration-150 flex items-center gap-1.5 ${
              activeView === 'quiz-select'
                ? 'bg-blue-600 border-transparent text-white shadow-md shadow-blue-500/10'
                : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Quiz Interactifs</span>
          </button>
          <button
            onClick={() => { soundManager.playClick(); setActiveView('exam'); }}
            className={`py-2 px-5 font-bold text-xs rounded-full border transition-all duration-150 flex items-center gap-1.5 ${
              activeView === 'exam'
                ? 'bg-blue-600 border-transparent text-white shadow-md shadow-blue-500/10'
                : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Mode Examen</span>
          </button>
          <button
            onClick={() => { soundManager.playClick(); setActiveView('stats'); }}
            className={`py-2 px-5 font-bold text-xs rounded-full border transition-all duration-150 flex items-center gap-1.5 ${
              activeView === 'stats'
                ? 'bg-blue-600 border-transparent text-white shadow-md shadow-blue-500/10'
                : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Mon Bilan</span>
          </button>
          <button
            onClick={() => { soundManager.playClick(); setActiveView('search'); }}
            className={`py-2 px-5 font-bold text-xs rounded-full border transition-all duration-150 flex items-center gap-1.5 ${
              activeView === 'search'
                ? 'bg-blue-600 border-transparent text-white shadow-md shadow-blue-500/10'
                : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Glossaire</span>
          </button>
          <button
            onClick={() => { soundManager.playClick(); setActiveView('reviews'); }}
            className={`py-2 px-5 font-bold text-xs rounded-full border transition-all duration-150 flex items-center gap-1.5 ${
              activeView === 'reviews'
                ? 'bg-blue-600 border-transparent text-white shadow-md shadow-blue-500/10'
                : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Avis</span>
          </button>
        </div>

        {/* Views Router */}
        {activeView === 'home' && (
          <div className="space-y-12">
            
            {/* Hero Introduction banner */}
            <div className="bg-gradient-to-br from-blue-600 to-violet-650 text-white rounded-3xl p-8 shadow-xl shadow-blue-600/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:text-left text-center">
              {/* Backglow decoratives */}
              <div className="absolute right-0 bottom-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mb-20" />
              <div className="absolute left-10 top-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="flex-1 space-y-4 relative z-10">
                <span className="inline-block px-3 py-1 bg-white/20 text-white font-extrabold text-[10px] rounded-full uppercase tracking-widest">
                  Brevet d&apos;Histoire-Géographie
                </span>
                <h1 className="text-3xl md:text-4xl font-black leading-tight">
                  Révisions Brevet Histoire-Géo
                </h1>
                <p className="text-sm md:text-base text-blue-100 font-semibold max-w-md">
                  Révise intelligemment, maîtrise tes chapitres d&apos;histoire et de géographie et réussis ton Brevet des collèges.
                </p>
                <button
                  onClick={() => handleOpenChapter('ch1')}
                  className="py-3 px-6 bg-white hover:bg-slate-50 text-blue-700 font-black rounded-2xl shadow-lg transition-all duration-200"
                >
                  Commencer les révisions
                </button>
              </div>

              {/* Graphic icon or character illustration mock */}
              <div className="w-32 h-32 bg-white/10 text-white rounded-3xl flex items-center justify-center text-6xl shadow-inner relative z-10 animate-bounce">
                🎓
              </div>
            </div>

            {/* Daily Quests Panel */}
            <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <Calendar className="w-5 h-5 text-violet-500" />
                <h3 className="font-extrabold text-slate-850 dark:text-slate-100 text-sm md:text-base">
                  Objectifs du Jour (Quêtes quotidiennes)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {dailyQuests.map((quest, i) => (
                  <div 
                    key={i}
                    className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
                      quest.completed
                        ? 'bg-green-50/50 border-green-200 dark:bg-green-950/20 dark:border-green-800'
                        : 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800'
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] font-bold block mb-1 uppercase tracking-wider ${
                        quest.completed ? 'text-green-600' : 'text-slate-400'
                      }`}>
                        {quest.completed ? 'Terminé' : 'En cours'}
                      </span>
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-350">
                        {quest.label}
                      </span>
                    </div>
                    <span className="text-xs font-black text-violet-600 dark:text-violet-400">{quest.reward}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Search and Progress Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
              {/* Search Bar */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                  Rechercher un chapitre
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-sm">
                    🔍
                  </span>
                  <input
                    type="text"
                    placeholder="Ex: Première guerre, mondialisation, Ve République..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-550 transition-all duration-150"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-bold text-slate-400 hover:text-slate-650 dark:hover:text-slate-200"
                    >
                      Effacer
                    </button>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2 flex flex-col justify-center">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-500 dark:text-slate-400">Progression des révisions</span>
                  <span className="text-blue-600 dark:text-blue-400">{progressPercent}% maîtrisé ({masteredCount} / {chaptersData.length} ch.)</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-850 h-3.5 rounded-full overflow-hidden p-0.5 border border-slate-200/30 dark:border-slate-800">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-violet-600 h-full rounded-full transition-all duration-500 shadow-md shadow-blue-500/20"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Chapters Grid - grouped by subject */}
            {(['histoire', 'geographie'] as const).map((subject) => {
              const filteredChapters = chaptersData.filter(ch => {
                const matchesSubject = ch.subject === subject;
                const matchesSearch = searchQuery === '' || 
                  ch.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  ch.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  ch.introduction.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesSubject && matchesSearch;
              });
              if (filteredChapters.length === 0) return null;
              const isHist = subject === 'histoire';
              return (
                <div key={subject} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl`}>{isHist ? '📜' : '🌍'}</span>
                    <h3 className="font-black text-slate-850 dark:text-slate-100 text-lg md:text-xl">
                      {isHist ? 'Histoire' : 'Géographie'}
                    </h3>
                    <span className={`px-2.5 py-0.5 font-extrabold text-[10px] rounded-full uppercase tracking-wider ${
                      isHist
                        ? 'bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400'
                        : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400'
                    }`}>
                      {filteredChapters.length} {filteredChapters.length > 1 ? 'chapitres' : 'chapitre'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredChapters.map((ch) => {
                      const isMastered = stats.masteredChapters.includes(ch.slug);
                      const isWeak = stats.weakChapters.includes(ch.slug);
                      const isFav = favorites.includes(ch.slug);

                      return (
                        <div
                          key={ch.id}
                          onClick={() => handleOpenChapter(ch.id)}
                          className="group cursor-pointer bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 flex flex-col justify-between"
                        >
                          <div>
                            {/* Tags */}
                            <div className="flex items-center justify-between mb-4">
                              <span className={`px-2.5 py-0.5 font-extrabold text-[10px] rounded-full uppercase tracking-wider ${
                                isHist
                                  ? 'bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400'
                                  : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400'
                              }`}>
                                {isHist ? 'Histoire' : 'Géo'} {ch.number}
                              </span>
                              
                              {/* Favorite/Status Badge */}
                              <div className="flex items-center gap-1.5">
                                {isFav && <span className="text-xs">⭐</span>}
                                {isMastered && (
                                  <span className="px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-950/40 dark:text-green-300 font-bold text-[9px] rounded flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3 text-green-600" /> Maîtrisé
                                  </span>
                                )}
                                {isWeak && (
                                  <span className="px-2 py-0.5 bg-orange-100 text-orange-850 dark:bg-orange-950/40 dark:text-orange-300 font-bold text-[9px] rounded flex items-center gap-1 animate-pulse">
                                    <ShieldAlert className="w-3 h-3 text-orange-650 animate-bounce" /> À réviser
                                  </span>
                                )}
                              </div>
                            </div>

                            <h4 className="font-extrabold text-slate-850 dark:text-slate-100 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150 leading-tight">
                              {ch.title}
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 mb-4 block">
                              {ch.subtitle}
                            </p>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                              {ch.introduction}
                            </p>
                          </div>

                          {/* Explore Action Link */}
                          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                              {ch.questions.length} questions • {ch.flashcards.length} flashcards
                            </span>
                            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:underline flex items-center gap-1">
                              Réviser ➔
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* ⭐ CTA Avis — Laisse-nous ton ressenti */}
            <div
              onClick={() => { soundManager.playClick(); setActiveView('reviews'); }}
              className="cursor-pointer group relative overflow-hidden rounded-3xl border border-amber-200 dark:border-amber-800/50 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/30 dark:via-orange-950/20 dark:to-yellow-950/20 p-6 shadow-sm hover:shadow-lg hover:shadow-amber-200/40 dark:hover:shadow-amber-900/20 transition-all duration-300"
            >
              {/* Glow décoratif */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-amber-300/20 dark:bg-amber-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-300/20 dark:bg-yellow-500/10 rounded-full blur-2xl" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Texte */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-amber-400/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    ⭐
                  </div>
                  <div>
                    <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-0.5">Ton avis compte</p>
                    <h3 className="font-black text-slate-850 dark:text-slate-100 text-base md:text-lg leading-tight">
                      Laisse-nous un avis !
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                      Dis-nous ce que tu penses du site — ça aide vraiment 🙏
                    </p>
                  </div>
                </div>

                {/* Étoiles + bouton */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} className="text-amber-400 text-xl">★</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-black rounded-2xl shadow-md shadow-amber-500/30 group-hover:shadow-amber-400/50 transition-all duration-200">
                    Donner mon avis ➔
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeView === 'chapter' && activeChapter && (
          <CourseViewer
            chapter={activeChapter}
            onBack={() => setActiveView('home')}
          />
        )}

        {activeView === 'exam' && (
          <ExamSimulator onClose={() => setActiveView('home')} />
        )}

        {activeView === 'stats' && (
          <StatsDashboard />
        )}

        {activeView === 'search' && (
          <GlossarySearch 
            chapters={chaptersData} 
            onNavigateToChapter={handleNavigateToChapter}
          />
        )}



        {activeView === 'quiz-select' && (
          <div>
            {quizActive ? (
              <QuizEngine
                chapter={
                  quizChapterId === 'all'
                    ? {
                        id: 'all-mixed',
                        slug: 'all-mixed',
                        number: 0,
                        subject: 'histoire' as const,
                        title: 'Tous les Chapitres',
                        subtitle: 'Quiz général sur le programme d\'histoire-géographie',
                        introduction: 'Répondez à des questions mixtes sur toutes les thématiques.',
                        courseContent: '',
                        summary: '',
                        timeline: [],
                        mindMap: [],
                        characters: [],
                        dates: [],
                        flashcards: [],
                        questions: chaptersData.flatMap((c) => c.questions),
                        anecdotes: []
                      }
                    : chaptersData.find((c) => c.id === quizChapterId)!
                }
                difficulty={quizDifficulty}
                onClose={() => setQuizActive(false)}
              />
            ) : (
              <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm max-w-md mx-auto text-center">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-8 h-8 animate-bounce" />
                </div>
                <h2 className="text-2xl font-black text-slate-850 dark:text-slate-100 mb-2">
                  Entraînement Quiz
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Sélectionnez un chapitre et le niveau de difficulté pour vous évaluer.
                </p>

                <div className="text-left space-y-4 mb-6">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
                      Sélectionner le chapitre
                    </label>
                    <select
                      value={quizChapterId}
                      onChange={(e) => setQuizChapterId(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl py-3 px-4 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">Tous les chapitres mélangés</option>
                      <optgroup label="📜 Histoire">
                        {chaptersData.filter(ch => ch.subject === 'histoire').map((ch) => (
                          <option key={ch.id} value={ch.id}>
                            H{ch.number} - {ch.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="🌍 Géographie">
                        {chaptersData.filter(ch => ch.subject === 'geographie').map((ch) => (
                          <option key={ch.id} value={ch.id}>
                            G{ch.number} - {ch.title}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
                      Choisir la difficulté
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {(['easy', 'medium', 'hard', 'expert'] as const).map((diff) => (
                        <button
                          key={diff}
                          onClick={() => { soundManager.playClick(); setQuizDifficulty(diff); }}
                          className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all duration-150 capitalize ${
                            quizDifficulty === diff
                              ? 'bg-blue-600 border-transparent text-white shadow-md shadow-blue-500/10'
                              : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-355 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          {{ easy: 'Facile', medium: 'Moyen', hard: 'Difficile', expert: 'Expert' }[diff]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => { soundManager.playClick(); setQuizActive(true); }}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-750 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all duration-200"
                >
                  Lancer le Quiz
                </button>
              </div>
            )}
          </div>
        )}

        {activeView === 'reviews' && (
          <ReviewsView />
        )}

      </main>
    </div>
  );
};
