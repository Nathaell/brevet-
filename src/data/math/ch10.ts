import { Chapter } from '../../types';

export const mathCh10: Chapter = {
  id: `mch10`,
  slug: `theoreme-thales`,
  number: 10,
  subject: `mathematiques`,
  title: `Théorème de Thalès et agrandissement-réduction`,
  subtitle: `Calculer des longueurs avec les rapports égaux, prouver un parallélisme et maîtriser l'effet d'un agrandissement sur les aires et les volumes`,
  introduction: `Comment mesurer la hauteur d'une pyramide sans grimper dessus ? La légende raconte que Thalès de Milet l'a fait grâce à l'ombre et aux triangles semblables, plus de 2500 ans avant nous. Le théorème qui porte son nom repose sur une idée simple mais puissante : quand deux droites sécantes sont coupées par deux parallèles, elles découpent des longueurs proportionnelles. Dans ce chapitre, tu vas apprendre à reconnaître la configuration de Thalès, à écrire les bonnes égalités de rapports, à calculer une longueur par produit en croix, à utiliser la réciproque pour démontrer que deux droites sont parallèles, et enfin à comprendre pourquoi un agrandissement de rapport k multiplie les longueurs par k, mais les aires par k<sup>2</sup> et les volumes par k<sup>3</sup>.`,
  courseContent: `
<h2>1. La configuration de Thalès</h2>
<p>On part de <strong>deux droites sécantes en un point A</strong>. Sur la première droite on place les points <strong>B</strong> et <strong>M</strong> ; sur la seconde, les points <strong>C</strong> et <strong>N</strong>. Si les droites <strong>(BC) et (MN) sont parallèles</strong>, on est dans une <strong>configuration de Thalès</strong>.</p>
<p>Concrètement, on reconnaît deux formes typiques :</p>
<ul>
<li>la forme « <strong>triangle</strong> » : M est entre A et B, et N entre A et C (le petit triangle AMN est « emboîté » dans le grand triangle ABC) ;</li>
<li>la forme « <strong>papillon</strong> » (ou nœud papillon) : A est entre B et M et entre C et N, ce qui dessine deux triangles opposés par le sommet A.</li>
</ul>
<p>Dans les deux cas, <strong>A est le sommet commun</strong> et il faut toujours partir de A pour écrire les longueurs.</p>

<h2>2. L'énoncé du théorème de Thalès</h2>
<p><strong>Si</strong> les points A, M, B sont alignés, les points A, N, C sont alignés, <strong>et si</strong> (MN) // (BC),</p>
<p><strong>alors</strong> les longueurs sont proportionnelles :</p>
<p style="text-align:center"><strong>AM/AB = AN/AC = MN/BC</strong></p>
<p>Comment retenir l'ordre des lettres ? On lit chaque fraction <strong>« petit sur grand »</strong> en partant toujours du sommet A : du petit triangle (AM, AN, MN) au-dessus, du grand triangle (AB, AC, BC) en dessous. Les trois fractions sont égales à un même nombre, le <strong>rapport de réduction (ou d'agrandissement)</strong>.</p>
<p class="attention">Attention : la longueur MN se lit avec le côté BC qui lui correspond (les côtés parallèles entre eux), jamais avec AB ou AC.</p>

<h2>3. Exemple résolu : calculer une longueur</h2>
<p><strong>Énoncé :</strong> les droites (AB) et (AC) sont sécantes en A. M est sur [AB], N est sur [AC] et (MN) // (BC). On donne AM = 4 cm, AB = 6 cm et BC = 9 cm. Calculer MN.</p>
<p><strong>Étape 1 — hypothèses :</strong> A, M, B alignés ; A, N, C alignés ; (MN) // (BC).</p>
<p><strong>Étape 2 — théorème :</strong> d'après le théorème de Thalès, AM/AB = AN/AC = MN/BC.</p>
<p><strong>Étape 3 — on garde les deux fractions utiles :</strong> AM/AB = MN/BC, soit 4/6 = MN/9.</p>
<p><strong>Étape 4 — produit en croix :</strong> MN × 6 = 4 × 9, donc MN = 36/6 = <strong>6 cm</strong>.</p>
<p>Le rapport vaut 4/6 = 2/3 : la petite figure est une réduction de la grande au rapport 2/3, et on vérifie bien que 9 × 2/3 = 6.</p>

<h2>4. La réciproque du théorème de Thalès</h2>
<p>La réciproque sert à <strong>démontrer que deux droites sont parallèles</strong>. Elle fonctionne « à l'envers » : on connaît les longueurs, on en déduit le parallélisme.</p>
<p><strong>Si</strong> les points A, M, B sont alignés <strong>dans le même ordre</strong> que A, N, C, <strong>et si</strong> AM/AB = AN/AC,</p>
<p><strong>alors</strong> les droites (MN) et (BC) sont parallèles.</p>
<p>Deux conditions sont donc indispensables :</p>
<ul>
<li>les rapports <strong>AM/AB et AN/AC doivent être égaux</strong> (on le vérifie par produit en croix : AM × AC = AB × AN) ;</li>
<li>les points doivent être <strong>alignés dans le même ordre</strong> à partir de A (sinon les droites ne sont pas parallèles, même si les rapports sont égaux).</li>
</ul>
<p class="attention">Important : si AM/AB ≠ AN/AC, on peut affirmer que (MN) et (BC) <strong>ne sont pas parallèles</strong>.</p>

<h2>5. Exemple résolu : prouver un parallélisme</h2>
<p><strong>Énoncé :</strong> A, M, B sont alignés dans cet ordre avec AM = 2 cm et AB = 5 cm. A, N, C sont alignés dans cet ordre avec AN = 3 cm et AC = 7,5 cm. Les droites (MN) et (BC) sont-elles parallèles ?</p>
<p><strong>Étape 1 — calculer les deux rapports.</strong> On compare AM/AB et AN/AC.</p>
<p>AM/AB = 2/5 = 0,4 &nbsp; et &nbsp; AN/AC = 3/7,5 = 0,4.</p>
<p>(Vérification par produit en croix : AM × AC = 2 × 7,5 = 15 et AB × AN = 5 × 3 = 15. Les produits sont égaux.)</p>
<p><strong>Étape 2 — vérifier l'ordre.</strong> Les points sont alignés dans le même ordre à partir de A.</p>
<p><strong>Étape 3 — conclusion.</strong> Comme AM/AB = AN/AC et que les points sont alignés dans le même ordre, d'après la réciproque du théorème de Thalès, <strong>(MN) // (BC)</strong>.</p>

<h2>6. Agrandissement et réduction de rapport k</h2>
<p>Multiplier toutes les longueurs d'une figure par un même nombre <strong>k</strong> produit un <strong>agrandissement</strong> si k &gt; 1, ou une <strong>réduction</strong> si 0 &lt; k &lt; 1. La figure obtenue a la même forme : les angles sont conservés.</p>
<p>L'effet de k dépend de la « dimension » de la grandeur :</p>
<ul>
<li>les <strong>longueurs</strong> (côtés, périmètres, hauteurs) sont multipliées par <strong>k</strong> ;</li>
<li>les <strong>aires</strong> (surfaces) sont multipliées par <strong>k<sup>2</sup></strong> ;</li>
<li>les <strong>volumes</strong> sont multipliés par <strong>k<sup>3</sup></strong>.</li>
</ul>
<p style="text-align:center"><strong>longueur × k &nbsp;&nbsp; aire × k<sup>2</sup> &nbsp;&nbsp; volume × k<sup>3</sup></strong></p>
<p><strong>Exemple résolu :</strong> un rectangle a une aire de 12 cm<sup>2</sup>. On l'agrandit avec le rapport k = 3.</p>
<ul>
<li>Aire de l'agrandissement = 12 × k<sup>2</sup> = 12 × 3<sup>2</sup> = 12 × 9 = <strong>108 cm<sup>2</sup></strong>.</li>
</ul>
<p>Et pour un solide : un cube de volume 5 cm<sup>3</sup> agrandi au rapport k = 2 a pour volume 5 × k<sup>3</sup> = 5 × 2<sup>3</sup> = 5 × 8 = <strong>40 cm<sup>3</sup></strong>.</p>
<p class="attention">Erreur très fréquente : multiplier l'aire par k au lieu de k<sup>2</sup>, ou le volume par k au lieu de k<sup>3</sup>. Si on double les longueurs (k = 2), l'aire est multipliée par 4 et le volume par 8, pas par 2 !</p>
`,
  summary: `Le **théorème de Thalès** s'applique dans une **configuration** où deux droites se coupent en **A**, avec B et M sur l'une, C et N sur l'autre, et **(MN) // (BC)**. On a alors l'égalité des rapports **AM/AB = AN/AC = MN/BC**. On les lit toujours « petit sur grand » en partant de A.

Pour **calculer une longueur**, on garde les deux fractions qui contiennent l'inconnue et on fait un **produit en croix**. Toujours rédiger : hypothèses (alignements + parallélisme) → théorème → calcul → conclusion.

La **réciproque** sert à **démontrer un parallélisme** : si **AM/AB = AN/AC** *et* si les points sont **alignés dans le même ordre** à partir de A, alors **(MN) // (BC)**. Si les rapports sont différents, les droites *ne sont pas* parallèles.

Un **agrandissement-réduction de rapport k** conserve la forme. Les **longueurs sont × k**, les **aires × k²** et les **volumes × k³**. Ne jamais oublier les puissances : doubler les longueurs (k = 2) quadruple l'aire (× 4) et octuple le volume (× 8).`,
  timeline: [
    {
      id: `mch10-t1`,
      date: `vers -600`,
      title: `Thalès mesure la pyramide`,
      description: `Selon la légende, Thalès de Milet calcule la hauteur de la grande pyramide d'Égypte en comparant son ombre à celle d'un bâton, première application de la proportionnalité des longueurs.`,
    },
    {
      id: `mch10-t2`,
      date: `vers -300`,
      title: `Euclide démontre tout`,
      description: `Dans les Éléments, Euclide rassemble et démontre rigoureusement les propriétés des triangles semblables et des proportions, donnant un cadre logique au résultat de Thalès.`,
    },
    {
      id: `mch10-t3`,
      date: `XVIIe siècle`,
      title: `La géométrie projective`,
      description: `Les mathématiciens étudient les projections et les perspectives : agrandir ou réduire une figure devient un outil central pour le dessin, l'architecture et l'optique.`,
    },
    {
      id: `mch10-t4`,
      date: `Aujourd'hui`,
      title: `Échelles et maquettes`,
      description: `Cartes, plans, maquettes, zoom numérique : le rapport d'agrandissement et l'effet sur aires et volumes interviennent partout dans la vie quotidienne et les sciences.`,
    },
  ],
  mindMap: [
    { id: `mch10-m0`, label: `Thalès & agrandissement` },
    { id: `mch10-m1`, label: `Configuration`, description: `Droites sécantes en A, (MN) // (BC)`, parentId: `mch10-m0` },
    { id: `mch10-m2`, label: `Égalité de Thalès`, description: `AM/AB = AN/AC = MN/BC`, parentId: `mch10-m0` },
    { id: `mch10-m3`, label: `Calcul de longueur`, description: `Produit en croix sur deux fractions`, parentId: `mch10-m0` },
    { id: `mch10-m4`, label: `Réciproque`, description: `Rapports égaux + même ordre ⇒ parallèles`, parentId: `mch10-m0` },
    { id: `mch10-m5`, label: `Agrandissement / réduction`, description: `Rapport k, même forme`, parentId: `mch10-m0` },
    { id: `mch10-m6`, label: `Effet de k`, description: `Longueurs ×k, aires ×k², volumes ×k³`, parentId: `mch10-m5` },
  ],
  characters: [
    {
      id: `mch10-c1`,
      name: `Thalès de Milet`,
      dates: `vers -625 / -547`,
      role: `Mathématicien et philosophe grec`,
      importance: `Considéré comme l'un des sept sages de la Grèce, il aurait introduit l'idée de démonstration en géométrie. Le théorème de proportionnalité des longueurs porte son nom en France.`,
    },
    {
      id: `mch10-c2`,
      name: `Euclide`,
      dates: `vers -325 / -265`,
      role: `Mathématicien grec d'Alexandrie`,
      importance: `Auteur des Éléments, l'ouvrage de mathématiques le plus diffusé de l'histoire. Il y démontre rigoureusement les propriétés des proportions et des triangles semblables.`,
    },
  ],
  dates: [
    { date: `Égalité de Thalès`, event: `AM/AB = AN/AC = MN/BC`, explanation: `Les trois rapports égaux dans la configuration de Thalès, lus « petit sur grand » à partir de A.` },
    { date: `Hypothèses`, event: `A, M, B et A, N, C alignés ; (MN) // (BC)`, explanation: `Ce qu'il faut vérifier (et écrire) avant d'appliquer le théorème direct.` },
    { date: `Calcul de longueur`, event: `Produit en croix`, explanation: `On isole l'inconnue à partir de deux fractions égales : a/b = c/x ⇒ x = (b × c) / a.` },
    { date: `Réciproque`, event: `AM/AB = AN/AC + même ordre ⇒ (MN) // (BC)`, explanation: `Sert à démontrer que deux droites sont parallèles.` },
    { date: `Non-parallélisme`, event: `AM/AB ≠ AN/AC`, explanation: `Si les rapports diffèrent, les droites (MN) et (BC) ne sont pas parallèles.` },
    { date: `Longueur (agrandissement)`, event: `× k`, explanation: `Toutes les longueurs (côtés, périmètres) sont multipliées par le rapport k.` },
    { date: `Aire (agrandissement)`, event: `× k²`, explanation: `Les surfaces sont multipliées par le carré du rapport.` },
    { date: `Volume (agrandissement)`, event: `× k³`, explanation: `Les volumes sont multipliés par le cube du rapport.` },
  ],
  flashcards: [
    { id: `mch10-f1`, question: `Quelle est l'égalité du théorème de Thalès ?`, answer: `AM/AB = AN/AC = MN/BC`, category: `Théorème` },
    { id: `mch10-f2`, question: `Quelles sont les hypothèses du théorème de Thalès ?`, answer: `A, M, B alignés ; A, N, C alignés ; et (MN) // (BC).`, category: `Théorème` },
    { id: `mch10-f3`, question: `Comment lit-on les fractions de Thalès ?`, answer: `Toujours « petit sur grand » en partant du sommet commun A.`, category: `Méthode` },
    { id: `mch10-f4`, question: `Comment calcule-t-on une longueur inconnue avec Thalès ?`, answer: `On garde deux fractions égales contenant l'inconnue, puis on fait un produit en croix.`, category: `Méthode` },
    { id: `mch10-f5`, question: `À quoi sert la réciproque du théorème de Thalès ?`, answer: `À démontrer que deux droites sont parallèles.`, category: `Réciproque` },
    { id: `mch10-f6`, question: `Quelles conditions pour conclure (MN) // (BC) par la réciproque ?`, answer: `AM/AB = AN/AC ET les points alignés dans le même ordre à partir de A.`, category: `Réciproque` },
    { id: `mch10-f7`, question: `Que peut-on dire si AM/AB ≠ AN/AC ?`, answer: `Les droites (MN) et (BC) ne sont pas parallèles.`, category: `Réciproque` },
    { id: `mch10-f8`, question: `Dans un agrandissement de rapport k, par combien sont multipliées les longueurs ?`, answer: `Par k.`, category: `Agrandissement` },
    { id: `mch10-f9`, question: `Dans un agrandissement de rapport k, par combien est multipliée une aire ?`, answer: `Par k² (le carré du rapport).`, category: `Agrandissement` },
    { id: `mch10-f10`, question: `Dans un agrandissement de rapport k, par combien est multiplié un volume ?`, answer: `Par k³ (le cube du rapport).`, category: `Agrandissement` },
    { id: `mch10-f11`, question: `Si on double toutes les longueurs (k = 2), que devient l'aire ?`, answer: `Elle est multipliée par 4 (car 2² = 4).`, category: `Agrandissement` },
    { id: `mch10-f12`, question: `Agrandissement ou réduction selon la valeur de k ?`, answer: `Agrandissement si k > 1, réduction si 0 < k < 1.`, category: `Agrandissement` },
  ],
  questions: [
    {
      id: `mch10-q1`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Pour pouvoir appliquer le théorème de Thalès, quelle condition est indispensable ?`,
      options: [`Les droites (MN) et (BC) sont parallèles`, `Les droites (MN) et (BC) sont perpendiculaires`, `Le triangle est isocèle`, `Les longueurs sont des entiers`],
      answer: `Les droites (MN) et (BC) sont parallèles`,
      explanation: `Le théorème de Thalès repose sur la présence de deux droites parallèles coupées par deux sécantes.`,
      mnemonic: `Pas de parallèles, pas de Thalès.`,
    },
    {
      id: `mch10-q2`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Dans la configuration de Thalès, on écrit les fractions « petit sur grand » en partant toujours du sommet commun A.`,
      answer: true,
      explanation: `Chaque rapport part du sommet A : AM/AB, AN/AC, MN/BC.`,
    },
    {
      id: `mch10-q3`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Quelle est l'égalité correcte du théorème de Thalès ?`,
      options: [`AM/AB = AN/AC = MN/BC`, `AM/AN = AB/AC = MN/BC`, `AB/AM = MN/AC = BC/AN`, `AM/MN = AB/BC = AN/AC`],
      answer: `AM/AB = AN/AC = MN/BC`,
      explanation: `Les trois rapports « petit sur grand » à partir de A sont égaux.`,
      trap: `MN se lit avec BC (les côtés parallèles), pas avec AB ou AC.`,
    },
    {
      id: `mch10-q4`,
      type: `trous`,
      difficulty: `easy`,
      question: `Dans un agrandissement de rapport k, les longueurs sont multipliées par [k], les aires par [k²] et les volumes par [k³].`,
      answer: [`k`, `k²`, `k³`],
      explanation: `Chaque dimension supplémentaire ajoute une puissance : longueur (1D) ×k, aire (2D) ×k², volume (3D) ×k³.`,
      mnemonic: `1 dimension = 1 fois k, 2 = k², 3 = k³.`,
    },
    {
      id: `mch10-q5`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Un agrandissement de rapport k conserve la forme de la figure (les angles ne changent pas).`,
      answer: true,
      explanation: `Un agrandissement-réduction est une transformation qui conserve les angles : la figure obtenue est semblable.`,
    },
    {
      id: `mch10-q6`,
      type: `qcm`,
      difficulty: `medium`,
      question: `(MN) // (BC), M sur [AB], N sur [AC]. On a AM = 4 cm, AB = 6 cm, BC = 9 cm. Combien vaut MN ?`,
      options: [`6 cm`, `13,5 cm`, `4,5 cm`, `5 cm`],
      answer: `6 cm`,
      explanation: `AM/AB = MN/BC donne 4/6 = MN/9, donc MN = (4 × 9)/6 = 36/6 = 6 cm.`,
      trap: `Ne pas écrire MN/AB : MN se compare à BC, son côté parallèle.`,
    },
    {
      id: `mch10-q7`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Une figure a une aire de 12 cm². On l'agrandit au rapport k = 3. Quelle est la nouvelle aire ?`,
      options: [`108 cm²`, `36 cm²`, `324 cm²`, `15 cm²`],
      answer: `108 cm²`,
      explanation: `L'aire est multipliée par k² : 12 × 3² = 12 × 9 = 108 cm².`,
      trap: `Le piège est de faire 12 × 3 = 36 : pour les aires, c'est k², pas k.`,
    },
    {
      id: `mch10-q8`,
      type: `relier`,
      difficulty: `medium`,
      question: `Relie chaque grandeur à l'effet d'un agrandissement de rapport k.`,
      options: [`× k`, `× k²`, `× k³`],
      answer: { 'Une longueur': '× k', 'Une aire': '× k²', 'Un volume': '× k³' },
      explanation: `Longueur (1 dimension) ×k, aire (2 dimensions) ×k², volume (3 dimensions) ×k³.`,
    },
    {
      id: `mch10-q9`,
      type: `trous`,
      difficulty: `medium`,
      question: `La [réciproque] du théorème de Thalès permet de démontrer que deux droites sont [parallèles].`,
      answer: [`réciproque`, `parallèles`],
      explanation: `On compare les rapports : s'ils sont égaux et que les points sont dans le même ordre, les droites sont parallèles.`,
    },
    {
      id: `mch10-q10`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Si on triple toutes les arêtes d'un solide (k = 3), son volume est multiplié par 9.`,
      answer: false,
      explanation: `Le volume est multiplié par k³ = 3³ = 27, et non par 9 (qui est k²).`,
      trap: `9 correspond à l'aire (k²), pas au volume.`,
    },
    {
      id: `mch10-q11`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Configuration « papillon » : A est entre B et M, et entre C et N, avec (BC) // (MN). On a AB = 5, AM = 8, AC = 6. Combien vaut AN ?`,
      options: [`9,6`, `3,75`, `7`, `4,8`],
      answer: `9,6`,
      explanation: `AB/AM = AC/AN donne 5/8 = 6/AN, donc AN = (8 × 6)/5 = 48/5 = 9,6.`,
      trap: `Le théorème s'applique aussi dans la configuration papillon, avec A comme sommet commun.`,
    },
    {
      id: `mch10-q12`,
      type: `ordonner`,
      difficulty: `hard`,
      question: `Remets dans l'ordre les étapes d'une rédaction qui calcule une longueur avec le théorème de Thalès.`,
      options: [
        `J'écris les hypothèses : points alignés et (MN) // (BC)`,
        `J'applique le théorème : AM/AB = AN/AC = MN/BC`,
        `Je remplace par les valeurs et je garde deux fractions utiles`,
        `Je fais le produit en croix et je conclus`,
      ],
      answer: [0, 1, 2, 3],
      explanation: `Hypothèses → énoncé du théorème → remplacement par les valeurs → produit en croix et conclusion.`,
    },
    {
      id: `mch10-q13`,
      type: `qcm`,
      difficulty: `hard`,
      question: `A, M, B alignés dans cet ordre avec AM = 3 et AB = 4,5. A, N, C alignés dans cet ordre avec AN = 5 et AC = 7,5. Les droites (MN) et (BC) sont-elles parallèles ?`,
      options: [`Oui, car AM/AB = AN/AC = 2/3`, `Non, car les rapports sont différents`, `On ne peut pas savoir`, `Oui, car les longueurs sont des décimaux`],
      answer: `Oui, car AM/AB = AN/AC = 2/3`,
      explanation: `AM/AB = 3/4,5 = 2/3 et AN/AC = 5/7,5 = 2/3. Les rapports sont égaux et les points sont dans le même ordre : d'après la réciproque, (MN) // (BC).`,
      trap: `Il faut vérifier l'ordre des points en plus de l'égalité des rapports.`,
    },
    {
      id: `mch10-q14`,
      type: `boolean`,
      difficulty: `hard`,
      question: `Pour appliquer la réciproque du théorème de Thalès, il suffit que AM/AB = AN/AC, l'ordre des points n'a aucune importance.`,
      answer: false,
      explanation: `Les deux conditions sont nécessaires : l'égalité des rapports ET l'alignement dans le même ordre à partir de A.`,
      trap: `Sans le bon ordre, les rapports peuvent être égaux sans que les droites soient parallèles.`,
    },
    {
      id: `mch10-q15`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Une maquette de bateau est une réduction au rapport k = 1/50 du vrai bateau. Le vrai bateau a un volume de 100 000 cm³ pour une certaine pièce. Quel est le rapport entre le volume de la maquette et celui du bateau ?`,
      options: [`1/125000`, `1/50`, `1/2500`, `1/150`],
      answer: `1/125000`,
      explanation: `Les volumes sont multipliés par k³ = (1/50)³ = 1/125000.`,
      trap: `Pour un volume, on élève le rapport au cube, pas à la puissance 1.`,
    },
    {
      id: `mch10-q16`,
      type: `brevet`,
      difficulty: `expert`,
      question: `(AB) et (AC) sont sécantes en A. M ∈ [AB], N ∈ [AC] et (MN) // (BC). On donne AM = 3 cm, AB = 7,5 cm et AC = 10 cm. Rédige le calcul de AN.`,
      answer: `On sait que A, M, B sont alignés, que A, N, C sont alignés et que (MN) // (BC). D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC. On utilise AM/AB = AN/AC, soit 3/7,5 = AN/10. Par produit en croix : AN × 7,5 = 3 × 10 = 30, donc AN = 30/7,5 = 4 cm.`,
      explanation: `Il faut citer les hypothèses (alignements + parallélisme), énoncer le théorème, puis isoler AN par produit en croix : AN = (3 × 10)/7,5 = 4 cm.`,
    },
    {
      id: `mch10-q17`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Un cube a une aire totale de 24 cm² et un volume de 8 cm³. On l'agrandit au rapport k = 2. Quelles sont la nouvelle aire totale et le nouveau volume ?`,
      options: [`Aire 96 cm² et volume 64 cm³`, `Aire 48 cm² et volume 16 cm³`, `Aire 96 cm² et volume 16 cm³`, `Aire 48 cm² et volume 64 cm³`],
      answer: `Aire 96 cm² et volume 64 cm³`,
      explanation: `Aire × k² = 24 × 2² = 24 × 4 = 96 cm². Volume × k³ = 8 × 2³ = 8 × 8 = 64 cm³.`,
      trap: `Ne pas appliquer le même facteur à l'aire et au volume : k² pour l'aire, k³ pour le volume.`,
    },
    {
      id: `mch10-q18`,
      type: `trous`,
      difficulty: `expert`,
      question: `On agrandit une figure et son aire passe de 5 cm² à 45 cm². L'aire a été multipliée par [9], donc k² = 9 et le rapport vaut k = [3].`,
      answer: [`9`, `3`],
      explanation: `45 ÷ 5 = 9, donc k² = 9 et k = √9 = 3. Les longueurs ont été multipliées par 3.`,
      mnemonic: `Pour retrouver k à partir des aires, on prend la racine carrée du rapport des aires.`,
    },
    {
      id: `mch10-q19`,
      type: `qcm`,
      difficulty: `medium`,
      question: `(MN) // (BC), M ∈ [AB], N ∈ [AC]. AM = 2, AB = 5 et AN = 2,4. Combien vaut AC ?`,
      options: [`6`, `0,96`, `4,4`, `5`],
      answer: `6`,
      explanation: `AM/AB = AN/AC donne 2/5 = 2,4/AC, donc AC = (5 × 2,4)/2 = 12/2 = 6.`,
    },
    {
      id: `mch10-q20`,
      type: `personnage`,
      difficulty: `easy`,
      question: `Quel mathématicien grec, l'un des sept sages, aurait mesuré la hauteur d'une pyramide grâce à son ombre ?`,
      options: [`Thalès de Milet`, `Euclide`, `Pythagore`, `Archimède`],
      answer: `Thalès de Milet`,
      explanation: `La légende attribue à Thalès de Milet ce calcul, fondé sur la proportionnalité des longueurs.`,
    },
  ],
  anecdotes: [
    `On raconte que Thalès aurait mesuré la hauteur de la grande pyramide d'Égypte en plantant un bâton dans le sable : au moment où l'ombre du bâton était égale à sa hauteur, l'ombre de la pyramide donnait directement sa hauteur.`,
    `Le théorème que nous appelons « théorème de Thalès » en France porte d'autres noms ailleurs : les Allemands réservent ce nom à un théorème sur les angles inscrits dans un cercle, et les anglophones parlent plutôt d'« intercept theorem ».`,
    `Au cinéma et dans les jeux vidéo, agrandir un décor au rapport k oblige à recalculer les volumes en k³ : c'est pourquoi une maquette deux fois plus grande pèse environ huit fois plus lourd si elle est pleine.`,
  ],
  pitfalls: `Pars toujours du sommet commun A et compare MN avec BC (les côtés parallèles), jamais avec AB ou AC ; et pour un agrandissement de rapport k, multiplie les aires par k² et les volumes par k³, surtout pas par k.`,
};
