'use client';

import React, { useState, useEffect } from 'react';
import { chaptersData } from '../data/chaptersData';
import { Question } from '../types';
import { QuizEngine } from './QuizEngine';
import { Award, Timer, BookOpen, ChevronRight, RefreshCw, Star } from 'lucide-react';
import { soundManager } from './SoundManager';

interface ExamSimulatorProps {
  onClose?: () => void;
}

export const ExamSimulator: React.FC<ExamSimulatorProps> = ({ onClose }) => {
  const [examStarted, setExamStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  
  // Custom mock composite chapter to feed to the QuizEngine
  const mockExamChapter = {
    id: 'exam',
    slug: 'examen-simulator',
    number: 0,
    subject: 'histoire' as const,
    title: 'Brevet Blanc Officiel',
    subtitle: 'Simulation chronométrée de l\'épreuve d\'histoire-géographie',
    introduction: 'Testez vos connaissances en conditions réelles d\'examen.',
    courseContent: '',
    summary: '',
    timeline: [],
    mindMap: [],
    characters: [],
    dates: [],
    flashcards: [],
    questions: questions,
    anecdotes: []
  };

  const startExam = () => {
    soundManager.playClick();
    
    // Select questions from all chapters to build a comprehensive exam (~20-25 questions)
    const selected: Question[] = [];
    const questionsPerChapter = Math.max(2, Math.floor(25 / chaptersData.length));
    chaptersData.forEach((ch) => {
      const chQuestions = [...ch.questions]
        .filter(q => q.type === 'qcm' || q.type === 'boolean' || q.type === 'date' || q.type === 'personnage')
        .sort(() => Math.random() - 0.5);
      selected.push(...chQuestions.slice(0, questionsPerChapter));
    });

    // Final shuffle and cap at 25
    const shuffledExam = selected.sort(() => Math.random() - 0.5).slice(0, 25);

    setQuestions(shuffledExam);
    setExamStarted(true);
  };

  if (!examStarted) {
    return (
      <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm max-w-lg mx-auto text-center">
        <div className="w-16 h-16 bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-slate-850 dark:text-slate-100 mb-2">
          Mode Examen : Brevet Blanc
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Mettez-vous en situation réelle. Un test mixte sur l&apos;ensemble du programme d&apos;histoire de 3ème.
        </p>

        {/* Rules Card */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 mb-8 text-left space-y-3.5 border border-slate-150 dark:border-slate-800">
          <div className="flex gap-3 text-xs font-bold text-slate-650 dark:text-slate-400">
            <Timer className="w-4 h-4 text-violet-500 flex-shrink-0" />
            <span>Chronomètre de 20 minutes (décompte actif)</span>
          </div>
          <div className="flex gap-3 text-xs font-bold text-slate-650 dark:text-slate-400">
            <BookOpen className="w-4 h-4 text-violet-500 flex-shrink-0" />
            <span>20 questions couvrant les 4 chapitres officiels</span>
          </div>
          <div className="flex gap-3 text-xs font-bold text-slate-650 dark:text-slate-400">
            <Star className="w-4 h-4 text-violet-500 flex-shrink-0" />
            <span>Notation finale sur 20 & rapport d&apos;erreurs détaillé</span>
          </div>
        </div>

        <div className="flex gap-4">
          {onClose && (
            <button
              onClick={onClose}
              className="flex-1 py-3.5 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 font-bold rounded-2xl transition-all duration-150"
            >
              Retour
            </button>
          )}
          <button
            onClick={startExam}
            className="flex-1 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-2xl shadow-lg shadow-violet-500/20 transition-all duration-150"
          >
            Lancer l&apos;épreuve
          </button>
        </div>
      </div>
    );
  }

  // Inside the Exam, we delegate directly to QuizEngine with isExamMode=true and the dynamically constructed 20-question chapter!
  return (
    <div className="py-2">
      <QuizEngine
        chapter={mockExamChapter}
        difficulty="medium"
        isExamMode={true}
        onClose={onClose}
      />
    </div>
  );
};
