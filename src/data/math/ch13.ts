import { Chapter } from '../../types';

export const mathCh13: Chapter = {
  id: `mch13`,
  slug: `transformations-geometriques`,
  number: 13,
  subject: `mathematiques`,
  title: `Transformations géométriques`,
  subtitle: `Reconnaître et construire l'image d'une figure par une symétrie axiale, une symétrie centrale, une translation, une rotation ou une homothétie, et connaître les grandeurs conservées par chacune.`,
  introduction: `Faire glisser une figure, la retourner comme dans un miroir, la faire tourner autour d'un point, l'agrandir ou la réduire : ce sont des transformations géométriques. Tu en croises partout, dans les frises, les pavages, les logos, les flocons de neige ou les motifs de carrelage. Au Brevet, on te demande de reconnaître la bonne transformation, de construire l'image d'une figure et surtout de savoir ce qui est conservé : les longueurs, les angles, les aires, le parallélisme et l'alignement. Dans ce chapitre tu vas (re)découvrir les quatre isométries (symétrie axiale, symétrie centrale, translation, rotation), qui conservent toutes les longueurs, puis l'homothétie, la transformation qui agrandit ou réduit : avec un rapport k, les longueurs sont multipliées par |k| et les aires par k<sup>2</sup>, et si k est négatif l'image est retournée par rapport au centre.`,
  courseContent: `
<h2>1. Symétrie axiale (réflexion)</h2>
<p>La <strong>symétrie axiale</strong> par rapport à une droite (d), appelée <strong>axe</strong>, transforme la figure comme le ferait un <strong>miroir</strong> posé sur (d). L'image d'un point M est le point M' tel que (d) soit la <strong>médiatrice</strong> du segment [MM'] : la droite (d) coupe [MM'] en son milieu et perpendiculairement.</p>
<p>Un point situé <em>sur</em> l'axe est sa propre image (il est invariant).</p>
<p><strong>Propriétés conservées :</strong> la symétrie axiale conserve les <strong>longueurs</strong>, les <strong>angles</strong>, les <strong>aires</strong>, le <strong>parallélisme</strong> et l'<strong>alignement</strong>. En revanche elle <strong>inverse le sens</strong> de la figure (la gauche devient la droite) : c'est une isométrie dite « indirecte ».</p>

<h2>2. Symétrie centrale (par rapport à un point)</h2>
<p>La <strong>symétrie centrale</strong> de <strong>centre</strong> O transforme un point M en M' tel que <strong>O soit le milieu</strong> du segment [MM']. C'est aussi le résultat d'un <strong>demi-tour</strong> (une rotation d'un angle de 180°) autour de O.</p>
<p>Le centre O est le seul point invariant.</p>
<p><strong>Propriétés conservées :</strong> longueurs, angles, aires, parallélisme et alignement. De plus, l'image d'une droite est une droite <strong>parallèle</strong> à la droite de départ. La figure conserve son sens (isométrie « directe »), mais elle est retournée à 180°.</p>

<h2>3. Translation</h2>
<p>La <strong>translation</strong> fait <strong>glisser</strong> toute la figure, sans la tourner ni la retourner. Elle est définie par une <strong>direction</strong>, un <strong>sens</strong> et une <strong>longueur</strong> (un glissement), ce qu'on résume par un <strong>vecteur</strong>.</p>
<p>Si la translation transforme A en A', alors elle transforme tout point M en M' tel que [MM'] et [AA'] aient la même direction, le même sens et la même longueur : autrement dit, MM'A'A (dans cet ordre) forme un <strong>parallélogramme</strong>.</p>
<p><strong>Propriétés conservées :</strong> longueurs, angles, aires, parallélisme et alignement. La translation conserve aussi le <strong>sens</strong> de la figure : aucun point n'est invariant (sauf si le glissement est nul).</p>

<h2>4. Rotation</h2>
<p>La <strong>rotation</strong> fait <strong>tourner</strong> la figure autour d'un point. Elle est définie par un <strong>centre</strong> O, un <strong>angle</strong> et un <strong>sens</strong> (horaire, comme les aiguilles d'une montre, ou anti-horaire, le sens direct).</p>
<p>L'image d'un point M est le point M' tel que <strong>OM' = OM</strong> (même distance au centre) et l'<strong>angle MOM' soit égal à l'angle de la rotation</strong>, dans le sens choisi.</p>
<p>Le centre O est le seul point invariant. Une rotation de 180° est exactement une symétrie centrale de centre O.</p>
<p><strong>Propriétés conservées :</strong> longueurs, angles, aires, parallélisme et alignement, ainsi que le sens de la figure.</p>

<h2>5. Bilan : les quatre isométries</h2>
<p>Symétrie axiale, symétrie centrale, translation et rotation sont des <strong>isométries</strong> : elles ne déforment pas la figure, l'image a exactement la <strong>même taille</strong> et la <strong>même forme</strong> que l'original. Elles conservent donc <strong>tout</strong> : longueurs, angles, aires, parallélisme et alignement.</p>
<table>
<thead>
<tr><th>Transformation</th><th>Élément caractéristique</th><th>Longueurs/aires</th><th>Sens de la figure</th></tr>
</thead>
<tbody>
<tr><td>Symétrie axiale</td><td>un axe (droite)</td><td>conservés</td><td>inversé (miroir)</td></tr>
<tr><td>Symétrie centrale</td><td>un centre (point)</td><td>conservés</td><td>conservé (demi-tour)</td></tr>
<tr><td>Translation</td><td>un vecteur (direction, sens, longueur)</td><td>conservés</td><td>conservé</td></tr>
<tr><td>Rotation</td><td>un centre, un angle, un sens</td><td>conservés</td><td>conservé</td></tr>
<tr><td>Homothétie</td><td>un centre O, un rapport k</td><td>longueurs ×|k|, aires ×k<sup>2</sup></td><td>conservé si k&gt;0, inversé si k&lt;0</td></tr>
</tbody>
</table>

<h2>6. L'homothétie</h2>
<p>L'<strong>homothétie</strong> de <strong>centre O</strong> et de <strong>rapport k</strong> (un nombre) <strong>agrandit</strong> ou <strong>réduit</strong> la figure depuis le point O. L'image d'un point M est le point M' aligné avec O et M tel que OM' = |k| × OM.</p>
<ul>
<li>Si <strong>k &gt; 1</strong> : agrandissement, M' est plus loin de O que M, du même côté.</li>
<li>Si <strong>0 &lt; k &lt; 1</strong> : réduction, M' est plus proche de O, du même côté.</li>
<li>Si <strong>k &lt; 0</strong> : la figure est <strong>retournée</strong> (image de l'autre côté de O), comme une symétrie centrale combinée à un agrandissement.</li>
</ul>
<p><strong>Effets d'une homothétie de rapport k :</strong></p>
<ul>
<li>les <strong>longueurs</strong> sont multipliées par <strong>|k|</strong> (la valeur absolue, car une longueur est toujours positive) ;</li>
<li>les <strong>aires</strong> sont multipliées par <strong>k<sup>2</sup></strong> ;</li>
<li>les <strong>angles</strong> sont conservés, ainsi que le <strong>parallélisme</strong> et l'<strong>alignement</strong> : la forme reste la même, seule la taille change.</li>
</ul>
<p>Le centre O est le seul point invariant. Pour k = 1, l'homothétie ne change rien ; pour k = -1, c'est exactement la symétrie centrale de centre O.</p>

<h3>Exemple résolu 1 — Homothétie et aire</h3>
<p>Un triangle a une aire de 5 cm<sup>2</sup>. On lui applique une homothétie de centre O et de rapport k = 3. Quelles sont les nouvelles longueurs des côtés et la nouvelle aire ?</p>
<p>Les longueurs sont multipliées par |k| = 3 : chaque côté devient 3 fois plus long.</p>
<p>L'aire est multipliée par k<sup>2</sup> = 3<sup>2</sup> = 9 : la nouvelle aire vaut 5 × 9 = <strong>45 cm<sup>2</sup></strong>.</p>

<h3>Exemple résolu 2 — Homothétie de rapport négatif</h3>
<p>On applique une homothétie de centre O et de rapport k = -2 à un segment de longueur 4 cm. Que devient sa longueur et de quel côté se trouve l'image ?</p>
<p>La longueur est multipliée par |k| = |-2| = 2 : le segment image mesure 4 × 2 = <strong>8 cm</strong>.</p>
<p>Comme k est <strong>négatif</strong>, l'image se trouve de l'<strong>autre côté du centre O</strong> : la figure est retournée par rapport à O, comme avec une symétrie centrale.</p>

<h3>Exemple résolu 3 — Reconnaître la transformation</h3>
<p>Une figure et son image ont la même taille, mais l'image est « à l'envers » comme dans un miroir, et il existe une droite telle que chaque point et son image sont symétriques par rapport à elle. De quelle transformation s'agit-il ?</p>
<p>La taille est conservée (isométrie) et le sens est inversé : c'est une <strong>symétrie axiale</strong>, d'axe la droite décrite.</p>
`,
  summary: `*Les quatre isométries.* La *symétrie axiale* (par rapport à une droite, l'axe) agit comme un miroir : l'axe est la médiatrice de [MM']. La *symétrie centrale* (par rapport à un point O) fait un demi-tour : O est le milieu de [MM']. La *translation* fait glisser la figure selon un *vecteur* (direction, sens, longueur). La *rotation* fait tourner la figure autour d'un *centre* O, selon un *angle* et un *sens*.

*Ce qui est conservé.* Les quatre isométries conservent *tout* : les *longueurs*, les *angles*, les *aires*, le *parallélisme* et l'*alignement*. L'image a la même taille et la même forme que l'original. Seule la symétrie axiale *inverse le sens* (effet miroir) ; les trois autres conservent le sens.

*L'homothétie.* De centre O et de rapport k, elle *agrandit* (k > 1) ou *réduit* (0 < k < 1) la figure. Les *longueurs sont multipliées par |k|* et les *aires par k²*. Les angles, le parallélisme et l'alignement sont conservés (même forme).

*Le rapport négatif.* Si *k < 0*, la figure est *retournée* par rapport au centre O (image de l'autre côté), comme une symétrie centrale. Cas particuliers : k = 1 ne change rien, k = -1 est la symétrie centrale de centre O.

*Le bon réflexe au Brevet.* On repère l'élément caractéristique (axe, centre, vecteur, angle, rapport) pour identifier la transformation, puis on utilise les grandeurs conservées pour justifier longueurs et angles.`,
  timeline: [
    {
      id: `mch13-t1`,
      date: `vers -300`,
      title: `Les Éléments d'Euclide`,
      description: `Euclide fonde la géométrie sur la notion de figures « superposables » : deux figures sont égales si on peut amener l'une sur l'autre par déplacement, l'idée première des isométries.`,
    },
    {
      id: `mch13-t2`,
      date: `1637`,
      title: `La géométrie analytique`,
      description: `René Descartes introduit les coordonnées, qui permettront de décrire translations, symétries et rotations par des calculs sur les nombres.`,
    },
    {
      id: `mch13-t3`,
      date: `vers 1830`,
      title: `Le concept de groupe`,
      description: `Les travaux de mathématiciens comme Évariste Galois préparent l'idée que les transformations se composent et forment des structures, les groupes.`,
    },
    {
      id: `mch13-t4`,
      date: `1872`,
      title: `Le programme d'Erlangen`,
      description: `Felix Klein propose de définir chaque géométrie par son groupe de transformations : la géométrie devient l'étude de ce qui reste invariant.`,
    },
    {
      id: `mch13-t5`,
      date: `XXe siècle`,
      title: `Frises, pavages et symétries`,
      description: `La classification des frises et des pavages du plan par leurs symétries trouve des applications en cristallographie, en art (Escher) et en architecture.`,
    },
  ],
  mindMap: [
    {
      id: `mch13-m0`,
      label: `Transformations géométriques`,
    },
    {
      id: `mch13-m1`,
      label: `Symétrie axiale`,
      description: `Miroir par rapport à un axe (droite) ; l'axe est la médiatrice de [MM']. Inverse le sens.`,
      parentId: `mch13-m0`,
    },
    {
      id: `mch13-m2`,
      label: `Symétrie centrale`,
      description: `Demi-tour autour d'un centre O ; O est le milieu de [MM']. Conserve le sens.`,
      parentId: `mch13-m0`,
    },
    {
      id: `mch13-m3`,
      label: `Translation`,
      description: `Glissement selon un vecteur : direction, sens, longueur. Conserve le sens.`,
      parentId: `mch13-m0`,
    },
    {
      id: `mch13-m4`,
      label: `Rotation`,
      description: `Tour autour d'un centre O, d'un angle donné, dans un sens donné.`,
      parentId: `mch13-m0`,
    },
    {
      id: `mch13-m5`,
      label: `Grandeurs conservées`,
      description: `Les isométries conservent longueurs, angles, aires, parallélisme et alignement.`,
      parentId: `mch13-m0`,
    },
    {
      id: `mch13-m6`,
      label: `Homothétie`,
      description: `Centre O, rapport k : longueurs ×|k|, aires ×k². Image inversée si k<0.`,
      parentId: `mch13-m0`,
    },
  ],
  characters: [
    {
      id: `mch13-c1`,
      name: `Euclide`,
      dates: `vers -300`,
      role: `Mathématicien grec d'Alexandrie`,
      importance: `Dans les Éléments, il définit l'égalité de figures par superposition (déplacement), idée qui fonde la notion moderne d'isométrie et de transformation.`,
    },
    {
      id: `mch13-c2`,
      name: `Felix Klein`,
      dates: `1849 - 1925`,
      role: `Mathématicien allemand`,
      importance: `Avec son programme d'Erlangen (1872), il définit une géométrie par son groupe de transformations et par ce qu'elles laissent invariant : c'est le point de vue qui organise ce chapitre.`,
    },
    {
      id: `mch13-c3`,
      name: `René Descartes`,
      dates: `1596 - 1650`,
      role: `Philosophe et mathématicien français`,
      importance: `Sa géométrie analytique (coordonnées) permet de traduire translations, symétries et rotations par des calculs, reliant figures et nombres.`,
    },
  ],
  dates: [
    {
      date: `Symétrie axiale`,
      event: `axe = médiatrice de [MM']`,
      explanation: `Effet miroir : l'axe coupe [MM'] en son milieu et à angle droit ; le sens est inversé.`,
    },
    {
      date: `Symétrie centrale`,
      event: `O = milieu de [MM']`,
      explanation: `Demi-tour autour de O ; l'image d'une droite lui est parallèle.`,
    },
    {
      date: `Translation`,
      event: `glissement = vecteur`,
      explanation: `Définie par une direction, un sens et une longueur ; conserve le sens de la figure.`,
    },
    {
      date: `Rotation`,
      event: `centre + angle + sens`,
      explanation: `OM' = OM et angle MOM' = angle de la rotation. À 180°, c'est la symétrie centrale.`,
    },
    {
      date: `Isométries`,
      event: `tout est conservé`,
      explanation: `Longueurs, angles, aires, parallélisme et alignement : l'image a la même taille.`,
    },
    {
      date: `Homothétie (longueurs)`,
      event: `longueurs ×|k|`,
      explanation: `Une longueur est multipliée par la valeur absolue du rapport k.`,
    },
    {
      date: `Homothétie (aires)`,
      event: `aires ×k²`,
      explanation: `Une aire mêle deux longueurs : elle est multipliée par k au carré.`,
    },
    {
      date: `Rapport k négatif`,
      event: `image retournée`,
      explanation: `Si k < 0, l'image est de l'autre côté du centre O (figure retournée).`,
    },
    {
      date: `Cas k = -1`,
      event: `symétrie centrale`,
      explanation: `L'homothétie de centre O et de rapport -1 est exactement la symétrie de centre O.`,
    },
  ],
  flashcards: [
    {
      id: `mch13-f1`,
      question: `Comment construit-on l'image d'un point M par la symétrie axiale d'axe (d) ?`,
      answer: `On place M' tel que (d) soit la médiatrice de [MM'] : (d) coupe [MM'] en son milieu et perpendiculairement.`,
      category: `Symétrie axiale`,
    },
    {
      id: `mch13-f2`,
      question: `Comment construit-on l'image d'un point M par la symétrie centrale de centre O ?`,
      answer: `On place M' tel que O soit le milieu de [MM'] : c'est un demi-tour autour de O.`,
      category: `Symétrie centrale`,
    },
    {
      id: `mch13-f3`,
      question: `Par quoi est définie une translation ?`,
      answer: `Par un vecteur, c'est-à-dire une direction, un sens et une longueur (un glissement).`,
      category: `Translation`,
    },
    {
      id: `mch13-f4`,
      question: `Quels éléments définissent une rotation ?`,
      answer: `Un centre O, un angle et un sens (horaire ou anti-horaire).`,
      category: `Rotation`,
    },
    {
      id: `mch13-f5`,
      question: `Que conservent toutes les isométries (symétries, translation, rotation) ?`,
      answer: `Les longueurs, les angles, les aires, le parallélisme et l'alignement : l'image a la même taille et la même forme.`,
      category: `Propriétés`,
    },
    {
      id: `mch13-f6`,
      question: `Quelle transformation inverse le sens de la figure (effet miroir) ?`,
      answer: `La symétrie axiale. La symétrie centrale, la translation et la rotation conservent le sens.`,
      category: `Propriétés`,
    },
    {
      id: `mch13-f7`,
      question: `Dans une homothétie de rapport k, par combien sont multipliées les longueurs ?`,
      answer: `Par |k| (la valeur absolue de k), car une longueur est toujours positive.`,
      category: `Homothétie`,
    },
    {
      id: `mch13-f8`,
      question: `Dans une homothétie de rapport k, par combien est multipliée une aire ?`,
      answer: `Par k² (k au carré).`,
      category: `Homothétie`,
    },
    {
      id: `mch13-f9`,
      question: `Que se passe-t-il pour une homothétie de rapport k négatif ?`,
      answer: `L'image est retournée : elle se trouve de l'autre côté du centre O. Les longueurs sont quand même multipliées par |k|.`,
      category: `Homothétie`,
    },
    {
      id: `mch13-f10`,
      question: `À quelle transformation correspond une rotation de 180° autour de O ?`,
      answer: `À la symétrie centrale de centre O (un demi-tour).`,
      category: `Rotation`,
    },
    {
      id: `mch13-f11`,
      question: `Une homothétie conserve-t-elle les angles ?`,
      answer: `Oui : elle conserve les angles, le parallélisme et l'alignement. Seules les longueurs (×|k|) et les aires (×k²) changent.`,
      category: `Homothétie`,
    },
    {
      id: `mch13-f12`,
      question: `Quel point reste invariant lors d'une symétrie centrale, d'une rotation ou d'une homothétie ?`,
      answer: `Le centre O lui-même est son propre image.`,
      category: `Propriétés`,
    },
  ],
  questions: [
    {
      id: `mch13-q1`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Quelle transformation agit comme un miroir et inverse le sens de la figure ?`,
      options: [`La symétrie axiale`, `La translation`, `La rotation`, `La symétrie centrale`],
      answer: `La symétrie axiale`,
      explanation: `La symétrie axiale est une réflexion par rapport à une droite ; elle inverse le sens (effet miroir).`,
    },
    {
      id: `mch13-q2`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Une translation conserve les longueurs et les angles de la figure.`,
      answer: true,
      explanation: `La translation est une isométrie : elle conserve longueurs, angles, aires, parallélisme et alignement.`,
    },
    {
      id: `mch13-q3`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Quel élément définit une translation ?`,
      options: [`Un vecteur (direction, sens, longueur)`, `Un centre et un angle`, `Une droite`, `Un rapport k`],
      answer: `Un vecteur (direction, sens, longueur)`,
      explanation: `Une translation est un glissement défini par un vecteur : une direction, un sens et une longueur.`,
    },
    {
      id: `mch13-q4`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Dans une symétrie centrale de centre O, le point O est le milieu du segment [MM'].`,
      answer: true,
      explanation: `C'est la définition de la symétrie centrale : O est le milieu de [MM'] (un demi-tour autour de O).`,
    },
    {
      id: `mch13-q5`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Quels éléments faut-il pour définir une rotation ?`,
      options: [`Un centre, un angle et un sens`, `Une droite seulement`, `Un vecteur`, `Un rapport k`],
      answer: `Un centre, un angle et un sens`,
      explanation: `Une rotation est définie par son centre, son angle et son sens (horaire ou anti-horaire).`,
    },
    {
      id: `mch13-q6`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Un triangle a une aire de 6 cm². On lui applique une homothétie de rapport k = 2. Quelle est l'aire de l'image ?`,
      options: [`24 cm²`, `12 cm²`, `6 cm²`, `36 cm²`],
      answer: `24 cm²`,
      explanation: `L'aire est multipliée par k² = 2² = 4, donc 6 × 4 = 24 cm².`,
      trap: `On multiplie l'aire par k², pas par k.`,
    },
    {
      id: `mch13-q7`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Un segment mesure 5 cm. Quelle est la longueur de son image par une homothétie de rapport k = 3 ?`,
      options: [`15 cm`, `8 cm`, `45 cm`, `5 cm`],
      answer: `15 cm`,
      explanation: `Les longueurs sont multipliées par |k| = 3, donc 5 × 3 = 15 cm.`,
    },
    {
      id: `mch13-q8`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Dans une symétrie axiale, un point situé sur l'axe est sa propre image.`,
      answer: true,
      explanation: `Un point de l'axe est invariant : sa distance à l'axe est nulle, son image est lui-même.`,
    },
    {
      id: `mch13-q9`,
      type: `trous`,
      difficulty: `medium`,
      question: `Dans une homothétie de rapport k, les longueurs sont multipliées par [|k|] et les aires sont multipliées par [k²].`,
      answer: [`|k|`, `k²`],
      explanation: `Longueurs ×|k| (valeur absolue) et aires ×k². Les angles, eux, sont conservés.`,
    },
    {
      id: `mch13-q10`,
      type: `relier`,
      difficulty: `medium`,
      question: `Associe chaque transformation à son élément caractéristique.`,
      options: [`un axe (droite)`, `un centre et un angle`, `un vecteur`, `un centre et un rapport k`],
      answer: {
        'Symétrie axiale': `un axe (droite)`,
        'Rotation': `un centre et un angle`,
        'Translation': `un vecteur`,
        'Homothétie': `un centre et un rapport k`,
      },
      explanation: `Chaque transformation a son élément propre : axe, centre+angle, vecteur, centre+rapport.`,
    },
    {
      id: `mch13-q11`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Une rotation de 180° autour d'un point O est la même chose qu'une symétrie centrale de centre O.`,
      answer: true,
      explanation: `Un demi-tour (180°) autour de O coïncide exactement avec la symétrie centrale de centre O.`,
    },
    {
      id: `mch13-q12`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Quelle transformation conserve le sens de la figure mais NE conserve PAS forcément les longueurs ?`,
      options: [`L'homothétie de rapport k ≠ 1`, `La translation`, `La rotation`, `La symétrie centrale`],
      answer: `L'homothétie de rapport k ≠ 1`,
      explanation: `L'homothétie change les longueurs (×|k|) ; les trois autres sont des isométries qui conservent les longueurs.`,
    },
    {
      id: `mch13-q13`,
      type: `qcm`,
      difficulty: `hard`,
      question: `On applique une homothétie de centre O et de rapport k = -2 à une figure. Que se passe-t-il ?`,
      options: [
        `Les longueurs sont ×2 et la figure est retournée par rapport à O`,
        `Les longueurs sont ×(-2)`,
        `Les longueurs sont ×4 et la figure garde son orientation`,
        `Rien ne change car k est négatif`,
      ],
      answer: `Les longueurs sont ×2 et la figure est retournée par rapport à O`,
      explanation: `Les longueurs sont multipliées par |k| = 2 ; comme k < 0, l'image se trouve de l'autre côté de O (figure retournée).`,
      trap: `Une longueur ne peut pas être négative : on prend toujours |k|.`,
    },
    {
      id: `mch13-q14`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Un carré a une aire de 10 cm². On lui applique une homothétie de rapport k = 0,5. Quelle est l'aire de l'image ?`,
      options: [`2,5 cm²`, `5 cm²`, `20 cm²`, `40 cm²`],
      answer: `2,5 cm²`,
      explanation: `L'aire est multipliée par k² = 0,5² = 0,25, donc 10 × 0,25 = 2,5 cm².`,
      trap: `0,5² vaut 0,25, et non 0,5 : l'aire diminue beaucoup plus que les longueurs.`,
    },
    {
      id: `mch13-q15`,
      type: `trous`,
      difficulty: `hard`,
      question: `Dans une symétrie axiale, l'axe est la [médiatrice] du segment MM' : il passe par son [milieu] et lui est [perpendiculaire].`,
      answer: [`médiatrice`, `milieu`, `perpendiculaire`],
      explanation: `La médiatrice de [MM'] passe par le milieu de [MM'] et lui est perpendiculaire : c'est l'axe de symétrie.`,
    },
    {
      id: `mch13-q16`,
      type: `boolean`,
      difficulty: `hard`,
      question: `Une homothétie de rapport k = 1,5 multiplie les aires par 2,25.`,
      answer: true,
      explanation: `Les aires sont multipliées par k² = 1,5² = 2,25.`,
    },
    {
      id: `mch13-q17`,
      type: `ordonner`,
      difficulty: `hard`,
      question: `Range ces rapports d'homothétie selon l'aire de l'image, de la plus petite à la plus grande (figure de départ identique) : k = 1, k = 0,5, k = 3, k = 2.`,
      options: [`k = 1`, `k = 0,5`, `k = 3`, `k = 2`],
      answer: [1, 0, 3, 2],
      explanation: `L'aire est ×k² : 0,5²=0,25 ; 1²=1 ; 2²=4 ; 3²=9. Donc k=0,5 < k=1 < k=2 < k=3.`,
    },
    {
      id: `mch13-q18`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Un triangle ABC a un côté AB = 4 cm et une aire de 7 cm². On lui applique une homothétie de centre O et de rapport k = 3. Donne la longueur de l'image de [AB] et l'aire du triangle image, en justifiant.`,
      answer: `Les longueurs sont multipliées par |k| = 3, donc l'image de [AB] mesure 4 × 3 = 12 cm. Les aires sont multipliées par k² = 3² = 9, donc l'aire du triangle image vaut 7 × 9 = 63 cm².`,
      explanation: `On distingue bien les deux effets : longueurs ×|k| et aires ×k². L'homothétie conserve les angles, c'est donc un triangle de même forme.`,
      mnemonic: `Longueurs ×|k|, aires ×k² : l'aire grandit beaucoup plus vite que les côtés.`,
    },
    {
      id: `mch13-q19`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Une figure et son image ont exactement la même taille et la même forme, et il existe un point O tel que O soit le milieu de chaque segment reliant un point à son image. De quelle transformation s'agit-il ? Cite deux grandeurs qu'elle conserve.`,
      answer: `Il s'agit d'une symétrie centrale de centre O (un demi-tour autour de O). Elle conserve par exemple les longueurs et les angles (ainsi que les aires, le parallélisme et l'alignement).`,
      explanation: `Le critère « O milieu de [MM'] » caractérise la symétrie centrale ; c'est une isométrie, donc elle conserve toutes les grandeurs.`,
    },
    {
      id: `mch13-q20`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Une homothétie de centre O et de rapport k = -1 est identique à quelle autre transformation ?`,
      options: [
        `La symétrie centrale de centre O`,
        `La translation de vecteur nul`,
        `Une symétrie axiale`,
        `Une rotation de 90° autour de O`,
      ],
      answer: `La symétrie centrale de centre O`,
      explanation: `Avec k = -1, les longueurs sont ×|-1| = 1 (inchangées) et l'image est retournée par rapport à O : c'est exactement la symétrie centrale de centre O.`,
      trap: `k = -1 conserve les longueurs (|k| = 1) : ce n'est pas un agrandissement, mais un demi-tour.`,
    },
  ],
  anecdotes: [
    `En 1872, à seulement 23 ans, Felix Klein bouleverse la géométrie avec son « programme d'Erlangen » : il propose de définir chaque géométrie non par ses figures, mais par le groupe de transformations qui la laissent invariante. C'est ce point de vue qui permet de réunir symétries, translations et rotations dans une même grande famille.`,
    `Les flocons de neige possèdent presque toujours une symétrie d'ordre 6 (six branches identiques par rotation de 60°). Cette régularité vient de la façon dont les molécules d'eau s'assemblent en gelant, et fascine les scientifiques depuis que Kepler la décrivit en 1611.`,
    `L'artiste néerlandais M. C. Escher a construit toute son œuvre sur les transformations : ses pavages de lézards, d'oiseaux ou de poissons s'emboîtent grâce à des translations, des rotations et des symétries, transformant les mathématiques des pavages en véritables tableaux.`,
  ],
  pitfalls: `Dans une homothétie de rapport k, les longueurs sont multipliées par |k| mais les aires par k² (pas par k), et si k est négatif l'image est retournée par rapport au centre O.`,
};
