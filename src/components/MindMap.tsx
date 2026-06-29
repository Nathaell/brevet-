'use client';

import React, { useState } from 'react';
import { MindMapNode } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { soundManager } from './SoundManager';
import { Network, ChevronRight, HelpCircle, Eye } from 'lucide-react';

interface MindMapProps {
  nodes: MindMapNode[];
}

export const MindMap: React.FC<MindMapProps> = ({ nodes }) => {
  const rootNode = nodes.find((n) => !n.parentId);
  const childNodes = nodes.filter((n) => n.parentId);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const activeNode = nodes.find((n) => n.id === activeNodeId);

  const handleNodeClick = (id: string) => {
    soundManager.playClick();
    setActiveNodeId(activeNodeId === id ? null : id);
  };

  return (
    <div className="py-6 px-4">
      {/* Graphical Tree Mockup in pure CSS / Framer Motion */}
      <div className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-100 dark:border-slate-800/80 mb-6 overflow-hidden">
        {/* Core Hub */}
        {rootNode && (
          <div
            className="px-6 py-3.5 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 text-center mb-8 relative z-10 select-none"
          >
            <div className="flex items-center justify-center gap-2">
              <Network className="w-5 h-5 animate-pulse" />
              <span dangerouslySetInnerHTML={{ __html: rootNode.label }} />
            </div>
          </div>
        )}

        {/* Connectors & Branch Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full relative">
          {/* Decorative lines on desktop */}
          <div className="hidden lg:block absolute left-1/2 -top-8 w-px h-8 bg-blue-200 dark:bg-slate-800" />
          
          {childNodes.map((node) => {
            const isActive = activeNodeId === node.id;
            return (
              <div
                key={node.id}
                onClick={() => handleNodeClick(node.id)}
                className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center text-center select-none relative group ${
                  isActive
                    ? 'bg-violet-600 text-white border-transparent shadow-lg scale-105 shadow-violet-500/20'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-200/60 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-800 hover:shadow-md'
                }`}
              >
                {/* Visual connection dot */}
                <div className={`w-2.5 h-2.5 rounded-full mb-2 ${isActive ? 'bg-white' : 'bg-violet-500'}`} />
                <span className="font-bold text-sm md:text-base leading-snug" dangerouslySetInnerHTML={{ __html: node.label }} />
                <span className="text-[10px] opacity-75 mt-1.5 flex items-center gap-0.5">
                  <Eye className="w-3 h-3" /> Cliquer pour explorer
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Explanatory Sidebar / Panel */}
      <div className="min-h-[140px] transition-all duration-300">
        <AnimatePresence mode="wait">
          {activeNode ? (
            <div
              key={activeNode.id}
              className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-start gap-4"
            >
              <div className="p-3 bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 rounded-2xl">
                <Network className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg flex items-center gap-1.5">
                  <span dangerouslySetInnerHTML={{ __html: activeNode.label }} />
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-normal text-slate-500 dark:text-slate-400">Détails d&apos;apprentissage</span>
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: activeNode.description ?? '' }} />
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">
                    Concept-clé
                  </span>
                  <span className="text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded">
                    Rétention active
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div
              key="empty"
              className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center text-slate-400 dark:text-slate-500 flex flex-col items-center justify-center gap-2"
            >
              <HelpCircle className="w-8 h-8 opacity-60 animate-bounce" />
              <p className="text-sm font-medium">Sélectionnez une branche ci-dessus pour afficher le résumé de révision associé.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
