import { Chapter } from '../../types';

export const mathCh15: Chapter = {
  id: `mch15`,
  slug: `algorithmique-programmation`,
  number: 15,
  subject: `mathematiques`,
  title: `Algorithmique et programmation (Scratch)`,
  subtitle: `Lire et comprendre un programme, suivre l'ordre d'exécution des instructions, utiliser variables, boucles et conditions, et piloter le lutin avec Scratch pour prévoir un résultat ou une figure`,
  introduction: `Un jeu vidéo, un GPS, une application de messagerie : derrière chaque écran se cache un programme, c'est-à-dire une suite d'instructions exécutées par une machine. Apprendre à programmer, ce n'est pas seulement taper du code, c'est surtout apprendre à <strong>raisonner étape par étape</strong> : découper un problème, donner des ordres précis et dans le bon ordre. Au Brevet, on ne te demande pas d'écrire un programme compliqué : on te demande de <strong>lire un script Scratch</strong>, de comprendre ce qu'il fait, de prévoir le résultat (la valeur finale d'une variable, la figure dessinée par le lutin) ou de compléter une instruction manquante. Dans ce chapitre, tu vas (re)découvrir le vocabulaire de l'algorithmique — algorithme, instruction, variable, boucle, condition — et l'environnement Scratch, où l'on assemble des <strong>blocs</strong> comme des pièces de puzzle. Tu apprendras à faire avancer et tourner le lutin, à dessiner un carré avec une boucle, et à dérouler un script « dans ta tête » pour ne jamais te tromper sur le résultat.`,
  courseContent: `
<h2>1. Algorithme et programme</h2>
<p>Un <strong>algorithme</strong> est une suite d'instructions, écrites dans un ordre précis, qui permet de résoudre un problème ou d'accomplir une tâche. Une recette de cuisine ou un itinéraire sont des algorithmes de la vie courante.</p>
<p>Un <strong>programme</strong> est la traduction d'un algorithme dans un langage compris par une machine (ici, Scratch). La machine exécute les instructions <strong>les unes après les autres, dans l'ordre</strong> : c'est la <strong>séquence d'exécution</strong>.</p>
<p>Une <strong>instruction</strong> est un ordre élémentaire (par exemple « avancer de 10 » ou « tourner de 90° »). L'ordre des instructions est essentiel : si tu mets ta chaussette après ta chaussure, le résultat n'est pas le même !</p>

<h2>2. L'environnement Scratch</h2>
<p>Scratch est un langage de programmation visuel : au lieu d'écrire du texte, on <strong>assemble des blocs</strong> colorés qui s'emboîtent comme un puzzle. Un ensemble de blocs assemblés forme un <strong>script</strong>.</p>
<ul>
<li>Le <strong>lutin</strong> (en anglais <em>sprite</em>) est le personnage que l'on déplace à l'écran ; par défaut, c'est un chat.</li>
<li>La <strong>scène</strong> est la zone où évolue le lutin.</li>
<li>Les blocs sont rangés par familles de couleurs : <strong>Mouvement</strong> (bleu), <strong>Contrôle</strong> (orange, pour les boucles et conditions), <strong>Variables</strong> (orange foncé), <strong>Stylo</strong> (vert), <strong>Événements</strong> (jaune, comme « quand le drapeau vert est cliqué »).</li>
</ul>
<p>Un programme démarre en général par le bloc <strong>« quand drapeau vert cliqué »</strong>, puis exécute les blocs placés en dessous, de haut en bas.</p>

<h2>3. Les variables</h2>
<p>Une <strong>variable</strong> est une « boîte » qui porte un nom et qui mémorise une valeur (souvent un nombre). On peut :</p>
<ul>
<li><strong>créer</strong> la variable et lui donner un nom (par exemple « score » ou « n ») ;</li>
<li><strong>affecter</strong> une valeur avec le bloc « mettre score à 0 » ;</li>
<li><strong>modifier</strong> sa valeur avec le bloc « ajouter 1 à score » (la nouvelle valeur remplace l'ancienne).</li>
</ul>
<p><strong>Attention :</strong> « mettre score à 5 » écrase la valeur précédente, alors que « ajouter 3 à score » conserve l'ancienne valeur et lui ajoute 3. Si score valait 5, après « ajouter 3 à score » il vaut 8.</p>

<h2>4. Les boucles</h2>
<p>Une <strong>boucle</strong> permet de répéter des instructions sans les réécrire. Scratch propose trois boucles utiles au Brevet :</p>
<ul>
<li><strong>« répéter n fois »</strong> : exécute les blocs à l'intérieur un nombre <em>connu</em> de fois (par exemple 4 fois pour un carré) ;</li>
<li><strong>« répéter indéfiniment »</strong> : exécute les blocs en boucle sans fin, jusqu'à ce qu'on arrête le programme ;</li>
<li><strong>« répéter jusqu'à … » ou « tant que »</strong> : répète tant qu'une condition reste vraie (par exemple tant que score &lt; 10).</li>
</ul>
<p>Une boucle évite de recopier 100 fois la même ligne : c'est plus court, plus clair et moins risqué.</p>

<h2>5. Les instructions conditionnelles</h2>
<p>Une <strong>condition</strong> permet à un programme de faire un choix selon une situation :</p>
<ul>
<li><strong>« si … alors »</strong> : exécute les blocs <em>seulement si</em> la condition est vraie ; sinon, on saute ces blocs ;</li>
<li><strong>« si … alors … sinon »</strong> : exécute un premier groupe de blocs si la condition est vraie, et un <em>autre</em> groupe si elle est fausse.</li>
</ul>
<p>Exemple : « si score &gt; 10 alors dire Gagné sinon dire Encore un effort ». Le programme teste la condition, puis choisit la branche correspondante.</p>

<h2>6. Déplacer le lutin et repérer dans le plan</h2>
<p>La scène de Scratch est un repère : le centre a pour coordonnées (0 ; 0), l'axe des x va vers la droite, l'axe des y va vers le haut. Les blocs de mouvement les plus utiles sont :</p>
<ul>
<li><strong>« avancer de x pas »</strong> : le lutin avance en ligne droite dans la direction où il regarde ;</li>
<li><strong>« tourner de x degrés »</strong> (à droite ou à gauche) : change la direction du lutin ;</li>
<li><strong>« aller à x ; y »</strong> : place directement le lutin au point de coordonnées (x ; y) ;</li>
<li><strong>« s'orienter à 90 »</strong> : oriente le lutin (90 = vers la droite, 0 = vers le haut).</li>
</ul>
<p>Les blocs du <strong>Stylo</strong> permettent de dessiner : « stylo en position d'écriture » laisse une trace quand le lutin se déplace, « relever le stylo » arrête la trace, « effacer tout » nettoie la scène.</p>

<h3>Exemple résolu 1 — Dessiner un carré</h3>
<p>On veut dessiner un carré de côté 100. Un carré a 4 côtés égaux, et à chaque coin le lutin doit tourner d'un angle. Pour un polygone régulier à n côtés, l'angle de rotation (extérieur) vaut <strong>360 / n</strong>. Pour le carré : 360 / 4 = <strong>90°</strong>. Voici le script :</p>
<pre>
quand drapeau vert cliqué
stylo en position d'écriture
répéter 4 fois
    avancer de 100 pas
    tourner de 90 degrés
</pre>
<p>Le lutin avance de 100, tourne de 90°, et recommence 4 fois : il trace les 4 côtés et revient à son point de départ. <strong>Résultat : un carré de côté 100.</strong> Pour un triangle équilatéral, on remplacerait par « répéter 3 fois » et « tourner de 120 degrés » (360 / 3 = 120°) ; pour un hexagone régulier, « répéter 6 fois » et « tourner de 60 degrés » (360 / 6 = 60°).</p>

<h3>Exemple résolu 2 — Prévoir la valeur d'une variable</h3>
<p>On exécute ce script et on cherche la valeur finale de la variable « somme » :</p>
<pre>
mettre somme à 0
mettre n à 1
répéter 4 fois
    ajouter n à somme
    ajouter 1 à n
</pre>
<p>On déroule le script tour par tour :</p>
<ul>
<li>Départ : somme = 0, n = 1.</li>
<li>Tour 1 : somme devient 0 + 1 = 1, puis n devient 2.</li>
<li>Tour 2 : somme devient 1 + 2 = 3, puis n devient 3.</li>
<li>Tour 3 : somme devient 3 + 3 = 6, puis n devient 4.</li>
<li>Tour 4 : somme devient 6 + 4 = 10, puis n devient 5.</li>
</ul>
<p>Après les 4 tours, <strong>somme = 10</strong> (et n = 5). On a calculé 1 + 2 + 3 + 4 = 10. La méthode clé : dresser un tableau des valeurs des variables, ligne par ligne.</p>

<h3>Exemple résolu 3 — Lire une condition</h3>
<p>Soit le script suivant, avec age une variable :</p>
<pre>
mettre age à 14
si age &gt; 12 alors
    dire « Ado »
sinon
    dire « Enfant »
</pre>
<p>La condition « age &gt; 12 » est vraie (14 &gt; 12), donc le lutin exécute la branche « alors » : il dit <strong>« Ado »</strong>. La branche « sinon » est ignorée.</p>
`,
  summary: `Un *algorithme* est une suite d'instructions, dans un *ordre précis*, pour résoudre un problème. Un *programme* est la traduction de cet algorithme pour la machine, qui exécute les instructions *les unes après les autres* (séquence d'exécution). Dans *Scratch*, on assemble des *blocs* colorés pour former un *script*, et on déplace un *lutin* sur une scène.

Une *variable* est une boîte qui mémorise une valeur : on peut la *créer*, lui *affecter* une valeur (« mettre à »), ou la *modifier* (« ajouter à »). « Mettre à » écrase l'ancienne valeur, « ajouter à » la conserve et l'augmente.

Les *boucles* répètent des instructions : *« répéter n fois »* (nombre connu), *« répéter indéfiniment »* (sans fin), *« tant que / jusqu'à »* (selon une condition). Les *conditions* font des choix : *« si … alors »* exécute des blocs seulement si la condition est vraie ; *« si … alors … sinon »* choisit entre deux branches.

Pour le lutin : *« avancer de x pas »*, *« tourner de x degrés »*, *« aller à (x ; y) »*, et les blocs *Stylo* pour dessiner. La scène est un repère de centre (0 ; 0). Pour tracer un *polygone régulier à n côtés*, on répète n fois « avancer puis tourner de *360 / n* degrés » : carré → *90°* (4 fois), triangle → *120°* (3 fois), hexagone → *60°* (6 fois).

La compétence la plus testée au Brevet : *lire un script et prévoir le résultat*. La bonne méthode est de *dérouler le script pas à pas*, en notant dans un *tableau* la valeur de chaque variable à chaque tour de boucle.`,
  timeline: [
    {
      id: `mch15-tl1`,
      date: `vers 820`,
      title: `Al-Khwârizmî et l'algèbre`,
      description: `Le savant perse Al-Khwârizmî écrit des traités de calcul ; la déformation latine de son nom donnera le mot « algorithme ».`,
    },
    {
      id: `mch15-tl2`,
      date: `1843`,
      title: `Le premier algorithme`,
      description: `Ada Lovelace publie ce qui est considéré comme le premier programme informatique, destiné à la machine analytique de Babbage.`,
    },
    {
      id: `mch15-tl3`,
      date: `1936`,
      title: `La machine de Turing`,
      description: `Alan Turing décrit une machine théorique qui pose les bases mathématiques de l'informatique et de la notion de calcul.`,
    },
    {
      id: `mch15-tl4`,
      date: `1946`,
      title: `Premiers ordinateurs`,
      description: `L'ENIAC, l'un des premiers ordinateurs électroniques, est mis en service aux États-Unis.`,
    },
    {
      id: `mch15-tl5`,
      date: `2007`,
      title: `Naissance de Scratch`,
      description: `Le MIT publie Scratch, un langage visuel à blocs conçu pour apprendre à programmer dès le plus jeune âge.`,
    },
    {
      id: `mch15-tl6`,
      date: `2016`,
      title: `L'algorithmique à l'école`,
      description: `L'algorithmique et la programmation entrent au programme officiel de mathématiques du cycle 4 en France.`,
    },
  ],
  mindMap: [
    {
      id: `mch15-mm-root`,
      label: `Algorithmique et programmation`,
      description: `Lire et comprendre un script Scratch`,
    },
    {
      id: `mch15-mm-1`,
      label: `Notions de base`,
      description: `Algorithme, programme, instruction, séquence d'exécution`,
      parentId: `mch15-mm-root`,
    },
    {
      id: `mch15-mm-2`,
      label: `Scratch`,
      description: `Blocs, scripts, lutin, scène`,
      parentId: `mch15-mm-root`,
    },
    {
      id: `mch15-mm-3`,
      label: `Variables`,
      description: `Créer, mettre à (affecter), ajouter à (modifier)`,
      parentId: `mch15-mm-root`,
    },
    {
      id: `mch15-mm-4`,
      label: `Boucles`,
      description: `Répéter n fois, indéfiniment, tant que`,
      parentId: `mch15-mm-root`,
    },
    {
      id: `mch15-mm-5`,
      label: `Conditions`,
      description: `Si … alors ; si … alors … sinon`,
      parentId: `mch15-mm-root`,
    },
    {
      id: `mch15-mm-6`,
      label: `Lutin et repère`,
      description: `Avancer, tourner, aller à (x ; y), stylo`,
      parentId: `mch15-mm-root`,
    },
    {
      id: `mch15-mm-7`,
      label: `Méthode Brevet`,
      description: `Dérouler le script, tableau de valeurs, angle 360/n`,
      parentId: `mch15-mm-root`,
    },
  ],
  characters: [
    {
      id: `mch15-ch1`,
      name: `Al-Khwârizmî`,
      dates: `vers 780 – vers 850`,
      role: `Mathématicien et astronome perse, l'un des fondateurs de l'algèbre.`,
      importance: `C'est la latinisation de son nom (« Algoritmi ») qui a donné le mot « algorithme ». Son ouvrage sur le calcul a diffusé les chiffres et méthodes de résolution en Europe.`,
    },
    {
      id: `mch15-ch2`,
      name: `Ada Lovelace`,
      dates: `1815 – 1852`,
      role: `Mathématicienne britannique, pionnière de la programmation.`,
      importance: `Elle a écrit en 1843 ce qui est considéré comme le premier algorithme destiné à être exécuté par une machine : elle est souvent appelée la première programmeuse de l'histoire.`,
    },
    {
      id: `mch15-ch3`,
      name: `Alan Turing`,
      dates: `1912 – 1954`,
      role: `Mathématicien britannique, père de l'informatique théorique.`,
      importance: `Sa « machine de Turing » (1936) définit ce qu'est un calcul et fonde l'informatique moderne. Il a aussi contribué à déchiffrer les codes secrets pendant la Seconde Guerre mondiale.`,
    },
  ],
  dates: [
    {
      date: `Quand drapeau vert cliqué`,
      event: `Bloc Événement qui démarre le programme.`,
      explanation: `Se place tout en haut du script ; les blocs en dessous s'exécutent de haut en bas.`,
    },
    {
      date: `Mettre … à …`,
      event: `Affecte une valeur à une variable (écrase l'ancienne).`,
      explanation: `Sert à initialiser une variable, par exemple « mettre score à 0 » en début de programme.`,
    },
    {
      date: `Ajouter … à …`,
      event: `Modifie une variable en lui ajoutant un nombre.`,
      explanation: `Conserve l'ancienne valeur et l'augmente, par exemple « ajouter 1 à score ».`,
    },
    {
      date: `Répéter n fois`,
      event: `Boucle qui exécute les blocs un nombre connu de fois.`,
      explanation: `Idéale pour tracer un polygone (répéter n fois avancer puis tourner).`,
    },
    {
      date: `Répéter indéfiniment`,
      event: `Boucle sans fin, jusqu'à l'arrêt du programme.`,
      explanation: `Utilisée pour un mouvement ou un test qui doit tourner en continu.`,
    },
    {
      date: `Tant que / Jusqu'à`,
      event: `Boucle qui répète tant qu'une condition est vraie.`,
      explanation: `Le nombre de tours dépend de la condition, par exemple tant que score est inférieur à 10.`,
    },
    {
      date: `Si … alors`,
      event: `Exécute des blocs seulement si la condition est vraie.`,
      explanation: `Sinon, ces blocs sont sautés ; permet un choix dans le programme.`,
    },
    {
      date: `Si … alors … sinon`,
      event: `Choisit entre deux groupes de blocs selon la condition.`,
      explanation: `Branche « alors » si vrai, branche « sinon » si faux.`,
    },
    {
      date: `Tourner de 360/n`,
      event: `Angle de rotation pour un polygone régulier à n côtés.`,
      explanation: `Carré : 90°, triangle équilatéral : 120°, hexagone : 60°.`,
    },
  ],
  flashcards: [
    {
      id: `mch15-fc1`,
      question: `Qu'est-ce qu'un algorithme ?`,
      answer: `Une suite d'instructions, dans un ordre précis, pour résoudre un problème ou accomplir une tâche.`,
      category: `Notions`,
    },
    {
      id: `mch15-fc2`,
      question: `Quelle différence entre un algorithme et un programme ?`,
      answer: `L'algorithme est la méthode (les étapes) ; le programme est sa traduction dans un langage compris par la machine, comme Scratch.`,
      category: `Notions`,
    },
    {
      id: `mch15-fc3`,
      question: `Qu'appelle-t-on le « lutin » dans Scratch ?`,
      answer: `Le personnage que l'on déplace sur la scène (par défaut, un chat).`,
      category: `Scratch`,
    },
    {
      id: `mch15-fc4`,
      question: `Que fait le bloc « mettre score à 0 » ?`,
      answer: `Il affecte la valeur 0 à la variable score, en écrasant son ancienne valeur.`,
      category: `Variables`,
    },
    {
      id: `mch15-fc5`,
      question: `Si score vaut 5, que vaut-il après « ajouter 3 à score » ?`,
      answer: `Il vaut 8 : « ajouter » conserve l'ancienne valeur et lui ajoute 3.`,
      category: `Variables`,
    },
    {
      id: `mch15-fc6`,
      question: `À quoi sert une boucle « répéter n fois » ?`,
      answer: `À exécuter un groupe d'instructions un nombre connu de fois, sans avoir à les réécrire.`,
      category: `Boucles`,
    },
    {
      id: `mch15-fc7`,
      question: `Quelle est la différence entre « si … alors » et « si … alors … sinon » ?`,
      answer: `« si … alors » exécute des blocs seulement si la condition est vraie ; « si … alors … sinon » choisit entre deux branches selon que la condition est vraie ou fausse.`,
      category: `Conditions`,
    },
    {
      id: `mch15-fc8`,
      question: `Pour dessiner un carré, combien de fois répéter et de quel angle tourner ?`,
      answer: `Répéter 4 fois « avancer puis tourner de 90° » (car 360 / 4 = 90).`,
      category: `Lutin`,
    },
    {
      id: `mch15-fc9`,
      question: `Quel angle de rotation pour un triangle équilatéral en Scratch ?`,
      answer: `120°, car 360 / 3 = 120 (on répète 3 fois).`,
      category: `Lutin`,
    },
    {
      id: `mch15-fc10`,
      question: `Que fait le bloc « aller à x : 50 y : -30 » ?`,
      answer: `Il place directement le lutin au point de coordonnées (50 ; -30) de la scène.`,
      category: `Lutin`,
    },
    {
      id: `mch15-fc11`,
      question: `À quoi servent les blocs du Stylo ?`,
      answer: `À dessiner : « stylo en position d'écriture » laisse une trace quand le lutin se déplace, « relever le stylo » arrête la trace.`,
      category: `Lutin`,
    },
    {
      id: `mch15-fc12`,
      question: `Quelle méthode pour trouver la valeur finale d'une variable dans un script ?`,
      answer: `Dérouler le script pas à pas en notant, dans un tableau, la valeur de chaque variable à chaque tour de boucle.`,
      category: `Méthode`,
    },
  ],
  questions: [
    {
      id: `mch15-q1`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Qu'est-ce qu'un algorithme ?`,
      options: [
        `Une suite d'instructions dans un ordre précis`,
        `Un ordinateur très puissant`,
        `Un personnage de jeu vidéo`,
        `Une formule de géométrie`,
      ],
      answer: `Une suite d'instructions dans un ordre précis`,
      explanation: `Un algorithme est une suite d'instructions, ordonnées, qui permet de résoudre un problème ou d'accomplir une tâche.`,
    },
    {
      id: `mch15-q2`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Dans Scratch, comment appelle-t-on le personnage que l'on déplace à l'écran ?`,
      options: [`Le lutin`, `Le bloc`, `La scène`, `Le script`],
      answer: `Le lutin`,
      explanation: `Le lutin (sprite) est le personnage déplacé sur la scène ; par défaut, c'est un chat.`,
    },
    {
      id: `mch15-q3`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Dans un programme, l'ordre des instructions n'a aucune importance.`,
      answer: false,
      explanation: `Faux : les instructions s'exécutent dans l'ordre, les unes après les autres. Changer l'ordre peut changer complètement le résultat.`,
      trap: `Ne confonds pas « ordre sans importance » avec une boucle : même dans une boucle, l'ordre interne des blocs compte.`,
    },
    {
      id: `mch15-q4`,
      type: `qcm`,
      difficulty: `easy`,
      question: `Quel bloc démarre habituellement un programme Scratch ?`,
      options: [
        `Quand drapeau vert cliqué`,
        `Répéter indéfiniment`,
        `Mettre score à 0`,
        `Avancer de 10 pas`,
      ],
      answer: `Quand drapeau vert cliqué`,
      explanation: `Ce bloc d'événement lance l'exécution du script ; les blocs placés en dessous s'exécutent de haut en bas.`,
    },
    {
      id: `mch15-q5`,
      type: `boolean`,
      difficulty: `easy`,
      question: `Une boucle « répéter 4 fois » permet d'exécuter les mêmes instructions quatre fois.`,
      answer: true,
      explanation: `Vrai : la boucle « répéter n fois » exécute les blocs qu'elle contient un nombre connu de fois (ici 4).`,
    },
    {
      id: `mch15-q6`,
      type: `trous`,
      difficulty: `medium`,
      question: `Pour dessiner un carré, on tourne de [90] degrés et on répète [4] fois.`,
      answer: [`90`, `4`],
      explanation: `Un carré a 4 côtés ; l'angle extérieur vaut 360 / 4 = 90°. On répète donc 4 fois « avancer puis tourner de 90° ».`,
      mnemonic: `Polygone à n côtés : on répète n fois et on tourne de 360/n.`,
    },
    {
      id: `mch15-q7`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Si la variable score vaut 7, que vaut-elle après le bloc « ajouter 5 à score » ?`,
      options: [`12`, `5`, `7`, `35`],
      answer: `12`,
      explanation: `« Ajouter 5 à score » conserve l'ancienne valeur (7) et lui ajoute 5 : 7 + 5 = 12.`,
      trap: `« Ajouter à » n'écrase pas la valeur ; c'est « mettre à » qui la remplacerait.`,
    },
    {
      id: `mch15-q8`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Quel angle de rotation faut-il pour dessiner un triangle équilatéral en Scratch ?`,
      options: [`120 degrés`, `60 degrés`, `90 degrés`, `180 degrés`],
      answer: `120 degrés`,
      explanation: `Un triangle équilatéral a 3 côtés : l'angle de rotation extérieur vaut 360 / 3 = 120°.`,
      trap: `Ce n'est pas l'angle intérieur du triangle (60°) mais l'angle dont tourne le lutin à chaque sommet.`,
    },
    {
      id: `mch15-q9`,
      type: `boolean`,
      difficulty: `medium`,
      question: `Le bloc « mettre score à 0 » remplace la valeur précédente de la variable score.`,
      answer: true,
      explanation: `Vrai : « mettre à » affecte une nouvelle valeur et écrase l'ancienne, quel qu'ait été le contenu de la variable.`,
    },
    {
      id: `mch15-q10`,
      type: `relier`,
      difficulty: `medium`,
      question: `Relie chaque bloc Scratch à son rôle.`,
      options: [
        `Répéter une tâche un nombre connu de fois`,
        `Faire un choix selon une condition`,
        `Mémoriser une valeur`,
        `Déplacer le lutin en ligne droite`,
      ],
      answer: {
        'Répéter 4 fois': `Répéter une tâche un nombre connu de fois`,
        'Si … alors': `Faire un choix selon une condition`,
        'Variable': `Mémoriser une valeur`,
        'Avancer de 10 pas': `Déplacer le lutin en ligne droite`,
      },
      explanation: `Boucle = répétition, condition = choix, variable = mémoire, mouvement = déplacement du lutin.`,
    },
    {
      id: `mch15-q11`,
      type: `ordonner`,
      difficulty: `medium`,
      question: `Remets dans l'ordre les instructions d'un script qui dessine un carré.`,
      options: [
        `Stylo en position d'écriture`,
        `Répéter 4 fois`,
        `Avancer de 100 pas`,
        `Tourner de 90 degrés`,
      ],
      answer: [0, 1, 2, 3],
      explanation: `On baisse d'abord le stylo, on ouvre la boucle « répéter 4 fois », puis à l'intérieur « avancer de 100 » et « tourner de 90° ».`,
    },
    {
      id: `mch15-q12`,
      type: `qcm`,
      difficulty: `medium`,
      question: `Le lutin est placé au centre. On exécute « aller à x : 30 y : -20 ». Où se trouve-t-il ?`,
      options: [
        `Au point (30 ; -20)`,
        `Au point (-20 ; 30)`,
        `Au point (0 ; 0)`,
        `Au point (30 ; 20)`,
      ],
      answer: `Au point (30 ; -20)`,
      explanation: `Le bloc « aller à x ; y » place directement le lutin aux coordonnées indiquées : x = 30 (vers la droite), y = -20 (vers le bas).`,
    },
    {
      id: `mch15-q13`,
      type: `qcm`,
      difficulty: `hard`,
      question: `On exécute : « mettre s à 0 », puis « répéter 3 fois [ajouter 2 à s] ». Que vaut s à la fin ?`,
      options: [`6`, `2`, `3`, `8`],
      answer: `6`,
      explanation: `s part de 0 ; on ajoute 2 trois fois : 0 → 2 → 4 → 6. Donc s = 6.`,
      mnemonic: `Déroule la boucle tour par tour : 2, puis 4, puis 6.`,
    },
    {
      id: `mch15-q14`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Script : « mettre n à 1 », puis « répéter 3 fois [ajouter n à n] ». Que vaut n à la fin ?`,
      options: [`8`, `6`, `4`, `7`],
      answer: `8`,
      explanation: `« Ajouter n à n » double n. n part de 1 : 1 → 2 → 4 → 8. Après 3 tours, n = 8.`,
      trap: `« Ajouter n à n » revient à doubler la variable, pas à ajouter 1.`,
    },
    {
      id: `mch15-q15`,
      type: `trous`,
      difficulty: `hard`,
      question: `Pour un hexagone régulier, on répète [6] fois et on tourne de [60] degrés.`,
      answer: [`6`, `60`],
      explanation: `Un hexagone a 6 côtés ; l'angle de rotation vaut 360 / 6 = 60°. On répète donc 6 fois « avancer puis tourner de 60° ».`,
    },
    {
      id: `mch15-q16`,
      type: `qcm`,
      difficulty: `hard`,
      question: `Script : « mettre age à 10 », puis « si age > 12 alors dire Ado sinon dire Enfant ». Que dit le lutin ?`,
      options: [`Enfant`, `Ado`, `Rien`, `Ado puis Enfant`],
      answer: `Enfant`,
      explanation: `La condition « age > 12 » est fausse (10 n'est pas supérieur à 12), donc le lutin exécute la branche « sinon » et dit « Enfant ».`,
      trap: `Quand la condition est fausse, c'est uniquement la branche « sinon » qui s'exécute.`,
    },
    {
      id: `mch15-q17`,
      type: `boolean`,
      difficulty: `hard`,
      question: `Une boucle « répéter indéfiniment » s'arrête toute seule après un certain nombre de tours.`,
      answer: false,
      explanation: `Faux : « répéter indéfiniment » tourne sans fin tant que le programme n'est pas arrêté. C'est « répéter n fois » qui s'arrête après n tours.`,
    },
    {
      id: `mch15-q18`,
      type: `brevet`,
      difficulty: `expert`,
      question: `Décris ce que dessine ce script et la figure obtenue : « stylo en position d'écriture ; répéter 4 fois [avancer de 80 pas ; tourner de 90 degrés] ».`,
      answer: `Le stylo est baissé, donc le lutin laisse une trace. La boucle se répète 4 fois : à chaque tour il avance de 80 (un côté tracé) puis tourne de 90°. Après 4 côtés égaux et 4 angles droits, le lutin revient à son point de départ : la figure obtenue est un carré de côté 80.`,
      explanation: `4 côtés égaux + rotation de 360/4 = 90° à chaque sommet = carré. Le total des rotations fait 4 × 90 = 360°, donc le lutin a fait un tour complet et revient à l'orientation initiale.`,
    },
    {
      id: `mch15-q19`,
      type: `qcm`,
      difficulty: `expert`,
      question: `Script : « mettre p à 1 », puis « répéter 4 fois [mettre p à p × 2] ». Que vaut p à la fin ?`,
      options: [`16`, `8`, `24`, `2`],
      answer: `16`,
      explanation: `À chaque tour, p est multiplié par 2. p part de 1 : 1 → 2 → 4 → 8 → 16. Après 4 tours, p = 16 (soit 2 puissance 4).`,
      mnemonic: `Doubler 4 fois de suite : 2, 4, 8, 16.`,
    },
    {
      id: `mch15-q20`,
      type: `personnage`,
      difficulty: `expert`,
      question: `Quel personnage a écrit, en 1843, ce qui est considéré comme le premier algorithme destiné à une machine ?`,
      options: [`Ada Lovelace`, `Al-Khwârizmî`, `Alan Turing`, `Charles Babbage`],
      answer: `Ada Lovelace`,
      explanation: `Ada Lovelace est souvent appelée la première programmeuse : son algorithme de 1843 était destiné à la machine analytique de Babbage. Al-Khwârizmî a donné son nom au mot « algorithme », et Turing a fondé l'informatique théorique en 1936.`,
    },
  ],
  anecdotes: [
    `Le mot « algorithme » vient du nom du mathématicien perse Al-Khwârizmî (vers 820), dont le nom latinisé en « Algoritmi » a fini par désigner toute méthode de calcul ordonnée.`,
    `Ada Lovelace, fille du poète Lord Byron, est considérée comme la première programmeuse de l'histoire : elle a écrit un algorithme en 1843, près d'un siècle avant le premier ordinateur électronique.`,
    `Scratch, créé par le MIT en 2007, doit son nom au « scratching » des DJ : l'idée est de mélanger et réassembler des blocs comme on mixe des morceaux de musique.`,
  ],
  pitfalls: `Déroule toujours le script pas à pas, dans l'ordre, en notant la valeur de chaque variable à chaque tour ; et pour un polygone régulier à n côtés, le lutin tourne de l'angle extérieur 360/n (90° pour un carré, 120° pour un triangle), pas de l'angle intérieur.`,
};
