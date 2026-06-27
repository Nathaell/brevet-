'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Question, Chapter } from '../types';
import { useProgress } from '../context/ProgressContext';
import { soundManager } from './SoundManager';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Award, ArrowRight, HelpCircle, RefreshCw, Volume2, Timer } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizEngineProps {
  chapter: Chapter;
  difficulty?: 'easy' | 'medium' | 'hard' | 'expert';
  isExamMode?: boolean;
  onClose?: () => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({
  chapter,
  difficulty: initialDifficulty = 'easy',
  isExamMode = false,
  onClose
}) => {
  const { stats, addXP, completeQuiz } = useProgress();
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | 'expert'>(initialDifficulty);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [booleanAnswer, setBooleanAnswer] = useState<boolean | null>(null);
  const [matchingAnswers, setMatchingAnswers] = useState<{ [key: string]: string }>({});
  const [trousAnswers, setTrousAnswers] = useState<string[]>([]);
  const [orderAnswers, setOrderAnswers] = useState<number[]>([]); // index order
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [failedQuestionIds, setFailedQuestionIds] = useState<string[]>([]);

  // Open question self-grade state
  const [selfGrade, setSelfGrade] = useState<boolean | null>(null);

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (quizStarted && !isAnswered) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizStarted, isAnswered]);

  // Build/generate questions list
  const startQuiz = () => {
    soundManager.playClick();
    setStartTime(Date.now());
    setTimeElapsed(0);
    
    // 1. Gather pre-defined questions matching the selected difficulty and populate missing options
    let pool = chapter.questions
      .filter((q) => isExamMode || q.difficulty === difficulty)
      .map((q) => {
        if ((q.type === 'personnage' || q.type === 'date') && !q.options) {
          if (q.type === 'personnage') {
            const otherNames = chapter.characters.filter((c) => c.name !== q.answer).map((c) => c.name);
            const shuffledOptions = [q.answer as string, ...otherNames].slice(0, 4).sort(() => Math.random() - 0.5);
            return { ...q, options: shuffledOptions };
          } else if (q.type === 'date') {
            const otherDates = chapter.dates.filter((d) => d.date !== q.answer).map((d) => d.date);
            const shuffledOptions = [q.answer as string, ...otherDates].slice(0, 4).sort(() => Math.random() - 0.5);
            return { ...q, options: shuffledOptions };
          }
        }
        return q;
      });

    // 2. Spaced Repetition sorting
    // Prioritize questions the user has failed before in localStorage
    pool = [...pool].sort((a, b) => {
      const errA = stats.errorsHistory[a.id] || 0;
      const errB = stats.errorsHistory[b.id] || 0;
      return errB - errA; // Descending error counts
    });

    // 3. Procedural Question Generation
    // Let's generate dynamic questions from figures, dates, and glossary terms
    // to guarantee we have an enormous and diverse pool of 100+ questions!
    const generated: Question[] = [];

    // Generates Date matching questions
    chapter.dates.forEach((d, index) => {
      if (generated.length >= 10) return; // limit generated
      
      const otherEvents = chapter.dates.filter((_, i) => i !== index).map((o) => o.event);
      const shuffledOptions = [d.event, ...otherEvents.slice(0, 3)].sort(() => Math.random() - 0.5);

      generated.push({
        id: `gen_date_${index}`,
        type: 'qcm',
        difficulty: 'easy',
        question: `Quel événement historique s'est déroulé le ${d.date} ?`,
        options: shuffledOptions,
        answer: d.event,
        explanation: d.explanation,
        mnemonic: "Retenez bien cette date, elle est incontournable pour le Brevet !",
      });
    });

    // Generates Character matching questions
    chapter.characters.forEach((char, index) => {
      if (generated.length >= 20) return;
      
      const otherNames = chapter.characters.filter((_, i) => i !== index).map((o) => o.name);
      const shuffledOptions = [char.name, ...otherNames.slice(0, 3)].sort(() => Math.random() - 0.5);

      generated.push({
        id: `gen_char_${index}`,
        type: 'qcm',
        difficulty: 'medium',
        question: `Qui est décrit par cette fiche historique : "${char.importance}" ?`,
        options: shuffledOptions,
        answer: char.name,
        explanation: `${char.name} (${char.dates}) était un(e) ${char.role}.`,
      });
    });

    // Mix preset and generated questions, slice to 10 questions for a quick revision session
    let finalQuestions = [...pool, ...generated];
    
    // Shuffling final selection to avoid repetition
    finalQuestions = finalQuestions.sort(() => Math.random() - 0.5);
    
    // Use the entire pool for standard chapter quiz to allow long sessions
    const limit = isExamMode ? 20 : finalQuestions.length;
    setQuestions(finalQuestions.slice(0, limit));
    
    setCurrentIndex(0);
    setIsAnswered(false);
    setScore(0);
    setFailedQuestionIds([]);
    setSelectedOption(null);
    setBooleanAnswer(null);
    setMatchingAnswers({});
    setTrousAnswers([]);
    setOrderAnswers([]);
    setSelfGrade(null);
    setQuizStarted(true);
  };

  const currentQuestion = questions[currentIndex];

  // Helper for text à trous input changes
  const handleTrousChange = (index: number, val: string) => {
    const next = [...trousAnswers];
    next[index] = val.trim();
    setTrousAnswers(next);
  };

  // Helper for matching answers (relier)
  const handleMatchSelect = (key: string, value: string) => {
    soundManager.playClick();
    setMatchingAnswers((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  // Helper for ordering (ordonner)
  const handleOrderMove = (fromIndex: number, direction: 'up' | 'down') => {
    soundManager.playClick();
    const toIndex = direction === 'up' ? fromIndex - 1 : fromIndex + 1;
    if (toIndex < 0 || toIndex >= orderAnswers.length) return;
    
    const next = [...orderAnswers];
    const temp = next[fromIndex];
    next[fromIndex] = next[toIndex];
    next[toIndex] = temp;
    setOrderAnswers(next);
  };

  // Initialize ordering state when question loads
  useEffect(() => {
    if (currentQuestion && currentQuestion.type === 'ordonner') {
      const initialOrder = currentQuestion.options ? currentQuestion.options.map((_, i) => i) : [];
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOrderAnswers(initialOrder);
    }
  }, [currentQuestion]);

  const handleSubmit = () => {
    if (!currentQuestion) return;
    
    let isCorrect = false;

    if (currentQuestion.type === 'qcm') {
      isCorrect = selectedOption === currentQuestion.answer;
    } else if (currentQuestion.type === 'boolean') {
      isCorrect = booleanAnswer === currentQuestion.answer;
    } else if (currentQuestion.type === 'date' || currentQuestion.type === 'personnage') {
      isCorrect = selectedOption === currentQuestion.answer;
    } else if (currentQuestion.type === 'trous') {
      // Check if all slots match
      const correctList = currentQuestion.answer as string[];
      isCorrect = correctList.every((ans, idx) => trousAnswers[idx]?.toLowerCase() === ans.toLowerCase());
    } else if (currentQuestion.type === 'relier') {
      // Check matchings
      const correctMap = currentQuestion.answer as { [key: string]: string };
      isCorrect = Object.keys(correctMap).every((k) => matchingAnswers[k] === correctMap[k]);
    } else if (currentQuestion.type === 'ordonner') {
      const correctOrder = currentQuestion.answer as number[];
      isCorrect = orderAnswers.every((val, idx) => val === correctOrder[idx]);
    } else if (currentQuestion.type === 'brevet') {
      // Open question relies on self-evaluation
      isCorrect = !!selfGrade;
    }

    setIsAnswered(true);

    if (isCorrect) {
      soundManager.playSuccess();
      setScore((prev) => prev + (20 / questions.length));
    } else {
      soundManager.playFailure();
      setFailedQuestionIds((prev) => [...prev, currentQuestion.id]);
    }
  };

  const handleNextQuestion = () => {
    soundManager.playClick();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsAnswered(false);
      setSelectedOption(null);
      setBooleanAnswer(null);
      setMatchingAnswers({});
      setTrousAnswers([]);
      setSelfGrade(null);
    } else {
      // Quiz finished
      const finalTime = Math.round((Date.now() - startTime) / 1000);
      const roundedScore = Math.min(20, Math.round(score));
      
      // Calculate XP
      const xpEarned = roundedScore * 10; // e.g. 200 XP for a perfect 20/20
      addXP(xpEarned);
      
      completeQuiz(chapter.slug, roundedScore, finalTime, failedQuestionIds);
      
      // Trigger celebrate confetti on 16/20+
      if (roundedScore >= 16) {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
      
      // Show results layout
      setQuizStarted(false);
      setCurrentIndex(-1); // denotes results screen
    }
  };

  if (!quizStarted && currentIndex !== -1) {
    // Selection screen
    return (
      <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm max-w-md mx-auto text-center">
        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-850 dark:text-slate-100 mb-1">
          Prêt à tester tes connaissances ?
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          10 questions variées pour maîtriser le chapitre {chapter.number}.
        </p>

        {/* Difficulty Selection */}
        {!isExamMode && (
          <div className="mb-6">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-3">
              Choisir la difficulté
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {(['easy', 'medium', 'hard', 'expert'] as const).map((diff) => (
                <button
                  key={diff}
                  onClick={() => { soundManager.playClick(); setDifficulty(diff); }}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all duration-150 capitalize ${
                    difficulty === diff
                      ? 'bg-blue-600 border-transparent text-white shadow-md shadow-blue-500/10'
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {{ easy: 'Facile', medium: 'Moyen', hard: 'Difficile', expert: 'Expert' }[diff]}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={startQuiz}
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-750 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all duration-200"
        >
          Démarrer le Quiz
        </button>
      </div>
    );
  }

  if (currentIndex === -1) {
    // Results Screen
    const roundedScore = Math.min(20, Math.round(score));
    const isSuccess = roundedScore >= 10;
    
    return (
      <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm max-w-md mx-auto text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
          isSuccess ? 'bg-green-50 dark:bg-green-950/30 text-green-600' : 'bg-red-50 dark:bg-red-950/30 text-red-650'
        }`}>
          <Award className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          {isSuccess ? 'Félicitations !' : 'Continue d\'apprendre'}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Quiz terminé avec succès. Voici tes résultats :
        </p>

        {/* Score Ring / Card */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 mb-6">
          <div className="text-5xl font-extrabold text-slate-850 dark:text-slate-50 mb-1">
            {roundedScore} <span className="text-2xl font-medium text-slate-400">/20</span>
          </div>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
            roundedScore >= 16 ? 'bg-green-100 text-green-800' : roundedScore >= 10 ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
          }`}>
            {roundedScore >= 16 ? 'Excellent !' : roundedScore >= 10 ? 'Moyen' : 'Insuffisant'}
          </span>
        </div>

        {/* Reward metrics */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">XP Gagnés</span>
            <span className="text-lg font-black text-violet-600 dark:text-violet-400">+{roundedScore * 10} XP</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Temps</span>
            <span className="text-lg font-black text-slate-700 dark:text-slate-350">{Math.floor(timeElapsed / 60)}m {timeElapsed % 60}s</span>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={startQuiz}
            className="flex-1 py-3 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold rounded-2xl transition-all duration-150"
          >
            Recommencer
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-blue-600 hover:bg-blue-750 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all duration-150"
            >
              Fermer
            </button>
          )}
        </div>
      </div>
    );
  }

  // Quiz in progress
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-6 md:p-8 rounded-3xl shadow-sm max-w-2xl mx-auto">
      {/* Header Info */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          Question {currentIndex + 1} / {questions.length}
        </span>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Timer className="w-4 h-4 text-blue-500" />
          <span>{Math.floor(timeElapsed / 60)}:{(timeElapsed % 60).toString().padStart(2, '0')}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-900 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-extrabold text-slate-850 dark:text-slate-150 leading-snug mb-6">
          {currentQuestion.question}
        </h3>

        {/* Render options based on type */}
        {(currentQuestion.type === 'qcm' || currentQuestion.type === 'date' || currentQuestion.type === 'personnage') && currentQuestion.options && (
          <div className="space-y-3">
            {currentQuestion.options.map((opt, i) => {
              const isSelected = selectedOption === opt;
              let btnClass = 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-850';
              if (isSelected) btnClass = 'border-blue-600 bg-blue-50/30 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400';
              if (isAnswered) {
                if (opt === currentQuestion.answer) btnClass = 'border-green-600 bg-green-50/30 dark:bg-green-950/20 text-green-700 dark:text-green-400';
                else if (isSelected) btnClass = 'border-red-600 bg-red-50/30 dark:bg-red-950/20 text-red-750 dark:text-red-400';
              }

              return (
                <button
                  key={i}
                  disabled={isAnswered}
                  onClick={() => { soundManager.playClick(); setSelectedOption(opt); }}
                  className={`w-full p-4 border rounded-2xl text-left font-semibold text-sm transition-all duration-150 flex items-center justify-between ${btnClass}`}
                >
                  <span>{opt}</span>
                  {isAnswered && opt === currentQuestion.answer && <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />}
                  {isAnswered && isSelected && opt !== currentQuestion.answer && <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        )}

        {currentQuestion.type === 'boolean' && (
          <div className="flex gap-4">
            {([true, false] as const).map((val) => {
              const isSelected = booleanAnswer === val;
              let btnClass = 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-850';
              if (isSelected) btnClass = 'border-blue-600 bg-blue-50/30 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400';
              if (isAnswered) {
                if (val === currentQuestion.answer) btnClass = 'border-green-600 bg-green-50/30 text-green-700';
                else if (isSelected) btnClass = 'border-red-650 bg-red-50/30 text-red-750';
              }

              return (
                <button
                  key={val ? 'vrai' : 'faux'}
                  disabled={isAnswered}
                  onClick={() => { soundManager.playClick(); setBooleanAnswer(val); }}
                  className={`flex-1 py-4 border rounded-2xl font-bold text-center transition-all duration-150 ${btnClass}`}
                >
                  {val ? 'Vrai' : 'Faux'}
                </button>
              );
            })}
          </div>
        )}

        {currentQuestion.type === 'trous' && (
          <div className="space-y-4">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-3">
              Remplissez les espaces vides dans la phrase ci-dessous :
            </p>
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-850/60 flex flex-wrap gap-4 items-center leading-loose">
              {currentQuestion.question.split(/(\[.*?\])/g).map((chunk, idx) => {
                if (chunk.startsWith('[') && chunk.endsWith(']')) {
                  const itemIndex = (currentQuestion.answer as string[]).indexOf(chunk.slice(1, -1));
                  const isCorrect = trousAnswers[itemIndex]?.toLowerCase() === chunk.slice(1, -1).toLowerCase();

                  return (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <input
                        type="text"
                        disabled={isAnswered}
                        placeholder="..."
                        value={isAnswered && !isCorrect ? chunk.slice(1, -1) : (trousAnswers[itemIndex] || '')}
                        onChange={(e) => handleTrousChange(itemIndex, e.target.value)}
                        className={`px-3 py-1 bg-white dark:bg-slate-950 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-bold text-center w-28 transition-colors duration-150 ${
                          isAnswered
                            ? isCorrect
                              ? 'border-green-600 text-green-650 bg-green-50/30'
                              : 'border-green-500 text-green-600 bg-green-50/10 line-through'
                            : 'border-slate-200 dark:border-slate-800'
                        }`}
                      />
                      {isAnswered && !isCorrect && (
                        <span className="text-[10px] text-red-550 font-extrabold">
                          Saisi : {trousAnswers[itemIndex] || 'vide'}
                        </span>
                      )}
                    </div>
                  );
                }
                return <span key={idx} className="text-slate-800 dark:text-slate-250 font-medium">{chunk}</span>;
              })}
            </div>
          </div>
        )}

        {currentQuestion.type === 'relier' && currentQuestion.options && (
          <div className="space-y-4">
            <p className="text-xs text-slate-500 dark:text-slate-450 font-bold mb-2">
              Associez chaque élément de gauche à son équivalent de droite :
            </p>
            <div className="grid grid-cols-2 gap-4">
              {/* Left Column (Keys) */}
              <div className="space-y-2">
                {Object.keys(currentQuestion.answer).map((key) => (
                  <div key={key} className="p-3.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300">
                    {key}
                  </div>
                ))}
              </div>
              {/* Right Column (Values Shuffled / Choose option) */}
              <div className="space-y-2">
                {Object.keys(currentQuestion.answer).map((key) => {
                  const correctVal = (currentQuestion.answer as { [key: string]: string })[key];
                  const usersSelectedVal = matchingAnswers[key];
                  const options = currentQuestion.options || [];
                  const isCorrect = usersSelectedVal === correctVal;

                  return (
                    <div key={key} className="flex flex-col gap-1 w-full">
                      <select
                        disabled={isAnswered}
                        value={usersSelectedVal || ''}
                        onChange={(e) => handleMatchSelect(key, e.target.value)}
                        className={`w-full p-3 border rounded-xl text-xs font-bold bg-white dark:bg-slate-950 focus:outline-none ${
                          isAnswered
                            ? isCorrect
                              ? 'border-green-600 text-green-750 bg-green-50/10'
                              : 'border-red-600 text-red-750 bg-red-50/10'
                            : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-355'
                        }`}
                      >
                        <option value="">Associer...</option>
                        {options.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {isAnswered && !isCorrect && (
                        <span className="text-[10px] text-green-600 dark:text-green-400 font-extrabold pl-1">
                          Correct : {correctVal}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {currentQuestion.type === 'ordonner' && currentQuestion.options && (
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-550 dark:text-slate-450 mb-2">
              Ordonnez la liste chronologiquement du haut (plus ancien) vers le bas (plus récent) :
            </p>
            {orderAnswers.map((itemIdx, arrayIdx) => {
              const optionText = currentQuestion.options ? currentQuestion.options[itemIdx] : '';
              const correctOrder = currentQuestion.answer as number[];
              const isItemCorrect = orderAnswers[arrayIdx] === correctOrder[arrayIdx];
              
              let cardBorderClass = 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900';
              if (isAnswered) {
                cardBorderClass = isItemCorrect
                  ? 'border-green-600 bg-green-50/10'
                  : 'border-red-650 bg-red-50/10';
              }

              const correctPosition = correctOrder.indexOf(itemIdx) + 1;

              return (
                <div
                  key={itemIdx}
                  className={`flex items-center justify-between p-3.5 border rounded-xl transition-all duration-200 ${cardBorderClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 flex items-center justify-center font-bold text-xs rounded-full flex-shrink-0 ${
                      isAnswered
                        ? isItemCorrect
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-655'
                        : 'bg-blue-100 text-blue-600 dark:text-blue-400'
                    }`}>
                      {arrayIdx + 1}
                    </span>
                    <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200">
                      {optionText}
                    </span>
                  </div>
                  {!isAnswered ? (
                    <div className="flex flex-col gap-1.5">
                      <button
                        onClick={() => handleOrderMove(arrayIdx, 'up')}
                        disabled={arrayIdx === 0}
                        className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 rounded disabled:opacity-30"
                      >
                        ▲
                      </button>
                      <button
                        onClick={() => handleOrderMove(arrayIdx, 'down')}
                        disabled={arrayIdx === orderAnswers.length - 1}
                        className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 rounded disabled:opacity-30"
                      >
                        ▼
                      </button>
                    </div>
                  ) : (
                    !isItemCorrect && (
                      <span className="text-xs font-bold text-green-600 dark:text-green-400 ml-4">
                        Position correcte : {correctPosition}
                      </span>
                    )
                  )}
                </div>
              );
            })}
          </div>
        )}

        {currentQuestion.type === 'brevet' && (
          <div className="space-y-4">
            <p className="text-xs font-semibold text-slate-450 dark:text-slate-500">
              Rédigez votre réponse mentalement ou sur une feuille, puis cliquez sur corriger pour vous auto-évaluer.
            </p>
            {isAnswered && (
              <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-800 rounded-2xl">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">Exemple de réponse attendue</span>
                <p className="text-xs md:text-sm text-blue-900 dark:text-blue-300 leading-relaxed font-semibold">
                  {currentQuestion.answer as string}
                </p>
                <div className="mt-4 border-t border-blue-100 dark:border-blue-800 pt-4">
                  <p className="text-xs font-bold text-slate-650 dark:text-slate-400 mb-3 text-center">
                    Votre réponse était-elle complète et correcte ?
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setSelfGrade(false)}
                      className={`flex-1 py-2 px-3 border rounded-xl text-xs font-bold transition-all duration-150 flex items-center justify-center gap-1.5 ${
                        selfGrade === false
                          ? 'bg-red-50 border-red-200 text-red-650'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <XCircle className="w-4 h-4" /> Insuffisant (0 pt)
                    </button>
                    <button
                      onClick={() => setSelfGrade(true)}
                      className={`flex-1 py-2 px-3 border rounded-xl text-xs font-bold transition-all duration-150 flex items-center justify-center gap-1.5 ${
                        selfGrade === true
                          ? 'bg-green-50 border-green-200 text-green-700'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" /> Correct (20 pts)
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Answer correction Details */}
      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 border-t border-slate-100 dark:border-slate-800 pt-6 overflow-hidden"
          >
            <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-5 border border-slate-100 dark:border-slate-850">
              <h4 className="font-extrabold text-slate-850 dark:text-slate-100 text-sm mb-2">
                Explication détaillée :
              </h4>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed mb-4">
                {currentQuestion.explanation}
              </p>

              {currentQuestion.mnemonic && (
                <div className="mb-3 p-3 bg-violet-50 dark:bg-violet-950/20 text-violet-700 dark:text-violet-300 rounded-xl text-xs flex gap-2">
                  <span className="font-bold flex-shrink-0">💡 Astuce :</span>
                  <span>{currentQuestion.mnemonic}</span>
                </div>
              )}

              {currentQuestion.trap && (
                <div className="p-3 bg-red-50 dark:bg-red-950/20 text-red-650 dark:text-red-400 rounded-xl text-xs flex gap-2">
                  <span className="font-bold flex-shrink-0">⚠️ Piège fréquent :</span>
                  <span>{currentQuestion.trap}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Footer Buttons */}
      <div className="mt-8 flex justify-end">
        {!isAnswered ? (
          <button
            onClick={handleSubmit}
            className="py-3 px-6 bg-blue-600 hover:bg-blue-750 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all duration-150 flex items-center gap-1.5"
          >
            Valider ma réponse <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="py-3 px-6 bg-blue-600 hover:bg-blue-750 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all duration-150 flex items-center gap-1.5"
          >
            {currentIndex === questions.length - 1 ? 'Terminer' : 'Question suivante'} <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
