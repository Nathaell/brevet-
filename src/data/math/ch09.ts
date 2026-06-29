import { Chapter } from '../../types';

export const mathCh9: Chapter = {
  id: `mch9`,
  slug: `probabilites`,
  number: 9,
  subject: `mathematiques`,
  title: `Probabilités`,
  subtitle: `Mesurer le hasard : du lancer de dé aux expériences à deux épreuves`,
  introduction: `Quand on lance un dé, on ne sait pas à l'avance quel chiffre va sortir : c'est le hasard. Pourtant, les mathématiques permettent de « mesurer » ce hasard avec un nombre compris entre 0 et 1 : la probabilité. Nées au XVIIe siècle de la correspondance entre Blaise Pascal et Pierre de Fermat à propos d'un problème de jeu d'argent, les probabilités sont aujourd'hui partout : météo, assurances, sondages, jeux. Dans ce chapitre, tu vas apprendre le vocabulaire du hasard (issue, événement), calculer une probabilité en situation d'équiprobabilité, utiliser l'événement contraire, et organiser une expérience à deux épreuves grâce à un arbre des possibles ou un tableau à double entrée.`,
  courseContent: `
<h2>1. Le vocabulaire du hasard</h2>
<p>Une <strong>expérience aléatoire</strong> est une expérience dont on ne peut pas prévoir le résultat à l'avance, mais dont on connaît tous les résultats possibles. Exemples : lancer un dé, tirer une carte, tirer une boule dans une urne.</p>
<ul>
<li>Une <strong>issue</strong> est un résultat possible de l'expérience. Pour un dé à 6 faces, les issues sont 1, 2, 3, 4, 5, 6.</li>
<li>Un <strong>événement</strong> est un ensemble d'issues. Exemple : « obtenir un nombre pair » est l'événement formé des issues 2, 4 et 6.</li>
<li>Un <strong>événement certain</strong> se réalise à coup sûr : sa probabilité vaut 1. Ex : « obtenir un nombre entre 1 et 6 » avec un dé.</li>
<li>Un <strong>événement impossible</strong> ne se réalise jamais : sa probabilité vaut 0. Ex : « obtenir 7 » avec un dé à 6 faces.</li>
</ul>

<h2>2. La probabilité d'un événement</h2>
<p>La <strong>probabilité</strong> d'un événement est un nombre qui mesure ses chances de se réaliser. C'est toujours un nombre <strong>compris entre 0 et 1</strong> :</p>
<p style="text-align:center"><strong>0 ≤ P(événement) ≤ 1</strong></p>
<p>Plus la probabilité est proche de 1, plus l'événement a de chances de se produire ; plus elle est proche de 0, moins il a de chances. On peut l'exprimer sous forme de fraction (1/6), de nombre décimal (0,5) ou de pourcentage (50 %).</p>

<h2>3. L'équiprobabilité : la formule clé</h2>
<p>Il y a <strong>équiprobabilité</strong> quand toutes les issues ont la <strong>même chance</strong> de se produire (dé équilibré, pièce non truquée, boules identiques au toucher). Dans ce cas :</p>
<p style="text-align:center"><strong>P(événement) = nombre d'issues favorables / nombre d'issues possibles</strong></p>
<p><strong>Exemple résolu 1 (le dé) :</strong> on lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?</p>
<ol>
<li>Issues possibles : 1, 2, 3, 4, 5, 6 → il y en a <strong>6</strong>.</li>
<li>Issues favorables (nombre pair) : 2, 4, 6 → il y en a <strong>3</strong>.</li>
<li>P(pair) = 3/6 = <strong>1/2</strong>.</li>
</ol>
<p>De la même façon, P(obtenir 6) = 1/6 et P(obtenir un multiple de 3) = 2/6 = 1/3 (les favorables sont 3 et 6).</p>

<h2>4. L'événement contraire</h2>
<p>L'<strong>événement contraire</strong> de A, noté souvent « non A », est l'événement qui se réalise exactement quand A ne se réalise PAS. Comme l'un des deux se produit toujours :</p>
<p style="text-align:center"><strong>P(contraire de A) = 1 − P(A)</strong></p>
<p><strong>Exemple résolu 2 (l'urne) :</strong> une urne contient 3 boules rouges et 2 boules vertes, indiscernables au toucher. On tire une boule au hasard.</p>
<ol>
<li>Issues possibles : 5 boules → <strong>5</strong> issues.</li>
<li>P(rouge) = 3/5 (3 boules rouges favorables).</li>
<li>L'événement « ne pas tirer rouge » est le contraire de « rouge ». Donc P(pas rouge) = 1 − 3/5 = <strong>2/5</strong>.</li>
</ol>
<p>On vérifie : « pas rouge » signifie « verte », et il y a 2 vertes sur 5, soit 2/5. C'est cohérent. L'événement contraire fait souvent gagner du temps : au lieu de compter une longue liste, on calcule 1 moins la probabilité opposée.</p>

<h2>5. L'échelle des probabilités</h2>
<p>On peut placer tout événement sur une <strong>échelle graduée de 0 à 1</strong> :</p>
<ul>
<li><strong>0</strong> : événement impossible.</li>
<li><strong>1/2 = 0,5</strong> : autant de chances de se produire que de ne pas se produire (ex : Pile au lancer d'une pièce).</li>
<li><strong>1</strong> : événement certain.</li>
</ul>
<p>Vers 0 on dit « peu probable », vers 1 on dit « très probable ». Comparer deux probabilités, c'est comparer deux fractions : 1/6 &lt; 1/4 &lt; 1/2 &lt; 3/4.</p>

<h2>6. Les expériences à deux épreuves</h2>
<p>Certaines expériences se font en <strong>deux étapes</strong> (ex : lancer deux fois une pièce, ou tirer deux boules). Pour ne rien oublier, on organise les possibilités.</p>
<h3>a) L'arbre des possibles</h3>
<p><strong>Exemple résolu 3 :</strong> on lance deux fois une pièce équilibrée (P = Pile, F = Face). L'arbre se construit en deux niveaux : du tronc partent deux branches (P et F) ; de chaque branche repartent deux branches (P et F). On obtient <strong>4 issues</strong> au bout des branches : PP, PF, FP, FF.</p>
<ul>
<li>P(obtenir deux Piles) = 1/4 (une seule issue favorable : PP).</li>
<li>P(obtenir au moins un Pile) : favorables = PP, PF, FP → 3/4. Plus rapide avec le contraire : « au moins un Pile » est le contraire de « aucun Pile » (FF), donc 1 − 1/4 = 3/4.</li>
</ul>
<h3>b) Le tableau à double entrée</h3>
<p>Quand chaque épreuve a beaucoup d'issues, un <strong>tableau à double entrée</strong> est plus pratique. Exemple : on lance deux dés et on s'intéresse à la somme. On met le dé 1 en lignes (1 à 6), le dé 2 en colonnes (1 à 6), et on remplit chaque case avec la somme. Il y a <strong>6 × 6 = 36 issues</strong> possibles, toutes équiprobables.</p>
<table>
<tr><th>+</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr>
<tr><th>1</th><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
<tr><th>2</th><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
<tr><th>3</th><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
<tr><th>4</th><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>
<tr><th>5</th><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr>
<tr><th>6</th><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>
</table>
<p>On compte alors les cases favorables. La somme 7 apparaît 6 fois → P(somme = 7) = 6/36 = 1/6. La somme 12 apparaît 1 fois → P(somme = 12) = 1/36. C'est la somme la plus difficile à obtenir !</p>
`,
  summary: `Une **expérience aléatoire** a un résultat imprévisible mais des issues connues. Une **issue** est un résultat possible ; un **événement** est un ensemble d'issues. Un événement **certain** a une probabilité de 1, un événement **impossible** une probabilité de 0.

La **probabilité** d'un événement est toujours un nombre tel que **0 ≤ P ≤ 1**. On peut l'écrire en fraction, en décimal ou en pourcentage.

En situation d'**équiprobabilité** (toutes les issues ont la même chance), on applique : **P = nombre d'issues favorables / nombre d'issues possibles**. Exemple : avec un dé, P(pair) = 3/6 = 1/2.

L'**événement contraire** de A se réalise quand A ne se réalise pas : **P(contraire) = 1 − P(A)**. Très utile pour les « au moins un… ».

On peut placer chaque événement sur l'**échelle des probabilités**, graduée de 0 (impossible) à 1 (certain), avec 1/2 au milieu.

Pour une **expérience à deux épreuves**, on utilise un **arbre des possibles** ou un **tableau à double entrée** pour lister toutes les issues sans en oublier. Deux pièces donnent 4 issues ; deux dés donnent 36 issues.`,
  timeline: [
    {
      id: `t1`,
      date: `1654`,
      title: `La correspondance Pascal–Fermat`,
      description: `Le chevalier de Méré, joueur, pose à Blaise Pascal un problème de partage des mises d'un jeu interrompu. Pascal échange des lettres avec Pierre de Fermat : ils fondent ensemble le calcul des probabilités.`,
    },
    {
      id: `t2`,
      date: `1657`,
      title: `Le premier traité`,
      description: `Le Hollandais Christiaan Huygens publie le premier ouvrage imprimé sur les probabilités, inspiré des travaux de Pascal et Fermat, qui diffuse ces idées dans toute l'Europe.`,
    },
    {
      id: `t3`,
      date: `1713`,
      title: `La loi des grands nombres`,
      description: `Jacques Bernoulli montre que, sur un très grand nombre d'essais, la fréquence d'un événement se rapproche de sa probabilité : une expérience répétée « révèle » le hasard.`,
    },
    {
      id: `t4`,
      date: `1812`,
      title: `Laplace formalise la théorie`,
      description: `Pierre-Simon de Laplace publie sa « Théorie analytique des probabilités » et énonce la définition de la probabilité comme rapport des cas favorables aux cas possibles.`,
    },
    {
      id: `t5`,
      date: `1933`,
      title: `Les fondements modernes`,
      description: `Le mathématicien russe Andreï Kolmogorov donne aux probabilités une base rigoureuse à l'aide d'axiomes, ce qui en fait une branche solide des mathématiques.`,
    },
  ],
  mindMap: [
    {
      id: `root`,
      label: `Probabilités`,
      description: `Mesurer le hasard par un nombre entre 0 et 1`,
    },
    {
      id: `vocab`,
      label: `Vocabulaire`,
      description: `Expérience aléatoire, issue, événement`,
      parentId: `root`,
    },
    {
      id: `extremes`,
      label: `Certain / impossible`,
      description: `P(certain) = 1 ; P(impossible) = 0`,
      parentId: `vocab`,
    },
    {
      id: `formule`,
      label: `Équiprobabilité`,
      description: `P = favorables / possibles`,
      parentId: `root`,
    },
    {
      id: `contraire`,
      label: `Événement contraire`,
      description: `P(contraire) = 1 − P(A)`,
      parentId: `root`,
    },
    {
      id: `echelle`,
      label: `Échelle 0 à 1`,
      description: `0 impossible, 1/2 milieu, 1 certain`,
      parentId: `root`,
    },
    {
      id: `deux`,
      label: `Deux épreuves`,
      description: `Arbre des possibles, tableau à double entrée`,
      parentId: `root`,
    },
  ],
  characters: [
    {
      id: `c1`,
      name: `Blaise Pascal`,
      dates: `1623 – 1662`,
      role: `Mathématicien, physicien et philosophe français.`,
      importance: `En échangeant en 1654 avec Fermat sur un problème de jeu, il invente le calcul des probabilités. On lui doit aussi le « triangle de Pascal » utile pour dénombrer.`,
    },
    {
      id: `c2`,
      name: `Pierre de Fermat`,
      dates: `1601 – 1665`,
      role: `Magistrat et mathématicien français de Toulouse.`,
      importance: `Sa correspondance avec Pascal pose les bases des probabilités. Génie discret, il est aussi célèbre pour son « grand théorème » resté non démontré pendant plus de 350 ans.`,
    },
    {
      id: `c3`,
      name: `Pierre-Simon de Laplace`,
      dates: `1749 – 1827`,
      role: `Mathématicien et astronome français.`,
      importance: `Il transforme les probabilités en une véritable théorie et énonce la définition « cas favorables sur cas possibles » que tu utilises aujourd'hui au collège.`,
    },
  ],
  dates: [
    {
      date: `Encadrement d'une probabilité`,
      event: `0 ≤ P(A) ≤ 1`,
      explanation: `Toute probabilité est comprise entre 0 et 1 : un résultat hors de cet intervalle est forcément une erreur.`,
    },
    {
      date: `Événement certain`,
      event: `P(certain) = 1`,
      explanation: `Sert à repérer un événement qui se produit à coup sûr, comme « obtenir un nombre de 1 à 6 » avec un dé.`,
    },
    {
      date: `Événement impossible`,
      event: `P(impossible) = 0`,
      explanation: `Sert à repérer un événement qui ne peut jamais arriver, comme « obtenir 7 » avec un dé à 6 faces.`,
    },
    {
      date: `Probabilité (équiprobable)`,
      event: `favorables / possibles`,
      explanation: `Formule de base à utiliser dès que toutes les issues ont la même chance (dé équilibré, pièce, urne).`,
    },
    {
      date: `Événement contraire`,
      event: `P(contraire) = 1 − P(A)`,
      explanation: `Permet de calculer vite les « au moins un… » ou « ne pas… » sans tout dénombrer.`,
    },
    {
      date: `Somme des contraires`,
      event: `P(A) + P(contraire) = 1`,
      explanation: `Vérification : la probabilité d'un événement et celle de son contraire s'additionnent toujours pour donner 1.`,
    },
    {
      date: `Deux pièces`,
      event: `4 issues = 2 × 2`,
      explanation: `Nombre d'issues d'une expérience à deux épreuves : on multiplie les possibilités de chaque épreuve.`,
    },
    {
      date: `Deux dés`,
      event: `36 issues = 6 × 6`,
      explanation: `Sert pour le tableau à double entrée : on compte les 36 cases pour calculer des probabilités de sommes.`,
    },
  ],
  flashcards: [
    {
      id: `f1`,
      question: `Qu'est-ce qu'une expérience aléatoire ?`,
      answer: `Une expérience dont on ne peut pas prévoir le résultat, mais dont on connaît toutes les issues possibles (ex : lancer un dé).`,
      category: `Vocabulaire`,
    },
    {
      id: `f2`,
      question: `Quelle est la différence entre une issue et un événement ?`,
      answer: `Une issue est un seul résultat possible ; un événement est un ensemble d'issues (ex : « pair » = {2, 4, 6}).`,
      category: `Vocabulaire`,
    },
    {
      id: `f3`,
      question: `Entre quelles valeurs est toujours comprise une probabilité ?`,
      answer: `Entre 0 et 1 : 0 ≤ P ≤ 1.`,
      category: `Cours`,
    },
    {
      id: `f4`,
      question: `Combien valent P(événement certain) et P(événement impossible) ?`,
      answer: `P(certain) = 1 et P(impossible) = 0.`,
      category: `Cours`,
    },
    {
      id: `f5`,
      question: `Quelle est la formule en situation d'équiprobabilité ?`,
      answer: `P = nombre d'issues favorables / nombre d'issues possibles.`,
      category: `Formule`,
    },
    {
      id: `f6`,
      question: `Avec un dé équilibré, que vaut P(obtenir 6) ?`,
      answer: `1/6 : une seule issue favorable (le 6) sur 6 issues possibles.`,
      category: `Formule`,
    },
    {
      id: `f7`,
      question: `Avec un dé, que vaut P(obtenir un nombre pair) ?`,
      answer: `3/6 = 1/2 (favorables : 2, 4, 6).`,
      category: `Formule`,
    },
    {
      id: `f8`,
      question: `Quelle est la formule de l'événement contraire ?`,
      answer: `P(contraire de A) = 1 − P(A).`,
      category: `Contraire`,
    },
    {
      id: `f9`,
      question: `Une urne a 3 boules rouges et 2 vertes. Que vaut P(rouge) ?`,
      answer: `3/5 (3 boules rouges favorables sur 5 boules).`,
      category: `Formule`,
    },
    {
      id: `f10`,
      question: `Combien d'issues quand on lance deux fois une pièce ?`,
      answer: `4 issues : PP, PF, FP, FF (2 × 2).`,
      category: `Deux épreuves`,
    },
    {
      id: `f11`,
      question: `À quoi sert un tableau à double entrée ?`,
      answer: `À lister toutes les issues d'une expérience à deux épreuves sans en oublier (ex : la somme de deux dés, 36 cases).`,
      category: `Deux épreuves`,
    },
    {
      id: `f12`,
      question: `Qui a fondé le calcul des probabilités et quand ?`,
      answer: `Blaise Pascal et Pierre de Fermat, par leur correspondance en 1654.`,
      category: `Culture`,
    },
  ],
  questions: [
    {
      id: `q1`,
      type: `qcm`,
      difficulty: `easy`,
      question: `On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir le nombre 4 ?`,
      options: [`1/4`, `4/6`, `1/6`, `1`],
      answer: `1/6`,
      explanation: `Il y a 1 issue favorable (le 4) sur 6 issues possibles, donc P = 1/6.`,
      mnemonic: `Un seul 4 sur 6 faces.`,
    },
    {
      id: `q2`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Vrai ou faux : une probabilité peut être égale à 1,5.`,
      answer: false,
      explanation: `Une probabilité est toujours comprise entre 0 et 1. La valeur 1,5 est impossible.`,
      trap: `Si tu trouves un résultat plus grand que 1 (ou négatif), c'est forcément une erreur de calcul.`,
    },
    {
      id: `q3`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Avec un dé à 6 faces, quel est l'événement impossible ?`,
      options: [`Obtenir 6`, `Obtenir 7`, `Obtenir un nombre pair`, `Obtenir un nombre entre 1 et 6`],
      answer: `Obtenir 7`,
      explanation: `Un dé à 6 faces ne contient pas le 7 : cet événement ne se produit jamais, sa probabilité vaut 0.`,
    },
    {
      id: `q4`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Vrai ou faux : la probabilité d'un événement certain est égale à 1.`,
      answer: true,
      explanation: `Un événement certain se réalise à coup sûr : sa probabilité vaut 1. Ex : « obtenir un nombre de 1 à 6 » avec un dé.`,
    },
    {
      id: `q5`,
      type: `qcm`,
      difficulty: `easy`,
      question: `On lance une pièce équilibrée. Quelle est la probabilité d'obtenir Pile ?`,
      options: [`1/2`, `1/4`, `2`, `1`],
      answer: `1/2`,
      explanation: `Il y a 2 issues équiprobables (Pile, Face) et 1 favorable : P(Pile) = 1/2 = 0,5.`,
      mnemonic: `Pile ou Face : une chance sur deux.`,
    },
    {
      id: `q6`,
      type: `trous`,
      difficulty: `easy`,
      question: `En situation d'équiprobabilité, P = nombre d'issues [favorables] / nombre d'issues [possibles].`,
      answer: [`favorables`, `possibles`],
      explanation: `La formule fondamentale : P = issues favorables / issues possibles, valable quand toutes les issues ont la même chance.`,
    },
    {
      id: `q7`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Une urne contient 3 boules rouges et 2 boules vertes identiques. Quelle est la probabilité de tirer une boule verte ?`,
      options: [`2/3`, `2/5`, `3/5`, `1/2`],
      answer: `2/5`,
      explanation: `Il y a 2 boules vertes favorables sur 5 boules au total : P(verte) = 2/5.`,
    },
    {
      id: `q8`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Avec un dé équilibré, quelle est la probabilité d'obtenir un multiple de 3 ?`,
      options: [`1/3`, `1/2`, `2/3`, `1/6`],
      answer: `1/3`,
      explanation: `Les multiples de 3 sur le dé sont 3 et 6 : 2 favorables sur 6, soit 2/6 = 1/3.`,
      trap: `N'oublie pas le 6 : c'est aussi un multiple de 3.`,
    },
    {
      id: `q9`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Vrai ou faux : si P(A) = 1/4, alors P(contraire de A) = 3/4.`,
      answer: true,
      explanation: `P(contraire) = 1 − P(A) = 1 − 1/4 = 3/4. La somme d'un événement et de son contraire vaut toujours 1.`,
    },
    {
      id: `q10`,
      type: `trous`,
      difficulty: `medium`,
      question: `La probabilité d'un événement [impossible] vaut 0 ; celle d'un événement [certain] vaut 1.`,
      answer: [`impossible`, `certain`],
      explanation: `Impossible → P = 0 (ne se produit jamais) ; certain → P = 1 (se produit à coup sûr).`,
    },
    {
      id: `q11`,
      type: `relier`,
      difficulty: `medium`,
      question: `On lance un dé équilibré. Relie chaque événement à sa probabilité.`,
      options: [`1/6`, `1/2`, `1/3`, `1`],
      answer: { 'Obtenir 6': `1/6`, 'Obtenir un nombre pair': `1/2`, 'Obtenir un multiple de 3': `1/3`, 'Obtenir un nombre de 1 à 6': `1` },
      explanation: `P(6) = 1/6 ; P(pair) = 3/6 = 1/2 ; P(multiple de 3) = 2/6 = 1/3 ; « de 1 à 6 » est certain donc P = 1.`,
    },
    {
      id: `q12`,
      type: `ordonner`,
      difficulty: `medium`,
      question: `Range ces probabilités dans l'ordre croissant : 1/2, 1/6, 3/4, 1/4.`,
      options: [`1/2`, `1/6`, `3/4`, `1/4`],
      answer: [1, 3, 0, 2],
      explanation: `En décimal : 1/6 ≈ 0,17 ; 1/4 = 0,25 ; 1/2 = 0,5 ; 3/4 = 0,75. Ordre croissant : 1/6 < 1/4 < 1/2 < 3/4, soit les indices 1, 3, 0, 2.`,
    },
    {
      id: `q13`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Dans un jeu de 32 cartes, on tire une carte au hasard. Quelle est la probabilité de tirer un roi ?`,
      options: [`1/32`, `1/8`, `4/8`, `1/4`],
      answer: `1/8`,
      explanation: `Il y a 4 rois dans un jeu de 32 cartes : P(roi) = 4/32 = 1/8.`,
      mnemonic: `4 rois sur 32 cartes : on simplifie 4/32 = 1/8.`,
    },
    {
      id: `q14`,
      type: `qcm`,
      difficulty: `hard`,
      question: `On lance deux fois une pièce équilibrée. Quelle est la probabilité d'obtenir « au moins un Pile » ?`,
      options: [`1/4`, `1/2`, `3/4`, `1`],
      answer: `3/4`,
      explanation: `Les 4 issues sont PP, PF, FP, FF. « Au moins un Pile » est le contraire de « aucun Pile » (FF), donc P = 1 − 1/4 = 3/4.`,
      trap: `L'événement contraire de « au moins un Pile » est « aucun Pile », pas « au moins un Face ».`,
    },
    {
      id: `q15`,
      type: `trous`,
      difficulty: `hard`,
      question: `On lance deux dés et on regarde la somme. Il y a [36] issues possibles, et la somme 7 apparaît [6] fois.`,
      answer: [`36`, `6`],
      explanation: `2 dés donnent 6 × 6 = 36 issues. La somme 7 s'obtient par 1+6, 2+5, 3+4, 4+3, 5+2, 6+1 : 6 cases. Donc P(somme = 7) = 6/36 = 1/6.`,
    },
    {
      id: `q16`,
      type: `boolean`,
      difficulty: `hard`,
      question: `Vrai ou faux : avec deux dés, la somme 12 est aussi probable que la somme 7.`,
      answer: false,
      explanation: `La somme 12 ne s'obtient que par 6+6 (1 case sur 36), alors que la somme 7 s'obtient de 6 façons (6 cases). P(12) = 1/36 ≠ 1/6 = P(7).`,
      trap: `Toutes les sommes ne sont pas équiprobables, même si les 36 issues du tableau le sont.`,
    },
    {
      id: `q17`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Un sac contient 5 boules rouges, 3 boules bleues et 2 boules jaunes, indiscernables au toucher. On tire une boule au hasard. Calcule P(rouge), P(bleue) et P(ni rouge ni bleue).`,
      answer: `Il y a 5 + 3 + 2 = 10 boules. P(rouge) = 5/10 = 1/2. P(bleue) = 3/10. « Ni rouge ni bleue » signifie jaune : P = 2/10 = 1/5. On peut vérifier avec le contraire : 1 − (1/2 + 3/10) = 1 − 8/10 = 2/10 = 1/5.`,
      explanation: `On compte 10 issues possibles. Pour chaque couleur, P = nombre de boules de cette couleur / 10. « Ni rouge ni bleue » = jaune, soit 2/10. Le contraire confirme : 1 − P(rouge ou bleue) = 1 − 8/10 = 1/5.`,
      mnemonic: `On commence toujours par compter le nombre TOTAL de boules.`,
    },
    {
      id: `q18`,
      type: `brevet`,
      difficulty: `expert`,
      question: `On lance deux dés équilibrés et on calcule la somme des deux faces. À l'aide d'un tableau à double entrée, donne la probabilité d'obtenir une somme égale à 5, puis une somme supérieure ou égale à 10.`,
      answer: `Il y a 36 issues. Somme = 5 : (1;4), (2;3), (3;2), (4;1) → 4 cases, donc P = 4/36 = 1/9. Somme ≥ 10 : la somme vaut 10 (3 cases), 11 (2 cases) ou 12 (1 case), soit 3 + 2 + 1 = 6 cases, donc P = 6/36 = 1/6.`,
      explanation: `Le tableau 6×6 donne 36 issues équiprobables. On dénombre les cases favorables : 4 cases pour la somme 5 (P = 1/9) et 6 cases pour « somme ≥ 10 » (P = 1/6).`,
      trap: `« Supérieure ou égale à 10 » inclut 10, 11 ET 12 : il ne faut oublier aucune valeur.`,
    },
    {
      id: `q19`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Une roue de loterie est partagée en 8 secteurs égaux : 1 secteur « gros lot », 3 secteurs « petit lot » et 4 secteurs « perdu ». Quelle est la probabilité de gagner quelque chose (gros ou petit lot) ?`,
      options: [`1/8`, `3/8`, `1/2`, `4/8`],
      answer: `1/2`,
      explanation: `Gagner = gros lot ou petit lot = 1 + 3 = 4 secteurs favorables sur 8, soit 4/8 = 1/2. On peut aussi faire 1 − P(perdu) = 1 − 4/8 = 1/2.`,
      trap: `« Gagner quelque chose » regroupe le gros ET le petit lot : 4 secteurs, pas seulement 1.`,
    },
    {
      id: `q20`,
      type: `personnage`,
      difficulty: `medium`,
      question: `Quels deux mathématiciens ont fondé le calcul des probabilités par leur correspondance en 1654 ?`,
      options: [`Pythagore et Thalès`, `Pascal et Fermat`, `Laplace et Bernoulli`, `Descartes et Newton`],
      answer: `Pascal et Fermat`,
      explanation: `C'est à partir d'un problème de jeu posé par le chevalier de Méré que Blaise Pascal et Pierre de Fermat échangent en 1654 et inventent les probabilités.`,
    },
  ],
  anecdotes: [
    `Les probabilités sont nées d'un jeu d'argent ! En 1654, le chevalier de Méré, un joueur, demande à Blaise Pascal comment partager équitablement les mises d'une partie interrompue. Pascal en discute par lettres avec Pierre de Fermat, et de cette correspondance naît toute une branche des mathématiques.`,
    `Avec deux dés, la somme 7 est la plus fréquente (6 chances sur 36) tandis que les sommes 2 et 12 sont les plus rares (1 chance sur 36). C'est pour cela que, dans de nombreux jeux de société, on « tombe » beaucoup plus souvent sur 7 que sur 12 !`,
    `Pierre-Simon de Laplace était tellement reconnu qu'on raconte que Napoléon le nomma ministre de l'Intérieur… avant de le démettre au bout de six semaines, jugeant qu'il « apportait l'esprit des infiniment petits dans l'administration ». Laplace fut bien meilleur mathématicien que ministre !`,
  ],
  pitfalls: `Une probabilité est toujours comprise entre 0 et 1 : si tu trouves un nombre négatif ou supérieur à 1, c'est une erreur. Et il faut compter TOUTES les issues possibles au dénominateur (sans en oublier).`,
};
