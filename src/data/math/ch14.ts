import { Chapter } from '../../types';

export const mathCh14: Chapter = {
  id: `mch14`,
  slug: `geometrie-espace-grandeurs`,
  number: 14,
  subject: `mathematiques`,
  title: `Géométrie dans l'espace, grandeurs et mesures`,
  subtitle: `Reconnaître les solides usuels, calculer leurs volumes et leurs aires, convertir les unités de longueur, d'aire et de volume, et comprendre l'effet d'un agrandissement de rapport k`,
  introduction: `Une canette, un ballon de basket, une boîte à chaussures, la pyramide du Louvre : autour de toi, le monde est rempli de solides. Savoir calculer le volume qu'ils occupent ou l'aire de leur surface est utile au quotidien (combien de litres dans ce réservoir ?) et tombe très souvent au Brevet. Dans ce chapitre, tu vas (re)découvrir les solides usuels — pavé droit, prisme, cylindre, pyramide, cône, boule — et surtout leurs formules de volume. Tu apprendras à ne jamais te tromper dans les conversions d'unités : le facteur entre deux unités est 10 pour les longueurs, 100 pour les aires et 1000 pour les volumes, avec la précieuse égalité 1 L = 1 dm<sup>3</sup>. Enfin, tu verras pourquoi un agrandissement de rapport k multiplie les longueurs par k, les aires par k<sup>2</sup> et les volumes par k<sup>3</sup>.`,
  courseContent: `
<h2>1. Les solides usuels</h2>
<p>Un <strong>solide</strong> est un objet de l'espace à trois dimensions. Au Brevet, tu dois reconnaître :</p>
<ul>
<li>le <strong>pavé droit</strong> (parallélépipède rectangle) : 6 faces rectangulaires, comme une boîte ;</li>
<li>le <strong>cube</strong> : un pavé droit dont toutes les arêtes ont la même longueur ;</li>
<li>le <strong>prisme droit</strong> : deux bases identiques et parallèles (des polygones), reliées par des rectangles ;</li>
<li>le <strong>cylindre de révolution</strong> : deux disques identiques reliés par une surface courbe (une canette) ;</li>
<li>la <strong>pyramide</strong> : une base polygonale et un sommet, les faces latérales sont des triangles ;</li>
<li>le <strong>cône de révolution</strong> : une base en forme de disque et un sommet (un cornet de glace) ;</li>
<li>la <strong>boule</strong> et la <strong>sphère</strong> : la sphère est la surface (la « peau »), la boule est le solide plein (l'intérieur compris), comme une bille.</li>
</ul>
<p><strong>À retenir :</strong> la <em>sphère</em> est une surface (on calcule son <em>aire</em>), la <em>boule</em> est un solide (on calcule son <em>volume</em>).</p>

<h2>2. Les formules de volume</h2>
<p>Le <strong>volume</strong> mesure la place occupée par un solide. Il s'exprime en unités de volume : mm<sup>3</sup>, cm<sup>3</sup>, dm<sup>3</sup>, m<sup>3</sup>...</p>
<table>
<thead>
<tr><th>Solide</th><th>Formule du volume</th></tr>
</thead>
<tbody>
<tr><td>Pavé droit</td><td>V = L × l × h</td></tr>
<tr><td>Cube (arête a)</td><td>V = a × a × a = a<sup>3</sup></td></tr>
<tr><td>Prisme droit</td><td>V = aire de la base × hauteur</td></tr>
<tr><td>Cylindre (rayon r)</td><td>V = π × r<sup>2</sup> × h</td></tr>
<tr><td>Pyramide</td><td>V = (aire de la base × hauteur) / 3</td></tr>
<tr><td>Cône (rayon r)</td><td>V = (π × r<sup>2</sup> × h) / 3</td></tr>
<tr><td>Boule (rayon r)</td><td>V = (4 / 3) × π × r<sup>3</sup></td></tr>
</tbody>
</table>
<p><strong>Le truc à ne jamais oublier :</strong> la pyramide et le cône ont une <strong>pointe</strong>, leur volume est <strong>divisé par 3</strong>. Une pyramide remplit exactement un tiers du prisme qui a la même base et la même hauteur ; un cône remplit un tiers du cylindre correspondant.</p>

<h2>3. Aires utiles et formules du cercle</h2>
<ul>
<li><strong>Périmètre d'un cercle</strong> de rayon r : P = 2 × π × r (ou π × d avec d le diamètre) ;</li>
<li><strong>Aire d'un disque</strong> de rayon r : A = π × r<sup>2</sup> ;</li>
<li><strong>Aire d'une sphère</strong> de rayon r : A = 4 × π × r<sup>2</sup>.</li>
</ul>
<p>Pour les calculs, on garde souvent la valeur <strong>exacte avec π</strong> (par exemple 36π cm<sup>3</sup>), puis on donne une <strong>valeur approchée</strong> à la fin en prenant π ≈ 3,14 (ou la touche π de la calculatrice).</p>

<h3>Exemple résolu 1 — Volume d'un cylindre</h3>
<p>Une boîte de conserve est un cylindre de rayon r = 4 cm et de hauteur h = 10 cm. Quel est son volume ?</p>
<p>V = π × r<sup>2</sup> × h = π × 4<sup>2</sup> × 10 = π × 16 × 10 = <strong>160π cm<sup>3</sup></strong>.</p>
<p>Valeur approchée : V ≈ 160 × 3,14 ≈ <strong>502,4 cm<sup>3</sup></strong>, soit environ 0,5 L.</p>

<h3>Exemple résolu 2 — Volume d'une boule</h3>
<p>Une bille a un rayon r = 3 cm. Calcule son volume.</p>
<p>V = (4 / 3) × π × r<sup>3</sup> = (4 / 3) × π × 3<sup>3</sup> = (4 / 3) × π × 27.</p>
<p>Comme 27 / 3 = 9, on a V = 4 × 9 × π = <strong>36π cm<sup>3</sup></strong>.</p>
<p>Valeur approchée : V ≈ 36 × 3,14 ≈ <strong>113,1 cm<sup>3</sup></strong>.</p>

<h3>Exemple résolu 3 — Conversion d'unité de volume et de capacité</h3>
<p>Un aquarium a la forme d'un pavé droit de dimensions 50 cm × 30 cm × 40 cm. Combien de litres d'eau contient-il ?</p>
<p>Volume : V = L × l × h = 50 × 30 × 40 = <strong>60 000 cm<sup>3</sup></strong>.</p>
<p>On convertit en dm<sup>3</sup>. Entre cm<sup>3</sup> et dm<sup>3</sup>, le facteur est 1000 : 60 000 cm<sup>3</sup> = 60 000 / 1000 = <strong>60 dm<sup>3</sup></strong>.</p>
<p>Or 1 dm<sup>3</sup> = 1 L, donc l'aquarium contient <strong>60 L</strong> d'eau.</p>

<h2>4. Les conversions d'unités</h2>
<p>Le secret, c'est le <strong>facteur entre deux unités successives</strong> :</p>
<ul>
<li><strong>Longueurs</strong> (m, dm, cm, mm...) : facteur <strong>10</strong>. Ex : 1 m = 10 dm = 100 cm.</li>
<li><strong>Aires</strong> (m<sup>2</sup>, dm<sup>2</sup>, cm<sup>2</sup>...) : facteur <strong>100</strong>. Ex : 1 m<sup>2</sup> = 100 dm<sup>2</sup> = 10 000 cm<sup>2</sup>.</li>
<li><strong>Volumes</strong> (m<sup>3</sup>, dm<sup>3</sup>, cm<sup>3</sup>...) : facteur <strong>1000</strong>. Ex : 1 m<sup>3</sup> = 1000 dm<sup>3</sup> = 1 000 000 cm<sup>3</sup>.</li>
</ul>
<p><strong>Capacités et volumes :</strong> 1 L = 1 dm<sup>3</sup> et 1 mL = 1 cm<sup>3</sup>. Donc 1 m<sup>3</sup> = 1000 L.</p>
<p>Pourquoi 10, 100, 1000 ? Parce qu'une aire est un produit de 2 longueurs (10<sup>2</sup> = 100) et un volume un produit de 3 longueurs (10<sup>3</sup> = 1000).</p>

<h2>5. Sections de solides et agrandissement de rapport k</h2>
<p>Quand on coupe un solide par un plan, on obtient une <strong>section plane</strong> :</p>
<ul>
<li>la section d'un <strong>pavé droit</strong> par un plan parallèle à une face est un <strong>rectangle</strong> ;</li>
<li>la section d'un <strong>cylindre</strong> par un plan parallèle à sa base est un <strong>disque</strong> de même rayon ;</li>
<li>la section d'une <strong>sphère</strong> par un plan est un <strong>cercle</strong> (un disque si on prend la boule).</li>
</ul>
<p>Un <strong>agrandissement de rapport k</strong> (avec k &gt; 1, c'est une réduction si k &lt; 1) transforme un solide en un solide de même forme. Son effet :</p>
<ul>
<li>les <strong>longueurs</strong> sont multipliées par <strong>k</strong> ;</li>
<li>les <strong>aires</strong> sont multipliées par <strong>k<sup>2</sup></strong> ;</li>
<li>les <strong>volumes</strong> sont multipliés par <strong>k<sup>3</sup></strong>.</li>
</ul>
<p><strong>Exemple :</strong> si on double toutes les dimensions d'un cube (k = 2), son volume est multiplié par 2<sup>3</sup> = 8. C'est pour cela qu'un grand carton « deux fois plus grand » contient en fait 8 fois plus.</p>
`,
  summary: `*Les solides usuels.* Tu dois reconnaître le *pavé droit*, le *cube*, le *prisme droit*, le *cylindre*, la *pyramide*, le *cône* et la *boule*. Attention : la *sphère* est une surface (on calcule son *aire*), la *boule* est le solide plein (on calcule son *volume*).

*Les volumes à connaître par cœur.* Pavé : V = L × l × h. Cylindre : V = π × r² × h. Prisme : V = aire de base × hauteur. Pyramide : V = (aire de base × hauteur) / 3. Cône : V = (π × r² × h) / 3. Boule : V = (4/3) × π × r³. Le réflexe : *pyramide et cône ont une pointe → on divise par 3*.

*Aires et cercle.* Périmètre du cercle : 2 × π × r. Aire du disque : π × r². Aire de la sphère : 4 × π × r². On garde la valeur *exacte avec π* puis on arrondit à la fin avec π ≈ 3,14.

*Les conversions.* Le facteur entre deux unités successives vaut *10 pour les longueurs*, *100 pour les aires* et *1000 pour les volumes*. Égalités clés : *1 L = 1 dm³* et *1 mL = 1 cm³*, donc 1 m³ = 1000 L.

*L'agrandissement de rapport k.* Les longueurs sont multipliées par *k*, les aires par *k²* et les volumes par *k³*. Doubler les dimensions (k = 2) multiplie le volume par 8.`,
  timeline: [
    {
      id: `mch14-t1`,
      date: `vers -300`,
      title: `Les Éléments d'Euclide`,
      description: `Euclide rassemble la géométrie de l'espace : définitions des solides, des prismes et des pyramides, qui structurent encore le cours d'aujourd'hui.`,
    },
    {
      id: `mch14-t2`,
      date: `vers -250`,
      title: `Archimède et la sphère`,
      description: `Archimède démontre que le volume d'une boule vaut les deux tiers de celui du cylindre qui la contient juste, un résultat dont il était si fier qu'il le fit graver sur sa tombe.`,
    },
    {
      id: `mch14-t3`,
      date: `1635`,
      title: `La méthode de Cavalieri`,
      description: `Bonaventura Cavalieri publie sa méthode des « indivisibles » : deux solides de même hauteur dont les sections ont toujours la même aire ont le même volume.`,
    },
    {
      id: `mch14-t4`,
      date: `1670-1680`,
      title: `Le calcul intégral`,
      description: `Newton et Leibniz inventent le calcul intégral, qui justifie rigoureusement toutes les formules de volume utilisées au collège.`,
    },
    {
      id: `mch14-t5`,
      date: `1795`,
      title: `Le système métrique`,
      description: `La France adopte le système métrique : le litre est défini comme le volume d'un décimètre cube, d'où l'égalité 1 L = 1 dm³.`,
    },
  ],
  mindMap: [
    {
      id: `mch14-m0`,
      label: `Espace, grandeurs & mesures`,
    },
    {
      id: `mch14-m1`,
      label: `Solides usuels`,
      description: `Pavé, cube, prisme, cylindre, pyramide, cône, boule/sphère.`,
      parentId: `mch14-m0`,
    },
    {
      id: `mch14-m2`,
      label: `Volumes`,
      description: `Pavé L×l×h, cylindre π×r²×h, pyramide et cône /3, boule (4/3)π×r³.`,
      parentId: `mch14-m0`,
    },
    {
      id: `mch14-m3`,
      label: `Aires & cercle`,
      description: `Disque π×r², sphère 4×π×r², périmètre 2×π×r.`,
      parentId: `mch14-m0`,
    },
    {
      id: `mch14-m4`,
      label: `Conversions`,
      description: `×10 longueurs, ×100 aires, ×1000 volumes ; 1 L = 1 dm³.`,
      parentId: `mch14-m0`,
    },
    {
      id: `mch14-m5`,
      label: `Sections`,
      description: `Coupe d'un solide par un plan : rectangle, disque, cercle.`,
      parentId: `mch14-m0`,
    },
    {
      id: `mch14-m6`,
      label: `Agrandissement k`,
      description: `Longueurs ×k, aires ×k², volumes ×k³.`,
      parentId: `mch14-m0`,
    },
  ],
  characters: [
    {
      id: `mch14-c1`,
      name: `Archimède`,
      dates: `vers -287 / -212`,
      role: `Mathématicien et physicien grec de Syracuse`,
      importance: `Il a découvert que le volume d'une boule vaut les deux tiers de celui du cylindre circonscrit et que leurs aires sont dans le même rapport ; ce résultat figurait sur sa tombe.`,
    },
    {
      id: `mch14-c2`,
      name: `Bonaventura Cavalieri`,
      dates: `1598 - 1647`,
      role: `Mathématicien italien, élève de Galilée`,
      importance: `Sa « méthode des indivisibles » (1635) permet de comparer des volumes par leurs sections et annonce le calcul intégral, qui fonde nos formules de volume.`,
    },
    {
      id: `mch14-c3`,
      name: `Euclide`,
      dates: `vers -300`,
      role: `Mathématicien grec d'Alexandrie`,
      importance: `Dans les Éléments, il définit et classe les solides de l'espace, héritage encore présent dans le programme de 3e.`,
    },
  ],
  dates: [
    {
      date: `Volume pavé`,
      event: `L × l × h`,
      explanation: `Longueur × largeur × hauteur d'une boîte (parallélépipède rectangle).`,
    },
    {
      date: `Volume cylindre`,
      event: `π × r² × h`,
      explanation: `Aire du disque de base π×r² multipliée par la hauteur.`,
    },
    {
      date: `Volume prisme`,
      event: `aire de base × hauteur`,
      explanation: `Vrai pour tout prisme droit, quelle que soit la forme de la base.`,
    },
    {
      date: `Volume pyramide`,
      event: `(aire de base × h) / 3`,
      explanation: `Un tiers du prisme de même base et de même hauteur : ne pas oublier le /3.`,
    },
    {
      date: `Volume cône`,
      event: `(π × r² × h) / 3`,
      explanation: `Un tiers du cylindre de même base et de même hauteur.`,
    },
    {
      date: `Volume boule`,
      event: `(4 / 3) × π × r³`,
      explanation: `Attention au r au cube, c'est une longueur élevée à la puissance 3.`,
    },
    {
      date: `Aire disque`,
      event: `π × r²`,
      explanation: `Surface intérieure d'un cercle de rayon r.`,
    },
    {
      date: `Aire sphère`,
      event: `4 × π × r²`,
      explanation: `Surface (la « peau ») d'une boule de rayon r.`,
    },
    {
      date: `Périmètre cercle`,
      event: `2 × π × r`,
      explanation: `Longueur du tour d'un cercle ; vaut aussi π×d avec le diamètre d.`,
    },
    {
      date: `Capacité`,
      event: `1 L = 1 dm³`,
      explanation: `Et 1 mL = 1 cm³ ; donc 1 m³ = 1000 L.`,
    },
  ],
  flashcards: [
    {
      id: `mch14-f1`,
      question: `Quelle est la formule du volume d'un cylindre de rayon r et de hauteur h ?`,
      answer: `V = π × r² × h (l'aire du disque de base multipliée par la hauteur).`,
      category: `Volumes`,
    },
    {
      id: `mch14-f2`,
      question: `Quelle est la formule du volume d'une boule de rayon r ?`,
      answer: `V = (4 / 3) × π × r³.`,
      category: `Volumes`,
    },
    {
      id: `mch14-f3`,
      question: `Comment calcule-t-on le volume d'une pyramide ?`,
      answer: `V = (aire de la base × hauteur) / 3. On n'oublie jamais le /3.`,
      category: `Volumes`,
    },
    {
      id: `mch14-f4`,
      question: `Quel est le volume d'un cône de rayon r et de hauteur h ?`,
      answer: `V = (π × r² × h) / 3 : un tiers du cylindre correspondant.`,
      category: `Volumes`,
    },
    {
      id: `mch14-f5`,
      question: `Quelle est la différence entre une sphère et une boule ?`,
      answer: `La sphère est la surface (on calcule son aire 4×π×r²), la boule est le solide plein (on calcule son volume).`,
      category: `Solides`,
    },
    {
      id: `mch14-f6`,
      question: `Quelle est l'aire d'un disque de rayon r ?`,
      answer: `A = π × r².`,
      category: `Aires`,
    },
    {
      id: `mch14-f7`,
      question: `Quel est le facteur de conversion entre deux unités d'aire successives ? Et de volume ?`,
      answer: `100 pour les aires (ex : 1 m² = 100 dm²) et 1000 pour les volumes (ex : 1 m³ = 1000 dm³).`,
      category: `Conversions`,
    },
    {
      id: `mch14-f8`,
      question: `À quoi est égal 1 litre en unité de volume ?`,
      answer: `1 L = 1 dm³ (et 1 mL = 1 cm³).`,
      category: `Conversions`,
    },
    {
      id: `mch14-f9`,
      question: `Dans un agrandissement de rapport k, par combien sont multipliés les aires et les volumes ?`,
      answer: `Les aires par k² et les volumes par k³ (les longueurs par k).`,
      category: `Agrandissement`,
    },
    {
      id: `mch14-f10`,
      question: `Quelle est la formule du périmètre d'un cercle de rayon r ?`,
      answer: `P = 2 × π × r (ou π × d avec le diamètre d).`,
      category: `Aires`,
    },
    {
      id: `mch14-f11`,
      question: `Quelle figure obtient-on en coupant un cylindre par un plan parallèle à sa base ?`,
      answer: `Un disque de même rayon que la base.`,
      category: `Sections`,
    },
    {
      id: `mch14-f12`,
      question: `On double toutes les dimensions d'un solide (k = 2). Par combien est multiplié son volume ?`,
      answer: `Par 2³ = 8.`,
      category: `Agrandissement`,
    },
  ],
  questions: [
    {
      id: `mch14-q1`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Quelle est la formule du volume d'un pavé droit de longueur L, largeur l et hauteur h ?`,
      options: [`V = L × l × h`, `V = L + l + h`, `V = (L × l × h) / 3`, `V = 2 × (L + l + h)`],
      answer: `V = L × l × h`,
      explanation: `Le volume d'un pavé droit est le produit de ses trois dimensions.`,
    },
    {
      id: `mch14-q2`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Le volume d'une boule de rayon r est donné par la formule (4/3) × π × r³.`,
      answer: true,
      explanation: `C'est la formule exacte du volume d'une boule, avec le rayon élevé au cube.`,
      mnemonic: `« Quatre tiers de pi r trois » : le r est au cube car un volume mêle trois longueurs.`,
    },
    {
      id: `mch14-q3`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Combien vaut 1 litre en unité de volume ?`,
      options: [`1 dm³`, `1 cm³`, `1 m³`, `1 mm³`],
      answer: `1 dm³`,
      explanation: `Par définition, 1 L = 1 dm³ et 1 mL = 1 cm³.`,
    },
    {
      id: `mch14-q4`,
      type: `boolean`,
      difficulty: `easy`,
      question: `La sphère est une surface : on calcule son aire, pas son volume.`,
      answer: true,
      explanation: `La sphère est la « peau » (aire = 4×π×r²) ; c'est la boule, solide plein, qui a un volume.`,
      trap: `Ne confonds pas sphère (surface) et boule (solide).`,
    },
    {
      id: `mch14-q5`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Quelle est l'aire d'un disque de rayon r ?`,
      options: [`π × r²`, `2 × π × r`, `4 × π × r²`, `π × r³`],
      answer: `π × r²`,
      explanation: `L'aire du disque est π×r² ; 2×π×r est le périmètre du cercle.`,
      trap: `π×r² est une aire, 2×π×r est une longueur (le périmètre).`,
    },
    {
      id: `mch14-q6`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Un cylindre a un rayon de 5 cm et une hauteur de 4 cm. Quel est son volume exact ?`,
      options: [`100π cm³`, `20π cm³`, `40π cm³`, `200π cm³`],
      answer: `100π cm³`,
      explanation: `V = π × r² × h = π × 5² × 4 = π × 25 × 4 = 100π cm³ (≈ 314 cm³).`,
    },
    {
      id: `mch14-q7`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Une boule a un rayon de 3 cm. Quel est son volume exact ?`,
      options: [`36π cm³`, `12π cm³`, `9π cm³`, `27π cm³`],
      answer: `36π cm³`,
      explanation: `V = (4/3) × π × 3³ = (4/3) × π × 27 = 4 × 9 × π = 36π cm³ (≈ 113 cm³).`,
    },
    {
      id: `mch14-q8`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Combien font 3 m³ en litres ?`,
      options: [`3000 L`, `300 L`, `30 L`, `30 000 L`],
      answer: `3000 L`,
      explanation: `1 m³ = 1000 dm³ = 1000 L, donc 3 m³ = 3000 L.`,
      trap: `Le facteur entre m³ et dm³ est 1000, pas 100.`,
    },
    {
      id: `mch14-q9`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Pour convertir des cm² en dm², on divise par 100.`,
      answer: true,
      explanation: `Le facteur entre deux unités d'aire successives est 100 : 100 cm² = 1 dm².`,
    },
    {
      id: `mch14-q10`,
      type: `trous`,
      difficulty: `medium`,
      question: `Le volume d'une pyramide se calcule en multipliant l'[aire] de la base par la [hauteur], puis en divisant le résultat par [3].`,
      answer: [`aire`, `hauteur`, `3`],
      explanation: `V = (aire de base × hauteur) / 3. Le /3 distingue la pyramide du prisme.`,
    },
    {
      id: `mch14-q11`,
      type: `relier`,
      difficulty: `medium`,
      question: `Associe chaque solide à la formule de son volume.`,
      options: [`L × l × h`, `π × r² × h`, `(4/3) × π × r³`, `(π × r² × h) / 3`],
      answer: {
        'Pavé droit': `L × l × h`,
        'Cylindre': `π × r² × h`,
        'Boule': `(4/3) × π × r³`,
        'Cône': `(π × r² × h) / 3`,
      },
      explanation: `Le cône a une pointe : son volume est celui du cylindre divisé par 3.`,
    },
    {
      id: `mch14-q12`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Un cube a une arête de 2 cm. Quel est son volume ?`,
      options: [`8 cm³`, `6 cm³`, `4 cm³`, `12 cm³`],
      answer: `8 cm³`,
      explanation: `V = a³ = 2³ = 8 cm³.`,
    },
    {
      id: `mch14-q13`,
      type: `qcm`,
      difficulty: `hard`,
      question: `On agrandit un solide avec un rapport k = 3. Par combien est multiplié son volume ?`,
      options: [`27`, `3`, `9`, `6`],
      answer: `27`,
      explanation: `Les volumes sont multipliés par k³ = 3³ = 27.`,
      mnemonic: `Longueurs ×k, aires ×k², volumes ×k³.`,
    },
    {
      id: `mch14-q14`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Un cône a pour rayon 6 cm et pour hauteur 5 cm. Quel est son volume exact ?`,
      options: [`60π cm³`, `180π cm³`, `30π cm³`, `90π cm³`],
      answer: `60π cm³`,
      explanation: `V = (π × r² × h) / 3 = (π × 36 × 5) / 3 = (180π) / 3 = 60π cm³.`,
      trap: `On n'oublie pas de diviser par 3 pour le cône.`,
    },
    {
      id: `mch14-q15`,
      type: `trous`,
      difficulty: `hard`,
      question: `Le facteur de conversion entre deux unités successives vaut [10] pour les longueurs, [100] pour les aires et [1000] pour les volumes.`,
      answer: [`10`, `100`, `1000`],
      explanation: `Une aire mêle 2 longueurs (10²=100), un volume 3 longueurs (10³=1000).`,
    },
    {
      id: `mch14-q16`,
      type: `boolean`,
      difficulty: `hard`,
      question: `Un réservoir cubique de 50 cm d'arête contient 125 litres.`,
      answer: true,
      explanation: `V = 50³ = 125 000 cm³ = 125 000 / 1000 = 125 dm³ = 125 L.`,
    },
    {
      id: `mch14-q17`,
      type: `ordonner`,
      difficulty: `hard`,
      question: `Range ces volumes du plus petit au plus grand : 1 dm³, 1 cm³, 1 m³, 1 mm³.`,
      options: [`1 dm³`, `1 cm³`, `1 m³`, `1 mm³`],
      answer: [3, 1, 0, 2],
      explanation: `1 mm³ < 1 cm³ < 1 dm³ < 1 m³ (chaque fois ×1000).`,
    },
    {
      id: `mch14-q18`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Un récipient est formé d'un cylindre de rayon 5 cm et de hauteur 12 cm. On le remplit d'eau. Donne le volume d'eau exact (avec π) puis sa valeur approchée en litres (π ≈ 3,14).`,
      answer: `V = π × r² × h = π × 5² × 12 = π × 25 × 12 = 300π cm³. Valeur approchée : 300 × 3,14 = 942 cm³, soit environ 0,942 L.`,
      explanation: `On applique la formule du cylindre, on garde 300π exact, puis on convertit : 942 cm³ = 0,942 dm³ = 0,942 L.`,
    },
    {
      id: `mch14-q19`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Une boule de rayon 6 cm est placée dans un cylindre de même rayon et de hauteur 12 cm (le diamètre de la boule). Calcule les deux volumes exacts et vérifie qu'Archimède avait raison : la boule occupe les deux tiers du cylindre.`,
      answer: `Boule : V = (4/3) × π × 6³ = (4/3) × π × 216 = 288π cm³. Cylindre : V = π × 6² × 12 = π × 36 × 12 = 432π cm³. Rapport : 288π / 432π = 2/3. La boule occupe bien les deux tiers du cylindre.`,
      explanation: `C'est le célèbre résultat d'Archimède : le volume de la boule vaut 2/3 du cylindre circonscrit.`,
      mnemonic: `Boule = 2/3 du cylindre qui l'entoure (résultat gravé sur la tombe d'Archimède).`,
    },
    {
      id: `mch14-q20`,
      type: `qcm`,
      difficulty: `expert`,
      question: `On réduit une maquette avec un rapport k = 1/2. Son aire de surface est multipliée par :`,
      options: [`1/4`, `1/2`, `1/8`, `2`],
      answer: `1/4`,
      explanation: `Les aires sont multipliées par k² = (1/2)² = 1/4.`,
      trap: `Pour une réduction k < 1 : les aires diminuent (×k²), les volumes encore plus (×k³).`,
    },
  ],
  anecdotes: [
    `Archimède était si fier d'avoir trouvé que la boule occupe les deux tiers du cylindre qui l'entoure qu'il demanda que cette figure soit gravée sur sa tombe. Un siècle et demi plus tard, le Romain Cicéron retrouva la sépulture oubliée grâce à ce dessin.`,
    `Un litre, c'est exactement un décimètre cube : un petit cube de 10 cm de côté. C'est pourquoi une brique de lait d'un litre tient à peu près dans le creux des deux mains.`,
    `Si une pizza de 30 cm de diamètre coûte 10 euros, une pizza de 40 cm ne contient pas un tiers de plus mais presque deux fois plus de pâte : l'aire augmente comme le carré du rapport (k²), un piège classique pour le porte-monnaie.`,
  ],
  pitfalls: `N'oublie jamais le « / 3 » pour le volume d'une pyramide et d'un cône, et rappelle-toi que le facteur de conversion des volumes est 1000 (pas 100), avec 1 L = 1 dm³.`,
};
