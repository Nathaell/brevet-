import { Chapter } from '../../types';

export const mathCh5: Chapter = {
  id: `mch5`,
  slug: `racines-carrees`,
  number: 5,
  subject: `mathematiques`,
  title: `Racines carrées`,
  subtitle: `Comprendre √a, simplifier les racines et maîtriser leurs règles de calcul`,
  introduction: `La racine carrée est l'opération qui « défait » le carré : si on connaît l'aire d'un carré, la racine carrée donne la longueur de son côté. Apparue avec le théorème de Pythagore, elle a bouleversé les mathématiques grecques en révélant l'existence de nombres « impossibles » comme √2, qui ne s'écrit avec aucune fraction. Dans ce chapitre, tu vas apprendre à définir √a, à reconnaître les carrés parfaits, à simplifier une racine et à appliquer les règles de calcul sans tomber dans le piège classique √(a+b) ≠ √a + √b.`,
  courseContent: `
<h2>1. Définition de la racine carrée</h2>
<p>Soit <em>a</em> un nombre positif (a ≥ 0). La <strong>racine carrée de a</strong>, notée <strong>√a</strong>, est le <strong>nombre positif</strong> dont le carré est égal à <em>a</em>.</p>
<p>Autrement dit : √a est le nombre positif tel que (√a)<sup>2</sup> = a.</p>
<ul>
<li>√9 = 3 car 3 ≥ 0 et 3<sup>2</sup> = 9</li>
<li>√0 = 0 et √1 = 1</li>
<li><strong>On ne peut pas calculer la racine carrée d'un nombre négatif</strong> : √(−4) n'existe pas, car aucun carré n'est négatif.</li>
</ul>
<p class="attention">Attention : √a est toujours <strong>positif</strong>. Par exemple √25 = 5 (et non −5), même si (−5)<sup>2</sup> = 25 aussi.</p>

<h2>2. Les carrés parfaits</h2>
<p>Un <strong>carré parfait</strong> est le carré d'un nombre entier. Leur racine carrée tombe « juste » (c'est un entier). Il faut connaître par cœur les premiers :</p>
<table>
<tr><th>n</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th></tr>
<tr><th>n<sup>2</sup></th><td>1</td><td>4</td><td>9</td><td>16</td><td>25</td><td>36</td><td>49</td><td>64</td><td>81</td><td>100</td><td>121</td><td>144</td></tr>
</table>
<p>Ainsi √49 = 7, √100 = 10, √144 = 12. Reconnaître ces carrés est la clé pour simplifier les racines.</p>

<h2>3. Les deux égalités fondamentales</h2>
<p>Pour tout nombre <em>a</em> ≥ 0 :</p>
<ul>
<li><strong>(√a)<sup>2</sup> = a</strong> : élever une racine au carré « efface » la racine. Ex : (√7)<sup>2</sup> = 7.</li>
<li><strong>√(a<sup>2</sup>) = a</strong> : la racine d'un carré redonne le nombre (quand a ≥ 0). Ex : √(11<sup>2</sup>) = √121 = 11.</li>
</ul>
<p>Ces deux égalités montrent que la racine carrée et le carré sont des opérations <strong>inverses</strong> l'une de l'autre (sur les nombres positifs).</p>

<h2>4. Les règles de calcul (produit et quotient)</h2>
<p>Pour tous nombres <em>a</em> ≥ 0 et <em>b</em> ≥ 0 :</p>
<ul>
<li><strong>√a × √b = √(a×b)</strong> &nbsp;(règle du produit)</li>
<li><strong>√a / √b = √(a/b)</strong> &nbsp;avec b &gt; 0 &nbsp;(règle du quotient)</li>
</ul>
<p>Exemples directs :</p>
<ul>
<li>√2 × √8 = √(2×8) = √16 = 4</li>
<li>√3 × √12 = √36 = 6</li>
<li>√50 / √2 = √(50/2) = √25 = 5</li>
</ul>
<p class="attention"><strong>PIÈGE MAJEUR :</strong> ces règles marchent pour le produit et le quotient, <strong>mais PAS pour l'addition ni la soustraction</strong> :</p>
<p style="text-align:center"><strong>√(a + b) ≠ √a + √b</strong></p>
<p>Vérifie : √(9 + 16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7. On a bien 5 ≠ 7 !</p>

<h2>5. Exemple résolu : simplifier une racine</h2>
<p><strong>Énoncé :</strong> écrire √50 sous la forme a√b avec b le plus petit possible.</p>
<p><strong>Méthode :</strong> on cherche le plus grand carré parfait qui divise 50.</p>
<ol>
<li>50 = 25 × 2, et 25 = 5<sup>2</sup> est un carré parfait.</li>
<li>√50 = √(25 × 2) = √25 × √2 &nbsp;(règle du produit)</li>
<li>√50 = 5 × √2 = <strong>5√2</strong></li>
</ol>
<p><strong>Autre exemple :</strong> √72 = √(36 × 2) = √36 × √2 = <strong>6√2</strong>. (On a choisi 36, le plus grand carré qui divise 72.)</p>

<h2>6. Exemple résolu : produit de racines à simplifier</h2>
<p><strong>Énoncé :</strong> calculer A = √8 × √6.</p>
<ol>
<li>On regroupe sous une seule racine : A = √(8 × 6) = √48.</li>
<li>On cherche le plus grand carré qui divise 48 : 48 = 16 × 3, avec 16 = 4<sup>2</sup>.</li>
<li>A = √(16 × 3) = √16 × √3 = 4√3.</li>
</ol>
<p>Donc A = <strong>4√3</strong>. Valeur exacte = 4√3 ; valeur approchée ≈ 6,93.</p>

<h2>7. Valeurs exactes et valeurs approchées</h2>
<p>Beaucoup de racines (comme √2, √3, √5) ne tombent pas juste : ce sont des <strong>nombres irrationnels</strong>, dont l'écriture décimale est infinie et non périodique.</p>
<ul>
<li><strong>Valeur exacte :</strong> on garde le symbole √. Ex : la diagonale d'un carré de côté 1 vaut exactement √2.</li>
<li><strong>Valeur approchée :</strong> √2 ≈ 1,414 (à la calculatrice). Le symbole ≈ signifie « environ ».</li>
</ul>
<p>Au Brevet, on demande souvent la <strong>valeur exacte</strong> : il faut alors simplifier et garder √, sans passer par la calculatrice.</p>
`,
  summary: `*La racine carrée de a* (a ≥ 0), notée √a, est le **nombre positif** dont le carré vaut a : (√a)² = a. On ne calcule jamais la racine d'un nombre négatif, et √a est toujours positif.

Les **carrés parfaits** (1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144…) ont une racine entière. Les connaître par cœur permet de simplifier rapidement.

Deux égalités clés pour a ≥ 0 : **(√a)² = a** et **√(a²) = a**. La racine et le carré sont des opérations inverses.

Règles de calcul : **√a × √b = √(ab)** et **√a / √b = √(a/b)** (b > 0). Elles servent à regrouper ou simplifier. *Attention* : elles ne marchent **PAS** pour l'addition : **√(a+b) ≠ √a + √b**.

**Simplifier une racine** : on isole le plus grand carré parfait. Exemple : √50 = √(25×2) = 5√2 ; √72 = 6√2.

On distingue la **valeur exacte** (on garde √, ex : √2) de la **valeur approchée** (√2 ≈ 1,414). √2, √3, √5… sont des nombres **irrationnels**.`,
  timeline: [
    {
      id: `t1`,
      date: `~530 av. J.-C.`,
      title: `L'école pythagoricienne`,
      description: `Pythagore fonde à Crotone une communauté qui pense que « tout est nombre » : les entiers et leurs rapports (fractions) expliqueraient l'univers entier.`,
    },
    {
      id: `t2`,
      date: `~5e s. av. J.-C.`,
      title: `La découverte de l'irrationnel`,
      description: `Hippase de Métaponte démontre que la diagonale d'un carré de côté 1 (soit √2) ne peut s'écrire comme une fraction : un nombre « irrationnel » est né.`,
    },
    {
      id: `t3`,
      date: `~100 ap. J.-C.`,
      title: `Théon de Smyrne`,
      description: `Le mathématicien grec étudie des méthodes d'approximation de √2 à l'aide de suites de nombres, cherchant des valeurs de plus en plus précises.`,
    },
    {
      id: `t4`,
      date: `9e siècle`,
      title: `Les algébristes arabes`,
      description: `Al-Khwârizmî et ses successeurs développent des méthodes systématiques pour extraire des racines carrées, héritées plus tard par l'Europe.`,
    },
    {
      id: `t5`,
      date: `1525`,
      title: `Le symbole √`,
      description: `Le mathématicien allemand Christoff Rudolff introduit le signe √, inspiré de la lettre « r » de radix (racine en latin).`,
    },
  ],
  mindMap: [
    {
      id: `root`,
      label: `Racines carrées`,
      description: `√a = nombre positif dont le carré vaut a (a ≥ 0)`,
    },
    {
      id: `def`,
      label: `Définition`,
      description: `√a ≥ 0 et (√a)² = a ; impossible si a < 0`,
      parentId: `root`,
    },
    {
      id: `carres`,
      label: `Carrés parfaits`,
      description: `1, 4, 9, 16, 25, 36, 49, 64, 81, 100…`,
      parentId: `root`,
    },
    {
      id: `inverses`,
      label: `Opérations inverses`,
      description: `(√a)² = a et √(a²) = a pour a ≥ 0`,
      parentId: `root`,
    },
    {
      id: `regles`,
      label: `Règles de calcul`,
      description: `√a×√b = √(ab) et √a/√b = √(a/b)`,
      parentId: `root`,
    },
    {
      id: `simplif`,
      label: `Simplifier`,
      description: `Isoler le plus grand carré : √50 = 5√2`,
      parentId: `regles`,
    },
    {
      id: `piege`,
      label: `Piège`,
      description: `√(a+b) ≠ √a + √b`,
      parentId: `regles`,
    },
    {
      id: `irrat`,
      label: `Nombres irrationnels`,
      description: `√2, √3, √5… : valeur exacte vs approchée`,
      parentId: `root`,
    },
  ],
  characters: [
    {
      id: `c1`,
      name: `Pythagore`,
      dates: `~580 – ~495 av. J.-C.`,
      role: `Mathématicien et philosophe grec, fondateur de l'école pythagoricienne.`,
      importance: `Son théorème (a² + b² = c²) fait naturellement apparaître des racines carrées pour calculer les longueurs, point de départ de leur étude.`,
    },
    {
      id: `c2`,
      name: `Hippase de Métaponte`,
      dates: `~5e siècle av. J.-C.`,
      role: `Mathématicien pythagoricien.`,
      importance: `On lui attribue la démonstration que √2 est irrationnel : la diagonale du carré n'est pas une fraction. Une découverte si dérangeante qu'une légende dit qu'il en mourut.`,
    },
    {
      id: `c3`,
      name: `Théon de Smyrne`,
      dates: `~70 – ~135 ap. J.-C.`,
      role: `Mathématicien et astronome grec.`,
      importance: `Il a transmis et développé des méthodes d'approximation de √2 par des suites d'entiers, montrant comment encadrer un nombre irrationnel.`,
    },
  ],
  dates: [
    {
      date: `Définition de √a`,
      event: `√a est le nombre positif tel que (√a)² = a, avec a ≥ 0`,
      explanation: `Base de tout le chapitre : sert à comprendre que √a « défait » le carré et reste positif.`,
    },
    {
      date: `Carré d'une racine`,
      event: `(√a)² = a (a ≥ 0)`,
      explanation: `Permet de supprimer une racine quand on l'élève au carré, ex dans une équation x² = a.`,
    },
    {
      date: `Racine d'un carré`,
      event: `√(a²) = a (a ≥ 0)`,
      explanation: `Sert à simplifier √(25), √(49)… et à sortir un facteur d'une racine.`,
    },
    {
      date: `Produit de racines`,
      event: `√a × √b = √(ab) (a ≥ 0, b ≥ 0)`,
      explanation: `Permet de regrouper deux racines en une seule, ex √2 × √8 = √16 = 4.`,
    },
    {
      date: `Quotient de racines`,
      event: `√a / √b = √(a/b) (a ≥ 0, b > 0)`,
      explanation: `Permet de diviser des racines, ex √50 / √2 = √25 = 5.`,
    },
    {
      date: `Simplification`,
      event: `√(k² × b) = k√b`,
      explanation: `Méthode pour simplifier : on sort le plus grand carré parfait, ex √50 = 5√2.`,
    },
    {
      date: `Piège interdit`,
      event: `√(a + b) ≠ √a + √b`,
      explanation: `Erreur la plus fréquente au Brevet : on ne « distribue » jamais la racine sur une somme.`,
    },
    {
      date: `Valeur approchée`,
      event: `√2 ≈ 1,414`,
      explanation: `À utiliser seulement quand une valeur décimale est demandée ; sinon on garde la valeur exacte √2.`,
    },
  ],
  flashcards: [
    {
      id: `f1`,
      question: `Quelle est la définition de √a ?`,
      answer: `√a est le nombre POSITIF dont le carré vaut a (pour a ≥ 0).`,
      category: `Définition`,
    },
    {
      id: `f2`,
      question: `Combien vaut √64 ?`,
      answer: `8, car 8 ≥ 0 et 8² = 64.`,
      category: `Carrés parfaits`,
    },
    {
      id: `f3`,
      question: `Peut-on calculer √(−9) ?`,
      answer: `Non : la racine carrée d'un nombre négatif n'existe pas (aucun carré n'est négatif).`,
      category: `Définition`,
    },
    {
      id: `f4`,
      question: `Combien vaut (√7)² ?`,
      answer: `7, car (√a)² = a.`,
      category: `Règles`,
    },
    {
      id: `f5`,
      question: `Énonce la règle du produit des racines.`,
      answer: `√a × √b = √(ab), pour a ≥ 0 et b ≥ 0.`,
      category: `Règles`,
    },
    {
      id: `f6`,
      question: `Simplifie √50.`,
      answer: `√50 = √(25×2) = 5√2.`,
      category: `Simplification`,
    },
    {
      id: `f7`,
      question: `Simplifie √72.`,
      answer: `√72 = √(36×2) = 6√2.`,
      category: `Simplification`,
    },
    {
      id: `f8`,
      question: `Calcule √3 × √12.`,
      answer: `√3 × √12 = √36 = 6.`,
      category: `Règles`,
    },
    {
      id: `f9`,
      question: `Est-ce que √(a+b) = √a + √b ?`,
      answer: `NON ! Ex : √(9+16) = √25 = 5 mais √9 + √16 = 7. Donc 5 ≠ 7.`,
      category: `Piège`,
    },
    {
      id: `f10`,
      question: `Quelle est la liste des carrés parfaits jusqu'à 100 ?`,
      answer: `1, 4, 9, 16, 25, 36, 49, 64, 81, 100.`,
      category: `Carrés parfaits`,
    },
    {
      id: `f11`,
      question: `Qu'est-ce qu'un nombre irrationnel ?`,
      answer: `Un nombre qui ne s'écrit pas comme une fraction et dont l'écriture décimale est infinie non périodique, comme √2.`,
      category: `Culture`,
    },
    {
      id: `f12`,
      question: `Différence entre valeur exacte et valeur approchée de √2 ?`,
      answer: `Valeur exacte : √2 (on garde le symbole). Valeur approchée : √2 ≈ 1,414.`,
      category: `Culture`,
    },
  ],
  questions: [
    {
      id: `q1`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Combien vaut √81 ?`,
      options: [`8`, `9`, `9 ou −9`, `40,5`],
      answer: `9`,
      explanation: `√81 = 9 car 9 est positif et 9² = 81. Une racine carrée est toujours positive.`,
      mnemonic: `9 × 9 = 81.`,
    },
    {
      id: `q2`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Vrai ou faux : √(9 + 16) = √9 + √16.`,
      answer: false,
      explanation: `√(9+16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7. Comme 5 ≠ 7, l'égalité est fausse.`,
      trap: `On ne distribue JAMAIS une racine sur une somme : √(a+b) ≠ √a + √b.`,
    },
    {
      id: `q3`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Quelle affirmation est correcte ?`,
      options: [`√(−16) = −4`, `√16 = ±4`, `√16 = 4`, `√16 = 8`],
      answer: `√16 = 4`,
      explanation: `√16 = 4 car 4 ≥ 0 et 4² = 16. On ne peut pas prendre la racine d'un négatif, et la racine est toujours positive.`,
    },
    {
      id: `q4`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Vrai ou faux : 36 est un carré parfait.`,
      answer: true,
      explanation: `36 = 6², c'est donc le carré d'un entier : 36 est un carré parfait et √36 = 6.`,
    },
    {
      id: `q5`,
      type: `trous`,
      difficulty: `easy`,
      question: `Pour a ≥ 0, on a (√a)[exposant] = a et √(a²) = [resultat].`,
      answer: [`²`, `a`],
      explanation: `Les deux égalités fondamentales : (√a)² = a et √(a²) = a pour a ≥ 0. Le carré et la racine sont des opérations inverses.`,
    },
    {
      id: `q6`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Combien vaut √2 × √18 ?`,
      options: [`√20`, `6`, `36`, `9`],
      answer: `6`,
      explanation: `√2 × √18 = √(2×18) = √36 = 6 (règle du produit).`,
      mnemonic: `On regroupe sous une seule racine : √a × √b = √(ab).`,
    },
    {
      id: `q7`,
      type: `qcm`,
      difficulty: `medium`,
      question: `La forme simplifiée de √50 est :`,
      options: [`25√2`, `5√2`, `2√5`, `10√5`],
      answer: `5√2`,
      explanation: `√50 = √(25×2) = √25 × √2 = 5√2. On isole le plus grand carré parfait (25).`,
    },
    {
      id: `q8`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Combien vaut √75 / √3 ?`,
      options: [`5`, `25`, `√25`, `√72`],
      answer: `5`,
      explanation: `√75 / √3 = √(75/3) = √25 = 5 (règle du quotient).`,
    },
    {
      id: `q9`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Vrai ou faux : √(a²) = a est vrai pour tout nombre a positif.`,
      answer: true,
      explanation: `Pour a ≥ 0, √(a²) = a. Par exemple √(7²) = √49 = 7.`,
    },
    {
      id: `q10`,
      type: `relier`,
      difficulty: `medium`,
      question: `Relie chaque racine à sa forme simplifiée.`,
      options: [`5√2`, `6√2`, `2√3`],
      answer: { '√50': `5√2`, '√72': `6√2`, '√12': `2√3` },
      explanation: `√50 = √(25×2) = 5√2 ; √72 = √(36×2) = 6√2 ; √12 = √(4×3) = 2√3.`,
    },
    {
      id: `q11`,
      type: `trous`,
      difficulty: `medium`,
      question: `Pour simplifier √72, on écrit 72 = [carre] × 2, puis √72 = [resultat]√2.`,
      answer: [`36`, `6`],
      explanation: `72 = 36 × 2 et 36 = 6². Donc √72 = √36 × √2 = 6√2.`,
    },
    {
      id: `q12`,
      type: `ordonner`,
      difficulty: `medium`,
      question: `Range ces nombres dans l'ordre croissant : √16, √4, √25, √9.`,
      options: [`√16`, `√4`, `√25`, `√9`],
      answer: [1, 3, 0, 2],
      explanation: `√4 = 2, √9 = 3, √16 = 4, √25 = 5. Ordre croissant : √4 < √9 < √16 < √25, soit les indices 1, 3, 0, 2.`,
    },
    {
      id: `q13`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Calcule et simplifie √8 × √6.`,
      options: [`√14`, `4√3`, `2√12`, `48`],
      answer: `4√3`,
      explanation: `√8 × √6 = √48 = √(16×3) = 4√3. On regroupe puis on isole le carré parfait 16.`,
    },
    {
      id: `q14`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Que vaut l'expression A = 3√2 + 5√2 ?`,
      options: [`8√2`, `8√4`, `15√2`, `√34`],
      answer: `8√2`,
      explanation: `On additionne les coefficients devant la même racine : 3√2 + 5√2 = (3+5)√2 = 8√2. C'est permis car la racine est identique.`,
      trap: `Ici la racine √2 est commune, on additionne donc seulement les nombres devant. On NE fait PAS √2 + √2 = √4.`,
    },
    {
      id: `q15`,
      type: `boolean`,
      difficulty: `hard`,
      question: `Vrai ou faux : √2 est un nombre irrationnel, sa valeur exacte ne peut pas s'écrire comme une fraction.`,
      answer: true,
      explanation: `√2 est irrationnel : c'est exactement ce qu'a découvert Hippase de Métaponte. Sa valeur approchée est ≈ 1,414, mais sa valeur exacte reste √2.`,
    },
    {
      id: `q16`,
      type: `trous`,
      difficulty: `hard`,
      question: `On donne √45. On écrit 45 = 9 × [facteur], donc √45 = [coef]√5.`,
      answer: [`5`, `3`],
      explanation: `45 = 9 × 5 et 9 = 3². Donc √45 = √9 × √5 = 3√5.`,
    },
    {
      id: `q17`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Un carré a une aire de 200 cm². Donne la valeur exacte de la longueur de son côté, puis sa valeur approchée au dixième.`,
      answer: `Le côté c vérifie c² = 200, donc c = √200. On simplifie : √200 = √(100×2) = 10√2 cm (valeur exacte). Valeur approchée : 10√2 ≈ 14,1 cm.`,
      explanation: `L'aire d'un carré est côté², donc côté = √aire = √200. On simplifie avec le carré parfait 100 : √200 = 10√2. À la calculatrice, 10√2 ≈ 14,1 cm.`,
      mnemonic: `Côté d'un carré = √(aire).`,
    },
    {
      id: `q18`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Dans un triangle rectangle, les deux côtés de l'angle droit mesurent 5 cm et 7 cm. Calcule la valeur exacte de l'hypoténuse.`,
      answer: `D'après le théorème de Pythagore : h² = 5² + 7² = 25 + 49 = 74. Donc h = √74 cm. Comme 74 n'a pas de facteur carré parfait, la valeur exacte est √74 cm (≈ 8,6 cm).`,
      explanation: `Pythagore donne h² = 25 + 49 = 74, d'où h = √74. On ne peut pas simplifier √74 (74 = 2×37, aucun carré parfait), donc on garde la valeur exacte √74. Attention : h ≠ 5 + 7 et √74 ≠ √25 + √49.`,
      trap: `Ne jamais écrire √(25+49) = √25 + √49 : √(a+b) ≠ √a + √b.`,
    },
    {
      id: `q19`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Quelle est la forme simplifiée de l'expression B = √18 + √8 ?`,
      options: [`√26`, `5√2`, `2√26`, `√160`],
      answer: `5√2`,
      explanation: `On simplifie chaque racine : √18 = 3√2 et √8 = 2√2. Donc B = 3√2 + 2√2 = 5√2. On ne peut additionner que parce que les deux racines deviennent √2.`,
      trap: `Il faut d'abord simplifier chaque racine avant d'additionner ; on n'écrit jamais √18 + √8 = √26.`,
    },
  ],
  anecdotes: [
    `On raconte qu'Hippase de Métaponte aurait révélé l'existence des nombres irrationnels comme √2 alors que les pythagoriciens croyaient que « tout est nombre » (entier ou fraction). La légende dit qu'il fut puni par les dieux et périt en mer pour avoir divulgué ce secret dérangeant !`,
    `Le symbole √ que tu utilises aujourd'hui date de 1525 : le mathématicien allemand Christoff Rudolff l'a inventé en stylisant la lettre « r », première lettre du mot latin radix qui signifie « racine ».`,
    `√2 est tellement utile que les architectes l'utilisent partout : le format de papier A4 est conçu pour que le rapport entre la longueur et la largeur soit exactement √2. C'est ce qui permet de couper une feuille A3 en deux A4 sans changer les proportions !`,
  ],
  pitfalls: `Le piège n°1 du Brevet : √(a + b) ≠ √a + √b (la racine ne se distribue jamais sur une addition). Ex : √(9+16) = 5, pas 7.`,
};
