'use client';

import React, { useState, useMemo } from 'react';
import { Chapter } from '../types';
import { Search, BookMarked, User, Calendar, FileText, X } from 'lucide-react';
import { soundManager } from './SoundManager';

interface GlossarySearchProps {
  chapters: Chapter[];
  onNavigateToChapter?: (slug: string, tab?: string) => void;
}

interface SearchResult {
  type: 'course' | 'character' | 'date' | 'definition';
  title: string;
  subtitle?: string;
  snippet: string;
  chapterSlug: string;
  chapterTitle: string;
  tabName?: string;
}

export const GlossarySearch: React.FC<GlossarySearchProps> = ({ chapters, onNavigateToChapter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  // Generate complete Glossary from chapters dates, vocabulary definitions, etc.
  const glossary = useMemo(() => {
    const list: { term: string; definition: string; chapterSlug: string; chapterTitle: string }[] = [];
    
    // We can extract vocabulary terms dynamically from hardcoded lists or parse them.
    // Let's create a curated list based on the chapters we have to ensure high quality!
    const terms = [
      {
        term: 'Violence de masse',
        definition: 'Violence extrême exercée à grande échelle contre des populations militaires ou civiles.',
        chapterSlug: 'premiere-guerre-mondiale',
        chapterTitle: 'La Première Guerre mondiale'
      },
      {
        term: 'Guerre totale',
        definition: 'Conflit armé qui mobilise toutes les ressources disponibles d\'un État (économiques, humaines, financières, culturelles) pour remporter la victoire.',
        chapterSlug: 'premiere-guerre-mondiale',
        chapterTitle: 'La Première Guerre mondiale'
      },
      {
        term: 'Guerre de tranchées',
        definition: 'Phase de la guerre où les troupes s\'enterrent dans des fosses fortifiées (les tranchées) pour défendre leurs positions.',
        chapterSlug: 'premiere-guerre-mondiale',
        chapterTitle: 'La Première Guerre mondiale'
      },
      {
        term: 'Génocide',
        definition: 'Extermination programmée, méthodique et systématique, en tout ou en partie, d\'un groupe national, ethnique, racial ou religieux.',
        chapterSlug: 'premiere-guerre-mondiale',
        chapterTitle: 'La Première Guerre mondiale'
      },
      {
        term: 'Diktat',
        definition: 'Surnom donné par les Allemands au traité de Versailles de 1919, jugé humiliant et imposé sans négociation.',
        chapterSlug: 'premiere-guerre-mondiale',
        chapterTitle: 'La Première Guerre mondiale'
      },
      {
        term: 'Régime totalitaire',
        definition: 'Régime politique (dictature) caractérisé par le contrôle total de l\'État sur l\'économie, la société, la culture et la vie privée, par la terreur et l\'embrigadement.',
        chapterSlug: 'entre-deux-guerres',
        chapterTitle: 'L\'entre-deux-guerres'
      },
      {
        term: 'Collectivisation des terres',
        definition: 'Mise en commun des terres agricoles sous le contrôle de l\'État en URSS, à travers les kolkhozes.',
        chapterSlug: 'entre-deux-guerres',
        chapterTitle: 'L\'entre-deux-guerres'
      },
      {
        term: 'Goulag',
        definition: 'Organisme gérant les camps de travail forcé en Union soviétique, où étaient déportés les opposants réels ou supposés au régime stalinien.',
        chapterSlug: 'entre-deux-guerres',
        chapterTitle: 'L\'entre-deux-guerres'
      },
      {
        term: 'Antisémitisme',
        definition: 'Hostilité, préjugés ou discrimination systématique envers les personnes juives.',
        chapterSlug: 'entre-deux-guerres',
        chapterTitle: 'L\'entre-deux-guerres'
      },
      {
        term: 'Guerre d\'anéantissement',
        definition: 'Conflit visant la destruction totale des forces militaires et des populations de l\'adversaire, fondée sur des motifs idéologiques.',
        chapterSlug: 'seconde-guerre-mondiale',
        chapterTitle: 'La Seconde Guerre mondiale'
      },
      {
        term: 'Shoah',
        definition: 'Extermination systématique et planifiée d\'environ six millions de Juifs par l\'Allemagne nazie et ses collaborateurs entre 1941 et 1945.',
        chapterSlug: 'seconde-guerre-mondiale',
        chapterTitle: 'La Seconde Guerre mondiale'
      },
      {
        term: 'Einsatzgruppen',
        definition: 'Groupes d\'intervention mobiles de soldats SS et policiers nazis chargés de fusiller les Juifs et opposants communistes à l\'arrière du front de l\'Est.',
        chapterSlug: 'seconde-guerre-mondiale',
        chapterTitle: 'La Seconde Guerre mondiale'
      },
      {
        term: 'Collaboration',
        definition: 'Politique d\'aide et de coopération économique, militaire et policière menée par le régime français de Vichy avec l\'occupant nazi.',
        chapterSlug: 'seconde-guerre-mondiale',
        chapterTitle: 'La Seconde Guerre mondiale'
      },
      {
        term: 'Bipolarisation',
        definition: 'Division de l\'espace mondial en deux blocs opposés, chacun dominé par une superpuissance (USA et URSS) pendant la Guerre froide.',
        chapterSlug: 'guerre-froide',
        chapterTitle: 'La Guerre froide'
      },
      {
        term: 'Dissuasion nucléaire',
        definition: 'Doctrine militaire selon laquelle la possession de l\'arme nucléaire empêche toute attaque ennemie de peur de subir des représailles destructrices massives.',
        chapterSlug: 'guerre-froide',
        chapterTitle: 'La Guerre froide'
      },
      {
        term: 'Endiguement (Containment)',
        definition: 'Doctrine du président Truman visant à empêcher la propagation de l\'influence communiste dans le monde après 1947.',
        chapterSlug: 'guerre-froide',
        chapterTitle: 'La Guerre froide'
      }
    ];
    return terms.sort((a, b) => a.term.localeCompare(b.term));
  }, []);

  const alphabet = useMemo(() => {
    const letters = glossary.map((g) => g.term[0].toUpperCase());
    return Array.from(new Set(letters)).sort();
  }, [glossary]);

  const filteredGlossary = useMemo(() => {
    if (!selectedLetter) return glossary;
    return glossary.filter((g) => g.term[0].toUpperCase() === selectedLetter);
  }, [glossary, selectedLetter]);

  // Full Text Search across all curriculum content
  const searchResults = useMemo((): SearchResult[] => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    
    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    // Search glossary definitions first
    glossary.forEach((term) => {
      if (term.term.toLowerCase().includes(query) || term.definition.toLowerCase().includes(query)) {
        results.push({
          type: 'definition',
          title: term.term,
          chapterSlug: term.chapterSlug,
          chapterTitle: term.chapterTitle,
          snippet: term.definition,
          tabName: 'glossaire'
        });
      }
    });

    chapters.forEach((ch) => {
      // Search main course texts
      const cleanCourse = ch.courseContent.replace(/<[^>]*>/g, ' ');
      if (ch.title.toLowerCase().includes(query) || cleanCourse.toLowerCase().includes(query)) {
        const index = cleanCourse.toLowerCase().indexOf(query);
        const start = Math.max(0, index - 40);
        const end = Math.min(cleanCourse.length, index + query.length + 80);
        const snippet = '...' + cleanCourse.slice(start, end).trim() + '...';

        results.push({
          type: 'course',
          title: ch.title,
          subtitle: `Chapitre ${ch.number}`,
          snippet,
          chapterSlug: ch.slug,
          chapterTitle: ch.title,
          tabName: 'cours'
        });
      }

      // Search characters
      ch.characters.forEach((char) => {
        if (char.name.toLowerCase().includes(query) || char.importance.toLowerCase().includes(query) || char.role.toLowerCase().includes(query)) {
          results.push({
            type: 'character',
            title: char.name,
            subtitle: `${char.role} (${char.dates})`,
            snippet: char.importance,
            chapterSlug: ch.slug,
            chapterTitle: ch.title,
            tabName: 'personnages'
          });
        }
      });

      // Search dates
      ch.dates.forEach((d) => {
        if (d.date.toLowerCase().includes(query) || d.event.toLowerCase().includes(query) || d.explanation.toLowerCase().includes(query)) {
          results.push({
            type: 'date',
            title: `${d.date} : ${d.event}`,
            snippet: d.explanation,
            chapterSlug: ch.slug,
            chapterTitle: ch.title,
            tabName: 'dates'
          });
        }
      });
    });

    return results.slice(0, 15); // limit to 15 results
  }, [searchQuery, glossary, chapters]);

  const handleResultClick = (res: SearchResult) => {
    soundManager.playClick();
    if (onNavigateToChapter) {
      onNavigateToChapter(res.chapterSlug, res.tabName || 'cours');
    }
  };

  return (
    <div className="bg-white dark:bg-slate-950 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm max-w-4xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 flex items-center gap-2">
        <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse" />
        Recherche & Glossaire
      </h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Recherchez un concept, un personnage, une date historique ou explorez le dictionnaire officiel du Brevet.
      </p>

      {/* Search Input Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Rechercher (ex: Verdun, Blum, Goulag, 1945...)"
          className="w-full pl-12 pr-10 py-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-sm md:text-base transition-all duration-200"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dynamic Search Results */}
      {searchQuery.trim().length >= 2 && (
        <div className="mb-8">
          <h3 className="font-bold text-slate-700 dark:text-slate-300 text-xs uppercase tracking-wider mb-4">
            Résultats de recherche ({searchResults.length})
          </h3>
          {searchResults.length > 0 ? (
            <div className="space-y-3">
              {searchResults.map((res, i) => {
                const Icon = {
                  definition: BookMarked,
                  character: User,
                  date: Calendar,
                  course: FileText
                }[res.type];

                return (
                  <div
                    key={i}
                    onClick={() => handleResultClick(res)}
                    className="p-4 bg-slate-50 hover:bg-blue-50/50 dark:bg-slate-900/60 dark:hover:bg-blue-950/20 border border-slate-100 dark:border-slate-800/80 rounded-2xl cursor-pointer transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="font-bold text-sm text-slate-800 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                          {res.title}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                        {res.chapterTitle}
                      </span>
                    </div>
                    {res.subtitle && (
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1.5 pl-6">
                        {res.subtitle}
                      </div>
                    )}
                    <p className="text-xs text-slate-600 dark:text-slate-400 pl-6 leading-relaxed">
                      {res.snippet}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-6 text-slate-400 dark:text-slate-500 text-sm">
              Aucun résultat trouvé pour votre recherche.
            </div>
          )}
        </div>
      )}

      {/* Letter-by-letter glossary */}
      <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
        <h3 className="font-bold text-slate-700 dark:text-slate-300 text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5">
          <BookMarked className="w-4 h-4 text-violet-500" />
          Glossaire des Termes Officiels
        </h3>

        {/* Alphabet Navigation */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          <button
            onClick={() => { soundManager.playClick(); setSelectedLetter(null); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 ${
              selectedLetter === null
                ? 'bg-violet-600 text-white shadow-sm shadow-violet-500/10'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            Tous
          </button>
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => { soundManager.playClick(); setSelectedLetter(letter); }}
              className={`w-8 h-8 flex items-center justify-center text-xs font-semibold rounded-lg transition-all duration-150 ${
                selectedLetter === letter
                  ? 'bg-violet-600 text-white shadow-sm shadow-violet-500/10'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Terms list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredGlossary.map((item, index) => (
            <div
              key={index}
              className="p-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-850 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 mb-3">
                  {item.term[0].toUpperCase()}
                </span>
                <h4 className="font-extrabold text-slate-850 dark:text-slate-100 text-base mb-1.5">
                  {item.term}
                </h4>
                <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed mb-4">
                  {item.definition}
                </p>
              </div>
              <div
                onClick={() => {
                  soundManager.playClick();
                  if (onNavigateToChapter) onNavigateToChapter(item.chapterSlug, 'cours');
                }}
                className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer flex items-center gap-1 mt-auto"
              >
                <span>Chapitre : {item.chapterTitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
