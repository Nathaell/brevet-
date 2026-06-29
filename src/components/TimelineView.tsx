'use client';

import React, { useState } from 'react';
import { TimelineEvent } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Filter, BookOpen } from 'lucide-react';
import { soundManager } from './SoundManager';

interface TimelineViewProps {
  events: TimelineEvent[];
}

const CATEGORY_COLORS: { [key: string]: string } = {
  militaire: 'bg-red-500 text-white border-red-200',
  politique: 'bg-blue-500 text-white border-blue-200',
  social: 'bg-green-500 text-white border-green-200',
  diplomatique: 'bg-purple-500 text-white border-purple-200',
};

const CATEGORY_LABELS: { [key: string]: string } = {
  militaire: 'Militaire',
  politique: 'Politique',
  social: 'Social',
  diplomatique: 'Diplomatique',
};

export const TimelineView: React.FC<TimelineViewProps> = ({ events }) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const filteredEvents = events.filter((e) => filter === 'all' || e.category === filter);

  const handleSelectEvent = (id: string) => {
    soundManager.playClick();
    setSelectedEventId(selectedEventId === id ? null : id);
  };

  return (
    <div className="py-6 px-4">
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8 items-center bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1 mr-2">
          <Filter className="w-3 h-3" /> Filtrer :
        </span>
        <button
          onClick={() => { soundManager.playClick(); setFilter('all'); }}
          className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
            filter === 'all'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          Tous
        </button>
        {Object.keys(CATEGORY_LABELS).map((cat) => (
          <button
            key={cat}
            onClick={() => { soundManager.playClick(); setFilter(cat); }}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
              filter === cat
                ? `${CATEGORY_COLORS[cat]} shadow-md`
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Main Timeline Line */}
      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-32 pl-8 space-y-8 py-2">
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((event, index) => {
            const isSelected = selectedEventId === event.id;
            const catColor = event.category ? CATEGORY_COLORS[event.category] : 'bg-slate-400 text-white';

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative group cursor-pointer"
                onClick={() => handleSelectEvent(event.id)}
              >
                {/* Node circle */}
                <div
                  className={`absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-white dark:border-slate-950 flex items-center justify-center transition-transform duration-200 group-hover:scale-125 ${catColor}`}
                >
                  <Calendar className="w-2.5 h-2.5" />
                </div>

                {/* Left Date Label for Desktop */}
                <div className="hidden md:block absolute -left-[160px] top-1.5 w-28 text-right font-bold text-sm text-blue-600 dark:text-blue-400">
                  {event.date}
                </div>

                {/* Event Card Content */}
                <div
                  className={`bg-white dark:bg-slate-900 border p-5 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 ${
                    isSelected ? 'ring-2 ring-blue-500 dark:ring-blue-400 border-transparent' : 'border-slate-100 dark:border-slate-800'
                  }`}
                >
                  <div className="md:hidden font-bold text-xs text-blue-600 dark:text-blue-400 mb-1">
                    {event.date}
                  </div>
                  
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base md:text-lg" dangerouslySetInnerHTML={{ __html: event.title }} />
                    {event.category && (
                      <span className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded ${catColor.split(' ')[0]} bg-opacity-10 text-opacity-100`}>
                        {CATEGORY_LABELS[event.category]}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: event.description }} />

                  {/* Expandable Explanation Details */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
                      >
                        <div className="flex items-start gap-2.5 text-xs text-blue-700 dark:text-blue-300 bg-blue-50/50 dark:bg-blue-950/20 p-3 rounded-xl">
                          <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold block mb-0.5">Importance pour le Brevet :</span>
                            Cette date fait partie des repères d&apos;histoire indispensables de la classe de 3ème. Vous devez être capable de la situer sur une frise et de rédiger un paragraphe de 2-3 phrases expliquant son contexte et son impact historique majeur.
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
