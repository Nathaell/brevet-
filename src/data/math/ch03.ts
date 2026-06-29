import { Chapter } from '../../types';

export const mathCh3: Chapter = {
  id: `mch3`,
  slug: `equations-inequations`,
  number: 3,
  subject: `mathematiques`,
  title: `Équations et inéquations`,
  subtitle: `Résoudre une équation ou une inéquation du 1er degré, mettre un problème en équation`,
  introduction: `Une équation est une égalité dans laquelle se cache un nombre inconnu, souvent appelé x. Résoudre l'équation, c'est trouver toutes les valeurs de x qui rendent l'égalité vraie. Au Brevet, tu dois savoir résoudre une équation du premier degré, une équation-produit, traduire un problème par une équation, mais aussi résoudre une inéquation et représenter ses solutions sur une droite graduée. Une seule règle demande de la vigilance : quand on multiplie ou divise une inéquation par un nombre négatif, on change le sens de l'inégalité.`,
  courseContent: `
    <h2>I. Vocabulaire et règles de base</h2>
    <p>Une <strong>équation</strong> est une égalité contenant une lettre inconnue (souvent x). Une <strong>solution</strong> est une valeur de x qui rend l'égalité vraie. <strong>Résoudre</strong> une équation, c'est trouver toutes ses solutions.</p>
    <p>Pour résoudre une équation du premier degré, on utilise deux règles fondamentales qui conservent l'égalité :</p>
    <ul>
      <li>On peut <strong>ajouter ou soustraire</strong> un même nombre aux deux membres.</li>
      <li>On peut <strong>multiplier ou diviser</strong> les deux membres par un même nombre non nul.</li>
    </ul>
    <p>L'idée est d'isoler x dans un membre. Quand un terme « passe » de l'autre côté du signe =, il change de signe (+ devient −) ; quand un facteur passe de l'autre côté, il passe au dénominateur.</p>

    <h2>II. Résoudre une équation du premier degré (exemple résolu)</h2>
    <p>Résolvons : <strong>5x − 3 = 2x + 9</strong>.</p>
    <ol>
      <li>On regroupe les x à gauche : on soustrait 2x aux deux membres → 5x − 2x − 3 = 9, soit <strong>3x − 3 = 9</strong>.</li>
      <li>On regroupe les nombres à droite : on ajoute 3 aux deux membres → 3x = 9 + 3, soit <strong>3x = 12</strong>.</li>
      <li>On divise les deux membres par 3 → x = 12/3, soit <strong>x = 4</strong>.</li>
    </ol>
    <p><strong>Vérification</strong> : membre de gauche 5×4 − 3 = 20 − 3 = 17 ; membre de droite 2×4 + 9 = 8 + 9 = 17. Les deux membres valent 17 : la solution est bien <strong>x = 4</strong>.</p>

    <h2>III. L'équation-produit</h2>
    <p>On utilise la propriété fondamentale : <strong>un produit de facteurs est nul si, et seulement si, l'un au moins des facteurs est nul</strong>.</p>
    <p style="text-align:center"><strong>A × B = 0  ⇔  A = 0  ou  B = 0</strong></p>
    <p>Résolvons : <strong>(x − 5)(2x + 3) = 0</strong>.</p>
    <p>Un produit est nul, donc l'un des facteurs est nul :</p>
    <ul>
      <li>x − 5 = 0, c'est-à-dire <strong>x = 5</strong> ;</li>
      <li>ou 2x + 3 = 0, c'est-à-dire 2x = −3, donc <strong>x = −3/2 = −1,5</strong>.</li>
    </ul>
    <p>L'équation a <strong>deux solutions</strong> : 5 et −1,5. (Vérification : (5 − 5)×... = 0 ✓ ; (−1,5 − 5)×(2×(−1,5) + 3) = (−6,5)×0 = 0 ✓.)</p>

    <h2>IV. Mettre un problème en équation (exemple résolu)</h2>
    <p><em>Problème :</em> Léa pense à un nombre. Elle le multiplie par 3 puis ajoute 7 ; elle obtient le même résultat qu'en multipliant ce nombre par 5 et en retirant 1. Quel est ce nombre ?</p>
    <ol>
      <li><strong>Choisir l'inconnue</strong> : soit x le nombre cherché.</li>
      <li><strong>Mettre en équation</strong> : « le multiplier par 3 puis ajouter 7 » donne 3x + 7 ; « le multiplier par 5 et retirer 1 » donne 5x − 1. On écrit l'égalité : <strong>3x + 7 = 5x − 1</strong>.</li>
      <li><strong>Résoudre</strong> : 3x + 7 = 5x − 1 → 7 + 1 = 5x − 3x → 8 = 2x → <strong>x = 4</strong>.</li>
      <li><strong>Conclure</strong> : le nombre cherché est 4. (Vérification : 3×4 + 7 = 19 et 5×4 − 1 = 19 ✓.)</li>
    </ol>

    <h2>V. Résoudre une inéquation du premier degré</h2>
    <p>Une <strong>inéquation</strong> utilise un signe de comparaison (&lt;, ≤, &gt;, ≥). Ses solutions sont en général un <strong>intervalle</strong> de valeurs. On la résout comme une équation, avec UNE règle supplémentaire :</p>
    <p style="text-align:center"><strong>Quand on multiplie ou divise les deux membres par un nombre négatif, on CHANGE le sens de l'inégalité.</strong></p>
    <p>Résolvons : <strong>−2x + 1 ≤ 7</strong>.</p>
    <ol>
      <li>On soustrait 1 aux deux membres → −2x ≤ 6.</li>
      <li>On divise par −2 : c'est un nombre <strong>négatif</strong>, donc on inverse le sens → x ≥ 6/(−2), soit <strong>x ≥ −3</strong>.</li>
    </ol>
    <p>Les solutions sont tous les nombres supérieurs ou égaux à −3, soit l'intervalle <strong>[−3 ; +∞[</strong>.</p>
    <p><strong>Vérification</strong> : pour x = 0 (qui est ≥ −3) : −2×0 + 1 = 1 ≤ 7 ✓ ; pour x = −5 (qui n'est pas solution) : −2×(−5) + 1 = 11, et 11 ≤ 7 est faux ✓.</p>

    <h2>VI. Représenter les solutions sur une droite graduée</h2>
    <p>On représente l'ensemble des solutions sur une droite graduée. On hachure la partie qui ne convient pas et on indique la borne :</p>
    <ul>
      <li>Avec ≤ ou ≥, la valeur frontière est <strong>incluse</strong> : on la marque par un crochet tourné vers les solutions [ ou ] (point « plein »).</li>
      <li>Avec &lt; ou &gt;, la valeur frontière est <strong>exclue</strong> : on la marque par un crochet ouvert vers l'extérieur ] ou [ (point « creux »).</li>
    </ul>
    <p>Exemple : x ≥ −3 se note en intervalle <strong>[−3 ; +∞[</strong> (crochet fermé sur −3) ; x &lt; 2 se note <strong>]−∞ ; 2[</strong> (crochet ouvert sur 2).</p>
  `,
  summary: `Une *équation* est une égalité contenant une inconnue x. La *résoudre*, c'est trouver toutes les valeurs de x qui rendent l'égalité vraie. On manipule l'équation en faisant la *même opération sur les deux membres* : ajouter/soustraire un nombre, ou multiplier/diviser par un nombre non nul, pour isoler x.

Pour une *équation-produit*, on applique la règle *A × B = 0 ⇔ A = 0 ou B = 0* : on annule chaque facteur séparément, ce qui donne souvent plusieurs solutions.

Pour *mettre un problème en équation*, on choisit l'inconnue, on traduit l'énoncé par une égalité, on résout, puis on conclut par une phrase en vérifiant.

Une *inéquation* (signes <, ≤, >, ≥) se résout comme une équation, mais *on change le sens de l'inégalité quand on multiplie ou divise par un nombre négatif*. Les solutions forment un *intervalle* que l'on représente sur une *droite graduée* : crochet fermé [ ] si la borne est incluse (≤, ≥), crochet ouvert si elle est exclue (<, >).`,
  timeline: [
    {
      id: `mch3-t1`,
      date: `≈ 250`,
      title: `Diophante d'Alexandrie`,
      description: `Dans son ouvrage les « Arithmétiques », Diophante étudie des équations et introduit des abréviations pour l'inconnue : il est considéré comme un précurseur de l'algèbre.`,
    },
    {
      id: `mch3-t2`,
      date: `≈ 820`,
      title: `Al-Khwârizmî et l'algèbre`,
      description: `Le mathématicien perse Al-Khwârizmî écrit un traité dont le titre, « al-jabr », a donné le mot « algèbre » : il y décrit des méthodes pour résoudre les équations.`,
    },
    {
      id: `mch3-t3`,
      date: `1591`,
      title: `Les lettres de Viète`,
      description: `François Viète généralise l'usage de lettres pour désigner les inconnues et les nombres connus : le calcul littéral moderne prend forme.`,
    },
    {
      id: `mch3-t4`,
      date: `1637`,
      title: `Descartes fixe les notations`,
      description: `René Descartes adopte x, y, z pour les inconnues et la notation des puissances (x²) : les équations s'écrivent alors presque comme aujourd'hui.`,
    },
  ],
  mindMap: [
    {
      id: `mch3-m0`,
      label: `Équations & inéquations`,
      description: `Trouver l'inconnue x`,
    },
    {
      id: `mch3-m1`,
      label: `Équation du 1er degré`,
      description: `Isoler x par opérations identiques sur les deux membres`,
      parentId: `mch3-m0`,
    },
    {
      id: `mch3-m2`,
      label: `Équation-produit`,
      description: `A × B = 0 ⇔ A = 0 ou B = 0`,
      parentId: `mch3-m0`,
    },
    {
      id: `mch3-m3`,
      label: `Mise en équation`,
      description: `Inconnue → équation → résolution → conclusion`,
      parentId: `mch3-m0`,
    },
    {
      id: `mch3-m4`,
      label: `Inéquation du 1er degré`,
      description: `Signe négatif → on inverse l'inégalité`,
      parentId: `mch3-m0`,
    },
    {
      id: `mch3-m5`,
      label: `Solutions & intervalles`,
      description: `Droite graduée, crochet ouvert ou fermé`,
      parentId: `mch3-m0`,
    },
    {
      id: `mch3-m6`,
      label: `Vérification`,
      description: `Remplacer x par la solution trouvée`,
      parentId: `mch3-m0`,
    },
  ],
  characters: [
    {
      id: `mch3-c1`,
      name: `Al-Khwârizmî`,
      dates: `≈ 780 – ≈ 850`,
      role: `Mathématicien et astronome perse, savant de la « Maison de la sagesse » à Bagdad.`,
      importance: `Son traité « al-jabr » donne son nom à l'algèbre : il y expose des méthodes systématiques pour résoudre les équations. Le mot « algorithme » vient aussi de son nom.`,
    },
    {
      id: `mch3-c2`,
      name: `Diophante d'Alexandrie`,
      dates: `≈ 200 – ≈ 284`,
      role: `Mathématicien grec d'Alexandrie, auteur des « Arithmétiques ».`,
      importance: `Précurseur de l'algèbre, il fut l'un des premiers à utiliser des symboles pour représenter l'inconnue et à résoudre des équations.`,
    },
    {
      id: `mch3-c3`,
      name: `François Viète`,
      dates: `1540 – 1603`,
      role: `Mathématicien français, conseiller des rois Henri III et Henri IV.`,
      importance: `Il introduit l'usage systématique de lettres pour les inconnues et les paramètres, fondant le calcul littéral qui rend les équations générales.`,
    },
  ],
  dates: [
    {
      date: `Règle d'or`,
      event: `Même opération sur les DEUX membres`,
      explanation: `Ajouter/soustraire un nombre ou multiplier/diviser par un nombre non nul aux deux membres conserve l'égalité. C'est la base de toute résolution.`,
    },
    {
      date: `Changement de membre`,
      event: `Un terme change de signe en passant de l'autre côté`,
      explanation: `+5 devient −5, et inversement. Utile pour regrouper rapidement les x d'un côté et les nombres de l'autre.`,
    },
    {
      date: `Équation-produit`,
      event: `A × B = 0 ⇔ A = 0 ou B = 0`,
      explanation: `On annule chaque facteur séparément. Donne en général autant de solutions qu'il y a de facteurs.`,
    },
    {
      date: `Forme finale`,
      event: `ax = b ⇒ x = b/a (a ≠ 0)`,
      explanation: `Dernière étape d'une équation du 1er degré : on divise par le coefficient de x.`,
    },
    {
      date: `Règle du signe`,
      event: `× ou ÷ par un négatif ⇒ on inverse ≤ ↔ ≥`,
      explanation: `La règle clé des inéquations : si on multiplie ou divise par un nombre négatif, < devient > et ≤ devient ≥.`,
    },
    {
      date: `Borne incluse`,
      event: `≤ ou ≥ ⇒ crochet fermé [ ]`,
      explanation: `La valeur frontière fait partie des solutions : point plein sur la droite, ex. [−3 ; +∞[.`,
    },
    {
      date: `Borne exclue`,
      event: `< ou > ⇒ crochet ouvert ] [`,
      explanation: `La valeur frontière n'est pas solution : point creux sur la droite, ex. ]−∞ ; 2[.`,
    },
    {
      date: `Vérification`,
      event: `Remplacer x par la solution`,
      explanation: `On substitue la valeur trouvée dans l'équation de départ : les deux membres doivent être égaux.`,
    },
  ],
  flashcards: [
    {
      id: `mch3-f1`,
      question: `Que signifie « résoudre une équation » ?`,
      answer: `Trouver toutes les valeurs de l'inconnue (x) qui rendent l'égalité vraie.`,
      category: `Vocabulaire`,
    },
    {
      id: `mch3-f2`,
      question: `Quelles opérations conservent une égalité ?`,
      answer: `Ajouter ou soustraire un même nombre aux deux membres ; multiplier ou diviser les deux membres par un même nombre non nul.`,
      category: `Méthode`,
    },
    {
      id: `mch3-f3`,
      question: `Énonce la règle de l'équation-produit.`,
      answer: `A × B = 0 si, et seulement si, A = 0 ou B = 0.`,
      category: `Équation-produit`,
    },
    {
      id: `mch3-f4`,
      question: `Résous 3x − 5 = 7.`,
      answer: `3x = 12, donc x = 4.`,
      category: `1er degré`,
    },
    {
      id: `mch3-f5`,
      question: `Résous (x + 2)(x − 7) = 0.`,
      answer: `x = −2 ou x = 7.`,
      category: `Équation-produit`,
    },
    {
      id: `mch3-f6`,
      question: `Quelle est la règle particulière des inéquations ?`,
      answer: `On change le sens de l'inégalité quand on multiplie ou divise les deux membres par un nombre négatif.`,
      category: `Inéquations`,
    },
    {
      id: `mch3-f7`,
      question: `Résous l'inéquation −3x > 9.`,
      answer: `On divise par −3 (négatif), on inverse : x < −3.`,
      category: `Inéquations`,
    },
    {
      id: `mch3-f8`,
      question: `Comment écrit-on « x ≥ −3 » en intervalle ?`,
      answer: `[−3 ; +∞[ (crochet fermé sur −3 car la borne est incluse).`,
      category: `Intervalles`,
    },
    {
      id: `mch3-f9`,
      question: `Quelles sont les étapes d'une mise en équation ?`,
      answer: `Choisir l'inconnue, traduire l'énoncé par une équation, résoudre, puis conclure par une phrase.`,
      category: `Problèmes`,
    },
    {
      id: `mch3-f10`,
      question: `Sur une droite graduée, comment marque-t-on une borne exclue (< ou >) ?`,
      answer: `Par un crochet ouvert vers l'extérieur (point « creux ») : la valeur n'est pas solution.`,
      category: `Intervalles`,
    },
    {
      id: `mch3-f11`,
      question: `D'où vient le mot « algèbre » ?`,
      answer: `Du titre « al-jabr » du traité d'Al-Khwârizmî (≈ 820).`,
      category: `Histoire`,
    },
    {
      id: `mch3-f12`,
      question: `Comment vérifier une solution d'équation ?`,
      answer: `On remplace x par la valeur trouvée : les deux membres doivent donner le même résultat.`,
      category: `Méthode`,
    },
  ],
  questions: [
    {
      id: `mch3-q1`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Quelle est la solution de l'équation x + 6 = 10 ?`,
      options: [`x = 4`, `x = 16`, `x = 60`, `x = −4`],
      answer: `x = 4`,
      explanation: `On soustrait 6 aux deux membres : x = 10 − 6 = 4. Vérification : 4 + 6 = 10 ✓.`,
    },
    {
      id: `mch3-q2`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Quelle est la solution de l'équation 5x = 35 ?`,
      options: [`x = 7`, `x = 30`, `x = 40`, `x = 175`],
      answer: `x = 7`,
      explanation: `On divise les deux membres par 5 : x = 35/5 = 7. Vérification : 5 × 7 = 35 ✓.`,
    },
    {
      id: `mch3-q3`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Dans une équation, on a le droit d'ajouter le même nombre aux deux membres.`,
      answer: true,
      explanation: `Ajouter (ou soustraire) un même nombre aux deux membres conserve l'égalité : c'est une règle de base de la résolution.`,
    },
    {
      id: `mch3-q4`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Le nombre 3 est solution de l'équation 2x − 1 = 5.`,
      answer: true,
      explanation: `On remplace x par 3 : 2 × 3 − 1 = 6 − 1 = 5. Les deux membres valent 5, donc 3 est bien solution.`,
    },
    {
      id: `mch3-q5`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Combien l'équation-produit (x − 1)(x + 4) = 0 a-t-elle de solutions ?`,
      options: [`2 solutions`, `1 solution`, `0 solution`, `Une infinité`],
      answer: `2 solutions`,
      explanation: `Un produit est nul si l'un des facteurs est nul : x − 1 = 0 (x = 1) ou x + 4 = 0 (x = −4). Il y a deux solutions.`,
    },
    {
      id: `mch3-q6`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Quelle est la solution de l'équation 4x + 3 = x + 18 ?`,
      options: [`x = 5`, `x = 7`, `x = 3`, `x = 21`],
      answer: `x = 5`,
      explanation: `4x − x = 18 − 3 donne 3x = 15, donc x = 5. Vérification : 4 × 5 + 3 = 23 et 5 + 18 = 23 ✓.`,
    },
    {
      id: `mch3-q7`,
      type: `trous`,
      difficulty: `medium`,
      question: `Pour résoudre une équation-produit, on utilise : un produit de facteurs est [nul] si, et seulement si, l'un au moins des [facteurs] est nul.`,
      answer: [`nul`, `facteurs`],
      explanation: `La règle s'écrit A × B = 0 ⇔ A = 0 ou B = 0 : il suffit qu'un facteur soit nul pour que le produit le soit.`,
    },
    {
      id: `mch3-q8`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Quelles sont les solutions de l'équation (2x − 6)(x + 5) = 0 ?`,
      options: [`x = 3 ou x = −5`, `x = 6 ou x = 5`, `x = −3 ou x = 5`, `x = 3 ou x = 5`],
      answer: `x = 3 ou x = −5`,
      explanation: `2x − 6 = 0 donne 2x = 6 soit x = 3 ; x + 5 = 0 donne x = −5. Les deux solutions sont 3 et −5.`,
    },
    {
      id: `mch3-q9`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Pour résoudre −x = 8, on obtient x = −8.`,
      answer: true,
      explanation: `On multiplie les deux membres par −1 : x = −8. Vérification : −(−8) = 8 ✓.`,
    },
    {
      id: `mch3-q10`,
      type: `ordonner`,
      difficulty: `medium`,
      question: `Remets dans l'ordre les étapes de résolution de l'équation 2x + 1 = 9.`,
      options: [
        `Écrire l'équation : 2x + 1 = 9`,
        `Soustraire 1 aux deux membres : 2x = 8`,
        `Diviser les deux membres par 2 : x = 4`,
        `Vérifier : 2 × 4 + 1 = 9`,
      ],
      answer: [0, 1, 2, 3],
      explanation: `On part de l'équation, on isole le terme en x (2x = 8), on divise par 2 (x = 4), puis on vérifie la solution.`,
    },
    {
      id: `mch3-q11`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Quelle est la solution de l'inéquation x + 4 < 9 ?`,
      options: [`x < 5`, `x > 5`, `x < 13`, `x > 13`],
      answer: `x < 5`,
      explanation: `On soustrait 4 aux deux membres (positif, le sens ne change pas) : x < 5. Les solutions forment l'intervalle ]−∞ ; 5[.`,
    },
    {
      id: `mch3-q12`,
      type: `relier`,
      difficulty: `medium`,
      question: `Relie chaque équation à sa solution.`,
      options: [`x = 4`, `x = 5`, `x = 2`],
      answer: {
        '3x = 12': `x = 4`,
        'x − 5 = 0': `x = 5`,
        '2x + 1 = 5': `x = 2`,
      },
      explanation: `3x = 12 → x = 4 ; x − 5 = 0 → x = 5 ; 2x + 1 = 5 → 2x = 4 → x = 2.`,
    },
    {
      id: `mch3-q13`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Quelle est la solution de l'inéquation −2x ≥ 10 ?`,
      options: [`x ≤ −5`, `x ≥ −5`, `x ≤ 5`, `x ≥ 5`],
      answer: `x ≤ −5`,
      explanation: `On divise par −2, un nombre négatif, donc on inverse le sens : x ≤ 10/(−2) = −5.`,
      trap: `Le piège : ne pas oublier d'inverser ≥ en ≤ en divisant par un négatif.`,
    },
    {
      id: `mch3-q14`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Un rectangle a une longueur de (x + 3) cm et une largeur de 4 cm. Son périmètre est de 30 cm. Quelle équation traduit le problème ?`,
      options: [
        `2 × (x + 3 + 4) = 30`,
        `(x + 3) × 4 = 30`,
        `x + 3 + 4 = 30`,
        `2 × (x + 3) × 4 = 30`,
      ],
      answer: `2 × (x + 3 + 4) = 30`,
      explanation: `Le périmètre d'un rectangle est 2 × (longueur + largeur) = 2 × (x + 3 + 4). On obtient x = 8 cm en résolvant.`,
    },
    {
      id: `mch3-q15`,
      type: `trous`,
      difficulty: `hard`,
      question: `Dans une inéquation, quand on multiplie ou divise les deux membres par un nombre [négatif], il faut [inverser] le sens de l'inégalité.`,
      answer: [`négatif`, `inverser`],
      explanation: `C'est la règle clé : par exemple −x < 3 devient x > −3 après multiplication par −1.`,
    },
    {
      id: `mch3-q16`,
      type: `boolean`,
      difficulty: `hard`,
      question: `L'intervalle ]−∞ ; 2[ correspond à l'inéquation x ≤ 2.`,
      answer: false,
      explanation: `Le crochet ouvert sur 2 signifie que 2 est exclu : l'intervalle ]−∞ ; 2[ correspond à x < 2 (strictement), pas à x ≤ 2.`,
      trap: `Crochet ouvert = borne exclue (<), crochet fermé = borne incluse (≤).`,
    },
    {
      id: `mch3-q17`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Quelle est la solution de l'équation (3x + 6) = 0 ?`,
      options: [`x = −2`, `x = 2`, `x = −6`, `x = 6`],
      answer: `x = −2`,
      explanation: `3x + 6 = 0 donne 3x = −6, donc x = −2. Vérification : 3 × (−2) + 6 = −6 + 6 = 0 ✓.`,
    },
    {
      id: `mch3-q18`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Justine pense à un nombre. Elle le multiplie par 4 et ajoute 5 ; elle obtient le même résultat qu'en multipliant ce nombre par 7 et en retirant 4. Quel est ce nombre ? (Mets le problème en équation, résous, puis conclus.)`,
      answer: `On appelle x le nombre cherché. L'énoncé donne l'équation 4x + 5 = 7x − 4. On regroupe : 5 + 4 = 7x − 4x, soit 9 = 3x, donc x = 3. Conclusion : le nombre cherché est 3 (vérification : 4 × 3 + 5 = 17 et 7 × 3 − 4 = 17).`,
      explanation: `Étapes attendues : choix de l'inconnue, équation 4x + 5 = 7x − 4, résolution x = 3, phrase de conclusion avec vérification.`,
    },
    {
      id: `mch3-q19`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Résous l'inéquation 3x − 7 ≤ 5x + 1, puis représente les solutions par un intervalle.`,
      answer: `3x − 7 ≤ 5x + 1 donne 3x − 5x ≤ 1 + 7, soit −2x ≤ 8. On divise par −2 (négatif) en inversant le sens : x ≥ −4. Les solutions sont tous les nombres supérieurs ou égaux à −4, soit l'intervalle [−4 ; +∞[.`,
      explanation: `Point clé : en divisant par −2, on inverse ≤ en ≥. La borne −4 est incluse (≤ au départ devient ≥), d'où le crochet fermé [−4 ; +∞[.`,
      trap: `Ne pas oublier d'inverser l'inégalité en divisant par le nombre négatif −2.`,
    },
    {
      id: `mch3-q20`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Pour quelle(s) valeur(s) de x l'expression x(x − 8) est-elle égale à 0 ?`,
      options: [`x = 0 ou x = 8`, `x = 8 seulement`, `x = −8 ou x = 8`, `x = 0 seulement`],
      answer: `x = 0 ou x = 8`,
      explanation: `C'est une équation-produit x × (x − 8) = 0 : un facteur est nul si x = 0, l'autre si x − 8 = 0 soit x = 8. Deux solutions : 0 et 8.`,
      mnemonic: `Un produit nul : on annule chaque facteur, un par un.`,
    },
  ],
  anecdotes: [
    `Le mot « algèbre » vient de l'arabe « al-jabr », tiré du titre du livre d'Al-Khwârizmî vers 820. Ce mot désignait l'opération qui consiste à « remettre » un terme de l'autre côté de l'équation.`,
    `Le nom du savant Al-Khwârizmî, latinisé en « Algoritmi », est aussi à l'origine du mot « algorithme » que l'on utilise aujourd'hui en informatique.`,
    `Avant Descartes (1637), on n'utilisait pas systématiquement la lettre x : c'est lui qui a popularisé l'usage des dernières lettres de l'alphabet (x, y, z) pour les inconnues et des premières (a, b, c) pour les nombres connus.`,
  ],
  pitfalls: `Quand on multiplie ou divise une inéquation par un nombre négatif, on oublie souvent de changer le sens de l'inégalité (≤ devient ≥) : c'est l'erreur la plus fréquente.`,
};
