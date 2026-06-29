import { Chapter } from '../../types';

export const mathCh12: Chapter = {
  id: `mch12`,
  slug: `trigonometrie`,
  number: 12,
  subject: `mathematiques`,
  title: `Trigonométrie dans le triangle rectangle`,
  subtitle: `Reconnaître côté adjacent, opposé et hypoténuse, utiliser cosinus, sinus et tangente pour calculer une longueur connaissant un angle, puis retrouver un angle à partir de deux longueurs avec les touches cos⁻¹, sin⁻¹ et tan⁻¹`,
  introduction: `Comment connaître la hauteur d'une montagne, la largeur d'une rivière ou l'inclinaison d'une rampe sans jamais sortir son décamètre ? La trigonométrie répond à ces questions depuis plus de 2000 ans. Tout repose sur une idée : dans un triangle rectangle, le rapport entre deux côtés ne dépend que de la valeur d'un angle aigu. Trois rapports suffisent à tout faire : le cosinus, le sinus et la tangente. Grâce à la formule magique SOH-CAH-TOA et à une calculatrice réglée en mode degré, tu vas apprendre à calculer une longueur quand tu connais un angle et un côté, puis à retrouver un angle quand tu connais deux côtés en utilisant les touches inverses cos⁻¹, sin⁻¹ et tan⁻¹.`,
  courseContent: `
<h2>1. Repérer les côtés par rapport à un angle aigu</h2>
<p>On travaille dans un <strong>triangle rectangle</strong>. Le côté le plus long, situé <strong>face à l'angle droit</strong>, s'appelle toujours l'<strong>hypoténuse</strong>. Les deux autres côtés se nomment <em>par rapport à l'angle aigu</em> que l'on étudie :</p>
<ul>
<li>le <strong>côté opposé</strong> : il est <strong>en face</strong> de l'angle choisi (il ne le touche pas) ;</li>
<li>le <strong>côté adjacent</strong> : il <strong>touche</strong> l'angle choisi (c'est le côté de l'angle qui n'est pas l'hypoténuse).</li>
</ul>
<p class="attention">Attention : « opposé » et « adjacent » changent selon l'angle aigu que l'on regarde, mais l'hypoténuse, elle, ne bouge jamais : elle est toujours face à l'angle droit.</p>
<p>Exemple : dans le triangle ABC rectangle en A, pour l'angle aigu en B, l'hypoténuse est [BC], le côté opposé est [AC] et le côté adjacent est [AB].</p>

<h2>2. Les trois rapports : cosinus, sinus, tangente</h2>
<p>Pour un angle aigu d'un triangle rectangle, on définit trois rapports de longueurs :</p>
<p style="text-align:center"><strong>cos = adjacent/hypoténuse &nbsp;&nbsp;&nbsp; sin = opposé/hypoténuse &nbsp;&nbsp;&nbsp; tan = opposé/adjacent</strong></p>
<p>Pour ne jamais les confondre, on utilise le moyen mnémotechnique <strong>SOH-CAH-TOA</strong> :</p>
<ul>
<li><strong>S</strong>OH : <strong>S</strong>inus = <strong>O</strong>pposé / <strong>H</strong>ypoténuse ;</li>
<li><strong>C</strong>AH : <strong>C</strong>osinus = <strong>A</strong>djacent / <strong>H</strong>ypoténuse ;</li>
<li><strong>T</strong>OA : <strong>T</strong>angente = <strong>O</strong>pposé / <strong>A</strong>djacent.</li>
</ul>
<p>Le cosinus et le sinus d'un angle aigu sont toujours compris <strong>entre 0 et 1</strong> (on divise par l'hypoténuse, qui est le plus grand côté). La tangente, elle, peut dépasser 1.</p>

<h2>3. Régler la calculatrice en mode degré</h2>
<p>Avant tout calcul, il faut vérifier que la calculatrice est en <strong>mode degré</strong> : un petit <strong>D</strong> ou <strong>DEG</strong> doit être affiché à l'écran. Si elle est en mode <strong>RAD</strong> (radians) ou <strong>GRAD</strong> (grades), les résultats seront faux !</p>
<p>On y accède en général par la touche <strong>MODE</strong> (ou DRG). C'est l'erreur la plus fréquente au Brevet : un cos(30°) doit donner environ <strong>0,866</strong> ; si la machine affiche 0,154, c'est qu'elle est en radians.</p>

<h2>4. Calculer une longueur connaissant un angle (exemples résolus)</h2>
<p><strong>Exemple 1 — avec le cosinus.</strong> Le triangle ABC est rectangle en A. L'angle en B mesure 35° et l'hypoténuse BC = 7 cm. Calculer AB.</p>
<p>Par rapport à l'angle B, AB est le côté <strong>adjacent</strong> et BC est l'<strong>hypoténuse</strong> : on choisit donc le <strong>cosinus</strong> (CAH).</p>
<p>cos(35°) = AB/BC = AB/7, donc AB = 7 × cos(35°) ≈ 7 × 0,819 ≈ <strong>5,7 cm</strong>.</p>

<p><strong>Exemple 2 — avec le sinus.</strong> Dans le même triangle (rectangle en A, angle B = 35°, BC = 7 cm), calculer AC.</p>
<p>Par rapport à l'angle B, AC est le côté <strong>opposé</strong> et BC l'<strong>hypoténuse</strong> : on choisit le <strong>sinus</strong> (SOH).</p>
<p>sin(35°) = AC/BC = AC/7, donc AC = 7 × sin(35°) ≈ 7 × 0,574 ≈ <strong>4,0 cm</strong>.</p>

<p><strong>Exemple 3 — avec la tangente.</strong> Le triangle DEF est rectangle en D. L'angle en E mesure 50° et le côté DE = 4 cm. Calculer DF.</p>
<p>Par rapport à l'angle E, DF est le côté <strong>opposé</strong> et DE le côté <strong>adjacent</strong> : aucun ne fait intervenir l'hypoténuse, on choisit donc la <strong>tangente</strong> (TOA).</p>
<p>tan(50°) = DF/DE = DF/4, donc DF = 4 × tan(50°) ≈ 4 × 1,192 ≈ <strong>4,8 cm</strong>.</p>

<h2>5. Calculer un angle connaissant deux longueurs (exemples résolus)</h2>
<p>Quand on connaît <strong>deux longueurs</strong>, on calcule d'abord le rapport, puis on utilise la <strong>fonction inverse</strong> de la calculatrice : <strong>cos⁻¹</strong>, <strong>sin⁻¹</strong> ou <strong>tan⁻¹</strong> (touches souvent notées arccos, arcsin, arctan, accessibles avec SHIFT ou 2nde).</p>

<p><strong>Exemple 4 — angle avec cos⁻¹.</strong> Le triangle ABC est rectangle en A. On connaît AB = 6 cm (adjacent à B) et BC = 9 cm (hypoténuse). Calculer l'angle en B, arrondi au dixième de degré.</p>
<p>cos(B) = adjacent/hypoténuse = AB/BC = 6/9 ≈ 0,667.</p>
<p>Donc B = cos⁻¹(6/9) ≈ <strong>48,2°</strong>.</p>

<p><strong>Exemple 5 — angle avec tan⁻¹.</strong> Le triangle ABC est rectangle en A avec AB = 4 cm et AC = 3 cm. Calculer l'angle en B.</p>
<p>Par rapport à B, AC = 3 est l'opposé et AB = 4 l'adjacent : on utilise la tangente.</p>
<p>tan(B) = opposé/adjacent = AC/AB = 3/4 = 0,75, donc B = tan⁻¹(0,75) ≈ <strong>36,9°</strong>.</p>
<p>Dans ce même triangle 3-4-5, l'autre angle aigu (en C) a pour tangente 4/3, soit C = tan⁻¹(4/3) ≈ 53,1°. On vérifie que 36,9° + 53,1° = 90°, ce qui est cohérent dans un triangle rectangle.</p>

<p><strong>Exemple 6 — angle avec sin⁻¹.</strong> Un triangle rectangle a une hypoténuse de 10 cm et un côté opposé à l'angle aigu cherché de 5 cm. Alors sin(angle) = 5/10 = 0,5, donc l'angle = sin⁻¹(0,5) = <strong>30°</strong> (valeur exacte).</p>

<h2>6. Méthode : choisir le bon rapport</h2>
<p>Pour ne pas se tromper, on suit toujours la même démarche :</p>
<ul>
<li>repérer <strong>l'angle aigu</strong> concerné et l'angle droit ;</li>
<li>nommer les côtés : <strong>hypoténuse</strong> (face à l'angle droit), <strong>opposé</strong> et <strong>adjacent</strong> à l'angle aigu ;</li>
<li>regarder <strong>quels côtés</strong> interviennent (celui connu et celui cherché) et lire SOH-CAH-TOA pour choisir cos, sin ou tan ;</li>
<li>écrire l'égalité, puis isoler l'inconnue (× pour une longueur, fonction inverse pour un angle) ;</li>
<li>vérifier le <strong>mode degré</strong> et arrondir comme demandé.</li>
</ul>
<p class="attention">Astuce : si l'hypoténuse n'apparaît pas (ni connue, ni cherchée), c'est forcément la <strong>tangente</strong>.</p>
`,
  summary: `Dans un **triangle rectangle**, l'**hypoténuse** est le côté face à l'angle droit. Pour un **angle aigu** donné, le côté **opposé** lui fait face et le côté **adjacent** le touche (sans être l'hypoténuse). Ces noms dépendent de l'angle choisi.

Trois rapports relient ces côtés : **cos = adjacent/hypoténuse**, **sin = opposé/hypoténuse**, **tan = opposé/adjacent**. On les retient avec **SOH-CAH-TOA**. Le cosinus et le sinus d'un angle aigu sont toujours compris **entre 0 et 1**.

Pour **calculer une longueur** connaissant un angle et un côté, on choisit le rapport selon les côtés en jeu, on écrit l'égalité et on isole l'inconnue par multiplication. Exemple : cos(35°) = AB/7 donne AB = 7 × cos(35°) ≈ *5,7 cm*.

Pour **calculer un angle** connaissant deux longueurs, on forme le rapport puis on applique la fonction **inverse** : **cos⁻¹**, **sin⁻¹** ou **tan⁻¹**. Exemple : tan(B) = 3/4 donne B = tan⁻¹(0,75) ≈ *36,9°*.

Vérifie toujours que la **calculatrice est en mode degré** (DEG) : c'est l'erreur n°1 du Brevet. Et rappel-toi : si l'hypoténuse n'intervient pas, c'est la **tangente**.`,
  timeline: [
    {
      id: `mch12-t1`,
      date: `vers -150`,
      title: `Hipparque, père de la trigonométrie`,
      description: `L'astronome grec Hipparque de Nicée construit la première table de « cordes » reliant les angles aux longueurs d'un cercle, pour calculer les positions des astres. C'est l'ancêtre de nos tables trigonométriques.`,
    },
    {
      id: `mch12-t2`,
      date: `vers 500`,
      title: `Les mathématiciens indiens et le sinus`,
      description: `En Inde, des savants comme Aryabhata introduisent la notion de demi-corde, qui deviendra le sinus. Le mot « sinus » vient d'une traduction latine du terme arabe « jayb ».`,
    },
    {
      id: `mch12-t3`,
      date: `vers 900`,
      title: `Al-Battani perfectionne les rapports`,
      description: `L'astronome arabe Al-Battani utilise et tabule le sinus, le cosinus et la tangente avec une grande précision, faisant progresser l'astronomie et la trigonométrie.`,
    },
    {
      id: `mch12-t4`,
      date: `XVIe siècle`,
      title: `Le mot « trigonométrie »`,
      description: `Le terme trigonométrie (« mesure du triangle » en grec) apparaît en Europe. Les notations cos, sin et tan se fixent peu à peu jusqu'au XVIIIe siècle avec Euler.`,
    },
    {
      id: `mch12-t5`,
      date: `Aujourd'hui`,
      title: `GPS, jeux vidéo et architecture`,
      description: `La trigonométrie est partout : positionnement par satellite, calcul de distances inaccessibles, images de synthèse, pentes de routes et de toitures.`,
    },
  ],
  mindMap: [
    { id: `mch12-m0`, label: `Trigonométrie` },
    { id: `mch12-m1`, label: `Les côtés`, description: `Hypoténuse (face à l'angle droit), opposé, adjacent`, parentId: `mch12-m0` },
    { id: `mch12-m2`, label: `SOH-CAH-TOA`, description: `cos = adj/hyp, sin = opp/hyp, tan = opp/adj`, parentId: `mch12-m0` },
    { id: `mch12-m3`, label: `Calculer une longueur`, description: `Angle connu : longueur = côté × cos/sin/tan`, parentId: `mch12-m0` },
    { id: `mch12-m4`, label: `Calculer un angle`, description: `Deux longueurs : cos⁻¹, sin⁻¹, tan⁻¹`, parentId: `mch12-m0` },
    { id: `mch12-m5`, label: `Mode degré`, description: `Calculatrice sur DEG (pas RAD)`, parentId: `mch12-m0` },
    { id: `mch12-m6`, label: `Astuce`, description: `Pas d'hypoténuse en jeu ⇒ tangente`, parentId: `mch12-m2` },
  ],
  characters: [
    {
      id: `mch12-c1`,
      name: `Hipparque de Nicée`,
      dates: `vers -190 / -120`,
      role: `Astronome et mathématicien grec`,
      importance: `Considéré comme le fondateur de la trigonométrie, il dressa la première table de cordes pour relier angles et longueurs et étudier le mouvement des astres.`,
    },
    {
      id: `mch12-c2`,
      name: `Al-Battani`,
      dates: `vers 858 / 929`,
      role: `Astronome et mathématicien arabe`,
      importance: `Il introduisit et calcula avec précision le sinus, le cosinus et la tangente, faisant de la trigonométrie un outil puissant pour l'astronomie médiévale.`,
    },
  ],
  dates: [
    { date: `Hypoténuse`, event: `Côté face à l'angle droit`, explanation: `C'est le plus long côté du triangle rectangle ; il ne dépend pas de l'angle aigu choisi.` },
    { date: `Opposé / adjacent`, event: `Par rapport à l'angle aigu`, explanation: `L'opposé est en face de l'angle, l'adjacent le touche : ils changent selon l'angle étudié.` },
    { date: `Cosinus`, event: `cos = adjacent/hypoténuse`, explanation: `Sert à relier l'angle, le côté adjacent et l'hypoténuse (le C de CAH).` },
    { date: `Sinus`, event: `sin = opposé/hypoténuse`, explanation: `Sert à relier l'angle, le côté opposé et l'hypoténuse (le S de SOH).` },
    { date: `Tangente`, event: `tan = opposé/adjacent`, explanation: `Sert quand l'hypoténuse n'intervient pas (le T de TOA).` },
    { date: `Longueur cherchée`, event: `côté × cos/sin/tan(angle)`, explanation: `On isole la longueur en multipliant le côté connu par le rapport de l'angle.` },
    { date: `Angle cherché`, event: `cos⁻¹, sin⁻¹, tan⁻¹`, explanation: `On forme le rapport des deux longueurs puis on applique la fonction inverse.` },
    { date: `Mode degré`, event: `DEG (pas RAD)`, explanation: `À vérifier avant tout calcul : un cos(30°) doit valoir environ 0,866.` },
  ],
  flashcards: [
    { id: `mch12-f1`, question: `Comment s'appelle le côté face à l'angle droit ?`, answer: `L'hypoténuse (c'est le plus long côté).`, category: `Vocabulaire` },
    { id: `mch12-f2`, question: `Qu'est-ce que le côté opposé à un angle aigu ?`, answer: `Le côté qui lui fait face (qui ne le touche pas).`, category: `Vocabulaire` },
    { id: `mch12-f3`, question: `Qu'est-ce que le côté adjacent à un angle aigu ?`, answer: `Le côté qui touche l'angle sans être l'hypoténuse.`, category: `Vocabulaire` },
    { id: `mch12-f4`, question: `Que signifie SOH-CAH-TOA ?`, answer: `Sin = Opp/Hyp, Cos = Adj/Hyp, Tan = Opp/Adj.`, category: `Formules` },
    { id: `mch12-f5`, question: `Formule du cosinus d'un angle aigu ?`, answer: `cos = adjacent/hypoténuse.`, category: `Formules` },
    { id: `mch12-f6`, question: `Formule du sinus d'un angle aigu ?`, answer: `sin = opposé/hypoténuse.`, category: `Formules` },
    { id: `mch12-f7`, question: `Formule de la tangente d'un angle aigu ?`, answer: `tan = opposé/adjacent.`, category: `Formules` },
    { id: `mch12-f8`, question: `Entre quelles valeurs sont toujours le cosinus et le sinus d'un angle aigu ?`, answer: `Entre 0 et 1.`, category: `Propriété` },
    { id: `mch12-f9`, question: `Comment calcule-t-on un angle à partir de deux longueurs ?`, answer: `On forme le rapport, puis on utilise cos⁻¹, sin⁻¹ ou tan⁻¹.`, category: `Méthode` },
    { id: `mch12-f10`, question: `Quel rapport choisir si l'hypoténuse n'intervient pas ?`, answer: `La tangente (TOA).`, category: `Méthode` },
    { id: `mch12-f11`, question: `Dans quel mode doit être la calculatrice ?`, answer: `En mode degré (DEG), pas en radians.`, category: `Calculatrice` },
    { id: `mch12-f12`, question: `Combien vaut cos(30°) environ ?`, answer: `Environ 0,866 (utile pour vérifier le mode degré).`, category: `Calculatrice` },
  ],
  questions: [
    {
      id: `mch12-q1`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Dans un triangle rectangle, quel côté est l'hypoténuse ?`,
      options: [`Le côté face à l'angle droit`, `Le côté le plus court`, `Le côté horizontal`, `Le côté qui touche l'angle droit`],
      answer: `Le côté face à l'angle droit`,
      explanation: `L'hypoténuse est toujours le côté opposé à l'angle droit ; c'est aussi le plus long côté.`,
      mnemonic: `Hypoténuse = face à l'angle droit.`,
    },
    {
      id: `mch12-q2`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Le moyen mnémotechnique CAH signifie : Cosinus = Adjacent / Hypoténuse.`,
      answer: true,
      explanation: `SOH-CAH-TOA : Cos = Adjacent/Hypoténuse.`,
    },
    {
      id: `mch12-q3`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Quelle est la formule du sinus d'un angle aigu ?`,
      options: [`opposé/hypoténuse`, `adjacent/hypoténuse`, `opposé/adjacent`, `hypoténuse/opposé`],
      answer: `opposé/hypoténuse`,
      explanation: `SOH : Sinus = Opposé/Hypoténuse.`,
      trap: `Ne pas confondre avec le cosinus (adjacent/hypoténuse).`,
    },
    {
      id: `mch12-q4`,
      type: `trous`,
      difficulty: `easy`,
      question: `Pour un angle aigu : cos = [adjacent] / hypoténuse, sin = opposé / [hypoténuse] et tan = [opposé] / adjacent.`,
      answer: [`adjacent`, `hypoténuse`, `opposé`],
      explanation: `SOH-CAH-TOA donne directement les trois formules.`,
      mnemonic: `SOH-CAH-TOA.`,
    },
    {
      id: `mch12-q5`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Avant de calculer un cosinus, il faut vérifier que la calculatrice est en mode degré (DEG).`,
      answer: true,
      explanation: `En mode radians, les résultats sont faux : cos(30°) doit valoir environ 0,866.`,
    },
    {
      id: `mch12-q6`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Le cosinus d'un angle aigu d'un triangle rectangle est toujours :`,
      options: [`compris entre 0 et 1`, `supérieur à 1`, `négatif`, `égal à l'angle`],
      answer: `compris entre 0 et 1`,
      explanation: `On divise le côté adjacent par l'hypoténuse, qui est plus grande : le résultat est entre 0 et 1.`,
    },
    {
      id: `mch12-q7`,
      type: `qcm`,
      difficulty: `medium`,
      question: `ABC est rectangle en A, l'angle en B mesure 35° et BC = 7 cm. Quelle est la longueur AB (arrondie au dixième) ?`,
      options: [`≈ 5,7 cm`, `≈ 4,0 cm`, `≈ 8,5 cm`, `≈ 12,2 cm`],
      answer: `≈ 5,7 cm`,
      explanation: `AB est adjacent à B et BC l'hypoténuse : cos(35°) = AB/7, donc AB = 7 × cos(35°) ≈ 5,7 cm.`,
      trap: `AB est le côté adjacent : on utilise le cosinus, pas le sinus.`,
    },
    {
      id: `mch12-q8`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Dans un triangle rectangle, on connaît un angle aigu et le côté opposé, et on cherche l'hypoténuse. Quel rapport utiliser ?`,
      options: [`Le sinus`, `Le cosinus`, `La tangente`, `Aucun ne convient`],
      answer: `Le sinus`,
      explanation: `Le sinus relie l'opposé et l'hypoténuse : sin = opposé/hypoténuse.`,
    },
    {
      id: `mch12-q9`,
      type: `relier`,
      difficulty: `medium`,
      question: `Relie chaque rapport trigonométrique à sa formule.`,
      options: [`adjacent/hypoténuse`, `opposé/hypoténuse`, `opposé/adjacent`],
      answer: { 'Cosinus': 'adjacent/hypoténuse', 'Sinus': 'opposé/hypoténuse', 'Tangente': 'opposé/adjacent' },
      explanation: `SOH-CAH-TOA : Sin = Opp/Hyp, Cos = Adj/Hyp, Tan = Opp/Adj.`,
    },
    {
      id: `mch12-q10`,
      type: `trous`,
      difficulty: `medium`,
      question: `Pour calculer un angle à partir de deux longueurs, on forme le rapport puis on utilise la touche [inverse] : cos⁻¹, sin⁻¹ ou [tan⁻¹].`,
      answer: [`inverse`, `tan⁻¹`],
      explanation: `Les fonctions inverses (arccos, arcsin, arctan) redonnent l'angle à partir du rapport.`,
    },
    {
      id: `mch12-q11`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Si l'hypoténuse n'intervient ni dans le côté connu ni dans le côté cherché, on doit utiliser la tangente.`,
      answer: true,
      explanation: `La tangente est le seul rapport sans hypoténuse : tan = opposé/adjacent.`,
      mnemonic: `Pas d'hypoténuse ⇒ tangente.`,
    },
    {
      id: `mch12-q12`,
      type: `qcm`,
      difficulty: `medium`,
      question: `DEF est rectangle en D, l'angle en E mesure 50° et DE = 4 cm. Quelle est la longueur DF (arrondie au dixième) ?`,
      options: [`≈ 4,8 cm`, `≈ 3,1 cm`, `≈ 2,6 cm`, `≈ 6,2 cm`],
      answer: `≈ 4,8 cm`,
      explanation: `DF est opposé à E et DE adjacent : tan(50°) = DF/DE, donc DF = 4 × tan(50°) ≈ 4,8 cm.`,
      trap: `Aucun côté n'est l'hypoténuse : on utilise la tangente.`,
    },
    {
      id: `mch12-q13`,
      type: `qcm`,
      difficulty: `hard`,
      question: `ABC est rectangle en A avec AB = 6 cm et BC = 9 cm. Quelle est la mesure de l'angle en B (arrondie au dixième de degré) ?`,
      options: [`≈ 48,2°`, `≈ 41,8°`, `≈ 33,7°`, `≈ 56,3°`],
      answer: `≈ 48,2°`,
      explanation: `cos(B) = AB/BC = 6/9 ≈ 0,667, donc B = cos⁻¹(6/9) ≈ 48,2°.`,
      trap: `AB est adjacent et BC l'hypoténuse : on utilise cos⁻¹.`,
    },
    {
      id: `mch12-q14`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Dans un triangle rectangle, un côté opposé vaut 3 cm et le côté adjacent 4 cm. Quelle est la mesure de cet angle aigu ?`,
      options: [`≈ 36,9°`, `≈ 53,1°`, `≈ 41,4°`, `≈ 48,6°`],
      answer: `≈ 36,9°`,
      explanation: `tan(angle) = opposé/adjacent = 3/4 = 0,75, donc angle = tan⁻¹(0,75) ≈ 36,9°.`,
      trap: `Avec opposé et adjacent connus, on utilise la tangente inverse.`,
    },
    {
      id: `mch12-q15`,
      type: `boolean`,
      difficulty: `hard`,
      question: `Dans un triangle rectangle de côtés 3, 4 et 5, l'angle dont la tangente vaut 4/3 mesure environ 53,1°.`,
      answer: true,
      explanation: `tan⁻¹(4/3) ≈ 53,1° ; l'autre angle aigu, de tangente 3/4, mesure ≈ 36,9°, et 53,1° + 36,9° = 90°.`,
    },
    {
      id: `mch12-q16`,
      type: `ordonner`,
      difficulty: `hard`,
      question: `Remets dans l'ordre les étapes pour calculer une longueur connaissant un angle.`,
      options: [
        `Je repère l'angle aigu et nomme les côtés (hypoténuse, opposé, adjacent)`,
        `Je choisis cos, sin ou tan selon les côtés en jeu (SOH-CAH-TOA)`,
        `J'écris l'égalité et j'isole la longueur cherchée`,
        `Je vérifie le mode degré, je calcule et j'arrondis`,
      ],
      answer: [0, 1, 2, 3],
      explanation: `On nomme les côtés, on choisit le bon rapport, on isole l'inconnue, puis on calcule en mode degré.`,
    },
    {
      id: `mch12-q17`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Un toit fait un angle de 30° avec l'horizontale. Sa pente (le rampant) mesure 8 m. Quelle est la hauteur verticale gagnée du bas vers le haut du toit ?`,
      options: [`4 m`, `≈ 6,9 m`, `≈ 9,2 m`, `8 m`],
      answer: `4 m`,
      explanation: `La hauteur est le côté opposé à l'angle de 30° et le rampant l'hypoténuse : sin(30°) = hauteur/8, donc hauteur = 8 × sin(30°) = 8 × 0,5 = 4 m.`,
      trap: `La hauteur est opposée à l'angle : on utilise le sinus, pas le cosinus.`,
    },
    {
      id: `mch12-q18`,
      type: `brevet`,
      difficulty: `expert`,
      question: `ABC est un triangle rectangle en A. On donne AB = 5 cm et l'angle en B = 40°. Rédige le calcul de la longueur AC, arrondie au dixième de cm.`,
      answer: `Dans le triangle ABC rectangle en A, par rapport à l'angle B, AC est le côté opposé et AB le côté adjacent. On utilise la tangente : tan(B) = AC/AB, soit tan(40°) = AC/5. Donc AC = 5 × tan(40°) ≈ 5 × 0,839 ≈ 4,2 cm.`,
      explanation: `AC opposé et AB adjacent à B, sans hypoténuse : tangente. AC = 5 × tan(40°) ≈ 4,2 cm.`,
    },
    {
      id: `mch12-q19`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Une échelle de 4 m est appuyée contre un mur. Son pied est à 1,5 m du mur. Rédige le calcul de l'angle que l'échelle forme avec le sol, arrondi au degré.`,
      answer: `On modélise par un triangle rectangle : l'échelle (4 m) est l'hypoténuse et la distance au mur (1,5 m) est le côté adjacent à l'angle au sol. Donc cos(angle) = adjacent/hypoténuse = 1,5/4 = 0,375. L'angle = cos⁻¹(0,375) ≈ 68°.`,
      explanation: `cos(angle) = 1,5/4 = 0,375, donc angle = cos⁻¹(0,375) ≈ 68°.`,
      trap: `La distance au mur est le côté adjacent et l'échelle l'hypoténuse : on utilise cos⁻¹.`,
    },
    {
      id: `mch12-q20`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Dans un triangle rectangle, l'hypoténuse mesure 10 cm et un côté opposé à l'angle aigu cherché mesure 5 cm. Quelle est la mesure exacte de cet angle ?`,
      options: [`30°`, `60°`, `45°`, `≈ 26,6°`],
      answer: `30°`,
      explanation: `sin(angle) = opposé/hypoténuse = 5/10 = 0,5, donc angle = sin⁻¹(0,5) = 30°.`,
      trap: `On connaît l'opposé et l'hypoténuse : on utilise le sinus inverse.`,
    },
    {
      id: `mch12-q21`,
      type: `personnage`,
      difficulty: `easy`,
      question: `Quel astronome grec est considéré comme le fondateur de la trigonométrie grâce à sa table de cordes ?`,
      options: [`Hipparque de Nicée`, `Al-Battani`, `Pythagore`, `Thalès de Milet`],
      answer: `Hipparque de Nicée`,
      explanation: `Hipparque de Nicée (vers -150) construisit la première table reliant angles et longueurs.`,
    },
  ],
  anecdotes: [
    `Le mot « sinus » vient d'un quiproquo de traduction : le terme indien désignant la demi-corde fut transcrit en arabe « jayb » (pli, poche), puis traduit en latin par « sinus », qui signifie justement... pli ou repli d'un vêtement.`,
    `On peut mesurer la hauteur d'un arbre sans le toucher : il suffit de viser sa cime, de mesurer l'angle obtenu et la distance au pied, puis d'appliquer la tangente. Les géomètres utilisent ce principe depuis l'Antiquité.`,
    `Le GPS de ton téléphone calcule sa position en résolvant des triangles entre les satellites et la Terre : sans trigonométrie, impossible de te localiser à quelques mètres près.`,
  ],
  pitfalls: `Vérifie toujours que la calculatrice est en mode degré (DEG, pas RAD), repère bien l'opposé et l'adjacent par rapport à l'angle étudié, et souviens-toi : si l'hypoténuse n'intervient pas, c'est la tangente.`,
};
