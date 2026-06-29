import { Chapter } from '../../types';

export const mathCh2: Chapter = {
  id: `mch2`,
  slug: `calcul-litteral`,
  number: 2,
  subject: `mathematiques`,
  title: `Calcul littéral et identités remarquables`,
  subtitle: `Développer, réduire, factoriser et utiliser les trois identités remarquables`,
  introduction: `Le calcul littéral, c'est faire des mathématiques avec des lettres qui remplacent des nombres. Une lettre comme x peut représenter n'importe quelle valeur : on parle de variable. Apprendre à développer, à réduire et à factoriser une expression est l'un des outils les plus utiles du Brevet : on le retrouve en géométrie, dans les équations, les fonctions et les problèmes. Dans ce chapitre, tu vas maîtriser les deux distributivités, les trois identités remarquables et savoir passer d'une forme développée à une forme factorisée.`,
  courseContent: `
<h2>1. Développer avec la distributivité</h2>
<p><strong>Développer</strong>, c'est transformer un produit en une somme. On utilise la distributivité de la multiplication.</p>
<h3>Simple distributivité</h3>
<p>La règle de base est : <strong>k(a + b) = ka + kb</strong>. Le facteur devant la parenthèse multiplie chaque terme à l'intérieur.</p>
<ul>
<li>Exemple : 3(x + 4) = 3 × x + 3 × 4 = <strong>3x + 12</strong>.</li>
<li>Avec un signe moins : −2(x − 5) = −2 × x + (−2) × (−5) = <strong>−2x + 10</strong>. Attention aux signes !</li>
</ul>
<h3>Double distributivité</h3>
<p>Pour un produit de deux sommes : <strong>(a + b)(c + d) = ac + ad + bc + bd</strong>. Chaque terme de la première parenthèse multiplie chaque terme de la seconde.</p>
<p><strong>Exemple résolu — développer (x + 2)(x + 3) :</strong></p>
<ul>
<li>(x + 2)(x + 3) = x × x + x × 3 + 2 × x + 2 × 3</li>
<li>= x<sup>2</sup> + 3x + 2x + 6</li>
<li>On <strong>réduit</strong> les termes semblables 3x + 2x = 5x</li>
<li>= <strong>x<sup>2</sup> + 5x + 6</strong>.</li>
</ul>

<h2>2. Réduire une expression</h2>
<p><strong>Réduire</strong>, c'est regrouper les termes semblables (ceux qui ont la même partie littérale). On ajoute uniquement les termes en x<sup>2</sup> entre eux, les termes en x entre eux, et les nombres entre eux.</p>
<ul>
<li>4x + 7 − x + 2 = (4x − x) + (7 + 2) = <strong>3x + 9</strong>.</li>
<li>2x<sup>2</sup> + 3x + x<sup>2</sup> − 5x = <strong>3x<sup>2</sup> − 2x</strong>.</li>
</ul>
<p>On ne peut pas additionner x<sup>2</sup> et x : ce ne sont pas des termes semblables.</p>

<h2>3. Les trois identités remarquables</h2>
<p>Ce sont trois développements à connaître par cœur. Ils servent dans les deux sens : pour développer rapidement et pour factoriser.</p>
<ul>
<li><strong>(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup></strong></li>
<li><strong>(a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup></strong></li>
<li><strong>(a + b)(a − b) = a<sup>2</sup> − b<sup>2</sup></strong></li>
</ul>
<p><strong>Exemple résolu — développer (2x + 3)<sup>2</sup> avec l'identité n°1 :</strong></p>
<ul>
<li>Ici a = 2x et b = 3.</li>
<li>(2x + 3)<sup>2</sup> = (2x)<sup>2</sup> + 2 × (2x) × 3 + 3<sup>2</sup></li>
<li>= <strong>4x<sup>2</sup> + 12x + 9</strong>.</li>
</ul>
<p><strong>Exemple — produit conjugué (x + 5)(x − 5) :</strong> avec a = x et b = 5, on obtient x<sup>2</sup> − 5<sup>2</sup> = <strong>x<sup>2</sup> − 25</strong> (le double produit disparaît).</p>

<h2>4. Factoriser une expression</h2>
<p><strong>Factoriser</strong>, c'est l'opération inverse de développer : transformer une somme en un produit.</p>
<h3>Avec un facteur commun</h3>
<p>On repère le facteur présent dans chaque terme et on le met en évidence.</p>
<p><strong>Exemple résolu — factoriser 6x<sup>2</sup> + 9x :</strong></p>
<ul>
<li>6x<sup>2</sup> = 3x × 2x et 9x = 3x × 3 : le facteur commun est <strong>3x</strong>.</li>
<li>6x<sup>2</sup> + 9x = 3x × 2x + 3x × 3 = <strong>3x(2x + 3)</strong>.</li>
<li>Vérification en développant : 3x(2x + 3) = 6x<sup>2</sup> + 9x. ✓</li>
</ul>
<h3>Avec une identité remarquable</h3>
<p>On reconnaît la forme a<sup>2</sup> − b<sup>2</sup>, a<sup>2</sup> + 2ab + b<sup>2</sup> ou a<sup>2</sup> − 2ab + b<sup>2</sup>.</p>
<p><strong>Exemple résolu — factoriser x<sup>2</sup> − 16 :</strong></p>
<ul>
<li>On écrit 16 = 4<sup>2</sup>, donc x<sup>2</sup> − 16 = x<sup>2</sup> − 4<sup>2</sup>.</li>
<li>C'est la forme a<sup>2</sup> − b<sup>2</sup> avec a = x et b = 4.</li>
<li>x<sup>2</sup> − 16 = <strong>(x − 4)(x + 4)</strong>.</li>
</ul>
<p><strong>Exemple — factoriser x<sup>2</sup> + 10x + 25 :</strong> on reconnaît a<sup>2</sup> + 2ab + b<sup>2</sup> avec a = x, b = 5 (car 25 = 5<sup>2</sup> et 10x = 2 × x × 5). Donc x<sup>2</sup> + 10x + 25 = <strong>(x + 5)<sup>2</sup></strong>.</p>

<h2>5. Substituer et tester une égalité</h2>
<p><strong>Calculer la valeur d'une expression</strong>, c'est remplacer la lettre par un nombre.</p>
<p>Pour A = 2x<sup>2</sup> − 3x + 1 et x = 2 : A = 2 × 2<sup>2</sup> − 3 × 2 + 1 = 2 × 4 − 6 + 1 = 8 − 6 + 1 = <strong>3</strong>.</p>
<p><strong>Tester une égalité</strong> : pour vérifier si une valeur est solution, on calcule séparément les deux membres. Par exemple, 5 est-il solution de 3x − 2 = 13 ? Membre de gauche : 3 × 5 − 2 = 13 ; membre de droite : 13. Les deux sont égaux, donc <strong>oui, 5 est solution</strong>.</p>
`,
  summary: `*Développer* transforme un produit en somme. Simple distributivité : *k(a + b) = ka + kb*. Double distributivité : *(a + b)(c + d) = ac + ad + bc + bd*. Après avoir développé, on *réduit* en regroupant les termes semblables (les x<sup>2</sup> ensemble, les x ensemble, les nombres ensemble).

*Les trois identités remarquables à connaître par cœur :*
(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup>
(a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup>
(a + b)(a − b) = a<sup>2</sup> − b<sup>2</sup>

*Factoriser* est l'opération inverse : on transforme une somme en produit, soit par *facteur commun* (6x<sup>2</sup> + 9x = 3x(2x + 3)), soit en reconnaissant une *identité remarquable* (x<sup>2</sup> − 16 = (x − 4)(x + 4)).

*Substituer* : remplacer la lettre par un nombre pour calculer la valeur d'une expression. *Tester une égalité* : calculer chaque membre de son côté et comparer.

*Réflexe Brevet :* (a + b)<sup>2</sup> n'est PAS égal à a<sup>2</sup> + b<sup>2</sup> — il ne faut jamais oublier le double produit 2ab.`,
  timeline: [
    {
      id: `mch2-tl1`,
      date: `≈ 300 av. J.-C.`,
      title: `Euclide et l'algèbre géométrique`,
      description: `Dans les Éléments, Euclide démontre des identités comme (a + b)<sup>2</sup> en raisonnant sur des aires de carrés et de rectangles, sans encore utiliser de lettres.`,
    },
    {
      id: `mch2-tl2`,
      date: `820`,
      title: `Al-Khwârizmî fonde l'algèbre`,
      description: `Le savant perse écrit un traité sur la résolution des équations. Le mot « algèbre » vient de son titre (al-jabr).`,
    },
    {
      id: `mch2-tl3`,
      date: `1591`,
      title: `Viète et la notation littérale`,
      description: `François Viète introduit l'usage systématique de lettres pour représenter les nombres : le calcul littéral moderne est né.`,
    },
    {
      id: `mch2-tl4`,
      date: `1637`,
      title: `Descartes et les notations actuelles`,
      description: `René Descartes popularise les notations x, y pour les inconnues et l'écriture des puissances comme x<sup>2</sup>, encore utilisées aujourd'hui.`,
    },
  ],
  mindMap: [
    {
      id: `mch2-mm-root`,
      label: `Calcul littéral`,
      description: `Faire des maths avec des lettres : développer, réduire, factoriser.`,
    },
    {
      id: `mch2-mm-dev`,
      label: `Développer`,
      description: `Produit → somme. k(a+b) = ka+kb et (a+b)(c+d) = ac+ad+bc+bd.`,
      parentId: `mch2-mm-root`,
    },
    {
      id: `mch2-mm-red`,
      label: `Réduire`,
      description: `Regrouper les termes semblables (mêmes lettres et mêmes exposants).`,
      parentId: `mch2-mm-root`,
    },
    {
      id: `mch2-mm-ir`,
      label: `Identités remarquables`,
      description: `(a+b)<sup>2</sup>, (a−b)<sup>2</sup>, (a+b)(a−b) : à connaître par cœur.`,
      parentId: `mch2-mm-root`,
    },
    {
      id: `mch2-mm-fact`,
      label: `Factoriser`,
      description: `Somme → produit. Facteur commun ou identité remarquable.`,
      parentId: `mch2-mm-root`,
    },
    {
      id: `mch2-mm-sub`,
      label: `Substituer`,
      description: `Remplacer la lettre par un nombre pour calculer une valeur.`,
      parentId: `mch2-mm-root`,
    },
    {
      id: `mch2-mm-test`,
      label: `Tester une égalité`,
      description: `Calculer chaque membre séparément puis comparer.`,
      parentId: `mch2-mm-root`,
    },
  ],
  characters: [
    {
      id: `mch2-c1`,
      name: `Al-Khwârizmî`,
      dates: `≈ 780 – ≈ 850`,
      role: `Mathématicien perse, père de l'algèbre`,
      importance: `Son traité de référence donne son nom à l'algèbre (al-jabr). Il y expose des méthodes générales pour transformer et résoudre les équations, base du calcul littéral.`,
    },
    {
      id: `mch2-c2`,
      name: `François Viète`,
      dates: `1540 – 1603`,
      role: `Mathématicien français`,
      importance: `Il introduit l'usage de lettres pour désigner aussi bien les inconnues que les nombres connus, rendant possible le calcul littéral tel qu'on l'apprend aujourd'hui.`,
    },
    {
      id: `mch2-c3`,
      name: `René Descartes`,
      dates: `1596 – 1650`,
      role: `Mathématicien et philosophe français`,
      importance: `Il fixe les notations modernes : lettres de fin d'alphabet (x, y, z) pour les inconnues et écriture des puissances en exposant (x<sup>2</sup>).`,
    },
  ],
  dates: [
    {
      date: `Simple distributivité`,
      event: `k(a + b) = ka + kb`,
      explanation: `Développer un facteur devant une parenthèse : il multiplie chaque terme.`,
    },
    {
      date: `Double distributivité`,
      event: `(a + b)(c + d) = ac + ad + bc + bd`,
      explanation: `Développer un produit de deux sommes : chaque terme multiplie chaque terme.`,
    },
    {
      date: `Identité n°1`,
      event: `(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup>`,
      explanation: `Carré d'une somme. Ne jamais oublier le double produit 2ab.`,
    },
    {
      date: `Identité n°2`,
      event: `(a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup>`,
      explanation: `Carré d'une différence. Le double produit est négatif, le b<sup>2</sup> reste positif.`,
    },
    {
      date: `Identité n°3`,
      event: `(a + b)(a − b) = a<sup>2</sup> − b<sup>2</sup>`,
      explanation: `Produit conjugué. Sert surtout à factoriser une différence de deux carrés.`,
    },
    {
      date: `Factoriser`,
      event: `ka + kb = k(a + b)`,
      explanation: `Mettre en évidence le facteur commun k pour transformer une somme en produit.`,
    },
    {
      date: `Substituer`,
      event: `A(x) pour x = n`,
      explanation: `Remplacer la lettre par sa valeur pour calculer le résultat de l'expression.`,
    },
  ],
  flashcards: [
    {
      id: `mch2-fc1`,
      question: `Que veut dire « développer » ?`,
      answer: `Transformer un produit en une somme (en supprimant les parenthèses).`,
      category: `Vocabulaire`,
    },
    {
      id: `mch2-fc2`,
      question: `Que veut dire « factoriser » ?`,
      answer: `Transformer une somme en un produit (c'est l'inverse de développer).`,
      category: `Vocabulaire`,
    },
    {
      id: `mch2-fc3`,
      question: `Développe k(a + b).`,
      answer: `k(a + b) = ka + kb (simple distributivité).`,
      category: `Distributivité`,
    },
    {
      id: `mch2-fc4`,
      question: `Développe (a + b)(c + d).`,
      answer: `(a + b)(c + d) = ac + ad + bc + bd (double distributivité).`,
      category: `Distributivité`,
    },
    {
      id: `mch2-fc5`,
      question: `Identité n°1 : (a + b)<sup>2</sup> = ?`,
      answer: `a<sup>2</sup> + 2ab + b<sup>2</sup>.`,
      category: `Identités remarquables`,
    },
    {
      id: `mch2-fc6`,
      question: `Identité n°2 : (a − b)<sup>2</sup> = ?`,
      answer: `a<sup>2</sup> − 2ab + b<sup>2</sup>.`,
      category: `Identités remarquables`,
    },
    {
      id: `mch2-fc7`,
      question: `Identité n°3 : (a + b)(a − b) = ?`,
      answer: `a<sup>2</sup> − b<sup>2</sup> (différence de deux carrés).`,
      category: `Identités remarquables`,
    },
    {
      id: `mch2-fc8`,
      question: `Que signifie « réduire » une expression ?`,
      answer: `Regrouper les termes semblables : les x<sup>2</sup> ensemble, les x ensemble, les nombres ensemble.`,
      category: `Vocabulaire`,
    },
    {
      id: `mch2-fc9`,
      question: `Factorise x<sup>2</sup> − 9.`,
      answer: `x<sup>2</sup> − 9 = x<sup>2</sup> − 3<sup>2</sup> = (x − 3)(x + 3).`,
      category: `Factorisation`,
    },
    {
      id: `mch2-fc10`,
      question: `Factorise 6x<sup>2</sup> + 9x.`,
      answer: `Facteur commun 3x : 6x<sup>2</sup> + 9x = 3x(2x + 3).`,
      category: `Factorisation`,
    },
    {
      id: `mch2-fc11`,
      question: `Combien vaut A = 2x<sup>2</sup> − 3x + 1 pour x = 2 ?`,
      answer: `A = 2 × 4 − 6 + 1 = 3.`,
      category: `Substitution`,
    },
    {
      id: `mch2-fc12`,
      question: `Piège : (a + b)<sup>2</sup> est-il égal à a<sup>2</sup> + b<sup>2</sup> ?`,
      answer: `Non ! Il manque le double produit : (a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup>.`,
      category: `Pièges`,
    },
  ],
  questions: [
    {
      id: `mch2-q1`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Développe 3(x + 4).`,
      options: [`3x + 4`, `3x + 12`, `3x + 7`, `x + 12`],
      answer: `3x + 12`,
      explanation: `Le 3 multiplie chaque terme : 3 × x + 3 × 4 = 3x + 12.`,
      mnemonic: `Le facteur devant la parenthèse touche TOUS les termes.`,
    },
    {
      id: `mch2-q2`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Est-il vrai que (a + b)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> ?`,
      answer: false,
      explanation: `Faux. On oublie le double produit : (a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup>.`,
      trap: `C'est l'erreur la plus fréquente au Brevet.`,
    },
    {
      id: `mch2-q3`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Factorise 5x + 10.`,
      options: [`5(x + 10)`, `5(x + 2)`, `x(5 + 10)`, `5x(1 + 2)`],
      answer: `5(x + 2)`,
      explanation: `Le facteur commun est 5 : 5x + 10 = 5 × x + 5 × 2 = 5(x + 2).`,
    },
    {
      id: `mch2-q4`,
      type: `trous`,
      difficulty: `easy`,
      question: `Complète l'identité : (a + b)<sup>2</sup> = a<sup>2</sup> + [2ab] + b<sup>2</sup>.`,
      answer: [`2ab`],
      explanation: `Le terme du milieu est le double produit 2ab.`,
      mnemonic: `Carré du 1er + double produit + carré du 2nd.`,
    },
    {
      id: `mch2-q5`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Réduis l'expression 4x + 7 − x + 2.`,
      options: [`3x + 9`, `5x + 9`, `3x + 5`, `4x + 9`],
      answer: `3x + 9`,
      explanation: `On regroupe : (4x − x) + (7 + 2) = 3x + 9.`,
    },
    {
      id: `mch2-q6`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Développe et réduis (x + 2)(x + 3).`,
      options: [`x<sup>2</sup> + 6`, `x<sup>2</sup> + 5x + 6`, `x<sup>2</sup> + 6x + 5`, `2x + 5`],
      answer: `x<sup>2</sup> + 5x + 6`,
      explanation: `(x + 2)(x + 3) = x<sup>2</sup> + 3x + 2x + 6 = x<sup>2</sup> + 5x + 6.`,
    },
    {
      id: `mch2-q7`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Développe (x − 5)<sup>2</sup>.`,
      options: [`x<sup>2</sup> − 25`, `x<sup>2</sup> + 25`, `x<sup>2</sup> − 10x + 25`, `x<sup>2</sup> − 5x + 25`],
      answer: `x<sup>2</sup> − 10x + 25`,
      explanation: `Identité n°2 avec a = x et b = 5 : x<sup>2</sup> − 2 × x × 5 + 5<sup>2</sup> = x<sup>2</sup> − 10x + 25.`,
      trap: `Le b<sup>2</sup> = 25 reste POSITIF, seul le double produit est négatif.`,
    },
    {
      id: `mch2-q8`,
      type: `relier`,
      difficulty: `medium`,
      question: `Relie chaque expression à sa forme développée ou factorisée.`,
      options: [`a<sup>2</sup> − b<sup>2</sup>`, `a<sup>2</sup> + 2ab + b<sup>2</sup>`, `a<sup>2</sup> − 2ab + b<sup>2</sup>`],
      answer: {
        '(a + b)<sup>2</sup>': `a<sup>2</sup> + 2ab + b<sup>2</sup>`,
        '(a − b)<sup>2</sup>': `a<sup>2</sup> − 2ab + b<sup>2</sup>`,
        '(a + b)(a − b)': `a<sup>2</sup> − b<sup>2</sup>`,
      },
      explanation: `Ce sont les trois identités remarquables du programme de 3e.`,
    },
    {
      id: `mch2-q9`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Est-il vrai que x<sup>2</sup> − 9 = (x − 3)(x + 3) ?`,
      answer: true,
      explanation: `Vrai. C'est l'identité a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b) avec a = x et b = 3 (car 9 = 3<sup>2</sup>).`,
    },
    {
      id: `mch2-q10`,
      type: `trous`,
      difficulty: `medium`,
      question: `Factorise en complétant : x<sup>2</sup> − 16 = (x − [4])(x + 4).`,
      answer: [`4`],
      explanation: `16 = 4<sup>2</sup>, donc x<sup>2</sup> − 16 = x<sup>2</sup> − 4<sup>2</sup> = (x − 4)(x + 4).`,
      mnemonic: `Différence de deux carrés : (a − b)(a + b).`,
    },
    {
      id: `mch2-q11`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Développe et réduis (2x + 3)(x − 4).`,
      options: [`2x<sup>2</sup> − 12`, `2x<sup>2</sup> − 5x − 12`, `2x<sup>2</sup> + 5x − 12`, `2x<sup>2</sup> − 8x − 12`],
      answer: `2x<sup>2</sup> − 5x − 12`,
      explanation: `(2x + 3)(x − 4) = 2x<sup>2</sup> − 8x + 3x − 12 = 2x<sup>2</sup> − 5x − 12.`,
      trap: `Bien gérer les signes : 2x × (−4) = −8x et 3 × (−4) = −12.`,
    },
    {
      id: `mch2-q12`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Factorise x<sup>2</sup> + 8x + 16.`,
      options: [`(x + 4)<sup>2</sup>`, `(x + 8)<sup>2</sup>`, `(x − 4)<sup>2</sup>`, `(x + 4)(x − 4)`],
      answer: `(x + 4)<sup>2</sup>`,
      explanation: `On reconnaît a<sup>2</sup> + 2ab + b<sup>2</sup> avec a = x, b = 4 : 16 = 4<sup>2</sup> et 8x = 2 × x × 4. Donc (x + 4)<sup>2</sup>.`,
    },
    {
      id: `mch2-q13`,
      type: `ordonner`,
      difficulty: `hard`,
      question: `Remets dans l'ordre les étapes pour factoriser 4x<sup>2</sup> − 9.`,
      options: [
        `On reconnaît la forme a<sup>2</sup> − b<sup>2</sup>`,
        `On écrit 4x<sup>2</sup> = (2x)<sup>2</sup> et 9 = 3<sup>2</sup>`,
        `On applique (a − b)(a + b) avec a = 2x et b = 3`,
        `On obtient (2x − 3)(2x + 3)`,
      ],
      answer: [1, 0, 2, 3],
      explanation: `On identifie d'abord les carrés (2x)<sup>2</sup> et 3<sup>2</sup>, on reconnaît la différence de carrés, on applique l'identité, puis on écrit le résultat (2x − 3)(2x + 3).`,
    },
    {
      id: `mch2-q14`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Factorise 6x<sup>2</sup> + 9x.`,
      options: [`3(2x<sup>2</sup> + 3x)`, `3x(2x + 3)`, `x(6x + 9)`, `6x(x + 9)`],
      answer: `3x(2x + 3)`,
      explanation: `Le facteur commun le plus complet est 3x : 6x<sup>2</sup> = 3x × 2x et 9x = 3x × 3, donc 3x(2x + 3).`,
      trap: `x ou 3 seuls ne sont pas LE plus grand facteur commun : c'est 3x.`,
    },
    {
      id: `mch2-q15`,
      type: `brevet`,
      difficulty: `hard`,
      question: `On donne A = (x + 3)<sup>2</sup> − 4. Développe puis réduis A.`,
      answer: `(x + 3)<sup>2</sup> = x<sup>2</sup> + 6x + 9. Donc A = x<sup>2</sup> + 6x + 9 − 4 = x<sup>2</sup> + 6x + 5.`,
      explanation: `On développe d'abord le carré avec l'identité n°1 (a = x, b = 3), puis on soustrait 4 et on réduit : x<sup>2</sup> + 6x + 5.`,
    },
    {
      id: `mch2-q16`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Factorise 25x<sup>2</sup> − 16.`,
      options: [`(5x − 4)(5x + 4)`, `(5x − 16)(5x + 16)`, `(25x − 4)(x + 4)`, `(5x − 4)<sup>2</sup>`],
      answer: `(5x − 4)(5x + 4)`,
      explanation: `25x<sup>2</sup> = (5x)<sup>2</sup> et 16 = 4<sup>2</sup>. Différence de carrés : (5x − 4)(5x + 4).`,
    },
    {
      id: `mch2-q17`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Soit B = (2x − 1)(x + 4) − (2x − 1)(x − 3). Factorise B puis développe le résultat.`,
      answer: `Le facteur commun est (2x − 1). B = (2x − 1)[(x + 4) − (x − 3)] = (2x − 1)(x + 4 − x + 3) = (2x − 1) × 7 = 7(2x − 1) = 14x − 7.`,
      explanation: `On repère (2x − 1) en facteur commun, on simplifie le crochet : x + 4 − x + 3 = 7, d'où B = 7(2x − 1) = 14x − 7.`,
      trap: `Attention au signe : − (x − 3) devient − x + 3.`,
    },
    {
      id: `mch2-q18`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Développe (3x − 2)<sup>2</sup>.`,
      options: [`9x<sup>2</sup> − 4`, `9x<sup>2</sup> − 12x + 4`, `9x<sup>2</sup> − 6x + 4`, `3x<sup>2</sup> − 12x + 4`],
      answer: `9x<sup>2</sup> − 12x + 4`,
      explanation: `Identité n°2 avec a = 3x, b = 2 : (3x)<sup>2</sup> − 2 × 3x × 2 + 2<sup>2</sup> = 9x<sup>2</sup> − 12x + 4.`,
      trap: `(3x)<sup>2</sup> = 9x<sup>2</sup> et non 3x<sup>2</sup> : on élève AUSSI le 3 au carré.`,
    },
    {
      id: `mch2-q19`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Quelle est la valeur de A = x<sup>2</sup> − 4x + 1 pour x = 3 ?`,
      options: [`−2`, `4`, `−2x`, `10`],
      answer: `−2`,
      explanation: `A = 3<sup>2</sup> − 4 × 3 + 1 = 9 − 12 + 1 = −2.`,
    },
    {
      id: `mch2-q20`,
      type: `personnage`,
      difficulty: `easy`,
      question: `Quel mathématicien a introduit l'usage systématique de lettres pour représenter les nombres dans les calculs ?`,
      options: [`François Viète`, `Al-Khwârizmî`, `Pythagore`, `Thalès`],
      answer: `François Viète`,
      explanation: `Au XVIe siècle, François Viète généralise la notation littérale, fondement du calcul littéral moderne.`,
    },
  ],
  anecdotes: [
    `Le mot « algèbre » vient de l'arabe al-jabr, tiré du titre du traité d'Al-Khwârizmî vers 820. Le mot « algorithme » vient lui aussi de son nom !`,
    `Avant François Viète, on écrivait les équations avec des phrases entières en latin. Remplacer les mots par des lettres a rendu les calculs bien plus rapides et généraux.`,
    `Les identités remarquables étaient déjà connues d'Euclide il y a plus de 2300 ans : il les démontrait géométriquement, en découpant des carrés et des rectangles, sans aucune lettre.`,
  ],
  pitfalls: `Le piège classique : écrire (a + b)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> en oubliant le double produit 2ab, et se tromper de signe en factorisant ou en développant une différence.`,
};
