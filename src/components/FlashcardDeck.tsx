'use client';

import React, { useState } from 'react';
import { Flashcard } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCw, Award, ArrowRight, HelpCircle } from 'lucide-react';
import { soundManager } from './SoundManager';
import { useProgress } from '../context/ProgressContext';
import confetti from 'canvas-confetti';

interface FlashcardDeckProps {
  flashcards: Flashcard[];
  chapterSlug: string;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({ flashcards, chapterSlug }) => {
  const { addXP, incrementFlashcards } = useProgress();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [deckCompleted, setDeckCompleted] = useState(false);

  const currentCard = flashcards[currentIndex];

  const handleFlip = () => {
    soundManager.playClick();
    setIsFlipped(!isFlipped);
  };

  const handleNext = (knewIt: boolean) => {
    soundManager.playClick();
    if (knewIt) {
      setKnownCount((prev) => prev + 1);
      addXP(5); // 5 XP per correct flashcard
    }
    
    setIsFlipped(false);
    
    // Animate transition
    setTimeout(() => {
      if (currentIndex < flashcards.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        // Deck completed!
        setDeckCompleted(true);
        incrementFlashcards();
        soundManager.playSuccess();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }, 200);
  };

  const handleRestart = () => {
    soundManager.playClick();
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCount(0);
    setDeckCompleted(false);
  };

  if (deckCompleted) {
    return (
      <div className="bg-white dark:bg-slate-950 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm max-w-md mx-auto text-center">
        <div className="w-16 h-16 bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          Paquet complété !
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Vous avez révisé les {flashcards.length} flashcards de ce chapitre.
        </p>

        {/* Stats */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 mb-6 grid grid-cols-2 gap-4">
          <div>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block">
              Maîtrisées
            </span>
            <span className="text-xl font-extrabold text-green-600 dark:text-green-400">
              {knownCount} / {flashcards.length}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block">
              XP Gagnés
            </span>
            <span className="text-xl font-extrabold text-violet-600 dark:text-violet-400">
              +{knownCount * 5} XP
            </span>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="w-full py-3 bg-blue-600 hover:bg-blue-750 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all duration-200"
        >
          Recommencer le paquet
        </button>
      </div>
    );
  }

  // Progress percentage
  const progressPercent = ((currentIndex) / flashcards.length) * 100;

  return (
    <div className="max-w-md mx-auto py-6 px-4">
      {/* Index and Progress */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
          CARTE {currentIndex + 1} SUR {flashcards.length}
        </span>
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
          {Math.round(progressPercent)}% révisé
        </span>
      </div>

      <div className="w-full h-2 bg-slate-100 dark:bg-slate-900 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 3D card layout */}
      <div className="relative w-full h-80 cursor-pointer perspective mb-8" onClick={handleFlip}>
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full h-full relative preserve-3d"
        >
          {/* FRONT Side */}
          <div className="absolute inset-0 w-full h-full bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-between backface-hidden">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-55 dark:bg-slate-800/40 px-2 py-0.5 rounded">
                Question
              </span>
              <HelpCircle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
            </div>

            <div className="flex items-center justify-center text-center py-6 flex-grow">
              <p className="text-lg md:text-xl font-extrabold text-slate-800 dark:text-slate-100 leading-snug">
                {currentCard.question}
              </p>
            </div>

            <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-slate-450 dark:text-slate-500">
              <RotateCw className="w-3.5 h-3.5" /> Cliquer pour retourner la carte
            </div>
          </div>

          {/* BACK Side */}
          <div className="absolute inset-0 w-full h-full bg-slate-900 dark:bg-slate-950 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between backface-hidden rotateY-180">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest bg-green-950/30 px-2 py-0.5 rounded">
                Réponse
              </span>
              <Award className="w-5 h-5 text-green-400" />
            </div>

            <div className="flex items-center justify-center text-center py-6 flex-grow">
              <p className="text-base md:text-lg font-bold text-slate-100 leading-relaxed">
                {currentCard.answer}
              </p>
            </div>

            <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-slate-400">
              <RotateCw className="w-3.5 h-3.5" /> Cliquer pour voir la question
            </div>
          </div>
        </motion.div>
      </div>

      {/* Control Buttons */}
      <AnimatePresence mode="wait">
        {isFlipped ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex gap-4"
          >
            <button
              onClick={() => handleNext(false)}
              className="flex-1 py-3 px-4 border border-red-200 dark:border-red-950/60 bg-red-50 hover:bg-red-100 dark:bg-red-950/20 dark:hover:bg-red-900/30 text-red-650 dark:text-red-400 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all duration-150"
            >
              <X className="w-4 h-4" /> À revoir
            </button>
            <button
              onClick={() => handleNext(true)}
              className="flex-1 py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-lg shadow-green-500/10 flex items-center justify-center gap-2 transition-all duration-150"
            >
              <Check className="w-4 h-4" /> Je le savais !
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-center"
          >
            <button
              onClick={handleFlip}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-750 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all duration-150"
            >
              Révéler la réponse <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
