import { Chapter } from '../../types';

export const mathCh11: Chapter = {
  id: `mch11`,
  slug: `theoreme-pythagore`,
  number: 11,
  subject: `mathematiques`,
  title: `Théorème de Pythagore`,
  subtitle: `Calculer une longueur dans un triangle rectangle, prouver (ou réfuter) qu'un triangle est rectangle, et appliquer le théorème aux distances et aux diagonales`,
  introduction: `Comment calculer la longueur d'une échelle appuyée contre un mur sans la mesurer ? Comment vérifier qu'un mur forme bien un angle droit avec le sol ? Depuis plus de 2500 ans, une même relation répond à ces questions : dans un triangle rectangle, le carré du plus grand côté est égal à la somme des carrés des deux autres. C'est le théorème de Pythagore, l'un des plus célèbres des mathématiques. Dans ce chapitre, tu vas apprendre à reconnaître un triangle rectangle et son hypoténuse, à calculer l'hypoténuse, à calculer un côté de l'angle droit, à utiliser la réciproque pour démontrer qu'un triangle est rectangle, à utiliser la contraposée pour prouver qu'il ne l'est pas, et enfin à appliquer tout cela à des situations concrètes (distances, diagonales).`,
  courseContent: `
<h2>1. Le triangle rectangle et l'hypoténuse</h2>
<p>Un <strong>triangle rectangle</strong> est un triangle qui possède un <strong>angle droit</strong> (un angle de 90°). Le sommet de cet angle droit est souvent noté A.</p>
<p>L'<strong>hypoténuse</strong> est le <strong>côté opposé à l'angle droit</strong>. C'est aussi le <strong>côté le plus long</strong> du triangle. Dans un triangle rectangle en A, l'hypoténuse est le côté [BC], car il « regarde » l'angle droit sans le toucher.</p>
<p>Les deux autres côtés, [AB] et [AC], sont appelés les <strong>côtés de l'angle droit</strong> : ce sont eux qui forment l'angle de 90°.</p>
<p class="attention">Pour ne pas se tromper : l'hypoténuse touche les deux extrémités du triangle mais jamais le sommet de l'angle droit.</p>

<h2>2. L'énoncé du théorème de Pythagore</h2>
<p><strong>Si</strong> un triangle ABC est <strong>rectangle en A</strong>,</p>
<p><strong>alors</strong> le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés :</p>
<p style="text-align:center"><strong>BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup></strong></p>
<p>L'hypoténuse BC est toujours <strong>seule de son côté</strong> de l'égalité, car c'est le plus grand côté. Ce théorème sert à <strong>calculer une longueur</strong> quand on connaît les deux autres.</p>
<p class="attention">Le triangle le plus connu est le triangle « 3 - 4 - 5 » : 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>. Un triangle de côtés 3, 4 et 5 est donc rectangle.</p>

<h2>3. Exemple résolu : calculer l'hypoténuse</h2>
<p><strong>Énoncé :</strong> ABC est un triangle rectangle en A avec AB = 3 cm et AC = 4 cm. Calculer BC.</p>
<p><strong>Étape 1 — hypothèse :</strong> le triangle ABC est rectangle en A, donc l'hypoténuse est [BC].</p>
<p><strong>Étape 2 — théorème :</strong> d'après le théorème de Pythagore, BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup>.</p>
<p><strong>Étape 3 — calcul :</strong> BC<sup>2</sup> = 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25.</p>
<p><strong>Étape 4 — racine carrée :</strong> BC = √25 = <strong>5 cm</strong>.</p>
<p>On reconnaît le célèbre triangle 3 - 4 - 5. D'autres triplets « parfaits » donnent des longueurs entières : 5 - 12 - 13, 6 - 8 - 10 et 8 - 15 - 17.</p>

<h2>4. Exemple résolu : calculer un côté de l'angle droit</h2>
<p>Quand on cherche un côté de l'angle droit (pas l'hypoténuse), on <strong>soustrait</strong> au lieu d'additionner.</p>
<p><strong>Énoncé :</strong> ABC est rectangle en A. On connaît l'hypoténuse BC = 13 cm et le côté AB = 5 cm. Calculer AC.</p>
<p><strong>Étape 1 — théorème :</strong> BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup>.</p>
<p><strong>Étape 2 — on isole AC<sup>2</sup> :</strong> AC<sup>2</sup> = BC<sup>2</sup> − AB<sup>2</sup>.</p>
<p><strong>Étape 3 — calcul :</strong> AC<sup>2</sup> = 13<sup>2</sup> − 5<sup>2</sup> = 169 − 25 = 144.</p>
<p><strong>Étape 4 — racine carrée :</strong> AC = √144 = <strong>12 cm</strong>.</p>
<p>On retrouve le triplet 5 - 12 - 13.</p>
<p class="attention">Règle d'or : pour l'hypoténuse on <strong>additionne</strong> les carrés ; pour un côté de l'angle droit on <strong>soustrait</strong> (grand carré moins petit carré).</p>

<h2>5. Valeurs exactes avec une racine</h2>
<p>Les longueurs ne « tombent » pas toujours juste. Quand le résultat n'est pas un carré parfait, on garde la <strong>valeur exacte</strong> sous la forme d'une racine carrée.</p>
<p><strong>Énoncé :</strong> ABC est rectangle en A avec AB = 2 cm et AC = 3 cm. Calculer BC.</p>
<p>BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup> = 2<sup>2</sup> + 3<sup>2</sup> = 4 + 9 = 13.</p>
<p>Donc BC = <strong>√13 cm</strong> (valeur exacte). À la calculatrice, BC ≈ 3,6 cm (valeur approchée arrondie au dixième).</p>
<p class="attention">On n'écrit jamais √13 = 3,6 : le symbole = relie une valeur exacte, et ≈ une valeur approchée.</p>

<h2>6. La réciproque et la contraposée</h2>
<p>La <strong>réciproque</strong> sert à <strong>démontrer qu'un triangle est rectangle</strong>. On part des longueurs et on vérifie l'égalité.</p>
<p><strong>Si</strong> dans un triangle ABC on a <strong>BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup></strong> (BC étant le plus grand côté),</p>
<p><strong>alors</strong> le triangle ABC est <strong>rectangle en A</strong>.</p>
<p><strong>Méthode :</strong> on calcule séparément le carré du plus grand côté (BC<sup>2</sup>) puis la somme des carrés des deux autres (AB<sup>2</sup> + AC<sup>2</sup>), et on compare.</p>
<p><strong>Exemple résolu :</strong> un triangle a pour côtés 6 cm, 8 cm et 10 cm. Est-il rectangle ? Le plus grand côté est 10.</p>
<ul>
<li>D'un côté : 10<sup>2</sup> = 100.</li>
<li>De l'autre : 6<sup>2</sup> + 8<sup>2</sup> = 36 + 64 = 100.</li>
</ul>
<p>Les deux résultats sont <strong>égaux</strong> : d'après la réciproque du théorème de Pythagore, le triangle est <strong>rectangle</strong> (l'angle droit est au sommet opposé au côté de 10).</p>
<p>La <strong>contraposée</strong> sert à l'inverse : <strong>si BC<sup>2</sup> ≠ AB<sup>2</sup> + AC<sup>2</sup>, alors le triangle n'est pas rectangle.</strong> Exemple : un triangle de côtés 4, 5 et 6. Plus grand côté 6 : 6<sup>2</sup> = 36, et 4<sup>2</sup> + 5<sup>2</sup> = 16 + 25 = 41. Comme 36 ≠ 41, le triangle <strong>n'est pas rectangle</strong>.</p>

<h2>7. Applications : distances et diagonales</h2>
<p>Le théorème de Pythagore permet de calculer une <strong>distance</strong> ou une <strong>diagonale</strong> dès qu'on peut faire apparaître un triangle rectangle.</p>
<p><strong>Exemple — diagonale d'un rectangle :</strong> un rectangle a une longueur de 8 cm et une largeur de 6 cm. Sa diagonale partage le rectangle en deux triangles rectangles. La diagonale d est l'hypoténuse : d<sup>2</sup> = 8<sup>2</sup> + 6<sup>2</sup> = 64 + 36 = 100, donc d = √100 = <strong>10 cm</strong> (triplet 6 - 8 - 10).</p>
<p><strong>Exemple — échelle contre un mur :</strong> une échelle de 5 m est appuyée contre un mur vertical ; son pied est à 3 m du mur. À quelle hauteur h touche-t-elle le mur ? L'échelle est l'hypoténuse : 5<sup>2</sup> = 3<sup>2</sup> + h<sup>2</sup>, donc h<sup>2</sup> = 25 − 9 = 16 et h = √16 = <strong>4 m</strong>.</p>
`,
  summary: `Un **triangle rectangle** possède un **angle droit**. Le côté opposé à cet angle est l'**hypoténuse** : c'est le **côté le plus long**. Dans un triangle rectangle en A, l'hypoténuse est [BC].

Le **théorème de Pythagore** dit : si ABC est rectangle en A, alors **BC² = AB² + AC²**. L'hypoténuse (BC) est toujours seule de son côté. Pour **calculer l'hypoténuse**, on **additionne** les carrés puis on prend la racine carrée. Pour **calculer un côté de l'angle droit**, on **soustrait** (grand carré moins petit carré) avant la racine.

Quand le résultat n'est pas un carré parfait, on garde la **valeur exacte** sous forme de racine (ex : √13), et on n'écrit ≈ que pour la valeur approchée.

La **réciproque** permet de **démontrer qu'un triangle est rectangle** : on compare BC² avec AB² + AC² (BC = plus grand côté) ; s'ils sont **égaux**, le triangle est rectangle. La **contraposée** dit l'inverse : si **BC² ≠ AB² + AC²**, le triangle **n'est pas rectangle**.

Triplets utiles à connaître : **3-4-5**, **5-12-13**, **6-8-10**, **8-15-17**. Le théorème s'applique partout où l'on peut tracer un triangle rectangle : **diagonales** et **distances**.`,
  timeline: [
    {
      id: `mch11-t1`,
      date: `vers -1800`,
      title: `Les Babyloniens connaissent des triplets`,
      description: `Bien avant Pythagore, les scribes babyloniens (tablette Plimpton 322) utilisaient déjà des triplets de nombres comme 3-4-5 pour construire des angles droits.`,
    },
    {
      id: `mch11-t2`,
      date: `vers -550`,
      title: `Pythagore et son école`,
      description: `Pythagore de Samos fonde une école où la relation entre les côtés du triangle rectangle est étudiée et, selon la tradition, démontrée. Le théorème prend son nom.`,
    },
    {
      id: `mch11-t3`,
      date: `vers -300`,
      title: `Euclide démontre le théorème`,
      description: `Dans les Éléments, Euclide donne une démonstration rigoureuse du théorème (proposition I.47) ainsi que de sa réciproque (I.48).`,
    },
    {
      id: `mch11-t4`,
      date: `Aujourd'hui`,
      title: `Du GPS au bâtiment`,
      description: `Le théorème sert à calculer des distances (cartes, GPS, écrans), à vérifier des angles droits sur un chantier et dans d'innombrables applications techniques.`,
    },
  ],
  mindMap: [
    { id: `mch11-m0`, label: `Théorème de Pythagore` },
    { id: `mch11-m1`, label: `Triangle rectangle`, description: `Un angle droit, hypoténuse = côté le plus long`, parentId: `mch11-m0` },
    { id: `mch11-m2`, label: `Le théorème`, description: `Rectangle en A ⇒ BC² = AB² + AC²`, parentId: `mch11-m0` },
    { id: `mch11-m3`, label: `Calculer l'hypoténuse`, description: `On additionne les carrés puis racine`, parentId: `mch11-m0` },
    { id: `mch11-m4`, label: `Calculer un côté`, description: `On soustrait les carrés puis racine`, parentId: `mch11-m0` },
    { id: `mch11-m5`, label: `Réciproque`, description: `BC² = AB² + AC² ⇒ rectangle`, parentId: `mch11-m0` },
    { id: `mch11-m6`, label: `Contraposée`, description: `BC² ≠ AB² + AC² ⇒ non rectangle`, parentId: `mch11-m0` },
    { id: `mch11-m7`, label: `Applications`, description: `Distances, diagonales, triplets`, parentId: `mch11-m0` },
  ],
  characters: [
    {
      id: `mch11-c1`,
      name: `Pythagore de Samos`,
      dates: `vers -580 / -495`,
      role: `Mathématicien et philosophe grec`,
      importance: `Fondateur de l'école pythagoricienne. Le théorème reliant les côtés du triangle rectangle porte son nom, même si la relation était déjà connue empiriquement avant lui.`,
    },
    {
      id: `mch11-c2`,
      name: `Euclide`,
      dates: `vers -325 / -265`,
      role: `Mathématicien grec d'Alexandrie`,
      importance: `Auteur des Éléments, il donne la première démonstration écrite rigoureuse du théorème de Pythagore et de sa réciproque, fondant la géométrie déductive.`,
    },
  ],
  dates: [
    { date: `Théorème direct`, event: `BC² = AB² + AC²`, explanation: `Si ABC est rectangle en A, le carré de l'hypoténuse égale la somme des carrés des deux autres côtés.` },
    { date: `Hypoténuse`, event: `Côté opposé à l'angle droit`, explanation: `C'est le côté le plus long du triangle ; il est toujours seul dans le membre BC² de l'égalité.` },
    { date: `Calcul de l'hypoténuse`, event: `BC = √(AB² + AC²)`, explanation: `On additionne les carrés des deux côtés de l'angle droit puis on prend la racine carrée.` },
    { date: `Calcul d'un côté`, event: `AC = √(BC² − AB²)`, explanation: `Pour un côté de l'angle droit, on soustrait le carré du côté connu au carré de l'hypoténuse.` },
    { date: `Réciproque`, event: `BC² = AB² + AC² ⇒ rectangle en A`, explanation: `Sert à démontrer qu'un triangle est rectangle en comparant les carrés.` },
    { date: `Contraposée`, event: `BC² ≠ AB² + AC² ⇒ non rectangle`, explanation: `Sert à démontrer qu'un triangle n'est pas rectangle.` },
    { date: `Triplet de base`, event: `3² + 4² = 5²`, explanation: `Le triangle 3-4-5 est le plus simple des triangles rectangles à côtés entiers.` },
    { date: `Autres triplets`, event: `5-12-13, 6-8-10, 8-15-17`, explanation: `Triplets pythagoriciens à connaître pour reconnaître vite un triangle rectangle.` },
  ],
  flashcards: [
    { id: `mch11-f1`, question: `Qu'est-ce que l'hypoténuse ?`, answer: `Le côté opposé à l'angle droit ; c'est le côté le plus long du triangle rectangle.`, category: `Vocabulaire` },
    { id: `mch11-f2`, question: `Énonce le théorème de Pythagore.`, answer: `Si ABC est rectangle en A, alors BC² = AB² + AC².`, category: `Théorème` },
    { id: `mch11-f3`, question: `Comment calcule-t-on l'hypoténuse ?`, answer: `On additionne les carrés des deux côtés de l'angle droit, puis on prend la racine carrée.`, category: `Méthode` },
    { id: `mch11-f4`, question: `Comment calcule-t-on un côté de l'angle droit ?`, answer: `On soustrait : grand carré (hypoténuse) moins petit carré, puis racine carrée.`, category: `Méthode` },
    { id: `mch11-f5`, question: `À quoi sert la réciproque du théorème de Pythagore ?`, answer: `À démontrer qu'un triangle est rectangle.`, category: `Réciproque` },
    { id: `mch11-f6`, question: `À quoi sert la contraposée ?`, answer: `À démontrer qu'un triangle n'est pas rectangle (quand BC² ≠ AB² + AC²).`, category: `Réciproque` },
    { id: `mch11-f7`, question: `Comment applique-t-on la réciproque concrètement ?`, answer: `On calcule à part le carré du plus grand côté et la somme des carrés des deux autres, puis on compare.`, category: `Méthode` },
    { id: `mch11-f8`, question: `Cite le plus simple des triplets pythagoriciens.`, answer: `3 - 4 - 5 (car 3² + 4² = 9 + 16 = 25 = 5²).`, category: `Triplets` },
    { id: `mch11-f9`, question: `Cite trois autres triplets pythagoriciens utiles.`, answer: `5-12-13, 6-8-10 et 8-15-17.`, category: `Triplets` },
    { id: `mch11-f10`, question: `Que fait-on si la longueur n'est pas un carré parfait ?`, answer: `On garde la valeur exacte sous forme de racine (ex : √13) et on donne une valeur approchée avec ≈.`, category: `Méthode` },
    { id: `mch11-f11`, question: `Dans BC² = AB² + AC², quel côté est l'hypoténuse ?`, answer: `BC : il est seul de son côté et c'est le plus grand côté.`, category: `Théorème` },
    { id: `mch11-f12`, question: `Un triangle a pour côtés 6, 8 et 10 : est-il rectangle ?`, answer: `Oui : 6² + 8² = 100 = 10², donc d'après la réciproque il est rectangle.`, category: `Réciproque` },
  ],
  questions: [
    {
      id: `mch11-q1`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Dans un triangle rectangle, comment appelle-t-on le côté opposé à l'angle droit ?`,
      options: [`L'hypoténuse`, `La hauteur`, `La médiane`, `La bissectrice`],
      answer: `L'hypoténuse`,
      explanation: `L'hypoténuse est le côté opposé à l'angle droit ; c'est aussi le côté le plus long.`,
      mnemonic: `Hypoténuse = le plus long, face à l'angle droit.`,
    },
    {
      id: `mch11-q2`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Dans un triangle rectangle, l'hypoténuse est toujours le côté le plus long.`,
      answer: true,
      explanation: `Le côté opposé à l'angle droit (90°) est toujours le plus grand des trois côtés.`,
    },
    {
      id: `mch11-q3`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Le triangle ABC est rectangle en A. Quelle égalité traduit le théorème de Pythagore ?`,
      options: [`BC² = AB² + AC²`, `AB² = BC² + AC²`, `AC² = AB² + BC²`, `BC = AB + AC`],
      answer: `BC² = AB² + AC²`,
      explanation: `L'hypoténuse [BC] est opposée à l'angle droit en A : son carré est la somme des carrés des deux autres côtés.`,
      trap: `L'hypoténuse (BC) doit être seule de son côté de l'égalité.`,
    },
    {
      id: `mch11-q4`,
      type: `trous`,
      difficulty: `easy`,
      question: `Pour calculer l'hypoténuse, on [additionne] les carrés des côtés de l'angle droit puis on prend la [racine] carrée.`,
      answer: [`additionne`, `racine`],
      explanation: `BC² = AB² + AC², donc BC = √(AB² + AC²).`,
      mnemonic: `Hypoténuse → on additionne ; côté → on soustrait.`,
    },
    {
      id: `mch11-q5`,
      type: `qcm`,
      difficulty: `easy`,
      question: `ABC est rectangle en A avec AB = 3 cm et AC = 4 cm. Combien vaut l'hypoténuse BC ?`,
      options: [`5 cm`, `7 cm`, `25 cm`, `12 cm`],
      answer: `5 cm`,
      explanation: `BC² = 3² + 4² = 9 + 16 = 25, donc BC = √25 = 5 cm. C'est le triplet 3-4-5.`,
    },
    {
      id: `mch11-q6`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Un triangle dont les côtés mesurent 5, 12 et 13 est un triangle rectangle.`,
      answer: true,
      explanation: `5² + 12² = 25 + 144 = 169 = 13². D'après la réciproque, le triangle est rectangle.`,
    },
    {
      id: `mch11-q7`,
      type: `qcm`,
      difficulty: `medium`,
      question: `ABC est rectangle en A. L'hypoténuse BC = 13 cm et AB = 5 cm. Combien vaut AC ?`,
      options: [`12 cm`, `8 cm`, `18 cm`, `√194 cm`],
      answer: `12 cm`,
      explanation: `AC² = BC² − AB² = 13² − 5² = 169 − 25 = 144, donc AC = √144 = 12 cm.`,
      trap: `Ici on cherche un côté de l'angle droit : on soustrait, on n'additionne pas.`,
    },
    {
      id: `mch11-q8`,
      type: `relier`,
      difficulty: `medium`,
      question: `Relie chaque triangle rectangle à la longueur de son hypoténuse.`,
      options: [`5`, `10`, `13`, `17`],
      answer: { 'Côtés 3 et 4': '5', 'Côtés 6 et 8': '10', 'Côtés 5 et 12': '13', 'Côtés 8 et 15': '17' },
      explanation: `Triplets pythagoriciens : 3-4-5, 6-8-10, 5-12-13 et 8-15-17. L'hypoténuse est toujours le plus grand nombre.`,
    },
    {
      id: `mch11-q9`,
      type: `trous`,
      difficulty: `medium`,
      question: `La [réciproque] du théorème de Pythagore sert à démontrer qu'un triangle est [rectangle].`,
      answer: [`réciproque`, `rectangle`],
      explanation: `On compare le carré du plus grand côté avec la somme des carrés des deux autres ; s'ils sont égaux, le triangle est rectangle.`,
    },
    {
      id: `mch11-q10`,
      type: `qcm`,
      difficulty: `medium`,
      question: `ABC est rectangle en A avec AB = 2 cm et AC = 3 cm. Quelle est la valeur exacte de BC ?`,
      options: [`√13 cm`, `5 cm`, `√5 cm`, `13 cm`],
      answer: `√13 cm`,
      explanation: `BC² = 2² + 3² = 4 + 9 = 13. Comme 13 n'est pas un carré parfait, la valeur exacte est BC = √13 cm.`,
      trap: `On ne donne pas 3,6 cm comme valeur exacte : √13 ≈ 3,6 seulement.`,
    },
    {
      id: `mch11-q11`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Un triangle a pour côtés 4 cm, 5 cm et 6 cm. Est-il rectangle ?`,
      options: [`Non, car 6² ≠ 4² + 5²`, `Oui, car 6² = 4² + 5²`, `Oui, car les côtés sont des entiers`, `On ne peut pas savoir`],
      answer: `Non, car 6² ≠ 4² + 5²`,
      explanation: `6² = 36 et 4² + 5² = 16 + 25 = 41. Comme 36 ≠ 41, d'après la contraposée le triangle n'est pas rectangle.`,
      trap: `Il faut toujours prendre le carré du PLUS GRAND côté d'un côté et la somme des deux autres de l'autre.`,
    },
    {
      id: `mch11-q12`,
      type: `ordonner`,
      difficulty: `hard`,
      question: `Remets dans l'ordre les étapes pour démontrer qu'un triangle est rectangle avec la réciproque.`,
      options: [
        `J'identifie le plus grand côté (futur hypoténuse)`,
        `Je calcule à part le carré du plus grand côté`,
        `Je calcule à part la somme des carrés des deux autres côtés`,
        `Je compare les deux résultats et je conclus`,
      ],
      answer: [0, 1, 2, 3],
      explanation: `On repère le plus grand côté, on calcule séparément les deux membres, puis on compare pour conclure.`,
    },
    {
      id: `mch11-q13`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Un rectangle a une longueur de 8 cm et une largeur de 6 cm. Quelle est la longueur de sa diagonale ?`,
      options: [`10 cm`, `14 cm`, `48 cm`, `√14 cm`],
      answer: `10 cm`,
      explanation: `La diagonale est l'hypoténuse d'un triangle rectangle : d² = 8² + 6² = 64 + 36 = 100, donc d = √100 = 10 cm.`,
      trap: `La diagonale n'est pas la somme 8 + 6 = 14 : il faut passer par les carrés.`,
    },
    {
      id: `mch11-q14`,
      type: `boolean`,
      difficulty: `hard`,
      question: `Pour calculer un côté de l'angle droit, on additionne le carré de l'hypoténuse et le carré de l'autre côté.`,
      answer: false,
      explanation: `On soustrait : AC² = BC² − AB². On n'additionne que pour trouver l'hypoténuse.`,
      trap: `Additionner ici donnerait un résultat plus grand que l'hypoténuse, ce qui est impossible.`,
    },
    {
      id: `mch11-q15`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Une échelle de 5 m a son pied posé à 3 m d'un mur vertical. À quelle hauteur touche-t-elle le mur ?`,
      options: [`4 m`, `2 m`, `√34 m`, `8 m`],
      answer: `4 m`,
      explanation: `L'échelle est l'hypoténuse : 5² = 3² + h², donc h² = 25 − 9 = 16 et h = √16 = 4 m.`,
      trap: `L'échelle (5 m) est l'hypoténuse, donc on soustrait pour trouver la hauteur.`,
    },
    {
      id: `mch11-q16`,
      type: `brevet`,
      difficulty: `expert`,
      question: `ABC est un triangle rectangle en A avec AB = 6 cm et BC = 7,5 cm. Rédige le calcul de la longueur AC.`,
      answer: `Le triangle ABC est rectangle en A, donc [BC] est l'hypoténuse. D'après le théorème de Pythagore : BC² = AB² + AC². On isole AC² : AC² = BC² − AB² = 7,5² − 6² = 56,25 − 36 = 20,25. Donc AC = √20,25 = 4,5 cm.`,
      explanation: `On énonce l'hypothèse (rectangle en A), le théorème, on isole AC² puis on calcule : AC² = 56,25 − 36 = 20,25 et AC = √20,25 = 4,5 cm.`,
    },
    {
      id: `mch11-q17`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Un triangle RST a pour côtés RS = 9 cm, RT = 12 cm et ST = 15 cm. Montre, en rédigeant, que ce triangle est rectangle et précise en quel sommet.`,
      answer: `Le plus grand côté est [ST] = 15 cm. On calcule séparément : ST² = 15² = 225, et RS² + RT² = 9² + 12² = 81 + 144 = 225. Comme ST² = RS² + RT², d'après la réciproque du théorème de Pythagore, le triangle RST est rectangle en R (sommet opposé au plus grand côté ST).`,
      explanation: `On identifie le plus grand côté (ST = 15), on calcule les deux membres (225 et 225), ils sont égaux donc le triangle est rectangle en R, sommet opposé à ST.`,
    },
    {
      id: `mch11-q18`,
      type: `trous`,
      difficulty: `expert`,
      question: `Dans un triangle rectangle, BC² = AB² + AC². Si AB = 8 et AC = 15, alors BC² = [289] et BC = [17].`,
      answer: [`289`, `17`],
      explanation: `8² + 15² = 64 + 225 = 289, et √289 = 17. C'est le triplet 8-15-17.`,
      mnemonic: `8-15-17 est un triplet pythagoricien à mémoriser.`,
    },
    {
      id: `mch11-q19`,
      type: `qcm`,
      difficulty: `expert`,
      question: `On veut vérifier qu'un mur forme un angle droit avec le sol. On mesure 60 cm sur le sol, 80 cm sur le mur et 1 m entre les deux extrémités. L'angle est-il droit ?`,
      options: [`Oui, car 100² = 60² + 80²`, `Non, car 100² ≠ 60² + 80²`, `Oui, mais seulement si le mur est lisse`, `On ne peut pas conclure`],
      answer: `Oui, car 100² = 60² + 80²`,
      explanation: `En cm : 100² = 10000 et 60² + 80² = 3600 + 6400 = 10000. Les deux sont égaux, donc d'après la réciproque l'angle est droit (triplet 6-8-10).`,
      trap: `Il faut convertir le 1 m en 100 cm pour comparer avec les mêmes unités.`,
    },
    {
      id: `mch11-q20`,
      type: `personnage`,
      difficulty: `easy`,
      question: `Quel mathématicien grec, fondateur d'une école célèbre, a donné son nom au théorème reliant les côtés du triangle rectangle ?`,
      options: [`Pythagore de Samos`, `Thalès de Milet`, `Euclide`, `Archimède`],
      answer: `Pythagore de Samos`,
      explanation: `Le théorème porte le nom de Pythagore de Samos, même si la relation 3-4-5 était connue bien avant lui.`,
    },
  ],
  anecdotes: [
    `Plus de mille ans avant Pythagore, les Égyptiens utilisaient une corde à 13 nœuds formant 12 intervalles égaux : tendue en triangle 3-4-5, elle créait un angle droit parfait pour construire les pyramides et délimiter les champs après les crues du Nil.`,
    `Le théorème de Pythagore est l'un des plus démontrés de toutes les mathématiques : on en compte plus de 350 démonstrations différentes, dont une attribuée au président américain James Garfield en 1876, avant qu'il ne devienne président.`,
    `Selon la légende, Pythagore aurait été si heureux de sa découverte qu'il aurait sacrifié des bœufs aux dieux : on parle parfois en plaisantant de « l'hécatombe de Pythagore », même si rien ne prouve qu'il ait vraiment été le premier à démontrer le théorème.`,
  ],
  pitfalls: `Repère bien l'hypoténuse (le plus grand côté, opposé à l'angle droit) et garde-la seule dans BC² ; pour trouver l'hypoténuse on ADDITIONNE les carrés, pour un côté de l'angle droit on SOUSTRAIT (grand carré moins petit carré).`,
};
