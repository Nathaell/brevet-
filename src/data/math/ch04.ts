import { Chapter } from '../../types';

export const mathCh4: Chapter = {
  id: `mch4`,
  slug: `puissances-notation-scientifique`,
  number: 4,
  subject: `mathematiques`,
  title: `Puissances et notation scientifique`,
  subtitle: `Écrire et calculer avec les très grands et les très petits nombres`,
  introduction: `Comment écrire le nombre d'étoiles dans l'univers ou la taille d'un atome sans aligner des dizaines de zéros ? Les puissances permettent de noter de façon compacte des multiplications répétées, et la notation scientifique offre une écriture universelle des nombres, du gigantesque au minuscule. Ce chapitre te fait maîtriser les exposants positifs, nuls et négatifs, les règles de calcul, les puissances de 10 et les ordres de grandeur.`,
  courseContent: `
    <h2>I. Puissance d'un nombre</h2>
    <p>Soit <strong>a</strong> un nombre et <strong>n</strong> un entier positif. La puissance <strong>a<sup>n</sup></strong> (qui se lit « a exposant n ») est le produit de <strong>n</strong> facteurs tous égaux à <strong>a</strong> :</p>
    <p style="text-align:center"><strong>a<sup>n</sup> = a × a × a × … × a</strong> (n facteurs)</p>
    <ul>
      <li>Le nombre <strong>a</strong> s'appelle la <strong>base</strong>, le nombre <strong>n</strong> s'appelle l'<strong>exposant</strong>.</li>
      <li>a<sup>1</sup> = a, et a<sup>2</sup> se lit « a au carré », a<sup>3</sup> « a au cube ».</li>
    </ul>
    <p><strong>Exemple :</strong> 2<sup>5</sup> = 2 × 2 × 2 × 2 × 2 = 32 ; (−3)<sup>2</sup> = (−3) × (−3) = 9 ; (−3)<sup>3</sup> = (−3) × (−3) × (−3) = −27.</p>
    <p><strong>Signe :</strong> une puissance d'un nombre négatif est positive si l'exposant est pair, négative si l'exposant est impair. Attention : −3<sup>2</sup> = −(3 × 3) = −9, alors que (−3)<sup>2</sup> = 9 (les parenthèses changent tout !).</p>

    <h2>II. Exposant 0 et exposants négatifs</h2>
    <p>On étend la définition pour tout nombre <strong>a ≠ 0</strong> :</p>
    <ul>
      <li><strong>a<sup>0</sup> = 1</strong> (tout nombre non nul à la puissance 0 vaut 1). Exemple : 7<sup>0</sup> = 1 ; 2026<sup>0</sup> = 1.</li>
      <li><strong>a<sup>−n</sup> = 1 / a<sup>n</sup></strong> (un exposant négatif correspond à l'inverse). Exemple : 2<sup>−3</sup> = 1 / 2<sup>3</sup> = 1 / 8 = 0,125 ; 5<sup>−1</sup> = 1 / 5 = 0,2.</li>
    </ul>

    <h2>III. Les règles de calcul</h2>
    <p>Pour un même nombre <strong>a ≠ 0</strong> et des entiers relatifs <strong>m</strong> et <strong>n</strong> :</p>
    <ul>
      <li><strong>a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></strong> (produit : on additionne les exposants).</li>
      <li><strong>a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup></strong> (quotient : on soustrait les exposants).</li>
      <li><strong>(a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup></strong> (puissance d'une puissance : on multiplie les exposants).</li>
      <li><strong>(a × b)<sup>n</sup> = a<sup>n</sup> × b<sup>n</sup></strong> (puissance d'un produit).</li>
    </ul>
    <p><strong>Exemple résolu (calcul de puissances) :</strong> calculer A = 3<sup>4</sup> × 3<sup>−2</sup>.</p>
    <ul>
      <li>On applique la règle du produit : A = 3<sup>4 + (−2)</sup> = 3<sup>2</sup>.</li>
      <li>Donc A = 9.</li>
    </ul>
    <p><strong>Autre exemple :</strong> B = (5<sup>2</sup>)<sup>3</sup> ÷ 5<sup>4</sup> = 5<sup>2×3</sup> ÷ 5<sup>4</sup> = 5<sup>6</sup> ÷ 5<sup>4</sup> = 5<sup>6−4</sup> = 5<sup>2</sup> = 25.</p>

    <h2>IV. Les puissances de 10</h2>
    <p>Les puissances de 10 sont essentielles pour manipuler les grands et petits nombres :</p>
    <ul>
      <li>Pour <strong>n &gt; 0</strong> : 10<sup>n</sup> = 1 suivi de <strong>n</strong> zéros. Exemple : 10<sup>3</sup> = 1 000 ; 10<sup>6</sup> = 1 000 000.</li>
      <li>10<sup>0</sup> = 1.</li>
      <li>Pour <strong>n &gt; 0</strong> : 10<sup>−n</sup> = 0,0…01 avec <strong>n</strong> chiffres après la virgule. Exemple : 10<sup>−3</sup> = 0,001 ; 10<sup>−6</sup> = 0,000001.</li>
    </ul>
    <p>Les règles de calcul s'appliquent : 10<sup>m</sup> × 10<sup>n</sup> = 10<sup>m+n</sup>. Exemple : 10<sup>5</sup> × 10<sup>−2</sup> = 10<sup>3</sup> = 1 000.</p>

    <h2>V. La notation scientifique</h2>
    <p>La <strong>notation scientifique</strong> d'un nombre est son écriture sous la forme :</p>
    <p style="text-align:center"><strong>a × 10<sup>n</sup></strong> &nbsp; avec &nbsp; <strong>1 ≤ a &lt; 10</strong> &nbsp; et &nbsp; <strong>n</strong> entier relatif</p>
    <p>Le nombre <strong>a</strong> (appelé mantisse) a un seul chiffre non nul avant la virgule. Cette écriture est <strong>unique</strong>.</p>
    <p><strong>Exemple résolu (conversion en notation scientifique) :</strong> écrire 0,000452 en notation scientifique.</p>
    <ul>
      <li>On déplace la virgule pour obtenir un nombre entre 1 et 10 : on lit 4,52.</li>
      <li>La virgule a été déplacée de <strong>4</strong> rangs vers la droite ; comme le nombre est petit, l'exposant est négatif : n = −4.</li>
      <li>Donc 0,000452 = <strong>4,52 × 10<sup>−4</sup></strong>.</li>
    </ul>
    <p><strong>Autre exemple :</strong> 38 500 000 = 3,85 × 10<sup>7</sup> (la virgule s'est déplacée de 7 rangs vers la gauche, exposant positif).</p>
    <p>⚠️ 0,72 × 10<sup>5</sup> ou 38 × 10<sup>6</sup> ne sont PAS des notations scientifiques, car a doit vérifier 1 ≤ a &lt; 10.</p>

    <h2>VI. L'ordre de grandeur</h2>
    <p>L'<strong>ordre de grandeur</strong> d'un nombre est la puissance de 10 la plus proche de ce nombre. On arrondit la mantisse <strong>a</strong> de la notation scientifique : si a &lt; 5 on garde 10<sup>n</sup>, si a ≥ 5 on prend 10<sup>n+1</sup>.</p>
    <p><strong>Exemple :</strong> la population mondiale ≈ 8,1 × 10<sup>9</sup> ; comme 8,1 ≥ 5, l'ordre de grandeur est 10<sup>10</sup> (soit 10 milliards). L'ordre de grandeur permet de comparer rapidement deux nombres et de vérifier la cohérence d'un résultat.</p>
  `,
  summary: `**Une puissance** a<sup>n</sup> est un produit de n facteurs égaux à a. La base est a, l'exposant est n. *a<sup>1</sup> = a*, et a<sup>2</sup> se lit « au carré ».

**Cas particuliers** : pour a ≠ 0, *a<sup>0</sup> = 1* et *a<sup>−n</sup> = 1/a<sup>n</sup>* (un exposant négatif donne l'inverse).

**Les quatre règles** (a ≠ 0) : *a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>* (on **additionne**), *a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>* (on **soustrait**), *(a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup>* (on **multiplie**), et *(a×b)<sup>n</sup> = a<sup>n</sup> × b<sup>n</sup>*.

**Puissances de 10** : 10<sup>n</sup> = 1 suivi de n zéros ; 10<sup>−n</sup> = 0,0…01 avec n décimales. Elles servent à écrire les grands et petits nombres.

**Notation scientifique** : tout nombre s'écrit de façon unique *a × 10<sup>n</sup>* avec **1 ≤ a &lt; 10**. Exposant positif pour les grands nombres, négatif pour les petits.

**Ordre de grandeur** : la puissance de 10 la plus proche, obtenue en arrondissant la mantisse. Il sert à comparer et à vérifier un résultat.`,
  timeline: [
    {
      id: `mch4-t1`,
      date: `≈ -250`,
      title: `Archimède et L'Arénaire`,
      description: `Archimède invente un système pour exprimer des nombres gigantesques en estimant le nombre de grains de sable contenus dans l'univers.`,
    },
    {
      id: `mch4-t2`,
      date: `XIVe s.`,
      title: `Nicolas Oresme`,
      description: `Le savant français étudie les exposants et amorce l'idée d'exposants fractionnaires.`,
    },
    {
      id: `mch4-t3`,
      date: `1544`,
      title: `Michael Stifel`,
      description: `Dans son Arithmetica integra, Stifel relie progressions arithmétiques et géométriques, préfigurant les exposants et les logarithmes.`,
    },
    {
      id: `mch4-t4`,
      date: `1637`,
      title: `Notation de Descartes`,
      description: `René Descartes popularise l'écriture moderne des puissances avec l'exposant en haut à droite (a²,  a³).`,
    },
    {
      id: `mch4-t5`,
      date: `XXe s.`,
      title: `Notation scientifique`,
      description: `La notation scientifique s'impose en physique et en astronomie pour manipuler des nombres très grands ou très petits.`,
    },
  ],
  mindMap: [
    {
      id: `mch4-m0`,
      label: `Puissances`,
    },
    {
      id: `mch4-m1`,
      label: `Définition a^n`,
      description: `Produit de n facteurs égaux à a ; base et exposant.`,
      parentId: `mch4-m0`,
    },
    {
      id: `mch4-m2`,
      label: `Exposants spéciaux`,
      description: `a⁰ = 1 et a^(−n) = 1/a^n (a ≠ 0).`,
      parentId: `mch4-m0`,
    },
    {
      id: `mch4-m3`,
      label: `Règles de calcul`,
      description: `Produit, quotient, puissance de puissance, puissance d'un produit.`,
      parentId: `mch4-m0`,
    },
    {
      id: `mch4-m4`,
      label: `Puissances de 10`,
      description: `10^n = 1 et n zéros ; 10^(−n) = petite décimale.`,
      parentId: `mch4-m0`,
    },
    {
      id: `mch4-m5`,
      label: `Notation scientifique`,
      description: `a × 10^n avec 1 ≤ a < 10, écriture unique.`,
      parentId: `mch4-m0`,
    },
    {
      id: `mch4-m6`,
      label: `Ordre de grandeur`,
      description: `Puissance de 10 la plus proche pour comparer.`,
      parentId: `mch4-m0`,
    },
  ],
  characters: [
    {
      id: `mch4-c1`,
      name: `Archimède`,
      dates: `≈ 287 – 212 av. J.-C.`,
      role: `Mathématicien et physicien grec de Syracuse.`,
      importance: `Dans son traité L'Arénaire, il imagine un système pour écrire des nombres immenses (le nombre de grains de sable remplissant l'univers), un ancêtre de la notation par puissances.`,
    },
    {
      id: `mch4-c2`,
      name: `Michael Stifel`,
      dates: `≈ 1487 – 1567`,
      role: `Mathématicien allemand, moine puis professeur.`,
      importance: `Son ouvrage Arithmetica integra (1544) établit un lien entre suites arithmétiques et géométriques, fondant l'usage systématique des exposants et ouvrant la voie aux logarithmes.`,
    },
    {
      id: `mch4-c3`,
      name: `René Descartes`,
      dates: `1596 – 1650`,
      role: `Mathématicien et philosophe français.`,
      importance: `Il impose la notation moderne des puissances avec l'exposant placé en haut à droite de la base, encore utilisée aujourd'hui.`,
    },
  ],
  dates: [
    {
      date: `a^n`,
      event: `a<sup>n</sup> = a × a × … × a (n facteurs)`,
      explanation: `Définition d'une puissance : une multiplication répétée de la base a, n fois.`,
    },
    {
      date: `Exposant 0`,
      event: `a<sup>0</sup> = 1 (avec a ≠ 0)`,
      explanation: `Tout nombre non nul élevé à la puissance 0 vaut 1.`,
    },
    {
      date: `Exposant négatif`,
      event: `a<sup>−n</sup> = 1 / a<sup>n</sup>`,
      explanation: `Un exposant négatif désigne l'inverse de la puissance correspondante.`,
    },
    {
      date: `Produit`,
      event: `a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>`,
      explanation: `Pour multiplier deux puissances de même base, on additionne les exposants.`,
    },
    {
      date: `Quotient`,
      event: `a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>`,
      explanation: `Pour diviser deux puissances de même base, on soustrait les exposants.`,
    },
    {
      date: `Puissance de puissance`,
      event: `(a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup>`,
      explanation: `Pour élever une puissance à une puissance, on multiplie les exposants.`,
    },
    {
      date: `Puissance d'un produit`,
      event: `(a × b)<sup>n</sup> = a<sup>n</sup> × b<sup>n</sup>`,
      explanation: `La puissance d'un produit est le produit des puissances.`,
    },
    {
      date: `Puissance de 10`,
      event: `10<sup>n</sup> = 1 suivi de n zéros ; 10<sup>−n</sup> = 0,0…01`,
      explanation: `Sert à écrire rapidement les grands et petits nombres.`,
    },
    {
      date: `Notation scientifique`,
      event: `a × 10<sup>n</sup> avec 1 ≤ a &lt; 10`,
      explanation: `Écriture unique d'un nombre avec un seul chiffre non nul avant la virgule.`,
    },
  ],
  flashcards: [
    {
      id: `mch4-f1`,
      question: `Que vaut a<sup>0</sup> pour a ≠ 0 ?`,
      answer: `a<sup>0</sup> = 1. Tout nombre non nul à la puissance 0 vaut 1.`,
      category: `Définitions`,
    },
    {
      id: `mch4-f2`,
      question: `Que signifie un exposant négatif, a<sup>−n</sup> ?`,
      answer: `a<sup>−n</sup> = 1 / a<sup>n</sup> : c'est l'inverse de la puissance. Ex : 2<sup>−3</sup> = 1/8.`,
      category: `Définitions`,
    },
    {
      id: `mch4-f3`,
      question: `Comment multiplier a<sup>m</sup> × a<sup>n</sup> ?`,
      answer: `On additionne les exposants : a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>.`,
      category: `Règles`,
    },
    {
      id: `mch4-f4`,
      question: `Comment calculer a<sup>m</sup> ÷ a<sup>n</sup> ?`,
      answer: `On soustrait les exposants : a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>.`,
      category: `Règles`,
    },
    {
      id: `mch4-f5`,
      question: `Que vaut (a<sup>m</sup>)<sup>n</sup> ?`,
      answer: `On multiplie les exposants : (a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup>.`,
      category: `Règles`,
    },
    {
      id: `mch4-f6`,
      question: `Combien vaut 10<sup>6</sup> ?`,
      answer: `10<sup>6</sup> = 1 000 000 (un 1 suivi de 6 zéros, soit un million).`,
      category: `Puissances de 10`,
    },
    {
      id: `mch4-f7`,
      question: `Combien vaut 10<sup>−3</sup> ?`,
      answer: `10<sup>−3</sup> = 0,001 (3 chiffres après la virgule).`,
      category: `Puissances de 10`,
    },
    {
      id: `mch4-f8`,
      question: `Quelle est la condition sur a dans la notation scientifique a × 10<sup>n</sup> ?`,
      answer: `Il faut 1 ≤ a &lt; 10 : un seul chiffre non nul avant la virgule.`,
      category: `Notation scientifique`,
    },
    {
      id: `mch4-f9`,
      question: `Écris 0,000452 en notation scientifique.`,
      answer: `0,000452 = 4,52 × 10<sup>−4</sup>.`,
      category: `Notation scientifique`,
    },
    {
      id: `mch4-f10`,
      question: `Écris 38 500 000 en notation scientifique.`,
      answer: `38 500 000 = 3,85 × 10<sup>7</sup>.`,
      category: `Notation scientifique`,
    },
    {
      id: `mch4-f11`,
      question: `Quelle différence entre (−3)<sup>2</sup> et −3<sup>2</sup> ?`,
      answer: `(−3)<sup>2</sup> = 9 (la base est −3), mais −3<sup>2</sup> = −9 (on calcule 3² puis on prend l'opposé).`,
      category: `Pièges`,
    },
    {
      id: `mch4-f12`,
      question: `Qu'est-ce que l'ordre de grandeur d'un nombre ?`,
      answer: `C'est la puissance de 10 la plus proche, obtenue en arrondissant la mantisse de la notation scientifique.`,
      category: `Ordre de grandeur`,
    },
  ],
  questions: [
    {
      id: `mch4-q1`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Que vaut 2<sup>4</sup> ?`,
      options: [`8`, `16`, `6`, `24`],
      answer: `16`,
      explanation: `2<sup>4</sup> = 2 × 2 × 2 × 2 = 16. Attention, ce n'est pas 2 × 4.`,
      trap: `2<sup>4</sup> n'est pas 2 × 4 = 8, mais bien 2 multiplié 4 fois par lui-même.`,
    },
    {
      id: `mch4-q2`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Pour tout nombre a non nul, a<sup>0</sup> = 1.`,
      answer: true,
      explanation: `Par définition, tout nombre non nul élevé à la puissance 0 vaut 1.`,
      mnemonic: `Exposant 0 → résultat 1, toujours.`,
    },
    {
      id: `mch4-q3`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Combien vaut 10<sup>5</sup> ?`,
      options: [`10 000`, `100 000`, `50`, `1 000 000`],
      answer: `100 000`,
      explanation: `10<sup>5</sup> = 1 suivi de 5 zéros = 100 000 (cent mille).`,
    },
    {
      id: `mch4-q4`,
      type: `boolean`,
      difficulty: `easy`,
      question: `On a 10<sup>−2</sup> = 0,01.`,
      answer: true,
      explanation: `10<sup>−2</sup> = 1 / 10<sup>2</sup> = 1 / 100 = 0,01.`,
    },
    {
      id: `mch4-q5`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Combien vaut 5<sup>3</sup> ?`,
      options: [`15`, `125`, `25`, `8`],
      answer: `125`,
      explanation: `5<sup>3</sup> = 5 × 5 × 5 = 125.`,
    },
    {
      id: `mch4-q6`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Que vaut 3<sup>4</sup> × 3<sup>2</sup> ?`,
      options: [`3<sup>6</sup>`, `3<sup>8</sup>`, `9<sup>6</sup>`, `3<sup>2</sup>`],
      answer: `3<sup>6</sup>`,
      explanation: `Même base : on additionne les exposants, 3<sup>4</sup> × 3<sup>2</sup> = 3<sup>4+2</sup> = 3<sup>6</sup>.`,
      trap: `On n'écrit pas 9<sup>6</sup> : la base ne change pas, elle reste 3.`,
    },
    {
      id: `mch4-q7`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Que vaut 7<sup>8</sup> ÷ 7<sup>5</sup> ?`,
      options: [`7<sup>3</sup>`, `7<sup>13</sup>`, `1<sup>3</sup>`, `7<sup>40</sup>`],
      answer: `7<sup>3</sup>`,
      explanation: `Pour un quotient de même base, on soustrait les exposants : 7<sup>8−5</sup> = 7<sup>3</sup>.`,
    },
    {
      id: `mch4-q8`,
      type: `trous`,
      difficulty: `medium`,
      question: `Dans l'écriture a × 10<sup>n</sup>, la notation est dite [scientifique] lorsque a est compris entre [1] et [10].`,
      answer: [`scientifique`, `1`, `10`],
      explanation: `La notation scientifique impose 1 ≤ a < 10, c'est-à-dire un seul chiffre non nul avant la virgule.`,
    },
    {
      id: `mch4-q9`,
      type: `boolean`,
      difficulty: `medium`,
      question: `L'écriture 38 × 10<sup>6</sup> est une notation scientifique.`,
      answer: false,
      explanation: `Non : il faut 1 ≤ a < 10. Or 38 n'est pas inférieur à 10. La bonne écriture est 3,8 × 10<sup>7</sup>.`,
      trap: `Vérifie toujours que le nombre devant le « × 10 » a un seul chiffre avant la virgule.`,
    },
    {
      id: `mch4-q10`,
      type: `relier`,
      difficulty: `medium`,
      question: `Associe chaque nombre à sa notation scientifique.`,
      options: [`4,5 × 10<sup>3</sup>`, `7 × 10<sup>−2</sup>`, `1,2 × 10<sup>6</sup>`],
      answer: {
        '4 500': `4,5 × 10<sup>3</sup>`,
        '0,07': `7 × 10<sup>−2</sup>`,
        '1 200 000': `1,2 × 10<sup>6</sup>`,
      },
      explanation: `4 500 = 4,5 × 10³ ; 0,07 = 7 × 10⁻² ; 1 200 000 = 1,2 × 10⁶.`,
    },
    {
      id: `mch4-q11`,
      type: `ordonner`,
      difficulty: `medium`,
      question: `Range ces nombres dans l'ordre croissant.`,
      options: [`3 × 10<sup>2</sup>`, `5 × 10<sup>−1</sup>`, `2 × 10<sup>3</sup>`, `4 × 10<sup>0</sup>`],
      answer: [1, 3, 0, 2],
      explanation: `5 × 10⁻¹ = 0,5 ; 4 × 10⁰ = 4 ; 3 × 10² = 300 ; 2 × 10³ = 2000. Ordre croissant : 0,5 < 4 < 300 < 2000.`,
    },
    {
      id: `mch4-q12`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Quelle est la notation scientifique de 0,00063 ?`,
      options: [`6,3 × 10<sup>−4</sup>`, `63 × 10<sup>−5</sup>`, `6,3 × 10<sup>4</sup>`, `0,63 × 10<sup>−3</sup>`],
      answer: `6,3 × 10<sup>−4</sup>`,
      explanation: `On lit 6,3 ; la virgule a été déplacée de 4 rangs vers la droite, donc exposant −4 : 0,00063 = 6,3 × 10⁻⁴.`,
    },
    {
      id: `mch4-q13`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Que vaut (2<sup>3</sup>)<sup>2</sup> ?`,
      options: [`2<sup>6</sup>`, `2<sup>5</sup>`, `2<sup>9</sup>`, `4<sup>3</sup>`],
      answer: `2<sup>6</sup>`,
      explanation: `Puissance d'une puissance : on multiplie les exposants, (2<sup>3</sup>)<sup>2</sup> = 2<sup>3×2</sup> = 2<sup>6</sup> = 64.`,
      trap: `On multiplie les exposants (3 × 2), on ne les additionne pas.`,
    },
    {
      id: `mch4-q14`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Que vaut 2<sup>−3</sup> ?`,
      options: [`0,125`, `−8`, `−6`, `8`],
      answer: `0,125`,
      explanation: `2<sup>−3</sup> = 1 / 2<sup>3</sup> = 1 / 8 = 0,125. Un exposant négatif ne rend pas le résultat négatif.`,
      trap: `Exposant négatif → inverse, et non nombre négatif.`,
    },
    {
      id: `mch4-q15`,
      type: `boolean`,
      difficulty: `hard`,
      question: `On a (−2)<sup>4</sup> = 16.`,
      answer: true,
      explanation: `L'exposant 4 est pair, donc le résultat est positif : (−2)<sup>4</sup> = (−2)×(−2)×(−2)×(−2) = 16.`,
    },
    {
      id: `mch4-q16`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Calcule A = 5<sup>6</sup> × 5<sup>−4</sup>.`,
      options: [`25`, `5<sup>10</sup>`, `1`, `10`],
      answer: `25`,
      explanation: `A = 5<sup>6+(−4)</sup> = 5<sup>2</sup> = 25.`,
    },
    {
      id: `mch4-q17`,
      type: `brevet`,
      difficulty: `hard`,
      question: `La masse d'un atome de carbone est d'environ 0,00000000000000000000002 g. Donne cette masse en notation scientifique.`,
      answer: `2 × 10<sup>−23</sup> g. La virgule est déplacée de 23 rangs vers la droite pour obtenir 2, donc l'exposant est −23.`,
      explanation: `Le chiffre significatif est 2 ; on compte 23 décimales avant le 2, ce qui donne 2 × 10⁻²³ g.`,
    },
    {
      id: `mch4-q18`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Calcule et donne le résultat en notation scientifique : B = (4 × 10<sup>5</sup>) × (3 × 10<sup>−2</sup>).`,
      answer: `B = 12 × 10<sup>3</sup> = 1,2 × 10<sup>4</sup>. On multiplie 4 × 3 = 12 et 10<sup>5</sup> × 10<sup>−2</sup> = 10<sup>3</sup>, puis on ajuste car 12 ≥ 10.`,
      explanation: `4 × 3 = 12 ; 10⁵ × 10⁻² = 10³ ; donc 12 × 10³ = 1,2 × 10⁴ (on réécrit 12 = 1,2 × 10 pour respecter 1 ≤ a < 10).`,
      trap: `12 × 10³ n'est pas une notation scientifique : il faut ramener la mantisse entre 1 et 10.`,
    },
    {
      id: `mch4-q19`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Quel est l'ordre de grandeur de 8,4 × 10<sup>9</sup> ?`,
      options: [`10<sup>10</sup>`, `10<sup>9</sup>`, `10<sup>8</sup>`, `8 × 10<sup>9</sup>`],
      answer: `10<sup>10</sup>`,
      explanation: `La mantisse 8,4 est ≥ 5, donc on arrondit à 10 : 8,4 × 10⁹ ≈ 10 × 10⁹ = 10¹⁰.`,
      mnemonic: `Mantisse ≥ 5 → on monte d'une puissance de 10.`,
    },
    {
      id: `mch4-q20`,
      type: `trous`,
      difficulty: `expert`,
      question: `Pour multiplier deux puissances de même base on [additionne] les exposants ; pour une puissance de puissance on les [multiplie].`,
      answer: [`additionne`, `multiplie`],
      explanation: `a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup> (addition) tandis que (a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup> (multiplication). Ne pas confondre ces deux règles.`,
      trap: `Produit → addition des exposants ; puissance de puissance → multiplication.`,
    },
  ],
  anecdotes: [
    `Dans son traité « L'Arénaire », Archimède cherche à écrire le nombre de grains de sable qui rempliraient l'univers : il aboutit à un nombre de l'ordre de 10⁶³, prouvant qu'aucun nombre n'est « trop grand » pour être nommé.`,
    `Une feuille de papier pliée 42 fois aurait une épaisseur d'environ 2⁴² × 0,1 mm, soit plus de 400 000 km : la distance Terre-Lune ! C'est la puissance de la croissance exponentielle.`,
    `La notation scientifique est le langage universel des scientifiques : la masse du Soleil (≈ 2 × 10³⁰ kg) et la taille d'un atome (≈ 10⁻¹⁰ m) s'écrivent ainsi en quelques caractères au lieu de dizaines de zéros.`,
  ],
  pitfalls: `a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup> (on ADDITIONNE les exposants, ce n'est PAS a<sup>m×n</sup>), un exposant négatif donne l'inverse et non un nombre négatif (2<sup>−3</sup> = 0,125), et une notation scientifique a × 10<sup>n</sup> exige toujours 1 ≤ a &lt; 10.`,
};
