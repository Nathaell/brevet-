import { Chapter } from '../../types';

export const mathCh7: Chapter = {
  id: `mch7`,
  slug: `fonctions-lineaires-affines`,
  number: 7,
  subject: `mathematiques`,
  title: `Fonctions linéaires et affines`,
  subtitle: `Comprendre f(x), image et antécédent, et reconnaître les droites des fonctions linéaires et affines`,
  introduction: `Une fonction est une machine à transformer les nombres : on entre un nombre x, et elle ressort un seul résultat noté f(x). Cette idée, née de la recherche des trajectoires et des proportions, a permis de modéliser une foule de situations concrètes : le prix payé selon la quantité achetée, une distance selon le temps, une facture avec un abonnement fixe… Dans ce chapitre tu vas apprendre le vocabulaire (image, antécédent), lire et construire un tableau de valeurs, puis maîtriser les deux fonctions reines du Brevet : la fonction linéaire f(x) = ax (la proportionnalité, représentée par une droite passant par l'origine) et la fonction affine f(x) = ax + b (représentée par une droite, avec a le coefficient directeur et b l'ordonnée à l'origine). Tu sauras enfin déterminer une fonction affine à partir de deux points.`,
  courseContent: `
<h2>1. Qu'est-ce qu'une fonction ?</h2>
<p>Une <strong>fonction</strong> f est un procédé qui, à un nombre <em>x</em>, associe <strong>un seul</strong> nombre appelé son <strong>image</strong>, noté <strong>f(x)</strong> (on lit « f de x »).</p>
<p>On note souvent : f : x ⟼ f(x). Par exemple, pour la fonction f : x ⟼ 3x + 1, on a f(2) = 3 × 2 + 1 = 7.</p>
<ul>
<li><strong>Calculer une image</strong> : on connaît x, on remplace et on calcule f(x). Ex : l'image de 2 par f est 7.</li>
<li><strong>Chercher un antécédent</strong> : on connaît f(x), on cherche le(s) x. On résout l'équation f(x) = nombre.</li>
</ul>
<p class="attention">Attention à ne pas confondre : l'<strong>image</strong> est ce qui sort (le résultat f(x)) ; l'<strong>antécédent</strong> est ce qui entre (la valeur de x). « Image de 2 » et « antécédent de 2 » ne désignent pas la même chose !</p>

<h2>2. Tableau de valeurs</h2>
<p>Un <strong>tableau de valeurs</strong> range des valeurs de x et leurs images f(x). Il sert à tracer la courbe et à lire rapidement des images ou des antécédents.</p>
<p>Exemple pour f(x) = 2x + 1 :</p>
<table>
<tr><th>x</th><td>−2</td><td>−1</td><td>0</td><td>1</td><td>2</td><td>3</td></tr>
<tr><th>f(x)</th><td>−3</td><td>−1</td><td>1</td><td>3</td><td>5</td><td>7</td></tr>
</table>
<p>On lit dans ce tableau : l'image de 2 est 5 (colonne x = 2). Et l'antécédent de 7 est 3 (on cherche la colonne où f(x) = 7).</p>

<h2>3. La fonction linéaire f(x) = ax</h2>
<p>Une <strong>fonction linéaire</strong> est une fonction de la forme <strong>f(x) = ax</strong>, où <em>a</em> est un nombre fixe appelé le <strong>coefficient</strong>.</p>
<p>C'est le modèle mathématique de la <strong>proportionnalité</strong> : f(x) est proportionnel à x, et <em>a</em> est le coefficient de proportionnalité.</p>
<ul>
<li>Sa <strong>représentation graphique</strong> est une <strong>droite passant par l'origine</strong> O(0 ; 0), car f(0) = a × 0 = 0.</li>
<li>Le coefficient se calcule par <strong>a = f(x) / x</strong> (pour x ≠ 0). Ex : si f(4) = 12, alors a = 12 / 4 = 3, donc f(x) = 3x.</li>
</ul>
<p><strong>Exemple concret :</strong> 1 kg de pommes coûte 3 €. Le prix de x kg est f(x) = 3x. L'image de 5 est f(5) = 15 € ; l'antécédent de 24 € est x = 24/3 = 8 kg.</p>

<h2>4. La fonction affine f(x) = ax + b</h2>
<p>Une <strong>fonction affine</strong> est une fonction de la forme <strong>f(x) = ax + b</strong>, où <em>a</em> et <em>b</em> sont deux nombres fixes.</p>
<ul>
<li><em>a</em> est le <strong>coefficient directeur</strong> : il indique la « pente » de la droite (de combien monte ou descend f quand x augmente de 1).</li>
<li><em>b</em> est l'<strong>ordonnée à l'origine</strong> : c'est la valeur f(0), là où la droite coupe l'axe des ordonnées.</li>
<li>Sa <strong>représentation graphique</strong> est une <strong>droite</strong> (qui ne passe par l'origine que si b = 0).</li>
</ul>
<p class="attention">La fonction linéaire est un cas particulier de la fonction affine : c'est une fonction affine avec b = 0. Linéaire = passe par l'origine ; affine (avec b ≠ 0) = ne passe PAS par l'origine.</p>
<p><strong>Exemple concret :</strong> un abonnement de salle de sport coûte 20 € d'inscription (fixe) plus 5 € par séance. Le prix de x séances est f(x) = 5x + 20. Ici a = 5 (prix par séance) et b = 20 (la part fixe, prix pour 0 séance).</p>

<h2>5. Exemple résolu : calculer une image et un antécédent</h2>
<p><strong>Énoncé :</strong> soit f(x) = 4x − 5. Calculer l'image de 3, puis l'antécédent de 7.</p>
<p><strong>Image de 3</strong> (on remplace x par 3) :</p>
<ol>
<li>f(3) = 4 × 3 − 5</li>
<li>f(3) = 12 − 5 = <strong>7</strong></li>
</ol>
<p>L'image de 3 est 7.</p>
<p><strong>Antécédent de 7</strong> (on résout f(x) = 7) :</p>
<ol>
<li>4x − 5 = 7</li>
<li>4x = 7 + 5 = 12</li>
<li>x = 12 / 4 = <strong>3</strong></li>
</ol>
<p>L'antécédent de 7 est 3. (On retrouve bien le résultat précédent : c'est cohérent.)</p>

<h2>6. Exemple résolu : déterminer une fonction affine à partir de deux points</h2>
<p><strong>Énoncé :</strong> une fonction affine f vérifie f(1) = 5 et f(3) = 11. Déterminer f(x).</p>
<p>On cherche f(x) = ax + b. On utilise les deux points A(1 ; 5) et B(3 ; 11).</p>
<p><strong>Étape 1 — le coefficient directeur</strong> avec la formule a = (y<sub>2</sub> − y<sub>1</sub>) / (x<sub>2</sub> − x<sub>1</sub>) :</p>
<p style="text-align:center">a = (11 − 5) / (3 − 1) = 6 / 2 = <strong>3</strong></p>
<p><strong>Étape 2 — l'ordonnée à l'origine b.</strong> On remplace dans f(x) = 3x + b avec un point connu, par exemple f(1) = 5 :</p>
<ol>
<li>3 × 1 + b = 5</li>
<li>3 + b = 5</li>
<li>b = 5 − 3 = <strong>2</strong></li>
</ol>
<p><strong>Conclusion :</strong> f(x) = <strong>3x + 2</strong>. Vérification avec l'autre point : f(3) = 3 × 3 + 2 = 11 ✓.</p>

<h2>7. Lecture graphique</h2>
<p>Sur un graphique :</p>
<ul>
<li><strong>Lire une image de x</strong> : on part de x sur l'axe horizontal, on monte jusqu'à la droite, puis on lit f(x) sur l'axe vertical.</li>
<li><strong>Lire un antécédent</strong> : on part de la valeur sur l'axe vertical, on rejoint la droite, puis on lit x sur l'axe horizontal.</li>
<li><strong>Lire b</strong> : c'est l'ordonnée du point où la droite coupe l'axe vertical.</li>
<li><strong>Lire a</strong> : on avance de 1 vers la droite (Δx = 1) et on regarde de combien la droite monte (a) ou descend (a négatif).</li>
</ul>
<p>Si a &gt; 0, la fonction est <strong>croissante</strong> (la droite monte) ; si a &lt; 0, elle est <strong>décroissante</strong> (la droite descend) ; si a = 0, la droite est horizontale (fonction constante).</p>
`,
  summary: `Une **fonction** f associe à un nombre x un **seul** nombre f(x), appelé son **image**. Inversement, un **antécédent** de y est un nombre x tel que f(x) = y : on le trouve en résolvant une équation. *Ne pas confondre image (ce qui sort) et antécédent (ce qui entre).*

Un **tableau de valeurs** range des x et leurs images f(x) ; il sert à tracer la courbe et à lire images et antécédents.

La **fonction linéaire** s'écrit **f(x) = ax**. C'est le modèle de la **proportionnalité**, a étant le coefficient. Sa représentation est une **droite passant par l'origine**. On calcule a = f(x)/x.

La **fonction affine** s'écrit **f(x) = ax + b**. *a* est le **coefficient directeur** (la pente) et *b* l'**ordonnée à l'origine** (la valeur f(0)). Sa représentation est une **droite**. La fonction linéaire est le cas particulier b = 0.

Pour **déterminer une fonction affine à partir de deux points** A(x₁ ; y₁) et B(x₂ ; y₂) : on calcule d'abord **a = (y₂ − y₁) / (x₂ − x₁)**, puis on trouve **b** en remplaçant les coordonnées d'un point dans f(x) = ax + b.

Sur un graphique : *b* est l'ordonnée du point où la droite coupe l'axe vertical. Si **a > 0** la fonction est croissante, si **a < 0** elle est décroissante.`,
  timeline: [
    {
      id: `t1`,
      date: `~1350`,
      title: `Nicole Oresme et les graphiques`,
      description: `Le savant français Nicole Oresme représente des grandeurs variables par des « latitudes » et « longitudes », une des premières idées de représentation graphique d'une relation entre deux quantités.`,
    },
    {
      id: `t2`,
      date: `1637`,
      title: `Descartes et le repère`,
      description: `Dans « La Géométrie », René Descartes relie l'algèbre et la géométrie : un point devient un couple de coordonnées (x ; y). C'est la naissance du repère qui permet de tracer les fonctions.`,
    },
    {
      id: `t3`,
      date: `1692`,
      title: `Le mot « fonction »`,
      description: `Leibniz introduit le terme de « fonction » pour décrire une quantité qui dépend d'une autre, posant le vocabulaire encore utilisé aujourd'hui.`,
    },
    {
      id: `t4`,
      date: `1734`,
      title: `La notation f(x)`,
      description: `Le mathématicien suisse Leonhard Euler popularise l'écriture f(x), devenue universelle pour désigner l'image d'un nombre par une fonction.`,
    },
    {
      id: `t5`,
      date: `Aujourd'hui`,
      title: `Modéliser le réel`,
      description: `Fonctions linéaires et affines servent partout : tarifs, vitesses, conversions d'unités, abonnements… Elles sont la base de la modélisation au collège et au lycée.`,
    },
  ],
  mindMap: [
    {
      id: `root`,
      label: `Fonctions linéaires et affines`,
      description: `Une fonction associe à x une seule image f(x)`,
    },
    {
      id: `vocab`,
      label: `Vocabulaire`,
      description: `Image = f(x) (ce qui sort) ; antécédent = x (ce qui entre)`,
      parentId: `root`,
    },
    {
      id: `tableau`,
      label: `Tableau de valeurs`,
      description: `Range les x et leurs images f(x)`,
      parentId: `root`,
    },
    {
      id: `lineaire`,
      label: `Fonction linéaire`,
      description: `f(x) = ax ; proportionnalité ; droite par l'origine`,
      parentId: `root`,
    },
    {
      id: `affine`,
      label: `Fonction affine`,
      description: `f(x) = ax + b ; droite ; a pente, b ordonnée à l'origine`,
      parentId: `root`,
    },
    {
      id: `coeff`,
      label: `Coefficient directeur`,
      description: `a = (y₂ − y₁) / (x₂ − x₁)`,
      parentId: `affine`,
    },
    {
      id: `graphique`,
      label: `Lecture graphique`,
      description: `b = coupe l'axe vertical ; a > 0 croissante, a < 0 décroissante`,
      parentId: `affine`,
    },
  ],
  characters: [
    {
      id: `c1`,
      name: `René Descartes`,
      dates: `1596 – 1650`,
      role: `Philosophe et mathématicien français.`,
      importance: `Avec sa « géométrie analytique », il invente le repère : chaque point a des coordonnées (x ; y). C'est ce qui permet de tracer une droite et donc de représenter une fonction affine. On parle de repère « cartésien » en son honneur.`,
    },
    {
      id: `c2`,
      name: `Nicole Oresme`,
      dates: `~1320 – 1382`,
      role: `Évêque, philosophe et mathématicien français.`,
      importance: `Bien avant Descartes, il imagine de représenter graphiquement une grandeur qui varie en fonction d'une autre, préfigurant l'idée de courbe et de fonction.`,
    },
    {
      id: `c3`,
      name: `Leonhard Euler`,
      dates: `1707 – 1783`,
      role: `Mathématicien suisse, l'un des plus prolifiques de l'histoire.`,
      importance: `Il a popularisé la notation f(x), que tu utilises dans tout ce chapitre pour désigner l'image d'un nombre par une fonction.`,
    },
  ],
  dates: [
    {
      date: `Image`,
      event: `image de x = f(x)`,
      explanation: `On remplace x par sa valeur dans la formule pour calculer le résultat. Ex : f(x) = 2x+1, image de 3 = 7.`,
    },
    {
      date: `Antécédent`,
      event: `résoudre f(x) = y`,
      explanation: `On connaît l'image y et on cherche x : on résout une équation. Ex : 2x+1 = 7 donne x = 3.`,
    },
    {
      date: `Fonction linéaire`,
      event: `f(x) = ax`,
      explanation: `Modèle de la proportionnalité ; a est le coefficient. Sa droite passe par l'origine.`,
    },
    {
      date: `Coefficient (linéaire)`,
      event: `a = f(x) / x`,
      explanation: `Pour x ≠ 0, permet de retrouver a connaissant une image. Ex : f(4)=12 donne a = 3.`,
    },
    {
      date: `Fonction affine`,
      event: `f(x) = ax + b`,
      explanation: `a = coefficient directeur (pente), b = ordonnée à l'origine = f(0). Sa représentation est une droite.`,
    },
    {
      date: `Coefficient directeur`,
      event: `a = (y₂ − y₁) / (x₂ − x₁)`,
      explanation: `Permet de calculer la pente d'une droite à partir de deux points A(x₁ ; y₁) et B(x₂ ; y₂).`,
    },
    {
      date: `Ordonnée à l'origine`,
      event: `b = f(0)`,
      explanation: `Valeur de f quand x = 0 ; point où la droite coupe l'axe vertical.`,
    },
    {
      date: `Sens de variation`,
      event: `a > 0 ⟹ croissante ; a < 0 ⟹ décroissante`,
      explanation: `Le signe du coefficient directeur indique si la droite monte ou descend.`,
    },
  ],
  flashcards: [
    {
      id: `f1`,
      question: `Qu'est-ce que l'image d'un nombre x par une fonction f ?`,
      answer: `C'est le nombre f(x) obtenu en remplaçant x dans la formule. C'est « ce qui sort » de la fonction.`,
      category: `Vocabulaire`,
    },
    {
      id: `f2`,
      question: `Qu'est-ce qu'un antécédent du nombre y ?`,
      answer: `C'est un nombre x tel que f(x) = y. On le trouve en résolvant l'équation f(x) = y. C'est « ce qui entre ».`,
      category: `Vocabulaire`,
    },
    {
      id: `f3`,
      question: `Quelle est la forme d'une fonction linéaire ?`,
      answer: `f(x) = ax, où a est le coefficient. C'est le modèle de la proportionnalité.`,
      category: `Linéaire`,
    },
    {
      id: `f4`,
      question: `Quelle est la représentation graphique d'une fonction linéaire ?`,
      answer: `Une droite passant par l'origine O(0 ; 0), car f(0) = 0.`,
      category: `Linéaire`,
    },
    {
      id: `f5`,
      question: `Quelle est la forme d'une fonction affine ?`,
      answer: `f(x) = ax + b, avec a le coefficient directeur et b l'ordonnée à l'origine.`,
      category: `Affine`,
    },
    {
      id: `f6`,
      question: `Que représentent a et b dans f(x) = ax + b ?`,
      answer: `a = coefficient directeur (la pente) ; b = ordonnée à l'origine = f(0), où la droite coupe l'axe vertical.`,
      category: `Affine`,
    },
    {
      id: `f7`,
      question: `Comment calculer le coefficient directeur a à partir de deux points ?`,
      answer: `a = (y₂ − y₁) / (x₂ − x₁), avec A(x₁ ; y₁) et B(x₂ ; y₂).`,
      category: `Affine`,
    },
    {
      id: `f8`,
      question: `Quelle différence entre fonction linéaire et fonction affine ?`,
      answer: `La linéaire f(x) = ax passe par l'origine (b = 0). L'affine f(x) = ax + b ne passe par l'origine que si b = 0.`,
      category: `Comparaison`,
    },
    {
      id: `f9`,
      question: `Pour f(x) = 4x − 5, quelle est l'image de 3 ?`,
      answer: `f(3) = 4 × 3 − 5 = 12 − 5 = 7.`,
      category: `Calcul`,
    },
    {
      id: `f10`,
      question: `Pour f(x) = 2x + 1, quel est l'antécédent de 7 ?`,
      answer: `On résout 2x + 1 = 7, soit 2x = 6, donc x = 3.`,
      category: `Calcul`,
    },
    {
      id: `f11`,
      question: `Comment savoir si une fonction affine est croissante ou décroissante ?`,
      answer: `Si a > 0 elle est croissante (la droite monte) ; si a < 0 elle est décroissante (la droite descend).`,
      category: `Variation`,
    },
    {
      id: `f12`,
      question: `Pour une fonction linéaire, comment retrouver a si on connaît f(4) = 12 ?`,
      answer: `a = f(x) / x = 12 / 4 = 3, donc f(x) = 3x.`,
      category: `Linéaire`,
    },
  ],
  questions: [
    {
      id: `q1`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Soit f(x) = 2x + 3. Quelle est l'image de 4 ?`,
      options: [`8`, `11`, `7`, `14`],
      answer: `11`,
      explanation: `f(4) = 2 × 4 + 3 = 8 + 3 = 11. On remplace x par 4 dans la formule.`,
      mnemonic: `Image : on remplace x et on calcule.`,
    },
    {
      id: `q2`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Vrai ou faux : la représentation graphique d'une fonction linéaire passe toujours par l'origine.`,
      answer: true,
      explanation: `f(x) = ax donne f(0) = a × 0 = 0. La droite passe donc par O(0 ; 0).`,
    },
    {
      id: `q3`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Dans la fonction affine f(x) = 5x + 2, que vaut l'ordonnée à l'origine ?`,
      options: [`5`, `2`, `7`, `0`],
      answer: `2`,
      explanation: `Dans f(x) = ax + b, b est l'ordonnée à l'origine. Ici b = 2 (c'est f(0)).`,
    },
    {
      id: `q4`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Vrai ou faux : dans f(x) = ax + b, le nombre a s'appelle le coefficient directeur.`,
      answer: true,
      explanation: `a est le coefficient directeur (la pente de la droite) et b est l'ordonnée à l'origine.`,
    },
    {
      id: `q5`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Une fonction linéaire s'écrit sous la forme :`,
      options: [`f(x) = ax + b`, `f(x) = ax`, `f(x) = x + b`, `f(x) = a/x`],
      answer: `f(x) = ax`,
      explanation: `Une fonction linéaire est de la forme f(x) = ax. Avec un « + b », ce serait une fonction affine.`,
    },
    {
      id: `q6`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Soit f(x) = 3x − 1. Quel est l'antécédent de 8 ?`,
      options: [`3`, `23`, `9`, `2`],
      answer: `3`,
      explanation: `On résout f(x) = 8 : 3x − 1 = 8, donc 3x = 9, donc x = 3.`,
      mnemonic: `Antécédent : on résout l'équation f(x) = valeur.`,
    },
    {
      id: `q7`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Une fonction affine vérifie f(0) = 4 et a un coefficient directeur de 2. Quelle est sa formule ?`,
      options: [`f(x) = 2x + 4`, `f(x) = 4x + 2`, `f(x) = 2x`, `f(x) = 4x`],
      answer: `f(x) = 2x + 4`,
      explanation: `Le coefficient directeur est a = 2 et l'ordonnée à l'origine est b = f(0) = 4. Donc f(x) = 2x + 4.`,
    },
    {
      id: `q8`,
      type: `trous`,
      difficulty: `medium`,
      question: `Dans f(x) = ax + b, le nombre a est le coefficient [directeur] et b est l'[ordonnée] à l'origine.`,
      answer: [`directeur`, `ordonnée`],
      explanation: `a = coefficient directeur (pente), b = ordonnée à l'origine = f(0).`,
    },
    {
      id: `q9`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Pour la fonction linéaire f, on sait que f(5) = 20. Que vaut le coefficient a ?`,
      options: [`4`, `15`, `100`, `0,25`],
      answer: `4`,
      explanation: `Pour une fonction linéaire, a = f(x)/x = 20/5 = 4. Donc f(x) = 4x.`,
    },
    {
      id: `q10`,
      type: `relier`,
      difficulty: `medium`,
      question: `Relie chaque fonction à son type.`,
      options: [`linéaire`, `affine`, `constante`],
      answer: { 'f(x) = 3x': `linéaire`, 'f(x) = 2x + 5': `affine`, 'f(x) = 7': `constante` },
      explanation: `f(x) = 3x est linéaire (forme ax) ; f(x) = 2x + 5 est affine (ax + b) ; f(x) = 7 est constante (a = 0).`,
    },
    {
      id: `q11`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Vrai ou faux : toute fonction linéaire est aussi une fonction affine.`,
      answer: true,
      explanation: `Une fonction linéaire f(x) = ax est une fonction affine avec b = 0. L'inverse est faux : une affine avec b ≠ 0 n'est pas linéaire.`,
      trap: `L'inclusion va dans un seul sens : linéaire ⟹ affine, mais affine n'implique pas linéaire.`,
    },
    {
      id: `q12`,
      type: `ordonner`,
      difficulty: `medium`,
      question: `Pour f(x) = 2x + 1, range les images dans l'ordre des étapes pour calculer f(3) : remplacer x, faire la multiplication, ajouter b, résultat.`,
      options: [`2 × 3 + 1`, `6 + 1`, `7`, `f(3)`],
      answer: [3, 0, 1, 2],
      explanation: `On part de f(3), puis on écrit 2 × 3 + 1, puis 6 + 1, et enfin 7. Indices : 3, 0, 1, 2.`,
    },
    {
      id: `q13`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Une fonction affine vérifie f(2) = 7 et f(5) = 16. Quel est son coefficient directeur a ?`,
      options: [`3`, `9`, `2`, `4`],
      answer: `3`,
      explanation: `a = (y₂ − y₁)/(x₂ − x₁) = (16 − 7)/(5 − 2) = 9/3 = 3.`,
      mnemonic: `a = différence des ordonnées divisée par différence des abscisses.`,
    },
    {
      id: `q14`,
      type: `brevet`,
      difficulty: `hard`,
      question: `Une fonction affine vérifie f(1) = 4 et f(3) = 10. Détermine f(x).`,
      answer: `a = (10 − 4)/(3 − 1) = 6/2 = 3. Puis avec f(1) = 4 : 3 × 1 + b = 4, donc b = 1. Donc f(x) = 3x + 1. (Vérification : f(3) = 3×3+1 = 10 ✓.)`,
      explanation: `On calcule d'abord le coefficient directeur a = 3, puis b en remplaçant un point : f(x) = 3x + 1.`,
    },
    {
      id: `q15`,
      type: `trous`,
      difficulty: `hard`,
      question: `Le coefficient directeur d'une droite passant par A(1 ; 2) et B(4 ; 11) vaut a = (11 − 2)/(4 − [1]) = [3].`,
      answer: [`1`, `3`],
      explanation: `a = (11 − 2)/(4 − 1) = 9/3 = 3.`,
    },
    {
      id: `q16`,
      type: `boolean`,
      difficulty: `hard`,
      question: `Vrai ou faux : la fonction affine f(x) = −2x + 5 est décroissante.`,
      answer: true,
      explanation: `Le coefficient directeur a = −2 est négatif, donc la fonction est décroissante (la droite descend).`,
    },
    {
      id: `q17`,
      type: `qcm`,
      difficulty: `expert`,
      question: `La droite d'une fonction affine coupe l'axe des ordonnées en 3 et passe par le point (2 ; 9). Quelle est sa formule ?`,
      options: [`f(x) = 3x + 9`, `f(x) = 3x + 2`, `f(x) = 3x + 3`, `f(x) = 9x + 3`],
      answer: `f(x) = 3x + 3`,
      explanation: `L'ordonnée à l'origine est b = 3. On a aussi le point (0 ; 3). Avec (2 ; 9) : a = (9 − 3)/(2 − 0) = 6/2 = 3. Donc f(x) = 3x + 3.`,
      trap: `« Coupe l'axe des ordonnées en 3 » donne b = 3 (et le point (0 ; 3)), pas le coefficient directeur.`,
    },
    {
      id: `q18`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Un loueur de vélos demande 5 € de frais fixes plus 2 € par heure. On note f(x) le prix pour x heures. Exprime f(x), calcule le prix pour 4 heures, puis le nombre d'heures pour un prix de 19 €.`,
      answer: `f(x) = 2x + 5 (a = 2 €/h, b = 5 € de frais fixes). Pour 4 heures : f(4) = 2 × 4 + 5 = 13 €. Pour 19 € : on résout 2x + 5 = 19, soit 2x = 14, donc x = 7 heures.`,
      explanation: `C'est une fonction affine f(x) = 2x + 5. L'image de 4 est 13 € (calcul direct) ; l'antécédent de 19 est 7 (on résout l'équation).`,
      mnemonic: `Frais fixes ⟹ b ; prix par unité ⟹ a.`,
    },
    {
      id: `q19`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Une fonction affine vérifie f(−1) = 8 et f(2) = −1. Quelle est sa formule ?`,
      options: [`f(x) = −3x + 5`, `f(x) = 3x + 5`, `f(x) = −3x − 5`, `f(x) = −9x + 8`],
      answer: `f(x) = −3x + 5`,
      explanation: `a = (−1 − 8)/(2 − (−1)) = −9/3 = −3. Puis avec f(2) = −1 : −3 × 2 + b = −1, soit −6 + b = −1, donc b = 5. Donc f(x) = −3x + 5.`,
      trap: `Attention aux signes : x₂ − x₁ = 2 − (−1) = 3, pas 1.`,
    },
  ],
  anecdotes: [
    `Le repère que tu utilises s'appelle « repère cartésien » en l'honneur de René Descartes. La légende raconte qu'il en aurait eu l'idée en observant une mouche se déplacer au plafond : pour décrire sa position, il suffisait de deux nombres, sa distance à deux murs… les coordonnées étaient nées !`,
    `Le mot « fonction » a été inventé par Leibniz en 1692, mais c'est le Suisse Leonhard Euler qui a imposé l'écriture f(x) vers 1734. Euler était si productif qu'il a continué à publier des centaines d'articles même après être devenu aveugle.`,
    `Bien avant Descartes, vers 1350, le Français Nicole Oresme dessinait déjà des graphiques pour représenter comment une vitesse change avec le temps. Certains historiens y voient l'ancêtre lointain de nos courbes de fonctions, presque trois siècles en avance !`,
  ],
  pitfalls: `Ne confonds pas image (le résultat f(x), ce qui sort) et antécédent (la valeur de x, ce qui entre). Et retiens : linéaire f(x) = ax passe par l'origine ; affine f(x) = ax + b (avec b ≠ 0) ne passe PAS par l'origine.`,
};
