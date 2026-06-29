import { Chapter } from '../../types';

export const mathCh6: Chapter = {
  id: `mch6`,
  slug: `proportionnalite-pourcentages`,
  number: 6,
  subject: `mathematiques`,
  title: `Proportionnalité, pourcentages et vitesse`,
  subtitle: `Reconnaître la proportionnalité, calculer une quatrième proportionnelle, appliquer des pourcentages et maîtriser la vitesse moyenne`,
  introduction: `La proportionnalité est sans doute l'outil mathématique le plus utile de la vie quotidienne : elle se cache derrière les recettes de cuisine, les prix au kilo, les échelles de carte, les soldes en magasin et la vitesse d'une voiture. Deux grandeurs sont proportionnelles quand on passe de l'une à l'autre en multipliant toujours par le même nombre, appelé coefficient de proportionnalité. Dans ce chapitre, tu vas apprendre à reconnaître une situation de proportionnalité, à calculer une quatrième proportionnelle avec le produit en croix, à manipuler les pourcentages (appliquer, augmenter, diminuer) à l'aide du coefficient multiplicateur, à utiliser les échelles, et enfin à calculer une vitesse moyenne avec la formule v = d/t, sans jamais te tromper dans les conversions d'unités.`,
  courseContent: `
<h2>1. Reconnaître la proportionnalité</h2>
<p>Deux grandeurs sont <strong>proportionnelles</strong> lorsqu'on obtient les valeurs de l'une en multipliant les valeurs de l'autre par <strong>un même nombre</strong>, appelé <strong>coefficient de proportionnalité</strong>.</p>
<p>Exemple : 1 kg de pommes coûte 3 €. Le prix est proportionnel à la masse, avec un coefficient de 3 (€ par kg).</p>
<table>
<tr><th>Masse (kg)</th><td>1</td><td>2</td><td>3</td><td>5</td></tr>
<tr><th>Prix (€)</th><td>3</td><td>6</td><td>9</td><td>15</td></tr>
</table>
<p>On vérifie qu'un tableau est de proportionnalité en calculant chaque quotient <em>(2e ligne) ÷ (1re ligne)</em> : 3÷1 = 3, 6÷2 = 3, 9÷3 = 3, 15÷5 = 3. <strong>Tous les quotients sont égaux à 3</strong> : c'est bien proportionnel.</p>
<p class="attention">Attention : si un seul quotient diffère, le tableau n'est PAS proportionnel. Graphiquement, une situation de proportionnalité est représentée par des points <strong>alignés avec l'origine (0 ; 0)</strong>.</p>

<h2>2. La quatrième proportionnelle (produit en croix)</h2>
<p>Quand il manque une valeur dans un tableau de proportionnalité, on la calcule par le <strong>produit en croix</strong>. Dans un tableau :</p>
<table>
<tr><th>a</th><th>b</th></tr>
<tr><td>c</td><td>x</td></tr>
</table>
<p>la proportionnalité donne <strong>a × x = b × c</strong>, donc <strong>x = (b × c) / a</strong>.</p>
<p><strong>Exemple résolu :</strong> 4 stylos identiques coûtent 6 €. Combien coûtent 10 stylos ?</p>
<table>
<tr><th>Nombre de stylos</th><td>4</td><td>10</td></tr>
<tr><th>Prix (€)</th><td>6</td><td>x</td></tr>
</table>
<ol>
<li>Produit en croix : 4 × x = 10 × 6.</li>
<li>Donc x = (10 × 6) / 4 = 60 / 4 = 15.</li>
<li>10 stylos coûtent <strong>15 €</strong>.</li>
</ol>
<p>On pouvait aussi passer par le coefficient : 6 ÷ 4 = 1,5 € par stylo, puis 10 × 1,5 = 15 €.</p>

<h2>3. Les pourcentages</h2>
<p>Un pourcentage t% signifie « t pour 100 », c'est-à-dire la fraction t/100.</p>
<ul>
<li><strong>Appliquer t% d'une quantité</strong> : on multiplie par t/100. Prendre t% de N, c'est calculer N × t/100.</li>
<li>Exemple : 30 % de 80 = 80 × 30/100 = 80 × 0,3 = <strong>24</strong>.</li>
</ul>
<p><strong>Augmentations et diminutions — le coefficient multiplicateur</strong></p>
<ul>
<li><strong>Augmenter de t%</strong> : on multiplie par <strong>(1 + t/100)</strong>. Une hausse de 20 % correspond à ×1,20.</li>
<li><strong>Diminuer de t%</strong> : on multiplie par <strong>(1 − t/100)</strong>. Une baisse de 25 % correspond à ×0,75.</li>
</ul>
<p>Ce nombre par lequel on multiplie s'appelle le <strong>coefficient multiplicateur (CM)</strong>. Il évite de calculer la hausse puis de l'ajouter : tout se fait en une seule multiplication.</p>
<p><strong>Exemple résolu (augmentation) :</strong> un article coûte 80 €, son prix augmente de 15 %. Quel est le nouveau prix ?</p>
<ol>
<li>Coefficient multiplicateur : 1 + 15/100 = 1 + 0,15 = 1,15.</li>
<li>Nouveau prix : 80 × 1,15 = <strong>92 €</strong>.</li>
</ol>
<p><strong>Pourcentages successifs :</strong> on <strong>multiplie</strong> les coefficients (on ne les additionne pas !). Une hausse de 10 % suivie d'une hausse de 10 % donne ×1,10 × 1,10 = ×1,21, soit une hausse globale de <strong>21 %</strong> (et non 20 %).</p>

<h2>4. Les échelles</h2>
<p>Sur une carte ou un plan, l'<strong>échelle</strong> est le coefficient de proportionnalité entre les <strong>distances sur le plan</strong> et les <strong>distances réelles</strong> (exprimées dans la même unité).</p>
<p style="text-align:center"><strong>Échelle = distance sur le plan / distance réelle</strong></p>
<p>Une échelle de 1/25 000 signifie que 1 cm sur la carte représente 25 000 cm = 250 m dans la réalité.</p>
<p><strong>Exemple :</strong> sur une carte au 1/25 000, deux villages sont distants de 8 cm. Distance réelle = 8 × 25 000 = 200 000 cm = 2 000 m = <strong>2 km</strong>.</p>

<h2>5. La vitesse moyenne</h2>
<p>La <strong>vitesse moyenne</strong> est le quotient de la distance parcourue par la durée du trajet :</p>
<p style="text-align:center"><strong>v = d / t</strong></p>
<p>On en déduit les deux autres formules : <strong>d = v × t</strong> et <strong>t = d / v</strong>.</p>
<p>La vitesse est proportionnelle à la distance (pour une durée fixée) : c'est une situation de proportionnalité.</p>
<p><strong>Exemple résolu :</strong> une voiture parcourt 150 km en 2 heures. Quelle est sa vitesse moyenne ?</p>
<ol>
<li>v = d / t = 150 / 2 = <strong>75 km/h</strong>.</li>
<li>Vérification : en 2 h à 75 km/h, d = v × t = 75 × 2 = 150 km. ✓</li>
</ol>
<p class="attention">Attention aux unités : pour obtenir des km/h, il faut une distance en km et une durée en <strong>heures</strong>. Si la durée est donnée en minutes, on convertit : 30 min = 0,5 h, 45 min = 0,75 h, 1 h 15 min = 1,25 h.</p>

<h2>6. Convertir les unités de vitesse (km/h ⇄ m/s)</h2>
<p>Une vitesse en <strong>km/h</strong> peut se convertir en <strong>m/s</strong> (mètres par seconde). Comme 1 km = 1 000 m et 1 h = 3 600 s :</p>
<ul>
<li><strong>de km/h vers m/s : on divise par 3,6</strong></li>
<li><strong>de m/s vers km/h : on multiplie par 3,6</strong></li>
</ul>
<p>Exemples : 72 km/h = 72 / 3,6 = <strong>20 m/s</strong> ; 10 m/s = 10 × 3,6 = <strong>36 km/h</strong>.</p>
<p>Le nombre 3,6 vient de 3 600 s ÷ 1 000 m = 3,6 : c'est le repère à retenir absolument.</p>
`,
  summary: `Deux grandeurs sont **proportionnelles** quand on passe de l'une à l'autre en multipliant toujours par le même nombre, le **coefficient de proportionnalité**. On le vérifie en calculant les quotients d'un tableau : ils doivent tous être égaux. Graphiquement, les points sont *alignés avec l'origine*.

La **quatrième proportionnelle** se calcule par le **produit en croix** : dans un tableau, a × x = b × c, donc **x = (b × c) / a**. Exemple : 4 stylos coûtent 6 €, donc 10 stylos coûtent (10 × 6)/4 = 15 €.

Un **pourcentage** t% vaut t/100. *Appliquer* t% : ×t/100. *Augmenter* de t% : ×(1 + t/100). *Diminuer* de t% : ×(1 − t/100). Ce facteur est le **coefficient multiplicateur**. Pour des pourcentages **successifs**, on **multiplie** les coefficients (jamais on ne les additionne).

Une **échelle** = distance sur le plan / distance réelle (même unité). Au 1/25 000, 1 cm représente 250 m.

La **vitesse moyenne** : **v = d/t**, d'où **d = v×t** et **t = d/v**. *Unités cohérentes* : km et heures pour des km/h. Conversion : **km/h → m/s : ÷3,6** ; **m/s → km/h : ×3,6**. Ainsi 72 km/h = 20 m/s.`,
  timeline: [
    {
      id: `t1`,
      date: `~600 av. J.-C.`,
      title: `Thalès et les proportions`,
      description: `Le savant grec Thalès de Milet utilise la proportionnalité des longueurs pour mesurer la hauteur de la pyramide de Khéops à partir de son ombre, en comparant avec l'ombre d'un bâton.`,
    },
    {
      id: `t2`,
      date: `~300 av. J.-C.`,
      title: `Euclide formalise les rapports`,
      description: `Dans les Éléments, Euclide consacre tout un livre à la théorie des proportions, posant les bases rigoureuses du raisonnement « a est à b ce que c est à d ».`,
    },
    {
      id: `t3`,
      date: `1494`,
      title: `Le produit en croix se diffuse`,
      description: `Le moine italien Luca Pacioli popularise dans son traité de comptabilité la « règle de trois », méthode commerciale pour trouver une quatrième proportionnelle.`,
    },
    {
      id: `t4`,
      date: `1585`,
      title: `Stevin et les décimaux`,
      description: `Simon Stevin publie La Disme, qui généralise l'écriture décimale et facilite énormément les calculs de pourcentages et de proportions dans le commerce.`,
    },
    {
      id: `t5`,
      date: `1795`,
      title: `Le système métrique`,
      description: `La Révolution française instaure le mètre et le système décimal, rendant universelles les conversions d'unités (distances, vitesses) fondées sur la proportionnalité.`,
    },
  ],
  mindMap: [
    {
      id: `root`,
      label: `Proportionnalité`,
      description: `Multiplier par un même nombre : le coefficient`,
    },
    {
      id: `reconnaitre`,
      label: `Reconnaître`,
      description: `Quotients tous égaux ; points alignés avec l'origine`,
      parentId: `root`,
    },
    {
      id: `croix`,
      label: `Produit en croix`,
      description: `a × x = b × c, donc x = (b × c) / a`,
      parentId: `root`,
    },
    {
      id: `pourcent`,
      label: `Pourcentages`,
      description: `t% = ×t/100 ; CM = coefficient multiplicateur`,
      parentId: `root`,
    },
    {
      id: `variations`,
      label: `Hausses / baisses`,
      description: `Augmenter ×(1+t/100), diminuer ×(1−t/100)`,
      parentId: `pourcent`,
    },
    {
      id: `echelle`,
      label: `Échelles`,
      description: `Échelle = plan / réel (même unité)`,
      parentId: `root`,
    },
    {
      id: `vitesse`,
      label: `Vitesse moyenne`,
      description: `v = d/t ; d = v×t ; t = d/v`,
      parentId: `root`,
    },
    {
      id: `conversion`,
      label: `km/h ⇄ m/s`,
      description: `÷3,6 vers m/s ; ×3,6 vers km/h`,
      parentId: `vitesse`,
    },
  ],
  characters: [
    {
      id: `c1`,
      name: `Thalès de Milet`,
      dates: `~625 – ~547 av. J.-C.`,
      role: `Mathématicien, astronome et philosophe grec, l'un des « sept sages ».`,
      importance: `Il a utilisé la proportionnalité des longueurs (et des ombres) pour mesurer des hauteurs inaccessibles, comme la grande pyramide. Son théorème sur les triangles repose entièrement sur des rapports proportionnels.`,
    },
    {
      id: `c2`,
      name: `Simon Stevin`,
      dates: `1548 – 1620`,
      role: `Mathématicien et ingénieur flamand.`,
      importance: `Avec son ouvrage La Disme (1585), il généralise les nombres décimaux, ce qui simplifie radicalement les calculs de pourcentages, de taux et de proportions utilisés dans le commerce et la finance.`,
    },
    {
      id: `c3`,
      name: `Luca Pacioli`,
      dates: `1447 – 1517`,
      role: `Moine et mathématicien italien, « père de la comptabilité ».`,
      importance: `Il a diffusé la « règle de trois » (le produit en croix) auprès des marchands, faisant de la proportionnalité un outil incontournable du calcul commercial.`,
    },
  ],
  dates: [
    {
      date: `Coefficient de proportionnalité`,
      event: `valeur arrivée ÷ valeur départ (constant)`,
      explanation: `Sert à vérifier une proportionnalité et à compléter un tableau : tous les quotients doivent être égaux.`,
    },
    {
      date: `Produit en croix`,
      event: `x = (b × c) / a`,
      explanation: `Calcule la quatrième proportionnelle quand il manque une valeur dans un tableau de proportionnalité.`,
    },
    {
      date: `Appliquer t%`,
      event: `× t/100`,
      explanation: `Prendre t% d'une quantité : ex 30 % de 80 = 80 × 0,30 = 24.`,
    },
    {
      date: `Augmentation de t%`,
      event: `× (1 + t/100)`,
      explanation: `Coefficient multiplicateur d'une hausse : +15 % donne ×1,15.`,
    },
    {
      date: `Diminution de t%`,
      event: `× (1 − t/100)`,
      explanation: `Coefficient multiplicateur d'une baisse : −25 % donne ×0,75 (soldes, remises).`,
    },
    {
      date: `Pourcentages successifs`,
      event: `× CM₁ × CM₂`,
      explanation: `On multiplie les coefficients : +10 % puis +10 % donne ×1,21, soit +21 %.`,
    },
    {
      date: `Échelle`,
      event: `distance plan / distance réelle`,
      explanation: `Coefficient entre carte et réalité, dans la même unité ; 1/25 000 : 1 cm = 250 m.`,
    },
    {
      date: `Vitesse moyenne`,
      event: `v = d / t (et d = v×t, t = d/v)`,
      explanation: `Relie distance, durée et vitesse ; unités cohérentes (km et heures pour des km/h).`,
    },
    {
      date: `Conversion de vitesse`,
      event: `km/h → m/s : ÷ 3,6`,
      explanation: `Et m/s → km/h : ×3,6. Ex : 72 km/h = 20 m/s ; 10 m/s = 36 km/h.`,
    },
  ],
  flashcards: [
    {
      id: `f1`,
      question: `Comment vérifie-t-on qu'un tableau est de proportionnalité ?`,
      answer: `On calcule les quotients (2e ligne ÷ 1re ligne) : ils doivent tous être égaux au coefficient de proportionnalité.`,
      category: `Reconnaître`,
    },
    {
      id: `f2`,
      question: `Quelle est la formule du produit en croix ?`,
      answer: `Si a × x = b × c, alors x = (b × c) / a.`,
      category: `Produit en croix`,
    },
    {
      id: `f3`,
      question: `Comment applique-t-on t% d'une quantité ?`,
      answer: `On multiplie par t/100. Ex : 30 % de 80 = 80 × 0,30 = 24.`,
      category: `Pourcentages`,
    },
    {
      id: `f4`,
      question: `Par quoi multiplie-t-on pour augmenter de 20 % ?`,
      answer: `Par le coefficient multiplicateur 1 + 20/100 = 1,20.`,
      category: `Pourcentages`,
    },
    {
      id: `f5`,
      question: `Par quoi multiplie-t-on pour diminuer de 25 % ?`,
      answer: `Par 1 − 25/100 = 0,75.`,
      category: `Pourcentages`,
    },
    {
      id: `f6`,
      question: `Une hausse de 10 % suivie d'une hausse de 10 %, ça fait +20 % ?`,
      answer: `Non ! On multiplie les coefficients : 1,10 × 1,10 = 1,21, soit +21 %.`,
      category: `Pièges`,
    },
    {
      id: `f7`,
      question: `Que signifie une échelle de 1/25 000 ?`,
      answer: `1 cm sur la carte représente 25 000 cm = 250 m dans la réalité.`,
      category: `Échelles`,
    },
    {
      id: `f8`,
      question: `Quelle est la formule de la vitesse moyenne ?`,
      answer: `v = d / t. On en déduit d = v × t et t = d / v.`,
      category: `Vitesse`,
    },
    {
      id: `f9`,
      question: `Une voiture fait 150 km en 2 h : quelle vitesse moyenne ?`,
      answer: `v = 150 / 2 = 75 km/h.`,
      category: `Vitesse`,
    },
    {
      id: `f10`,
      question: `Comment convertir des km/h en m/s ?`,
      answer: `On divise par 3,6. Ex : 72 km/h = 72 / 3,6 = 20 m/s.`,
      category: `Conversions`,
    },
    {
      id: `f11`,
      question: `Comment convertir des m/s en km/h ?`,
      answer: `On multiplie par 3,6. Ex : 10 m/s = 10 × 3,6 = 36 km/h.`,
      category: `Conversions`,
    },
    {
      id: `f12`,
      question: `Combien font 1 h 15 min en heures ?`,
      answer: `1,25 h (car 15 min = 15/60 = 0,25 h).`,
      category: `Vitesse`,
    },
  ],
  questions: [
    {
      id: `q1`,
      type: `qcm`,
      difficulty: `easy`,
      question: `1 kg de pommes coûte 3 €. Combien coûtent 4 kg ?`,
      options: [`7 €`, `12 €`, `9 €`, `34 €`],
      answer: `12 €`,
      explanation: `Le prix est proportionnel à la masse, coefficient 3 €/kg. Donc 4 × 3 = 12 €.`,
      mnemonic: `Coefficient de proportionnalité × quantité = prix.`,
    },
    {
      id: `q2`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Vrai ou faux : dans un tableau de proportionnalité, tous les quotients (2e ligne ÷ 1re ligne) sont égaux.`,
      answer: true,
      explanation: `C'est la définition : le quotient constant est justement le coefficient de proportionnalité.`,
    },
    {
      id: `q3`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Combien vaut 30 % de 80 ?`,
      options: [`2,4`, `24`, `240`, `110`],
      answer: `24`,
      explanation: `30 % de 80 = 80 × 30/100 = 80 × 0,30 = 24.`,
      mnemonic: `Prendre t% : on multiplie par t/100.`,
    },
    {
      id: `q4`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Vrai ou faux : augmenter un prix de 10 % revient à le multiplier par 1,10.`,
      answer: true,
      explanation: `Augmenter de t% = ×(1 + t/100). Ici 1 + 10/100 = 1,10.`,
    },
    {
      id: `q5`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Quel est le coefficient multiplicateur d'une diminution de 25 % ?`,
      options: [`1,25`, `0,25`, `0,75`, `0,025`],
      answer: `0,75`,
      explanation: `Diminuer de t% = ×(1 − t/100) = 1 − 0,25 = 0,75.`,
    },
    {
      id: `q6`,
      type: `qcm`,
      difficulty: `medium`,
      question: `4 stylos coûtent 6 €. Combien coûtent 10 stylos ?`,
      options: [`12 €`, `15 €`, `24 €`, `9 €`],
      answer: `15 €`,
      explanation: `Produit en croix : x = (10 × 6) / 4 = 60 / 4 = 15 €. (Ou prix unitaire 1,5 € × 10.)`,
      mnemonic: `x = (b × c) / a.`,
    },
    {
      id: `q7`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Un article de 80 € augmente de 15 %. Quel est son nouveau prix ?`,
      options: [`95 €`, `92 €`, `12 €`, `68 €`],
      answer: `92 €`,
      explanation: `Coefficient multiplicateur 1,15 : 80 × 1,15 = 92 €.`,
    },
    {
      id: `q8`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Une voiture parcourt 180 km en 3 h. Quelle est sa vitesse moyenne ?`,
      options: [`60 km/h`, `540 km/h`, `90 km/h`, `54 km/h`],
      answer: `60 km/h`,
      explanation: `v = d / t = 180 / 3 = 60 km/h.`,
      mnemonic: `v = d/t.`,
    },
    {
      id: `q9`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Vrai ou faux : sur un graphique, une situation de proportionnalité donne des points alignés passant par l'origine (0 ; 0).`,
      answer: true,
      explanation: `La représentation graphique d'une proportionnalité est une droite passant par l'origine.`,
    },
    {
      id: `q10`,
      type: `relier`,
      difficulty: `medium`,
      question: `Relie chaque situation à son coefficient multiplicateur.`,
      options: [`1,30`, `0,70`, `0,90`],
      answer: { 'Augmentation de 30 %': `1,30`, 'Diminution de 30 %': `0,70`, 'Diminution de 10 %': `0,90` },
      explanation: `+30 % → ×(1+0,30) = 1,30 ; −30 % → ×(1−0,30) = 0,70 ; −10 % → ×(1−0,10) = 0,90.`,
    },
    {
      id: `q11`,
      type: `trous`,
      difficulty: `medium`,
      question: `Pour convertir une vitesse de km/h en m/s, on [operation] par 3,6 ; pour passer de m/s à km/h, on [operation2] par 3,6.`,
      answer: [`divise`, `multiplie`],
      explanation: `km/h → m/s : ÷3,6 ; m/s → km/h : ×3,6. Ex : 72 km/h = 20 m/s ; 10 m/s = 36 km/h.`,
    },
    {
      id: `q12`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Sur une carte au 1/25 000, deux points sont distants de 4 cm. Quelle est la distance réelle ?`,
      options: [`1 km`, `100 m`, `1 000 km`, `25 km`],
      answer: `1 km`,
      explanation: `4 × 25 000 = 100 000 cm = 1 000 m = 1 km.`,
    },
    {
      id: `q13`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Combien font 90 km/h en m/s ?`,
      options: [`25 m/s`, `324 m/s`, `15 m/s`, `2,5 m/s`],
      answer: `25 m/s`,
      explanation: `90 / 3,6 = 25 m/s.`,
      mnemonic: `Vers m/s : on divise par 3,6.`,
    },
    {
      id: `q14`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Un prix subit une hausse de 20 % puis une baisse de 20 %. Le coefficient multiplicateur global est :`,
      options: [`1 (inchangé)`, `0,96`, `1,04`, `0,40`],
      answer: `0,96`,
      explanation: `On multiplie les coefficients : 1,20 × 0,80 = 0,96. Le prix final vaut 96 % du prix initial, soit une baisse de 4 %.`,
      trap: `Une hausse de 20 % puis une baisse de 20 % ne ramènent PAS au prix de départ : les pourcentages successifs se multiplient.`,
    },
    {
      id: `q15`,
      type: `trous`,
      difficulty: `hard`,
      question: `Un cycliste roule à 30 km/h pendant 1 h 30. Il parcourt d = v × t = 30 × [duree] = [distance] km.`,
      answer: [`1,5`, `45`],
      explanation: `1 h 30 = 1,5 h. d = v × t = 30 × 1,5 = 45 km.`,
      trap: `1 h 30 ne s'écrit pas 1,30 h mais 1,5 h (30 min = 0,5 h).`,
    },
    {
      id: `q16`,
      type: `ordonner`,
      difficulty: `hard`,
      question: `Range ces vitesses de la plus lente à la plus rapide : 36 km/h, 5 m/s, 72 km/h, 15 m/s.`,
      options: [`36 km/h`, `5 m/s`, `72 km/h`, `15 m/s`],
      answer: [1, 0, 3, 2],
      explanation: `On convertit tout en m/s : 36 km/h = 10 m/s (indice 0) ; 5 m/s (indice 1) ; 72 km/h = 20 m/s (indice 2) ; 15 m/s (indice 3). Ordre croissant : 5 < 10 < 15 < 20, soit les indices 1, 0, 3, 2.`,
    },
    {
      id: `q17`,
      type: `boolean`,
      difficulty: `hard`,
      question: `Vrai ou faux : appliquer deux réductions successives de 50 % revient à une réduction totale de 100 % (gratuit).`,
      answer: false,
      explanation: `On multiplie : 0,50 × 0,50 = 0,25. Le prix final vaut 25 % du prix initial, soit une réduction de 75 %, pas 100 %.`,
      trap: `Les pourcentages successifs se multiplient, ils ne s'additionnent jamais.`,
    },
    {
      id: `q18`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Un train parcourt 240 km en 1 h 36 min. Calcule sa vitesse moyenne en km/h, puis convertis-la en m/s.`,
      answer: `1 h 36 min = 1 + 36/60 = 1,6 h. Vitesse moyenne : v = d / t = 240 / 1,6 = 150 km/h. Conversion : 150 / 3,6 ≈ 41,7 m/s.`,
      explanation: `On convertit d'abord la durée en heures : 36 min = 0,6 h, donc 1,6 h. v = 240 / 1,6 = 150 km/h. Puis km/h → m/s : ÷3,6, soit 150/3,6 ≈ 41,7 m/s.`,
      mnemonic: `Toujours convertir les minutes en heures (÷60) avant d'appliquer v = d/t.`,
      trap: `1 h 36 min n'est pas 1,36 h mais 1,6 h.`,
    },
    {
      id: `q19`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Un manteau coûtait 120 €. Il est soldé à −30 %, puis le magasin retire encore 10 % en caisse. Quel est le prix final ?`,
      answer: `Premier coefficient : −30 % → ×0,70. Deuxième : −10 % → ×0,90. Prix final = 120 × 0,70 × 0,90 = 120 × 0,63 = 75,60 €.`,
      explanation: `On multiplie les coefficients multiplicateurs : 0,70 × 0,90 = 0,63. Donc 120 × 0,63 = 75,60 €. (Cela correspond à une baisse globale de 37 %, et non de 40 %.)`,
      trap: `Une baisse de 30 % puis 10 % n'est PAS une baisse de 40 % : 0,70 × 0,90 = 0,63, soit −37 %.`,
    },
    {
      id: `q20`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Un objet passe de 50 € à 65 €. Quel est le pourcentage d'augmentation ?`,
      options: [`15 %`, `30 %`, `13 %`, `23 %`],
      answer: `30 %`,
      explanation: `Coefficient multiplicateur = 65 / 50 = 1,30. Or 1,30 = 1 + 0,30, donc une hausse de 30 %.`,
      mnemonic: `Taux d'évolution = (valeur arrivée / valeur départ) − 1, exprimé en %.`,
    },
  ],
  anecdotes: [
    `On raconte que Thalès, en visite en Égypte vers 600 av. J.-C., aurait calculé la hauteur de la grande pyramide de Khéops sans la grimper : il a planté un bâton et comparé son ombre à celle de la pyramide. Comme les longueurs sont proportionnelles, un simple produit en croix lui a donné la hauteur du monument !`,
    `Le mot « pour cent » vient de l'italien commercial de la Renaissance : « per cento ». Les marchands de Venise et de Florence calculaient leurs intérêts « par centaine de pièces ». Le symbole % serait une déformation de l'écriture abrégée « 0/0 » de cento.`,
    `Sur les compteurs de voiture, l'aiguille indique des km/h, mais la physique préfère les m/s. Le nombre magique pour passer de l'un à l'autre est 3,6 : il vient du fait qu'une heure contient 3 600 secondes et un kilomètre 1 000 mètres (3 600 ÷ 1 000 = 3,6).`,
  ],
  pitfalls: `Le piège n°1 : les pourcentages successifs se MULTIPLIENT, ils ne s'additionnent pas. Une hausse de 20 % puis une baisse de 20 % donne ×1,20 × 0,80 = 0,96, soit une baisse de 4 % : on ne revient PAS au prix initial.`,
};
