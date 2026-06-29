import { Chapter } from '../../types';

export const mathCh1: Chapter = {
  id: `mch1`,
  slug: `nombres-premiers-arithmetique`,
  number: 1,
  subject: `mathematiques`,
  title: `Arithmétique : nombres premiers et PGCD`,
  subtitle: `Divisibilité, décomposition en facteurs premiers, PGCD et fractions irréductibles`,
  introduction: `L'arithmétique est la science des nombres entiers. Comprendre la divisibilité, reconnaître un nombre premier et calculer un PGCD sont des compétences essentielles pour le Brevet : elles permettent de simplifier des fractions, de résoudre des problèmes de partage et de raisonner sur les nombres. Ce chapitre te donne toutes les méthodes, avec les deux techniques de calcul du PGCD au programme : les soustractions successives et l'algorithme d'Euclide par divisions.`,

  courseContent: `
<h2>I. Divisibilité, diviseurs et multiples</h2>
<p>On dit qu'un entier <strong>a est divisible par</strong> un entier <strong>b</strong> (avec b ≠ 0) lorsque le reste de la division euclidienne de a par b est <strong>égal à 0</strong>. On dit alors que :</p>
<ul>
  <li><strong>b est un diviseur de a</strong> ;</li>
  <li><strong>a est un multiple de b</strong> ;</li>
  <li>il existe un entier k tel que a = b × k.</li>
</ul>
<p>Exemple : 36 = 4 × 9, donc 4 et 9 sont des diviseurs de 36, et 36 est un multiple de 4 et de 9.</p>
<p>Les diviseurs vont par paires. Pour trouver TOUS les diviseurs de 36, on les cherche par couples dont le produit vaut 36 :</p>
<table border="1" cellpadding="6" cellspacing="0">
  <tr><th>1 × 36</th><th>2 × 18</th><th>3 × 12</th><th>4 × 9</th><th>6 × 6</th></tr>
</table>
<p>Diviseurs de 36 : 1, 2, 3, 4, 6, 9, 12, 18, 36 (neuf diviseurs).</p>

<h2>II. Les critères de divisibilité</h2>
<p>Un critère de divisibilité permet de savoir, sans poser la division, si un nombre est divisible par un autre.</p>
<ul>
  <li><strong>Par 2</strong> : le nombre se termine par 0, 2, 4, 6 ou 8 (il est <em>pair</em>). Ex : 174.</li>
  <li><strong>Par 5</strong> : le nombre se termine par 0 ou 5. Ex : 245.</li>
  <li><strong>Par 10</strong> : le nombre se termine par 0. Ex : 320.</li>
  <li><strong>Par 3</strong> : la somme de ses chiffres est divisible par 3. Ex : etc. pour 261, 2 + 6 + 1 = 9, divisible par 3, donc 261 l'est aussi.</li>
  <li><strong>Par 9</strong> : la somme de ses chiffres est divisible par 9. Ex : 837, 8 + 3 + 7 = 18, divisible par 9, donc 837 l'est aussi.</li>
</ul>
<p>Attention : tout nombre divisible par 9 est aussi divisible par 3 (car si la somme des chiffres est divisible par 9, elle l'est aussi par 3), mais la réciproque est fausse : 12 est divisible par 3 mais pas par 9.</p>

<h2>III. Les nombres premiers</h2>
<p>Un <strong>nombre premier</strong> est un entier qui possède <strong>exactement deux diviseurs</strong> : 1 et lui-même.</p>
<ul>
  <li><strong>1 n'est pas premier</strong> (il n'a qu'un seul diviseur : lui-même).</li>
  <li><strong>2 est le seul nombre premier pair.</strong></li>
</ul>
<p>Les premiers nombres premiers à connaître : <strong>2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37...</strong></p>
<p>Le <strong>crible d'Ératosthène</strong> permet de les trouver : on écrit les entiers de 2 à n, puis on barre les multiples de 2 (sauf 2), de 3 (sauf 3), de 5, de 7... Les nombres non barrés sont les nombres premiers.</p>

<h2>IV. Décomposition en produit de facteurs premiers</h2>
<p>Tout entier supérieur ou égal à 2 peut s'écrire, de façon <strong>unique</strong>, comme un <strong>produit de facteurs premiers</strong>. On divise successivement par les nombres premiers, du plus petit au plus grand.</p>
<p><strong>Exemple résolu : décomposer 360.</strong></p>
<table border="1" cellpadding="6" cellspacing="0">
  <tr><td>360</td><td>÷ 2</td><td>= 180</td></tr>
  <tr><td>180</td><td>÷ 2</td><td>= 90</td></tr>
  <tr><td>90</td><td>÷ 2</td><td>= 45</td></tr>
  <tr><td>45</td><td>÷ 3</td><td>= 15</td></tr>
  <tr><td>15</td><td>÷ 3</td><td>= 5</td></tr>
  <tr><td>5</td><td>÷ 5</td><td>= 1</td></tr>
</table>
<p>Donc : 360 = 2 × 2 × 2 × 3 × 3 × 5 = <strong>2<sup>3</sup> × 3<sup>2</sup> × 5</strong>.</p>
<p>Vérification : 2<sup>3</sup> = 8, 3<sup>2</sup> = 9, et 8 × 9 × 5 = 72 × 5 = 360. ✔</p>

<h2>V. Le PGCD : deux méthodes</h2>
<p>Le <strong>PGCD</strong> de deux entiers est leur <strong>P</strong>lus <strong>G</strong>rand <strong>C</strong>ommun <strong>D</strong>iviseur : le plus grand nombre qui divise les deux à la fois.</p>

<h3>1. Méthode des soustractions successives</h3>
<p>Propriété : le PGCD de deux nombres est égal au PGCD du plus petit et de leur différence. On soustrait le plus petit du plus grand, jusqu'à obtenir deux nombres égaux : ce nombre est le PGCD.</p>
<p><strong>Exemple résolu : PGCD(48 ; 36).</strong></p>
<ol>
  <li>48 − 36 = 12 → on garde 36 et 12</li>
  <li>36 − 12 = 24 → on garde 24 et 12</li>
  <li>24 − 12 = 12 → on garde 12 et 12</li>
</ol>
<p>Les deux nombres sont égaux à 12, donc <strong>PGCD(48 ; 36) = 12</strong>.</p>

<h3>2. Algorithme d'Euclide (par divisions)</h3>
<p>Propriété : le PGCD de a et b est égal au PGCD de b et du reste r de la division de a par b. On recommence jusqu'à obtenir un reste nul : le <strong>dernier reste non nul</strong> est le PGCD.</p>
<p><strong>Exemple résolu : PGCD(252 ; 360).</strong></p>
<table border="1" cellpadding="6" cellspacing="0">
  <tr><th>Division</th><th>Reste</th></tr>
  <tr><td>360 = 252 × 1 + 108</td><td>108</td></tr>
  <tr><td>252 = 108 × 2 + 36</td><td>36</td></tr>
  <tr><td>108 = 36 × 3 + 0</td><td>0</td></tr>
</table>
<p>Le dernier reste non nul est 36, donc <strong>PGCD(252 ; 360) = 36</strong>.</p>

<h2>VI. Fractions irréductibles et nombres premiers entre eux</h2>
<p>Deux nombres sont <strong>premiers entre eux</strong> lorsque leur PGCD est égal à <strong>1</strong> (leur seul diviseur commun est 1). Exemple : 8 et 15 sont premiers entre eux, car PGCD(8 ; 15) = 1.</p>
<p>Une fraction est <strong>irréductible</strong> lorsque son numérateur et son dénominateur sont premiers entre eux : on ne peut plus la simplifier.</p>
<p>Pour rendre une fraction irréductible, on divise le numérateur et le dénominateur par leur PGCD.</p>
<p><strong>Exemple résolu : rendre <sup>252</sup>⁄<sub>360</sub> irréductible.</strong></p>
<p>On a calculé PGCD(252 ; 360) = 36. On divise en haut et en bas par 36 :</p>
<p style="text-align:center;"><sup>252</sup>⁄<sub>360</sub> = <sup>252 ÷ 36</sup>⁄<sub>360 ÷ 36</sub> = <strong><sup>7</sup>⁄<sub>10</sub></strong></p>
<p>Comme 7 et 10 sont premiers entre eux (PGCD = 1), la fraction <sup>7</sup>⁄<sub>10</sub> est bien irréductible.</p>
`,

  summary: `*Diviseur / multiple* : si a = b × k, alors b est un *diviseur* de a, et a est un *multiple* de b. La division de a par b tombe juste (reste 0).

*Critères de divisibilité* : par *2* (finit par 0,2,4,6,8), par *5* (finit par 0 ou 5), par *10* (finit par 0), par *3* (somme des chiffres divisible par 3), par *9* (somme des chiffres divisible par 9).

*Nombre premier* = exactement *deux diviseurs* (1 et lui-même). Premiers à connaître : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. *1 n'est pas premier* ; *2* est le seul premier pair.

*Décomposition en facteurs premiers* : on divise par les premiers du plus petit au plus grand. Ex : 360 = 2³ × 3² × 5. La décomposition est *unique*.

*PGCD* = Plus Grand Commun Diviseur. Deux méthodes : *soustractions successives* (on soustrait jusqu'à deux nombres égaux) et *algorithme d'Euclide* (on divise, le PGCD est le *dernier reste non nul*).

*Nombres premiers entre eux* : PGCD = *1*. Une fraction est *irréductible* quand numérateur et dénominateur sont premiers entre eux. Pour simplifier au maximum, on divise par le *PGCD*.`,

  timeline: [
    {
      id: `mch1-tl1`,
      date: `vers 300 av. J.-C.`,
      title: `Les Éléments d'Euclide`,
      description: `Euclide, à Alexandrie, démontre dans son ouvrage Les Éléments qu'il existe une infinité de nombres premiers et décrit l'algorithme de calcul du PGCD qui porte aujourd'hui son nom.`,
    },
    {
      id: `mch1-tl2`,
      date: `vers 240 av. J.-C.`,
      title: `Le crible d'Ératosthène`,
      description: `Ératosthène de Cyrène met au point une méthode simple pour lister tous les nombres premiers jusqu'à une limite donnée : le crible d'Ératosthène.`,
    },
    {
      id: `mch1-tl3`,
      date: `vers 1640`,
      title: `Les travaux de Fermat`,
      description: `Le mathématicien français Pierre de Fermat relance l'étude des nombres premiers et de la divisibilité, posant les bases de la théorie moderne des nombres.`,
    },
    {
      id: `mch1-tl4`,
      date: `1801`,
      title: `Gauss et l'unicité de la décomposition`,
      description: `Carl Friedrich Gauss publie les Disquisitiones Arithmeticae et établit rigoureusement que tout entier se décompose de manière unique en produit de facteurs premiers.`,
    },
    {
      id: `mch1-tl5`,
      date: `depuis 1977`,
      title: `Les nombres premiers et la cryptographie`,
      description: `La méthode de chiffrement RSA, qui protège les communications sur Internet, repose sur la difficulté de décomposer en facteurs premiers de très grands nombres.`,
    },
  ],

  mindMap: [
    {
      id: `mch1-mm-root`,
      label: `Arithmétique`,
      description: `Étude des nombres entiers : divisibilité, premiers et PGCD.`,
    },
    {
      id: `mch1-mm-1`,
      label: `Divisibilité`,
      description: `a = b × k : b divise a, a est multiple de b.`,
      parentId: `mch1-mm-root`,
    },
    {
      id: `mch1-mm-2`,
      label: `Critères`,
      description: `Par 2, 3, 5, 9, 10 sans poser la division.`,
      parentId: `mch1-mm-root`,
    },
    {
      id: `mch1-mm-3`,
      label: `Nombres premiers`,
      description: `Exactement deux diviseurs : 1 et lui-même.`,
      parentId: `mch1-mm-root`,
    },
    {
      id: `mch1-mm-4`,
      label: `Décomposition`,
      description: `Produit unique de facteurs premiers (ex : 360 = 2³ × 3² × 5).`,
      parentId: `mch1-mm-root`,
    },
    {
      id: `mch1-mm-5`,
      label: `PGCD`,
      description: `Soustractions successives ou algorithme d'Euclide.`,
      parentId: `mch1-mm-root`,
    },
    {
      id: `mch1-mm-6`,
      label: `Fractions irréductibles`,
      description: `On divise par le PGCD ; premiers entre eux si PGCD = 1.`,
      parentId: `mch1-mm-root`,
    },
  ],

  characters: [
    {
      id: `mch1-ch-euclide`,
      name: `Euclide`,
      dates: `vers 300 av. J.-C.`,
      role: `Mathématicien grec d'Alexandrie`,
      importance: `Auteur des Éléments, il a démontré l'infinité des nombres premiers et inventé l'algorithme de calcul du PGCD encore enseigné aujourd'hui.`,
    },
    {
      id: `mch1-ch-eratosthene`,
      name: `Ératosthène`,
      dates: `vers 276 – 194 av. J.-C.`,
      role: `Mathématicien et astronome grec`,
      importance: `Il a créé le crible d'Ératosthène, méthode simple pour trouver tous les nombres premiers jusqu'à une limite donnée. Il a aussi mesuré la circonférence de la Terre.`,
    },
    {
      id: `mch1-ch-gauss`,
      name: `Carl Friedrich Gauss`,
      dates: `1777 – 1855`,
      role: `Mathématicien allemand`,
      importance: `Surnommé le prince des mathématiciens, il a prouvé l'unicité de la décomposition en facteurs premiers, pierre angulaire de l'arithmétique.`,
    },
  ],

  dates: [
    {
      date: `Critère par 2`,
      event: `Le nombre se termine par 0, 2, 4, 6 ou 8`,
      explanation: `Pour reconnaître instantanément un nombre pair, divisible par 2.`,
    },
    {
      date: `Critère par 3`,
      event: `La somme des chiffres est divisible par 3`,
      explanation: `Ex : 261 → 2+6+1 = 9 divisible par 3, donc 261 l'est aussi.`,
    },
    {
      date: `Critère par 5`,
      event: `Le nombre se termine par 0 ou 5`,
      explanation: `Utile pour repérer vite un diviseur 5 dans un partage.`,
    },
    {
      date: `Critère par 9`,
      event: `La somme des chiffres est divisible par 9`,
      explanation: `Ex : 837 → 8+3+7 = 18 divisible par 9, donc 837 l'est aussi.`,
    },
    {
      date: `Critère par 10`,
      event: `Le nombre se termine par 0`,
      explanation: `Le plus simple : un seul chiffre des unités, le 0, à vérifier.`,
    },
    {
      date: `Nombre premier`,
      event: `Exactement deux diviseurs : 1 et lui-même`,
      explanation: `Pour reconnaître 2, 3, 5, 7, 11, 13... 1 n'est PAS premier.`,
    },
    {
      date: `Euclide`,
      event: `PGCD(a ; b) = dernier reste non nul des divisions`,
      explanation: `On divise a par b, puis b par le reste, jusqu'à un reste de 0.`,
    },
    {
      date: `Premiers entre eux`,
      event: `PGCD(a ; b) = 1`,
      explanation: `Condition pour qu'une fraction soit irréductible (plus simplifiable).`,
    },
    {
      date: `Fraction irréductible`,
      event: `On divise numérateur et dénominateur par leur PGCD`,
      explanation: `Méthode la plus rapide pour simplifier une fraction en une seule étape.`,
    },
  ],

  flashcards: [
    {
      id: `mch1-fc1`,
      question: `Que signifie « a est divisible par b » ?`,
      answer: `Le reste de la division de a par b est 0 ; il existe un entier k tel que a = b × k.`,
      category: `Divisibilité`,
    },
    {
      id: `mch1-fc2`,
      question: `Quel est le critère de divisibilité par 3 ?`,
      answer: `Un nombre est divisible par 3 si la somme de ses chiffres est divisible par 3.`,
      category: `Critères`,
    },
    {
      id: `mch1-fc3`,
      question: `Quel est le critère de divisibilité par 9 ?`,
      answer: `Un nombre est divisible par 9 si la somme de ses chiffres est divisible par 9.`,
      category: `Critères`,
    },
    {
      id: `mch1-fc4`,
      question: `Qu'est-ce qu'un nombre premier ?`,
      answer: `Un entier qui possède exactement deux diviseurs : 1 et lui-même.`,
      category: `Nombres premiers`,
    },
    {
      id: `mch1-fc5`,
      question: `Le nombre 1 est-il premier ?`,
      answer: `Non. 1 n'a qu'un seul diviseur (lui-même), donc il n'est pas premier.`,
      category: `Nombres premiers`,
    },
    {
      id: `mch1-fc6`,
      question: `Cite les nombres premiers inférieurs à 20.`,
      answer: `2, 3, 5, 7, 11, 13, 17, 19.`,
      category: `Nombres premiers`,
    },
    {
      id: `mch1-fc7`,
      question: `Décompose 84 en produit de facteurs premiers.`,
      answer: `84 = 2 × 2 × 3 × 7 = 2² × 3 × 7.`,
      category: `Décomposition`,
    },
    {
      id: `mch1-fc8`,
      question: `Que veut dire PGCD ?`,
      answer: `Plus Grand Commun Diviseur : le plus grand nombre qui divise les deux nombres à la fois.`,
      category: `PGCD`,
    },
    {
      id: `mch1-fc9`,
      question: `Comment trouve-t-on le PGCD avec l'algorithme d'Euclide ?`,
      answer: `On divise a par b, puis b par le reste, et ainsi de suite. Le PGCD est le dernier reste non nul.`,
      category: `PGCD`,
    },
    {
      id: `mch1-fc10`,
      question: `Que signifie « deux nombres premiers entre eux » ?`,
      answer: `Leur PGCD est égal à 1 : leur seul diviseur commun est 1.`,
      category: `Fractions`,
    },
    {
      id: `mch1-fc11`,
      question: `Comment rendre une fraction irréductible ?`,
      answer: `On divise le numérateur et le dénominateur par leur PGCD.`,
      category: `Fractions`,
    },
    {
      id: `mch1-fc12`,
      question: `Quel est le seul nombre premier pair ?`,
      answer: `Le nombre 2.`,
      category: `Nombres premiers`,
    },
  ],

  questions: [
    {
      id: `mch1-q1`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Parmi ces nombres, lequel est divisible par 5 ?`,
      options: [`124`, `237`, `345`, `412`],
      answer: `345`,
      explanation: `Un nombre est divisible par 5 s'il se termine par 0 ou 5. Seul 345 se termine par 5.`,
      mnemonic: `Par 5 : ça finit par 0 ou 5.`,
    },
    {
      id: `mch1-q2`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Le nombre 1 est un nombre premier.`,
      options: [`Vrai`, `Faux`],
      answer: false,
      explanation: `Un nombre premier a exactement deux diviseurs. Or 1 n'en a qu'un seul (lui-même), donc 1 n'est pas premier.`,
      trap: `On croit souvent que 1 est premier : c'est faux par définition.`,
    },
    {
      id: `mch1-q3`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Combien le nombre 7 a-t-il de diviseurs ?`,
      options: [`1`, `2`, `3`, `7`],
      answer: `2`,
      explanation: `7 est premier : ses seuls diviseurs sont 1 et 7, soit deux diviseurs.`,
    },
    {
      id: `mch1-q4`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Le nombre 261 est divisible par 3.`,
      options: [`Vrai`, `Faux`],
      answer: true,
      explanation: `2 + 6 + 1 = 9, et 9 est divisible par 3, donc 261 est divisible par 3 (261 = 3 × 87).`,
      mnemonic: `Par 3 : on additionne les chiffres.`,
    },
    {
      id: `mch1-q5`,
      type: `trous`,
      difficulty: `easy`,
      question: `Un nombre premier possède exactement [2] diviseurs : 1 et [lui-même].`,
      answer: [`2`, `lui-même`],
      explanation: `C'est la définition d'un nombre premier : exactement deux diviseurs, 1 et lui-même.`,
    },
    {
      id: `mch1-q6`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Quelle est la décomposition en facteurs premiers de 60 ?`,
      options: [`2 × 3 × 10`, `2² × 3 × 5`, `2 × 30`, `4 × 15`],
      answer: `2² × 3 × 5`,
      explanation: `60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5 = 2² × 3 × 5. Tous les facteurs sont premiers, c'est la bonne décomposition.`,
      trap: `2 × 3 × 10 contient 10 qui n'est pas premier : ce n'est pas une décomposition en facteurs premiers.`,
    },
    {
      id: `mch1-q7`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Quel est le PGCD de 24 et 36 ?`,
      options: [`6`, `8`, `12`, `72`],
      answer: `12`,
      explanation: `Diviseurs communs de 24 et 36 : 1, 2, 3, 4, 6, 12. Le plus grand est 12. (Euclide : 36 = 24×1 + 12 ; 24 = 12×2 + 0.)`,
      trap: `72 est le PPCM (plus petit commun multiple), pas le PGCD.`,
    },
    {
      id: `mch1-q8`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Les nombres 8 et 15 sont premiers entre eux.`,
      options: [`Vrai`, `Faux`],
      answer: true,
      explanation: `Diviseurs de 8 : 1, 2, 4, 8. Diviseurs de 15 : 1, 3, 5, 15. Leur seul diviseur commun est 1, donc PGCD = 1 : ils sont premiers entre eux.`,
    },
    {
      id: `mch1-q9`,
      type: `trous`,
      difficulty: `medium`,
      question: `La fraction 252/360 simplifiée par leur PGCD qui vaut [36] donne la fraction irréductible 7/[10].`,
      answer: [`36`, `10`],
      explanation: `PGCD(252 ; 360) = 36. On divise : 252 ÷ 36 = 7 et 360 ÷ 36 = 10. La fraction irréductible est 7/10.`,
    },
    {
      id: `mch1-q10`,
      type: `relier`,
      difficulty: `medium`,
      question: `Relie chaque nombre à sa décomposition en facteurs premiers.`,
      options: [`2² × 3`, `2 × 3 × 5`, `2³ × 3`, `3² × 5`],
      answer: {
        '12': `2² × 3`,
        '30': `2 × 3 × 5`,
        '24': `2³ × 3`,
        '45': `3² × 5`,
      },
      explanation: `12 = 4 × 3 = 2² × 3 ; 30 = 2 × 15 = 2 × 3 × 5 ; 24 = 8 × 3 = 2³ × 3 ; 45 = 9 × 5 = 3² × 5.`,
    },
    {
      id: `mch1-q11`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Parmi ces nombres, lequel est premier ?`,
      options: [`21`, `27`, `29`, `33`],
      answer: `29`,
      explanation: `21 = 3×7, 27 = 3×9, 33 = 3×11 sont composés. 29 n'est divisible par aucun premier inférieur à sa racine (≈5,4), donc 29 est premier.`,
    },
    {
      id: `mch1-q12`,
      type: `ordonner`,
      difficulty: `hard`,
      question: `Remets dans l'ordre les étapes de l'algorithme d'Euclide pour calculer PGCD(360 ; 252).`,
      options: [
        `108 = 36 × 3 + 0, donc le PGCD est 36`,
        `360 = 252 × 1 + 108`,
        `252 = 108 × 2 + 36`,
      ],
      answer: [1, 2, 0],
      explanation: `On commence par diviser le plus grand : 360 = 252×1 + 108 ; puis 252 = 108×2 + 36 ; puis 108 = 36×3 + 0. Le dernier reste non nul, 36, est le PGCD.`,
      mnemonic: `On divise toujours par le reste précédent, jusqu'à reste = 0.`,
    },
    {
      id: `mch1-q13`,
      type: `trous`,
      difficulty: `hard`,
      question: `Avec les soustractions successives pour PGCD(48 ; 36) : 48 − 36 = 12, puis 36 − 12 = [24], puis 24 − 12 = 12. Le PGCD vaut donc [12].`,
      answer: [`24`, `12`],
      explanation: `On soustrait jusqu'à obtenir deux nombres égaux. Ici on aboutit à 12 et 12, donc PGCD(48 ; 36) = 12.`,
      trap: `On s'arrête quand les deux nombres sont égaux : cette valeur commune (12) est le PGCD.`,
    },
    {
      id: `mch1-q14`,
      type: `qcm`,
      difficulty: `hard`,
      question: `On veut rendre la fraction 84/120 irréductible. Par quel nombre faut-il diviser le numérateur et le dénominateur ?`,
      options: [`6`, `12`, `2`, `4`],
      answer: `12`,
      explanation: `84 = 2² × 3 × 7 et 120 = 2³ × 3 × 5. Facteurs communs : 2² × 3 = 12. Donc PGCD = 12 et 84/120 = 7/10.`,
      trap: `Diviser par 6 ou 4 simplifie, mais pas au maximum : il faut diviser par le PGCD (12) pour obtenir une fraction irréductible.`,
    },
    {
      id: `mch1-q15`,
      type: `boolean`,
      difficulty: `hard`,
      question: `Tout nombre divisible par 9 est aussi divisible par 3.`,
      options: [`Vrai`, `Faux`],
      answer: true,
      explanation: `Si la somme des chiffres est divisible par 9, elle l'est forcément aussi par 3 (9 = 3 × 3). Donc tout multiple de 9 est multiple de 3. La réciproque, elle, est fausse.`,
      trap: `La réciproque est fausse : 12 est divisible par 3 mais pas par 9.`,
    },
    {
      id: `mch1-q16`,
      type: `brevet`,
      difficulty: `hard`,
      question: `Un fleuriste dispose de 252 roses et 360 tulipes. Il veut composer des bouquets identiques en utilisant toutes les fleurs. Quel est le nombre maximal de bouquets, et combien de roses et de tulipes par bouquet ?`,
      answer: `Le nombre maximal de bouquets est le PGCD(252 ; 360). Par l'algorithme d'Euclide : 360 = 252×1 + 108 ; 252 = 108×2 + 36 ; 108 = 36×3 + 0. Le PGCD est 36. On peut donc faire 36 bouquets. Chaque bouquet contient 252 ÷ 36 = 7 roses et 360 ÷ 36 = 10 tulipes.`,
      explanation: `Le « plus grand nombre de paquets identiques en utilisant tout » correspond toujours au PGCD. On divise ensuite chaque quantité par le PGCD pour le contenu d'un bouquet.`,
      mnemonic: `« Le plus grand nombre de paquets identiques » = PGCD.`,
    },
    {
      id: `mch1-q17`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Combien le nombre 360 = 2³ × 3² × 5 possède-t-il de diviseurs au total ?`,
      options: [`10`, `18`, `24`, `30`],
      answer: `24`,
      explanation: `On ajoute 1 à chaque exposant puis on multiplie : (3+1) × (2+1) × (1+1) = 4 × 3 × 2 = 24 diviseurs.`,
      mnemonic: `Nombre de diviseurs = produit des (exposants + 1).`,
    },
    {
      id: `mch1-q18`,
      type: `trous`,
      difficulty: `expert`,
      question: `Pour 504 = 2³ × 3² × 7 et 540 = 2² × 3³ × 5, le PGCD se calcule avec les facteurs communs aux plus petits exposants : 2² × 3² = [36].`,
      answer: [`36`],
      explanation: `Facteurs communs : 2 (exposant min 2) et 3 (exposant min 2). Donc PGCD = 2² × 3² = 4 × 9 = 36.`,
      trap: `On prend le PLUS PETIT exposant de chaque facteur commun pour le PGCD (le plus grand servirait au PPCM).`,
    },
    {
      id: `mch1-q19`,
      type: `qcm`,
      difficulty: `expert`,
      question: `La fraction 595/847 est-elle réductible ? (Indice : 595 = 5 × 7 × 17 et 847 = 7 × 11²)`,
      options: [
        `Oui, on peut diviser par 7`,
        `Non, elle est déjà irréductible`,
        `Oui, on peut diviser par 5`,
        `Oui, on peut diviser par 11`,
      ],
      answer: `Oui, on peut diviser par 7`,
      explanation: `Le seul facteur premier commun à 595 (5×7×17) et 847 (7×11²) est 7. Le PGCD vaut donc 7, et 595/847 = 85/121.`,
      trap: `5, 11 et 17 n'apparaissent que dans un seul des deux nombres : ils ne sont pas des diviseurs communs.`,
    },
    {
      id: `mch1-q20`,
      type: `boolean`,
      difficulty: `expert`,
      question: `Si deux nombres sont premiers entre eux, alors aucun des deux n'est forcément un nombre premier.`,
      options: [`Vrai`, `Faux`],
      answer: true,
      explanation: `Être premiers entre eux signifie seulement PGCD = 1. Par exemple 8 et 9 sont premiers entre eux, alors que ni 8 ni 9 ne sont des nombres premiers.`,
      trap: `Ne pas confondre « premiers entre eux » (PGCD = 1) et « nombres premiers » (deux diviseurs).`,
    },
  ],

  anecdotes: [
    `Il existe une infinité de nombres premiers : Euclide l'a démontré il y a plus de 2 300 ans, et c'est l'une des plus anciennes preuves mathématiques encore enseignées aujourd'hui.`,
    `Quand tu achètes en ligne, ta carte bancaire est protégée grâce aux nombres premiers : le chiffrement RSA utilise des nombres premiers de plusieurs centaines de chiffres, presque impossibles à décomposer.`,
    `Le plus grand nombre premier connu (découvert en 2024) possède plus de 41 millions de chiffres : il faudrait des milliers de pages pour seulement l'écrire en entier !`,
  ],

  pitfalls: `Erreurs fréquentes au Brevet : croire que 1 est premier ; confondre PGCD et PPCM ; oublier de prendre le DERNIER reste NON NUL dans l'algorithme d'Euclide ; ne pas simplifier une fraction jusqu'au bout (il faut diviser par le PGCD) ; et confondre « nombres premiers entre eux » (PGCD = 1) avec « nombres premiers ».`,
};
