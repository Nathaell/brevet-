import { Chapter } from '../types';
import { historyChapters } from './historyChapters';
import { geoChapters1 } from './geoChapters1';
import { geoChapters2 } from './geoChapters2';

const baseChapters: Chapter[] = [
  {
    id: 'ch1',
    slug: 'premiere-guerre-mondiale',
    number: 1,
    subject: 'histoire',
    title: 'La Première Guerre mondiale',
    subtitle: 'Une guerre totale et une violence de masse inédite (1914-1918)',
    introduction: 'La Première Guerre mondiale est un conflit mondial majeur qui oppose la Triple Entente (France, Royaume-Uni, Russie, puis USA) aux Empires Centraux (Allemagne, Autriche-Hongrie, Empire Ottoman). Marquée par une violence de masse inédite et la mobilisation complète des sociétés, elle transforme profondément l\'Europe.',
    courseContent: `
      <h2>I. Les origines et le déclenchement du conflit</h2>
      <p>Au début du XXe siècle, les tensions impérialistes, coloniales et nationalistes divisent l'Europe. Deux grands réseaux d'alliances militaires se font face :</p>
      <ul>
        <li><strong>La Triple Entente</strong> : France, Royaume-Uni et Empire russe.</li>
        <li><strong>La Triple Alliance (ou Empires Centraux)</strong> : Allemagne, Autriche-Hongrie et Italie (qui changera de camp en 1915).</li>
      </ul>
      <p>Le déclencheur de la guerre est l'assassinat de l'archiduc <strong>François-Ferdinand</strong>, héritier de l'empire d'Autriche-Hongrie, à Sarajevo le <strong>28 juin 1914</strong> par un nationaliste serbe. Par le jeu des alliances, l'Europe s'embrase en août 1914.</p>

      <h2>II. Les grandes phases de la guerre</h2>
      <p>Le conflit se déroule en trois grandes étapes :</p>
      <ol>
        <li><strong>La guerre de mouvement (août - novembre 1914)</strong> : Les armées mènent des offensives rapides. Les troupes allemandes envahissent la Belgique et le nord de la France, arrêtées de justesse lors de la <em>bataille de la Marne</em> par le général Joffre.</li>
        <li><strong>La guerre de position ou de tranchées (fin 1914 - début 1918)</strong> : Les fronts se stabilisent. Les soldats s'enterrent dans des tranchées. C'est une guerre d'usure caractérisée par de grandes offensives meurtrières et inutiles comme <strong>Verdun</strong> (février-décembre 1916, plus de 700 000 victimes) et la <strong>Somme</strong> (juillet-novembre 1916).</li>
        <li><strong>Le tournant de 1917 et la fin de la guerre</strong> : L'année 1917 est marquée par la lassitude (mutineries), les révolutions russes (qui mènent au retrait de la Russie) et surtout l'<strong>entrée en guerre des États-Unis</strong> aux côtés de l'Entente. Au printemps 1918, la guerre de mouvement reprend. Les Alliés, renforcés par les troupes et le matériel américains, lancent des contre-offensives victorieuses. L'<strong>armistice est signé le 11 novembre 1918</strong> à Rethondes.</li>
      </ol>

      <h2>III. Une guerre totale et la violence de masse</h2>
      <p>La Première Guerre mondiale est une <strong>guerre totale</strong>, c'est-à-dire un conflit qui mobilise toutes les ressources des États :</p>
      <ul>
        <li><strong>Économiques</strong> : Les usines sont reconverties pour fabriquer du matériel militaire. Les femmes (surnommées les <em>munitionnettes</em>) travaillent dans les usines d'armement pour remplacer les hommes partis au front. On fait appel aux emprunts d'État et aux ressources des colonies.</li>
        <li><strong>Humaines</strong> : Mobilisation de millions de soldats (les <em>Poilus</em> en France).</li>
        <li><strong>Psychologiques</strong> : L'État censure les lettres des soldats et utilise une intense <strong>propagande</strong> (le "bourrage de crâne") pour maintenir le moral de l'arrière.</li>
      </ul>
      <p>Le conflit se caractérise par une <strong>violence de masse</strong> subie par les militaires (conditions de vie effroyables dans la boue, le froid, la peur, l'utilisation de nouvelles armes destructrices comme les gaz asphyxiants, les obus, les lance-flammes) et par les civils (occupations, pénuries, bombardements).</p>
      
      <div class="bg-violet-50 dark:bg-violet-950/30 border-l-4 border-violet-500 p-4 my-6 rounded-r">
        <h4 class="font-bold text-violet-700 dark:text-violet-300">Focus : Le génocide des Arméniens (1915-1916)</h4>
        <p class="text-sm mt-1">Profitant de la guerre, le gouvernement de l'Empire ottoman décide l'extermination de la minorité chrétienne arménienne, accusée de complicité avec l'ennemi russe. Les massacres et les déportations forcées dans les déserts de Syrie font entre 1,2 et 1,5 million de morts. C'est le premier génocide du XXe siècle.</p>
      </div>

      <h2>IV. Les conséquences de la guerre</h2>
      <p>Le bilan humain et matériel est catastrophique. On compte environ <strong>10 millions de morts</strong> militaires, des millions de mutilés (les <em>Gueules cassées</em>) et d'orphelins. Le deuil et le traumatisme marquent durablement les esprits.</p>
      <p>Sur le plan géopolitique, la carte de l'Europe est redessinée : les grands empires (allemand, autrichien, russe, ottoman) s'effondrent pour laisser place à de nouveaux États. Le <strong>traité de Versailles (28 juin 1919)</strong> règle le sort de l'Allemagne, jugée seule responsable du conflit. Elle perd des territoires, voit son armée réduite et doit payer de lourdes réparations. Les Allemands qualifient ce traité de <strong>"Diktat"</strong> (traité imposé), ce qui nourrira un sentiment de revanche. Pour maintenir la paix, la <strong>Société des Nations (SDN)</strong> est créée à l'initiative du président américain Woodrow Wilson.</p>
    `,
    summary: `
      ### Fiche Synthèse : La Première Guerre mondiale (1914-1918)

      * **Les belligérants** : Triple Entente (France, Royaume-Uni, Russie, puis États-Unis en 1917) contre Empires Centraux (Allemagne, Autriche-Hongrie, Empire Ottoman).
      * **Les trois phases** :
        1. *Guerre de mouvement* (août - nov. 1914) : offensives rapides.
        2. *Guerre de position* (1915 - début 1918) : enlisement dans les tranchées, batailles de Verdun (1916) et de la Somme (1916).
        3. *Reprise du mouvement* (1918) : renfort des États-Unis, victoires alliées. Armistice le 11 novembre 1918.
      * **Guerre totale** : Mobilisation complète de la société (économie de guerre, munitionnettes, propagande, censure, rationnement).
      * **Violence de masse** :
        * *Au front* : conditions effroyables des Poilus, nouvelles armes (obus, gaz).
        * *Contre les civils* : bombardements, rationnement, travail forcé, et surtout le **génocide des Arméniens** (1915-1916) par l'Empire ottoman (1,2 à 1,5 million de victimes).
      * **Conséquences** : 10 millions de morts, traumatisme des "Gueules cassées", carte de l'Europe redessinée, humiliation allemande lors du **Traité de Versailles** (28 juin 1919) qualifié de "Diktat", et création de la **SDN** pour préserver la paix.
    `,
    timeline: [
      { id: 't1_1', date: '28 juin 1914', title: 'Attentat de Sarajevo', description: 'Assassinat de l\'archiduc François-Ferdinand par Gavrilo Princip.', category: 'politique' },
      { id: 't1_2', date: 'Août 1914', title: 'Entrée en guerre', description: 'Déclenchement du conflit et début de la guerre de mouvement.', category: 'militaire' },
      { id: 't1_3', date: '1915 - 1916', title: 'Génocide arménien', description: 'Extermination programmée de la population arménienne par l\'Empire Ottoman.', category: 'social' },
      { id: 't1_4', date: 'Févr. - Déc. 1916', title: 'Bataille de Verdun', description: 'Symbole de la guerre de tranchées. Plus de 300 000 morts français et allemands.', category: 'militaire' },
      { id: 't1_5', date: 'Avril 1917', title: 'Entrée en guerre des États-Unis', description: 'Les États-Unis rejoignent les Alliés, apportant un soutien décisif.', category: 'diplomatique' },
      { id: 't1_6', date: '11 nov. 1918', title: 'Armistice de Rethondes', description: 'Fin des combats sur le front occidental.', category: 'diplomatique' },
      { id: 't1_7', date: '28 juin 1919', title: 'Traité de Versailles', description: 'Signature du traité de paix. L\'Allemagne est lourdement sanctionnée.', category: 'politique' }
    ],
    mindMap: [
      { id: 'm1_root', label: '1ère Guerre Mondiale' },
      { id: 'm1_b1', label: 'Origines', parentId: 'm1_root', description: 'Nationalismes, alliances militaires (Entente vs Alliance) et attentat de Sarajevo.' },
      { id: 'm1_b2', label: 'Guerre Totale', parentId: 'm1_root', description: 'Mobilisation des esprits (propagande, censure), de l\'économie (munitionnettes) et humaine.' },
      { id: 'm1_b3', label: 'Violence de Masse', parentId: 'm1_root', description: 'Vie des Poilus dans les tranchées (Verdun), génocide des Arméniens et souffrances des civils.' },
      { id: 'm1_b4', label: 'Conséquences', parentId: 'm1_root', description: 'Bilan de 10M de morts, Traité de Versailles (Diktat pour l\'Allemagne), déclin de l\'Europe et création de la SDN.' }
    ],
    characters: [
      { id: 'c1_1', name: 'Georges Clemenceau', dates: '1841-1929', role: 'Homme d\'État français', importance: 'Surnommé le "Tigre" ou le "Père la Victoire", il est nommé président du Conseil en novembre 1917 et mène la France à la victoire en maintenant une discipline de fer à l\'arrière comme au front.' },
      { id: 'c1_2', name: 'Philippe Pétain', dates: '1856-1951', role: 'Général français', importance: 'Nommé commandant des forces à Verdun en 1916, il organise la défense de la ville grâce à la "Voie Sacrée" (ravitaillement). Il devient un héros national très populaire pour avoir ménagé les troupes.' },
      { id: 'c1_3', name: 'Jean Jaurès', dates: '1859-1914', role: 'Député socialiste et pacifiste', importance: 'Fondateur de l\'Humanité, il lutte activement contre la marche à la guerre en Europe. Il est assassiné par un nationaliste français le 31 juillet 1914, ouvrant la voie à l\'Union Sacrée.' },
      { id: 'c1_4', name: 'Woodrow Wilson', dates: '1856-1924', role: 'Président des États-Unis', importance: 'Il décide de l\'entrée en guerre des États-Unis en 1917. En 1918, il formule les "14 points" pour la paix mondiale et inspire directement la création de la Société des Nations (SDN).' }
    ],
    dates: [
      { date: '28 juin 1914', event: 'Attentat de Sarajevo', explanation: 'Gavrilo Princip assassine l\'héritier d\'Autriche-Hongrie, étincelle du conflit.' },
      { date: 'Août 1914', event: 'Début de la guerre', explanation: 'Mobilisation générale et début de la guerre de mouvement.' },
      { date: '1915-1916', event: 'Génocide des Arméniens', explanation: 'Extermination systématique d\'environ 1,2 à 1,5 million d\'Arméniens chrétiens.' },
      { date: '1916', event: 'Bataille de Verdun et de la Somme', explanation: 'Apogée de la guerre de position et de l\'enfer des tranchées.' },
      { date: '1917', event: 'Entrée en guerre des USA et révolutions russes', explanation: 'Le tournant géopolitique majeur de la guerre.' },
      { date: '11 novembre 1918', event: 'Armistice de Rethondes', explanation: 'Cessez-le-feu officiel sur le front ouest, fin des combats.' },
      { date: '28 juin 1919', event: 'Traité de Versailles', explanation: 'Paix humiliante pour l\'Allemagne, redessinant les frontières européennes.' }
    ],
    flashcards: [
      { id: 'fc1_1', question: 'Quel événement déclenche la guerre en 1914 ?', answer: 'L\'assassinat de l\'archiduc François-Ferdinand à Sarajevo le 28 juin 1914.' },
      { id: 'fc1_2', question: 'Quelles sont les deux alliances militaires en 1914 ?', answer: 'La Triple Entente (France, Royaume-Uni, Russie) et la Triple Alliance (Allemagne, Autriche-Hongrie, Italie).' },
      { id: 'fc1_3', question: 'Qu\'est-ce qu\'une guerre de position ?', answer: 'Une phase de la guerre où les troupes s\'enterrent dans des tranchées pour défendre leurs positions, le front étant stabilisé.' },
      { id: 'fc1_4', question: 'Pourquoi parle-t-on de "guerre totale" ?', answer: 'Parce que le conflit mobilise toutes les ressources d\'un pays : humaines, industrielles, financières et intellectuelles/propagande.' },
      { id: 'fc1_5', question: 'Comment appelle-t-on les femmes travaillant dans les usines d\'armement ?', answer: 'Les munitionnettes.' },
      { id: 'fc1_6', question: 'Quel est le bilan humain du génocide arménien ?', answer: 'Environ 1,2 à 1,5 million de victimes, soit les deux tiers de la population arménienne de l\'Empire ottoman.' },
      { id: 'fc1_7', question: 'Pourquoi l\'Allemagne qualifie-t-elle le traité de Versailles de "Diktat" ?', answer: 'Car il lui a été imposé sans négociation possible et contient des clauses extrêmement humiliantes (pertes territoriales, réparations, désarmement).' }
    ],
    anecdotes: [
      "Les soldats français étaient appelés les 'Poilus' non pas seulement parce qu'ils ne se rasaient pas dans les tranchées, mais parce que ce terme argotique désignait à l'époque quelqu'un de courageux et viril ('avoir du poil au ventre').",
      "La 'Voie Sacrée' est le nom donné par l'écrivain Maurice Barrès à la route départementale reliant Bar-le-Duc à Verdun. C'était la seule artère d'approvisionnement pour Verdun, parcourue continuellement par des milliers de camions jour et nuit.",
      "Durant la guerre, pour tromper les avions de reconnaissance allemands, la France a commencé à construire une réplique factice de Paris au nord de la ville, avec des faux monuments et des fausses lumières pour simuler l'activité nocturne."
    ],
    questions: [
      {
        id: 'q1_1',
        type: 'qcm',
        difficulty: 'easy',
        question: 'En quelle année la Première Guerre mondiale a-t-elle commencé ?',
        options: ['1912', '1914', '1916', '1918'],
        answer: '1914',
        explanation: 'La guerre a débuté en août 1914 à la suite de l\'assassinat de l\'archiduc François-Ferdinand le 28 juin de la même année.',
        mnemonic: 'Moyen mémo : 1914 - 14 juillet sans défilé car la guerre approche !',
        trap: 'Attention, l\'assassinat a lieu en juin, mais la mobilisation et la déclaration de guerre ont lieu en août 1914.'
      },
      {
        id: 'q1_2',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Les États-Unis sont entrés en guerre dès 1914.',
        answer: false,
        explanation: 'Les États-Unis restent neutres au début du conflit. Ils n\'entrent en guerre qu\'en avril 1917, provoqués notamment par la guerre sous-marine à outrance menée par l\'Allemagne.',
        mnemonic: '17 = l\'année des tournants (États-Unis entrent, Russie sort).'
      },
      {
        id: 'q1_3',
        type: 'personnage',
        difficulty: 'medium',
        question: 'Qui est l\'homme politique français surnommé "Le Tigre", nommé président du Conseil en 1917 ?',
        answer: 'Georges Clemenceau',
        explanation: 'Georges Clemenceau a dirigé le pays d\'une main de fer en 1917, restaurant la confiance et menant les négociations du traité de Versailles.',
        trap: 'Ne confondez pas Clemenceau avec Pétain (qui était général militaire et non chef de gouvernement à cette époque).'
      },
      {
        id: 'q1_4',
        type: 'trous',
        difficulty: 'medium',
        question: 'Le traité de [Versailles], signé le 28 juin [1919], humilie l\'Allemagne qui le qualifie de [Diktat].',
        answer: ['Versailles', '1919', 'Diktat'],
        explanation: 'Le traité de Versailles met officiellement fin à la guerre avec l\'Allemagne. Il est signé dans la Galerie des Glaces le jour anniversaire de l\'attentat de Sarajevo.'
      },
      {
        id: 'q1_5',
        type: 'relier',
        difficulty: 'hard',
        question: 'Associez chaque personnalité à son rôle durant la Grande Guerre :',
        options: [
          'Président du Conseil en 1917',
          'Commandant à la bataille de Verdun',
          'Leader socialiste pacifiste assassiné',
          'Auteur des 14 points pour la paix'
        ],
        answer: {
          'Georges Clemenceau': 'Président du Conseil en 1917',
          'Philippe Pétain': 'Commandant à la bataille de Verdun',
          'Jean Jaurès': 'Leader socialiste pacifiste assassiné',
          'Woodrow Wilson': 'Auteur des 14 points pour la paix'
        },
        explanation: 'Ces quatre personnages incarnent les facettes politiques, militaires, pacifistes et diplomatiques de la guerre.'
      },
      {
        id: 'q1_6',
        type: 'ordonner',
        difficulty: 'hard',
        question: 'Ordonnez ces événements de la Première Guerre mondiale du plus ancien au plus récent :',
        options: [
          'Armistice de Rethondes',
          'Attentat de Sarajevo',
          'Bataille de Verdun',
          'Entrée en guerre des États-Unis'
        ],
        answer: [1, 2, 3, 0], // Sarajevo (1914) -> Verdun (1916) -> USA (1917) -> Armistice (1918)
        explanation: 'La chronologie est : Sarajevo (juin 1914), Verdun (février-décembre 1916), entrée en guerre des États-Unis (avril 1917) et armistice (11 novembre 1918).'
      },
      {
        id: 'q1_7',
        type: 'date',
        difficulty: 'easy',
        question: 'À quelle date exacte l\'armistice de la Première Guerre mondiale a-t-il été signé ?',
        options: ['8 mai 1945', '11 novembre 1918', '28 juin 1919', '14 juillet 1789'],
        answer: '11 novembre 1918',
        explanation: 'L\'armistice a été signé le 11 novembre 1918 à 5h15 du matin dans le wagon de Rethondes en forêt de Compiègne, prenant effet à 11h.',
        mnemonic: 'Le 11/11 à 11h, tout s\'arrête !'
      },
      {
        id: 'q1_8',
        type: 'brevet',
        difficulty: 'expert',
        question: 'Définissez le concept de "guerre totale" et expliquez comment il s\'applique à la Première Guerre mondiale.',
        answer: 'Une guerre totale est un conflit qui mobilise l\'ensemble des ressources d\'un État (humaines, économiques, financières, scientifiques et culturelles) pour remporter la victoire. En 1914-1918, cela se traduit par la mobilisation des soldats au front, des civils (les femmes dans les usines ou munitionnettes), la reconversion industrielle pour produire des armes, les emprunts financiers et l\'utilisation massive de la propagande et de la censure pour contrôler l\'opinion publique.',
        explanation: 'Le terme clé est la mobilisation complète des ressources économiques, humaines et psychologiques tant à l\'arrière qu\'au front.'
      },
      {
        id: 'q1_9',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quel pays a signé la paix de Brest-Litovsk en mars 1918 avec l'Allemagne ?",
        options: ['La France', 'Le Royaume-Uni', 'La Russie bolchevique', 'Les États-Unis'],
        answer: 'La Russie bolchevique',
        explanation: "Suite aux révolutions russes de 1917, Lénine décide de retirer la Russie du conflit en signant une paix séparée à Brest-Litovsk en mars 1918.",
        mnemonic: "Russie = Brest-Litovsk (retrait de la guerre)."
      },
      {
        id: 'q1_10',
        type: 'boolean',
        difficulty: 'easy',
        question: "Vrai ou Faux : Les femmes dans les usines d'armement s'appelaient les munitionnettes.",
        answer: true,
        explanation: "Pendant la guerre, les femmes remplacent les hommes dans les usines d'armement pour fabriquer des munitions. On les appelle les munitionnettes.",
        mnemonic: "Munitionnettes = munitions + femmes."
      },
      {
        id: 'q1_11',
        type: 'date',
        difficulty: 'hard',
        question: "En quels mois de 1917 ont éclaté les deux révolutions russes ?",
        options: ['Janvier et Juin', 'Février et Octobre', 'Mars et Novembre', 'Mai et Décembre'],
        answer: 'Février et Octobre',
        explanation: "La première révolution a lieu en février 1917 (chute du Tsar) et la seconde en octobre 1917 (prise du pouvoir par les bolcheviques de Lénine).",
        mnemonic: "Février et Octobre 1917."
      },
      {
        id: 'q1_12',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quelle bataille de 1914 marque la fin de la guerre de mouvement et le début des tranchées sur le front ouest ?",
        options: ['La bataille de Verdun', 'La bataille de la Marne', 'La bataille de la Somme', 'La bataille des Frontières'],
        answer: 'La bataille de la Marne',
        explanation: "Du 6 au 12 septembre 1914, la bataille de la Marne stoppe l'avancée allemande et force les armées à s'enterrer dans les tranchées.",
        trap: "Verdun a lieu en 1916 (guerre de position), la Marne en 1914."
      },
      {
        id: 'q1_13',
        type: 'personnage',
        difficulty: 'easy',
        question: "Quel président américain a rédigé le programme de paix en '14 points' en janvier 1918 ?",
        options: ['Franklin D. Roosevelt', 'Woodrow Wilson', 'Harry Truman', 'Theodore Roosevelt'],
        answer: 'Woodrow Wilson',
        explanation: "Le président Woodrow Wilson a proposé en janvier 1918 les '14 points' pour reconstruire l'Europe et fonder la Société des Nations (SDN).",
        mnemonic: "Wilson = 14 points."
      },
      {
        id: 'q1_14',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quel empire a éclaté à la suite de la Première Guerre mondiale et a été remplacé par la Turquie ?",
        options: ["L'Empire ottoman", "L'Empire d'Autriche-Hongrie", "L'Empire russe", "L'Empire allemand"],
        answer: "L'Empire ottoman",
        explanation: "L'Empire ottoman, allié des Empires Centraux, s'effondre après la guerre. Le traité de Sèvres (1920) le démantèle et la république de Turquie est proclamée par Mustafa Kemal.",
        mnemonic: "Ottoman = Turquie."
      },
      {
        id: 'q1_15',
        type: 'qcm',
        difficulty: 'hard',
        question: "Quelle grande mutinerie de soldats français en 1917 a inspiré la célèbre 'Chanson de Craonne' ?",
        options: ["La mutinerie du Chemin des Dames", "La mutinerie de Verdun", "La mutinerie de la Somme", "La mutinerie de la Marne"],
        answer: "La mutinerie du Chemin des Dames",
        explanation: "Après l'offensive désastreuse du Chemin des Dames lancée par le général Nivelle au printemps 1917, des milliers de soldats se mutinent pour refuser les attaques frontales et inutiles.",
        trap: "Les soldats ne refusaient pas de défendre le pays, ils refusaient les offensives jugées absurdes et suicidaires."
      },
      {
        id: 'q1_16',
        type: 'boolean',
        difficulty: 'easy',
        question: "Vrai ou Faux : L'Italie a commencé la guerre au sein de la Triple Alliance avant de rejoindre la Triple Entente en 1915.",
        answer: true,
        explanation: "L'Italie était liée à l'Allemagne et l'Autriche-Hongrie, mais reste neutre en 1914. En 1915, par le traité de Londres, elle s'allie à l'Entente contre la promesse de gains territoriaux.",
        mnemonic: "Italie = change de camp en 1915."
      },
      {
        id: 'q1_17',
        type: 'qcm',
        difficulty: 'easy',
        question: "Comment s'appelle l'organisation internationale créée en 1919 pour maintenir la paix mondiale ?",
        options: ["L'ONU", "La SDN (Société des Nations)", "L'OTAN", "L'Union Européenne"],
        answer: "La SDN (Société des Nations)",
        explanation: "La Société des Nations (SDN) est créée par le traité de Versailles pour désamorcer les conflits par la diplomatie, mais elle échouera à empêcher la Seconde Guerre mondiale.",
        mnemonic: "SDN (1919) -> ONU (1945)."
      },
      {
        id: 'q1_18',
        type: 'qcm',
        difficulty: 'easy',
        question: "Comment appelle-t-on la trêve spontanée survenue en décembre 1914 entre soldats français, britanniques et allemands ?",
        options: ["La Trêve de Noël", "L'Armistice d'Hiver", "La Paix des Tranchées", "Le Cessez-le-feu de l'Aisne"],
        answer: "La Trêve de Noël",
        explanation: "La Trêve de Noël est une série de cessez-le-feu non officiels spontanés sur le front occidental en décembre 1914, caractérisée par des fraternisations.",
        mnemonic: "Trêve de Noël = 25 décembre 1914."
      },
      {
        id: 'q1_19',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quel pays signe le traité de Brest-Litovsk en mars 1918, mettant fin aux combats sur le front de l'Est ?",
        options: ["L'Italie", "La Russie bolchévique", "L'Empire ottoman", "La Roumanie"],
        answer: "La Russie bolchévique",
        explanation: "Après la révolution d'Octobre 1917, le nouveau gouvernement bolchévique dirigé par Lénine signe la paix séparée de Brest-Litovsk avec l'Allemagne en mars 1918.",
        mnemonic: "Brest-Litovsk = Retrait de la Russie."
      },
      {
        id: 'q1_20',
        type: 'qcm',
        difficulty: 'hard',
        question: "Quelle grande offensive alliée, lancée en juillet 1916 sous la direction française et britannique, a fait plus d'un million de victimes ?",
        options: ["La bataille de la Somme", "La bataille du Chemin des Dames", "La bataille de Verdun", "La bataille de la Marne"],
        answer: "La bataille de la Somme",
        explanation: "La bataille de la Somme (juillet-novembre 1916) est l'offensive la plus meurtrière de la guerre pour les forces britanniques et françaises.",
        trap: "Verdun (février-décembre 1916) est plus longue, mais la Somme a causé plus de pertes au total."
      },
      {
        id: 'q1_21',
        type: 'boolean',
        difficulty: 'medium',
        question: "Vrai ou Faux : Les colonies françaises ont fourni plus de 600 000 soldats (tirailleurs, spahis) pour combattre en Europe.",
        answer: true,
        explanation: "La France a mobilisé massivement les ressources humaines de son empire colonial (Afrique du Nord, Afrique subsaharienne, Indochine) pour soutenir l'effort de guerre.",
        mnemonic: "Guerre totale = implication de l'Empire colonial."
      },
      {
        id: 'q1_22',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quelle est la principale conséquence politique de l'effondrement de l'Empire ottoman après 1918 ?",
        options: ["La naissance de la Turquie moderne", "Le rattachement à la Grèce", "La création de l'URSS", "La colonisation totale par l'Allemagne"],
        answer: "La naissance de la Turquie moderne",
        explanation: "Le traité de Sèvres puis le traité de Lausanne consacrent le démantèlement de l'Empire ottoman et la proclamation de la République de Turquie par Mustafa Kemal Atatürk.",
        mnemonic: "Ottoman -> Turquie (Atatürk)."
      },
      {
        id: 'q1_23',
        type: 'qcm',
        difficulty: 'hard',
        question: "Quel général allemand a dirigé les offensives du printemps 1918 (Kaiserschlacht) sur le front occidental ?",
        options: ["Erich Ludendorff", "Paul von Hindenburg", "Helmuth von Moltke", "Wilhelm II"],
        answer: "Erich Ludendorff",
        explanation: "Le général Erich Ludendorff a conçu et mené les dernières grandes offensives allemandes du printemps 1918 avant l'arrivée massive des Américains.",
        mnemonic: "Offensives 1918 = Ludendorff."
      },
      {
        id: 'q1_24',
        type: 'boolean',
        difficulty: 'easy',
        question: "Vrai ou Faux : L'armistice du 11 novembre 1918 a été signé à bord d'un wagon de train stationné en forêt de Compiègne.",
        answer: true,
        explanation: "L'armistice a été signé le 11 novembre 1918 à 5h15 du matin dans le wagon de commandement du maréchal Foch, garé dans la clairière de Rethondes en forêt de Compiègne.",
        mnemonic: "Rethondes = Wagon de l'Armistice."
      },
      {
        id: 'q1_25',
        type: 'qcm',
        difficulty: 'easy',
        question: "Quel terme désigne la mobilisation complète des ressources humaines, économiques et culturelles de toute la société ?",
        options: ["La guerre totale", "La guerre d'usure", "Le front populaire", "Le militarisme"],
        answer: "La guerre totale",
        explanation: "La Première Guerre mondiale est une 'guerre totale' car elle dépasse le seul cadre militaire pour mobiliser l'arrière (civils, usines, censure).",
        mnemonic: "Total = Tout mobiliser."
      },
      {
        id: 'q1_26',
        type: 'qcm',
        difficulty: 'medium',
        question: "Qu'appelle-t-on les 'Gueules cassées' après 1918 ?",
        options: ["Les soldats mutilés du visage", "Les mineurs de charbon", "Les veuves de guerre", "Les déserteurs"],
        answer: "Les soldats mutilés du visage",
        explanation: "Les 'Gueules cassées' désigne les survivants de la guerre qui ont subi de graves mutilations faciales dues aux éclats d'obus.",
        mnemonic: "Gueules cassées = Mutilés de la face."
      },
      {
        id: 'q1_27',
        type: 'boolean',
        difficulty: 'medium',
        question: "Vrai ou Faux : Les mutineries de 1917 dans l'armée française faisaient suite aux offensives désastreuses du Chemin des Dames.",
        answer: true,
        explanation: "Les mutineries du printemps 1917 expriment le refus des soldats d'obéir à des ordres d'attaques inutiles et suicidaires lancées par le général Nivelle au Chemin des Dames.",
        mnemonic: "Nivelle = Chemin des Dames = Mutineries 1917."
      }
    ]
  },
  {
    id: 'ch2',
    slug: 'entre-deux-guerres',
    number: 2,
    subject: 'histoire',
    title: 'L\'entre-deux-guerres',
    subtitle: 'Démocraties fragilisées et régimes totalitaires (1919-1939)',
    introduction: 'L\'entre-deux-guerres est une période de fortes turbulences. La crise économique mondiale de 1929 fragilise les démocraties européennes, favorisant la montée des dictatures totalitaires (URSS de Staline, Allemagne d\'Hitler). En France, la démocratie résiste en portant au pouvoir le Front populaire en 1936.',
    courseContent: `
      <h2>I. La crise économique de 1929 et ses conséquences</h2>
      <p>Le <strong>24 octobre 1929 ("Jeudi noir")</strong>, le krach boursier de Wall Street à New York déclenche une crise économique mondiale sans précédent. Elle se traduit par :</p>
      <ul>
        <li>Une faillite des banques et une chute de la production industrielle.</li>
        <li>Une explosion du chômage de masse (6 millions de chômeurs en Allemagne en 1932).</li>
        <li>Une grande misère sociale et une instabilité politique qui favorisent la montée des partis extrémistes.</li>
      </ul>

      <h2>II. Deux régimes totalitaires : l'URSS de Staline et l'Allemagne nazie</h2>
      <p>Un <strong>régime totalitaire</strong> est une dictature qui cherche à contrôler la totalité de la vie publique et privée de la population par la terreur, la propagande et l'embrigadement.</p>

      <h3>1. L'URSS de Staline (1924-1953)</h3>
      <p>Après la mort de Lénine, Staline s'impose à la tête du parti communiste de l'Union Soviétique. Il met en place un totalitarisme basé sur l'idéologie communiste :</p>
      <ul>
        <li><strong>Économie étatisée</strong> : Fin de la propriété privée. Staline impose la <strong>collectivisation forcée des terres</strong> en 1929. Les paysans doivent se regrouper dans de grandes fermes collectives (les <em>kolkhozes</em>). La résistance des riches paysans (les <em>koulaks</em>) est brisée par la déportation ou l'exécution (dékoulakisation). L'industrie est développée de force par des plans quinquennaux.</li>
        <li><strong>La Terreur de masse</strong> : La police politique (NKVD) traque les opposants. Pendant la <strong>Grande Terreur (1937-1938)</strong>, près de 750 000 personnes sont exécutées et des millions envoyées dans les camps de travail forcé (le <strong>Goulag</strong>).</li>
        <li><strong>Embrigadement et culte</strong> : Culte de la personnalité (Staline est appelé le "Petit Père des peuples"), propagande intensive, censure et encadrement de la jeunesse (les <em>Pionniers</em>).</li>
      </ul>

      <h3>2. L'Allemagne d'Hitler (1933-1945)</h3>
      <p>Profitant de la crise de 1929, Adolf Hitler, chef du parti nazi (NSDAP), est nommé chancelier le <strong>30 janvier 1933</strong>. Il supprime rapidement la démocratie et installe le IIIe Reich, un régime totalitaire raciste et antisémite :</p>
      <ul>
        <li><strong>Une idéologie raciste et antisémite</strong> : Selon son livre <em>Mein Kampf</em>, la "race aryenne" est supérieure et doit préserver sa pureté. Les Juifs sont exclus de la société. En 1935, les <strong>lois de Nuremberg</strong> les privent de la citoyenneté allemande et interdisent les mariages avec les Allemands. En 1938, le pogrom de la <em>Nuit de Cristal</em> marque un tournant de violence physique.</li>
        <li><strong>Le contrôle de la société</strong> : La jeunesse est embrigadée au sein des <em>Jeunesses hitlériennes</em>. La propagande (menée par Goebbels) et la censure sont omniprésentes. Le NSDAP devient parti unique.</li>
        <li><strong>La Terreur et l'expansionnisme</strong> : La police politique (Gestapo) et la milice (SS) enferment les opposants communistes dans des <strong>camps de concentration</strong> (Dachau ouvre dès mars 1933). Hitler réarme l'Allemagne et revendique un <strong>"espace vital"</strong> (<em>Lebensraum</em>), ce qui le conduit à annexer l'Autriche (Anschluss) puis la Tchécoslovaquie en 1938-1939.</li>
      </ul>

      <h2>III. La France face à la crise : Le Front populaire (1936)</h2>
      <p>Au début des années 1930, la France subit la crise économique. Les ligues d'extrême droite manifestent violemment (notamment le 6 février 1934), menaçant la République. Face à ce danger fasciste, les partis de gauche (SFIO socialiste, Parti Communiste, Parti Radical) s'unissent sous la bannière du <strong>Front populaire</strong> avec le slogan "Le pain, la paix, la liberté".</p>
      <p>Après leur victoire aux élections législatives de mai 1936, <strong>Léon Blum</strong> devient président du Conseil. Une immense vague de grèves joyeuses pousse le patronat à négocier. Le 8 juin 1936, Blum fait signer les <strong>accords de Matignon</strong>. Ce gouvernement adopte des réformes sociales historiques :</p>
      <ul>
        <li>Hausse importante des salaires.</li>
        <li>Reconnaissance du droit syndical et délégués du personnel.</li>
        <li>Création des deux premières semaines de <strong>congés payés</strong>.</li>
        <li>Limitation de la semaine de travail à <strong>40 heures</strong> (au lieu de 48).</li>
      </ul>
      <p>Bien que le Front populaire s'effondre dès 1938 en raison de divisions internes et de difficultés économiques, il reste un symbole fort de progrès social et de résistance démocratique face au totalitarisme.</p>
    `,
    summary: `
      ### Fiche Synthèse : L'entre-deux-guerres (1919-1939)

      * **La crise de 1929** : Krach boursier de Wall Street (Jeudi noir), faillites, chômage de masse mondial. Facteur clé de la déstabilisation politique en Europe (notamment en Allemagne).
      * **Le totalitarisme soviétique (Staline)** :
        * Idéologie communiste. Collectivisation forcée des campagnes (1929, kolkhozes, dékoulakisation).
        * Culte de la personnalité et propagande (Staline "Petit Père des peuples").
        * Grande Terreur (1937-1938) et déportation massive au Goulag (police NKVD).
      * **Le totalitarisme nazi (Hitler)** :
        * Idéologie raciste, antisémite (Mein Kampf) et expansionniste (espace vital).
        * Arrivée légale au pouvoir d'Hitler le **30 janvier 1933**.
        * Lois antisémites de **Nuremberg (1935)**, Nuit de Cristal (1938).
        * Embrigadement (Jeunesses hitlériennes), parti unique, terreur (Gestapo/SS, camps de concentration comme Dachau).
      * **L'expérience démocratique française : Le Front populaire (1936)** :
        * Réaction républicaine face aux ligues d'extrême droite (émeutes du 6 février 1934).
        * Alliance SFIO, PCF, Radicaux menée par **Léon Blum**. Victoire en mai 1936.
        * Grèves de joie suivies des **Accords de Matignon (juin 1936)** : 15 jours de congés payés, semaine de 40h, hausse des salaires.
    `,
    timeline: [
      { id: 't2_1', date: '24 octobre 1929', title: 'Krach de Wall Street', description: 'Début de la Grande Dépression économique mondiale.', category: 'social' },
      { id: 't2_2', date: '1929', title: 'Collectivisation en URSS', description: 'Staline impose la collectivisation forcée et élimine les koulaks.', category: 'politique' },
      { id: 't2_3', date: '30 janvier 1933', title: 'Hitler nommé Chancelier', description: 'Le président Hindenburg nomme Hitler à la tête du gouvernement allemand.', category: 'politique' },
      { id: 't2_4', date: 'Septembre 1935', title: 'Lois de Nuremberg', description: 'Lois raciales nazies excluant les Juifs de la communauté nationale.', category: 'social' },
      { id: 't2_5', date: 'Mai 1936', title: 'Victoire du Front populaire', description: 'La gauche unie remporte les législatives en France. Léon Blum chef du gouvernement.', category: 'politique' },
      { id: 't2_6', date: 'Juin 1936', title: 'Accords de Matignon', description: 'Signés sous l\'impulsion de Léon Blum, instaurant congés payés et 40h.', category: 'social' },
      { id: 't2_7', date: '1937 - 1938', title: 'Grande Terreur stalinienne', description: 'Procès truqués et exécution/déportation de centaines de milliers d\'opposants.', category: 'militaire' }
    ],
    mindMap: [
      { id: 'm2_root', label: 'Entre-deux-guerres' },
      { id: 'm2_b1', label: 'Crise de 1929', parentId: 'm2_root', description: 'Chute boursière américaine se propageant en Europe. Chômage, misère et instabilité.' },
      { id: 'm2_b2', label: 'Totalitarisme URSS', parentId: 'm2_root', description: 'Staline, communisme, plans quinquennaux, collectivisation forcée, goulag, grande terreur.' },
      { id: 'm2_b3', label: 'Totalitarisme Nazi', parentId: 'm2_root', description: 'Hitler, nazisme, racisme/antisémitisme (Nuremberg), embrigadement, Gestapo, espace vital.' },
      { id: 'm2_b4', label: 'Démocratie en France', parentId: 'm2_root', description: 'Réponse républicaine à la menace fasciste : Front populaire (Blum, 1936, congés payés, 40h).' }
    ],
    characters: [
      { id: 'c2_1', name: 'Adolf Hitler', dates: '1889-1945', role: 'Dictateur allemand (Führer)', importance: 'Fondateur du parti nazi et auteur de Mein Kampf. Nommé chancelier en 1933, il détruit la démocratie allemande, persécute les Juifs et lance l\'Europe dans le militarisme et la guerre.' },
      { id: 'c2_2', name: 'Joseph Staline', dates: '1878-1953', role: 'Secrétaire général de l\'URSS', importance: 'Il succède à Lénine et transforme l\'URSS en un État industriel et militaire hyper-centralisé. Par des purges massives et le système du Goulag, il exerce un contrôle absolu.' },
      { id: 'c2_3', name: 'Léon Blum', dates: '1872-1950', role: 'Homme d\'État français (SFIO)', importance: 'Premier chef de gouvernement socialiste en France en 1936. Leader du Front populaire, il a fait voter des réformes sociales emblématiques (congés payés, conventions collectives).' }
    ],
    dates: [
      { date: '24 octobre 1929', event: 'Krach de Wall Street', explanation: 'Le "Jeudi noir", point de départ de la crise économique globale.' },
      { date: '30 janvier 1933', event: 'Hitler nommé Chancelier', explanation: 'Accès légal au pouvoir d\'Adolf Hitler en Allemagne.' },
      { date: '1935', event: 'Lois de Nuremberg', explanation: 'Officialisation de l\'antisémitisme d\'État en Allemagne nazie.' },
      { date: 'Mai 1936', event: 'Élection du Front populaire', explanation: 'Alliance de gauche républicaine victorieuse en France.' },
      { date: '8 juin 1936', event: 'Accords de Matignon', explanation: 'Signature historique instaurant les réformes de Blum.' },
      { date: '1937-1938', event: 'Grande Terreur en URSS', explanation: 'Phase paroxystique de la répression politique stalinienne.' }
    ],
    flashcards: [
      { id: 'fc2_1', question: 'Quelle est la date exacte du "Jeudi noir" de Wall Street ?', answer: 'Le 24 octobre 1929.' },
      { id: 'fc2_2', question: 'Qu\'est-ce que la collectivisation des terres en URSS ?', answer: 'La mise en commun des terres, des outils et du bétail des paysans dans de grandes fermes collectives gérées par l\'État (kolkhozes).' },
      { id: 'fc2_3', question: 'Qu\'est-ce que le Goulag ?', answer: 'L\'organisme chargé des camps de travail forcé en URSS où Staline déportait les opposants politiques ou de simples suspects.' },
      { id: 'fc2_4', question: 'Comment Hitler accède-t-il au pouvoir ?', answer: 'De façon légale : il est nommé chancelier par le président Hindenburg le 30 janvier 1933 à la suite de succès électoraux.' },
      { id: 'fc2_5', question: 'Qu\'interdisent les lois de Nuremberg de 1935 ?', answer: 'Elles interdisent les mariages et relations sexuelles entre Juifs et Allemands, et retirent la citoyenneté allemande aux Juifs.' },
      { id: 'fc2_6', question: 'Quels partis composaient le Front populaire ?', answer: 'Le Parti Communiste (PCF), la SFIO (socialistes) et le Parti Radical (centre-gauche).' },
      { id: 'fc2_7', question: 'Quelles sont les deux réformes phares de juin 1936 pour le quotidien des ouvriers ?', answer: 'L\'octroi de 15 jours de congés payés et la réduction du temps de travail hebdomadaire à 40 heures.' }
    ],
    anecdotes: [
      "Léon Blum a été agressé physiquement par des militants d'extrême droite en février 1936, quelques mois avant son élection. Cet événement a renforcé le soutien de la gauche et des républicains à sa personne.",
      "Durant la collectivisation en URSS, les paysans rebelles préféraient tuer leur propre bétail plutôt que de le donner aux kolkhozes. Le pays a perdu en quelques années plus de la moitié de ses chevaux et de ses bovins.",
      "L'expression 'congés payés' a provoqué un immense enthousiasme populaire. À l'été 1936, des milliers de travailleurs ont vu la mer pour la première fois de leur vie, voyageant grâce aux billets de train à tarif réduit créés par Léo Lagrange."
    ],
    comparisonTable: {
      headers: ['Caractéristiques', 'URSS de Staline', 'Allemagne d\'Hitler'],
      rows: [
        { title: 'Chef et culte', values: ['Joseph Staline ("Petit Père des peuples")', 'Adolf Hitler ("Le Führer")'] },
        { title: 'Idéologie', values: ['Communisme (société sans classe, égalitarisme)', 'Nazisme (racisme, antisémitisme, espace vital)'] },
        { title: 'Économie', values: ['Collectivisation forcée, plans quinquennaux', 'Dirigisme d\'État, réarmement intensif'] },
        { title: 'Moyens de Terreur', values: ['NKVD (police secrète), Goulag, procès politiques', 'Gestapo et SS, camps de concentration (Dachau)'] },
        { title: 'Jeunesse', values: ['Les Pionniers et le Komsomol', 'Les Jeunesses hitlériennes'] }
      ]
    },
    questions: [
      {
        id: 'q2_1',
        type: 'qcm',
        difficulty: 'easy',
        question: 'À quelle date Adolf Hitler a-t-il été nommé chancelier de l\'Allemagne ?',
        options: ['11 novembre 1918', '30 janvier 1933', '6 février 1934', '18 juin 1940'],
        answer: '30 janvier 1933',
        explanation: 'Hitler a été nommé chancelier par le président Paul von Hindenburg le 30 janvier 1933 suite aux victoires électorales du parti nazi.',
        trap: 'Il n\'a pas pris le pouvoir par un coup d\'État en 1933, mais a été nommé légalement.'
      },
      {
        id: 'q2_2',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Le Front populaire a instauré la semaine de 40 heures de travail en France.',
        answer: true,
        explanation: 'Les accords de Matignon et les lois de juin 1936 ont réduit la durée hebdomadaire du travail de 48h à 40h sans baisse de salaire.',
        mnemonic: 'Blum = 40h et congés payés.'
      },
      {
        id: 'q2_3',
        type: 'trous',
        difficulty: 'medium',
        question: 'En URSS, la collectivisation des terres regroupe les paysans dans des [kolkhozes] tandis que les opposants sont déportés au [Goulag] par la police secrète appelée le [NKVD].',
        answer: ['kolkhozes', 'Goulag', 'NKVD'],
        explanation: 'La collectivisation débute en 1929. Elle provoque une terrible famine en Ukraine (Holodomor).'
      },
      {
        id: 'q2_4',
        type: 'personnage',
        difficulty: 'medium',
        question: 'Qui dirige la SFIO et devient président du Conseil en France après la victoire du Front populaire en 1936 ?',
        answer: 'Léon Blum',
        explanation: 'Léon Blum est le chef charismatique de la SFIO (parti socialiste français) qui conduit le gouvernement réformateur du Front populaire.',
        trap: 'Attention, Maurice Thorez était le chef des communistes et soutenait Blum sans participer directement au gouvernement.'
      },
      {
        id: 'q2_5',
        type: 'relier',
        difficulty: 'hard',
        question: 'Reliez chaque terme de l\'entre-deux-guerres à sa définition correcte :',
        options: [
          'Contrôle absolu de la société par l\'État',
          'Exploitation agricole collective en URSS',
          'Camps de travail forcé en Union soviétique',
          'Police secrète de l\'Allemagne nazie'
        ],
        answer: {
          'Totalitarisme': 'Contrôle absolu de la société par l\'État',
          'Kolkhoze': 'Exploitation agricole collective en URSS',
          'Goulag': 'Camps de travail forcé en Union soviétique',
          'Gestapo': 'Police secrète de l\'Allemagne nazie'
        },
        explanation: 'Ces notions définissent le fonctionnement institutionnel et répressif des régimes totalitaires de l\'époque.'
      },
      {
        id: 'q2_6',
        type: 'ordonner',
        difficulty: 'hard',
        question: 'Ordonnez chronologiquement ces jalons majeurs de l\'entre-deux-guerres :',
        options: [
          'Krach boursier de Wall Street',
          'Lois de Nuremberg en Allemagne',
          'Signature des accords de Matignon en France',
          'Nomination d\'Hitler comme chancelier'
        ],
        answer: [0, 3, 1, 2], // Krach (1929) -> Hitler (1933) -> Nuremberg (1935) -> Matignon (1936)
        explanation: 'La crise de 1929 déstabilise l\'Allemagne et favorise Hitler (janvier 1933), qui vote les lois antisémites (1935), alors que la France choisit le Front populaire (1936).'
      },
      {
        id: 'q2_7',
        type: 'date',
        difficulty: 'medium',
        question: 'En quelle année ont été votées les lois antisémites de Nuremberg en Allemagne ?',
        options: ['1933', '1935', '1936', '1938'],
        answer: '1935',
        explanation: 'Les lois de Nuremberg ont été promulguées le 15 septembre 1935 lors du congrès du parti nazi.',
        trap: 'Dachau est créé en 1933, les lois raciales en 1935, et la Nuit de Cristal a lieu en 1938.'
      },
      {
        id: 'q2_8',
        type: 'brevet',
        difficulty: 'expert',
        question: 'Comparez les méthodes d\'embrigadement et de terreur employées par les régimes stalinien et nazi.',
        answer: 'Les deux régimes partagent des méthodes similaires pour soumettre la société : 1) L\'embrigadement par la propagande de masse, le culte de la personnalité (Hitler le Führer, Staline le Petit Père des peuples), et le contrôle de la jeunesse (Jeunesses hitlériennes en Allemagne, Pionniers/Komsomol en URSS). 2) La terreur policière avec une police politique surpuissante (Gestapo/SS en Allemagne, NKVD en URSS), la suppression des libertés individuelles, un parti unique, et l\'existence d\'un vaste système concentrationnaire (les camps nazis comme Dachau, le réseau du Goulag en Sibérie) pour éliminer les opposants réels ou supposés.',
        explanation: 'La réponse doit mentionner la police secrète, les camps de travail/concentration, la propagande et l\'encadrement obligatoire de la jeunesse.'
      },
      {
        id: 'q2_9',
        type: 'qcm',
        difficulty: 'easy',
        question: "Quel parti politique unique est dirigé par Adolf Hitler sous le IIIe Reich ?",
        options: ['Le SPD', 'Le NSDAP (parti nazi)', 'Le KPD', 'Le parti fasciste'],
        answer: 'Le NSDAP (parti nazi)',
        explanation: "Le Parti National-Socialiste des Travailleurs Allemands (NSDAP) est le seul parti autorisé sous le régime totalitaire nazi.",
        mnemonic: "NSDAP = National-Socialiste."
      },
      {
        id: 'q2_10',
        type: 'boolean',
        difficulty: 'easy',
        question: "Vrai ou Faux : Léon Blum était le chef du gouvernement du Front populaire.",
        answer: true,
        explanation: "Léon Blum SFIO devient président du Conseil en juin 1936 après la victoire électorale du Front populaire.",
        mnemonic: "Blum = Front populaire 1936."
      },
      {
        id: 'q2_11',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quel camp de concentration allemand a été ouvert dès mars 1933 pour y enfermer les opposants politiques ?",
        options: ['Auschwitz', 'Dachau', 'Buchenwald', 'Mauthausen'],
        answer: 'Dachau',
        explanation: "Dachau est le premier camp de concentration nazi permanent, créé en mars 1933, dès l'arrivée d'Hitler au pouvoir pour y enfermer les communistes et socialistes.",
        trap: "Auschwitz est un centre de mise à mort créé plus tard (1940)."
      },
      {
        id: 'q2_12',
        type: 'personnage',
        difficulty: 'hard',
        question: "Qui était le ministre de la propagande et de l'information du régime nazi ?",
        options: ['Heinrich Himmler', 'Joseph Goebbels', 'Hermann Göring', 'Reinhard Heydrich'],
        answer: 'Joseph Goebbels',
        explanation: "Joseph Goebbels a dirigé le ministère de la propagande et de l'éducation du peuple, orchestrant le lavage de cerveau de la population allemande.",
        mnemonic: "Goebbels = Propagande nazie."
      },
      {
        id: 'q2_13',
        type: 'qcm',
        difficulty: 'hard',
        question: "Quelle terrible famine provoquée par la collectivisation forcée des terres a fait des millions de morts en Ukraine en 1932-1933 ?",
        options: ['La Grande Terreur', 'Holodomor', 'La Dékoulakisation', 'Les Purges de Moscou'],
        answer: 'Holodomor',
        explanation: "Holodomor ('extermination par la faim' en ukrainien) désigne la famine provoquée par la politique agricole de Staline, faisant entre 3 et 5 millions de morts.",
        mnemonic: "Holodomor = Ukraine 1932-1933."
      },
      {
        id: 'q2_14',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quelle organisation paramilitaire de jeunesse était obligatoire pour les garçons de 10 à 18 ans en Allemagne nazie ?",
        options: ["Les Pionniers", "Les Jeunesses hitlériennes", "La Gestapo", "Le Komsomol"],
        answer: "Les Jeunesses hitlériennes",
        explanation: "Les Jeunesses hitlériennes (Hitlerjugend) visaient à endoctriner les jeunes Allemands, à leur enseigner l'obéissance aveugle au Führer et à les préparer à devenir des soldats.",
        mnemonic: "Jeunesse nazie = Jeunesses hitlériennes."
      },
      {
        id: 'q2_15',
        type: 'boolean',
        difficulty: 'easy',
        question: "Vrai ou Faux : La collectivisation des terres en URSS a conduit à la création de coopératives agricoles appelées kolkhozes.",
        answer: true,
        explanation: "La collectivisation forcée des terres à partir de 1929 détruit les exploitations individuelles au profit des kolkhozes (fermes collectives de paysans) et sovkhozes (fermes d'État).",
        mnemonic: "Kolkhoze = collectif."
      },
      {
        id: 'q2_16',
        type: 'qcm',
        difficulty: 'hard',
        question: "Quelles organisations françaises d'extrême droite ont mené la manifestation violente du 6 février 1934 à Paris ?",
        options: ["Les syndicats ouvriers", "Les ligues factieuses", "Les comités socialistes", "Les partis républicains"],
        answer: "Les ligues factieuses",
        explanation: "Les ligues d'extrême droite (comme l'Action française ou les Croix-de-Feu) manifestent violemment devant la Chambre des députés, ce que la gauche interprète comme une menace factieuse de coup d'État.",
        trap: "Ce n'était pas une révolution communiste, mais une émeute antiparlementaire d'extrême droite."
      },
      {
        id: 'q2_17',
        type: 'qcm',
        difficulty: 'easy',
        question: "En quelle année Joseph Staline s'impose-t-il définitivement à la tête de l'URSS ?",
        options: ["1917", "1924", "1929", "1936"],
        answer: "1924",
        explanation: "Après la mort de Lénine en janvier 1924, Staline écarte progressivement ses opposants politiques pour devenir le seul maître du Kremlin.",
        mnemonic: "Mort de Lénine = 1924 = Début de Staline."
      },
      {
        id: 'q2_18',
        type: 'qcm',
        difficulty: 'easy',
        question: "Quel parti politique, dirigé par Adolf Hitler, remporte les élections de 1932 et accède au pouvoir en 1933 ?",
        options: ["Le KPD (Communistes)", "Le SPD (Socialistes)", "Le NSDAP (Parti nazi)", "Le Zentrum (Catholiques)"],
        answer: "Le NSDAP (Parti nazi)",
        explanation: "Le Parti national-socialiste des travailleurs allemands (NSDAP), mené par Hitler, est devenu le premier parti d'Allemagne lors des crises économiques avant sa nomination comme chancelier.",
        mnemonic: "Parti nazi = NSDAP."
      },
      {
        id: 'q2_19',
        type: 'boolean',
        difficulty: 'easy',
        question: "Vrai ou Faux : Les accords de Matignon de juin 1936 ont accordé pour la première fois les congés payés aux ouvriers français.",
        answer: true,
        explanation: "Signés sous la présidence de Léon Blum, les accords de Matignon et les lois de juin 1936 instituent 15 jours de congés payés et la semaine de 40 heures.",
        mnemonic: "Blum = Congés payés + 40 heures."
      },
      {
        id: 'q2_20',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quel nom porte la politique de grands travaux et de réformes sociales lancée par Franklin D. Roosevelt aux États-Unis en 1933 ?",
        options: ["Le New Deal", "La Nouvelle Frontière", "Le Fair Deal", "La Grande Société"],
        answer: "Le New Deal",
        explanation: "Le New Deal ('Nouvelle Donne') est la politique interventionniste de l'État fédéral américain pour résoudre la Grande Dépression née de la crise de 1929.",
        mnemonic: "Roosevelt = New Deal (1933)."
      },
      {
        id: 'q2_21',
        type: 'boolean',
        difficulty: 'medium',
        question: "Vrai ou Faux : Le Front populaire s'est maintenu au pouvoir sans interruption jusqu'au déclenchement de la Seconde Guerre mondiale.",
        answer: false,
        explanation: "Le Front populaire s'effondre politiquement en 1937 avec la démission de Léon Blum, et prend fin définitivement en 1938 sous le gouvernement d'Édouard Daladier.",
        mnemonic: "Front populaire = 1936 - 1938."
      },
      {
        id: 'q2_22',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quel titre Adolf Hitler prend-il en 1934 après la mort du président Hindenburg, cumulant les pouvoirs de chancelier et de chef d'État ?",
        options: ["Le Reichsführer", "Le Führer", "Le Duce", "Le Kaizer"],
        answer: "Le Führer",
        explanation: "Hitler s'autoproclame 'Führer und Reichskanzler' (Guide et chancelier du Reich), éliminant les derniers contre-pouvoirs constitutionnels.",
        mnemonic: "Hitler = Le Führer."
      },
      {
        id: 'q2_23',
        type: 'qcm',
        difficulty: 'easy',
        question: "Comment s'appelle l'organisation d'embrigadement obligatoire des garçons de 10 à 18 ans sous le régime nazi ?",
        options: ["Les Pionniers", "La Jeunesse hitlérienne", "Les Fils de la Louve", "Les Komsomols"],
        answer: "La Jeunesse hitlérienne",
        explanation: "La Jeunesse hitlérienne (Hitlerjugend) endoctrinait les jeunes Allemands pour les préparer à devenir des soldats obéissants et fidèles au régime.",
        mnemonic: "Jeunesse hitlérienne = Endoctrinement."
      },
      {
        id: 'q2_24',
        type: 'boolean',
        difficulty: 'hard',
        question: "Vrai ou Faux : La Grande Terreur stalinienne (1937-1938) a conduit à la déportation ou à l'exécution de près de la moitié des membres du Parti communiste.",
        answer: true,
        explanation: "Staline a orchestré des purges intenses de l'armée et du parti lors des procès de Moscou, éliminant physiquement les cadres historiques.",
        mnemonic: "Grande Terreur = Purges massives."
      },
      {
        id: 'q2_25',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quel ministre de l'Éducation nationale du Front populaire a allongé la scolarité obligatoire et démocratisé les musées et le sport ?",
        options: ["Jean Zay", "Jules Ferry", "Edouard Herriot", "Aristide Briand"],
        answer: "Jean Zay",
        explanation: "Jean Zay a profondément réformé l'école publique, favorisé le sport et la culture populaire, avant d'être assassinées par la Milice de Vichy sous l'Occupation.",
        mnemonic: "Jean Zay = Éducation Front populaire."
      },
      {
        id: 'q2_26',
        type: 'qcm',
        difficulty: 'hard',
        question: "Qu'étaient les lois de Nuremberg adoptées en Allemagne nazie en septembre 1935 ?",
        options: ["Des lois de relance industrielle", "Des lois raciales et antisémites", "Des accords de paix avec l'Italie", "L'abolition de la Constitution"],
        answer: "Des lois raciales et antisémites",
        explanation: "Les lois de Nuremberg excluent les Juifs de la citoyenneté allemande et interdisent les mariages ou relations sexuelles entre Juifs et non-Juifs.",
        mnemonic: "Nuremberg 1935 = Antisémitisme légal."
      },
      {
        id: 'q2_27',
        type: 'boolean',
        difficulty: 'medium',
        question: "Vrai ou Faux : En URSS, les 'Koulaks' étaient de riches industriels urbains expropriés par Staline.",
        answer: false,
        explanation: "Les Koulaks étaient des paysans considérés comme aisés ou opposés à la collectivisation des terres. Ils ont été déportés ou exécutés en masse lors de la 'dékoulakisation'.",
        trap: "Les Koulaks appartenaient au monde agricole (campagnes) et non industriel (villes)."
      }
    ]
  },
  {
    id: 'ch3',
    slug: 'seconde-guerre-mondiale',
    number: 3,
    subject: 'histoire',
    title: 'La Seconde Guerre mondiale',
    subtitle: 'Une guerre d\'anéantissement et le génocide des Juifs et des Roms (1939-1945)',
    introduction: 'La Seconde Guerre mondiale est le conflit le plus meurtrier de l\'histoire. Opposant l\'Axe aux Alliés, c\'est une guerre d\'anéantissement idéologique et technologique. Elle est marquée par le génocide planifié des Juifs et des Roms (la Shoah), et par la division de la France entre le régime collaborateur de Vichy et la Résistance.',
    courseContent: `
      <h2>I. Les grandes étapes d'un conflit mondial</h2>
      <p>La guerre oppose les forces de <strong>l'Axe</strong> (Allemagne, Italie, Japon) aux <strong>Alliés</strong> (Royaume-Uni, URSS, États-Unis, France libre).</p>
      <ol>
        <li><strong>Les victoires de l'Axe (1939-1942)</strong> : Le <strong>1er septembre 1939</strong>, l'Allemagne envahit la Pologne, déclenchant le conflit. Grâce à la "guerre éclair" (<em>Blitzkrieg</em>), Hitler conquiert l'Europe de l'Ouest (dont la France en mai-juin 1940). En <strong>juin 1941</strong>, il rompt le pacte germano-soviétique et envahit l'URSS. En <strong>décembre 1941</strong>, le Japon attaque la base américaine de <strong>Pearl Harbor</strong>, provoquant l'entrée en guerre des États-Unis.</li>
        <li><strong>Le tournant de la guerre (1942-1943)</strong> : L'Axe est stoppé sur plusieurs fronts. La bataille de <strong>Stalingrad</strong> (septembre 1942 - février 1943) se solde par la capitulation d'une armée allemande face aux Soviétiques. Dans le Pacifique, les Américains l'emportent à <em>Midway</em>, tandis que les Britanniques gagnent à <em>El Alamein</em> en Égypte.</li>
        <li><strong>La victoire des Alliés (1943-1945)</strong> : Les Alliés progressent. Ils débarquent en Italie puis en Normandie le <strong>6 juin 1944</strong> (opération Overlord) et en Provence. L'Allemagne, prise en étau, capitule le <strong>8 mai 1945</strong>. Pour soumettre le Japon, les États-Unis larguent deux <strong>bombes atomiques sur Hiroshima et Nagasaki</strong> (6 et 9 août 1945). Le Japon capitule le <strong>2 septembre 1945</strong>.</li>
      </ol>

      <h2>II. Une guerre d'anéantissement</h2>
      <p>C'est une <strong>guerre d'anéantissement</strong> car l'objectif est de détruire totalement l'ennemi (soldats comme civils) au nom d'impératifs idéologiques :</p>
      <ul>
        <li><strong>Mobilisation scientifique et industrielle</strong> : Projet Manhattan pour la bombe nucléaire, usines géantes d'armement.</li>
        <li><strong>Violence extrême contre les civils</strong> : Bombardements massifs des villes (Londres, Dresde, Tokyo), représailles, viols et crimes de guerre (comme le massacre de Nankin par les Japonais).</li>
      </ul>

      <div class="bg-violet-50 dark:bg-violet-950/30 border-l-4 border-violet-500 p-4 my-6 rounded-r">
        <h4 class="font-bold text-violet-700 dark:text-violet-300">III. Le génocide des Juifs et des Roms (Shoah)</h4>
        <p class="text-sm mt-1">L'antisémitisme nazi passe à une phase d'extermination industrielle :</p>
        <ul class="text-sm mt-2">
          <li><strong>Les ghettos (1939-1941)</strong> : Les Juifs de Pologne sont enfermés dans des quartiers insalubres (comme Varsovie) où ils meurent de faim et de maladies.</li>
          <li><strong>La Shoah par balles (dès 1941)</strong> : Lors de l'invasion de l'URSS, des groupes mobiles de soldats SS (les <strong>Einsatzgruppen</strong>) fusillent plus d'un million de Juifs et de Roms et les enterrent dans des fosses communes (ex: Babi Yar).</li>
          <li><strong>Les centres de mise à mort (1942-1945)</strong> : Décidée à la conférence de Wannsee en 1942 ("Solution finale"), l'extermination est industrialisée. Les Juifs et Roms d'Europe sont déportés par train vers des camps équipés de chambres à gaz et de fours crématoires (comme <strong>Auschwitz-Birkenau</strong> et Treblinka). Ce génocide fait près de <strong>6 millions de morts juifs</strong> (Shoah) et 250 000 Roms.</li>
        </ul>
      </div>

      <h2>IV. La France dans la guerre : Collaboration et Résistance</h2>
      <p>Battue en juin 1940, la France se divise en deux attitudes :</p>
      <h3>1. L'État de Vichy et la Collaboration</h3>
      <p>Le maréchal <strong>Philippe Pétain</strong> signe l'armistice le 22 juin 1940. Il obtient les pleins pouvoirs, fonde le régime autoritaire de Vichy ("Travail, Famille, Patrie") et s'engage dans la <strong>collaboration avec l'Allemagne nazie</strong>. Ce régime met en œuvre des lois antisémites d'État et aide la Gestapo à déporter les Juifs de France (ex: la <strong>rafle du Vél d'Hiv</strong> en juillet 1942). Il impose aussi le Service du Travail Obligatoire (STO) en Allemagne.</p>
      
      <h3>2. La France libre et la Résistance</h3>
      <p>Depuis Londres, le général <strong>Charles de Gaulle</strong> lance son célèbre <strong>Appel du 18 juin 1940</strong> refusant la défaite et fondant les Forces Françaises Libres (FFL). À l'intérieur du pays, des réseaux clandestins se forment (les <em>maquis</em>) pour saboter, espionner et imprimer des journaux interdits. <strong>Jean Moulin</strong> est envoyé par De Gaulle en 1943 pour unifier les mouvements dans le <strong>Conseil National de la Résistance (CNR)</strong>. Grâce à l'action conjointe de la Résistance intérieure (FFI) et des alliés, la France est libérée en août 1944.</p>
    `,
    summary: `
      ### Fiche Synthèse : La Seconde Guerre mondiale (1939-1945)

      * **Les coalitions** : L'Axe (Allemagne, Italie, Japon) face aux Alliés (Royaume-Uni, URSS, États-Unis, France libre).
      * **Les phases clés** :
        * *1939-1941* : Guerre éclair, domination de l'Axe. Invasion de la Pologne (1er sept. 1939), défaite française (1940), invasion de l'URSS et Pearl Harbor (1941).
        * *1942-1943* : Tournant géopolitique (bataille décisive de Stalingrad).
        * *1944-1945* : Débarquement en Normandie (6 juin 1944). Capitulation allemande (8 mai 1945). Bombes atomiques à Hiroshima et Nagasaki et capitulation japonaise (septembre 1945).
      * **Guerre d'anéantissement** : Mobilisation totale, objectifs idéologiques extrêmes, armes de destruction massive, souffrance absolue des civils (60 millions de morts au total).
      * **Le Génocide** : Extermination méthodique des Juifs (6 millions de morts, soit la Shoah) et des Roms (250 000 morts) via les ghettos, les Einsatzgruppen ("Shoah par balles") et les centres de mise à mort (chambres à gaz d'Auschwitz-Birkenau).
      * **La France divisée** :
        * *Régime de Vichy* (Pétain) : collaboration d'État avec l'Allemagne, lois antisémites, STO, rafle du Vel d'Hiv (juillet 1942).
        * *Résistance* : De Gaulle (Appel du 18 juin 1940, FFL) et Résistance intérieure unifiée par Jean Moulin au sein du CNR (1943).
    `,
    timeline: [
      { id: 't3_1', date: '1er sept. 1939', title: 'Invasion de la Pologne', description: 'L\'Allemagne attaque la Pologne, provoquant l\'entrée en guerre de la France et du Royaume-Uni.', category: 'militaire' },
      { id: 't3_2', date: '18 juin 1940', title: 'Appel du général de Gaulle', description: 'Depuis Londres, De Gaulle appelle à poursuivre la lutte.', category: 'politique' },
      { id: 't3_3', date: 'Juin 1941', title: 'Invasion de l\'URSS (Barbarossa)', description: 'Hitler rompt le pacte de non-agression et attaque l\'Union soviétique.', category: 'militaire' },
      { id: 't3_4', date: '7 déc. 1941', title: 'Attaque de Pearl Harbor', description: 'Le Japon bombarde la flotte américaine, provoquant l\'entrée en guerre des USA.', category: 'militaire' },
      { id: 't3_5', date: 'Févr. 1943', title: 'Victoire soviétique à Stalingrad', description: 'Première grande défaite terrestre de l\'Allemagne nazie, tournant du conflit.', category: 'militaire' },
      { id: 't3_6', date: '6 juin 1944', title: 'Débarquement en Normandie', description: 'Ouverture du front à l\'ouest par les troupes alliées.', category: 'militaire' },
      { id: 't3_7', date: '8 mai 1945', title: 'Capitulation de l\'Allemagne', description: 'Fin de la Seconde Guerre mondiale en Europe.', category: 'diplomatique' },
      { id: 't3_8', date: '6 & 9 août 1945', title: 'Hiroshima & Nagasaki', description: 'Bombardements atomiques américains sur le Japon.', category: 'militaire' }
    ],
    mindMap: [
      { id: 'm3_root', label: '2nde Guerre Mondiale' },
      { id: 'm3_b1', label: 'Chronologie', parentId: 'm3_root', description: 'Invasion de la Pologne (39), Stalingrad (43), Débarquement (44), Hiroshima & Capitulations (45).' },
      { id: 'm3_b2', label: 'Anéantissement', parentId: 'm3_root', description: 'Guerre idéologique, bombardements des civils, mobilisation industrielle totale, bombe atomique.' },
      { id: 'm3_b3', label: 'Génocide (Shoah)', parentId: 'm3_root', description: 'Shoah et génocide des Roms. Ghettos, Einsatzgruppen, centres de mise à mort (Auschwitz-Birkenau).' },
      { id: 'm3_b4', label: 'La France', parentId: 'm3_root', description: 'Régime de Vichy collaborateur (Pétain, STO, Rafle du Vel d\'Hiv) vs Résistance (De Gaulle, Jean Moulin, CNR).' }
    ],
    characters: [
      { id: 'c3_1', name: 'Charles de Gaulle', dates: '1890-1970', role: 'Général et chef de la France libre', importance: 'Auteur de l\'Appel du 18 juin 1940. Il organise la résistance extérieure (FFL) et le gouvernement provisoire de la République française (GPRF) pour restaurer la démocratie en 1944.' },
      { id: 'c3_2', name: 'Jean Moulin', dates: '1899-1943', role: 'Héros de la Résistance française', importance: 'Ancien préfet, envoyé en France par De Gaulle pour unifier les réseaux de résistance intérieure souvent rivaux. Il crée le Conseil National de la Résistance (CNR) en 1943. Arrêté et torturé par la Gestapo, il meurt sans parler.' },
      { id: 'c3_3', name: 'Winston Churchill', dates: '1874-1965', role: 'Premier ministre du Royaume-Uni', importance: 'Symbole de la résistance britannique face au nazisme durant la bataille d\'Angleterre. Par son charisme et ses discours, il maintient le moral du pays et forge la Grande Alliance contre l\'Axe.' },
      { id: 'c3_4', name: 'Franklin D. Roosevelt', dates: '1882-1945', role: 'Président des États-Unis', importance: 'Il engage l\'économie américaine comme "l\'arsenal des démocraties" puis fait entrer son pays en guerre en 1941. Il est l\'un des principaux architectes de la victoire alliée et de la création de l\'ONU.' }
    ],
    dates: [
      { date: '1er septembre 1939', event: 'Invasion de la Pologne', explanation: 'Début officiel du conflit mondial en Europe.' },
      { date: '18 juin 1940', event: 'Appel du général de Gaulle', explanation: 'Acte de naissance de la Résistance extérieure française.' },
      { date: '7 décembre 1941', event: 'Attaque de Pearl Harbor', explanation: 'L\'agression japonaise pousse les USA dans la guerre.' },
      { date: '1942-1943', event: 'Bataille de Stalingrad', explanation: 'La défaite allemande marque le tournant décisif sur le front de l\'Est.' },
      { date: '6 juin 1944', event: 'Débarquement en Normandie', explanation: 'Lancement de l\'opération de libération de l\'Europe de l\'Ouest.' },
      { date: '8 mai 1945', event: 'Capitulation allemande', explanation: 'Fin des hostilités en Europe (victoire des Alliés).' },
      { date: 'Août 1945', event: 'Bombes atomiques sur le Japon', explanation: 'Destruction de Hiroshima et Nagasaki, capitulation du Japon le 2 septembre.' }
    ],
    flashcards: [
      { id: 'fc3_1', question: 'Quel événement pousse les États-Unis à entrer en guerre ?', answer: 'L\'attaque surprise de la base navale de Pearl Harbor par l\'aviation japonaise le 7 décembre 1941.' },
      { id: 'fc3_2', question: 'Quelle bataille est considérée comme le grand tournant terrestre en Europe ?', answer: 'La bataille de Stalingrad (1942-1943), qui se termine par la défaite de la VIe armée allemande de Paulus.' },
      { id: 'fc3_3', question: 'Qui étaient les Einsatzgruppen ?', answer: 'Des unités de soldats SS mobiles chargées de fusiller de manière systématique les Juifs et les Roms à l\'arrière du front de l\'Est ("Shoah par balles").' },
      { id: 'fc3_4', question: 'Quel est le principal camp de mise à mort industriel nazi ?', answer: 'Le complexe d\'Auschwitz-Birkenau en Pologne occupée, où plus d\'un million de personnes ont été assassinées.' },
      { id: 'fc3_5', question: 'Quelles sont les valeurs clés du régime de Vichy ?', answer: 'La devise du régime est "Travail, Famille, Patrie", remplaçant la devise républicaine.' },
      { id: 'fc3_6', question: 'Quel rôle a joué Jean Moulin dans la Résistance ?', answer: 'Il a été le représentant de De Gaulle en France occupé, unifiant les mouvements au sein du Conseil National de la Résistance (CNR) en mai 1943.' },
      { id: 'fc3_7', question: 'Qu\'est-ce que le STO ?', answer: 'Le Service du Travail Obligatoire, imposant aux jeunes Français d\'aller travailler dans les usines allemandes à partir de 1943.' }
    ],
    anecdotes: [
      "Le code radio diffusé sur la BBC pour annoncer le débarquement de Normandie était le vers de Verlaine : 'Les sanglots longs des violons de l'automne blessent mon cœur d'une langueur monotone'. C'était le signal pour les sabotages de la Résistance.",
      "Durant la bataille de Stalingrad, la lutte pour le contrôle de la gare centrale ou de certaines usines était si féroce que des pièces de bâtiments changeaient de mains plusieurs fois par jour. Les soldats appelaient cette guerre urbaine ultra-rapprochée la 'guerre des rats'.",
      "Le maréchal Pétain a rencontré Adolf Hitler à Montoire-sur-le-Loir le 24 octobre 1940. La photo de leur poignée de main est devenue le symbole officiel de la collaboration d'État."
    ],
    questions: [
      {
        id: 'q3_1',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel événement marque le début de la Seconde Guerre mondiale en Europe ?',
        options: ['L\'annexion de l\'Autriche', 'L\'invasion de la Pologne', 'L\'attaque de Pearl Harbor', 'Le débarquement de Normandie'],
        answer: 'L\'invasion de la Pologne',
        explanation: 'Le 1er septembre 1939, l\'armée allemande envahit la Pologne, ce qui entraîne l\'entrée en guerre de la France et du Royaume-Uni deux jours plus tard.',
        trap: 'Pearl Harbor a lieu en 1941 et marque l\'entrée en guerre des États-Unis, pas le début mondial.'
      },
      {
        id: 'q3_2',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Le maréchal Pétain a lancé l\'Appel du 18 juin depuis Londres.',
        answer: false,
        explanation: 'C\'est le général Charles de Gaulle qui lance l\'Appel du 18 juin 1940 pour résister. Pétain a signé l\'armistice et dirigé le régime de Vichy en collaborant.',
        mnemonic: 'Gaulle = résistance à Londres ; Pétain = collaboration à Vichy.'
      },
      {
        id: 'q3_3',
        type: 'trous',
        difficulty: 'medium',
        question: 'Le régime de [Vichy] dirigé par le maréchal [Pétain] a collaboré activement avec l\'Allemagne, notamment en organisant la rafle du [Vél d\'Hiv] en juillet 1942.',
        answer: ['Vichy', 'Pétain', 'Vél d\'Hiv'],
        explanation: 'La rafle du Vélodrome d\'Hiver est la plus grande arrestation massive de Juifs réalisée en France par la police française.'
      },
      {
        id: 'q3_4',
        type: 'personnage',
        difficulty: 'medium',
        question: 'Quel résistant français a unifié les mouvements de résistance intérieure au sein du CNR en 1943 avant d\'être arrêté par la Gestapo ?',
        answer: 'Jean Moulin',
        explanation: 'Jean Moulin a unifié la Résistance intérieure sous l\'autorité du Général de Gaulle, fondant le Conseil National de la Résistance (CNR).',
        trap: 'Ne confondez pas Jean Moulin et Charles de Gaulle. De Gaulle était à Londres tandis que Moulin agissait dans la clandestinité sur le sol français.'
      },
      {
        id: 'q3_5',
        type: 'relier',
        difficulty: 'hard',
        question: 'Associez chaque phase ou concept de la Shoah à son fait marquant :',
        options: [
          'Fusillades de masse en URSS occupée',
          'Camp de concentration et centre de mise à mort',
          'Enfermement forcé à Varsovie',
          'Planification de la Solution finale'
        ],
        answer: {
          'Einsatzgruppen': 'Fusillades de masse en URSS occupée',
          'Auschwitz-Birkenau': 'Camp de concentration et centre de mise à mort',
          'Ghettos': 'Enfermement forcé à Varsovie',
          'Conférence de Wannsee': 'Planification de la Solution finale'
        },
        explanation: 'Ces quatre éléments tracent l\'évolution de la persécution nazie vers une extermination planifiée et industrielle.'
      },
      {
        id: 'q3_6',
        type: 'ordonner',
        difficulty: 'hard',
        question: 'Ordonnez chronologiquement ces jalons de la Seconde Guerre mondiale :',
        options: [
          'Débarquement de Normandie',
          'Attaque de Pearl Harbor',
          'Capitulation de l\'Allemagne',
          'Invasion de la Pologne'
        ],
        answer: [3, 1, 0, 2], // Pologne (1939) -> Pearl Harbor (1941) -> Normandie (1944) -> Capitulation (1945)
        explanation: 'La séquence est : Début du conflit (septembre 1939), mondialisation avec Pearl Harbor (décembre 1941), libération avec la Normandie (juin 1944) et capitulation allemande (mai 1945).'
      },
      {
        id: 'q3_7',
        type: 'date',
        difficulty: 'medium',
        question: 'À quelle date a eu lieu le débarquement allié en Normandie ?',
        options: ['18 juin 1940', '11 novembre 1918', '6 juin 1944', '8 mai 1945'],
        answer: '6 juin 1944',
        explanation: 'Le 6 juin 1944 est le jour J de l\'opération Overlord, le plus grand débarquement amphibie de l\'histoire, mené par les troupes alliées en Normandie.',
        mnemonic: '6/6/44 (le triple 6-6-4+4=8, non, juste 6 juin 44 !)'
      },
      {
        id: 'q3_8',
        type: 'brevet',
        difficulty: 'expert',
        question: 'Expliquez pourquoi la Seconde Guerre mondiale est qualifiée de "guerre d\'anéantissement". Donnez des exemples précis pour le front militaire et les civils.',
        answer: 'C\'est une guerre d\'anéantissement car elle vise à détruire totalement l\'adversaire, sans distinction entre civils et militaires, pour des motifs idéologiques. Sur le plan militaire, cela s\'illustre par la violence extrême des combats (bataille de Stalingrad) et le traitement inhumain des prisonniers. Sur le plan civil, cela se traduit par des bombardements stratégiques massifs (Londres, Dresde, Hiroshima/Nagasaki), la mobilisation de toutes les industries (bombe atomique), et surtout par la mise en œuvre de génocides planifiés (extermination de 6 millions de Juifs et de 250 000 Roms).',
        explanation: 'La réponse doit lier la dimension idéologique aux destructions physiques des militaires et à l\'extermination ciblée des civils.'
      },
      {
        id: 'q3_9',
        type: 'qcm',
        difficulty: 'easy',
        question: "Où s'est réfugié le Général de Gaulle pour lancer la France Libre ?",
        options: ['À New York', 'À Londres', 'À Alger', 'À Vichy'],
        answer: 'À Londres',
        explanation: "Le général de Gaulle s'est réfugié à Londres pour lancer son appel à continuer les combats le 18 juin 1940 à la radio de la BBC.",
        mnemonic: "De Gaulle = Londres (BBC)."
      },
      {
        id: 'q3_10',
        type: 'boolean',
        difficulty: 'easy',
        question: "Vrai ou Faux : La capitulation de l'Allemagne nazie en Europe a été signée le 8 mai 1945.",
        answer: true,
        explanation: "La capitulation sans condition des forces allemandes est signée à Reims puis à Berlin, prenant effet le 8 mai 1945.",
        mnemonic: "8 mai 1945 = victoire en Europe."
      },
      {
        id: 'q3_11',
        type: 'qcm',
        difficulty: 'hard',
        question: "Quelle conférence secrète nazie de janvier 1942 a planifié la déportation et l'extermination industrielle des Juifs d'Europe ?",
        options: ['La conférence de Yalta', 'La conférence de Wannsee', 'La conférence de Potsdam', 'La conférence de Munich'],
        answer: 'La conférence de Wannsee',
        explanation: "La conférence de Wannsee, près de Berlin, sous la direction de Reinhard Heydrich, fixe les modalités pratiques de la 'solution finale'.",
        mnemonic: "Wannsee = Planification de la Solution finale."
      },
      {
        id: 'q3_12',
        type: 'personnage',
        difficulty: 'medium',
        question: "Quel homme politique de Vichy a déclaré : 'Je souhaite la victoire de l'Allemagne' ?",
        options: ['Philippe Pétain', 'Pierre Laval', 'Jean Moulin', 'Charles de Gaulle'],
        answer: 'Pierre Laval',
        explanation: "Pierre Laval, chef du gouvernement de Vichy, prononce cette phrase historique le 22 juin 1942 pour justifier la collaboration étroite et le STO.",
        trap: "Pétain dirige l'État, mais c'est Laval qui prononce cette phrase controversée."
      },
      {
        id: 'q3_13',
        type: 'qcm',
        difficulty: 'hard',
        question: "Comment appelle-t-on la première phase du génocide des Juifs à l'Est, menée par les fusillades des Einsatzgruppen ?",
        options: ['La solution finale', 'La Shoah par balles', 'La déportation ferroviaire', 'La Nuit de Cristal'],
        answer: 'La Shoah par balles',
        explanation: "La Shoah par balles désigne le meurtre de masse de plus d'un million de Juifs et de Roms fusillés par les commandos mobiles SS (Einsatzgruppen) en URSS.",
        mnemonic: "Einsatzgruppen = Shoah par balles."
      },
      {
        id: 'q3_14',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quel organe politique clandestin réunit tous les mouvements de résistance intérieure sous la direction de Jean Moulin en mai 1943 ?",
        options: ["Le CNR (Conseil National de la Résistance)", "Le GPRF (Gouvernement Provisoire)", "Les FFL", "La Milice française"],
        answer: "Le CNR (Conseil National de la Résistance)",
        explanation: "Le CNR rassemble les mouvements de résistance (Combat, Libération), les syndicats et les anciens partis politiques pour coordonner la lutte et préparer l'après-guerre.",
        mnemonic: "CNR = Conseil National de la Résistance."
      },
      {
        id: 'q3_15',
        type: 'boolean',
        difficulty: 'easy',
        question: "Vrai ou Faux : Le débarquement de Provence a eu lieu le 15 août 1944 pour libérer le sud de la France.",
        answer: true,
        explanation: "L'opération Anvil-Dragoon est lancée le 15 août 1944 en Provence par les troupes alliées et l'armée d'Afrique française (De Lattre de Tassigny) pour ouvrir un second front.",
        mnemonic: "15 août 1944 = Provence."
      },
      {
        id: 'q3_16',
        type: 'qcm',
        difficulty: 'hard',
        question: "Quel camp de mise à mort nazi est tristement célèbre pour avoir été le lieu du plus grand massacre industriel de la Shoah ?",
        options: ["Le camp de Dachau", "Le complexe d'Auschwitz-Birkenau", "Le camp de Buchenwald", "Le camp de Mauthausen"],
        answer: "Le complexe d'Auschwitz-Birkenau",
        explanation: "Plus de 1,1 million de personnes, dont 90% de Juifs, ont été assassinées à Auschwitz-Birkenau, symbole mondial de la Shoah et du génocide des Roms.",
        trap: "Dachau est un camp de concentration pour opposants politiques, Auschwitz-Birkenau est un centre de mise à mort industriel."
      },
      {
        id: 'q3_17',
        type: 'qcm',
        difficulty: 'easy',
        question: "Quel président américain a ordonné le largage des bombes atomiques sur Hiroshima et Nagasaki en août 1945 ?",
        options: ["Franklin D. Roosevelt", "Harry Truman", "Dwight Eisenhower", "John F. Kennedy"],
        answer: "Harry Truman",
        explanation: "Harry Truman, devenu président après la mort de Roosevelt en avril 1945, décide d'utiliser l'arme atomique pour forcer le Japon à capituler.",
        mnemonic: "Truman = Bombe atomique 1945."
      },
      {
        id: 'q3_18',
        type: 'qcm',
        difficulty: 'easy',
        question: "À quelle date la Seconde Guerre mondiale commence-t-elle officiellement en Europe avec l'invasion de la Pologne ?",
        options: ["1er septembre 1939", "18 juin 1940", "22 juin 1941", "7 décembre 1941"],
        answer: "1er septembre 1939",
        explanation: "L'Allemagne nazie envahit la Pologne le 1er septembre 1939. La France et le Royaume-Uni lui déclarent la guerre le 3 septembre 1939.",
        mnemonic: "1er sept. 1939 = Début de la guerre."
      },
      {
        id: 'q3_19',
        type: 'boolean',
        difficulty: 'easy',
        question: "Vrai ou Faux : L'armistice signé par le maréchal Pétain le 22 juin 1940 a divisé la France en deux zones principales (Zone occupée au nord et Zone libre au sud).",
        answer: true,
        explanation: "L'armistice de 1940 coupe la France par une ligne de démarcation, le Nord et l'Atlantique étant sous contrôle allemand, tandis que le Sud reste sous l'autorité de Vichy.",
        mnemonic: "Armistice 1940 = Division de la France."
      },
      {
        id: 'q3_20',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quelle bataille aéronavale de juin 1942 marque le coup d'arrêt de l'expansionnisme japonais dans le Pacifique ?",
        options: ["La bataille de Pearl Harbor", "La bataille de Midway", "La bataille d'Iwo Jima", "La bataille d'Okinawa"],
        answer: "La bataille de Midway",
        explanation: "La marine américaine détruit 4 porte-avions japonais à la bataille de Midway, faisant basculer le rapport de force dans le Pacifique.",
        mnemonic: "Midway = Tournant du Pacifique."
      },
      {
        id: 'q3_21',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quel général américain a été le commandant suprême des forces alliées lors du débarquement en Normandie le 6 juin 1944 ?",
        options: ["Dwight D. Eisenhower", "Douglas MacArthur", "George Patton", "Bernard Montgomery"],
        answer: "Dwight D. Eisenhower",
        explanation: "Le général Dwight D. Eisenhower a coordonné l'opération Overlord. Il deviendra plus tard président des États-Unis.",
        mnemonic: "Eisenhower = D-Day (1944)."
      },
      {
        id: 'q3_22',
        type: 'boolean',
        difficulty: 'medium',
        question: "Vrai ou Faux : Le débarquement de Provence a eu lieu en août 1944 pour ouvrir un second front dans le sud de la France.",
        answer: true,
        explanation: "L'opération Anvil-Dragoon est lancée le 15 août 1944 entre Toulon et Cannes, menée en grande partie par l'Armée B française du général de Lattre de Tassigny.",
        mnemonic: "Août 1944 = Débarquement de Provence."
      },
      {
        id: 'q3_23',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quel nom porte l'État collaborationniste français mis en place à partir de juillet 1940 sous la direction de Pétain ?",
        options: ["Le régime de Vichy", "La Troisième République", "Le Conseil national", "La France libre"],
        answer: "Le régime de Vichy",
        explanation: "L'État français (ou régime de Vichy), autoritaire et antisémite, remplace la République et collabore avec l'Allemagne de 1940 à 1944.",
        mnemonic: "Vichy = Collaboration et fin de la République."
      },
      {
        id: 'q3_24',
        type: 'qcm',
        difficulty: 'easy',
        question: "Quel événement surprise pousse les États-Unis à entrer en guerre en décembre 1941 ?",
        options: ["Le torpillage du Lusitania", "L'attaque de Pearl Harbor", "L'invasion de l'URSS", "La bataille d'El Alamein"],
        answer: "L'attaque de Pearl Harbor",
        explanation: "Le Japon bombarde la base navale américaine de Pearl Harbor à Hawaï le 7 décembre 1941, entraînant l'entrée en guerre des États-Unis le lendemain.",
        mnemonic: "Pearl Harbor = 7 décembre 1941."
      },
      {
        id: 'q3_25',
        type: 'boolean',
        difficulty: 'easy',
        question: "Vrai ou Faux : Les bombes atomiques lancées par les États-Unis en août 1945 ont visé les villes de Tokyo et Kyoto.",
        answer: false,
        explanation: "Les bombes atomiques ont détruit les villes industrielles d'Hiroshima (6 août) et de Nagasaki (9 août), forçant l'empereur Hirohito à capituler.",
        trap: "Les cibles étaient Hiroshima et Nagasaki, et non pas la capitale Tokyo ou la ville historique de Kyoto."
      },
      {
        id: 'q3_26',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quelle organisation policière française, créée en 1943 par Pierre Laval, traquait les Juifs et les résistants ?",
        options: ["La Milice française", "Les FTP", "Les FFI", "La Gestapo"],
        answer: "La Milice française",
        explanation: "La Milice française était une organisation politique et paramilitaire collaborationniste qui luttait férocement contre la Résistance.",
        mnemonic: "Milice = Collaborateurs paramilitaires."
      },
      {
        id: 'q3_27',
        type: 'qcm',
        difficulty: 'easy',
        question: "Quel acte officiel signé le 8 mai 1945 marque la fin des combats de la Seconde Guerre mondiale en Europe ?",
        options: ["L'Armistice de Compiègne", "La Capitulation sans condition de l'Allemagne", "Le Traité de Potsdam", "Le Traité de San Francisco"],
        answer: "La Capitulation sans condition de l'Allemagne",
        explanation: "L'Allemagne nazie capitule sans condition les 7 et 8 mai 1945. La capitulation définitive est signée à Berlin le 8 mai 1945 tard le soir.",
        mnemonic: "8 mai 1945 = Capitulation allemande."
      }
    ]
  },
  {
    id: 'ch4',
    slug: 'guerre-froide',
    number: 4,
    subject: 'histoire',
    title: 'La Guerre froide',
    subtitle: 'Un monde bipolaire et les grandes crises (1947-1991)',
    introduction: 'La Guerre froide est une période de tensions géopolitiques mondiales opposant le bloc de l\'Ouest (mené par les États-Unis) au bloc de l\'Est (mené par l\'URSS). Sans s\'affronter directement militairement en raison de l\'arme nucléaire (équilibre de la terreur), les deux superpuissances se livrent une guerre idéologique, technologique et culturelle majeure.',
    courseContent: `
      <h2>I. Un monde bipolaire : deux blocs face à face</h2>
      <p>Dès 1947, l'alliance de la Seconde Guerre mondiale se brise. Le monde se divise en deux camps séparés par le <strong>"Rideau de fer"</strong> :</p>
      <ul>
        <li><strong>Le bloc de l'Ouest (États-Unis)</strong> : Défend le capitalisme, le libéralisme économique et la démocratie. Les USA lancent le <strong>plan Marshall</strong> (aide financière pour reconstruire l'Europe et freiner le communisme - doctrine Truman d'endiguement). L'alliance militaire est l'<strong>OTAN</strong> (1949).</li>
        <li><strong>Le bloc de l'Est (URSS)</strong> : Défend le communisme, le contrôle étatique de l'économie et le régime de parti unique. En réponse, l'URSS affirme la doctrine Jdanov, crée le Kominform et signe une alliance militaire : le <strong>Pacte de Varsovie</strong> (1955).</li>
      </ul>
      <p>Les deux blocs s'évitent militairement de peur d'une destruction mutuelle assurée par l'arme atomique : c'est <strong>l'équilibre de la terreur</strong>.</p>

      <h2>II. Berlin au cœur de la Guerre froide</h2>
      <p>Ancienne capitale du Reich divisée en quatre secteurs, Berlin est le symbole de cet affrontement en Europe :</p>
      <ol>
        <li><strong>Le Blocus de Berlin (1948-1949)</strong> : Staline coupe les voies d'accès terrestres à Berlin-Ouest pour s'en emparer. Les Américains répliquent par un gigantesque <strong>pont aérien</strong> ravitaillant la ville pendant 11 mois. C'est un échec pour Staline. En 1949, l'Allemagne est divisée en deux États : la <strong>RFA</strong> (démocratique à l'ouest) et la <strong>RDA</strong> (communiste à l'est).</li>
        <li><strong>La construction du Mur de Berlin (1961)</strong> : Pour empêcher la fuite des citoyens de la RDA vers la RFA via Berlin-Ouest, le gouvernement communiste fait ériger le <strong>Mur de Berlin</strong> (le "Mur de la honte") dans la nuit du 12 au 13 août 1961. Il sépare physiquement la ville pendant 28 ans.</li>
        <li><strong>La chute du Mur (1989)</strong> : Symbole de l'effondrement communiste, le Mur est ouvert par la population est-allemande le <strong>9 novembre 1989</strong>, menant à la réunification allemande en 1990.</li>
      </ol>

      <h2>III. Des crises et des guerres indirectes dans le monde</h2>
      <p>Bien que l'affrontement soit indirect, il provoque des guerres sanglantes en Asie et en Amérique :</p>
      <ul>
        <li><strong>La crise de Cuba (1962)</strong> : L'URSS installe des missiles nucléaires pointés vers les États-Unis sur l'île de Cuba. Le président John F. Kennedy impose un blocus naval. Après quelques jours de haute tension au bord de la guerre nucléaire, le dirigeant soviétique Nikita Khrouchtchev accepte de retirer les missiles contre la promesse américaine de ne pas envahir Cuba.</li>
        <li><strong>Les guerres par procuration</strong> : La <em>guerre de Corée</em> (1950-1953) sépare le pays en deux. La <em>guerre du Vietnam</em> (1964-1975) s'achève par une défaite américaine et l'unification communiste du Vietnam.</li>
        <li><strong>La course à l'espace</strong> : Affrontement technologique. L'URSS envoie le premier satellite (Spoutnik, 1957) et le premier homme dans l'espace (Gagarine, 1961). Les États-Unis remportent la course vers la Lune en envoyant Neil Armstrong en 1969 (mission Apollo 11).</li>
      </ul>

      <h2>IV. L'effondrement du bloc soviétique et la fin de la Guerre froide</h2>
      <p>À partir de 1985, l'URSS traverse une grave crise économique. Le nouveau dirigeant, <strong>Mikhaïl Gorbatchev</strong>, tente de réformer le pays avec la <em>Glasnost</em> (transparence) et la <em>Perestroïka</em> (restructuration). Mais ces réformes libèrent les revendications nationales.</p>
      <p>Les régimes communistes d'Europe de l'Est s'effondrent pacifiquement en 1989. L'URSS éclate en 15 États indépendants et <strong>disparaît officiellement le 25 décembre 1991</strong>, marquant la fin de la Guerre froide et laissant les États-Unis comme unique superpuissance mondiale.</p>
    `,
    summary: `
      ### Fiche Synthèse : La Guerre froide (1947-1991)

      * **Monde Bipolaire** : Division en deux blocs séparés par le Rideau de fer.
        * *Bloc Ouest* : USA, démocratie, capitalisme, plan Marshall, alliance militaire de l'**OTAN**.
        * *Bloc Est* : URSS, communisme, dictature, alliance militaire du **Pacte de Varsovie**.
      * **Équilibre de la terreur** : Dissuasion nucléaire empêchant l'affrontement armé direct.
      * **Berlin, symbole mondial** :
        * *1948-1949* : Blocus de Berlin-Ouest par l'URSS, contourné par un pont aérien américain. Division de l'Allemagne en RFA et RDA.
        * *1961* : Construction du Mur de Berlin par la RDA pour stopper l'exode.
        * *9 novembre 1989* : Chute du Mur, menant à la réunification de l'Allemagne.
      * **Crise et conflits indirects** :
        * *Crise de Cuba (1962)* : Tension maximale suite au déploiement de missiles soviétiques à Cuba. Résolution diplomatique entre Kennedy et Khrouchtchev.
        * *Guerres périphériques* : Corée (1950-53), Vietnam (1964-75).
        * *Course à l'espace* : Spoutnik (1957) et Gagarine (1961) côté soviétique, Premier pas sur la Lune (1969) côté américain.
      * **Fin de la guerre (1991)** : Réformes de Gorbatchev (Glasnost/Perestroïka), effondrement des régimes de l'Est (1989) et dissolution officielle de l'URSS en **décembre 1991**.
    `,
    timeline: [
      { id: 't4_1', date: '1947', title: 'Doctrines Truman et Jdanov', description: 'Début officiel de la rupture et de la division en deux blocs.', category: 'politique' },
      { id: 't4_2', date: '1948 - 1949', title: 'Blocus de Berlin', description: 'Staline tente d\'annexer Berlin-Ouest. Les USA organisent un pont aérien.', category: 'militaire' },
      { id: 't4_3', date: '1961', title: 'Construction du Mur de Berlin', description: 'La RDA érige le mur pour isoler Berlin-Ouest et stopper les fuites.', category: 'social' },
      { id: 't4_4', date: 'Octobre 1962', title: 'Crise des missiles de Cuba', description: 'Tension nucléaire paroxystique résolue par la voie diplomatique.', category: 'diplomatique' },
      { id: 't4_5', date: '1964 - 1975', title: 'Guerre du Vietnam', description: 'Intervention militaire américaine pour contrer le Nord-Vietnam communiste.', category: 'militaire' },
      { id: 't4_6', date: '9 nov. 1989', title: 'Chute du Mur de Berlin', description: 'Les Berlinois franchissent et détruisent le mur de séparation.', category: 'social' },
      { id: 't4_7', date: 'Décembre 1991', title: 'Dissolution de l\'URSS', description: 'Démission de Gorbatchev et disparition de l\'Union Soviétique.', category: 'politique' }
    ],
    mindMap: [
      { id: 'm4_root', label: 'La Guerre Froide' },
      { id: 'm4_b1', label: 'Monde Bipolaire', parentId: 'm4_root', description: 'Bloc Ouest (USA, capitalisme, OTAN) vs Bloc Est (URSS, communisme, Pacte de Varsovie).' },
      { id: 'm4_b2', label: 'Berlin', parentId: 'm4_root', description: 'Blocus (48-49), Construction du Mur (61), Chute du Mur (89), Réunification (90).' },
      { id: 'm4_b3', label: 'Crises & Conflits', parentId: 'm4_root', description: 'Cuba (62), guerres périphériques (Corée, Vietnam), course aux armements et à l\'espace.' },
      { id: 'm4_b4', label: 'Fin du Conflit', parentId: 'm4_root', description: 'Crise de l\'URSS, réformes de Gorbatchev, chute du communisme à l\'est (89) et fin de l\'URSS (91).' }
    ],
    characters: [
      { id: 'c4_1', name: 'Harry Truman', dates: '1884-1972', role: 'Président des États-Unis', importance: 'Initiateur de la doctrine Truman (endiguement du communisme) et du Plan Marshall en 1947, il lance la politique d\'affrontement diplomatique de la Guerre froide.' },
      { id: 'c4_2', name: 'John F. Kennedy', dates: '1917-1963', role: 'Président des États-Unis', importance: 'Président durant la crise de Berlin (discours "Ich bin ein Berliner", 1963) et la crise des missiles de Cuba (1962), qu\'il gère avec fermeté en imposant un blocus naval.' },
      { id: 'c4_3', name: 'Nikita Khrouchtchev', dates: '1894-1971', role: 'Dirigeant de l\'URSS', importance: 'Successeur de Staline. Il lance la déstalinisation, initie la coexistence pacifique mais provoque la crise de Cuba en y installant des missiles nucléaires avant de reculer.' },
      { id: 'c4_4', name: 'Mikhaïl Gorbatchev', dates: '1931-2022', role: 'Dernier dirigeant de l\'URSS', importance: 'Arrivé au pouvoir en 1985, il lance les réformes de la Glasnost et de la Perestroïka, négocie le désarmement avec les USA et refuse d\'intervenir militairement à l\'Est en 1989, provoquant la fin involontaire de l\'URSS en 1991.' }
    ],
    dates: [
      { date: '1947', event: 'Plan Marshall et doctrines Truman/Jdanov', explanation: 'La rupture diplomatique officielle fondant le monde bipolaire.' },
      { date: '1948-1949', event: 'Blocus de Berlin', explanation: 'Première grande épreuve de force pacifique autour de la ville.' },
      { date: '1961', event: 'Construction du Mur de Berlin', explanation: 'Enclavement total de Berlin-Ouest par les autorités est-allemandes.' },
      { date: 'Octobre 1962', event: 'Crise de Cuba', explanation: 'Le moment le plus critique, frolant l\'apocalypse nucléaire.' },
      { date: '9 novembre 1989', event: 'Chute du Mur de Berlin', explanation: 'L\'ouverture de la frontière berlinoise, signe de la défaite communiste.' },
      { date: 'Décembre 1991', event: 'Éclatement de l\'URSS', explanation: 'Fin de l\'Union Soviétique et disparition de la bipolarité mondiale.' }
    ],
    flashcards: [
      { id: 'fc4_1', question: 'Qu\'est-ce que le Plan Marshall ?', answer: 'Une aide financière et économique proposée par les États-Unis en 1947 pour reconstruire l\'Europe et stopper l\'expansion du communisme.' },
      { id: 'fc4_2', question: 'Quelle est la signification du "Rideau de fer" ?', answer: 'C\'est la frontière imperméable (barbelés, miradors) séparant les pays du bloc de l\'Est sous contrôle soviétique des démocraties de l\'Ouest.' },
      { id: 'fc4_3', question: 'Comment les USA contournent-ils le blocus de Berlin de 1948 ?', answer: 'En organisant un pont aérien ininterrompu de milliers d\'avions cargo pour ravitailler la population berlinoise de l\'ouest.' },
      { id: 'fc4_4', question: 'Pourquoi la RDA construit-elle le Mur de Berlin en 1961 ?', answer: 'Pour arrêter l\'hémorragie démographique : des millions de citoyens de RDA fuyaient vers l\'Ouest à travers Berlin.' },
      { id: 'fc4_5', question: 'Quel accord résout la crise des missiles de Cuba en 1962 ?', answer: 'Khrouchtchev retire ses missiles de Cuba en échange de la promesse de Kennedy de ne pas envahir l\'île (et du retrait secret de missiles américains en Turquie).' },
      { id: 'fc4_6', question: 'Que désignent la Glasnost et la Perestroïka ?', answer: 'Les politiques de transparence politique (Glasnost) et de restructuration économique (Perestroïka) lancées par Gorbatchev pour moderniser l\'URSS.' },
      { id: 'fc4_7', question: 'En quel mois et année l\'URSS a-t-elle cessé d\'exister ?', answer: 'En décembre 1991.' }
    ],
    anecdotes: [
      "Lors de la crise de Cuba, la décision de ne pas lancer de torpille nucléaire soviétique depuis un sous-marin encerclé a reposé sur un seul homme, Vassili Arkhipov, qui a refusé d'apposer sa signature réglementaire obligatoire, évitant ainsi probablement la Troisième Guerre mondiale.",
      "Durant la course à l'espace, les Américains ont dépensé des millions pour concevoir un stylo écrivant en apesanteur. Les Soviétiques, quant à eux, utilisaient simplement des crayons à mine grasse (crayons de papier).",
      "Le discours de John F. Kennedy à Berlin-Ouest en 1963 contient la phrase historique 'Ich bin ein Berliner'. La légende prétend qu'il s'est trompé en ajoutant l'article 'ein', ce qui signifierait 'Je suis un beignet de Berlin'. En réalité, les Allemands ont parfaitement compris sa métaphore de solidarité."
    ],
    questions: [
      {
        id: 'q4_1',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quelle alliance militaire regroupe les pays du bloc de l\'Ouest sous direction américaine ?',
        options: ['L\'ONU', 'L\'OTAN', 'Le Pacte de Varsovie', 'La SDN'],
        answer: 'L\'OTAN',
        explanation: 'L\'Organisation du Traité de l\'Atlantique Nord (OTAN) est créée en 1949 pour faire face au bloc de l\'Est communiste.',
        mnemonic: 'OTAN = Ouest (Atlantique Nord) ; Varsovie = Est (capital de la Pologne).'
      },
      {
        id: 'q4_2',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Le Mur de Berlin a été construit par les Américains pour protéger Berlin-Ouest.',
        answer: false,
        explanation: 'Le mur a été construit par le régime communiste de la RDA (soutenu par l\'URSS) pour empêcher ses citoyens de fuir vers Berlin-Ouest.',
        trap: 'Les communistes ont construit le mur, pas les Occidentaux ! Ils l\'appelaient le "rempart antifasciste".'
      },
      {
        id: 'q4_3',
        type: 'trous',
        difficulty: 'medium',
        question: 'Pour endiguer le communisme, la doctrine [Truman] propose l\'aide financière du plan [Marshall], tandis que l\'alliance militaire soviétique réplique par le [Pacte de Varsovie] en 1955.',
        answer: ['Truman', 'Marshall', 'Pacte de Varsovie'],
        explanation: 'Ce système bipolaire structure les relations mondiales de 1947 à 1989.'
      },
      {
        id: 'q4_4',
        type: 'personnage',
        difficulty: 'medium',
        question: 'Quel dirigeant soviétique a engagé les réformes de la Glasnost et de la Perestroïka, précipitant la fin de l\'URSS ?',
        answer: 'Mikhaïl Gorbatchev',
        explanation: 'Mikhaïl Gorbatchev a voulu réformer le système soviétique défaillant, mais a ouvert la boîte de Pandore qui a provoqué la fin de l\'Union.',
        trap: 'Khrouchtchev a dirigé l\'URSS dans les années 60 (Cuba), Gorbatchev dans les années 80 (fin de l\'URSS).'
      },
      {
        id: 'q4_5',
        type: 'relier',
        difficulty: 'hard',
        question: 'Associez chaque crise ou jalon de la Guerre froide à son année :',
        options: [
          '1948-1949',
          '1961',
          '1962',
          '1991'
        ],
        answer: {
          'Blocus de Berlin': '1948-1949',
          'Construction du Mur de Berlin': '1961',
          'Crise des missiles de Cuba': '1962',
          'Dissolution officielle de l\'URSS': '1991'
        },
        explanation: 'Ces repères temporels marquent l\'escalade et la résolution des tensions majeures de la Guerre froide.'
      },
      {
        id: 'q4_6',
        type: 'ordonner',
        difficulty: 'hard',
        question: 'Ordonnez ces jalons de la Guerre froide du plus ancien au plus récent :',
        options: [
          'Chute du Mur de Berlin',
          'Crise des missiles de Cuba',
          'Blocus de Berlin par Staline',
          'Guerre du Vietnam'
        ],
        answer: [2, 1, 3, 0], // Blocus (1948) -> Cuba (1962) -> Vietnam (1964-75) -> Chute du Mur (1989)
        explanation: 'La Guerre froide progresse du blocus de Berlin (1948) à la crise de Cuba (1962), la guerre du Vietnam (1964-1975) et enfin la chute du Mur (1989).'
      },
      {
        id: 'q4_7',
        type: 'date',
        difficulty: 'easy',
        question: 'En quelle année le Mur de Berlin est-il tombé ?',
        options: ['1961', '1989', '1991', '2000'],
        answer: '1989',
        explanation: 'Le Mur de Berlin tombe le 9 novembre 1989 lors d\'une révolution pacifique des citoyens de RDA.',
        mnemonic: '89 = Chute du mur, 91 = Chute de l\'empire soviétique.'
      },
      {
        id: 'q4_8',
        type: 'brevet',
        difficulty: 'expert',
        question: 'Pourquoi peut-on dire que la crise de Cuba en 1962 illustre le concept d\'"équilibre de la terreur" ?',
        answer: 'La crise de Cuba en octobre 1962 illustre l\'équilibre de la terreur car l\'installation de missiles nucléaires soviétiques sur l\'île place le territoire américain sous la menace d\'une frappe atomique immédiate. Durant la confrontation, le président Kennedy impose un blocus naval et met en alerte son armée nucléaire. Face au risque d\'une guerre thermonucléaire globale provoquant la destruction mutuelle totale des deux puissances, les dirigeants choisissent la désescalade diplomatique : l\'URSS retire ses missiles de Cuba en échange de la promesse américaine de ne pas envahir l\'île.',
        explanation: 'Il est fondamental d\'aborder la notion de dissuasion nucléaire réciproque et le choix de la négociation face à l\'anéantissement total.'
      },
      {
        id: 'q4_9',
        type: 'qcm',
        difficulty: 'easy',
        question: "Comment s'appelle le blocus routier et ferroviaire de Berlin-Ouest organisé par Staline en 1948 ?",
        options: ['Le blocus de Cuba', 'Le blocus de Berlin', 'Le blocus de Vienne', 'Le blocus de Varsovie'],
        answer: 'Le blocus de Berlin',
        explanation: "En juin 1948, Staline coupe les accès terrestres à Berlin-Ouest. Les Alliés répliquent en créant un pont aérien pour ravitailler la ville.",
        mnemonic: "Blocus de Berlin 1948-1949."
      },
      {
        id: 'q4_10',
        type: 'boolean',
        difficulty: 'easy',
        question: "Vrai ou Faux : L'URSS a été dissoute officiellement en décembre 1991.",
        answer: true,
        explanation: "Le 25 décembre 1991, Mikhaïl Gorbatchev démissionne de la présidence de l'URSS. Le drapeau rouge est retiré du Kremlin, l'URSS disparaît.",
        mnemonic: "Noël 1991 = Fin de l'URSS."
      },
      {
        id: 'q4_11',
        type: 'personnage',
        difficulty: 'hard',
        question: "Quel président des États-Unis a prononcé le célèbre discours 'Ich bin ein Berliner' en juin 1963 ?",
        options: ['Harry Truman', 'Dwight Eisenhower', 'John F. Kennedy', 'Richard Nixon'],
        answer: 'John F. Kennedy',
        explanation: "Le président John F. Kennedy s'est rendu à Berlin-Ouest en juin 1963 pour témoigner de son soutien aux habitants face au Mur.",
        mnemonic: "Kennedy = Ich bin ein Berliner."
      },
      {
        id: 'q4_12',
        type: 'personnage',
        difficulty: 'easy',
        question: 'Qui a été le premier cosmonaute de l\'histoire envoyé dans l\'espace en avril 1961 ?',
        options: ['Neil Armstrong', 'Yuri Gagarine', 'John Glenn', 'Alan Shepard'],
        answer: 'Yuri Gagarine',
        explanation: "Le Soviétique Yuri Gagarine réalise le premier vol spatial habité le 12 avril 1961 à bord de Vostok 1.",
        mnemonic: "Gagarine = 1er homme dans l'espace."
      },
      {
        id: 'q4_13',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quelle alliance militaire a réuni l'URSS et les pays d'Europe de l'Est en 1955 pour répondre à l'OTAN ?",
        options: ['Le Kominform', 'Le Pacte de Varsovie', 'Le Plan Marshall', 'La SDN'],
        answer: 'Le Pacte de Varsovie',
        explanation: "Le Pacte de Varsovie est une alliance militaire communiste signée en 1955 sous contrôle soviétique pour faire contrepoids à l'OTAN.",
        mnemonic: "Pacte de Varsovie = bloc de l'Est."
      },
      {
        id: 'q4_14',
        type: 'qcm',
        difficulty: 'easy',
        question: "Quelle doctrine américaine formulée en 1947 vise à endiguer la propagation du communisme par une aide financière et politique ?",
        options: ["La doctrine Monroe", "La doctrine Truman", "La doctrine Brejnev", "La doctrine Kennedy"],
        answer: "La doctrine Truman",
        explanation: "La doctrine Truman (containment ou endiguement) définit la politique étrangère américaine face au bloc soviétique dès le début de la Guerre froide.",
        mnemonic: "Truman = Endiguement (Containment)."
      },
      {
        id: 'q4_15',
        type: 'boolean',
        difficulty: 'easy',
        question: "Vrai ou Faux : Le Mur de Berlin a été surnommé le 'Mur de la honte' par la population de Berlin-Ouest dès sa construction.",
        answer: true,
        explanation: "Construit en août 1961 par la RDA pour stopper l'émigration vers l'Ouest, il a été immédiatement qualifié de 'Mur de la honte' par les Occidentaux.",
        mnemonic: "Mur de Berlin = 1961 = Mur de la honte."
      },
      {
        id: 'q4_16',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quel événement spatial soviétique en 1957 a provoqué le 'choc de Spoutnik' en Occident ?",
        options: ["Le premier vol de Gagarine", "La chienne Laïka dans l'espace", "Le lancement du premier satellite artificiel", "La première marche dans le vide spatial"],
        answer: "Le lancement du premier satellite artificiel",
        explanation: "Le lancement réussi de Spoutnik 1 le 4 octobre 1957 par l'URSS montre sa supériorité technologique temporaire en matière de missiles balistiques.",
        mnemonic: "Spoutnik = 1er satellite (1957)."
      },
      {
        id: 'q4_17',
        type: 'qcm',
        difficulty: 'hard',
        question: "Quelle crise de 1962 a failli déclencher un affrontement nucléaire direct entre les deux superpuissances ?",
        options: ["Le blocus de Berlin", "La crise des missiles de Cuba", "La guerre de Corée", "L'insurrection de Budapest"],
        answer: "La crise des missiles de Cuba",
        explanation: "L'installation de missiles nucléaires soviétiques pointés vers les États-Unis à Cuba a provoqué un blocus américain et des négociations intenses entre Kennedy et Khrouchtchev.",
        mnemonic: "Cuba 1962 = Risque nucléaire maximal."
      },
      {
        id: 'q4_18',
        type: 'boolean',
        difficulty: 'medium',
        question: "Vrai ou Faux : La guerre de Corée (1950-1953) s'est terminée par la signature d'un traité de paix définitif unifiant la péninsule.",
        answer: false,
        explanation: "La guerre de Corée s'est conclue par un simple armistice (Panmunjom) maintenant la division du pays le long du 38e parallèle. Il n'y a toujours pas de traité de paix officiel.",
        trap: "C'est un armistice et non un traité de paix, la Corée reste divisée en deux États."
      },
      {
        id: 'q4_19',
        type: 'qcm',
        difficulty: 'medium',
        question: "Quel président américain a prononcé le célèbre discours 'Ich bin ein Berliner' devant le Mur de Berlin en 1963 ?",
        options: ["John F. Kennedy", "Harry Truman", "Richard Nixon", "Ronald Reagan"],
        answer: "John F. Kennedy",
        explanation: "Le 26 juin 1963, le président Kennedy exprime la solidarité des États-Unis envers les Berlinois de l'Ouest assiégés par le bloc communiste.",
        mnemonic: "Kennedy = Berlin 1963."
      },
      {
        id: 'q4_20',
        type: 'qcm',
        difficulty: 'easy',
        question: "En quelle année le Mur de Berlin est-il tombé, marquant le début de l'effondrement des régimes communistes en Europe de l'Est ?",
        options: ["1989", "1991", "1985", "1993"],
        answer: "1989",
        explanation: "La chute du Mur de Berlin le 9 novembre 1989 est le symbole de la fin du rideau de fer et de l'effondrement imminent du bloc soviétique.",
        mnemonic: "Chute du Mur = 9 nov 1989."
      },
      {
        id: 'q4_21',
        type: 'boolean',
        difficulty: 'hard',
        question: "Vrai ou Faux : L'OTAN est l'alliance militaire créée par le bloc de l'Est pour faire face à la menace impérialiste occidentale.",
        answer: false,
        explanation: "L'OTAN (Organisation du traité de l'Atlantique Nord) est l'alliance occidentale créée en 1949. L'alliance militaire du bloc de l'Est est le Pacte de Varsovie, créé en 1955.",
        trap: "Ne confondez pas OTAN (occidental) et Pacte de Varsovie (soviétique)."
      },
      {
        id: 'q4_22',
        type: 'qcm',
        difficulty: 'hard',
        question: "Quel État fédéral d'Europe centrale s'est désintégré au début des années 1990 dans une série de guerres civiles sanglantes après la chute du communisme ?",
        options: ["La Yougoslavie", "La Tchécoslovaquie", "La Pologne", "La Roumanie"],
        answer: "La Yougoslavie",
        explanation: "La Yougoslavie éclate en plusieurs républiques indépendantes (Slovénie, Croatie, Bosnie, Serbie...) à partir de 1991, provoquant des guerres civiles meurtrières.",
        mnemonic: "Yougoslavie = Éclatement sanglant."
      },
      {
        id: 'q4_23',
        type: 'qcm',
        difficulty: 'medium',
        question: "Comment appelle-t-on la période de baisse des tensions et de dialogue relatif entre les États-Unis et l'URSS durant les années 1970 ?",
        options: ["La Détente", "La Coexistence pacifique", "La Guerre fraîche", "Le Rideau de fer"],
        answer: "La Détente",
        explanation: "La Détente (années 1970) est marquée par la signature d'accords de limitation des armements nucléaires (comme les accords SALT) et les accords d'Helsinki.",
        mnemonic: "Années 70 = La Détente."
      }
    ]
  }
];

export const chaptersData: Chapter[] = [
  ...baseChapters,
  ...historyChapters,
  ...geoChapters1,
  ...geoChapters2
];
