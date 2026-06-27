import { Chapter } from '../types';

export const geoChapters2: Chapter[] = [
  // ===================================================================
  // GEO4 — Aménager le territoire national
  // ===================================================================
  {
    id: 'geo4',
    slug: 'amenager-territoire',
    number: 4,
    subject: 'geographie',
    title: 'Aménager le territoire national',
    subtitle: 'Réduire les inégalités territoriales et connecter les territoires français',
    introduction: 'L\'aménagement du territoire est l\'ensemble des actions menées par les pouvoirs publics pour réduire les inégalités entre les territoires et les rendre plus attractifs. En France, l\'État, les collectivités territoriales et l\'Union européenne sont les principaux acteurs de cette politique, qui vise à garantir l\'équité territoriale par de grands projets d\'infrastructures (LGV, autoroutes, numérique) et des politiques de développement local.',
    courseContent: `
      <h2>I. Les inégalités territoriales en France</h2>
      <p>Le territoire français est marqué par de profondes <strong>inégalités territoriales</strong> à plusieurs échelles :</p>
      <ul>
        <li><strong>Entre Paris/Île-de-France et la province</strong> : la région parisienne concentre environ 19 % de la population et près de 31 % du PIB national. Elle concentre les fonctions de commandement (ministères, sièges sociaux, universités prestigieuses).</li>
        <li><strong>Entre métropoles dynamiques et espaces ruraux</strong> : les grandes métropoles régionales (Lyon, Marseille, Toulouse, Nantes, Bordeaux) attirent population et emplois, tandis que certains espaces ruraux souffrent de déprise (la « diagonale du vide » allant des Ardennes aux Pyrénées).</li>
        <li><strong>Entre littoraux attractifs et intérieur</strong> : les littoraux (Côte d\'Azur, façade atlantique) et les régions frontalières connaissent un dynamisme démographique et économique, contrairement à certains espaces enclavés du Massif central.</li>
        <li><strong>Entre la métropole et les outre-mer</strong> : les DROM-COM (Guadeloupe, Martinique, La Réunion, Guyane, Mayotte…) souffrent de retards de développement, d\'éloignement géographique et de chômage élevé.</li>
      </ul>

      <h2>II. Les acteurs de l\'aménagement du territoire</h2>
      <p>Depuis les années 1960, l\'aménagement du territoire mobilise plusieurs acteurs à différentes échelles :</p>
      <ul>
        <li><strong>L\'État</strong> : il définit les grandes orientations nationales. Il a créé la <strong>DATAR</strong> en 1963 (devenue CGET puis <strong>ANCT</strong> — Agence nationale de la cohésion des territoires — en 2020). Il finance les grandes infrastructures (LGV, autoroutes) et passe des <strong>contrats de plan État-région (CPER)</strong> avec les collectivités.</li>
        <li><strong>Les collectivités territoriales</strong> : depuis les lois de <strong>décentralisation</strong> (1982-1983, lois Defferre), les régions, départements et communes disposent de compétences accrues. Les <strong>intercommunalités</strong> (communautés de communes, métropoles) coordonnent l\'aménagement à l\'échelle locale. Les régions gèrent les transports régionaux (TER), les lycées et le développement économique.</li>
        <li><strong>L\'Union européenne</strong> : elle cofinance des projets via les <strong>fonds européens</strong> (FEDER, FSE) pour réduire les écarts de développement entre régions.</li>
        <li><strong>Les acteurs privés et la société civile</strong> : entreprises, associations, citoyens participent à l\'aménagement à travers des projets de développement local, des parcs naturels régionaux ou des consultations publiques.</li>
      </ul>

      <h2>III. Les grands projets d\'aménagement</h2>
      <h3>1. Les infrastructures de transport</h3>
      <p>Le réseau de transport est un levier majeur pour désenclaver les territoires :</p>
      <ul>
        <li><strong>Le réseau autoroutier</strong> : avec plus de 11 000 km d\'autoroutes, la France dispose de l\'un des réseaux les plus denses d\'Europe. Il relie les principales métropoles et les espaces frontaliers.</li>
        <li><strong>Les Lignes à Grande Vitesse (LGV)</strong> : le TGV a rapproché les métropoles de Paris (Paris-Lyon en 2h, Paris-Marseille en 3h). Mais la LGV renforce aussi la domination parisienne car elle favorise un réseau en étoile centré sur Paris.</li>
        <li><strong>Les aéroports et les ports</strong> : les aéroports internationaux (Roissy-CDG, Orly, Nice) et les grands ports maritimes (Marseille-Fos, Le Havre) connectent la France au monde.</li>
      </ul>

      <h3>2. Le numérique et la couverture en haut débit</h3>
      <p>Le <strong>Plan France Très Haut Débit</strong> lancé en 2013 vise à couvrir l\'ensemble du territoire en fibre optique d\'ici 2025. L\'accès au numérique est devenu un enjeu majeur d\'<strong>équité territoriale</strong> : les « zones blanches » (sans couverture mobile ni internet haut débit) accentuent l\'isolement de certains espaces ruraux.</p>

      <h3>3. Les projets de développement durable</h3>
      <p>L\'aménagement du territoire intègre désormais une dimension de <strong>développement durable</strong> :</p>
      <ul>
        <li>Les <strong>écoquartiers</strong> (quartiers urbains respectueux de l\'environnement).</li>
        <li>Les <strong>parcs naturels régionaux</strong> (58 en France) qui concilient protection de l\'environnement et développement économique local.</li>
        <li>Les <strong>Agendas 21 locaux</strong> pour un développement durable à l\'échelle des communes.</li>
      </ul>

      <h2>IV. Les enjeux actuels de l\'aménagement</h2>
      <ul>
        <li><strong>La métropolisation</strong> : les métropoles concentrent richesse et emplois, créant un risque de « France à deux vitesses ».</li>
        <li><strong>L\'équité territoriale</strong> : garantir un accès égal aux services publics (hôpitaux, écoles, transports) sur tout le territoire, y compris dans les espaces ruraux et les outre-mer.</li>
        <li><strong>La transition écologique</strong> : développer les transports en commun, les mobilités douces, les énergies renouvelables.</li>
        <li><strong>La compétitivité</strong> : rendre les territoires français attractifs à l\'échelle européenne et mondiale (pôles de compétitivité, technopôles).</li>
      </ul>
    `,
    summary: `
### Fiche Synthèse : Aménager le territoire national

* **Les inégalités territoriales** :
  - Paris/Île-de-France concentre 19 % de la population et ~31 % du PIB.
  - Oppositions : métropoles dynamiques vs espaces ruraux en déprise (« diagonale du vide »).
  - Littoraux attractifs vs intérieur enclavé ; métropole vs outre-mer.

* **Les acteurs de l'aménagement** :
  - **L'État** : grandes orientations, DATAR (1963) → CGET → ANCT (2020), CPER.
  - **Les collectivités territoriales** : décentralisation (1982-1983), régions, intercommunalités.
  - **L'Union européenne** : fonds FEDER, FSE.
  - Acteurs privés et société civile.

* **Les grands projets** :
  - Autoroutes (11 000+ km), LGV (réseau en étoile), aéroports, ports.
  - Plan France Très Haut Débit (fibre optique, lutte contre les zones blanches).
  - Écoquartiers, parcs naturels régionaux, développement durable.

* **Les enjeux actuels** :
  - Métropolisation et risque de « France à deux vitesses ».
  - Équité territoriale (accès aux services publics).
  - Transition écologique et compétitivité.
    `,
    timeline: [
      { id: 'tg4_1', date: '1963', title: 'Création de la DATAR', description: 'L\'État crée la Délégation à l\'aménagement du territoire et à l\'action régionale pour piloter la politique d\'aménagement.', category: 'politique' },
      { id: 'tg4_2', date: '1981', title: 'Première LGV Paris-Lyon', description: 'Mise en service de la première Ligne à Grande Vitesse française, reliant Paris à Lyon en 2 heures.', category: 'politique' },
      { id: 'tg4_3', date: '1982-1983', title: 'Lois de décentralisation', description: 'Les lois Defferre transfèrent des compétences de l\'État vers les collectivités territoriales (régions, départements, communes).', category: 'politique' },
      { id: 'tg4_4', date: '2013', title: 'Plan France Très Haut Débit', description: 'Lancement du plan national pour couvrir tout le territoire en fibre optique d\'ici 2025.', category: 'politique' },
      { id: 'tg4_5', date: '2020', title: 'Création de l\'ANCT', description: 'L\'Agence nationale de la cohésion des territoires remplace le CGET pour accompagner les projets locaux.', category: 'politique' }
    ],
    mindMap: [
      { id: 'mg4_root', label: 'Aménager le territoire' },
      { id: 'mg4_b1', label: 'Inégalités territoriales', parentId: 'mg4_root', description: 'Paris vs province, métropoles vs rural, littoraux vs intérieur, métropole vs outre-mer.' },
      { id: 'mg4_b2', label: 'Acteurs', parentId: 'mg4_root', description: 'État (DATAR/ANCT, CPER), collectivités (décentralisation, intercommunalités), UE (FEDER), acteurs privés.' },
      { id: 'mg4_b3', label: 'Grands projets', parentId: 'mg4_root', description: 'LGV, autoroutes, Plan France THD, écoquartiers, parcs naturels régionaux.' },
      { id: 'mg4_b4', label: 'Enjeux actuels', parentId: 'mg4_root', description: 'Métropolisation, équité territoriale, transition écologique, compétitivité.' }
    ],
    characters: [],
    dates: [
      { date: '1963', event: 'Création de la DATAR', explanation: 'Première structure nationale dédiée à l\'aménagement du territoire, fondée sous le général de Gaulle.' },
      { date: '1981', event: 'Première LGV Paris-Lyon', explanation: 'Inauguration du TGV Sud-Est, révolutionnant les transports ferroviaires français.' },
      { date: '1982-1983', event: 'Lois de décentralisation (Defferre)', explanation: 'Transfert de compétences aux collectivités, donnant plus d\'autonomie aux régions et départements.' },
      { date: '2010', event: 'Réforme des collectivités territoriales', explanation: 'Création des métropoles (Lyon, Marseille, etc.) et renforcement de l\'intercommunalité.' },
      { date: '2013', event: 'Plan France Très Haut Débit', explanation: 'Plan visant à couvrir 100 % du territoire en fibre optique pour lutter contre la fracture numérique.' },
      { date: '2015', event: 'Réforme territoriale', explanation: 'Passage de 22 à 13 régions métropolitaines pour renforcer leur poids économique et politique.' },
      { date: '2020', event: 'Création de l\'ANCT', explanation: 'L\'Agence nationale de la cohésion des territoires succède au CGET pour soutenir les projets locaux.' }
    ],
    flashcards: [
      { id: 'fcg4_1', question: 'Qu\'est-ce que la DATAR ?', answer: 'La Délégation à l\'aménagement du territoire et à l\'action régionale, créée en 1963 pour piloter la politique d\'aménagement du territoire. Elle est devenue CGET puis ANCT en 2020.' },
      { id: 'fcg4_2', question: 'Qu\'est-ce que la décentralisation ?', answer: 'Le transfert de compétences de l\'État central vers les collectivités territoriales (régions, départements, communes), initié par les lois Defferre de 1982-1983.' },
      { id: 'fcg4_3', question: 'Qu\'est-ce qu\'un CPER (Contrat de plan État-région) ?', answer: 'Un accord pluriannuel entre l\'État et une région pour définir et financer ensemble des projets d\'aménagement (transports, enseignement supérieur, etc.).' },
      { id: 'fcg4_4', question: 'Qu\'est-ce que la « diagonale du vide » ?', answer: 'C\'est une bande peu peuplée traversant la France des Ardennes aux Pyrénées, caractérisée par une faible densité de population et un déclin économique.' },
      { id: 'fcg4_5', question: 'Qu\'est-ce qu\'une intercommunalité ?', answer: 'Un regroupement de communes qui mettent en commun certaines compétences (transports, urbanisme, déchets) pour gagner en efficacité, par exemple les communautés de communes ou les métropoles.' },
      { id: 'fcg4_6', question: 'Que sont les « zones blanches » ?', answer: 'Des espaces du territoire non couverts par le réseau mobile ou internet haut débit, accentuant la fracture numérique entre urbain et rural.' },
      { id: 'fcg4_7', question: 'Quel est le rôle du FEDER dans l\'aménagement du territoire français ?', answer: 'Le Fonds européen de développement régional cofinance des projets d\'infrastructure et de développement dans les régions les moins favorisées, en complément des financements nationaux.' },
      { id: 'fcg4_8', question: 'Qu\'est-ce qu\'un écoquartier ?', answer: 'Un quartier urbain conçu selon les principes du développement durable : écoconstruction, mixité sociale, transports en commun, espaces verts, gestion des déchets et de l\'énergie.' }
    ],
    anecdotes: [
      'La « diagonale du vide » qui traverse la France des Ardennes aux Pyrénées a une densité de population souvent inférieure à 30 habitants par km², soit moins que la moyenne de certains pays scandinaves. Certains villages de Lozère comptent moins de 50 habitants.',
      'Le réseau LGV français est le deuxième plus long d\'Europe après l\'Espagne, avec plus de 2 800 km de lignes à grande vitesse. Le TGV a battu le record mondial de vitesse sur rail en 2007 avec 574,8 km/h sur la LGV Est.',
      'La France compte 58 parcs naturels régionaux couvrant environ 15 % du territoire national. Contrairement aux parcs nationaux, les habitants y vivent et travaillent tout en respectant une charte environnementale.'
    ],
    questions: [
      {
        id: 'qg4_1',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel organisme a été créé en 1963 pour piloter l\'aménagement du territoire en France ?',
        options: ['L\'ANCT', 'La DATAR', 'Le CGET', 'La SNCF'],
        answer: 'La DATAR',
        explanation: 'La Délégation à l\'aménagement du territoire et à l\'action régionale (DATAR) a été créée en 1963 sous le général de Gaulle pour corriger les déséquilibres territoriaux.',
        mnemonic: 'DATAR = 1963 (De Gaulle Aménage le Territoire).'
      },
      {
        id: 'qg4_2',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Les lois de décentralisation de 1982-1983 ont transféré des compétences de l\'État aux collectivités territoriales.',
        answer: true,
        explanation: 'Les lois Defferre de 1982-1983 ont donné plus d\'autonomie aux régions, départements et communes en leur transférant des compétences jusque-là exercées par l\'État central.'
      },
      {
        id: 'qg4_3',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quelle expression désigne la bande peu peuplée traversant la France des Ardennes aux Pyrénées ?',
        options: ['Le couloir rhodanien', 'La diagonale du vide', 'Le bassin parisien', 'La ceinture dorée'],
        answer: 'La diagonale du vide',
        explanation: 'La « diagonale du vide » désigne les territoires de faible densité s\'étendant du nord-est au sud-ouest de la France, caractérisés par le déclin démographique et économique.'
      },
      {
        id: 'qg4_4',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Le réseau LGV en France est organisé en étoile autour de Paris.',
        answer: true,
        explanation: 'Le réseau TGV français est centré sur Paris, ce qui renforce la domination de la capitale mais peut marginaliser les liaisons province-province.',
        trap: 'Ce réseau en étoile est hérité de l\'organisation historique du réseau ferroviaire français.'
      },
      {
        id: 'qg4_5',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Comment s\'appelle l\'organisme qui a remplacé le CGET en 2020 pour coordonner l\'aménagement du territoire ?',
        options: ['La DATAR', 'L\'ANCT', 'L\'ADEME', 'Le CNRS'],
        answer: 'L\'ANCT',
        explanation: 'L\'Agence nationale de la cohésion des territoires (ANCT) a été créée en 2020 pour accompagner les collectivités dans leurs projets d\'aménagement et de développement.',
        mnemonic: 'DATAR (1963) → CGET → ANCT (2020).'
      },
      {
        id: 'qg4_6',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : L\'Île-de-France représente environ 31 % du PIB national français.',
        answer: true,
        explanation: 'L\'Île-de-France concentre une part disproportionnée de la richesse nationale, illustrant la macrocéphalie parisienne.'
      },
      {
        id: 'qg4_7',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Qu\'est-ce qu\'un CPER ?',
        options: ['Un Centre de Production d\'Énergie Renouvelable', 'Un Contrat de Plan État-Région', 'Un Comité de Protection de l\'Environnement Régional', 'Un Conseil de Planification et d\'Études Rurales'],
        answer: 'Un Contrat de Plan État-Région',
        explanation: 'Le CPER est un accord pluriannuel entre l\'État et une région pour financer conjointement des projets d\'aménagement (transports, universités, recherche, etc.).'
      },
      {
        id: 'qg4_8',
        type: 'qcm',
        difficulty: 'medium',
        question: 'En quelle année la première LGV française (Paris-Lyon) a-t-elle été mise en service ?',
        options: ['1975', '1981', '1992', '2001'],
        answer: '1981',
        explanation: 'La LGV Paris-Lyon, première ligne à grande vitesse française, a été inaugurée en 1981, permettant de relier les deux villes en environ 2 heures.'
      },
      {
        id: 'qg4_9',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : Le Plan France Très Haut Débit vise à couvrir tout le territoire en fibre optique d\'ici 2025.',
        answer: true,
        explanation: 'Lancé en 2013, ce plan ambitionne de connecter l\'ensemble du territoire français en fibre optique pour lutter contre la fracture numérique et les « zones blanches ».'
      },
      {
        id: 'qg4_10',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quel fonds européen cofinance les projets d\'infrastructure dans les régions françaises les moins favorisées ?',
        options: ['Le FEDER', 'Le FMI', 'Le FEADER', 'La BCE'],
        answer: 'Le FEDER',
        explanation: 'Le Fonds européen de développement régional (FEDER) finance des projets de développement dans les régions en retard pour réduire les inégalités territoriales au sein de l\'UE.',
        trap: 'Le FEADER concerne l\'agriculture et le développement rural, tandis que le FEDER vise le développement régional au sens large.'
      },
      {
        id: 'qg4_11',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : Les intercommunalités sont des regroupements de communes qui exercent des compétences en commun.',
        answer: true,
        explanation: 'Les intercommunalités (communautés de communes, communautés d\'agglomération, métropoles) permettent aux communes de mutualiser leurs moyens pour gérer des compétences comme les transports ou l\'urbanisme.'
      },
      {
        id: 'qg4_12',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Combien de régions métropolitaines la France compte-t-elle depuis la réforme territoriale de 2015 ?',
        options: ['13', '18', '22', '27'],
        answer: '13',
        explanation: 'La réforme territoriale de 2015 a réduit le nombre de régions métropolitaines de 22 à 13, pour leur donner un poids économique et politique plus important à l\'échelle européenne.',
        trap: 'Avec les 5 régions d\'outre-mer, la France compte 18 régions au total, mais 13 en métropole.'
      },
      {
        id: 'qg4_13',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quelle ville française est le principal aéroport international du pays ?',
        options: ['Lyon-Saint Exupéry', 'Marseille-Provence', 'Paris-Charles de Gaulle (Roissy)', 'Nice-Côte d\'Azur'],
        answer: 'Paris-Charles de Gaulle (Roissy)',
        explanation: 'L\'aéroport Paris-Charles de Gaulle (Roissy) est le premier aéroport français et le deuxième européen en nombre de passagers, devant Nice et Lyon.'
      },
      {
        id: 'qg4_14',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Vrai ou Faux : La « métropolisation » désigne le processus de concentration des fonctions de commandement et de la population dans les grandes villes.',
        answer: true,
        explanation: 'La métropolisation est un phénomène mondial qui voit les métropoles concentrer les activités à forte valeur ajoutée (finance, recherche, culture), les infrastructures et la population, creusant les écarts avec les espaces ruraux.'
      },
      {
        id: 'qg4_15',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Qui est à l\'origine des lois de décentralisation de 1982-1983 ?',
        options: ['Jacques Chirac', 'Gaston Defferre', 'Charles de Gaulle', 'François Hollande'],
        answer: 'Gaston Defferre',
        explanation: 'Gaston Defferre, ministre de l\'Intérieur sous François Mitterrand, a fait voter les lois de décentralisation qui transfèrent des compétences de l\'État aux collectivités territoriales.'
      },
      {
        id: 'qg4_16',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Les DROM-COM bénéficient du même niveau de développement que la métropole.',
        answer: false,
        explanation: 'Les DROM-COM (Guadeloupe, Martinique, La Réunion, Guyane, Mayotte, etc.) souffrent de retards de développement importants : chômage élevé, éloignement, insularité, dépendance économique vis-à-vis de la métropole.'
      },
      {
        id: 'qg4_17',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Qu\'est-ce qu\'un pôle de compétitivité ?',
        options: [
          'Un regroupement d\'entreprises, de laboratoires et d\'universités sur un territoire pour innover',
          'Une zone franche urbaine sans impôts',
          'Un port maritime international',
          'Un quartier d\'affaires dans une métropole'
        ],
        answer: 'Un regroupement d\'entreprises, de laboratoires et d\'universités sur un territoire pour innover',
        explanation: 'Les pôles de compétitivité associent entreprises, centres de recherche et établissements d\'enseignement supérieur pour développer l\'innovation et renforcer l\'attractivité d\'un territoire. Ex : Aerospace Valley à Toulouse.'
      },
      {
        id: 'qg4_18',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : La France compte 58 parcs naturels régionaux qui couvrent environ 15 % du territoire national.',
        answer: true,
        explanation: 'Les parcs naturels régionaux (PNR) sont des espaces protégés où l\'on concilie protection de l\'environnement et développement économique local. Ils couvrent environ 15 % du territoire.'
      },
      {
        id: 'qg4_19',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quel grand port maritime français est le premier de Méditerranée ?',
        options: ['Le Havre', 'Dunkerque', 'Marseille-Fos', 'Saint-Nazaire'],
        answer: 'Marseille-Fos',
        explanation: 'Marseille-Fos est le premier port de France et de Méditerranée en tonnage. Il joue un rôle stratégique pour le commerce avec l\'Afrique, le Moyen-Orient et l\'Asie via le canal de Suez.'
      },
      {
        id: 'qg4_20',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel type de transport la LGV désigne-t-elle ?',
        options: ['Le transport aérien', 'Le transport ferroviaire à grande vitesse', 'Le transport fluvial', 'Le transport routier'],
        answer: 'Le transport ferroviaire à grande vitesse',
        explanation: 'LGV signifie « Ligne à Grande Vitesse ». C\'est un réseau ferroviaire conçu pour des trains circulant à plus de 250 km/h (TGV en France).'
      },
      {
        id: 'qg4_21',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Vrai ou Faux : La réforme de 2015 a fusionné les régions Alsace, Lorraine et Champagne-Ardenne en une seule région appelée Grand Est.',
        answer: true,
        explanation: 'La loi du 16 janvier 2015 a regroupé ces trois anciennes régions pour former la région Grand Est, dans le cadre de la réduction du nombre de régions métropolitaines de 22 à 13.'
      },
      {
        id: 'qg4_22',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quel est le principal objectif de l\'aménagement du territoire en France ?',
        options: [
          'Favoriser uniquement Paris',
          'Réduire les inégalités entre les territoires',
          'Privatiser les services publics',
          'Supprimer les régions'
        ],
        answer: 'Réduire les inégalités entre les territoires',
        explanation: 'L\'aménagement du territoire vise à garantir l\'équité territoriale en réduisant les déséquilibres entre les espaces (urbains/ruraux, métropole/outre-mer, etc.) et en assurant un accès égal aux services publics.'
      }
    ]
  },

  // ===================================================================
  // GEO5 — L'Union européenne, un nouveau territoire
  // ===================================================================
  {
    id: 'geo5',
    slug: 'union-europeenne',
    number: 5,
    subject: 'geographie',
    title: 'L\'Union européenne, un nouveau territoire',
    subtitle: 'Construction, élargissement et défis d\'un territoire européen intégré',
    introduction: 'L\'Union européenne (UE) est un projet unique au monde : une organisation supranationale qui regroupe 27 États membres partageant des institutions, une monnaie commune (l\'euro), un espace de libre circulation (Schengen) et des politiques de cohésion pour réduire les inégalités entre ses territoires. Née de la volonté de paix après 1945, l\'UE s\'est construite par étapes, mêlant élargissement (augmentation du nombre de membres) et approfondissement (renforcement de l\'intégration).',
    courseContent: `
      <h2>I. Les étapes de la construction européenne</h2>
      <p>La construction européenne est née de la volonté de garantir la <strong>paix</strong> et la <strong>prospérité</strong> en Europe après les deux guerres mondiales :</p>
      <ul>
        <li><strong>1951 — La CECA</strong> : La Communauté Européenne du Charbon et de l'Acier est créée par le traité de Paris. 6 pays fondateurs : France, Allemagne (RFA), Italie, Belgique, Pays-Bas, Luxembourg. Inspirée par la <strong>déclaration Schuman</strong> du 9 mai 1950.</li>
        <li><strong>1957 — Le traité de Rome</strong> : Création de la Communauté Économique Européenne (CEE) et de l'Euratom. Objectif : un <strong>marché commun</strong> avec la libre circulation des marchandises, des capitaux, des services et des personnes.</li>
        <li><strong>1986 — L'Acte unique européen</strong> : Relance de la construction européenne avec l'objectif d'achever le <strong>marché unique</strong> (libre circulation totale) d'ici 1993.</li>
        <li><strong>1992 — Le traité de Maastricht</strong> : Naissance officielle de l'<strong>Union européenne</strong>. Création de la citoyenneté européenne, lancement du projet de monnaie unique (euro), politique étrangère et de sécurité commune (PESC).</li>
        <li><strong>2002 — Mise en circulation de l'euro</strong> : L'euro devient la monnaie commune de 12 pays de la zone euro (19 pays aujourd'hui, 20 avec la Croatie depuis 2023).</li>
        <li><strong>2007 — Le traité de Lisbonne</strong> : Réforme les institutions de l'UE. Création du poste de président permanent du Conseil européen et renforcement du rôle du Parlement européen.</li>
      </ul>

      <h2>II. Les élargissements successifs</h2>
      <p>L'UE s'est progressivement élargie, passant de <strong>6 à 27 États membres</strong> :</p>
      <ul>
        <li><strong>1957 (6 membres)</strong> : France, RFA, Italie, Belgique, Pays-Bas, Luxembourg.</li>
        <li><strong>1973</strong> : Royaume-Uni, Irlande, Danemark.</li>
        <li><strong>1981</strong> : Grèce.</li>
        <li><strong>1986</strong> : Espagne, Portugal.</li>
        <li><strong>1995</strong> : Autriche, Finlande, Suède.</li>
        <li><strong>2004</strong> : Grand élargissement vers l'Est (10 pays : Pologne, République tchèque, Hongrie, Slovaquie, Slovénie, Estonie, Lettonie, Lituanie, Chypre, Malte).</li>
        <li><strong>2007</strong> : Roumanie, Bulgarie.</li>
        <li><strong>2013</strong> : Croatie.</li>
        <li><strong>2016-2020</strong> : Le <strong>Brexit</strong> — le Royaume-Uni vote sa sortie de l'UE (référendum de juin 2016) et quitte officiellement l'UE le 31 janvier 2020. L'UE passe de 28 à 27 membres.</li>
      </ul>

      <h2>III. Les institutions de l'Union européenne</h2>
      <p>L'UE fonctionne grâce à des institutions supranationales :</p>
      <ul>
        <li><strong>La Commission européenne</strong> (Bruxelles) : propose les lois européennes et veille à leur application. Elle est le « moteur » de l'UE.</li>
        <li><strong>Le Parlement européen</strong> (Strasbourg et Bruxelles) : élu au suffrage universel direct par les citoyens européens (depuis 1979). Il vote les lois et le budget de l'UE.</li>
        <li><strong>Le Conseil de l'UE</strong> (Bruxelles) : réunit les ministres des 27 États membres. Il adopte les lois conjointement avec le Parlement.</li>
        <li><strong>Le Conseil européen</strong> : réunit les chefs d'État et de gouvernement. Il fixe les grandes orientations politiques.</li>
        <li><strong>La Cour de justice de l'UE</strong> (Luxembourg) : veille au respect du droit européen.</li>
        <li><strong>La Banque centrale européenne (BCE)</strong> (Francfort) : gère la politique monétaire de la zone euro.</li>
      </ul>

      <h2>IV. L'espace Schengen et la libre circulation</h2>
      <p>L'<strong>espace Schengen</strong>, créé par les accords de Schengen (1985), permet la <strong>libre circulation des personnes</strong> sans contrôle aux frontières intérieures. Il regroupe 27 pays (dont 23 membres de l'UE et 4 pays associés : Islande, Norvège, Suisse, Liechtenstein). Attention : l'Irlande n'est pas dans Schengen, tandis que la Suisse y est sans être membre de l'UE.</p>

      <h2>V. Les disparités territoriales au sein de l'UE</h2>
      <p>L'UE est marquée par de fortes <strong>inégalités de développement</strong> entre ses territoires :</p>
      <ul>
        <li><strong>Le cœur économique</strong> (la « banane bleue » ou « dorsale européenne ») : zone de forte activité économique allant de Londres à Milan, en passant par le Bénélux, la vallée du Rhin et le nord de l'Italie. Ce sont les régions les plus riches et les mieux connectées.</li>
        <li><strong>Les périphéries</strong> : les régions d'Europe du Sud (Grèce, sud de l'Italie, sud de l'Espagne, Portugal) et d'Europe de l'Est (Roumanie, Bulgarie, Pologne orientale) ont des PIB par habitant nettement inférieurs à la moyenne de l'UE.</li>
        <li><strong>Les régions ultrapériphériques</strong> : les territoires d'outre-mer de la France (Guadeloupe, Martinique, La Réunion, Guyane, Mayotte), de l'Espagne (Canaries) et du Portugal (Açores, Madère) sont éloignés du continent et bénéficient d'aides spécifiques.</li>
      </ul>

      <h2>VI. La politique de cohésion et les fonds européens</h2>
      <p>Pour réduire ces inégalités, l'UE mène une <strong>politique de cohésion</strong> financée par des fonds structurels :</p>
      <ul>
        <li><strong>Le FEDER</strong> (Fonds européen de développement régional) : finance les infrastructures, l'innovation et le développement économique dans les régions en retard.</li>
        <li><strong>Le FSE</strong> (Fonds social européen) : favorise l'emploi, la formation professionnelle et l'inclusion sociale.</li>
        <li><strong>Le Fonds de cohésion</strong> : aide les États membres dont le PIB par habitant est inférieur à 90 % de la moyenne de l'UE (principalement les pays d'Europe de l'Est).</li>
      </ul>
      <p>La politique de cohésion représente environ un tiers du budget total de l'UE, soit le deuxième poste de dépenses après la Politique agricole commune (PAC).</p>
    `,
    summary: `
### Fiche Synthèse : L'Union européenne, un nouveau territoire

* **La construction européenne** :
  - 1951 : CECA (6 pays fondateurs, déclaration Schuman).
  - 1957 : Traité de Rome → CEE → marché commun.
  - 1992 : Traité de Maastricht → naissance de l'UE, citoyenneté européenne, projet d'euro.
  - 2002 : Mise en circulation de l'euro.
  - 2007 : Traité de Lisbonne (réforme des institutions).

* **Les élargissements** :
  - De 6 (1957) à 28 membres (2013), puis 27 après le Brexit (2020).
  - Grands élargissements : 1973 (Royaume-Uni), 2004 (10 pays de l'Est), 2016-2020 (Brexit).

* **Les institutions** :
  - Commission européenne (propose les lois), Parlement européen (élu, vote les lois), Conseil de l'UE (ministres), BCE (monnaie).

* **L'espace Schengen** : libre circulation sans contrôle aux frontières intérieures (27 pays).

* **Les disparités territoriales** :
  - Cœur économique : la « banane bleue » (Londres-Milan).
  - Périphéries : Europe du Sud et de l'Est, régions ultrapériphériques.

* **La politique de cohésion** : FEDER, FSE, Fonds de cohésion pour réduire les inégalités (~1/3 du budget de l'UE).
    `,
    timeline: [
      { id: 'tg5_1', date: '9 mai 1950', title: 'Déclaration Schuman', description: 'Robert Schuman propose de mettre en commun les productions de charbon et d\'acier entre la France et l\'Allemagne, posant les bases de la construction européenne.', category: 'diplomatique' },
      { id: 'tg5_2', date: '1957', title: 'Traité de Rome', description: 'Création de la Communauté Économique Européenne (CEE) par les 6 pays fondateurs. Objectif : un marché commun européen.', category: 'diplomatique' },
      { id: 'tg5_3', date: '1992', title: 'Traité de Maastricht', description: 'Naissance officielle de l\'Union européenne. Création de la citoyenneté européenne et lancement du projet de monnaie unique.', category: 'politique' },
      { id: 'tg5_4', date: '2002', title: 'Mise en circulation de l\'euro', description: 'L\'euro devient la monnaie fiduciaire de 12 pays de la zone euro, remplaçant les monnaies nationales.', category: 'politique' },
      { id: 'tg5_5', date: '2004', title: 'Grand élargissement à l\'Est', description: '10 nouveaux pays rejoignent l\'UE, portant le nombre de membres à 25. Principalement des pays d\'Europe centrale et orientale.', category: 'diplomatique' },
      { id: 'tg5_6', date: '2016', title: 'Référendum du Brexit', description: 'Le 23 juin 2016, 51,9 % des Britanniques votent pour la sortie du Royaume-Uni de l\'Union européenne.', category: 'politique' }
    ],
    mindMap: [
      { id: 'mg5_root', label: 'L\'Union européenne' },
      { id: 'mg5_b1', label: 'Construction', parentId: 'mg5_root', description: 'CECA (1951), Traité de Rome (1957), Maastricht (1992), Lisbonne (2007). Approfondissement progressif.' },
      { id: 'mg5_b2', label: 'Élargissement', parentId: 'mg5_root', description: 'De 6 à 27 membres. Grandes vagues : 1973, 2004, 2007, 2013. Brexit (2020).' },
      { id: 'mg5_b3', label: 'Institutions', parentId: 'mg5_root', description: 'Commission (Bruxelles), Parlement (Strasbourg), Conseil de l\'UE, BCE (Francfort), Cour de justice (Luxembourg).' },
      { id: 'mg5_b4', label: 'Libre circulation', parentId: 'mg5_root', description: 'Espace Schengen (27 pays), marché unique, euro (20 pays).' },
      { id: 'mg5_b5', label: 'Cohésion territoriale', parentId: 'mg5_root', description: 'Disparités (banane bleue vs périphéries), FEDER, FSE, Fonds de cohésion (~1/3 du budget de l\'UE).' }
    ],
    characters: [
      { id: 'cg5_1', name: 'Robert Schuman', dates: '1886-1963', role: 'Ministre des Affaires étrangères français', importance: 'Auteur de la déclaration du 9 mai 1950 proposant la mise en commun du charbon et de l\'acier. Considéré comme l\'un des « Pères fondateurs » de l\'Europe.' },
      { id: 'cg5_2', name: 'Jean Monnet', dates: '1888-1979', role: 'Haut fonctionnaire et diplomate français', importance: 'Inspirateur de la déclaration Schuman et premier président de la Haute Autorité de la CECA. Surnommé « le Père de l\'Europe ».' }
    ],
    dates: [
      { date: '9 mai 1950', event: 'Déclaration Schuman', explanation: 'Acte fondateur de la construction européenne, proposant la mise en commun du charbon et de l\'acier franco-allemand.' },
      { date: '1957', event: 'Traité de Rome', explanation: 'Création de la CEE et de l\'Euratom par les 6 pays fondateurs. Mise en place du marché commun.' },
      { date: '1985', event: 'Accords de Schengen', explanation: 'Signature des accords instaurant la libre circulation des personnes sans contrôle aux frontières intérieures.' },
      { date: '1992', event: 'Traité de Maastricht', explanation: 'Naissance de l\'Union européenne, citoyenneté européenne, projet de monnaie unique (euro).' },
      { date: '2002', event: 'Mise en circulation de l\'euro', explanation: 'L\'euro remplace les monnaies nationales dans 12 pays de la zone euro.' },
      { date: '2004', event: 'Grand élargissement à l\'Est', explanation: '10 pays rejoignent l\'UE, essentiellement d\'Europe centrale et orientale (Pologne, Hongrie, République tchèque…).' },
      { date: '2016', event: 'Référendum du Brexit', explanation: '51,9 % des Britanniques votent pour quitter l\'UE. Le Royaume-Uni sort officiellement le 31 janvier 2020.' }
    ],
    flashcards: [
      { id: 'fcg5_1', question: 'Quels sont les 6 pays fondateurs de la construction européenne ?', answer: 'France, Allemagne (RFA), Italie, Belgique, Pays-Bas, Luxembourg.' },
      { id: 'fcg5_2', question: 'Qu\'est-ce que le traité de Maastricht (1992) ?', answer: 'Le traité qui crée officiellement l\'Union européenne, instaure la citoyenneté européenne et lance le projet de monnaie unique (l\'euro).' },
      { id: 'fcg5_3', question: 'Qu\'est-ce que l\'espace Schengen ?', answer: 'Un espace de libre circulation des personnes regroupant 27 pays, sans contrôle aux frontières intérieures. Créé par les accords de Schengen de 1985.' },
      { id: 'fcg5_4', question: 'Qu\'est-ce que la « banane bleue » ?', answer: 'C\'est la dorsale européenne, le cœur économique de l\'UE, une zone de forte densité et d\'activité allant de Londres à Milan en passant par le Bénélux et la vallée du Rhin.' },
      { id: 'fcg5_5', question: 'Qu\'est-ce que le FEDER ?', answer: 'Le Fonds européen de développement régional, qui finance des projets d\'infrastructure et de développement dans les régions les moins favorisées de l\'UE.' },
      { id: 'fcg5_6', question: 'Que signifie l\'« approfondissement » de la construction européenne ?', answer: 'Le renforcement de l\'intégration entre les États membres : marché unique, monnaie commune, politiques communes, citoyenneté européenne.' },
      { id: 'fcg5_7', question: 'Qu\'est-ce que le Brexit ?', answer: 'La sortie du Royaume-Uni de l\'Union européenne, décidée par référendum le 23 juin 2016 et effective le 31 janvier 2020. L\'UE est passée de 28 à 27 membres.' },
      { id: 'fcg5_8', question: 'Quel est le rôle de la Commission européenne ?', answer: 'La Commission européenne (siège à Bruxelles) propose les lois européennes, veille à leur application et représente l\'intérêt général de l\'UE. Elle est le « moteur » de la construction européenne.' }
    ],
    anecdotes: [
      'Le 9 mai, date de la déclaration Schuman en 1950, est célébré chaque année comme la « Journée de l\'Europe ». Ce jour-là, les institutions européennes ouvrent leurs portes au public.',
      'L\'euro est utilisé quotidiennement par environ 340 millions de personnes dans 20 pays. C\'est la deuxième monnaie de réserve mondiale après le dollar américain.',
      'Le Parlement européen siège à Strasbourg (sessions plénières) et à Bruxelles (commissions), ce qui oblige les eurodéputés à se déplacer chaque mois entre les deux villes — un arrangement unique souvent critiqué pour son coût.'
    ],
    questions: [
      {
        id: 'qg5_1',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Combien de pays fondateurs ont créé la Communauté Européenne du Charbon et de l\'Acier (CECA) en 1951 ?',
        options: ['4', '6', '9', '12'],
        answer: '6',
        explanation: 'La CECA a été fondée par 6 pays : France, Allemagne (RFA), Italie, Belgique, Pays-Bas et Luxembourg.',
        mnemonic: '6 fondateurs = FABI + PB + Lux (France, Allemagne, Belgique, Italie, Pays-Bas, Luxembourg).'
      },
      {
        id: 'qg5_2',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Le traité de Rome a été signé en 1957.',
        answer: true,
        explanation: 'Le traité de Rome, signé le 25 mars 1957, crée la Communauté Économique Européenne (CEE) et l\'Euratom, posant les bases du marché commun.'
      },
      {
        id: 'qg5_3',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel traité marque la naissance officielle de l\'Union européenne en 1992 ?',
        options: ['Le traité de Rome', 'Le traité de Maastricht', 'Le traité de Lisbonne', 'Le traité de Paris'],
        answer: 'Le traité de Maastricht',
        explanation: 'Le traité de Maastricht (1992) crée l\'Union européenne, instaure la citoyenneté européenne et prévoit la création de l\'euro.',
        mnemonic: 'Maastricht = 1992 = naissance de l\'UE.'
      },
      {
        id: 'qg5_4',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : L\'euro est en circulation depuis 2002.',
        answer: true,
        explanation: 'Les billets et pièces en euros ont été mis en circulation le 1er janvier 2002 dans 12 pays de la zone euro, remplaçant les monnaies nationales (franc, mark, lire, etc.).'
      },
      {
        id: 'qg5_5',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Qu\'est-ce que l\'espace Schengen ?',
        options: [
          'Un espace de libre circulation des personnes sans contrôle aux frontières intérieures',
          'La zone euro',
          'L\'ensemble des pays de l\'OTAN',
          'Un accord commercial avec les États-Unis'
        ],
        answer: 'Un espace de libre circulation des personnes sans contrôle aux frontières intérieures',
        explanation: 'L\'espace Schengen, créé en 1985, permet aux citoyens de circuler librement entre les pays signataires sans contrôle aux frontières intérieures. Il regroupe 27 pays.'
      },
      {
        id: 'qg5_6',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : La Suisse fait partie de l\'Union européenne.',
        answer: false,
        explanation: 'La Suisse n\'est pas membre de l\'UE, mais elle fait partie de l\'espace Schengen et entretient des accords bilatéraux avec l\'UE.',
        trap: 'Attention, faire partie de Schengen ne signifie pas être membre de l\'UE. La Suisse, la Norvège, l\'Islande et le Liechtenstein sont dans Schengen sans être dans l\'UE.'
      },
      {
        id: 'qg5_7',
        type: 'qcm',
        difficulty: 'medium',
        question: 'En quelle année le grand élargissement de l\'UE vers l\'Est a-t-il eu lieu ?',
        options: ['1995', '2002', '2004', '2007'],
        answer: '2004',
        explanation: 'En 2004, 10 nouveaux pays (principalement d\'Europe centrale et orientale) rejoignent l\'UE, portant le nombre de membres de 15 à 25.',
        mnemonic: '2004 = le grand bond à l\'Est.'
      },
      {
        id: 'qg5_8',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Où siège la Commission européenne ?',
        options: ['Strasbourg', 'Luxembourg', 'Bruxelles', 'Francfort'],
        answer: 'Bruxelles',
        explanation: 'La Commission européenne siège à Bruxelles (Belgique). Elle propose les lois européennes et veille à leur application.'
      },
      {
        id: 'qg5_9',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : Le Parlement européen est élu au suffrage universel direct depuis 1979.',
        answer: true,
        explanation: 'Depuis 1979, les citoyens européens élisent directement leurs députés au Parlement européen lors d\'élections organisées tous les 5 ans.'
      },
      {
        id: 'qg5_10',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Comment appelle-t-on la zone de forte densité économique allant de Londres à Milan ?',
        options: ['La ceinture verte', 'La banane bleue', 'L\'arc atlantique', 'Le triangle d\'or'],
        answer: 'La banane bleue',
        explanation: 'La « banane bleue » ou « dorsale européenne » est le cœur économique de l\'UE, concentrant les métropoles les plus riches et les mieux connectées (Londres, Bruxelles, Amsterdam, Francfort, Milan).'
      },
      {
        id: 'qg5_11',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Le Royaume-Uni a quitté l\'Union européenne en 2020.',
        answer: true,
        explanation: 'Après le référendum du 23 juin 2016, le Royaume-Uni a officiellement quitté l\'UE le 31 janvier 2020 (Brexit). L\'UE est passée de 28 à 27 membres.'
      },
      {
        id: 'qg5_12',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quel fonds européen finance principalement les infrastructures et le développement économique des régions en retard ?',
        options: ['Le FSE', 'Le FEDER', 'Le FEAGA', 'Le FMI'],
        answer: 'Le FEDER',
        explanation: 'Le Fonds européen de développement régional (FEDER) finance les infrastructures, l\'innovation et le développement économique dans les régions les moins favorisées de l\'UE.',
        trap: 'Le FSE (Fonds social européen) vise l\'emploi et la formation, pas les infrastructures. Le FMI n\'est pas un fonds de l\'UE.'
      },
      {
        id: 'qg5_13',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Qui a prononcé la déclaration du 9 mai 1950, acte fondateur de la construction européenne ?',
        options: ['Jean Monnet', 'Robert Schuman', 'Charles de Gaulle', 'Konrad Adenauer'],
        answer: 'Robert Schuman',
        explanation: 'Robert Schuman, ministre français des Affaires étrangères, a prononcé le 9 mai 1950 la déclaration proposant la mise en commun du charbon et de l\'acier franco-allemand.',
        trap: 'Jean Monnet a inspiré la déclaration, mais c\'est Robert Schuman qui l\'a prononcée officiellement.'
      },
      {
        id: 'qg5_14',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Vrai ou Faux : La politique de cohésion représente environ un tiers du budget total de l\'Union européenne.',
        answer: true,
        explanation: 'La politique de cohésion est le deuxième poste de dépenses de l\'UE (après la PAC). Elle représente environ 1/3 du budget et vise à réduire les écarts de développement entre les régions.'
      },
      {
        id: 'qg5_15',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Combien de pays font partie de l\'espace Schengen ?',
        options: ['20', '23', '27', '30'],
        answer: '27',
        explanation: 'L\'espace Schengen regroupe 27 pays (23 membres de l\'UE + 4 pays associés : Islande, Norvège, Suisse, Liechtenstein). Certains pays de l\'UE (Irlande, Chypre, Roumanie, Bulgarie) n\'en font pas encore pleinement partie ou bénéficient de dérogations.'
      },
      {
        id: 'qg5_16',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Où siège la Banque Centrale Européenne (BCE) ?',
        options: ['Bruxelles', 'Strasbourg', 'Francfort', 'Luxembourg'],
        answer: 'Francfort',
        explanation: 'La BCE, qui gère la politique monétaire de la zone euro, siège à Francfort-sur-le-Main en Allemagne.'
      },
      {
        id: 'qg5_17',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : L\'élargissement de l\'UE désigne le renforcement de l\'intégration entre les États membres.',
        answer: false,
        explanation: 'L\'élargissement désigne l\'augmentation du nombre de membres de l\'UE. C\'est l\'approfondissement qui désigne le renforcement de l\'intégration (marché unique, euro, politiques communes).',
        trap: 'Ne confondez pas élargissement (plus de membres) et approfondissement (plus d\'intégration).'
      },
      {
        id: 'qg5_18',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quel traité de 2007 a réformé les institutions européennes en créant un président permanent du Conseil européen ?',
        options: ['Le traité de Nice', 'Le traité de Lisbonne', 'Le traité de Maastricht', 'Le traité d\'Amsterdam'],
        answer: 'Le traité de Lisbonne',
        explanation: 'Le traité de Lisbonne (2007) réforme les institutions de l\'UE en créant le poste de président permanent du Conseil européen et en renforçant le rôle du Parlement européen.'
      },
      {
        id: 'qg5_19',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : Tous les pays de l\'Union européenne utilisent l\'euro comme monnaie.',
        answer: false,
        explanation: 'Non, seuls 20 des 27 États membres utilisent l\'euro (zone euro). Des pays comme la Pologne, la Suède, la Hongrie ou la République tchèque conservent leur monnaie nationale.',
        trap: 'L\'adhésion à l\'UE n\'implique pas automatiquement l\'adoption de l\'euro.'
      },
      {
        id: 'qg5_20',
        type: 'qcm',
        difficulty: 'medium',
        question: 'En quelle année la Croatie, dernier pays à avoir rejoint l\'UE, est-elle devenue membre ?',
        options: ['2007', '2010', '2013', '2016'],
        answer: '2013',
        explanation: 'La Croatie est devenue le 28e membre de l\'UE le 1er juillet 2013. C\'est le dernier pays à avoir rejoint l\'Union européenne.'
      },
      {
        id: 'qg5_21',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quel pourcentage des Britanniques a voté pour le Brexit lors du référendum de juin 2016 ?',
        options: ['48,1 %', '50 %', '51,9 %', '55 %'],
        answer: '51,9 %',
        explanation: 'Lors du référendum du 23 juin 2016, 51,9 % des Britanniques ont voté pour la sortie de l\'UE (Leave) contre 48,1 % pour le maintien (Remain).'
      },
      {
        id: 'qg5_22',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Le Parlement européen siège à Strasbourg.',
        answer: true,
        explanation: 'Le Parlement européen tient ses sessions plénières à Strasbourg (France). Les travaux en commission se déroulent à Bruxelles.'
      }
    ]
  },

  // ===================================================================
  // GEO6 — La France et l'Union européenne dans le monde
  // ===================================================================
  {
    id: 'geo6',
    slug: 'france-ue-dans-le-monde',
    number: 6,
    subject: 'geographie',
    title: 'La France et l\'Union européenne dans le monde',
    subtitle: 'Puissance, rayonnement et influence de la France et de l\'UE à l\'échelle mondiale',
    introduction: 'La France et l\'Union européenne sont des acteurs majeurs de la mondialisation. La France dispose d\'atouts considérables : une présence mondiale grâce à ses territoires ultramarins (DROM-COM) qui lui confèrent la 2e Zone Économique Exclusive (ZEE) au monde, un rayonnement culturel et linguistique (francophonie), un siège permanent au Conseil de sécurité de l\'ONU, et une armée puissante. L\'UE, première puissance commerciale mondiale, exerce son influence par son poids économique, ses normes et sa politique de coopération.',
    courseContent: `
      <h2>I. La France, une puissance mondiale</h2>
      <h3>1. Une présence sur tous les continents</h3>
      <p>Grâce à ses <strong>DROM-COM</strong> (Départements et Régions d'Outre-Mer / Collectivités d'Outre-Mer), la France est présente sur tous les océans et continents :</p>
      <ul>
        <li><strong>DROM</strong> : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte (statut de département et région).</li>
        <li><strong>COM et autres</strong> : Polynésie française, Nouvelle-Calédonie, Wallis-et-Futuna, Saint-Pierre-et-Miquelon, Saint-Barthélemy, Saint-Martin, TAAF (Terres australes et antarctiques françaises).</li>
      </ul>
      <p>Cette présence offre à la France la <strong>2e Zone Économique Exclusive (ZEE) au monde</strong> (environ 11 millions de km²), derrière les États-Unis. La ZEE est une bande maritime de 200 milles nautiques (370 km) depuis les côtes, où un État dispose de droits exclusifs d'exploitation des ressources (pêche, minerais sous-marins, hydrocarbures).</p>

      <h3>2. Un rayonnement diplomatique et militaire</h3>
      <p>La France est un acteur diplomatique et militaire de premier plan :</p>
      <ul>
        <li><strong>Membre permanent du Conseil de sécurité de l'ONU</strong> (avec droit de veto), aux côtés des États-Unis, de la Russie, de la Chine et du Royaume-Uni.</li>
        <li><strong>Puissance nucléaire</strong> : la France possède la dissuasion nucléaire (force de frappe).</li>
        <li><strong>Opérations militaires extérieures (OPEX)</strong> : la France intervient dans de nombreuses zones du monde (Afrique, Moyen-Orient) pour lutter contre le terrorisme et maintenir la paix.</li>
        <li>Membre fondateur de l'<strong>OTAN</strong> et de l'<strong>Union européenne</strong>.</li>
      </ul>

      <h3>3. Le rayonnement culturel et linguistique</h3>
      <p>La France exerce un puissant <strong>soft power</strong> (puissance douce) :</p>
      <ul>
        <li><strong>La francophonie</strong> : le français est parlé par plus de 300 millions de personnes dans le monde. L'Organisation internationale de la Francophonie (OIF) regroupe 88 États et gouvernements. Le français est langue officielle dans de nombreuses organisations internationales (ONU, UE, CIO).</li>
        <li><strong>La culture</strong> : la France est le <strong>premier pays touristique au monde</strong> (environ 90 millions de visiteurs par an avant la pandémie). Elle rayonne par ses musées (Louvre), sa gastronomie (inscrite au patrimoine immatériel de l'UNESCO), sa mode, son cinéma et sa littérature.</li>
        <li><strong>Le réseau éducatif et culturel</strong> : la France dispose d'un réseau mondial de lycées français (AEFE), d'Alliances françaises et d'Instituts français.</li>
      </ul>

      <h3>4. La puissance économique</h3>
      <ul>
        <li>La France est la <strong>7e puissance économique mondiale</strong> (PIB).</li>
        <li>Elle abrite de grandes <strong>firmes multinationales (FMN)</strong> : TotalEnergies, LVMH, L'Oréal, Airbus, Renault, Sanofi.</li>
        <li>Elle est un grand exportateur dans l'aéronautique (Airbus), le luxe, l'agroalimentaire et les armements.</li>
      </ul>

      <h2>II. L'Union européenne, une puissance économique mondiale</h2>
      <h3>1. La première puissance commerciale</h3>
      <p>L'UE est la <strong>première puissance commerciale mondiale</strong> en termes d'échanges de biens et de services. Le marché unique de 450 millions de consommateurs en fait un espace économique majeur. L'UE a signé de nombreux <strong>accords de libre-échange</strong> (avec le Canada — CETA, le Japon — JEFTA, le Mercosur en négociation).</p>

      <h3>2. Le pouvoir normatif de l'UE</h3>
      <p>L'UE exerce un <strong>pouvoir normatif</strong> : ses normes (environnementales, sanitaires, numériques comme le RGPD) sont souvent adoptées au-delà de ses frontières, c'est l'« <strong>effet Bruxelles</strong> ». Les entreprises du monde entier doivent se conformer aux règles européennes pour accéder au marché unique.</p>

      <h3>3. L'aide au développement et la coopération</h3>
      <p>L'UE est le <strong>premier donateur mondial d'aide au développement</strong>. Elle finance des programmes de coopération dans les pays en développement (Afrique, Asie, Amérique latine) via le Fonds européen de développement (FED) et les accords de partenariat (accords de Cotonou avec les pays ACP).</p>

      <h2>III. Les limites de la puissance française et européenne</h2>
      <ul>
        <li><strong>La concurrence mondiale</strong> : face aux États-Unis et à la Chine, l'UE peine parfois à parler d'une seule voix sur la scène internationale. Elle n'a pas de véritable armée commune ni de politique étrangère unifiée.</li>
        <li><strong>Les fractures internes</strong> : les désaccords entre États membres (Brexit, divergences Est/Ouest sur les migrations, sur l'État de droit) affaiblissent l'UE.</li>
        <li><strong>La dépendance</strong> : l'UE est dépendante des importations d'énergie (gaz russe avant 2022) et de certaines matières premières stratégiques.</li>
        <li><strong>Le déclin relatif de la France</strong> : le poids démographique et économique de la France dans le monde est en recul relatif face à la montée des puissances émergentes (Chine, Inde, Brésil).</li>
        <li><strong>La remise en cause de la présence française en Afrique</strong> : ces dernières années, la France a été confrontée à un sentiment anti-français dans plusieurs pays d'Afrique (Mali, Burkina Faso, Niger), entraînant le retrait de ses forces militaires.</li>
      </ul>
    `,
    summary: `
### Fiche Synthèse : La France et l'UE dans le monde

* **La France, puissance mondiale** :
  - Présente sur tous les continents grâce aux **DROM-COM**.
  - **2e ZEE mondiale** (~11 millions km²).
  - Membre permanent du **Conseil de sécurité de l'ONU** (droit de veto), puissance nucléaire, OPEX.
  - **Rayonnement culturel** : 1er pays touristique mondial, francophonie (300 M+ de locuteurs), gastronomie UNESCO.
  - **7e puissance économique mondiale**, grandes FMN (TotalEnergies, LVMH, Airbus).

* **L'UE, puissance économique** :
  - **1re puissance commerciale mondiale**, marché unique de 450 M de consommateurs.
  - **Pouvoir normatif** (RGPD, normes environnementales = « effet Bruxelles »).
  - **1er donateur mondial d'aide au développement**.
  - Accords de libre-échange (CETA, JEFTA).

* **Les limites** :
  - Concurrence USA/Chine, absence d'armée commune européenne.
  - Fractures internes (Brexit, migrations, État de droit).
  - Dépendance énergétique, déclin relatif de la France.
  - Remise en cause de la présence française en Afrique.
    `,
    timeline: [
      { id: 'tg6_1', date: '1945', title: 'La France membre permanent de l\'ONU', description: 'La France obtient un siège permanent au Conseil de sécurité de l\'ONU avec droit de veto, aux côtés des États-Unis, du Royaume-Uni, de l\'URSS et de la Chine.', category: 'diplomatique' },
      { id: 'tg6_2', date: '1960', title: 'Première bombe atomique française', description: 'La France réalise son premier essai nucléaire au Sahara algérien (Gerboise bleue, 13 février 1960), devenant la 4e puissance nucléaire mondiale.', category: 'militaire' },
      { id: 'tg6_3', date: '1970', title: 'Création de l\'Agence de coopération culturelle (ACCT)', description: 'Ancêtre de l\'Organisation internationale de la Francophonie (OIF), fondée à Niamey pour promouvoir la langue française et la coopération francophone.', category: 'diplomatique' },
      { id: 'tg6_4', date: '1994', title: 'Accords de Marrakech et création de l\'OMC', description: 'L\'UE participe à la fondation de l\'OMC, confirmant son rôle de première puissance commerciale mondiale.', category: 'diplomatique' },
      { id: 'tg6_5', date: '2018', title: 'Entrée en vigueur du RGPD', description: 'Le Règlement Général sur la Protection des Données entre en vigueur, illustrant le pouvoir normatif mondial de l\'UE.', category: 'politique' }
    ],
    mindMap: [
      { id: 'mg6_root', label: 'France et UE dans le monde' },
      { id: 'mg6_b1', label: 'Présence mondiale française', parentId: 'mg6_root', description: 'DROM-COM sur tous les océans, 2e ZEE mondiale (11 M km²), bases militaires.' },
      { id: 'mg6_b2', label: 'Puissance diplomatique et militaire', parentId: 'mg6_root', description: 'Siège ONU (Conseil de sécurité), puissance nucléaire, OTAN, OPEX.' },
      { id: 'mg6_b3', label: 'Rayonnement culturel (soft power)', parentId: 'mg6_root', description: 'Francophonie (300 M+ locuteurs), 1er pays touristique, gastronomie, musées, cinéma.' },
      { id: 'mg6_b4', label: 'Puissance économique UE', parentId: 'mg6_root', description: '1re puissance commerciale, marché unique (450 M consommateurs), pouvoir normatif (RGPD), 1er donateur d\'aide.' },
      { id: 'mg6_b5', label: 'Limites', parentId: 'mg6_root', description: 'Concurrence USA/Chine, pas d\'armée commune UE, fractures internes, dépendance énergétique, déclin relatif.' }
    ],
    characters: [],
    dates: [
      { date: '1945', event: 'La France, membre permanent du Conseil de sécurité de l\'ONU', explanation: 'La France dispose d\'un siège permanent et du droit de veto au Conseil de sécurité, aux côtés des États-Unis, du Royaume-Uni, de la Russie et de la Chine.' },
      { date: '1960', event: 'Premier essai nucléaire français', explanation: 'La France teste sa première bombe atomique (Gerboise bleue) au Sahara algérien, devenant la 4e puissance nucléaire mondiale.' },
      { date: '1970', event: 'Naissance de la Francophonie institutionnelle', explanation: 'Création de l\'ACCT (future OIF) à Niamey, rassemblant les pays francophones pour promouvoir la langue et la coopération.' },
      { date: '1994', event: 'Création de l\'OMC', explanation: 'Les accords de Marrakech créent l\'Organisation mondiale du commerce. L\'UE y est une actrice majeure en tant que première puissance commerciale.' },
      { date: '2003', event: 'Inscriptions au patrimoine de l\'UNESCO', explanation: 'La France est l\'un des pays ayant le plus de sites inscrits au patrimoine mondial de l\'UNESCO (plus de 50 sites), illustrant son rayonnement culturel.' },
      { date: '2010', event: 'Gastronomie française au patrimoine immatériel de l\'UNESCO', explanation: 'Le « repas gastronomique des Français » est inscrit au patrimoine culturel immatériel de l\'humanité par l\'UNESCO.' },
      { date: '2018', event: 'Entrée en vigueur du RGPD', explanation: 'Le Règlement Général sur la Protection des Données impose des normes de protection des données personnelles dans toute l\'UE et au-delà (effet Bruxelles).' }
    ],
    flashcards: [
      { id: 'fcg6_1', question: 'Qu\'est-ce que la ZEE (Zone Économique Exclusive) ?', answer: 'Une bande maritime de 200 milles nautiques (370 km) depuis les côtes, où un État dispose de droits exclusifs sur les ressources naturelles (pêche, minerais, hydrocarbures). La France possède la 2e ZEE mondiale grâce à ses territoires d\'outre-mer.' },
      { id: 'fcg6_2', question: 'Que signifie DROM-COM ?', answer: 'Départements et Régions d\'Outre-Mer / Collectivités d\'Outre-Mer. Ce sont les territoires français situés en dehors de la métropole (Guadeloupe, Martinique, La Réunion, Guyane, Mayotte, Polynésie française, Nouvelle-Calédonie, etc.).' },
      { id: 'fcg6_3', question: 'Qu\'est-ce que la francophonie ?', answer: 'L\'ensemble des populations et pays qui parlent français dans le monde. L\'Organisation internationale de la Francophonie (OIF) regroupe 88 États et gouvernements. Le français est la 5e langue la plus parlée au monde.' },
      { id: 'fcg6_4', question: 'Pourquoi dit-on que la France est une puissance nucléaire ?', answer: 'Parce qu\'elle possède l\'arme nucléaire depuis 1960 (dissuasion nucléaire). C\'est l\'une des cinq puissances nucléaires reconnues par le Traité de non-prolifération (TNP).' },
      { id: 'fcg6_5', question: 'Qu\'est-ce que le soft power ?', answer: 'La capacité d\'un pays à influencer les autres par son attractivité culturelle, ses valeurs et ses idées, plutôt que par la force militaire. Pour la France : tourisme, francophonie, gastronomie, mode, culture.' },
      { id: 'fcg6_6', question: 'Qu\'est-ce qu\'une FMN (firme multinationale) ?', answer: 'Une entreprise qui possède des filiales et exerce ses activités dans plusieurs pays. Exemples français : TotalEnergies, LVMH, L\'Oréal, Airbus, Renault, Sanofi.' },
      { id: 'fcg6_7', question: 'Qu\'est-ce que l\'« effet Bruxelles » ?', answer: 'Le fait que les normes et régulations de l\'UE (RGPD, normes environnementales, règles alimentaires) soient adoptées au-delà de ses frontières, car les entreprises du monde entier doivent s\'y conformer pour accéder au marché européen de 450 millions de consommateurs.' },
      { id: 'fcg6_8', question: 'Pourquoi l\'UE est-elle le premier donateur mondial d\'aide au développement ?', answer: 'L\'UE et ses États membres fournissent ensemble plus de la moitié de l\'aide publique au développement mondiale, finançant des programmes de coopération en Afrique, Asie et Amérique latine via le FED et les accords de partenariat.' }
    ],
    anecdotes: [
      'La France possède des frontières terrestres avec le Brésil (via la Guyane) et les Pays-Bas (via Saint-Martin). Grâce à ses territoires ultramarins, elle est le seul pays au monde présent sur tous les océans (Atlantique, Pacifique, Indien, Arctique via les TAAF).',
      'La ZEE française est la deuxième au monde, juste derrière celle des États-Unis. Si l\'on additionnait les ZEE de tous les territoires français, cela représenterait une surface maritime de 11 millions de km², soit 20 fois la superficie de la France métropolitaine.',
      'L\'inscription du « repas gastronomique des Français » au patrimoine immatériel de l\'UNESCO en 2010 a fait de la France le premier pays au monde à voir l\'un de ses repas reconnu comme patrimoine culturel de l\'humanité.'
    ],
    questions: [
      {
        id: 'qg6_1',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel rang mondial la France occupe-t-elle pour la superficie de sa Zone Économique Exclusive (ZEE) ?',
        options: ['1er', '2e', '5e', '10e'],
        answer: '2e',
        explanation: 'La France possède la 2e ZEE mondiale (environ 11 millions de km²), derrière les États-Unis, grâce à ses territoires ultramarins répartis sur tous les océans.',
        mnemonic: 'France = 2e ZEE (derrière les USA).'
      },
      {
        id: 'qg6_2',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : La France est membre permanent du Conseil de sécurité de l\'ONU avec droit de veto.',
        answer: true,
        explanation: 'La France est l\'un des 5 membres permanents du Conseil de sécurité de l\'ONU (avec les États-Unis, la Russie, la Chine et le Royaume-Uni). Chacun dispose d\'un droit de veto.'
      },
      {
        id: 'qg6_3',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Que signifie DROM-COM ?',
        options: [
          'Districts Régionaux d\'Organisation Métropolitaine',
          'Départements et Régions d\'Outre-Mer / Collectivités d\'Outre-Mer',
          'Directions Régionales des Opérations Militaires',
          'Départements de Restructuration et d\'Organisation Maritime'
        ],
        answer: 'Départements et Régions d\'Outre-Mer / Collectivités d\'Outre-Mer',
        explanation: 'Les DROM-COM désignent les territoires français situés hors de la métropole : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte (DROM), Polynésie française, Nouvelle-Calédonie, etc. (COM).'
      },
      {
        id: 'qg6_4',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : La France est le premier pays touristique au monde.',
        answer: true,
        explanation: 'La France accueille environ 90 millions de visiteurs internationaux par an (chiffres pré-pandémie), ce qui en fait la première destination touristique au monde devant l\'Espagne et les États-Unis.'
      },
      {
        id: 'qg6_5',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Combien de locuteurs francophones y a-t-il dans le monde ?',
        options: ['50 millions', '150 millions', 'Plus de 300 millions', '1 milliard'],
        answer: 'Plus de 300 millions',
        explanation: 'Le français est parlé par plus de 300 millions de personnes dans le monde, réparties sur les 5 continents. L\'OIF regroupe 88 États et gouvernements membres.'
      },
      {
        id: 'qg6_6',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : L\'Union européenne est la première puissance commerciale mondiale.',
        answer: true,
        explanation: 'L\'UE, avec son marché unique de 450 millions de consommateurs, est la première puissance commerciale mondiale en termes d\'échanges de biens et de services.'
      },
      {
        id: 'qg6_7',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Qu\'est-ce que le « soft power » ?',
        options: [
          'La puissance militaire d\'un pays',
          'La capacité d\'influence par l\'attractivité culturelle et les valeurs',
          'Le pouvoir d\'achat des citoyens',
          'La puissance nucléaire'
        ],
        answer: 'La capacité d\'influence par l\'attractivité culturelle et les valeurs',
        explanation: 'Le soft power (puissance douce) est la capacité d\'un pays à influencer les autres non par la force mais par son attractivité culturelle, linguistique, ses idées et ses valeurs. La France y excelle grâce à la francophonie, le tourisme, la gastronomie et le cinéma.'
      },
      {
        id: 'qg6_8',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quelle est la superficie approximative de la ZEE française ?',
        options: ['1 million de km²', '5 millions de km²', '11 millions de km²', '20 millions de km²'],
        answer: '11 millions de km²',
        explanation: 'La ZEE française s\'étend sur environ 11 millions de km², soit 20 fois la superficie de la France métropolitaine, grâce aux territoires ultramarins.',
        mnemonic: '11 millions km² = 20 × la métropole.'
      },
      {
        id: 'qg6_9',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : L\'UE dispose d\'une armée commune.',
        answer: false,
        explanation: 'L\'UE ne dispose pas d\'armée commune. La défense reste une compétence nationale des États membres. Il existe cependant des coopérations (coopération structurée permanente — CSP) et des missions militaires européennes.',
        trap: 'L\'UE a une politique de sécurité et de défense commune (PSDC), mais pas d\'armée intégrée.'
      },
      {
        id: 'qg6_10',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Qu\'est-ce que le RGPD ?',
        options: [
          'Le Règlement Général sur la Protection des Données',
          'Le Réseau Global de Production Durable',
          'La Réforme Générale du Pacte Démocratique',
          'Le Registre Géographique des Pays Développés'
        ],
        answer: 'Le Règlement Général sur la Protection des Données',
        explanation: 'Le RGPD est un règlement européen entré en vigueur en 2018 pour protéger les données personnelles des citoyens européens. Il illustre le pouvoir normatif de l\'UE (« effet Bruxelles ») car il s\'impose aussi aux entreprises étrangères.'
      },
      {
        id: 'qg6_11',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : La France est une puissance nucléaire depuis 1960.',
        answer: true,
        explanation: 'La France a réalisé son premier essai nucléaire (Gerboise bleue) le 13 février 1960 au Sahara algérien, devenant la 4e puissance nucléaire mondiale après les États-Unis, l\'URSS et le Royaume-Uni.'
      },
      {
        id: 'qg6_12',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Qu\'est-ce que l\'« effet Bruxelles » ?',
        options: [
          'L\'influence des lobbys à Bruxelles',
          'Le fait que les normes de l\'UE soient adoptées au-delà de ses frontières',
          'La croissance économique de la Belgique',
          'Le pouvoir du Parlement européen'
        ],
        answer: 'Le fait que les normes de l\'UE soient adoptées au-delà de ses frontières',
        explanation: 'L\'« effet Bruxelles » désigne le pouvoir normatif mondial de l\'UE : ses normes (RGPD, normes alimentaires, environnementales) s\'imposent aux entreprises du monde entier souhaitant accéder au marché européen de 450 millions de consommateurs.'
      },
      {
        id: 'qg6_13',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Qu\'est-ce qu\'une FMN ?',
        options: [
          'Une Force Militaire Nationale',
          'Une Firme Multinationale',
          'Une Fédération des Métiers du Numérique',
          'Un Fond Monétaire National'
        ],
        answer: 'Une Firme Multinationale',
        explanation: 'Une FMN (Firme Multinationale) est une entreprise qui possède des filiales dans plusieurs pays. La France en compte de nombreuses : TotalEnergies, LVMH, L\'Oréal, Airbus, Renault, Sanofi.'
      },
      {
        id: 'qg6_14',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : L\'Organisation internationale de la Francophonie (OIF) regroupe 88 États et gouvernements.',
        answer: true,
        explanation: 'L\'OIF regroupe 88 États et gouvernements membres ou observateurs, ce qui en fait l\'une des plus grandes organisations linguistiques au monde, promouvant la langue française et la coopération entre pays francophones.'
      },
      {
        id: 'qg6_15',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quel DROM français partage une frontière terrestre avec le Brésil ?',
        options: ['La Martinique', 'La Guadeloupe', 'La Guyane', 'Mayotte'],
        answer: 'La Guyane',
        explanation: 'La Guyane française, située en Amérique du Sud, partage une frontière terrestre de plus de 700 km avec le Brésil (sur le fleuve Oyapock) et de 520 km avec le Suriname.',
        mnemonic: 'Guyane = frontière Brésil + Suriname.'
      },
      {
        id: 'qg6_16',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Vrai ou Faux : L\'UE et ses États membres sont collectivement le premier donateur mondial d\'aide au développement.',
        answer: true,
        explanation: 'L\'UE et ses États membres fournissent ensemble plus de la moitié de l\'aide publique au développement mondiale, aidant les pays en développement en Afrique, en Asie et en Amérique latine.'
      },
      {
        id: 'qg6_17',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel est le rang de la France en tant que puissance économique mondiale (PIB) ?',
        options: ['3e', '5e', '7e', '12e'],
        answer: '7e',
        explanation: 'La France est la 7e puissance économique mondiale en termes de PIB nominal, derrière les États-Unis, la Chine, le Japon, l\'Allemagne, l\'Inde et le Royaume-Uni.'
      },
      {
        id: 'qg6_18',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : La France est présente sur tous les océans grâce à ses territoires ultramarins.',
        answer: true,
        explanation: 'Grâce aux DROM-COM (Guadeloupe, Martinique, La Réunion, Polynésie française, Nouvelle-Calédonie, TAAF, etc.), la France est présente dans l\'Atlantique, le Pacifique, l\'océan Indien et les eaux subantarctiques.'
      },
      {
        id: 'qg6_19',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quel accord de libre-échange l\'UE a-t-elle signé avec le Canada ?',
        options: ['Le JEFTA', 'Le CETA', 'Le TTIP', 'Le MERCOSUR'],
        answer: 'Le CETA',
        explanation: 'Le CETA (Comprehensive Economic and Trade Agreement) est un accord de libre-échange entre l\'UE et le Canada, entré en application provisoire en 2017. Il vise à supprimer la quasi-totalité des droits de douane entre les deux partenaires.',
        trap: 'Le JEFTA est l\'accord avec le Japon, le TTIP (avec les USA) n\'a jamais abouti.'
      },
      {
        id: 'qg6_20',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : La gastronomie française est inscrite au patrimoine immatériel de l\'UNESCO depuis 2010.',
        answer: true,
        explanation: 'Le « repas gastronomique des Français » a été inscrit au patrimoine culturel immatériel de l\'humanité par l\'UNESCO en novembre 2010, une reconnaissance unique dans le monde.'
      },
      {
        id: 'qg6_21',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Combien de membres permanents siègent au Conseil de sécurité de l\'ONU ?',
        options: ['3', '5', '10', '15'],
        answer: '5',
        explanation: 'Le Conseil de sécurité de l\'ONU compte 5 membres permanents avec droit de veto : France, États-Unis, Russie, Chine et Royaume-Uni. Il y a aussi 10 membres non permanents élus pour 2 ans.'
      },
      {
        id: 'qg6_22',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quel est le nom de la première bombe atomique française testée en 1960 ?',
        options: ['Gerboise bleue', 'Little Boy', 'Tsar Bomba', 'Opération Licorne'],
        answer: 'Gerboise bleue',
        explanation: 'Gerboise bleue est le nom du premier essai nucléaire français, réalisé le 13 février 1960 dans le Sahara algérien (Reggane). La France devenait alors la 4e puissance nucléaire mondiale.'
      }
    ]
  }
];
