import React, { useState, useEffect } from 'react';
import { Chapter } from '../types';
import { TimelineView } from './TimelineView';
import { MindMap } from './MindMap';
import { FlashcardDeck } from './FlashcardDeck';
import { QuizEngine } from './QuizEngine';
import { soundManager } from './SoundManager';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, BookOpen, FileText, Network, Calendar, Users, Clock, 
  Sparkles, AlertCircle, BookMarked, HelpCircle as HelpIcon,
  Volume2, VolumeX, Printer, LucideIcon
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

interface CourseViewerProps {
  chapter: Chapter;
  onBack: () => void;
}

type TabType = 'cours' | 'resume' | 'mindmap' | 'timeline' | 'characters' | 'dates' | 'flashcards' | 'quiz';

export const CourseViewer: React.FC<CourseViewerProps> = ({ chapter, onBack }) => {
  const [activeTab, setActiveTab] = useState<TabType>('cours');
  const { favorites, toggleFavorite } = useProgress();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const isFavorited = favorites.includes(chapter.slug);

  useEffect(() => {
    // Stop speaking when changing tabs or unmounting
    return () => {
      if (typeof window !== 'undefined') {
        window.speechSynthesis.cancel();
      }
    };
  }, [activeTab]);

  const speakText = (text: string) => {
    if (typeof window === 'undefined') return;
    
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    // Remove HTML tags for reading
    const cleanText = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'fr-FR';
    utterance.rate = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (typeof window !== 'undefined') {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const tabs: { id: TabType; label: string; icon: LucideIcon }[] = [
    { id: 'cours', label: 'Cours', icon: BookOpen },
    { id: 'resume', label: 'Résumé', icon: FileText },
    { id: 'mindmap', label: 'Carte Mentale', icon: Network },
    { id: 'timeline', label: 'Frise', icon: Calendar },
    { id: 'characters', label: 'Personnages', icon: Users },
    { id: 'dates', label: 'Dates', icon: Clock },
    { id: 'flashcards', label: 'Flashcards', icon: BookMarked },
    { id: 'quiz', label: 'Quiz', icon: HelpIcon },
  ];

  const handleTabChange = (tabId: TabType) => {
    soundManager.playClick();
    setActiveTab(tabId);
  };

  const handleToggleFav = () => {
    soundManager.playClick();
    toggleFavorite(chapter.slug);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto py-4 px-4">
      {/* Navigation and Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => { soundManager.playClick(); onBack(); }}
            className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl transition-all duration-150"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <span className="text-[10px] text-blue-600 dark:text-blue-400 font-extrabold uppercase tracking-widest block mb-0.5">
              CHAPITRE {chapter.number}
            </span>
            <h1 className="text-xl md:text-2xl font-black text-slate-850 dark:text-slate-100 leading-tight">
              {chapter.title}
            </h1>
          </div>
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleToggleFav}
          className={`py-2 px-4 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-150 ${
            isFavorited
              ? 'bg-yellow-50 border-yellow-200 text-yellow-600 dark:bg-yellow-950/20 dark:border-yellow-800'
              : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
          }`}
        >
          ⭐ {isFavorited ? 'Favoris' : 'Favoriser'}
        </button>
      </div>

      {/* Tabs list (Horizontal Scrollbar on Mobile) */}
      <div className="flex overflow-x-auto gap-1.5 p-1 bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-850 rounded-2xl no-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`py-2.5 px-4 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all duration-150 flex-shrink-0 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-150 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'cours' && (
              <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm print-area">
                <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
                  {/* Control Row (Print and Speak) */}
                  <div className="flex flex-wrap gap-2.5 no-print border-b border-slate-100 dark:border-slate-850 pb-4">
                    <button
                      onClick={() => {
                        soundManager.playClick();
                        if (isSpeaking) {
                          stopSpeaking();
                        } else {
                          speakText(chapter.courseContent);
                        }
                      }}
                      className={`py-2 px-4 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-150 ${
                        isSpeaking
                          ? 'bg-red-50 border-red-200 text-red-600 dark:bg-red-950/20 dark:border-red-800'
                          : 'bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-950/20 dark:border-blue-800'
                      }`}
                    >
                      {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      <span>{isSpeaking ? "Arrêter l'écoute" : "Écouter la leçon"}</span>
                    </button>

                    <button
                      onClick={() => {
                        soundManager.playClick();
                        window.print();
                      }}
                      className="py-2 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-150"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Imprimer / PDF</span>
                    </button>
                  </div>

                  {/* Warning Traps Block */}
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 text-orange-850 dark:text-orange-300 rounded-r flex gap-3 no-print">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <span className="font-bold block mb-0.5">Pièges fréquents du Brevet :</span>
                      <p className="text-xs">
                        {chapter.number === 1 && "Ne confondez pas le déclencheur (Sarajevo, 1914) avec les causes profondes (nationalismes, alliances). Veillez à bien distinguer l'Armistice (arrêt des combats, 1918) et le Traité de Versailles (paix formelle définitive, 1919)."}
                        {chapter.number === 2 && "Attention à ne pas assimiler nazisme et communisme stalinien sans nuance : bien que totalitaires tous deux, leurs bases idéologiques sont contraires (racisme biologique de race supérieure vs égalitarisme collectivisé sans classes)."}
                        {chapter.number === 3 && "Ne confondez pas camps de concentration (travail forcé répressif, ex: Dachau) et centres de mise à mort (extermination immédiate industrielle, ex: Auschwitz). De même, distinguez Pétain (Vichy, collaboration) et De Gaulle (Résistance)."}
                        {chapter.number === 4 && "Retenez que la Guerre froide n'a jamais été un affrontement militaire direct entre l'URSS et les États-Unis. Il s'agit de conflits périphériques (Vietnam, Corée) et idéologiques sous l'équilibre de la terreur."}
                      </p>
                    </div>
                  </div>

                  {/* HTML Course Content Injection with proper custom styling */}
                  <div 
                    className="course-text-content space-y-6 text-slate-800 dark:text-slate-200 text-sm md:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: chapter.courseContent }} 
                  />

                  {/* Facts block */}
                  <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 no-print">
                    <h3 className="font-black text-slate-800 dark:text-slate-100 text-lg mb-4 flex items-center gap-1.5">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                      Le Savais-tu ? (Anecdotes historiques)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {chapter.anecdotes.map((anec, i) => (
                        <div key={i} className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-2xl text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-semibold">
                          {anec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'resume' && (
              <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-850 rounded-3xl p-6 md:p-8 shadow-sm print-area">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  {/* Control Row (Print and Speak) */}
                  <div className="flex flex-wrap gap-2.5 no-print border-b border-slate-100 dark:border-slate-850 pb-4 mb-6">
                    <button
                      onClick={() => {
                        soundManager.playClick();
                        if (isSpeaking) {
                          stopSpeaking();
                        } else {
                          speakText(chapter.summary);
                        }
                      }}
                      className={`py-2 px-4 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-150 ${
                        isSpeaking
                          ? 'bg-red-50 border-red-200 text-red-600 dark:bg-red-950/20 dark:border-red-800'
                          : 'bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-950/20 dark:border-blue-800'
                      }`}
                    >
                      {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      <span>{isSpeaking ? "Arrêter l'écoute" : "Écouter la fiche"}</span>
                    </button>

                    <button
                      onClick={() => {
                        soundManager.playClick();
                        window.print();
                      }}
                      className="py-2 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-150"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Imprimer / PDF</span>
                    </button>
                  </div>

                  {/* Clean presentation sheet */}
                  <div className="max-w-3xl mx-auto space-y-6 text-slate-700 dark:text-slate-300">
                    <h3 className="text-xl font-bold text-center text-slate-850 dark:text-slate-550 mb-6">
                      Fiche de Révision Flash : Tout retenir en 2 minutes
                    </h3>
                    {chapter.summary.split('\n\n').map((para, i) => (
                      <p key={i} className="text-xs md:text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: para.replace(/\*(.*?)\*/g, '<strong>$1</strong>') }} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mindmap' && (
              <MindMap nodes={chapter.mindMap} />
            )}

            {activeTab === 'timeline' && (
              <TimelineView events={chapter.timeline} />
            )}

            {activeTab === 'characters' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {chapter.characters.map((char) => (
                  <div
                    key={char.id}
                    className="bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-3xl p-5 shadow-sm flex gap-4"
                  >
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {char.name[0]}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-850 dark:text-slate-100 text-sm">
                        {char.name}
                      </h4>
                      <span className="text-[10px] text-blue-600 dark:text-blue-400 font-extrabold tracking-wider block mb-1">
                        {char.dates} • {char.role}
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                        {char.importance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'dates' && (
              <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-850 rounded-3xl p-6 shadow-sm overflow-hidden">
                <h3 className="font-bold text-slate-800 dark:text-slate-150 text-sm mb-4">Repères Temporels Obligatoires</h3>
                <div className="divide-y divide-slate-100 dark:divide-slate-850">
                  {chapter.dates.map((d, i) => (
                    <div key={i} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-baseline gap-3">
                        <span className="font-extrabold text-blue-600 dark:text-blue-400 text-sm min-w-[120px]">
                          {d.date}
                        </span>
                        <span className="font-extrabold text-slate-850 dark:text-slate-150 text-xs md:text-sm">
                          {d.event}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md">
                        {d.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'flashcards' && (
              <FlashcardDeck flashcards={chapter.flashcards} chapterSlug={chapter.slug} />
            )}

            {activeTab === 'quiz' && (
              <QuizEngine chapter={chapter} onClose={() => setActiveTab('cours')} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          header, nav, button, footer, .no-print, .sticky {
            display: none !important;
          }
          .print-area {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            background: white !important;
            color: black !important;
            width: 100% !important;
            max-width: 100% !important;
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};
