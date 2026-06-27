import { Chapter } from '../types';

export const historyChapters: Chapter[] = [
  // ============================================================
  // CHAPITRE 5 – Indépendances et construction de nouveaux États
  // ============================================================
  {
    id: 'ch5',
    slug: 'independances-nouveaux-etats',
    number: 5,
    subject: 'histoire',
    title: 'Indépendances et construction de nouveaux États',
    subtitle: 'La décolonisation et l\'émergence du tiers-monde (après 1945)',
    introduction: 'Après la Seconde Guerre mondiale, les empires coloniaux européens se disloquent. En Asie puis en Afrique, les peuples colonisés revendiquent leur indépendance, parfois par la négociation, parfois par la guerre. Ces nouveaux États doivent ensuite relever le défi de la construction nationale et cherchent à s\'affirmer sur la scène internationale à travers le mouvement des non-alignés.',

    courseContent: `
      <h2>I. Les causes de la décolonisation</h2>
      <p>Après 1945, plusieurs facteurs convergent pour accélérer la fin des empires coloniaux :</p>
      <ul>
        <li><strong>L'affaiblissement des métropoles</strong> : La France et le Royaume-Uni sortent épuisés de la guerre. Leur prestige est atteint, notamment après les défaites face au Japon en Asie du Sud-Est.</li>
        <li><strong>La montée des nationalismes</strong> : Des mouvements indépendantistes se structurent autour de leaders charismatiques formés dans les universités occidentales (Gandhi, Hô Chi Minh, Bourguiba, Senghor).</li>
        <li><strong>Le contexte international favorable</strong> : La Charte de l'ONU (1945) affirme le droit des peuples à disposer d'eux-mêmes. Les deux superpuissances (États-Unis et URSS) sont hostiles au colonialisme, chacune pour ses propres raisons géopolitiques.</li>
        <li><strong>Le rôle des élites colonisées</strong> : Les intellectuels et soldats ayant combattu aux côtés des Alliés revendiquent l'égalité des droits, puis l'indépendance.</li>
      </ul>

      <h2>II. Les voies de la décolonisation</h2>
      <h3>A. La décolonisation négociée</h3>
      <p>Dans certains cas, l'indépendance est obtenue de manière relativement pacifique :</p>
      <ul>
        <li><strong>L'Inde britannique (1947)</strong> : Après des décennies de lutte non-violente menée par <strong>Gandhi</strong> et <strong>Nehru</strong>, le Royaume-Uni accorde l'indépendance en août 1947. Mais le pays est <strong>partitionné</strong> entre l'Union indienne (hindoue) et le Pakistan (musulman), provoquant des violences intercommunautaires massives (environ 1 million de morts et 15 millions de déplacés).</li>
        <li><strong>L'Afrique noire francophone</strong> : En 1960, la France accorde l'indépendance à 14 pays d'Afrique subsaharienne de manière négociée, faisant de cette année « l'Année de l'Afrique ».</li>
      </ul>

      <h3>B. La décolonisation par la guerre</h3>
      <p>Dans d'autres cas, les métropoles refusent l'indépendance, ce qui conduit à des conflits armés :</p>
      <ul>
        <li><strong>La guerre d'Indochine (1946-1954)</strong> : Le Viêt-minh, mouvement communiste et nationaliste dirigé par <strong>Hô Chi Minh</strong>, s'oppose à la France. La défaite française de <strong>Diên Biên Phu (mai 1954)</strong> met fin au conflit. Les accords de Genève partagent le Viêtnam en deux.</li>
        <li><strong>La guerre d'Algérie (1954-1962)</strong> : Le <strong>FLN</strong> (Front de Libération Nationale) déclenche l'insurrection le 1er novembre 1954 (« Toussaint rouge »). Huit années de guerre s'ensuivent, marquées par la guérilla, la torture, les attentats. Les <strong>accords d'Évian (mars 1962)</strong> reconnaissent l'indépendance de l'Algérie. Un million de <em>pieds-noirs</em> quittent l'Algérie pour la France.</li>
      </ul>

      <h3>C. Le cas du Congo belge</h3>
      <p>Le Congo belge accède à l'indépendance le 30 juin 1960, avec <strong>Patrice Lumumba</strong> comme Premier ministre. Mais le pays sombre rapidement dans le chaos politique (sécession du Katanga, intervention de l'ONU), et Lumumba est assassiné en janvier 1961.</p>

      <h2>III. Le mouvement des non-alignés et le tiers-monde</h2>
      <p>Les nouveaux États indépendants cherchent à ne pas être entraînés dans la logique des blocs de la Guerre froide :</p>
      <ul>
        <li><strong>La conférence de Bandung (avril 1955)</strong> : 29 pays d'Asie et d'Afrique, réunis en Indonésie à l'initiative de <strong>Nehru</strong>, <strong>Nasser</strong> et <strong>Sukarno</strong>, affirment leur solidarité et condamnent le colonialisme. C'est l'acte de naissance du <strong>tiers-monde</strong>.</li>
        <li><strong>Le mouvement des non-alignés (1961)</strong> : Fondé à Belgrade, il regroupe des pays refusant de s'aligner sur les États-Unis ou l'URSS (Inde, Égypte, Yougoslavie…).</li>
      </ul>

      <h2>IV. Les défis des nouveaux États</h2>
      <p>Après l'indépendance, les nouveaux États font face à de nombreux obstacles :</p>
      <ul>
        <li><strong>Instabilité politique</strong> : coups d'État, conflits ethniques, dictatures.</li>
        <li><strong>Développement économique</strong> : dépendance envers les anciennes métropoles, endettement, pauvreté.</li>
        <li><strong>Frontières héritées de la colonisation</strong> : tracées artificiellement sans tenir compte des réalités ethniques et culturelles, source de tensions.</li>
        <li><strong>Construction d'une identité nationale</strong> : diversité linguistique et culturelle à fédérer.</li>
      </ul>
    `,

    summary: `
### Fiche Synthèse : Indépendances et construction de nouveaux États

* **Contexte** : Après 1945, les métropoles sont affaiblies, les peuples colonisés aspirent à la liberté, et l'ONU promeut le droit des peuples à disposer d'eux-mêmes.
* **Deux voies de décolonisation** :
  - *Négociée* : Inde (1947, mais partition violente), Afrique noire francophone (1960).
  - *Par la guerre* : Indochine (1946-1954, défaite française à Diên Biên Phu), Algérie (1954-1962, accords d'Évian).
* **Le tiers-monde s'organise** :
  - **Conférence de Bandung (1955)** : 29 pays condamnent le colonialisme.
  - **Mouvement des non-alignés (1961)** : refus de s'aligner sur un bloc.
* **Défis des nouveaux États** : instabilité politique, développement économique, frontières artificielles, construction d'une identité nationale.
* **Personnages clés** : Gandhi, Nehru (Inde), Hô Chi Minh (Viêtnam), Nasser (Égypte), Senghor (Sénégal), Lumumba (Congo).
    `,

    timeline: [
      { id: 't5_1', date: '15 août 1947', title: 'Indépendance de l\'Inde et du Pakistan', description: 'Le Royaume-Uni accorde l\'indépendance à l\'Inde, mais le pays est partitionné entre l\'Union indienne (hindoue) et le Pakistan (musulman).', category: 'politique' },
      { id: 't5_2', date: '7 mai 1954', title: 'Chute de Diên Biên Phu', description: 'Défaite militaire française face au Viêt-minh, marquant la fin de la guerre d\'Indochine.', category: 'militaire' },
      { id: 't5_3', date: 'Avril 1955', title: 'Conférence de Bandung', description: '29 pays d\'Asie et d\'Afrique affirment leur solidarité contre le colonialisme. Naissance du tiers-monde.', category: 'diplomatique' },
      { id: 't5_4', date: '1er novembre 1954', title: 'Toussaint rouge en Algérie', description: 'Le FLN déclenche l\'insurrection armée contre la présence française en Algérie.', category: 'militaire' },
      { id: 't5_5', date: '1960', title: 'Année de l\'Afrique', description: '17 pays africains accèdent à l\'indépendance, dont 14 anciennes colonies françaises.', category: 'politique' },
      { id: 't5_6', date: '18 mars 1962', title: 'Accords d\'Évian', description: 'Signature des accords mettant fin à la guerre d\'Algérie et reconnaissant son indépendance.', category: 'diplomatique' },
      { id: 't5_7', date: '1961', title: 'Conférence de Belgrade', description: 'Fondation officielle du mouvement des non-alignés, refusant l\'alignement sur l\'un des deux blocs.', category: 'diplomatique' }
    ],

    mindMap: [
      { id: 'mm5_root', label: 'Décolonisation & Nouveaux États' },
      { id: 'mm5_b1', label: 'Causes', parentId: 'mm5_root', description: 'Affaiblissement des métropoles, montée des nationalismes, contexte international favorable (ONU, superpuissances anticoloniales).' },
      { id: 'mm5_b2', label: 'Voie négociée', parentId: 'mm5_root', description: 'Inde (1947), Afrique noire francophone (1960). Indépendances obtenues sans guerre majeure mais parfois avec violences (partition de l\'Inde).' },
      { id: 'mm5_b3', label: 'Voie armée', parentId: 'mm5_root', description: 'Indochine (1946-1954), Algérie (1954-1962). Guerres longues et meurtrières contre la métropole.' },
      { id: 'mm5_b4', label: 'Tiers-monde', parentId: 'mm5_root', description: 'Bandung (1955), non-alignés (1961). Les nouveaux États cherchent une troisième voie entre les blocs.' },
      { id: 'mm5_b5', label: 'Défis post-indépendance', parentId: 'mm5_root', description: 'Instabilité politique, sous-développement, frontières artificielles, construction d\'une identité nationale.' }
    ],

    characters: [
      { id: 'c5_1', name: 'Mohandas Gandhi', dates: '1869-1948', role: 'Leader indépendantiste indien', importance: 'Surnommé le « Mahatma » (grande âme), il prône la résistance non-violente (désobéissance civile, boycott du sel) contre la domination britannique. Figure majeure de l\'indépendance de l\'Inde, il est assassiné en 1948 par un extrémiste hindou.' },
      { id: 'c5_2', name: 'Hô Chi Minh', dates: '1890-1969', role: 'Leader du Viêt-minh', importance: 'Fondateur du Viêt-minh, il mène la lutte pour l\'indépendance du Viêtnam face à la France. Il proclame l\'indépendance en 1945 et dirige la victoire de Diên Biên Phu en 1954.' },
      { id: 'c5_3', name: 'Jawaharlal Nehru', dates: '1889-1964', role: 'Premier ministre de l\'Inde', importance: 'Premier chef du gouvernement de l\'Inde indépendante (1947-1964), il est l\'un des fondateurs du mouvement des non-alignés et un acteur majeur de la conférence de Bandung (1955).' },
      { id: 'c5_4', name: 'Gamal Abdel Nasser', dates: '1918-1970', role: 'Président de l\'Égypte', importance: 'Symbole du panarabisme, il nationalise le canal de Suez en 1956 et participe activement à la conférence de Bandung. Il incarne la volonté d\'indépendance du monde arabe.' },
      { id: 'c5_5', name: 'Léopold Sédar Senghor', dates: '1906-2001', role: 'Président du Sénégal', importance: 'Poète, écrivain et homme politique, il est le premier président du Sénégal indépendant (1960). Promoteur de la négritude et de la francophonie, il incarne une décolonisation pacifique.' },
      { id: 'c5_6', name: 'Patrice Lumumba', dates: '1925-1961', role: 'Premier ministre du Congo', importance: 'Premier chef de gouvernement du Congo indépendant (1960), il est renversé puis assassiné en janvier 1961, devenant un symbole des difficultés post-indépendance en Afrique.' }
    ],

    dates: [
      { date: '15 août 1947', event: 'Indépendance de l\'Inde et du Pakistan', explanation: 'Le Royaume-Uni accorde l\'indépendance mais la partition provoque des violences intercommunautaires massives.' },
      { date: '7 mai 1954', event: 'Défaite de Diên Biên Phu', explanation: 'Victoire décisive du Viêt-minh sur l\'armée française, fin de la guerre d\'Indochine.' },
      { date: '1er novembre 1954', event: 'Début de la guerre d\'Algérie', explanation: 'Le FLN lance la « Toussaint rouge », série d\'attentats marquant le début de l\'insurrection.' },
      { date: 'Avril 1955', event: 'Conférence de Bandung', explanation: '29 pays d\'Asie et d\'Afrique condamnent le colonialisme et affirment leur solidarité : naissance du tiers-monde.' },
      { date: '1960', event: 'Année de l\'Afrique', explanation: '17 pays africains obtiennent leur indépendance, dont 14 anciennes colonies françaises.' },
      { date: '18 mars 1962', event: 'Accords d\'Évian', explanation: 'Fin de la guerre d\'Algérie. L\'Algérie devient indépendante le 5 juillet 1962.' },
      { date: '1961', event: 'Conférence de Belgrade', explanation: 'Fondation du mouvement des non-alignés par Nehru, Nasser et Tito.' }
    ],

    flashcards: [
      { id: 'fc5_1', question: 'Qu\'est-ce que la décolonisation ?', answer: 'C\'est le processus par lequel les peuples colonisés obtiennent leur indépendance vis-à-vis des métropoles européennes, principalement après 1945.' },
      { id: 'fc5_2', question: 'Quelles sont les deux grandes voies de la décolonisation ?', answer: 'La voie négociée (ex : Inde, Afrique noire francophone) et la voie armée (ex : Indochine, Algérie).' },
      { id: 'fc5_3', question: 'Qu\'est-ce que la conférence de Bandung (1955) ?', answer: 'Réunion de 29 pays d\'Asie et d\'Afrique en Indonésie, condamnant le colonialisme et affirmant la solidarité du tiers-monde.' },
      { id: 'fc5_4', question: 'Qu\'est-ce que le mouvement des non-alignés ?', answer: 'Un mouvement né à Belgrade en 1961, regroupant des pays refusant de s\'aligner sur les États-Unis ou l\'URSS pendant la Guerre froide.' },
      { id: 'fc5_5', question: 'Pourquoi l\'année 1960 est-elle appelée « l\'Année de l\'Afrique » ?', answer: 'Parce que 17 pays africains accèdent à l\'indépendance cette année-là.' },
      { id: 'fc5_6', question: 'Quel est le problème principal lié à la partition de l\'Inde en 1947 ?', answer: 'La partition entre l\'Union indienne (hindoue) et le Pakistan (musulman) provoque des violences intercommunautaires (environ 1 million de morts et 15 millions de déplacés).' },
      { id: 'fc5_7', question: 'Qu\'est-ce que le FLN ?', answer: 'Le Front de Libération Nationale, mouvement indépendantiste algérien qui a mené la guerre d\'Algérie (1954-1962) contre la France.' },
      { id: 'fc5_8', question: 'Comment s\'appelle la forme de résistance prônée par Gandhi ?', answer: 'La désobéissance civile non-violente (ou résistance passive). Il organise notamment la marche du sel en 1930.' }
    ],

    questions: [
      // QCM
      {
        id: 'q5_1',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel pays obtient son indépendance le 15 août 1947 ?',
        options: ['L\'Algérie', 'L\'Inde', 'Le Viêtnam', 'Le Sénégal'],
        answer: 'L\'Inde',
        explanation: 'Le 15 août 1947, le Royaume-Uni accorde l\'indépendance à l\'Inde, mais le pays est partitionné entre l\'Inde et le Pakistan.',
        trap: 'Attention à ne pas confondre avec l\'Algérie (1962) ou le Viêtnam (1954).'
      },
      {
        id: 'q5_2',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quelle conférence marque la naissance du tiers-monde en 1955 ?',
        options: ['La conférence de Yalta', 'La conférence de Bandung', 'La conférence de Belgrade', 'La conférence de Genève'],
        answer: 'La conférence de Bandung',
        explanation: 'La conférence de Bandung (Indonésie, avril 1955) réunit 29 pays d\'Asie et d\'Afrique qui condamnent le colonialisme et affirment leur solidarité.',
        trap: 'Belgrade (1961) est la fondation du mouvement des non-alignés, pas la naissance du tiers-monde.'
      },
      {
        id: 'q5_3',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quel événement militaire met fin à la guerre d\'Indochine en 1954 ?',
        options: ['La bataille d\'Alger', 'La chute de Diên Biên Phu', 'La crise de Suez', 'La Toussaint rouge'],
        answer: 'La chute de Diên Biên Phu',
        explanation: 'La défaite française à Diên Biên Phu le 7 mai 1954 est décisive et conduit aux accords de Genève qui mettent fin à la guerre d\'Indochine.'
      },
      {
        id: 'q5_4',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quels accords mettent fin à la guerre d\'Algérie en 1962 ?',
        options: ['Les accords de Genève', 'Les accords d\'Évian', 'Les accords de Paris', 'Les accords de Matignon'],
        answer: 'Les accords d\'Évian',
        explanation: 'Les accords d\'Évian, signés le 18 mars 1962, reconnaissent l\'indépendance de l\'Algérie et mettent fin à huit ans de guerre.'
      },
      {
        id: 'q5_5',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Pourquoi appelle-t-on 1960 « l\'Année de l\'Afrique » ?',
        options: ['Parce que l\'OUA est fondée', 'Parce que 17 pays africains deviennent indépendants', 'Parce que l\'apartheid prend fin', 'Parce que Mandela est libéré'],
        answer: 'Parce que 17 pays africains deviennent indépendants',
        explanation: 'En 1960, 17 pays d\'Afrique accèdent à l\'indépendance, dont 14 anciennes colonies françaises.'
      },
      {
        id: 'q5_6',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quel mouvement est fondé à la conférence de Belgrade en 1961 ?',
        options: ['Le Pacte de Varsovie', 'Le mouvement des non-alignés', 'L\'Organisation de l\'unité africaine', 'Le Marché commun'],
        answer: 'Le mouvement des non-alignés',
        explanation: 'La conférence de Belgrade (1961) fonde le mouvement des non-alignés, regroupant des pays refusant de s\'aligner sur les États-Unis ou l\'URSS.'
      },
      {
        id: 'q5_7',
        type: 'qcm',
        difficulty: 'expert',
        question: 'Que provoque la partition de l\'Inde en 1947 ?',
        options: ['Une alliance entre hindous et musulmans', 'Des violences intercommunautaires massives', 'L\'unification du sous-continent', 'La création du Bangladesh'],
        answer: 'Des violences intercommunautaires massives',
        explanation: 'La partition entre l\'Union indienne (hindoue) et le Pakistan (musulman) entraîne des violences qui causent environ 1 million de morts et 15 millions de déplacés.',
        trap: 'Le Bangladesh ne devient indépendant qu\'en 1971, séparé du Pakistan.'
      },

      // Boolean
      {
        id: 'q5_8',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Gandhi prônait la résistance violente contre les Britanniques.',
        answer: false,
        explanation: 'Gandhi prônait la non-violence (ahimsa) et la désobéissance civile pacifique, pas la résistance armée.'
      },
      {
        id: 'q5_9',
        type: 'boolean',
        difficulty: 'medium',
        question: 'La guerre d\'Algérie a duré de 1954 à 1962.',
        answer: true,
        explanation: 'La guerre d\'Algérie commence le 1er novembre 1954 (Toussaint rouge) et se termine avec les accords d\'Évian du 18 mars 1962.'
      },
      {
        id: 'q5_10',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Les États-Unis et l\'URSS étaient favorables au maintien des empires coloniaux européens.',
        answer: false,
        explanation: 'Les deux superpuissances étaient hostiles au colonialisme : les États-Unis par tradition anticoloniale, l\'URSS par idéologie anti-impérialiste.'
      },
      {
        id: 'q5_11',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Léopold Sédar Senghor est le premier président du Sénégal indépendant.',
        answer: true,
        explanation: 'Senghor est élu premier président du Sénégal en 1960 et reste au pouvoir jusqu\'en 1980. Il est aussi connu comme poète et promoteur de la négritude.'
      },
      {
        id: 'q5_12',
        type: 'boolean',
        difficulty: 'expert',
        question: 'La conférence de Bandung a eu lieu en 1961.',
        answer: false,
        explanation: 'La conférence de Bandung a eu lieu en avril 1955 en Indonésie. C\'est la conférence de Belgrade (1961) qui fonde le mouvement des non-alignés.',
        trap: 'Piège classique au Brevet : ne pas confondre Bandung (1955) et Belgrade (1961).'
      },

      // Date
      {
        id: 'q5_13',
        type: 'date',
        difficulty: 'easy',
        question: 'En quelle année l\'Inde obtient-elle son indépendance ?',
        options: ['1945', '1947', '1954', '1960'],
        answer: '1947',
        explanation: 'L\'Inde obtient son indépendance le 15 août 1947 après des décennies de lutte menée par Gandhi et Nehru.'
      },
      {
        id: 'q5_14',
        type: 'date',
        difficulty: 'medium',
        question: 'En quelle année a lieu la défaite française de Diên Biên Phu ?',
        options: ['1946', '1950', '1954', '1962'],
        answer: '1954',
        explanation: 'La chute de Diên Biên Phu le 7 mai 1954 marque la fin de la guerre d\'Indochine et la défaite française face au Viêt-minh.'
      },
      {
        id: 'q5_15',
        type: 'date',
        difficulty: 'medium',
        question: 'Quand se termine la guerre d\'Algérie ?',
        options: ['1954', '1958', '1960', '1962'],
        answer: '1962',
        explanation: 'Les accords d\'Évian sont signés le 18 mars 1962, mettant fin à la guerre d\'Algérie. L\'indépendance est proclamée le 5 juillet 1962.'
      },
      {
        id: 'q5_16',
        type: 'date',
        difficulty: 'hard',
        question: 'En quelle année a lieu la conférence de Bandung ?',
        options: ['1947', '1955', '1960', '1961'],
        answer: '1955',
        explanation: 'La conférence de Bandung se tient en avril 1955 en Indonésie, réunissant 29 pays d\'Asie et d\'Afrique.'
      },

      // Personnage
      {
        id: 'q5_17',
        type: 'personnage',
        difficulty: 'easy',
        question: 'Quel leader indien, surnommé le « Mahatma », prône la résistance non-violente contre les Britanniques ?',
        answer: 'Gandhi',
        explanation: 'Mohandas Gandhi (1869-1948), surnommé le Mahatma (« grande âme »), utilise la désobéissance civile non-violente pour lutter contre la colonisation britannique en Inde.'
      },
      {
        id: 'q5_18',
        type: 'personnage',
        difficulty: 'medium',
        question: 'Quel leader vietnamien dirige la lutte contre la France et remporte la victoire de Diên Biên Phu ?',
        answer: 'Hô Chi Minh',
        explanation: 'Hô Chi Minh (1890-1969) fonde le Viêt-minh et mène la guerre d\'indépendance contre la France, aboutissant à la victoire de Diên Biên Phu en 1954.'
      },
      {
        id: 'q5_19',
        type: 'personnage',
        difficulty: 'hard',
        question: 'Quel président égyptien nationalise le canal de Suez en 1956 et incarne le panarabisme ?',
        answer: 'Nasser',
        explanation: 'Gamal Abdel Nasser (1918-1970) nationalise le canal de Suez, provoquant une crise internationale. Il est un leader du mouvement des non-alignés et du panarabisme.'
      },
      {
        id: 'q5_20',
        type: 'personnage',
        difficulty: 'expert',
        question: 'Quel Premier ministre du Congo, assassiné en 1961, est devenu un symbole des luttes post-coloniales en Afrique ?',
        answer: 'Lumumba',
        explanation: 'Patrice Lumumba (1925-1961), premier chef de gouvernement du Congo indépendant, est renversé puis assassiné, devenant un symbole de l\'instabilité post-coloniale.'
      },
      {
        id: 'q5_21',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quel est le nom du mouvement indépendantiste algérien ?',
        options: ['Le Viêt-minh', 'Le FLN', 'L\'ANC', 'Le Parti du Congrès'],
        answer: 'Le FLN',
        explanation: 'Le FLN (Front de Libération Nationale) est le mouvement qui mène la guerre d\'indépendance de l\'Algérie contre la France de 1954 à 1962.'
      },
      {
        id: 'q5_22',
        type: 'boolean',
        difficulty: 'hard',
        question: 'La Charte de l\'ONU (1945) affirme le droit des peuples à disposer d\'eux-mêmes.',
        answer: true,
        explanation: 'La Charte des Nations Unies, signée en 1945, proclame le principe du droit des peuples à disposer d\'eux-mêmes, ce qui favorise la décolonisation.'
      }
    ],

    anecdotes: [
      'Le savais-tu ? Gandhi a organisé la célèbre « Marche du sel » en 1930 : il a parcouru 386 km à pied pour protester contre l\'impôt britannique sur le sel. Ce geste symbolique de désobéissance civile a mobilisé des millions d\'Indiens.',
      'Le savais-tu ? Lors de la partition de l\'Inde en 1947, environ 15 millions de personnes ont dû traverser la nouvelle frontière entre l\'Inde et le Pakistan, constituant l\'un des plus grands déplacements de population de l\'histoire.',
      'Le savais-tu ? Le mot « tiers-monde » a été inventé par le démographe français Alfred Sauvy en 1952, en référence au « tiers état » de la Révolution française, pour désigner les pays ni dans le bloc occidental ni dans le bloc soviétique.'
    ]
  },

  // ============================================================
  // CHAPITRE 6 – La Ve République
  // ============================================================
  {
    id: 'ch6',
    slug: 'cinquieme-republique',
    number: 6,
    subject: 'histoire',
    title: 'La Ve République',
    subtitle: 'Un régime politique stable et en constante évolution (depuis 1958)',
    introduction: 'Née en 1958 dans le contexte de la crise algérienne, la Ve République est fondée par le général de Gaulle. Sa Constitution renforce considérablement le pouvoir du président de la République. Depuis plus de 60 ans, ce régime a su s\'adapter aux évolutions de la société française : présidentialisation, alternance politique, grandes réformes sociales.',

    courseContent: `
      <h2>I. La naissance de la Ve République (1958)</h2>
      <h3>A. Le contexte : la crise algérienne</h3>
      <p>En mai 1958, la France est en crise : la guerre d'Algérie divise la société et l'armée menace un coup d'État. La IVe République, jugée trop instable (22 gouvernements en 12 ans), est incapable de résoudre la crise. Le <strong>13 mai 1958</strong>, un coup de force à Alger porte le général <strong>de Gaulle</strong> au pouvoir. Il est investi président du Conseil par l'Assemblée nationale le 1er juin 1958.</p>

      <h3>B. La Constitution de 1958</h3>
      <p>De Gaulle charge <strong>Michel Debré</strong> de rédiger une nouvelle constitution, adoptée par <strong>référendum</strong> le <strong>28 septembre 1958</strong> avec 79 % de « oui ». Elle renforce considérablement le pouvoir exécutif :</p>
      <ul>
        <li><strong>Le président de la République</strong> : chef de l'État, il nomme le Premier ministre, peut dissoudre l'Assemblée nationale et dispose de pouvoirs exceptionnels (article 16). Il est élu au suffrage universel indirect (grands électeurs).</li>
        <li><strong>Le Premier ministre</strong> : chef du gouvernement, il conduit la politique de la nation et est responsable devant l'Assemblée nationale.</li>
        <li><strong>Le Parlement</strong> : composé de l'Assemblée nationale et du Sénat. Ses pouvoirs sont réduits par rapport à la IVe République.</li>
        <li><strong>Le Conseil constitutionnel</strong> : créé pour veiller à la conformité des lois à la Constitution.</li>
      </ul>

      <h2>II. De Gaulle et la présidentialisation du régime (1958-1969)</h2>
      <h3>A. L'élection au suffrage universel direct (1962)</h3>
      <p>En <strong>1962</strong>, de Gaulle fait adopter par <strong>référendum</strong> l'élection du président de la République au <strong>suffrage universel direct</strong>. C'est un tournant majeur : le président tire désormais sa légitimité directement du peuple, renforçant le caractère présidentiel du régime.</p>

      <h3>B. La politique gaullienne</h3>
      <p>De Gaulle imprime sa marque à la Ve République :</p>
      <ul>
        <li><strong>Fin de la guerre d'Algérie</strong> : Les accords d'Évian (1962) mettent fin au conflit.</li>
        <li><strong>Politique d'indépendance nationale</strong> : retrait de l'OTAN (commandement intégré), force de dissuasion nucléaire, reconnaissance de la Chine.</li>
        <li><strong>Modernisation économique</strong> : les « Trente Glorieuses » transforment la société française.</li>
      </ul>

      <h3>C. Mai 1968</h3>
      <p>En <strong>mai 1968</strong>, une crise majeure secoue la France : des manifestations étudiantes, suivies d'une grève générale massive (10 millions de grévistes), contestent l'autorité gaullienne et réclament de profondes réformes de société. De Gaulle reprend la main en dissolvant l'Assemblée nationale et en remportant les élections de juin 1968. Mais, affaibli, il démissionne après l'échec d'un référendum en <strong>avril 1969</strong>.</p>

      <h2>III. L'alternance et l'évolution du régime</h2>
      <h3>A. L'après-De Gaulle</h3>
      <p><strong>Georges Pompidou</strong> (1969-1974) poursuit la modernisation industrielle du pays. <strong>Valéry Giscard d'Estaing</strong> (1974-1981) engage des réformes sociétales importantes :</p>
      <ul>
        <li><strong>Loi Veil (1975)</strong> : légalisation de l'interruption volontaire de grossesse (IVG), portée par la ministre de la Santé <strong>Simone Veil</strong>.</li>
        <li>Abaissement de la majorité civile de 21 à 18 ans (1974).</li>
      </ul>

      <h3>B. L'alternance de 1981</h3>
      <p>Le <strong>10 mai 1981</strong>, <strong>François Mitterrand</strong> est élu président de la République. C'est la première <strong>alternance politique</strong> sous la Ve République : la gauche (Parti socialiste) accède au pouvoir. Mitterrand engage d'importantes réformes :</p>
      <ul>
        <li><strong>Abolition de la peine de mort</strong> (1981), portée par le garde des Sceaux <strong>Robert Badinter</strong>.</li>
        <li>Nationalisations d'entreprises et de banques.</li>
        <li>5e semaine de congés payés, retraite à 60 ans, semaine de 39 heures.</li>
      </ul>

      <h3>C. La cohabitation</h3>
      <p>La Ve République invente un nouveau cas de figure : la <strong>cohabitation</strong>, situation où le président et le Premier ministre sont de bords politiques opposés. Il y en a eu trois :</p>
      <ul>
        <li>1986-1988 : Mitterrand (PS) / <strong>Jacques Chirac</strong> (RPR), Premier ministre.</li>
        <li>1993-1995 : Mitterrand (PS) / Édouard Balladur (RPR).</li>
        <li>1997-2002 : Chirac (RPR) / Lionel Jospin (PS).</li>
      </ul>

      <h3>D. Réformes institutionnelles</h3>
      <p>Le régime a évolué par des révisions constitutionnelles :</p>
      <ul>
        <li><strong>Quinquennat (2000)</strong> : Le mandat présidentiel passe de 7 à 5 ans, pour limiter les cohabitations.</li>
        <li><strong>Question prioritaire de constitutionnalité (QPC, 2008)</strong> : tout citoyen peut contester la constitutionnalité d'une loi lors d'un procès.</li>
      </ul>
    `,

    summary: `
### Fiche Synthèse : La Ve République (depuis 1958)

* **Naissance** : Le 28 septembre 1958, la Constitution est adoptée par référendum (79 % de « oui »), dans le contexte de la crise algérienne.
* **Constitution** : Renforcement du pouvoir exécutif (président + Premier ministre), réduction du pouvoir du Parlement, création du Conseil constitutionnel.
* **De Gaulle (1958-1969)** :
  - 1962 : élection du président au **suffrage universel direct** (référendum).
  - 1962 : fin de la guerre d'Algérie (accords d'Évian).
  - Mai 1968 : crise sociale et politique majeure.
  - Avril 1969 : démission après l'échec d'un référendum.
* **Grandes réformes** :
  - **1975** : Loi Veil (IVG).
  - **1981** : alternance politique, Mitterrand élu, abolition de la peine de mort.
  - **2000** : passage au quinquennat.
* **Cohabitation** : Président et Premier ministre de bords opposés (1986, 1993, 1997).
* **Personnages clés** : De Gaulle, Pompidou, Mitterrand, Chirac, Simone Veil.
    `,

    timeline: [
      { id: 't6_1', date: '28 septembre 1958', title: 'Adoption de la Constitution', description: 'La Constitution de la Ve République est adoptée par référendum avec 79 % de oui.', category: 'politique' },
      { id: 't6_2', date: '1962', title: 'Élection au suffrage universel direct', description: 'De Gaulle fait adopter par référendum l\'élection du président au suffrage universel direct.', category: 'politique' },
      { id: 't6_3', date: 'Mai 1968', title: 'Mai 68', description: 'Crise sociale majeure : manifestations étudiantes et grève générale de 10 millions de travailleurs.', category: 'social' },
      { id: 't6_4', date: 'Avril 1969', title: 'Démission de De Gaulle', description: 'De Gaulle démissionne après l\'échec de son référendum sur la régionalisation et le Sénat.', category: 'politique' },
      { id: 't6_5', date: '17 janvier 1975', title: 'Loi Veil', description: 'Légalisation de l\'IVG en France, portée par la ministre de la Santé Simone Veil.', category: 'social' },
      { id: 't6_6', date: '10 mai 1981', title: 'Élection de Mitterrand', description: 'Première alternance politique : François Mitterrand, socialiste, est élu président.', category: 'politique' },
      { id: 't6_7', date: '9 octobre 1981', title: 'Abolition de la peine de mort', description: 'La loi Badinter abolit la peine de mort en France.', category: 'social' },
      { id: 't6_8', date: '2000', title: 'Passage au quinquennat', description: 'Le mandat présidentiel passe de 7 ans (septennat) à 5 ans (quinquennat) par référendum.', category: 'politique' }
    ],

    mindMap: [
      { id: 'mm6_root', label: 'La Ve République' },
      { id: 'mm6_b1', label: 'Fondation (1958)', parentId: 'mm6_root', description: 'Crise algérienne, retour de De Gaulle, nouvelle Constitution renforçant l\'exécutif.' },
      { id: 'mm6_b2', label: 'Présidentialisation', parentId: 'mm6_root', description: 'Suffrage universel direct (1962), prédominance du président, usage du référendum.' },
      { id: 'mm6_b3', label: 'Crises et adaptations', parentId: 'mm6_root', description: 'Mai 68, cohabitations (1986, 1993, 1997), passage au quinquennat (2000).' },
      { id: 'mm6_b4', label: 'Grandes réformes', parentId: 'mm6_root', description: 'Loi Veil (1975), alternance (1981), abolition peine de mort, 5e semaine de congés.' },
      { id: 'mm6_b5', label: 'Institutions', parentId: 'mm6_root', description: 'Président, Premier ministre, Assemblée nationale, Sénat, Conseil constitutionnel.' }
    ],

    characters: [
      { id: 'c6_1', name: 'Charles de Gaulle', dates: '1890-1970', role: 'Fondateur et premier président de la Ve République', importance: 'Héros de la France libre pendant la Seconde Guerre mondiale, il revient au pouvoir en 1958, fonde la Ve République et en façonne les institutions. Il met fin à la guerre d\'Algérie, renforce le pouvoir présidentiel et mène une politique d\'indépendance nationale.' },
      { id: 'c6_2', name: 'Georges Pompidou', dates: '1911-1974', role: 'Président de la République (1969-1974)', importance: 'Successeur de De Gaulle, il poursuit la modernisation industrielle de la France et lance de grands projets (Centre Pompidou). Il meurt en fonction le 2 avril 1974.' },
      { id: 'c6_3', name: 'François Mitterrand', dates: '1916-1996', role: 'Président de la République (1981-1995)', importance: 'Premier président socialiste de la Ve République, il incarne la première alternance politique en 1981. Il abolit la peine de mort, procède à des nationalisations et engage des réformes sociales majeures. Il est aussi le premier président à connaître la cohabitation.' },
      { id: 'c6_4', name: 'Jacques Chirac', dates: '1932-2019', role: 'Président de la République (1995-2007)', importance: 'Deux fois Premier ministre (1974-1976 et 1986-1988, première cohabitation), puis président. Il met en place le quinquennat (2000) et refuse la guerre en Irak (2003).' },
      { id: 'c6_5', name: 'Simone Veil', dates: '1927-2017', role: 'Ministre de la Santé (1974-1979)', importance: 'Rescapée d\'Auschwitz, elle porte avec courage la loi légalisant l\'IVG en 1975 face à un Parlement hostile. Elle est ensuite présidente du Parlement européen (1979-1982). Elle entre au Panthéon en 2018.' }
    ],

    dates: [
      { date: '28 septembre 1958', event: 'Adoption de la Constitution de la Ve République', explanation: 'La nouvelle Constitution est approuvée par référendum avec 79 % de oui. Elle renforce le pouvoir exécutif.' },
      { date: '1962', event: 'Élection du président au suffrage universel direct', explanation: 'Révision constitutionnelle adoptée par référendum. Le président est désormais élu directement par le peuple.' },
      { date: 'Mai 1968', event: 'Crise de Mai 68', explanation: 'Mouvement étudiant puis grève générale massive (10 millions de grévistes) contestant l\'autorité gaullienne.' },
      { date: '17 janvier 1975', event: 'Loi Veil légalisant l\'IVG', explanation: 'La ministre Simone Veil fait voter la légalisation de l\'interruption volontaire de grossesse malgré une forte opposition.' },
      { date: '10 mai 1981', event: 'Élection de François Mitterrand', explanation: 'Première alternance politique sous la Ve République : la gauche accède au pouvoir.' },
      { date: '9 octobre 1981', event: 'Abolition de la peine de mort', explanation: 'La loi portée par Robert Badinter abolit la peine de mort en France.' },
      { date: '2000', event: 'Passage au quinquennat', explanation: 'Le mandat présidentiel passe de 7 à 5 ans, adopté par référendum, pour réduire les risques de cohabitation.' }
    ],

    flashcards: [
      { id: 'fc6_1', question: 'Quand et comment la Constitution de la Ve République a-t-elle été adoptée ?', answer: 'Le 28 septembre 1958 par référendum, avec 79 % de « oui ».' },
      { id: 'fc6_2', question: 'Quelle réforme majeure De Gaulle fait-il adopter en 1962 ?', answer: 'L\'élection du président de la République au suffrage universel direct, par référendum.' },
      { id: 'fc6_3', question: 'Qu\'est-ce que la cohabitation ?', answer: 'C\'est la situation où le président de la République et le Premier ministre appartiennent à des partis politiques opposés.' },
      { id: 'fc6_4', question: 'Qu\'est-ce que l\'alternance politique ?', answer: 'C\'est le passage du pouvoir d\'un camp politique à l\'autre (ex : de la droite à la gauche en 1981 avec l\'élection de Mitterrand).' },
      { id: 'fc6_5', question: 'Que s\'est-il passé en mai 1968 ?', answer: 'Une crise sociale majeure : manifestations étudiantes suivies d\'une grève générale de 10 millions de travailleurs, contestant l\'ordre gaullien.' },
      { id: 'fc6_6', question: 'Qu\'est-ce que la loi Veil (1975) ?', answer: 'La loi légalisant l\'interruption volontaire de grossesse (IVG), portée par la ministre de la Santé Simone Veil.' },
      { id: 'fc6_7', question: 'Quelle grande réforme Robert Badinter a-t-il portée en 1981 ?', answer: 'L\'abolition de la peine de mort en France, votée le 9 octobre 1981.' },
      { id: 'fc6_8', question: 'Qu\'est-ce que le quinquennat ?', answer: 'Le mandat présidentiel de 5 ans (au lieu de 7 ans, le septennat), adopté par référendum en 2000.' }
    ],

    questions: [
      // QCM
      {
        id: 'q6_1',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Qui est le fondateur de la Ve République ?',
        options: ['Georges Pompidou', 'Charles de Gaulle', 'François Mitterrand', 'Jacques Chirac'],
        answer: 'Charles de Gaulle',
        explanation: 'Le général de Gaulle revient au pouvoir en 1958 et fonde la Ve République avec une nouvelle Constitution renforçant le pouvoir présidentiel.'
      },
      {
        id: 'q6_2',
        type: 'qcm',
        difficulty: 'easy',
        question: 'En quelle année la Constitution de la Ve République est-elle adoptée ?',
        options: ['1946', '1954', '1958', '1962'],
        answer: '1958',
        explanation: 'La Constitution est adoptée par référendum le 28 septembre 1958 avec 79 % de « oui ».'
      },
      {
        id: 'q6_3',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quelle réforme constitutionnelle De Gaulle fait-il adopter en 1962 ?',
        options: ['Le passage au quinquennat', 'L\'élection du président au suffrage universel direct', 'La création du Conseil constitutionnel', 'L\'abolition de la peine de mort'],
        answer: 'L\'élection du président au suffrage universel direct',
        explanation: 'En 1962, De Gaulle fait adopter par référendum l\'élection du président au suffrage universel direct, renforçant sa légitimité.'
      },
      {
        id: 'q6_4',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Qu\'est-ce qu\'une cohabitation sous la Ve République ?',
        options: ['L\'alliance entre le président et le Premier ministre', 'La situation où le président et le Premier ministre sont de bords politiques opposés', 'L\'élection simultanée du président et de l\'Assemblée', 'La dissolution de l\'Assemblée nationale'],
        answer: 'La situation où le président et le Premier ministre sont de bords politiques opposés',
        explanation: 'La cohabitation survient quand le président et la majorité parlementaire sont de camps opposés. Il y en a eu trois : 1986, 1993 et 1997.'
      },
      {
        id: 'q6_5',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quelle loi Simone Veil fait-elle adopter en 1975 ?',
        options: ['L\'abolition de la peine de mort', 'La légalisation de l\'IVG', 'Le droit de vote des femmes', 'La majorité à 18 ans'],
        answer: 'La légalisation de l\'IVG',
        explanation: 'En tant que ministre de la Santé, Simone Veil fait voter la loi légalisant l\'interruption volontaire de grossesse (IVG) le 17 janvier 1975.'
      },
      {
        id: 'q6_6',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quel événement provoque le retour de De Gaulle au pouvoir en 1958 ?',
        options: ['La crise économique', 'La guerre d\'Indochine', 'La crise algérienne et le coup de force du 13 mai', 'Les manifestations étudiantes'],
        answer: 'La crise algérienne et le coup de force du 13 mai',
        explanation: 'Le 13 mai 1958, un coup de force militaire à Alger, dans le contexte de la guerre d\'Algérie, précipite le retour de De Gaulle au pouvoir.'
      },
      {
        id: 'q6_7',
        type: 'qcm',
        difficulty: 'expert',
        question: 'Combien de cohabitations la Ve République a-t-elle connues ?',
        options: ['Une', 'Deux', 'Trois', 'Quatre'],
        answer: 'Trois',
        explanation: 'Trois cohabitations : Mitterrand/Chirac (1986-1988), Mitterrand/Balladur (1993-1995), Chirac/Jospin (1997-2002).'
      },

      // Boolean
      {
        id: 'q6_8',
        type: 'boolean',
        difficulty: 'easy',
        question: 'La Ve République a été fondée en 1958.',
        answer: true,
        explanation: 'La Constitution de la Ve République est adoptée par référendum le 28 septembre 1958.'
      },
      {
        id: 'q6_9',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Sous la Ve République, le président est élu au suffrage universel direct depuis 1958.',
        answer: false,
        explanation: 'En 1958, le président est élu au suffrage universel indirect (grands électeurs). C\'est en 1962 que De Gaulle fait adopter l\'élection au suffrage universel direct.',
        trap: 'Piège classique : le suffrage universel direct date de 1962, pas de 1958.'
      },
      {
        id: 'q6_10',
        type: 'boolean',
        difficulty: 'medium',
        question: 'François Mitterrand est le premier président socialiste de la Ve République.',
        answer: true,
        explanation: 'Élu le 10 mai 1981, François Mitterrand est le premier président de gauche (Parti socialiste) sous la Ve République.'
      },
      {
        id: 'q6_11',
        type: 'boolean',
        difficulty: 'hard',
        question: 'La peine de mort a été abolie en France en 1975.',
        answer: false,
        explanation: 'La peine de mort a été abolie le 9 octobre 1981, par la loi Badinter. En 1975, c\'est la loi Veil (IVG) qui est adoptée.',
        trap: 'Ne pas confondre la loi Veil (1975, IVG) et la loi Badinter (1981, abolition de la peine de mort).'
      },
      {
        id: 'q6_12',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Le quinquennat a remplacé le septennat en 2000.',
        answer: true,
        explanation: 'Par référendum en 2000, le mandat présidentiel est passé de 7 ans (septennat) à 5 ans (quinquennat).'
      },
      {
        id: 'q6_13',
        type: 'boolean',
        difficulty: 'expert',
        question: 'De Gaulle a démissionné après les événements de mai 1968.',
        answer: false,
        explanation: 'De Gaulle reprend la main en juin 1968 (dissolution de l\'Assemblée, victoire électorale). Il démissionne en avril 1969, après l\'échec d\'un référendum sur la régionalisation.',
        trap: 'De Gaulle survit à Mai 68 mais c\'est l\'échec du référendum de 1969 qui provoque sa démission.'
      },

      // Date
      {
        id: 'q6_14',
        type: 'date',
        difficulty: 'easy',
        question: 'En quelle année la Ve République est-elle fondée ?',
        options: ['1946', '1954', '1958', '1968'],
        answer: '1958',
        explanation: 'La Constitution de la Ve République est adoptée par référendum le 28 septembre 1958.'
      },
      {
        id: 'q6_15',
        type: 'date',
        difficulty: 'medium',
        question: 'En quelle année a lieu la première alternance politique sous la Ve République ?',
        options: ['1969', '1974', '1981', '1988'],
        answer: '1981',
        explanation: 'Le 10 mai 1981, François Mitterrand (socialiste) est élu président, marquant la première alternance gauche-droite.'
      },
      {
        id: 'q6_16',
        type: 'date',
        difficulty: 'hard',
        question: 'En quelle année la loi Veil sur l\'IVG est-elle adoptée ?',
        options: ['1968', '1975', '1981', '1988'],
        answer: '1975',
        explanation: 'La loi Veil, légalisant l\'interruption volontaire de grossesse, est promulguée le 17 janvier 1975.'
      },

      // Personnage
      {
        id: 'q6_17',
        type: 'personnage',
        difficulty: 'easy',
        question: 'Quel général fonde la Ve République en 1958 ?',
        answer: 'De Gaulle',
        explanation: 'Le général Charles de Gaulle (1890-1970) revient au pouvoir en 1958 et fonde la Ve République avec une nouvelle Constitution.'
      },
      {
        id: 'q6_18',
        type: 'personnage',
        difficulty: 'medium',
        question: 'Quelle ministre porte la loi légalisant l\'IVG en 1975 ?',
        answer: 'Simone Veil',
        explanation: 'Simone Veil (1927-2017), ministre de la Santé, fait adopter la loi sur l\'IVG malgré une vive opposition parlementaire.'
      },
      {
        id: 'q6_19',
        type: 'personnage',
        difficulty: 'hard',
        question: 'Quel garde des Sceaux fait abolir la peine de mort en 1981 ?',
        answer: 'Robert Badinter',
        explanation: 'Robert Badinter, ministre de la Justice (garde des Sceaux) de François Mitterrand, porte la loi d\'abolition de la peine de mort votée le 9 octobre 1981.'
      },
      {
        id: 'q6_20',
        type: 'personnage',
        difficulty: 'medium',
        question: 'Quel président socialiste est élu en 1981, marquant la première alternance ?',
        answer: 'François Mitterrand',
        explanation: 'François Mitterrand (1916-1996) est élu président le 10 mai 1981. C\'est la première fois que la gauche accède au pouvoir sous la Ve République.'
      },
      {
        id: 'q6_21',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quel article de la Constitution donne des pouvoirs exceptionnels au président ?',
        options: ['L\'article 5', 'L\'article 11', 'L\'article 16', 'L\'article 49-3'],
        answer: 'L\'article 16',
        explanation: 'L\'article 16 de la Constitution de 1958 permet au président de la République de prendre des pouvoirs exceptionnels en cas de menace grave.'
      },
      {
        id: 'q6_22',
        type: 'qcm',
        difficulty: 'expert',
        question: 'Quelle réforme sociale de 1974 abaisse la majorité en France ?',
        options: ['Le passage de 25 à 21 ans', 'Le passage de 21 à 18 ans', 'Le passage de 18 à 16 ans', 'Le passage de 20 à 18 ans'],
        answer: 'Le passage de 21 à 18 ans',
        explanation: 'Sous la présidence de Giscard d\'Estaing, la majorité civile est abaissée de 21 à 18 ans en 1974.'
      }
    ],

    anecdotes: [
      'Le savais-tu ? Lors du débat parlementaire sur la loi Veil en 1975, Simone Veil a subi des attaques d\'une violence inouïe. Certains députés ont comparé l\'IVG aux camps de concentration nazis, alors qu\'elle-même était rescapée d\'Auschwitz.',
      'Le savais-tu ? En mai 1968, le slogan le plus célèbre était « Il est interdit d\'interdire ». Les murs de Paris se couvraient de slogans poétiques et contestataires comme « Sous les pavés, la plage » ou « Soyez réalistes, demandez l\'impossible ».',
      'Le savais-tu ? De Gaulle a mystérieusement disparu le 29 mai 1968, provoquant une panique générale. Il s\'était en fait rendu secrètement à Baden-Baden (Allemagne) pour s\'assurer du soutien de l\'armée française stationnée sur place.'
    ]
  },

  // ============================================================
  // CHAPITRE 7 – Le monde depuis 1989
  // ============================================================
  {
    id: 'ch7',
    slug: 'monde-depuis-1989',
    number: 7,
    subject: 'histoire',
    title: 'Le monde depuis 1989',
    subtitle: 'Un nouvel ordre mondial entre espoirs et tensions (1989 à nos jours)',
    introduction: 'La chute du mur de Berlin en 1989 marque la fin de la Guerre froide et l\'effondrement du bloc soviétique. Un « nouvel ordre mondial » semble émerger, dominé par les États-Unis, seule superpuissance restante. Mais ce monde unipolaire est vite confronté à de nouveaux défis : terrorisme international, conflits régionaux, construction européenne, et montée des puissances émergentes.',

    courseContent: `
      <h2>I. La fin de la Guerre froide (1989-1991)</h2>
      <h3>A. L'effondrement du bloc soviétique</h3>
      <p>Dès 1985, <strong>Mikhaïl Gorbatchev</strong>, secrétaire général du Parti communiste d'URSS, lance des réformes pour sauver le système soviétique :</p>
      <ul>
        <li><strong>Glasnost</strong> (transparence) : plus de liberté d'expression et d'information.</li>
        <li><strong>Perestroïka</strong> (restructuration) : réformes économiques pour moderniser l'économie planifiée.</li>
      </ul>
      <p>Mais ces réformes libèrent des forces qu'il ne peut contrôler. Les peuples d'Europe de l'Est se soulèvent pacifiquement contre les régimes communistes :</p>
      <ul>
        <li><strong>9 novembre 1989</strong> : <strong>Chute du mur de Berlin</strong>, symbole de la fin du rideau de fer.</li>
        <li>1989-1990 : « révolutions de velours » en Pologne, Tchécoslovaquie, Hongrie, Roumanie.</li>
        <li><strong>3 octobre 1990</strong> : <strong>Réunification allemande</strong>.</li>
      </ul>

      <h3>B. La dissolution de l'URSS</h3>
      <p>Le <strong>25 décembre 1991</strong>, Gorbatchev démissionne et l'<strong>URSS est officiellement dissoute</strong>. Elle éclate en 15 républiques indépendantes (Russie, Ukraine, pays baltes, républiques d'Asie centrale…). C'est la fin définitive de la Guerre froide et du monde bipolaire.</p>

      <h2>II. Un « nouvel ordre mondial » ?</h2>
      <h3>A. L'hyperpuissance américaine</h3>
      <p>Après 1991, les <strong>États-Unis</strong> deviennent la seule superpuissance mondiale (on parle d'« hyperpuissance »). Le président <strong>George H. W. Bush</strong> (« Bush père ») annonce un « nouvel ordre mondial » fondé sur le droit international et le rôle de l'ONU :</p>
      <ul>
        <li><strong>Guerre du Golfe (1990-1991)</strong> : Une coalition internationale, autorisée par l'ONU et menée par les États-Unis, libère le Koweït envahi par l'Irak de Saddam Hussein.</li>
      </ul>

      <h3>B. Les limites du nouvel ordre mondial</h3>
      <p>Mais le monde post-Guerre froide est loin d'être pacifique :</p>
      <ul>
        <li><strong>Guerres en ex-Yougoslavie (1991-2001)</strong> : L'éclatement de la Yougoslavie provoque des guerres ethniques sanglantes (Bosnie, Kosovo). Le massacre de Srebrenica (1995) est qualifié de génocide.</li>
        <li><strong>Génocide au Rwanda (1994)</strong> : En 100 jours, environ 800 000 Tutsis sont massacrés par les milices hutues. La communauté internationale n'intervient pas.</li>
      </ul>

      <h2>III. Le terrorisme et ses conséquences</h2>
      <h3>A. Le 11 septembre 2001</h3>
      <p>Le <strong>11 septembre 2001</strong>, des avions détournés par le groupe terroriste <strong>Al-Qaïda</strong>, dirigé par <strong>Oussama Ben Laden</strong>, frappent les tours du World Trade Center à New York et le Pentagone à Washington. Près de 3 000 personnes sont tuées. C'est l'attentat le plus meurtrier de l'histoire.</p>

      <h3>B. La « guerre contre le terrorisme »</h3>
      <p>En réponse, les États-Unis de <strong>George W. Bush</strong> lancent une « guerre contre le terrorisme » :</p>
      <ul>
        <li><strong>Guerre d'Afghanistan (2001-2021)</strong> : Intervention pour renverser le régime des Talibans qui abritait Al-Qaïda.</li>
        <li><strong>Guerre d'Irak (2003)</strong> : Intervention controversée, sans mandat de l'ONU, pour renverser Saddam Hussein (la France de Chirac refuse d'y participer).</li>
      </ul>
      <p>Le terrorisme islamiste frappe également l'Europe : attentats de Madrid (2004), Londres (2005), Paris (2015), Nice (2016), Bruxelles (2016).</p>

      <h2>IV. La construction européenne</h2>
      <p>L'Union européenne se renforce et s'élargit après la fin de la Guerre froide :</p>
      <ul>
        <li><strong>Traité de Maastricht (7 février 1992)</strong> : Création de l'<strong>Union européenne (UE)</strong>. Il prévoit la citoyenneté européenne, la politique étrangère commune et surtout l'union économique et monétaire.</li>
        <li><strong>L'euro (2002)</strong> : La monnaie unique européenne entre en circulation dans 12 pays de la zone euro.</li>
        <li><strong>Élargissements</strong> : L'UE passe de 12 à 28 membres (intégration des anciens pays du bloc soviétique en 2004 et 2007).</li>
        <li><strong>Le Brexit (2016-2020)</strong> : Le Royaume-Uni vote par référendum sa sortie de l'UE, effective le 31 janvier 2020.</li>
      </ul>

      <h2>V. Un monde multipolaire et de nouveaux défis</h2>
      <p>Au XXIe siècle, le monde devient <strong>multipolaire</strong>, avec la montée en puissance de nouveaux acteurs :</p>
      <ul>
        <li><strong>La Chine</strong> : deuxième puissance économique mondiale, elle s'affirme comme un concurrent stratégique des États-Unis.</li>
        <li><strong>La Russie de Poutine</strong> : elle cherche à retrouver son influence (annexion de la Crimée en 2014, guerre en Ukraine depuis 2022).</li>
        <li><strong>Défis globaux</strong> : réchauffement climatique (accords de Paris 2015), pandémie de Covid-19 (2020), migrations, inégalités mondiales.</li>
      </ul>

      <div class="bg-violet-50 dark:bg-violet-950/30 border-l-4 border-violet-500 p-4 my-6 rounded-r">
        <h4 class="font-bold text-violet-700 dark:text-violet-300">Focus : La fin de l'apartheid en Afrique du Sud</h4>
        <p class="text-sm mt-1">En 1990, <strong>Nelson Mandela</strong> est libéré après 27 ans de prison. En 1991, le président De Klerk abolit l'apartheid (système de ségrégation raciale). En 1994, Mandela est élu premier président noir d'Afrique du Sud. Il incarne la réconciliation nationale.</p>
      </div>
    `,

    summary: `
### Fiche Synthèse : Le monde depuis 1989

* **Fin de la Guerre froide** :
  - **9 novembre 1989** : chute du mur de Berlin.
  - **3 octobre 1990** : réunification allemande.
  - **25 décembre 1991** : dissolution de l'URSS (15 républiques indépendantes).
* **Nouvel ordre mondial** :
  - Les États-Unis, seule « hyperpuissance ».
  - Guerre du Golfe (1991) : coalition ONU.
  - Limites : guerres en ex-Yougoslavie, génocide au Rwanda (1994).
* **Terrorisme** :
  - **11 septembre 2001** : attentats d'Al-Qaïda aux États-Unis (≈ 3 000 morts).
  - Guerres d'Afghanistan (2001) et d'Irak (2003).
  - Attentats en Europe (Madrid, Londres, Paris, Nice).
* **Construction européenne** :
  - **Traité de Maastricht (1992)** : création de l'UE.
  - **Euro (2002)**, élargissements à l'Est (2004, 2007), **Brexit (2020)**.
* **Monde multipolaire** : montée de la Chine, retour de la Russie, défis climatiques, pandémie de Covid-19.
* **Personnages clés** : Gorbatchev, Bush père, Mandela, Ben Laden.
    `,

    timeline: [
      { id: 't7_1', date: '9 novembre 1989', title: 'Chute du mur de Berlin', description: 'Le mur de Berlin tombe, symbole de la fin du rideau de fer et de la Guerre froide.', category: 'politique' },
      { id: 't7_2', date: '3 octobre 1990', title: 'Réunification allemande', description: 'La RDA (Est) et la RFA (Ouest) sont réunifiées en un seul État allemand.', category: 'politique' },
      { id: 't7_3', date: '25 décembre 1991', title: 'Dissolution de l\'URSS', description: 'Gorbatchev démissionne, l\'URSS disparaît et éclate en 15 républiques indépendantes.', category: 'politique' },
      { id: 't7_4', date: '7 février 1992', title: 'Traité de Maastricht', description: 'Signature du traité créant l\'Union européenne (citoyenneté européenne, union monétaire).', category: 'diplomatique' },
      { id: 't7_5', date: '11 septembre 2001', title: 'Attentats du 11 septembre', description: 'Attaques terroristes d\'Al-Qaïda contre les États-Unis : près de 3 000 morts.', category: 'militaire' },
      { id: 't7_6', date: '1er janvier 2002', title: 'Mise en circulation de l\'euro', description: 'La monnaie unique européenne entre en circulation dans 12 pays de la zone euro.', category: 'politique' },
      { id: 't7_7', date: '2004', title: 'Élargissement de l\'UE à l\'Est', description: '10 nouveaux pays rejoignent l\'Union européenne, dont plusieurs anciens pays du bloc soviétique.', category: 'diplomatique' },
      { id: 't7_8', date: '31 janvier 2020', title: 'Brexit', description: 'Le Royaume-Uni quitte officiellement l\'Union européenne après le référendum de 2016.', category: 'politique' }
    ],

    mindMap: [
      { id: 'mm7_root', label: 'Le monde depuis 1989' },
      { id: 'mm7_b1', label: 'Fin de la Guerre froide', parentId: 'mm7_root', description: 'Chute du mur de Berlin (1989), réunification allemande (1990), dissolution de l\'URSS (1991).' },
      { id: 'mm7_b2', label: 'Nouvel ordre mondial', parentId: 'mm7_root', description: 'Hyperpuissance américaine, guerre du Golfe (1991), mais aussi conflits (Yougoslavie, Rwanda).' },
      { id: 'mm7_b3', label: 'Terrorisme', parentId: 'mm7_root', description: '11 septembre 2001, guerres d\'Afghanistan et d\'Irak, attentats en Europe.' },
      { id: 'mm7_b4', label: 'Construction européenne', parentId: 'mm7_root', description: 'Maastricht (1992), euro (2002), élargissements, Brexit (2020).' },
      { id: 'mm7_b5', label: 'Monde multipolaire', parentId: 'mm7_root', description: 'Montée de la Chine, retour de la Russie, défis climatiques, pandémie de Covid-19.' }
    ],

    characters: [
      { id: 'c7_1', name: 'Mikhaïl Gorbatchev', dates: '1931-2022', role: 'Dernier dirigeant de l\'URSS', importance: 'Secrétaire général du Parti communiste soviétique (1985-1991), il lance la glasnost et la perestroïka. Ses réformes accélèrent involontairement l\'effondrement du bloc soviétique. Prix Nobel de la paix en 1990.' },
      { id: 'c7_2', name: 'George H. W. Bush', dates: '1924-2018', role: 'Président des États-Unis (1989-1993)', importance: 'Président lors de la chute du mur de Berlin et de la dissolution de l\'URSS, il annonce un « nouvel ordre mondial » et dirige la coalition internationale lors de la guerre du Golfe (1991).' },
      { id: 'c7_3', name: 'Nelson Mandela', dates: '1918-2013', role: 'Président d\'Afrique du Sud (1994-1999)', importance: 'Emprisonné pendant 27 ans pour sa lutte contre l\'apartheid, il est libéré en 1990. Élu premier président noir d\'Afrique du Sud en 1994, il incarne la réconciliation nationale. Prix Nobel de la paix en 1993.' },
      { id: 'c7_4', name: 'Oussama Ben Laden', dates: '1957-2011', role: 'Fondateur du réseau terroriste Al-Qaïda', importance: 'Commanditaire des attentats du 11 septembre 2001, il est traqué pendant une décennie par les États-Unis. Il est finalement tué par les forces spéciales américaines au Pakistan en mai 2011.' }
    ],

    dates: [
      { date: '9 novembre 1989', event: 'Chute du mur de Berlin', explanation: 'Le mur séparant Berlin-Est et Berlin-Ouest tombe, symbolisant la fin de la Guerre froide.' },
      { date: '3 octobre 1990', event: 'Réunification allemande', explanation: 'La RDA et la RFA sont réunifiées en un seul État, mettant fin à la division de l\'Allemagne.' },
      { date: '25 décembre 1991', event: 'Dissolution de l\'URSS', explanation: 'L\'Union soviétique disparaît officiellement, mettant fin au monde bipolaire.' },
      { date: '7 février 1992', event: 'Traité de Maastricht', explanation: 'Création de l\'Union européenne avec citoyenneté européenne, politique étrangère commune et union monétaire.' },
      { date: '11 septembre 2001', event: 'Attentats du 11 septembre', explanation: 'Attaques terroristes d\'Al-Qaïda contre les tours du World Trade Center et le Pentagone : près de 3 000 morts.' },
      { date: '1er janvier 2002', event: 'Mise en circulation de l\'euro', explanation: 'La monnaie unique européenne entre en circulation dans 12 pays de la zone euro.' },
      { date: '2016', event: 'Référendum sur le Brexit', explanation: 'Les Britanniques votent à 51,9 % pour la sortie du Royaume-Uni de l\'Union européenne.' }
    ],

    flashcards: [
      { id: 'fc7_1', question: 'Quand tombe le mur de Berlin ?', answer: 'Le 9 novembre 1989.' },
      { id: 'fc7_2', question: 'Qu\'est-ce que la glasnost et la perestroïka ?', answer: 'Réformes de Gorbatchev en URSS : la glasnost (transparence, liberté d\'expression) et la perestroïka (restructuration économique).' },
      { id: 'fc7_3', question: 'Quand l\'URSS est-elle dissoute ?', answer: 'Le 25 décembre 1991, Gorbatchev démissionne et l\'URSS est officiellement dissoute, éclatant en 15 républiques.' },
      { id: 'fc7_4', question: 'Que crée le traité de Maastricht (1992) ?', answer: 'L\'Union européenne (UE), avec la citoyenneté européenne, la politique étrangère commune et l\'union économique et monétaire (euro).' },
      { id: 'fc7_5', question: 'Que s\'est-il passé le 11 septembre 2001 ?', answer: 'Des avions détournés par Al-Qaïda frappent le World Trade Center (New York) et le Pentagone (Washington), causant environ 3 000 morts.' },
      { id: 'fc7_6', question: 'Qu\'est-ce que le Brexit ?', answer: 'La sortie du Royaume-Uni de l\'Union européenne, décidée par référendum en 2016 et effective le 31 janvier 2020.' },
      { id: 'fc7_7', question: 'Qui est Nelson Mandela ?', answer: 'Leader sud-africain emprisonné 27 ans pour sa lutte contre l\'apartheid. Libéré en 1990, il est élu premier président noir d\'Afrique du Sud en 1994.' },
      { id: 'fc7_8', question: 'Qu\'est-ce qu\'un monde multipolaire ?', answer: 'Un monde où plusieurs grandes puissances (États-Unis, Chine, Russie, UE…) coexistent et se partagent l\'influence, par opposition au monde bipolaire de la Guerre froide.' }
    ],

    questions: [
      // QCM
      {
        id: 'q7_1',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel événement symbolise la fin de la Guerre froide en 1989 ?',
        options: ['La dissolution de l\'URSS', 'La chute du mur de Berlin', 'Le traité de Maastricht', 'Les attentats du 11 septembre'],
        answer: 'La chute du mur de Berlin',
        explanation: 'Le 9 novembre 1989, le mur de Berlin tombe, symbole de la fin du rideau de fer et de la division de l\'Europe.'
      },
      {
        id: 'q7_2',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel traité crée l\'Union européenne en 1992 ?',
        options: ['Le traité de Rome', 'Le traité de Maastricht', 'Le traité de Lisbonne', 'Le traité de Versailles'],
        answer: 'Le traité de Maastricht',
        explanation: 'Le traité de Maastricht, signé le 7 février 1992, crée l\'Union européenne avec la citoyenneté européenne et l\'union monétaire.'
      },
      {
        id: 'q7_3',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Comment appelle-t-on les réformes de Gorbatchev en URSS ?',
        options: ['Glasnost et perestroïka', 'New Deal et Great Society', 'Dégel et détente', 'Planification et collectivisation'],
        answer: 'Glasnost et perestroïka',
        explanation: 'Gorbatchev lance la glasnost (transparence) et la perestroïka (restructuration économique) pour tenter de réformer le système soviétique.'
      },
      {
        id: 'q7_4',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quel groupe terroriste est responsable des attentats du 11 septembre 2001 ?',
        options: ['L\'ETA', 'Al-Qaïda', 'L\'IRA', 'Daech'],
        answer: 'Al-Qaïda',
        explanation: 'Le réseau terroriste Al-Qaïda, dirigé par Oussama Ben Laden, organise les attentats du 11 septembre 2001 contre les États-Unis.',
        trap: 'Daech (ou État islamique) apparaît plus tard, en 2014. Ne pas confondre avec Al-Qaïda.'
      },
      {
        id: 'q7_5',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quel pays quitte l\'Union européenne en 2020 ?',
        options: ['La Norvège', 'La Suisse', 'Le Royaume-Uni', 'L\'Islande'],
        answer: 'Le Royaume-Uni',
        explanation: 'Le Royaume-Uni quitte l\'UE le 31 janvier 2020, après un référendum favorable au Brexit en juin 2016.',
        trap: 'La Norvège et la Suisse n\'ont jamais fait partie de l\'UE.'
      },
      {
        id: 'q7_6',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quel événement tragique a lieu au Rwanda en 1994 ?',
        options: ['Une guerre civile', 'Un génocide', 'Un coup d\'État', 'Une famine'],
        answer: 'Un génocide',
        explanation: 'En 1994, environ 800 000 Tutsis sont massacrés en 100 jours par les milices hutues au Rwanda. C\'est l\'un des pires génocides de l\'histoire.'
      },
      {
        id: 'q7_7',
        type: 'qcm',
        difficulty: 'expert',
        question: 'Pourquoi la France refuse-t-elle de participer à la guerre d\'Irak en 2003 ?',
        options: ['Par manque de moyens militaires', 'Parce qu\'elle est alliée à l\'Irak', 'Car l\'intervention n\'a pas de mandat de l\'ONU', 'Car elle a perdu la guerre du Golfe'],
        answer: 'Car l\'intervention n\'a pas de mandat de l\'ONU',
        explanation: 'Le président Chirac refuse de participer à la guerre d\'Irak car elle n\'est pas autorisée par le Conseil de sécurité de l\'ONU. La France défend le multilatéralisme.'
      },

      // Boolean
      {
        id: 'q7_8',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Le mur de Berlin est tombé en 1989.',
        answer: true,
        explanation: 'Le mur de Berlin tombe le 9 novembre 1989, marquant symboliquement la fin de la Guerre froide.'
      },
      {
        id: 'q7_9',
        type: 'boolean',
        difficulty: 'medium',
        question: 'L\'URSS a été dissoute en 1989.',
        answer: false,
        explanation: 'L\'URSS est dissoute le 25 décembre 1991, pas en 1989. En 1989, c\'est le mur de Berlin qui tombe.',
        trap: 'Ne pas confondre la chute du mur (1989) et la dissolution de l\'URSS (1991).'
      },
      {
        id: 'q7_10',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Le traité de Maastricht crée la monnaie unique européenne, l\'euro.',
        answer: true,
        explanation: 'Le traité de Maastricht (1992) prévoit l\'union économique et monétaire et la création de l\'euro, qui entre en circulation en 2002.'
      },
      {
        id: 'q7_11',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Nelson Mandela a été emprisonné pendant 27 ans.',
        answer: true,
        explanation: 'Nelson Mandela est emprisonné de 1964 à 1990, soit 27 ans. Il est ensuite élu premier président noir d\'Afrique du Sud en 1994.'
      },
      {
        id: 'q7_12',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Gorbatchev a volontairement dissous l\'URSS pour créer un système démocratique.',
        answer: false,
        explanation: 'Gorbatchev voulait réformer le système soviétique, pas le détruire. Ses réformes (glasnost, perestroïka) ont accéléré involontairement l\'effondrement de l\'URSS.'
      },
      {
        id: 'q7_13',
        type: 'boolean',
        difficulty: 'expert',
        question: 'La Norvège est membre de l\'Union européenne.',
        answer: false,
        explanation: 'La Norvège n\'est pas membre de l\'UE. Elle a refusé d\'y adhérer par référendum en 1972 et 1994, mais fait partie de l\'Espace économique européen (EEE).',
        trap: 'La Norvège est souvent confondue avec les pays membres de l\'UE car elle participe à l\'EEE et à Schengen.'
      },

      // Date
      {
        id: 'q7_14',
        type: 'date',
        difficulty: 'easy',
        question: 'En quelle année le mur de Berlin tombe-t-il ?',
        options: ['1985', '1989', '1991', '1992'],
        answer: '1989',
        explanation: 'Le mur de Berlin tombe le 9 novembre 1989, événement symbolique majeur de la fin de la Guerre froide.'
      },
      {
        id: 'q7_15',
        type: 'date',
        difficulty: 'medium',
        question: 'En quelle année l\'URSS est-elle dissoute ?',
        options: ['1989', '1990', '1991', '1992'],
        answer: '1991',
        explanation: 'L\'URSS est officiellement dissoute le 25 décembre 1991, lorsque Gorbatchev démissionne.'
      },
      {
        id: 'q7_16',
        type: 'date',
        difficulty: 'medium',
        question: 'En quelle année le traité de Maastricht est-il signé ?',
        options: ['1989', '1992', '1999', '2002'],
        answer: '1992',
        explanation: 'Le traité de Maastricht est signé le 7 février 1992, créant l\'Union européenne.'
      },
      {
        id: 'q7_17',
        type: 'date',
        difficulty: 'hard',
        question: 'En quelle année ont lieu les attentats du 11 septembre ?',
        options: ['1999', '2001', '2003', '2005'],
        answer: '2001',
        explanation: 'Les attentats du 11 septembre ont lieu en 2001, perpétrés par Al-Qaïda contre les États-Unis.'
      },

      // Personnage
      {
        id: 'q7_18',
        type: 'personnage',
        difficulty: 'easy',
        question: 'Quel dirigeant soviétique lance la glasnost et la perestroïka ?',
        answer: 'Gorbatchev',
        explanation: 'Mikhaïl Gorbatchev (1931-2022), dernier dirigeant de l\'URSS, lance ces réformes à partir de 1985 pour tenter de moderniser le système soviétique.'
      },
      {
        id: 'q7_19',
        type: 'personnage',
        difficulty: 'medium',
        question: 'Quel leader sud-africain, emprisonné 27 ans, est élu premier président noir d\'Afrique du Sud en 1994 ?',
        answer: 'Mandela',
        explanation: 'Nelson Mandela (1918-2013), héros de la lutte contre l\'apartheid, est libéré en 1990 et élu président en 1994. Il reçoit le prix Nobel de la paix en 1993.'
      },
      {
        id: 'q7_20',
        type: 'personnage',
        difficulty: 'hard',
        question: 'Quel chef terroriste est le commanditaire des attentats du 11 septembre 2001 ?',
        answer: 'Ben Laden',
        explanation: 'Oussama Ben Laden (1957-2011), fondateur d\'Al-Qaïda, commandite les attentats du 11 septembre 2001. Il est tué par les forces spéciales américaines au Pakistan en 2011.'
      },
      {
        id: 'q7_21',
        type: 'qcm',
        difficulty: 'medium',
        question: 'En quelle année l\'euro entre-t-il en circulation ?',
        options: ['1992', '1999', '2002', '2004'],
        answer: '2002',
        explanation: 'L\'euro entre en circulation le 1er janvier 2002 dans 12 pays de la zone euro, bien que la monnaie scripturale existe depuis 1999.'
      },
      {
        id: 'q7_22',
        type: 'boolean',
        difficulty: 'medium',
        question: 'La réunification allemande a lieu le 3 octobre 1990.',
        answer: true,
        explanation: 'Le 3 octobre 1990, la RDA (Allemagne de l\'Est) rejoint la RFA (Allemagne de l\'Ouest), mettant fin à la division de l\'Allemagne.'
      },
      {
        id: 'q7_23',
        type: 'qcm',
        difficulty: 'expert',
        question: 'Combien de républiques indépendantes naissent de la dissolution de l\'URSS ?',
        options: ['10', '12', '15', '20'],
        answer: '15',
        explanation: 'L\'URSS éclate en 15 républiques indépendantes : Russie, Ukraine, Biélorussie, pays baltes (3), républiques du Caucase (3) et d\'Asie centrale (5).'
      }
    ],

    anecdotes: [
      'Le savais-tu ? Le 9 novembre 1989, le mur de Berlin est tombé par erreur ! Lors d\'une conférence de presse, le porte-parole du gouvernement est-allemand, Günter Schabowski, a annoncé par mégarde que la frontière était ouverte « immédiatement, sans délai ». Des milliers de Berlinois se sont alors précipités vers le mur.',
      'Le savais-tu ? Nelson Mandela avait le numéro de prisonnier 46664 à Robben Island. Ce numéro est devenu un symbole mondial de la lutte pour la liberté et les droits de l\'homme.',
      'Le savais-tu ? Le jour des attentats du 11 septembre 2001, environ 15 000 personnes se trouvaient dans les tours du World Trade Center. Grâce aux évacuations, la grande majorité a pu être sauvée, mais près de 3 000 personnes ont tout de même perdu la vie.'
    ]
  }
];
