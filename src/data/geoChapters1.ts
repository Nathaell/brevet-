import { Chapter } from '../types';

export const geoChapters1: Chapter[] = [
  // ===========================
  // GEO 1 - Les aires urbaines en France
  // ===========================
  {
    id: 'geo1',
    slug: 'aires-urbaines-france',
    number: 1,
    subject: 'geographie',
    title: 'Les aires urbaines en France',
    subtitle: 'Urbanisation, métropolisation et étalement urbain',
    introduction: 'Aujourd\'hui, environ 85 % de la population française vit dans une aire urbaine. L\'urbanisation et la métropolisation transforment profondément le territoire national. Les villes s\'étalent de plus en plus loin, créant des couronnes périurbaines qui posent des défis en termes de mobilité, d\'environnement et d\'aménagement du territoire.',
    courseContent: `
      <h2>I. L\'urbanisation de la France</h2>
      <p>La France est un pays fortement urbanisé : <strong>environ 85 % de sa population vit dans une aire urbaine</strong>. Ce processus d\'urbanisation s\'est accéléré après la Seconde Guerre mondiale avec l\'exode rural et l\'industrialisation.</p>
      <p>Une <strong>aire urbaine</strong> (appelée <em>aire d\'attraction d\'une ville</em> depuis 2020 par l\'INSEE) se compose de trois zones concentriques :</p>
      <ul>
        <li><strong>La ville-centre (ou pôle urbain)</strong> : le cœur historique et économique de l\'agglomération. Elle concentre les emplois, les services et les fonctions de commandement.</li>
        <li><strong>La banlieue</strong> : zone urbanisée en continuité avec la ville-centre. Elle comprend des grands ensembles de logements sociaux, des zones commerciales et industrielles.</li>
        <li><strong>La couronne périurbaine</strong> : espace rural qui entoure la banlieue, caractérisé par des lotissements pavillonnaires. Au moins 40 % des actifs de cette zone travaillent dans le pôle urbain.</li>
      </ul>

      <h2>II. La métropolisation</h2>
      <p>La <strong>métropolisation</strong> est le processus de concentration des populations, des activités économiques et des fonctions de commandement dans les grandes villes (métropoles). Ce phénomène renforce la domination des grandes agglomérations sur le territoire.</p>
      <p><strong>Paris</strong>, seule <em>ville mondiale</em> française, concentre à elle seule :</p>
      <ul>
        <li>Près de 19 % de la population française (agglomération parisienne avec plus de 12 millions d\'habitants).</li>
        <li>Les sièges sociaux des grandes entreprises (quartier de La Défense).</li>
        <li>Les fonctions politiques (Élysée, Assemblée nationale) et culturelles (musées, universités).</li>
        <li>Des infrastructures de transport majeures (aéroports de Roissy-CDG et Orly, gares TGV).</li>
      </ul>
      <p>Les autres <strong>métropoles régionales</strong> (Lyon, Marseille, Toulouse, Bordeaux, Nantes, Lille, Strasbourg…) se sont renforcées grâce à la décentralisation et à la loi MAPTAM de 2014 créant les métropoles administratives. Elles concentrent des fonctions supérieures (universités, hôpitaux, centres de recherche).</p>

      <h2>III. L\'étalement urbain et la périurbanisation</h2>
      <p>Depuis les années 1970, les villes françaises s\'étalent vers les campagnes environnantes : c\'est l\'<strong>étalement urbain</strong> (ou <em>périurbanisation</em>). Les familles quittent la ville-centre et la banlieue pour s\'installer dans des pavillons individuels en couronne périurbaine.</p>
      <h3>Les causes de la périurbanisation</h3>
      <ul>
        <li>Le <strong>coût du foncier</strong> plus faible en périphérie.</li>
        <li>Le <strong>désir d\'un cadre de vie plus agréable</strong> (maison avec jardin, espace).</li>
        <li>Le développement des <strong>infrastructures de transport</strong> (autoroutes, TGV) facilitant les déplacements quotidiens.</li>
        <li>L\'implantation de <strong>zones commerciales</strong> en périphérie (centres commerciaux, grandes surfaces).</li>
      </ul>
      <h3>Les conséquences de l\'étalement urbain</h3>
      <ul>
        <li><strong>Dépendance à l\'automobile</strong> : les habitants de la couronne périurbaine effectuent des migrations pendulaires quotidiennes en voiture, générant des embouteillages et de la pollution.</li>
        <li><strong>Artificialisation des sols</strong> : disparition des terres agricoles au profit de lotissements et de routes.</li>
        <li><strong>Ségrégation socio-spatiale</strong> : les ménages modestes restent en banlieue (grands ensembles) tandis que les classes moyennes s\'installent en couronne périurbaine.</li>
      </ul>

      <h2>IV. Mobilités et transports</h2>
      <p>Les mobilités quotidiennes sont au cœur du fonctionnement des aires urbaines. Les <strong>migrations pendulaires</strong> (domicile-travail) augmentent avec l\'étalement urbain. Pour répondre à ces enjeux, les pouvoirs publics développent :</p>
      <ul>
        <li>Les <strong>transports en commun</strong> : métro, tramway, bus (le tramway a été réintroduit dans de nombreuses villes depuis les années 2000).</li>
        <li>Les <strong>mobilités douces</strong> : pistes cyclables, vélos en libre-service (Vélib\' à Paris, Vélo\'v à Lyon).</li>
        <li>Le <strong>covoiturage</strong> et le <strong>télétravail</strong> pour limiter les déplacements.</li>
      </ul>

      <h2>V. La gentrification</h2>
      <p>La <strong>gentrification</strong> est le processus par lequel des quartiers populaires des centres-villes se transforment sous l\'effet de l\'arrivée de populations plus aisées. Les logements sont rénovés, les commerces changent (cafés branchés, boutiques bio), et les anciens habitants modestes sont progressivement chassés par la hausse des loyers. Ce phénomène est très visible dans des quartiers comme le Marais à Paris ou la Croix-Rousse à Lyon.</p>
    `,
    summary: `
### Fiche Synthèse : Les aires urbaines en France

* **85 % de la population française** vit dans une aire urbaine.
* **Structure d'une aire urbaine** :
  1. *Ville-centre* : cœur historique, emplois et services.
  2. *Banlieue* : zone urbanisée en continuité (grands ensembles, zones commerciales).
  3. *Couronne périurbaine* : lotissements pavillonnaires, au moins 40 % des actifs travaillent dans le pôle urbain.
* **Métropolisation** : concentration des activités et des pouvoirs dans les grandes villes.
  * Paris = seule ville mondiale française (12 millions d'habitants, La Défense, Roissy-CDG).
  * Métropoles régionales renforcées (Lyon, Marseille, Toulouse, Bordeaux…).
* **Étalement urbain / Périurbanisation** :
  * Causes : coût du foncier, cadre de vie, autoroutes.
  * Conséquences : dépendance automobile, artificialisation des sols, migrations pendulaires.
* **Mobilités** : transports en commun (tramway, métro), mobilités douces (vélo), covoiturage, télétravail.
* **Gentrification** : transformation des quartiers populaires du centre-ville par l'arrivée de populations aisées.
    `,
    timeline: [
      { id: 'tgeo1_1', date: '1960-1970', title: 'Construction des grands ensembles', description: 'La politique des grands ensembles de logements sociaux en banlieue pour répondre à la crise du logement et à l\'exode rural.', category: 'social' },
      { id: 'tgeo1_2', date: 'Années 1970', title: 'Début de la périurbanisation', description: 'Les classes moyennes commencent à quitter les villes-centres pour s\'installer dans des pavillons en périphérie.', category: 'social' },
      { id: 'tgeo1_3', date: '2000-2010', title: 'Retour du tramway', description: 'De nombreuses villes françaises réintroduisent le tramway pour développer les transports en commun (Bordeaux, Nice, Montpellier…).', category: 'politique' },
      { id: 'tgeo1_4', date: '2014', title: 'Loi MAPTAM', description: 'Création du statut de métropole administrative pour les grandes agglomérations françaises (Lyon, Marseille, etc.).', category: 'politique' },
      { id: 'tgeo1_5', date: '2020', title: 'Nouvelle définition INSEE', description: 'L\'INSEE remplace le terme « aire urbaine » par « aire d\'attraction d\'une ville » pour mieux décrire l\'influence des pôles urbains.', category: 'politique' }
    ],
    mindMap: [
      { id: 'mgeo1_root', label: 'Aires urbaines en France' },
      { id: 'mgeo1_b1', label: 'Structure', parentId: 'mgeo1_root', description: 'Ville-centre + banlieue + couronne périurbaine = aire urbaine.' },
      { id: 'mgeo1_b2', label: 'Métropolisation', parentId: 'mgeo1_root', description: 'Concentration des fonctions de commandement dans les grandes villes. Paris = ville mondiale.' },
      { id: 'mgeo1_b3', label: 'Étalement urbain', parentId: 'mgeo1_root', description: 'Périurbanisation : lotissements pavillonnaires, dépendance automobile, artificialisation des sols.' },
      { id: 'mgeo1_b4', label: 'Mobilités', parentId: 'mgeo1_root', description: 'Migrations pendulaires, transports en commun, mobilités douces, covoiturage.' },
      { id: 'mgeo1_b5', label: 'Gentrification', parentId: 'mgeo1_root', description: 'Transformation des quartiers populaires par l\'arrivée de populations aisées.' }
    ],
    characters: [],
    dates: [
      { date: 'Années 1960-1970', event: 'Construction des grands ensembles', explanation: 'Politique de logements sociaux pour répondre à l\'exode rural et à la croissance démographique.' },
      { date: 'Années 1970', event: 'Début de la périurbanisation', explanation: 'Les ménages quittent les villes-centres pour des pavillons en périphérie, favorisés par l\'automobile.' },
      { date: '2014', event: 'Loi MAPTAM', explanation: 'Création des métropoles administratives pour renforcer les grandes agglomérations françaises.' },
      { date: '2015', event: 'Loi NOTRe', explanation: 'Réorganisation territoriale : fusion de régions, renforcement des intercommunalités.' },
      { date: '2020', event: 'Nouvelle nomenclature INSEE', explanation: 'L\'INSEE adopte « aire d\'attraction d\'une ville » en remplacement d\'« aire urbaine ».' },
      { date: '2023', event: '85 % de population urbaine', explanation: 'Environ 85 % des Français vivent dans une aire d\'attraction d\'une ville.' }
    ],
    flashcards: [
      { id: 'fcgeo1_1', question: 'Qu\'est-ce qu\'une aire urbaine ?', answer: 'Un ensemble composé d\'une ville-centre, de sa banlieue et de sa couronne périurbaine, regroupant les communes dont au moins 40 % des actifs travaillent dans le pôle urbain.' },
      { id: 'fcgeo1_2', question: 'Quelle part de la population française vit en aire urbaine ?', answer: 'Environ 85 % de la population française vit dans une aire urbaine.' },
      { id: 'fcgeo1_3', question: 'Qu\'est-ce que la périurbanisation ?', answer: 'C\'est le processus d\'étalement des villes vers les campagnes environnantes, caractérisé par la construction de lotissements pavillonnaires en couronne périurbaine.' },
      { id: 'fcgeo1_4', question: 'Qu\'est-ce que la métropolisation ?', answer: 'C\'est la concentration croissante des populations, des activités économiques et des fonctions de commandement dans les grandes villes (métropoles).' },
      { id: 'fcgeo1_5', question: 'Qu\'appelle-t-on les migrations pendulaires ?', answer: 'Ce sont les déplacements quotidiens domicile-travail effectués par les habitants, particulièrement ceux de la couronne périurbaine qui travaillent dans le pôle urbain.' },
      { id: 'fcgeo1_6', question: 'Qu\'est-ce que la gentrification ?', answer: 'C\'est la transformation de quartiers populaires de centre-ville par l\'arrivée de populations plus aisées, entraînant la hausse des loyers et le départ des habitants modestes.' },
      { id: 'fcgeo1_7', question: 'Pourquoi parle-t-on d\'artificialisation des sols ?', answer: 'Parce que l\'étalement urbain transforme des terres agricoles ou naturelles en surfaces bâties (routes, lotissements, centres commerciaux), ce qui réduit la biodiversité et imperméabilise les sols.' },
      { id: 'fcgeo1_8', question: 'Quelle est la seule ville mondiale française ?', answer: 'Paris, qui concentre des fonctions de commandement à l\'échelle mondiale (La Défense, sièges sociaux, aéroports internationaux, institutions culturelles).' }
    ],
    anecdotes: [
      'La France perd l\'équivalent d\'un département de terres agricoles tous les 7 à 10 ans à cause de l\'étalement urbain et de l\'artificialisation des sols.',
      'Le quartier de La Défense, à l\'ouest de Paris, est le premier quartier d\'affaires européen avec plus de 180 000 salariés qui y travaillent chaque jour.',
      'Le tramway avait disparu de la plupart des villes françaises après les années 1950 au profit de l\'automobile. Nantes a été la première ville à le réintroduire en 1985, lançant une tendance nationale.'
    ],
    questions: [
      {
        id: 'qgeo1_1',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel pourcentage de la population française vit dans une aire urbaine ?',
        options: ['50 %', '65 %', '85 %', '95 %'],
        answer: '85 %',
        explanation: 'Environ 85 % de la population française vit dans une aire urbaine, ce qui fait de la France un pays très urbanisé.',
        mnemonic: '85 % = presque 9 Français sur 10 vivent en ville !'
      },
      {
        id: 'qgeo1_2',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quelles sont les trois composantes d\'une aire urbaine ?',
        options: [
          'Ville-centre, banlieue, couronne périurbaine',
          'Centre-ville, zone industrielle, zone rurale',
          'Métropole, commune, département',
          'Quartier, arrondissement, canton'
        ],
        answer: 'Ville-centre, banlieue, couronne périurbaine',
        explanation: 'Une aire urbaine se compose de la ville-centre (pôle urbain), de la banlieue (en continuité bâtie) et de la couronne périurbaine (où au moins 40 % des actifs travaillent dans le pôle).'
      },
      {
        id: 'qgeo1_3',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : La couronne périurbaine est la zone la plus densément peuplée d\'une aire urbaine.',
        answer: false,
        explanation: 'C\'est la ville-centre qui est la zone la plus densément peuplée. La couronne périurbaine est un espace moins dense, composé principalement de lotissements pavillonnaires.',
        trap: 'Ne confondez pas « peuplée » et « étendue ». La couronne périurbaine peut être la plus étendue mais pas la plus dense.'
      },
      {
        id: 'qgeo1_4',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Qu\'est-ce que la métropolisation ?',
        options: [
          'La concentration des populations et des activités dans les grandes villes',
          'La disparition des petites villes en France',
          'La construction de lignes de métro dans toutes les villes',
          'L\'augmentation du nombre de communes en France'
        ],
        answer: 'La concentration des populations et des activités dans les grandes villes',
        explanation: 'La métropolisation est le processus par lequel les grandes villes (métropoles) attirent de plus en plus de populations, d\'emplois et de fonctions de commandement.'
      },
      {
        id: 'qgeo1_5',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Paris est considérée comme la seule ville mondiale française.',
        answer: true,
        explanation: 'Paris est la seule ville française ayant un rayonnement mondial : sièges sociaux internationaux (La Défense), aéroports de dimension mondiale (Roissy-CDG), institutions culturelles et politiques de premier plan.'
      },
      {
        id: 'qgeo1_6',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quelle est la principale cause de la périurbanisation en France ?',
        options: [
          'Le prix élevé du foncier en ville-centre poussant les ménages en périphérie',
          'L\'interdiction de construire en banlieue',
          'La fermeture des commerces en ville',
          'Le manque d\'eau dans les grandes villes'
        ],
        answer: 'Le prix élevé du foncier en ville-centre poussant les ménages en périphérie',
        explanation: 'Le coût du logement plus faible en périphérie, combiné au désir d\'un cadre de vie agréable (maison avec jardin) et au développement des transports, explique la périurbanisation.'
      },
      {
        id: 'qgeo1_7',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : L\'étalement urbain a pour conséquence l\'artificialisation des sols et la disparition de terres agricoles.',
        answer: true,
        explanation: 'L\'étalement urbain entraîne la construction de lotissements, routes et centres commerciaux sur d\'anciennes terres agricoles, ce qui artificialise les sols et réduit l\'espace naturel.'
      },
      {
        id: 'qgeo1_8',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Comment appelle-t-on les déplacements quotidiens domicile-travail ?',
        options: [
          'Les migrations pendulaires',
          'Les mobilités vacancières',
          'Les flux migratoires',
          'Les transhumances'
        ],
        answer: 'Les migrations pendulaires',
        explanation: 'Les migrations pendulaires désignent les trajets quotidiens entre le domicile (souvent en couronne périurbaine) et le lieu de travail (souvent dans la ville-centre).',
        mnemonic: 'Pendulaire = comme un pendule, aller-retour chaque jour !'
      },
      {
        id: 'qgeo1_9',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Qu\'est-ce que la gentrification ?',
        options: [
          'La transformation de quartiers populaires par l\'arrivée de populations aisées',
          'La construction de grands ensembles en banlieue',
          'Le développement de l\'agriculture urbaine',
          'La création de zones industrielles en centre-ville'
        ],
        answer: 'La transformation de quartiers populaires par l\'arrivée de populations aisées',
        explanation: 'La gentrification est un phénomène qui voit des quartiers populaires se transformer : rénovation des logements, hausse des loyers, changement des commerces et départ progressif des habitants modestes.'
      },
      {
        id: 'qgeo1_10',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Le tramway a été réintroduit dans de nombreuses villes françaises depuis les années 2000.',
        answer: true,
        explanation: 'Après avoir quasiment disparu au profit de l\'automobile, le tramway a été réintroduit dans de nombreuses villes (Bordeaux, Nice, Montpellier, Strasbourg…) pour développer les transports en commun.'
      },
      {
        id: 'qgeo1_11',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quelle loi de 2014 a créé le statut de « métropole » pour les grandes agglomérations françaises ?',
        options: [
          'La loi MAPTAM',
          'La loi SRU',
          'La loi Grenelle',
          'La loi ALUR'
        ],
        answer: 'La loi MAPTAM',
        explanation: 'La loi MAPTAM (Modernisation de l\'Action Publique Territoriale et d\'Affirmation des Métropoles) de 2014 a créé le statut juridique de métropole pour les grandes agglomérations.',
        mnemonic: 'MAPTAM = Métropoles Affirmées.'
      },
      {
        id: 'qgeo1_12',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quel quartier d\'affaires est le premier centre d\'affaires européen ?',
        options: [
          'La Défense (Paris)',
          'La City (Londres)',
          'Le quartier européen (Bruxelles)',
          'Potsdamer Platz (Berlin)'
        ],
        answer: 'La Défense (Paris)',
        explanation: 'La Défense, situé à l\'ouest de Paris, est le premier quartier d\'affaires d\'Europe par la surface de bureaux, avec plus de 180 000 salariés quotidiens.',
        trap: 'La City de Londres est un important centre financier, mais La Défense est le premier quartier d\'affaires d\'Europe en termes de surface de bureaux.'
      },
      {
        id: 'qgeo1_13',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : La périurbanisation réduit la dépendance à l\'automobile.',
        answer: false,
        explanation: 'Au contraire, la périurbanisation augmente la dépendance à l\'automobile car les habitants de la couronne périurbaine doivent souvent prendre leur voiture pour se rendre au travail, faire leurs courses ou accéder aux services.',
        trap: 'Piège classique : l\'étalement urbain éloigne les habitants des services et des emplois, ce qui renforce le besoin de la voiture.'
      },
      {
        id: 'qgeo1_14',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel seuil d\'actifs travaillant dans le pôle urbain définit la couronne périurbaine ?',
        options: ['10 %', '25 %', '40 %', '60 %'],
        answer: '40 %',
        explanation: 'Dans une aire urbaine, les communes de la couronne périurbaine sont celles dont au moins 40 % des actifs travaillent dans le pôle urbain (ville-centre et banlieue).',
        mnemonic: '40 % = seuil de la couronne périurbaine.'
      },
      {
        id: 'qgeo1_15',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Vrai ou Faux : Depuis 2020, l\'INSEE utilise le terme « aire d\'attraction d\'une ville » à la place d\'« aire urbaine ».',
        answer: true,
        explanation: 'En 2020, l\'INSEE a adopté le zonage en « aires d\'attraction des villes » qui remplace l\'ancien zonage en « aires urbaines » pour mieux représenter l\'influence des pôles urbains.'
      },
      {
        id: 'qgeo1_16',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Citez un exemple de mobilité douce mise en place dans les villes françaises.',
        options: [
          'Les vélos en libre-service (Vélib\', Vélo\'v)',
          'Les autoroutes urbaines',
          'Les parkings-relais souterrains',
          'Les taxis aériens'
        ],
        answer: 'Les vélos en libre-service (Vélib\', Vélo\'v)',
        explanation: 'Les vélos en libre-service comme le Vélib\' à Paris ou le Vélo\'v à Lyon sont des exemples de mobilités douces qui permettent de se déplacer sans polluer.'
      },
      {
        id: 'qgeo1_17',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quelle conséquence sociale l\'étalement urbain peut-il entraîner ?',
        options: [
          'Une ségrégation socio-spatiale entre centre et périphérie',
          'Une meilleure mixité sociale dans les villes',
          'La disparition des inégalités de revenus',
          'L\'augmentation des emplois dans les campagnes'
        ],
        answer: 'Une ségrégation socio-spatiale entre centre et périphérie',
        explanation: 'L\'étalement urbain renforce la ségrégation socio-spatiale : les ménages modestes restent en banlieue (grands ensembles), les classes moyennes s\'installent en périurbain, et les classes aisées investissent les centres-villes gentrifiés.'
      },
      {
        id: 'qgeo1_18',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : L\'agglomération parisienne compte environ 12 millions d\'habitants.',
        answer: true,
        explanation: 'L\'unité urbaine de Paris (agglomération) regroupe environ 12 millions d\'habitants, soit près d\'un cinquième de la population française.'
      },
      {
        id: 'qgeo1_19',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quelle est la conséquence environnementale majeure des migrations pendulaires en voiture ?',
        options: [
          'L\'augmentation des émissions de gaz à effet de serre et la pollution de l\'air',
          'La réduction de la biodiversité marine',
          'La diminution du niveau des nappes phréatiques',
          'L\'augmentation de la production de déchets ménagers'
        ],
        answer: 'L\'augmentation des émissions de gaz à effet de serre et la pollution de l\'air',
        explanation: 'Les trajets quotidiens en voiture individuelle augmentent les émissions de CO₂ et polluent l\'air, contribuant au changement climatique et aux problèmes de santé publique.'
      },
      {
        id: 'qgeo1_20',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quelle ville française a été pionnière dans la réintroduction du tramway ?',
        options: ['Paris', 'Nantes', 'Lyon', 'Bordeaux'],
        answer: 'Nantes',
        explanation: 'Nantes a été la première ville française à réintroduire le tramway en 1985, lançant une tendance suivie par Strasbourg, Bordeaux, Montpellier et bien d\'autres.'
      },
      {
        id: 'qgeo1_21',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : La gentrification profite généralement aux habitants modestes des quartiers concernés.',
        answer: false,
        explanation: 'La gentrification provoque la hausse des loyers et du coût de la vie, ce qui pousse les habitants modestes à quitter leurs quartiers. Elle profite surtout aux populations plus aisées qui s\'y installent.',
        trap: 'On pourrait penser que la rénovation des quartiers profite à tous, mais elle exclut souvent les plus modestes par la hausse des prix.'
      },
      {
        id: 'qgeo1_22',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel type de logement caractérise la couronne périurbaine ?',
        options: [
          'Des maisons individuelles avec jardin (pavillons)',
          'Des immeubles de grande hauteur',
          'Des logements sociaux collectifs',
          'Des résidences étudiantes'
        ],
        answer: 'Des maisons individuelles avec jardin (pavillons)',
        explanation: 'La couronne périurbaine se caractérise par les lotissements pavillonnaires : des maisons individuelles avec jardin, recherchées par les familles de classes moyennes.'
      },
      {
        id: 'qgeo1_23',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Vrai ou Faux : Le télétravail est une solution envisagée pour réduire les migrations pendulaires.',
        answer: true,
        explanation: 'Le télétravail permet de travailler depuis son domicile, réduisant ainsi les déplacements quotidiens, les embouteillages et les émissions de CO₂ liées aux migrations pendulaires.'
      }
    ]
  },

  // ===========================
  // GEO 2 - Les espaces productifs en France
  // ===========================
  {
    id: 'geo2',
    slug: 'espaces-productifs-france',
    number: 2,
    subject: 'geographie',
    title: 'Les espaces productifs en France',
    subtitle: 'Industrie, agriculture et services dans la mondialisation',
    introduction: 'Les espaces productifs français sont les territoires où se concentrent les activités économiques. Ils se répartissent en trois grands types : les espaces industriels, les espaces agricoles et les espaces de services (tertiaires). La mondialisation les transforme profondément, entre reconversions douloureuses et adaptations réussies.',
    courseContent: `
      <h2>I. Les espaces industriels</h2>
      <p>L\'industrie française a connu de profondes mutations depuis les années 1970. On distingue :</p>

      <h3>1. Les espaces industriels en déclin et en reconversion</h3>
      <p>Les anciennes régions industrielles du Nord et de l\'Est de la France (Nord-Pas-de-Calais, Lorraine) étaient spécialisées dans les industries lourdes : <strong>mines de charbon, sidérurgie, textile</strong>. La <strong>désindustrialisation</strong> liée à la concurrence internationale et à l\'épuisement des ressources a provoqué la fermeture des usines, un chômage massif et une crise sociale profonde.</p>
      <p>Ces régions ont engagé des politiques de <strong>reconversion industrielle</strong> : transformation des friches industrielles en espaces culturels (le Louvre-Lens), développement de nouvelles activités (logistique, services).</p>

      <h3>2. Les espaces industriels dynamiques : les technopôles</h3>
      <p>Les <strong>technopôles</strong> sont des espaces regroupant des industries de haute technologie, des centres de recherche et des universités. Ils se situent souvent dans le Sud et l\'Ouest de la France :</p>
      <ul>
        <li><strong>Sophia Antipolis</strong> (près de Nice) : premier technopôle français, spécialisé dans les NTIC (nouvelles technologies).</li>
        <li><strong>Toulouse</strong> : pôle aéronautique et spatial majeur (Airbus, CNES).</li>
        <li><strong>Grenoble</strong> : nanotechnologies et microélectronique.</li>
        <li><strong>Saclay</strong> (Île-de-France) : recherche scientifique et technologique.</li>
      </ul>
      <p>Ces espaces bénéficient de la proximité des universités, d\'une main-d\'œuvre qualifiée, d\'un cadre de vie attractif et de bonnes connexions de transport.</p>

      <h3>3. Les délocalisations</h3>
      <p>La <strong>délocalisation</strong> consiste à transférer une activité de production vers un pays où les coûts de main-d\'œuvre sont plus faibles. Ce phénomène, lié à la mondialisation, a touché de nombreux secteurs industriels français (textile, automobile, électronique). Cependant, on observe aussi des <strong>relocalisations</strong> dans certains secteurs stratégiques.</p>

      <h2>II. Les espaces agricoles</h2>
      <p>La France est la <strong>première puissance agricole de l\'Union européenne</strong>. Son agriculture est diverse et puissante, mais elle est fortement influencée par la <strong>Politique Agricole Commune (PAC)</strong> de l\'UE.</p>

      <h3>1. L\'agriculture productiviste</h3>
      <p>L\'<strong>agriculture productiviste</strong> (ou intensive) vise à produire en grande quantité grâce à la mécanisation, aux engrais chimiques, aux pesticides et à l\'irrigation. Elle domine dans :</p>
      <ul>
        <li>Le <strong>Bassin parisien</strong> : grandes cultures céréalières (blé, maïs, betterave).</li>
        <li>La <strong>Beauce</strong> : surnommée le « grenier de la France ».</li>
        <li>La <strong>Bretagne</strong> : élevage intensif (porcs, volailles) et agroalimentaire.</li>
      </ul>
      <p>Cette agriculture est tournée vers l\'<strong>exportation</strong> et fait de la France un des premiers exportateurs mondiaux de produits agroalimentaires.</p>

      <h3>2. La PAC (Politique Agricole Commune)</h3>
      <p>Créée en <strong>1962</strong>, la PAC est la politique agricole de l\'Union européenne. Elle subventionne les agriculteurs pour garantir la sécurité alimentaire et maintenir les prix. Elle a été réformée pour encourager une agriculture plus respectueuse de l\'environnement (verdissement, agriculture biologique).</p>

      <h3>3. Les défis de l\'agriculture</h3>
      <ul>
        <li><strong>La concurrence mondiale</strong> : les produits importés à bas coûts.</li>
        <li><strong>Les enjeux environnementaux</strong> : pollution des sols et de l\'eau par les pesticides, atteinte à la biodiversité.</li>
        <li><strong>Le développement de l\'agriculture biologique</strong> : une alternative en forte croissance.</li>
      </ul>

      <h2>III. Les espaces de services (tertiaires)</h2>
      <p>Le <strong>secteur tertiaire</strong> (services) est devenu le premier secteur économique français, employant environ <strong>75 à 80 % des actifs</strong>. Il comprend le commerce, la santé, l\'éducation, les transports, le tourisme, la finance, les nouvelles technologies, etc.</p>

      <h3>1. Le tourisme</h3>
      <p>La France est la <strong>première destination touristique mondiale</strong> avec environ <strong>90 millions de visiteurs internationaux par an</strong> (avant la pandémie de Covid-19). Le tourisme repose sur :</p>
      <ul>
        <li>Le patrimoine culturel et historique (Paris, châteaux de la Loire, Mont-Saint-Michel).</li>
        <li>Le tourisme balnéaire (Côte d\'Azur, Corse, Antilles).</li>
        <li>Le tourisme de montagne (Alpes, Pyrénées : sports d\'hiver).</li>
        <li>Le tourisme vert et rural (gîtes, randonnées).</li>
      </ul>

      <h3>2. Les métropoles, cœurs du tertiaire</h3>
      <p>Les grandes métropoles concentrent les activités tertiaires supérieures : sièges sociaux d\'entreprises, centres de recherche, services financiers. Paris domine avec le quartier d\'affaires de <strong>La Défense</strong>, mais d\'autres métropoles sont dynamiques : Lyon (chimie, pharmacie), Toulouse (aéronautique), Montpellier (numérique).</p>

      <h3>3. Le numérique et l\'innovation</h3>
      <p>Le secteur numérique est en pleine expansion. Le quartier de <strong>Silicon Sentier</strong> (devenu « French Tech ») à Paris, ainsi que les incubateurs de start-ups dans les métropoles, témoignent de la volonté française de s\'imposer dans l\'économie numérique.</p>
    `,
    summary: `
### Fiche Synthèse : Les espaces productifs en France

* **Espaces industriels** :
  * *En déclin* : Nord et Est (mines, sidérurgie) → désindustrialisation, chômage, reconversion (Louvre-Lens).
  * *Dynamiques* : technopôles (Sophia Antipolis, Toulouse-Airbus, Grenoble, Saclay) → haute technologie, recherche.
  * *Délocalisations* : transfert d'activités vers des pays à bas coûts. Quelques relocalisations stratégiques.
* **Espaces agricoles** :
  * France = **1re puissance agricole de l'UE**.
  * Agriculture productiviste : Bassin parisien (céréales), Beauce (« grenier de la France »), Bretagne (élevage intensif).
  * **PAC** (1962) : subventions européennes, réformes vers le verdissement et le bio.
  * Défis : concurrence mondiale, pollution, essor du bio.
* **Espaces de services (tertiaires)** :
  * 75-80 % des actifs français travaillent dans le tertiaire.
  * France = **1re destination touristique mondiale** (~90 millions de visiteurs/an).
  * Métropoles = cœurs du tertiaire supérieur (La Défense, Lyon, Toulouse).
  * Numérique : Silicon Sentier / French Tech, start-ups, innovation.
    `,
    timeline: [
      { id: 'tgeo2_1', date: '1962', title: 'Création de la PAC', description: 'Mise en place de la Politique Agricole Commune de l\'Union européenne pour soutenir les agriculteurs et assurer l\'autosuffisance alimentaire.', category: 'politique' },
      { id: 'tgeo2_2', date: '1969', title: 'Création de Sophia Antipolis', description: 'Fondation du premier technopôle français près de Nice, dédié aux nouvelles technologies de l\'information et de la communication.', category: 'politique' },
      { id: 'tgeo2_3', date: 'Années 1970-1980', title: 'Désindustrialisation du Nord-Est', description: 'Fermeture massive des mines et des usines sidérurgiques dans le Nord-Pas-de-Calais et en Lorraine, entraînant un chômage de masse.', category: 'social' },
      { id: 'tgeo2_4', date: '2012', title: 'Ouverture du Louvre-Lens', description: 'Inauguration du musée Louvre-Lens dans l\'ancien bassin minier, symbole de la reconversion culturelle des espaces industriels en déclin.', category: 'social' },
      { id: 'tgeo2_5', date: '2013', title: 'Lancement de la French Tech', description: 'Initiative gouvernementale pour soutenir l\'écosystème de start-ups et l\'innovation numérique en France.', category: 'politique' }
    ],
    mindMap: [
      { id: 'mgeo2_root', label: 'Espaces productifs en France' },
      { id: 'mgeo2_b1', label: 'Espaces industriels', parentId: 'mgeo2_root', description: 'Déclin du Nord-Est (reconversion), dynamisme des technopôles (Sophia Antipolis, Toulouse), délocalisations.' },
      { id: 'mgeo2_b2', label: 'Espaces agricoles', parentId: 'mgeo2_root', description: 'Agriculture productiviste (Bassin parisien, Bretagne), PAC, défis du bio et de la concurrence.' },
      { id: 'mgeo2_b3', label: 'Espaces tertiaires', parentId: 'mgeo2_root', description: '75-80 % des actifs, tourisme (1re destination mondiale), métropoles, numérique (French Tech).' },
      { id: 'mgeo2_b4', label: 'Mondialisation', parentId: 'mgeo2_root', description: 'La France dans la compétition mondiale : exportations agricoles, délocalisations, attractivité touristique.' }
    ],
    characters: [],
    dates: [
      { date: '1962', event: 'Création de la PAC', explanation: 'La Politique Agricole Commune vise à moderniser l\'agriculture européenne et à garantir des revenus aux agriculteurs par des subventions.' },
      { date: '1969', event: 'Fondation de Sophia Antipolis', explanation: 'Premier technopôle français, il est devenu un modèle d\'innovation technologique.' },
      { date: 'Années 1970-1980', event: 'Crise industrielle du Nord-Est', explanation: 'Fermeture des mines et des usines sidérurgiques, provoquant chômage et crise sociale dans le Nord et la Lorraine.' },
      { date: '2012', event: 'Ouverture du Louvre-Lens', explanation: 'Symbole de la reconversion culturelle de l\'ancien bassin minier du Pas-de-Calais.' },
      { date: '2013', event: 'Lancement de la French Tech', explanation: 'Label soutenant l\'écosystème de start-ups numériques françaises à l\'international.' },
      { date: '2023', event: 'France 1re destination touristique mondiale', explanation: 'La France accueille environ 90 millions de visiteurs internationaux par an, maintenant son rang de première destination mondiale.' }
    ],
    flashcards: [
      { id: 'fcgeo2_1', question: 'Qu\'est-ce qu\'un technopôle ?', answer: 'Un espace regroupant des industries de haute technologie, des centres de recherche et des universités pour favoriser l\'innovation (ex : Sophia Antipolis, Toulouse).' },
      { id: 'fcgeo2_2', question: 'Qu\'est-ce que la PAC ?', answer: 'La Politique Agricole Commune est la politique de l\'Union européenne qui subventionne les agriculteurs, créée en 1962 pour assurer la sécurité alimentaire et soutenir les revenus agricoles.' },
      { id: 'fcgeo2_3', question: 'Qu\'est-ce que l\'agriculture productiviste ?', answer: 'Une agriculture intensive visant à produire en grande quantité grâce à la mécanisation, aux engrais, aux pesticides et à l\'irrigation (ex : céréales du Bassin parisien).' },
      { id: 'fcgeo2_4', question: 'Qu\'est-ce qu\'une délocalisation ?', answer: 'C\'est le transfert d\'une activité de production d\'un pays vers un autre où les coûts de main-d\'œuvre sont plus faibles.' },
      { id: 'fcgeo2_5', question: 'Pourquoi la France est-elle la première destination touristique mondiale ?', answer: 'Grâce à la diversité de son patrimoine culturel (Paris, châteaux), ses littoraux (Côte d\'Azur), ses montagnes (Alpes), sa gastronomie et son histoire.' },
      { id: 'fcgeo2_6', question: 'Qu\'est-ce que la reconversion industrielle ?', answer: 'La transformation d\'un espace industriel en déclin par le développement de nouvelles activités (culture, logistique, services) pour remplacer les anciennes industries disparues.' },
      { id: 'fcgeo2_7', question: 'Quel surnom donne-t-on à la Beauce ?', answer: 'On l\'appelle le « grenier de la France » en raison de sa production céréalière intensive (blé, maïs, betterave).' },
      { id: 'fcgeo2_8', question: 'Quel secteur emploie 75 à 80 % des actifs en France ?', answer: 'Le secteur tertiaire (services) : commerce, santé, éducation, tourisme, finance, numérique.' }
    ],
    anecdotes: [
      'Sophia Antipolis, le premier technopôle français fondé en 1969 près de Nice, tire son nom de « sophia » (la sagesse en grec) et d\'Antipolis (l\'ancien nom grec d\'Antibes). Il accueille aujourd\'hui plus de 2 500 entreprises et 38 000 emplois.',
      'Le bassin minier du Nord-Pas-de-Calais est inscrit au patrimoine mondial de l\'UNESCO depuis 2012. Cette reconnaissance témoigne de la mémoire ouvrière et de la reconversion culturelle de ce territoire.',
      'La France produit environ 300 types de fromages différents, ce qui en fait un atout majeur pour son agriculture et son tourisme gastronomique. Le général de Gaulle aurait dit : « Comment voulez-vous gouverner un pays qui a 246 variétés de fromage ? »'
    ],
    questions: [
      {
        id: 'qgeo2_1',
        type: 'qcm',
        difficulty: 'easy',
        question: 'La France est la première puissance agricole de…',
        options: ['L\'Union européenne', 'Le monde', 'L\'Afrique', 'L\'Amérique du Nord'],
        answer: 'L\'Union européenne',
        explanation: 'La France est la première puissance agricole de l\'Union européenne grâce à la diversité de ses productions et à la taille de son territoire agricole.'
      },
      {
        id: 'qgeo2_2',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Sophia Antipolis est un technopôle situé près de Nice.',
        answer: true,
        explanation: 'Sophia Antipolis, fondé en 1969, est le premier technopôle français, situé dans les Alpes-Maritimes, près de Nice et d\'Antibes.'
      },
      {
        id: 'qgeo2_3',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Qu\'est-ce qu\'un technopôle ?',
        options: [
          'Un espace regroupant industries de haute technologie, recherche et universités',
          'Une zone industrielle traditionnelle reconvertie',
          'Un centre commercial géant en périphérie',
          'Un réseau de transport en commun urbain'
        ],
        answer: 'Un espace regroupant industries de haute technologie, recherche et universités',
        explanation: 'Un technopôle concentre des activités innovantes (industries de pointe, recherche, universités) pour favoriser les synergies et l\'innovation technologique.'
      },
      {
        id: 'qgeo2_4',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quelle ville française est un pôle majeur de l\'industrie aéronautique ?',
        options: ['Toulouse', 'Marseille', 'Bordeaux', 'Strasbourg'],
        answer: 'Toulouse',
        explanation: 'Toulouse est le centre de l\'industrie aéronautique et spatiale française et européenne, avec la présence d\'Airbus et du CNES (Centre National d\'Études Spatiales).'
      },
      {
        id: 'qgeo2_5',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : La PAC (Politique Agricole Commune) a été créée en 1962.',
        answer: true,
        explanation: 'La PAC a été mise en place en 1962 dans le cadre de la Communauté économique européenne (CEE) pour moderniser l\'agriculture et garantir la sécurité alimentaire en Europe.'
      },
      {
        id: 'qgeo2_6',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quelles anciennes régions industrielles du Nord et de l\'Est ont été touchées par la désindustrialisation ?',
        options: [
          'Nord-Pas-de-Calais et Lorraine',
          'Provence-Alpes-Côte d\'Azur et Corse',
          'Bretagne et Aquitaine',
          'Île-de-France et Centre'
        ],
        answer: 'Nord-Pas-de-Calais et Lorraine',
        explanation: 'Le Nord-Pas-de-Calais (mines de charbon, textile) et la Lorraine (sidérurgie) ont été les régions les plus touchées par la fermeture des usines et des mines à partir des années 1970-1980.'
      },
      {
        id: 'qgeo2_7',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel secteur économique emploie la majorité des actifs en France ?',
        options: ['Le secteur tertiaire (services)', 'Le secteur secondaire (industrie)', 'Le secteur primaire (agriculture)', 'Le secteur quaternaire (recherche)'],
        answer: 'Le secteur tertiaire (services)',
        explanation: 'Le secteur tertiaire emploie environ 75 à 80 % des actifs français, couvrant le commerce, la santé, l\'éducation, le tourisme, la finance, etc.',
        mnemonic: 'Tertiaire = 3/4 des emplois en France !'
      },
      {
        id: 'qgeo2_8',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : La Beauce est surnommée le « grenier de la France » en raison de sa production céréalière.',
        answer: true,
        explanation: 'La Beauce, située dans le Bassin parisien, est une vaste plaine céréalière (blé, maïs, colza) surnommée le « grenier de la France ».'
      },
      {
        id: 'qgeo2_9',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Qu\'est-ce qu\'une délocalisation ?',
        options: [
          'Le transfert d\'une activité vers un pays à coûts de production plus faibles',
          'La création d\'une nouvelle usine dans la même ville',
          'Le développement d\'un technopôle en zone rurale',
          'La fermeture définitive d\'une entreprise sans relocalisation'
        ],
        answer: 'Le transfert d\'une activité vers un pays à coûts de production plus faibles',
        explanation: 'La délocalisation consiste à transférer la production vers un pays où la main-d\'œuvre est moins chère, souvent dans les pays émergents.'
      },
      {
        id: 'qgeo2_10',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : La France est la première destination touristique mondiale.',
        answer: true,
        explanation: 'La France accueille environ 90 millions de visiteurs internationaux par an, ce qui en fait la première destination touristique au monde.'
      },
      {
        id: 'qgeo2_11',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quel musée symbolise la reconversion culturelle de l\'ancien bassin minier du Nord ?',
        options: ['Le Louvre-Lens', 'Le Centre Pompidou-Metz', 'Le MuCEM de Marseille', 'Le Musée des Confluences de Lyon'],
        answer: 'Le Louvre-Lens',
        explanation: 'Le Louvre-Lens, ouvert en 2012, est situé sur une ancienne fosse minière à Lens (Pas-de-Calais). Il symbolise la reconversion culturelle de ce territoire en déclin industriel.'
      },
      {
        id: 'qgeo2_12',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quelle région française est spécialisée dans l\'élevage intensif (porcs et volailles) ?',
        options: ['La Bretagne', 'L\'Alsace', 'La Provence', 'La Bourgogne'],
        answer: 'La Bretagne',
        explanation: 'La Bretagne est la première région d\'élevage intensif en France, spécialisée dans la production porcine et avicole, ainsi que dans l\'industrie agroalimentaire.'
      },
      {
        id: 'qgeo2_13',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : L\'agriculture biologique est en déclin en France.',
        answer: false,
        explanation: 'Au contraire, l\'agriculture biologique est en forte croissance en France. La surface agricole utile en bio a considérablement augmenté ces dernières années, soutenue par la demande des consommateurs et les politiques publiques.'
      },
      {
        id: 'qgeo2_14',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Qu\'est-ce que la French Tech ?',
        options: [
          'Un label et une initiative soutenant l\'écosystème de start-ups numériques françaises',
          'Une entreprise publique de télécommunications',
          'Un réseau de lycées technologiques',
          'Une marque de produits électroniques français'
        ],
        answer: 'Un label et une initiative soutenant l\'écosystème de start-ups numériques françaises',
        explanation: 'La French Tech, lancée en 2013, est une initiative publique qui soutient et promeut l\'écosystème de start-ups françaises à l\'international.'
      },
      {
        id: 'qgeo2_15',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel type de tourisme est pratiqué dans les Alpes et les Pyrénées ?',
        options: [
          'Le tourisme de montagne (sports d\'hiver)',
          'Le tourisme balnéaire',
          'Le tourisme industriel',
          'Le tourisme spatial'
        ],
        answer: 'Le tourisme de montagne (sports d\'hiver)',
        explanation: 'Les Alpes et les Pyrénées attirent des millions de touristes pour les sports d\'hiver (ski, snowboard) et les activités de plein air en été.'
      },
      {
        id: 'qgeo2_16',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Vrai ou Faux : La reconversion du bassin minier du Nord-Pas-de-Calais a été facilitée par l\'inscription du site au patrimoine mondial de l\'UNESCO en 2012.',
        answer: true,
        explanation: 'Le bassin minier du Nord-Pas-de-Calais a été inscrit au patrimoine mondial de l\'UNESCO en 2012, reconnaissant son héritage industriel et soutenant sa reconversion culturelle et touristique.'
      },
      {
        id: 'qgeo2_17',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quels sont les principaux produits de l\'agriculture du Bassin parisien ?',
        options: [
          'Blé, maïs, betterave sucrière',
          'Oliviers, vignes, lavande',
          'Élevage bovin, lait, fromage',
          'Riz, coton, tabac'
        ],
        answer: 'Blé, maïs, betterave sucrière',
        explanation: 'Le Bassin parisien est une grande plaine fertile dédiée aux cultures céréalières et industrielles (blé, maïs, betterave sucrière, colza).'
      },
      {
        id: 'qgeo2_18',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Le quartier de La Défense à Paris est un quartier résidentiel de logements sociaux.',
        answer: false,
        explanation: 'La Défense est le premier quartier d\'affaires d\'Europe, regroupant des tours de bureaux, des sièges sociaux de grandes entreprises et des centres commerciaux. Ce n\'est pas un quartier résidentiel de logements sociaux.',
        trap: 'Attention à ne pas confondre La Défense (quartier d\'affaires) avec les grands ensembles de banlieue.'
      },
      {
        id: 'qgeo2_19',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quel est le rôle principal de la PAC pour les agriculteurs européens ?',
        options: [
          'Subventionner les agriculteurs et garantir la sécurité alimentaire',
          'Interdire les importations agricoles en Europe',
          'Imposer la culture biologique à tous les agriculteurs',
          'Financer la construction de logements ruraux'
        ],
        answer: 'Subventionner les agriculteurs et garantir la sécurité alimentaire',
        explanation: 'La PAC distribue des aides financières (subventions) aux agriculteurs pour maintenir leurs revenus, assurer la production alimentaire européenne et encourager des pratiques plus durables.'
      },
      {
        id: 'qgeo2_20',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Combien de visiteurs internationaux la France accueille-t-elle environ chaque année ?',
        options: ['30 millions', '60 millions', '90 millions', '120 millions'],
        answer: '90 millions',
        explanation: 'La France accueille environ 90 millions de visiteurs internationaux par an, ce qui en fait la première destination touristique au monde.',
        mnemonic: '90 millions = presque 1,5 fois la population française !'
      },
      {
        id: 'qgeo2_21',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : Les délocalisations sont exclusivement un phénomène négatif pour l\'économie française.',
        answer: false,
        explanation: 'Si les délocalisations entraînent des pertes d\'emplois dans certains secteurs, elles permettent aussi aux entreprises françaises de rester compétitives. Par ailleurs, la France attire également des investissements étrangers et connaît des relocalisations dans certains secteurs stratégiques.'
      },
      {
        id: 'qgeo2_22',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel organisme européen est à l\'origine de la PAC ?',
        options: [
          'L\'Union européenne (anciennement CEE)',
          'L\'ONU',
          'L\'OTAN',
          'Le Conseil de l\'Europe'
        ],
        answer: 'L\'Union européenne (anciennement CEE)',
        explanation: 'La PAC a été créée en 1962 par la Communauté économique européenne (CEE), devenue l\'Union européenne, pour soutenir et moderniser l\'agriculture des pays membres.'
      }
    ]
  },

  // ===========================
  // GEO 3 - Les espaces de faible densité en France
  // ===========================
  {
    id: 'geo3',
    slug: 'espaces-faible-densite',
    number: 3,
    subject: 'geographie',
    title: 'Les espaces de faible densité en France',
    subtitle: 'Entre contraintes, défis et nouvelles dynamiques',
    introduction: 'Les espaces de faible densité couvrent une part importante du territoire français mais abritent une population réduite. Ce sont les espaces ruraux isolés, les zones de montagne et la fameuse « diagonale du vide ». Longtemps considérés comme des espaces en déclin, ils connaissent aujourd\'hui de nouvelles dynamiques grâce au tourisme vert, au télétravail et à l\'arrivée des néo-ruraux.',
    courseContent: `
      <h2>I. Localiser et caractériser les espaces de faible densité</h2>
      <p>Les <strong>espaces de faible densité</strong> sont des territoires où la densité de population est inférieure à <strong>30 habitants par km²</strong> (la moyenne nationale française étant d\'environ 118 hab./km²). Ils représentent une part significative du territoire métropolitain.</p>
      <p>On les retrouve principalement le long de la <strong>« diagonale du vide »</strong> (ou « diagonale des faibles densités ») : un espace allant des Ardennes aux Pyrénées en passant par le Massif central, caractérisé par de faibles densités de population, un vieillissement démographique et un manque de services.</p>
      <p>Ces espaces comprennent :</p>
      <ul>
        <li><strong>Les espaces ruraux isolés</strong> : campagnes éloignées des grandes villes, avec une agriculture souvent extensive.</li>
        <li><strong>Les zones de montagne</strong> : Massif central, Pyrénées, Alpes intérieures, Corse intérieure, Jura. Les contraintes naturelles (altitude, pentes, froid) limitent l\'installation humaine.</li>
        <li><strong>Les espaces forestiers</strong> : Landes, Sologne, Ardennes.</li>
      </ul>

      <h2>II. Les défis des espaces de faible densité</h2>
      <h3>1. Le déclin démographique</h3>
      <p>Ces territoires sont marqués par un <strong>exode rural ancien</strong> et un vieillissement de la population. Les jeunes partent vers les villes pour les études et l\'emploi, laissant une population âgée.</p>

      <h3>2. Le manque de services</h3>
      <p>L\'éloignement des services de base constitue un défi majeur :</p>
      <ul>
        <li><strong>Les déserts médicaux</strong> : manque de médecins généralistes et spécialistes. Certains habitants doivent parcourir plus de 30 minutes pour consulter un médecin.</li>
        <li>La fermeture d\'écoles, de bureaux de poste, de commerces de proximité.</li>
        <li>La faible couverture numérique (zones blanches sans Internet ni téléphone mobile).</li>
      </ul>

      <h3>3. Les difficultés de mobilité</h3>
      <p>Les transports en commun sont rares ou inexistants. Les habitants sont fortement dépendants de la voiture, ce qui pose des problèmes pour les personnes âgées ou les ménages modestes.</p>

      <h2>III. Les atouts et les nouvelles dynamiques</h2>
      <h3>1. Le tourisme vert et le patrimoine naturel</h3>
      <p>Les espaces de faible densité possèdent des atouts majeurs :</p>
      <ul>
        <li>Des <strong>paysages préservés</strong> et un <strong>patrimoine naturel</strong> remarquable (parcs nationaux, parcs naturels régionaux).</li>
        <li>Le développement du <strong>tourisme vert</strong> (randonnée, gîtes ruraux, agritourisme, cyclotourisme).</li>
        <li>La valorisation des <strong>produits du terroir</strong> (AOC, AOP) : fromages, vins, charcuteries.</li>
      </ul>

      <h3>2. Les néo-ruraux et le télétravail</h3>
      <p>Les <strong>néo-ruraux</strong> sont des citadins qui choisissent de s\'installer à la campagne pour bénéficier d\'un meilleur cadre de vie et de prix immobiliers plus faibles. Ce phénomène a été renforcé par :</p>
      <ul>
        <li>Le développement du <strong>télétravail</strong>, accéléré par la pandémie de Covid-19 (2020).</li>
        <li>L\'amélioration de la <strong>couverture numérique</strong> (fibre optique, 4G/5G) dans certains territoires ruraux.</li>
        <li>La recherche d\'un <strong>cadre de vie plus sain</strong> et plus calme.</li>
      </ul>

      <h3>3. Les politiques d\'aménagement</h3>
      <p>L\'État et les collectivités territoriales mettent en place des dispositifs pour revitaliser ces espaces :</p>
      <ul>
        <li><strong>Les ZRR (Zones de Revitalisation Rurale)</strong> : exonérations fiscales pour les entreprises qui s\'installent dans ces zones.</li>
        <li><strong>Les Maisons France Services</strong> : regroupement de services publics (CAF, Pôle emploi, impôts) dans un même lieu en zone rurale.</li>
        <li>Le déploiement du <strong>très haut débit</strong> (fibre optique) pour réduire la fracture numérique.</li>
        <li>Les <strong>maisons de santé pluriprofessionnelles</strong> pour lutter contre les déserts médicaux.</li>
      </ul>

      <h2>IV. La diagonale du vide : un concept à nuancer</h2>
      <p>La <strong>« diagonale du vide »</strong> est un terme géographique qui désigne la bande de faible densité allant du nord-est au sud-ouest de la France. Cependant, ce concept est à nuancer car :</p>
      <ul>
        <li>Ces espaces ne sont pas totalement « vides » : ils abritent des communautés rurales vivantes et des activités économiques (agriculture, tourisme, artisanat).</li>
        <li>Certaines zones connaissent un regain d\'attractivité grâce aux néo-ruraux et au télétravail.</li>
        <li>Les géographes préfèrent aujourd\'hui parler de <strong>« diagonale des faibles densités »</strong> plutôt que de « diagonale du vide ».</li>
      </ul>
    `,
    summary: `
### Fiche Synthèse : Les espaces de faible densité en France

* **Définition** : territoires avec une densité < **30 hab./km²** (moyenne française ≈ 118 hab./km²).
* **La « diagonale du vide »** : bande de faibles densités des Ardennes aux Pyrénées, en passant par le Massif central.
  * Espaces ruraux isolés, zones de montagne, espaces forestiers.
* **Les défis** :
  * Déclin démographique : exode rural, vieillissement de la population.
  * **Déserts médicaux** : manque de médecins, éloignement des services.
  * Fermeture d'écoles, de commerces, de bureaux de poste.
  * Zones blanches (pas d'Internet/téléphone).
  * Dépendance à l'automobile.
* **Les atouts et dynamiques** :
  * **Tourisme vert** : randonnée, gîtes, agritourisme, parcs naturels.
  * Produits du terroir : AOC, AOP (fromages, vins).
  * **Néo-ruraux** : citadins qui s'installent à la campagne.
  * **Télétravail** : accéléré par le Covid-19, renforcé par la fibre optique.
* **Politiques publiques** :
  * **ZRR** (Zones de Revitalisation Rurale) : avantages fiscaux.
  * Maisons France Services : services publics regroupés.
  * Maisons de santé pluriprofessionnelles contre les déserts médicaux.
  * Déploiement du très haut débit (fibre).
    `,
    timeline: [
      { id: 'tgeo3_1', date: 'XIXe - XXe siècle', title: 'Exode rural', description: 'Départ massif des populations rurales vers les villes industrielles, vidant les campagnes françaises.', category: 'social' },
      { id: 'tgeo3_2', date: '1995', title: 'Création des ZRR', description: 'Les Zones de Revitalisation Rurale (ZRR) offrent des avantages fiscaux aux entreprises s\'installant dans les espaces ruraux en difficulté.', category: 'politique' },
      { id: 'tgeo3_3', date: '2019', title: 'Lancement des Maisons France Services', description: 'Création d\'espaces regroupant plusieurs services publics (CAF, Pôle emploi, impôts) dans les zones rurales et périurbaines.', category: 'politique' },
      { id: 'tgeo3_4', date: '2020', title: 'Accélération du télétravail', description: 'La pandémie de Covid-19 accélère le développement du télétravail, rendant l\'installation en zone rurale plus attractive.', category: 'social' }
    ],
    mindMap: [
      { id: 'mgeo3_root', label: 'Espaces de faible densité' },
      { id: 'mgeo3_b1', label: 'Localisation', parentId: 'mgeo3_root', description: 'Diagonale du vide (Ardennes → Pyrénées), zones de montagne, espaces forestiers, campagnes isolées.' },
      { id: 'mgeo3_b2', label: 'Défis', parentId: 'mgeo3_root', description: 'Exode rural, vieillissement, déserts médicaux, fermeture des services, zones blanches, dépendance automobile.' },
      { id: 'mgeo3_b3', label: 'Atouts', parentId: 'mgeo3_root', description: 'Tourisme vert, paysages préservés, produits du terroir (AOC/AOP), cadre de vie agréable, néo-ruraux.' },
      { id: 'mgeo3_b4', label: 'Politiques', parentId: 'mgeo3_root', description: 'ZRR, Maisons France Services, maisons de santé, déploiement du très haut débit numérique.' }
    ],
    characters: [],
    dates: [
      { date: 'XIXe - XXe siècle', event: 'Exode rural massif', explanation: 'Les populations rurales quittent les campagnes pour les villes, accélérant le déclin démographique des espaces ruraux.' },
      { date: '1995', event: 'Création des ZRR', explanation: 'Les Zones de Revitalisation Rurale proposent des exonérations fiscales pour attirer des entreprises dans les zones rurales fragiles.' },
      { date: '2000', event: 'Loi SRU', explanation: 'La loi Solidarité et Renouvellement Urbains aborde l\'aménagement du territoire et la lutte contre l\'étalement urbain.' },
      { date: '2019', event: 'Maisons France Services', explanation: 'Création de guichets uniques regroupant plusieurs services publics dans les zones rurales et périurbaines.' },
      { date: '2020', event: 'Essor du télétravail', explanation: 'La pandémie de Covid-19 accélère le télétravail, favorisant l\'installation de citadins en zone rurale.' },
      { date: '2022-2023', event: 'Plan France Très Haut Débit', explanation: 'Déploiement de la fibre optique dans les zones rurales pour réduire la fracture numérique.' }
    ],
    flashcards: [
      { id: 'fcgeo3_1', question: 'Qu\'est-ce que la « diagonale du vide » ?', answer: 'C\'est une bande de faibles densités qui traverse la France du nord-est (Ardennes) au sud-ouest (Pyrénées) en passant par le Massif central. On parle aussi de « diagonale des faibles densités ».' },
      { id: 'fcgeo3_2', question: 'Qu\'est-ce qu\'un désert médical ?', answer: 'C\'est un territoire où l\'offre de soins est insuffisante : trop peu de médecins pour la population, obligeant les habitants à faire de longs déplacements pour consulter.' },
      { id: 'fcgeo3_3', question: 'Qui sont les néo-ruraux ?', answer: 'Ce sont des citadins qui quittent la ville pour s\'installer à la campagne, attirés par un meilleur cadre de vie, des prix immobiliers plus bas et la possibilité de télétravailler.' },
      { id: 'fcgeo3_4', question: 'Qu\'est-ce qu\'une ZRR ?', answer: 'Une Zone de Revitalisation Rurale est un dispositif offrant des avantages fiscaux (exonérations d\'impôts) aux entreprises qui s\'installent dans des zones rurales en difficulté.' },
      { id: 'fcgeo3_5', question: 'Qu\'est-ce que le tourisme vert ?', answer: 'C\'est un tourisme en milieu rural ou naturel, axé sur les activités de plein air (randonnée, cyclotourisme), les gîtes ruraux, l\'agritourisme et la découverte du patrimoine naturel.' },
      { id: 'fcgeo3_6', question: 'Qu\'est-ce qu\'une zone blanche ?', answer: 'C\'est un territoire sans couverture par les réseaux de téléphonie mobile ou d\'Internet, créant une fracture numérique avec les zones urbaines.' },
      { id: 'fcgeo3_7', question: 'Qu\'est-ce qu\'une Maison France Services ?', answer: 'C\'est un lieu unique regroupant plusieurs services publics (CAF, Pôle emploi, impôts, CPAM) pour faciliter l\'accès des habitants des zones rurales aux démarches administratives.' },
      { id: 'fcgeo3_8', question: 'En dessous de quelle densité parle-t-on d\'espace de faible densité ?', answer: 'On parle d\'espace de faible densité quand la densité de population est inférieure à 30 habitants par km² (la moyenne française est d\'environ 118 hab./km²).' }
    ],
    anecdotes: [
      'Le Massif central, qui couvre un sixième du territoire français, abrite moins de 4 millions d\'habitants. Certains cantons du Cantal ou de la Lozère ont une densité inférieure à 10 hab./km², comparable à certaines régions de Scandinavie.',
      'Le terme « diagonale du vide » est critiqué par de nombreux géographes car il donne une image trop négative de ces territoires. En réalité, ces espaces ne sont pas « vides » : ils abritent des communautés rurales dynamiques, des activités agricoles, du tourisme et un patrimoine naturel remarquable.',
      'La pandémie de Covid-19 en 2020 a provoqué un véritable « exode urbain inversé » : de nombreux Parisiens et citadins ont quitté les grandes villes pour s\'installer dans des zones rurales, faisant exploser les ventes immobilières dans certains départements comme le Lot, le Gers ou la Creuse.'
    ],
    questions: [
      {
        id: 'qgeo3_1',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Comment appelle-t-on la bande de faibles densités qui traverse la France du nord-est au sud-ouest ?',
        options: [
          'La diagonale du vide',
          'Le couloir rhodanien',
          'L\'arc atlantique',
          'Le croissant fertile'
        ],
        answer: 'La diagonale du vide',
        explanation: 'La « diagonale du vide » (ou diagonale des faibles densités) s\'étend des Ardennes aux Pyrénées en passant par le Massif central. C\'est un espace caractérisé par de faibles densités de population.',
        mnemonic: 'Diagonale du vide = Ardennes → Massif central → Pyrénées.'
      },
      {
        id: 'qgeo3_2',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Un espace de faible densité a moins de 30 habitants par km².',
        answer: true,
        explanation: 'On considère un espace comme étant de faible densité quand sa densité de population est inférieure à 30 habitants par km². La moyenne nationale française est d\'environ 118 hab./km².'
      },
      {
        id: 'qgeo3_3',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Qu\'est-ce qu\'un désert médical ?',
        options: [
          'Un territoire où l\'offre de soins est insuffisante',
          'Un hôpital désaffecté',
          'Une région sans pharmacie',
          'Un pays sans système de santé'
        ],
        answer: 'Un territoire où l\'offre de soins est insuffisante',
        explanation: 'Un désert médical est un territoire où le nombre de médecins est trop faible par rapport à la population, obligeant les habitants à faire de longs trajets pour accéder aux soins.'
      },
      {
        id: 'qgeo3_4',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Les néo-ruraux sont des citadins qui s\'installent à la campagne.',
        answer: true,
        explanation: 'Les néo-ruraux sont des personnes d\'origine urbaine qui choisissent de quitter la ville pour vivre à la campagne, attirées par un cadre de vie plus agréable, des prix immobiliers plus bas et la possibilité de télétravailler.'
      },
      {
        id: 'qgeo3_5',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Que sont les ZRR ?',
        options: [
          'Des Zones de Revitalisation Rurale offrant des avantages fiscaux',
          'Des Zones de Réglementation Routière pour les poids lourds',
          'Des Zones de Réserve de la République pour l\'armée',
          'Des Zones de Recherche et de Recyclage'
        ],
        answer: 'Des Zones de Revitalisation Rurale offrant des avantages fiscaux',
        explanation: 'Les ZRR (Zones de Revitalisation Rurale) sont des dispositifs de l\'État offrant des exonérations fiscales et des aides pour encourager les entreprises à s\'installer dans les zones rurales en difficulté.'
      },
      {
        id: 'qgeo3_6',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : Les espaces de faible densité ne présentent aucun atout économique.',
        answer: false,
        explanation: 'Au contraire, les espaces de faible densité possèdent de nombreux atouts : tourisme vert, produits du terroir (AOC, AOP), paysages préservés, parcs naturels, cadre de vie attractif pour les néo-ruraux.',
        trap: 'On pourrait croire que ces espaces n\'ont que des handicaps, mais ils disposent aussi de ressources naturelles, agricoles et touristiques.'
      },
      {
        id: 'qgeo3_7',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quel phénomène a accéléré l\'installation de citadins en zone rurale en 2020 ?',
        options: [
          'La pandémie de Covid-19 et le développement du télétravail',
          'La baisse des prix de l\'immobilier en ville',
          'La fermeture de toutes les entreprises urbaines',
          'L\'obligation légale de vivre à la campagne'
        ],
        answer: 'La pandémie de Covid-19 et le développement du télétravail',
        explanation: 'La pandémie de Covid-19 en 2020 a accéléré le développement du télétravail, permettant à de nombreux citadins de quitter les grandes villes pour s\'installer à la campagne.'
      },
      {
        id: 'qgeo3_8',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Qu\'est-ce que le tourisme vert ?',
        options: [
          'Un tourisme en milieu rural ou naturel (randonnée, gîtes, agritourisme)',
          'Un tourisme dans les parcs d\'attractions',
          'Un tourisme exclusivement en forêt',
          'Un tourisme dans les centres commerciaux écologiques'
        ],
        answer: 'Un tourisme en milieu rural ou naturel (randonnée, gîtes, agritourisme)',
        explanation: 'Le tourisme vert est un tourisme axé sur la découverte des milieux ruraux et naturels : randonnée, cyclotourisme, gîtes ruraux, agritourisme, parcs naturels.'
      },
      {
        id: 'qgeo3_9',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : Les « zones blanches » sont des territoires sans couverture de téléphonie mobile ou d\'Internet.',
        answer: true,
        explanation: 'Les zones blanches sont des espaces non couverts par les réseaux de télécommunication (pas de téléphone mobile, pas d\'Internet). Elles constituent une « fracture numérique » avec les zones urbaines.'
      },
      {
        id: 'qgeo3_10',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Qu\'est-ce qu\'une Maison France Services ?',
        options: [
          'Un guichet unique regroupant plusieurs services publics en zone rurale',
          'Un supermarché subventionné par l\'État',
          'Un centre de formation professionnelle en ville',
          'Un logement social en campagne'
        ],
        answer: 'Un guichet unique regroupant plusieurs services publics en zone rurale',
        explanation: 'Les Maisons France Services regroupent dans un même lieu plusieurs services publics (CAF, Pôle emploi, impôts, CPAM, etc.) pour faciliter l\'accès des habitants des zones rurales aux démarches administratives.'
      },
      {
        id: 'qgeo3_11',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Vrai ou Faux : Le terme « diagonale du vide » est critiqué car ces espaces ne sont pas totalement vides.',
        answer: true,
        explanation: 'Les géographes préfèrent aujourd\'hui parler de « diagonale des faibles densités » car ces espaces ne sont pas vraiment vides : ils abritent des communautés rurales, des activités agricoles, du tourisme et un patrimoine naturel.'
      },
      {
        id: 'qgeo3_12',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quelle est la densité moyenne de la France métropolitaine ?',
        options: ['50 hab./km²', '80 hab./km²', '118 hab./km²', '200 hab./km²'],
        answer: '118 hab./km²',
        explanation: 'La densité moyenne de la France métropolitaine est d\'environ 118 habitants par km², ce qui masque de grandes disparités entre les zones urbaines très denses et les espaces de faible densité.',
        mnemonic: '118 hab./km² = moyenne France. En dessous de 30 = faible densité.'
      },
      {
        id: 'qgeo3_13',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel massif montagneux est au cœur de la diagonale du vide ?',
        options: ['Le Massif central', 'Les Alpes', 'Le Jura', 'Les Vosges'],
        answer: 'Le Massif central',
        explanation: 'Le Massif central, situé au centre de la France, est au cœur de la diagonale du vide. C\'est un espace de faible densité avec de vastes zones rurales et montagneuses peu peuplées.'
      },
      {
        id: 'qgeo3_14',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Vrai ou Faux : Le télétravail permet de vivre en zone rurale tout en travaillant pour une entreprise basée en ville.',
        answer: true,
        explanation: 'Le télétravail permet de travailler à distance depuis son domicile. Il rend possible l\'installation en zone rurale tout en conservant un emploi dans une entreprise située en ville, à condition de disposer d\'une bonne connexion Internet.'
      },
      {
        id: 'qgeo3_15',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quel type de label garantit l\'origine et la qualité des produits du terroir ?',
        options: [
          'AOC / AOP (Appellation d\'Origine Contrôlée / Protégée)',
          'ISO 9001',
          'CE (Conformité Européenne)',
          'NF (Norme Française)'
        ],
        answer: 'AOC / AOP (Appellation d\'Origine Contrôlée / Protégée)',
        explanation: 'Les labels AOC (Appellation d\'Origine Contrôlée) et AOP (Appellation d\'Origine Protégée) garantissent l\'origine géographique et la qualité des produits du terroir (fromages, vins, huiles, etc.).'
      },
      {
        id: 'qgeo3_16',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : Le déploiement de la fibre optique en zone rurale contribue à réduire la fracture numérique.',
        answer: true,
        explanation: 'Le Plan France Très Haut Débit vise à déployer la fibre optique sur tout le territoire, y compris dans les zones rurales, pour réduire la fracture numérique entre villes et campagnes.'
      },
      {
        id: 'qgeo3_17',
        type: 'qcm',
        difficulty: 'hard',
        question: 'Quelle structure est mise en place pour lutter contre les déserts médicaux en zone rurale ?',
        options: [
          'Les maisons de santé pluriprofessionnelles',
          'Les cliniques privées de luxe',
          'Les hôpitaux universitaires',
          'Les centres de recherche médicale'
        ],
        answer: 'Les maisons de santé pluriprofessionnelles',
        explanation: 'Les maisons de santé pluriprofessionnelles regroupent plusieurs professionnels de santé (médecins, infirmiers, kinés) dans un même lieu pour offrir une offre de soins de proximité en zone rurale.'
      },
      {
        id: 'qgeo3_18',
        type: 'qcm',
        difficulty: 'medium',
        question: 'Quel département français est souvent cité comme exemple d\'espace de très faible densité ?',
        options: ['La Lozère', 'Le Rhône', 'Les Bouches-du-Rhône', 'Le Nord'],
        answer: 'La Lozère',
        explanation: 'La Lozère est le département le moins peuplé de France métropolitaine avec environ 76 000 habitants et une densité d\'environ 15 hab./km².',
        mnemonic: 'Lozère = le département le moins peuplé de France.'
      },
      {
        id: 'qgeo3_19',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Vrai ou Faux : L\'exode rural est un phénomène récent apparu dans les années 2000.',
        answer: false,
        explanation: 'L\'exode rural est un phénomène ancien qui a débuté au XIXe siècle avec la révolution industrielle. Les paysans ont quitté massivement les campagnes pour travailler dans les usines des villes.',
        trap: 'L\'exode rural a commencé bien avant les années 2000. C\'est au contraire le mouvement inverse (néo-ruraux) qui est un phénomène plus récent.'
      },
      {
        id: 'qgeo3_20',
        type: 'qcm',
        difficulty: 'easy',
        question: 'Quel principal défi démographique touchent les espaces de faible densité ?',
        options: [
          'Le vieillissement de la population et le départ des jeunes',
          'La surpopulation et les embouteillages',
          'L\'immigration massive',
          'L\'excès de naissances'
        ],
        answer: 'Le vieillissement de la population et le départ des jeunes',
        explanation: 'Les espaces de faible densité sont marqués par le vieillissement de la population car les jeunes partent vers les villes pour les études et l\'emploi, ne laissant qu\'une population âgée.'
      },
      {
        id: 'qgeo3_21',
        type: 'boolean',
        difficulty: 'medium',
        question: 'Vrai ou Faux : Un parc naturel régional (PNR) peut contribuer à dynamiser un espace de faible densité.',
        answer: true,
        explanation: 'Les PNR (Parcs Naturels Régionaux) contribuent à dynamiser les espaces ruraux en valorisant le patrimoine naturel et culturel, en développant le tourisme vert et en favorisant les produits locaux.'
      },
      {
        id: 'qgeo3_22',
        type: 'qcm',
        difficulty: 'hard',
        question: 'En quelle année les Zones de Revitalisation Rurale (ZRR) ont-elles été créées ?',
        options: ['1985', '1995', '2005', '2015'],
        answer: '1995',
        explanation: 'Les ZRR ont été créées en 1995 par la loi d\'orientation pour l\'aménagement et le développement du territoire. Elles offrent des exonérations fiscales pour encourager l\'implantation d\'entreprises en zone rurale fragile.'
      }
    ]
  }
];
