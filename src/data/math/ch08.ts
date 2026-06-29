import { Chapter } from '../../types';

export const mathCh8: Chapter = {
  id: `mch8`,
  slug: `statistiques`,
  number: 8,
  subject: `mathematiques`,
  title: `Statistiques`,
  subtitle: `Effectifs, fréquences, moyenne, médiane et étendue d'une série de données`,
  introduction: `Les statistiques servent à étudier et résumer un grand nombre de données : tailles d'une classe, notes d'un contrôle, températures d'un mois... Plutôt que de garder une longue liste de chiffres, on calcule quelques nombres qui la résument : la moyenne, la médiane, l'étendue. Au Brevet, on te demande de lire des tableaux et des diagrammes, de calculer une fréquence en pourcentage, et de comparer ces indicateurs. Ce chapitre te donne toutes les méthodes, avec la différence essentielle entre moyenne et médiane.`,

  courseContent: `
<h2>I. Vocabulaire des statistiques</h2>
<p>Une <strong>série statistique</strong> est un ensemble de données récoltées sur une population (par exemple les élèves d'une classe). Chaque donnée prend une <strong>valeur</strong>.</p>
<ul>
  <li>L'<strong>effectif</strong> d'une valeur est le <strong>nombre de fois</strong> que cette valeur apparaît dans la série.</li>
  <li>L'<strong>effectif total</strong> est le nombre total de données : c'est la <strong>somme de tous les effectifs</strong>.</li>
  <li>La <strong>fréquence</strong> d'une valeur est la proportion qu'elle représente : <strong>fréquence = effectif ÷ effectif total</strong>. C'est un nombre entre 0 et 1, qu'on exprime souvent en <strong>pourcentage</strong> en multipliant par 100.</li>
</ul>
<p>On présente souvent une série dans un <strong>tableau d'effectifs</strong>. Exemple : on demande à 20 élèves combien ils ont de frères et sœurs.</p>
<table border="1" cellpadding="6" cellspacing="0">
  <tr><th>Nombre de frères/sœurs</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><th>Total</th></tr>
  <tr><th>Effectif</th><td>4</td><td>6</td><td>7</td><td>2</td><td>1</td><th>20</th></tr>
  <tr><th>Fréquence</th><td>20 %</td><td>30 %</td><td>35 %</td><td>10 %</td><td>5 %</td><th>100 %</th></tr>
</table>
<p>Vérification de l'effectif total : 4 + 6 + 7 + 2 + 1 = <strong>20</strong>. La somme des fréquences fait toujours <strong>100 %</strong> (ou 1).</p>
<p><strong>Exemple résolu (fréquence) :</strong> la valeur « 2 frères/sœurs » a un effectif de 7. Sa fréquence vaut 7 ÷ 20 = 0,35, soit <strong>0,35 × 100 = 35 %</strong>.</p>

<h2>II. La moyenne</h2>
<p>La <strong>moyenne</strong> d'une série répartit le total de façon égale entre toutes les données. C'est l'indicateur le plus connu.</p>
<h3>1. Moyenne simple</h3>
<p>Quand on a une simple liste de valeurs : <strong>moyenne = somme des valeurs ÷ nombre de valeurs</strong>.</p>
<p><strong>Exemple résolu :</strong> un élève a obtenu les notes 9, 12, 15, 8 et 16.</p>
<p>Somme = 9 + 12 + 15 + 8 + 16 = 60. Il y a 5 notes, donc moyenne = 60 ÷ 5 = <strong>12</strong>.</p>
<h3>2. Moyenne pondérée</h3>
<p>Quand chaque valeur a un <strong>effectif</strong> (ou un <strong>coefficient</strong>), on utilise la <strong>moyenne pondérée</strong> :</p>
<p style="text-align:center;"><strong>moyenne = somme des (valeur × effectif) ÷ effectif total</strong></p>
<p><strong>Exemple résolu 1 (avec effectifs) :</strong> reprenons le tableau des frères et sœurs.</p>
<table border="1" cellpadding="6" cellspacing="0">
  <tr><th>Valeur</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
  <tr><th>Effectif</th><td>4</td><td>6</td><td>7</td><td>2</td><td>1</td></tr>
  <tr><th>Valeur × effectif</th><td>0</td><td>6</td><td>14</td><td>6</td><td>4</td></tr>
</table>
<p>Somme des produits = 0 + 6 + 14 + 6 + 4 = 30. Effectif total = 20.</p>
<p>Moyenne = 30 ÷ 20 = <strong>1,5 frère ou sœur par élève</strong> en moyenne.</p>
<p><strong>Exemple résolu 2 (avec coefficients) :</strong> au brevet blanc, un élève a 14 en maths (coefficient 3), 11 en français (coefficient 2) et 8 en histoire (coefficient 1).</p>
<p>Somme pondérée = 14 × 3 + 11 × 2 + 8 × 1 = 42 + 22 + 8 = 72. Somme des coefficients = 3 + 2 + 1 = 6.</p>
<p>Moyenne = 72 ÷ 6 = <strong>12</strong>. (Attention : ce n'est pas (14 + 11 + 8) ÷ 3 = 11, car les coefficients comptent !)</p>

<h2>III. La médiane</h2>
<p>La <strong>médiane</strong> est la valeur qui <strong>partage la série ordonnée en deux moitiés</strong> : au moins la moitié des données lui sont inférieures ou égales, et au moins la moitié lui sont supérieures ou égales.</p>
<p style="background:#fff3cd;padding:8px;"><strong>Règle d'or : il faut TOUJOURS ranger la série dans l'ordre croissant avant de chercher la médiane.</strong></p>
<h3>1. Effectif total impair</h3>
<p>S'il y a un nombre <strong>impair</strong> de données, la médiane est la <strong>valeur du milieu</strong>.</p>
<p><strong>Exemple résolu :</strong> sept notes en désordre : 13 ; 6 ; 11 ; 18 ; 9 ; 15 ; 8.</p>
<p>On range dans l'ordre croissant : 6 ; 8 ; 9 ; <strong>11</strong> ; 13 ; 15 ; 18.</p>
<p>Il y a 7 valeurs : la médiane est la 4<sup>e</sup> (3 valeurs avant, 3 valeurs après). Donc <strong>médiane = 11</strong>.</p>
<h3>2. Effectif total pair</h3>
<p>S'il y a un nombre <strong>pair</strong> de données, la médiane est la <strong>moyenne des deux valeurs centrales</strong>.</p>
<p><strong>Exemple résolu :</strong> huit temps de course (en minutes) en désordre : 12 ; 4 ; 16 ; 9 ; 20 ; 7 ; 10 ; 15.</p>
<p>On range : 4 ; 7 ; 9 ; <strong>10</strong> ; <strong>12</strong> ; 15 ; 16 ; 20.</p>
<p>Il y a 8 valeurs : les deux du milieu sont la 4<sup>e</sup> (10) et la 5<sup>e</sup> (12). Médiane = (10 + 12) ÷ 2 = <strong>11</strong>.</p>
<p><strong>Moyenne ou médiane ?</strong> La moyenne est sensible aux valeurs extrêmes ; la médiane non. Si un seul élève gagne un salaire énorme, la moyenne des salaires monte beaucoup, mais la médiane reste représentative de la majorité.</p>
<p><em>Pour aller plus loin (hors programme strict) :</em> on partage parfois la série en quatre quarts par les <strong>quartiles</strong> Q1 et Q3 ; au niveau 3<sup>e</sup>, on s'en tient le plus souvent à la médiane.</p>

<h2>IV. L'étendue</h2>
<p>L'<strong>étendue</strong> mesure la dispersion, c'est-à-dire l'écart entre la plus grande et la plus petite valeur :</p>
<p style="text-align:center;"><strong>étendue = valeur maximale − valeur minimale</strong></p>
<p><strong>Exemple résolu :</strong> pour les sept notes 6 ; 8 ; 9 ; 11 ; 13 ; 15 ; 18, la plus grande est 18 et la plus petite est 6.</p>
<p>Étendue = 18 − 6 = <strong>12</strong>. Plus l'étendue est grande, plus les valeurs sont dispersées.</p>

<h2>V. Lire des tableaux et des diagrammes</h2>
<p>Au Brevet, les données sont souvent fournies dans un <strong>diagramme en barres</strong>, un <strong>diagramme circulaire</strong> (camembert) ou un tableau. Quelques réflexes :</p>
<ul>
  <li>Dans un <strong>diagramme en barres</strong>, la hauteur de chaque barre donne l'effectif d'une valeur.</li>
  <li>Dans un <strong>diagramme circulaire</strong>, chaque secteur est proportionnel à l'effectif : un angle de 360° représente l'effectif total. Pour une valeur : angle = fréquence × 360°.</li>
  <li>Avant tout calcul, repère bien l'<strong>effectif total</strong> : c'est lui qui sert de dénominateur pour les fréquences et de diviseur pour la moyenne.</li>
</ul>
<p><strong>Exemple résolu (angle d'un diagramme circulaire) :</strong> la valeur « 1 frère/sœur » a une fréquence de 30 %. Son angle vaut 0,30 × 360° = <strong>108°</strong>.</p>
`,

  summary: `*Effectif* d'une valeur = nombre de fois qu'elle apparaît. *Effectif total* = somme de tous les effectifs.

*Fréquence* = effectif ÷ effectif total. On l'exprime en pourcentage en multipliant par 100. La somme des fréquences vaut toujours *100 %*.

*Moyenne simple* = somme des valeurs ÷ nombre de valeurs. *Moyenne pondérée* = somme des (valeur × effectif) ÷ effectif total. Les coefficients comptent !

*Médiane* = valeur qui partage la série *ordonnée* en deux moitiés. On ORDONNE d'abord. Effectif *impair* : valeur du milieu. Effectif *pair* : moyenne des deux valeurs centrales.

*Étendue* = valeur maximale − valeur minimale. Elle mesure la dispersion.

*Moyenne vs médiane* : la moyenne est sensible aux valeurs extrêmes, pas la médiane. Pour des diagrammes circulaires : angle = fréquence × 360°.`,

  timeline: [
    {
      id: `mch8-tl1`,
      date: `Antiquité`,
      title: `Les premiers recensements`,
      description: `Dès l'Égypte ancienne et l'Empire romain, on compte la population et les récoltes pour lever l'impôt et organiser l'armée : ce sont les ancêtres des statistiques.`,
    },
    {
      id: `mch8-tl2`,
      date: `1662`,
      title: `John Graunt et la mortalité`,
      description: `Le marchand anglais John Graunt analyse les registres de décès de Londres et publie les premières tables de mortalité : la statistique devient une science d'observation.`,
    },
    {
      id: `mch8-tl3`,
      date: `1809`,
      title: `Gauss et la courbe en cloche`,
      description: `Carl Friedrich Gauss décrit la loi normale, la fameuse « courbe en cloche » qui modélise la répartition des erreurs de mesure et de nombreuses données naturelles.`,
    },
    {
      id: `mch8-tl4`,
      date: `1835`,
      title: `Quetelet et l'homme moyen`,
      description: `Adolphe Quetelet applique les statistiques à la société humaine et invente la notion d'« homme moyen ». Il pose les bases de la statistique sociale.`,
    },
    {
      id: `mch8-tl5`,
      date: `XXIe siècle`,
      title: `L'ère des données massives`,
      description: `Avec les ordinateurs et Internet, on traite des milliards de données (big data). Moyennes, médianes et fréquences restent les outils de base pour les résumer.`,
    },
  ],

  mindMap: [
    {
      id: `mch8-mm-root`,
      label: `Statistiques`,
      description: `Récolter, résumer et interpréter des données.`,
    },
    {
      id: `mch8-mm-1`,
      label: `Vocabulaire`,
      description: `Effectif, effectif total, fréquence (en %).`,
      parentId: `mch8-mm-root`,
    },
    {
      id: `mch8-mm-2`,
      label: `Moyenne`,
      description: `Simple ou pondérée : somme(valeur × effectif) ÷ effectif total.`,
      parentId: `mch8-mm-root`,
    },
    {
      id: `mch8-mm-3`,
      label: `Médiane`,
      description: `Partage la série ordonnée en deux moitiés.`,
      parentId: `mch8-mm-root`,
    },
    {
      id: `mch8-mm-4`,
      label: `Étendue`,
      description: `max − min : mesure la dispersion.`,
      parentId: `mch8-mm-root`,
    },
    {
      id: `mch8-mm-5`,
      label: `Représentations`,
      description: `Tableaux d'effectifs, diagrammes en barres et circulaires.`,
      parentId: `mch8-mm-root`,
    },
  ],

  characters: [
    {
      id: `mch8-ch-quetelet`,
      name: `Adolphe Quetelet`,
      dates: `1796 – 1874`,
      role: `Mathématicien et astronome belge`,
      importance: `Fondateur de la statistique sociale, il a appliqué les moyennes et les fréquences à l'étude des populations humaines et créé la notion d'« homme moyen ». L'indice de masse corporelle (IMC) porte d'ailleurs son nom.`,
    },
    {
      id: `mch8-ch-gauss`,
      name: `Carl Friedrich Gauss`,
      dates: `1777 – 1855`,
      role: `Mathématicien allemand`,
      importance: `Surnommé le prince des mathématiciens, il a décrit la loi normale (la courbe en cloche) qui modélise la répartition de très nombreuses données, des erreurs de mesure aux tailles humaines.`,
    },
    {
      id: `mch8-ch-nightingale`,
      name: `Florence Nightingale`,
      dates: `1820 – 1910`,
      role: `Infirmière et statisticienne britannique`,
      importance: `Pionnière des diagrammes statistiques, elle a utilisé des graphiques colorés pour montrer les causes de mortalité et convaincre de l'importance de l'hygiène dans les hôpitaux.`,
    },
  ],

  dates: [
    {
      date: `Effectif`,
      event: `Nombre de fois qu'une valeur apparaît`,
      explanation: `Première information à lire dans un tableau ou un diagramme en barres.`,
    },
    {
      date: `Effectif total`,
      event: `Somme de tous les effectifs`,
      explanation: `Sert de diviseur pour la moyenne et de dénominateur pour les fréquences.`,
    },
    {
      date: `Fréquence`,
      event: `effectif ÷ effectif total`,
      explanation: `Donne la proportion d'une valeur ; on la multiplie par 100 pour l'avoir en %.`,
    },
    {
      date: `Fréquence en %`,
      event: `(effectif ÷ effectif total) × 100`,
      explanation: `La somme de toutes les fréquences vaut toujours 100 %.`,
    },
    {
      date: `Moyenne simple`,
      event: `somme des valeurs ÷ nombre de valeurs`,
      explanation: `À utiliser quand on a une simple liste de valeurs sans effectifs.`,
    },
    {
      date: `Moyenne pondérée`,
      event: `somme(valeur × effectif) ÷ effectif total`,
      explanation: `À utiliser dès qu'il y a des effectifs ou des coefficients.`,
    },
    {
      date: `Médiane`,
      event: `Valeur qui partage la série ordonnée en deux`,
      explanation: `Impair : valeur du milieu. Pair : moyenne des deux valeurs centrales.`,
    },
    {
      date: `Étendue`,
      event: `valeur maximale − valeur minimale`,
      explanation: `Mesure la dispersion : plus elle est grande, plus les données sont éparpillées.`,
    },
  ],

  flashcards: [
    {
      id: `mch8-fc1`,
      question: `Qu'est-ce que l'effectif d'une valeur ?`,
      answer: `Le nombre de fois que cette valeur apparaît dans la série.`,
      category: `Vocabulaire`,
    },
    {
      id: `mch8-fc2`,
      question: `Comment calcule-t-on une fréquence ?`,
      answer: `Fréquence = effectif ÷ effectif total. On la multiplie par 100 pour l'exprimer en pourcentage.`,
      category: `Vocabulaire`,
    },
    {
      id: `mch8-fc3`,
      question: `Combien vaut la somme de toutes les fréquences d'une série ?`,
      answer: `Toujours 1, c'est-à-dire 100 %.`,
      category: `Vocabulaire`,
    },
    {
      id: `mch8-fc4`,
      question: `Quelle est la formule de la moyenne pondérée ?`,
      answer: `Moyenne = somme des (valeur × effectif) ÷ effectif total.`,
      category: `Moyenne`,
    },
    {
      id: `mch8-fc5`,
      question: `Comment calcule-t-on une moyenne simple ?`,
      answer: `On additionne toutes les valeurs, puis on divise par le nombre de valeurs.`,
      category: `Moyenne`,
    },
    {
      id: `mch8-fc6`,
      question: `Qu'est-ce que la médiane d'une série ?`,
      answer: `La valeur qui partage la série ordonnée en deux moitiés de même effectif.`,
      category: `Médiane`,
    },
    {
      id: `mch8-fc7`,
      question: `Que faire AVANT de chercher une médiane ?`,
      answer: `Ranger la série dans l'ordre croissant.`,
      category: `Médiane`,
    },
    {
      id: `mch8-fc8`,
      question: `Comment trouver la médiane si l'effectif total est pair ?`,
      answer: `On calcule la moyenne des deux valeurs centrales.`,
      category: `Médiane`,
    },
    {
      id: `mch8-fc9`,
      question: `Comment calcule-t-on l'étendue d'une série ?`,
      answer: `Étendue = valeur maximale − valeur minimale.`,
      category: `Étendue`,
    },
    {
      id: `mch8-fc10`,
      question: `Quel indicateur est sensible aux valeurs extrêmes : la moyenne ou la médiane ?`,
      answer: `La moyenne. La médiane, elle, n'est presque pas modifiée par une valeur extrême.`,
      category: `Comparaison`,
    },
  ],

  questions: [
    {
      id: `mch8-q1`,
      type: `boolean`,
      difficulty: `easy`,
      question: `L'effectif total d'une série est égal à la somme de tous les effectifs.`,
      options: [`Vrai`, `Faux`],
      answer: true,
      explanation: `L'effectif total est bien le nombre total de données, donc la somme de tous les effectifs de chaque valeur.`,
      mnemonic: `Effectif total = on additionne toutes les colonnes du tableau.`,
    },
    {
      id: `mch8-q2`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Dans une classe de 20 élèves, 6 ont les yeux bleus. Quelle est la fréquence des yeux bleus ?`,
      options: [`6 %`, `20 %`, `30 %`, `60 %`],
      answer: `30 %`,
      explanation: `Fréquence = effectif ÷ effectif total = 6 ÷ 20 = 0,3 = 30 %.`,
      mnemonic: `Fréquence = la partie ÷ le tout, puis × 100.`,
    },
    {
      id: `mch8-q3`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Quelle est l'étendue de la série 7 ; 12 ; 4 ; 15 ; 9 ?`,
      options: [`4`, `11`, `15`, `19`],
      answer: `11`,
      explanation: `La plus grande valeur est 15, la plus petite est 4. Étendue = 15 − 4 = 11.`,
      mnemonic: `Étendue = max − min.`,
    },
    {
      id: `mch8-q4`,
      type: `trous`,
      difficulty: `easy`,
      question: `Complète : l'étendue d'une série se calcule par la valeur [maximale] moins la valeur [minimale].`,
      answer: [`maximale`, `minimale`],
      explanation: `Étendue = valeur maximale − valeur minimale ; elle mesure l'écart entre les deux extrêmes.`,
    },
    {
      id: `mch8-q5`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Que représente la médiane d'une série de données ?`,
      options: [
        `La valeur qui apparaît le plus souvent`,
        `La valeur qui partage la série ordonnée en deux moitiés`,
        `La différence entre la plus grande et la plus petite valeur`,
        `La somme des valeurs divisée par leur nombre`,
      ],
      answer: `La valeur qui partage la série ordonnée en deux moitiés`,
      explanation: `La médiane partage la série rangée dans l'ordre en deux groupes de même effectif. La dernière proposition décrit la moyenne, la troisième l'étendue.`,
      trap: `Ne pas confondre médiane (partage en deux) et moyenne (somme ÷ nombre).`,
    },
    {
      id: `mch8-q6`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Un élève a obtenu les notes 9, 12, 15, 8 et 16. Quelle est sa moyenne ?`,
      options: [`11`, `12`, `13`, `15`],
      answer: `12`,
      explanation: `Somme = 9 + 12 + 15 + 8 + 16 = 60. Il y a 5 notes, donc moyenne = 60 ÷ 5 = 12.`,
      mnemonic: `Moyenne simple : on additionne tout, puis on divise par le nombre de valeurs.`,
    },
    {
      id: `mch8-q7`,
      type: `relier`,
      difficulty: `medium`,
      question: `Relie chaque indicateur statistique à sa définition.`,
      options: [
        `somme des valeurs ÷ nombre de valeurs`,
        `valeur qui partage la série ordonnée en deux`,
        `valeur maximale − valeur minimale`,
      ],
      answer: {
        'Moyenne': `somme des valeurs ÷ nombre de valeurs`,
        'Médiane': `valeur qui partage la série ordonnée en deux`,
        'Étendue': `valeur maximale − valeur minimale`,
      },
      explanation: `La moyenne résume avec un partage égal, la médiane coupe la série ordonnée en deux moitiés, l'étendue mesure la dispersion (max − min).`,
    },
    {
      id: `mch8-q8`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Quelle est la médiane de la série déjà ordonnée 6 ; 8 ; 9 ; 11 ; 13 ; 15 ; 18 ?`,
      options: [`9`, `11`, `12`, `13`],
      answer: `11`,
      explanation: `Il y a 7 valeurs (effectif impair). La médiane est la 4e valeur, avec 3 valeurs avant et 3 après : c'est 11.`,
      mnemonic: `Impair : la médiane est la valeur du milieu.`,
    },
    {
      id: `mch8-q9`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Pour trouver la médiane, il faut d'abord ranger la série dans l'ordre croissant.`,
      options: [`Vrai`, `Faux`],
      answer: true,
      explanation: `La médiane partage la série ORDONNÉE : sans ranger les valeurs, on trouve une valeur fausse.`,
      trap: `Erreur classique : prendre la valeur « du milieu » d'une liste en désordre.`,
    },
    {
      id: `mch8-q10`,
      type: `ordonner`,
      difficulty: `medium`,
      question: `Range la série 13 ; 6 ; 11 ; 8 dans l'ordre croissant pour préparer le calcul de la médiane.`,
      options: [`13`, `6`, `11`, `8`],
      answer: [1, 3, 2, 0],
      explanation: `Dans l'ordre croissant : 6 (indice 1), 8 (indice 3), 11 (indice 2), 13 (indice 0). On obtient 6 ; 8 ; 11 ; 13.`,
      mnemonic: `On ordonne toujours du plus petit au plus grand avant la médiane.`,
    },
    {
      id: `mch8-q11`,
      type: `qcm`,
      difficulty: `hard`,
      question: `On a relevé le nombre de frères/sœurs de 20 élèves : valeur 0 (effectif 4), 1 (effectif 6), 2 (effectif 7), 3 (effectif 2), 4 (effectif 1). Quelle est la moyenne ?`,
      options: [`1,5`, `2`, `2,5`, `3`],
      answer: `1,5`,
      explanation: `Somme pondérée = 0×4 + 1×6 + 2×7 + 3×2 + 4×1 = 0 + 6 + 14 + 6 + 4 = 30. Effectif total = 20. Moyenne = 30 ÷ 20 = 1,5.`,
      mnemonic: `Moyenne pondérée = somme(valeur × effectif) ÷ effectif total.`,
      trap: `Ne pas diviser par 5 (le nombre de valeurs) : il faut diviser par 20 (l'effectif total).`,
    },
    {
      id: `mch8-q12`,
      type: `brevet`,
      difficulty: `hard`,
      question: `Voici huit temps de course (en minutes) : 12 ; 4 ; 16 ; 9 ; 20 ; 7 ; 10 ; 15. Détermine la médiane de cette série.`,
      answer: `On range d'abord dans l'ordre croissant : 4 ; 7 ; 9 ; 10 ; 12 ; 15 ; 16 ; 20. Il y a 8 valeurs (effectif pair) : les deux valeurs centrales sont la 4e (10) et la 5e (12). La médiane est leur moyenne : (10 + 12) ÷ 2 = 11 minutes.`,
      explanation: `Effectif pair : on prend la moyenne des deux valeurs du milieu. La médiane vaut 11 minutes : la moitié des coureurs ont mis 11 min ou moins.`,
      mnemonic: `Pair : médiane = moyenne des deux valeurs centrales.`,
    },
    {
      id: `mch8-q13`,
      type: `trous`,
      difficulty: `hard`,
      question: `Dans un sondage, 9 personnes sur 25 préfèrent le thé. La fréquence est 9 ÷ 25 = [0,36], soit [36] %.`,
      answer: [`0,36`, `36`],
      explanation: `9 ÷ 25 = 0,36, et 0,36 × 100 = 36 %. La fréquence représente la proportion de buveurs de thé.`,
      trap: `Pour passer en %, on multiplie par 100 : 0,36 devient 36 %.`,
    },
    {
      id: `mch8-q14`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Quelle est la médiane de la série 12 ; 4 ; 16 ; 9 ; 20 ; 7 ; 10 ; 15 ?`,
      options: [`10`, `11`, `12`, `12,25`],
      answer: `11`,
      explanation: `Ordonnée : 4 ; 7 ; 9 ; 10 ; 12 ; 15 ; 16 ; 20. Effectif pair (8 valeurs) : médiane = (10 + 12) ÷ 2 = 11.`,
      trap: `On ne prend pas seulement la 4e valeur (10) : il faut la moyenne de la 4e et de la 5e.`,
    },
    {
      id: `mch8-q15`,
      type: `boolean`,
      difficulty: `hard`,
      question: `La moyenne et la médiane d'une même série peuvent être différentes.`,
      options: [`Vrai`, `Faux`],
      answer: true,
      explanation: `Ce sont deux indicateurs distincts. Une valeur extrême tire la moyenne vers le haut ou le bas sans presque modifier la médiane.`,
      mnemonic: `La moyenne « ressent » les extrêmes, la médiane les ignore.`,
    },
    {
      id: `mch8-q16`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Au brevet blanc, un élève obtient 14 en maths (coefficient 3), 11 en français (coefficient 2) et 8 en histoire-géographie (coefficient 1). Calcule sa moyenne pondérée.`,
      answer: `Somme pondérée = 14 × 3 + 11 × 2 + 8 × 1 = 42 + 22 + 8 = 72. Somme des coefficients = 3 + 2 + 1 = 6. Moyenne = 72 ÷ 6 = 12.`,
      explanation: `On multiplie chaque note par son coefficient, on additionne, puis on divise par la somme des coefficients. La moyenne pondérée est 12, plus haute que la moyenne simple (11) grâce au gros coefficient en maths.`,
      mnemonic: `On divise par la somme des coefficients, pas par le nombre de matières.`,
    },
    {
      id: `mch8-q17`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Dans une petite entreprise, la plupart gagnent environ 1 800 € mais le patron gagne 30 000 €. Quel indicateur décrit le mieux le salaire « typique » d'un employé ?`,
      options: [`La moyenne`, `La médiane`, `L'étendue`, `L'effectif total`],
      answer: `La médiane`,
      explanation: `Le salaire très élevé du patron gonfle énormément la moyenne, qui n'est plus représentative. La médiane, insensible à cette valeur extrême, reflète mieux le salaire de la majorité.`,
      trap: `La moyenne peut être trompeuse quand il y a une valeur extrême : on préfère alors la médiane.`,
    },
    {
      id: `mch8-q18`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Une série de valeurs 0, 1, 2, 3 a pour effectifs 5, 8, x, 3. Sa moyenne vaut 1,5. Combien vaut l'effectif x de la valeur 2 ?`,
      options: [`6`, `10`, `14`, `20`],
      answer: `14`,
      explanation: `Somme pondérée = 0×5 + 1×8 + 2×x + 3×3 = 17 + 2x. Effectif total = 16 + x. Moyenne 1,5 : (17 + 2x) = 1,5 × (16 + x), donc 17 + 2x = 24 + 1,5x, d'où 0,5x = 7 et x = 14. (Vérification : somme = 45, total = 30, 45 ÷ 30 = 1,5.)`,
      mnemonic: `On pose l'équation moyenne = somme pondérée ÷ effectif total, puis on isole x.`,
    },
    {
      id: `mch8-q19`,
      type: `personnage`,
      difficulty: `expert`,
      question: `Quel savant a fondé la statistique sociale et créé la notion d'« homme moyen » ?`,
      options: [`Adolphe Quetelet`, `Carl Friedrich Gauss`, `Euclide`, `Florence Nightingale`],
      answer: `Adolphe Quetelet`,
      explanation: `Adolphe Quetelet (1796-1874) a appliqué moyennes et fréquences aux populations humaines et inventé l'« homme moyen ». Gauss est connu pour la courbe en cloche, Nightingale pour ses diagrammes.`,
    },
  ],

  anecdotes: [
    `L'« homme moyen » d'Adolphe Quetelet a donné naissance à l'IMC (indice de masse corporelle), encore utilisé aujourd'hui par les médecins : on l'appelait autrefois l'indice de Quetelet.`,
    `Florence Nightingale, plus connue comme infirmière, fut l'une des premières à utiliser des diagrammes colorés pour convaincre les responsables : ses graphiques ont sauvé des milliers de soldats en imposant l'hygiène dans les hôpitaux.`,
    `La « courbe en cloche » de Gauss a figuré sur les anciens billets de 10 marks allemands, à côté du portrait du mathématicien : c'est sans doute la seule formule de statistiques à avoir servi de monnaie !`,
  ],

  pitfalls: `Erreurs fréquentes au Brevet : confondre moyenne et médiane ; oublier d'ORDONNER la série avant de chercher la médiane ; pour un effectif pair, prendre une seule valeur centrale au lieu de la moyenne des deux ; diviser une moyenne pondérée par le nombre de valeurs au lieu de l'effectif total ; et oublier de multiplier la fréquence par 100 pour l'exprimer en pourcentage.`,
};
