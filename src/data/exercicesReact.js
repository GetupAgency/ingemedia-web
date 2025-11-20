export const exercicesReact = [
  {
    id: "react-01",
    titre: "Ton premier composant React (le Hello World qui compte)",
    type: "code-react",
    consigne: "Crée un composant fonctionnel 'Bienvenue' qui retourne un JSX contenant un h1 avec 'Bienvenue sur React' et un paragraphe expliquant pourquoi React est génial (selon ton imagination de débutant). Exporte ce composant avec 'export default'. N'oublie pas : en JSX, on retourne UN seul élément parent (utilise une div ou un fragment <> </> si besoin). C'est ton baptême React, savoure ce moment.",
    code_initial: "import React from 'react';\n\n// Crée ton composant Bienvenue ici\n\nexport default Bienvenue;",
    validation_attendue: {
      doit_contenir: [
        "function",
        "return",
        "<h1>",
        "export default"
      ]
    },
    difficulte: 1
  },
  {
    id: "react-02",
    titre: "Les props : passer des données comme un boss",
    type: "code-react",
    consigne: "Crée un composant 'Carte' qui accepte des props : nom, age, et technologie. Affiche ces infos dans un joli format (exemple : 'Je m'appelle [nom], j'ai [age] ans et j'apprends [technologie]'). Utilise ce composant 3 fois avec des données différentes dans App.jsx. Les props, c'est comme les arguments de fonction, mais pour les composants. C'est la base de la composition en React.",
    code_initial: "import React from 'react';\n\nfunction Carte(props) {\n  // Utilise props.nom, props.age, props.technologie\n  return (\n    <div>\n      {/* Affiche les infos ici */}\n    </div>\n  );\n}\n\nexport default Carte;\n\n// Dans App.jsx :\n// <Carte nom=\"Alice\" age={22} technologie=\"React\" />",
    validation_attendue: {
      doit_contenir: [
        "props",
        "{",
        "}"
      ]
    },
    difficulte: 2
  },
  {
    id: "react-03",
    titre: "useState : le compteur qui te fait comprendre l'état",
    type: "code-react",
    consigne: "Importe useState depuis React. Crée un état 'compteur' initialisé à 0 avec const [compteur, setCompteur] = useState(0). Affiche la valeur du compteur dans un h2. Crée deux boutons : un pour incrémenter (setCompteur(compteur + 1)) et un pour décrémenter. Empêche le compteur de descendre en dessous de 0 avec une condition. C'est LE concept fondamental de React : quand l'état change, le composant se re-rend automatiquement. Magie.",
    code_initial: "import React, { useState } from 'react';\n\nfunction Compteur() {\n  // Crée ton état ici\n  \n  return (\n    <div>\n      {/* Affiche compteur et boutons */}\n    </div>\n  );\n}\n\nexport default Compteur;",
    validation_attendue: {
      doit_contenir: [
        "useState",
        "const",
        "onClick"
      ]
    },
    difficulte: 2
  },
  {
    id: "react-04",
    titre: "Gérer un input contrôlé (le formulaire React)",
    type: "code-react",
    consigne: "Crée un état 'nom' avec useState(''). Crée un input dont la value est liée à l'état nom et dont le onChange met à jour l'état avec setNom(e.target.value). En dessous, affiche en temps réel 'Bonjour [nom] !' dans un paragraphe. C'est un 'controlled component' : React contrôle la valeur de l'input via l'état. C'est différent du JavaScript vanilla et c'est très puissant.",
    code_initial: "import React, { useState } from 'react';\n\nfunction FormulaireNom() {\n  // État pour le nom\n  \n  return (\n    <div>\n      <input \n        type=\"text\" \n        value={/* ton état */} \n        onChange={/* fonction pour mettre à jour l'état */}\n        placeholder=\"Votre nom\"\n      />\n      {/* Affiche le message de bienvenue */}\n    </div>\n  );\n}\n\nexport default FormulaireNom;",
    validation_attendue: {
      doit_contenir: [
        "useState",
        "value=",
        "onChange=",
        "e.target.value"
      ]
    },
    difficulte: 2
  },
  {
    id: "react-05",
    titre: "Afficher une liste avec .map() (le pouvoir des arrays)",
    type: "code-react",
    consigne: "Crée un array 'technologies' avec 5 noms de technos (['React', 'JavaScript', 'CSS', 'HTML', 'Node.js']). Utilise .map() pour créer un <li> pour chaque élément. N'oublie pas d'ajouter une prop 'key' unique sur chaque <li> (utilise l'index ou la valeur). Affiche cette liste dans un <ul>. Le .map() en JSX, c'est ce qui rend les listes dynamiques possibles. Tu vas l'utiliser partout.",
    code_initial: "import React from 'react';\n\nfunction ListeTechnologies() {\n  const technologies = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js'];\n  \n  return (\n    <ul>\n      {technologies.map((tech, index) => (\n        // Crée ton <li> ici avec key\n      ))}\n    </ul>\n  );\n}\n\nexport default ListeTechnologies;",
    validation_attendue: {
      doit_contenir: [
        ".map",
        "key=",
        "<li>"
      ]
    },
    difficulte: 3
  },
  {
    id: "react-06",
    titre: "Affichage conditionnel (le if de React)",
    type: "code-react",
    consigne: "Crée un état booléen 'estConnecte' avec useState (false par défaut). Affiche 'Bienvenue utilisateur !' si estConnecte est true, sinon affiche 'Veuillez vous connecter'. Utilise l'opérateur ternaire : {estConnecte ? <p>Bienvenue</p> : <p>Connectez-vous</p>}. Ajoute un bouton qui toggle l'état (setEstConnecte(!estConnecte)). C'est l'affichage conditionnel, essentiel pour les interfaces qui changent selon l'état.",
    code_initial: "import React, { useState } from 'react';\n\nfunction EtatConnexion() {\n  // État booléen estConnecte\n  \n  return (\n    <div>\n      {/* Affichage conditionnel */}\n      {/* Bouton pour toggle */}\n    </div>\n  );\n}\n\nexport default EtatConnexion;",
    validation_attendue: {
      doit_contenir: [
        "useState",
        "?",
        ":",
        "onClick"
      ]
    },
    difficulte: 3
  },
  {
    id: "react-07",
    titre: "useEffect : l'effet de bord (comprendre le cycle de vie)",
    type: "code-react",
    consigne: "Importe useEffect depuis React. Utilise useEffect(() => { console.log('Composant monté !'); }, []) pour afficher un message dans la console quand le composant est monté. Le tableau vide [] signifie 'exécute une seule fois au montage'. Ensuite, crée un état 'compteur' et ajoute un useEffect avec [compteur] en dépendance qui affiche 'Compteur a changé : [valeur]' dans la console à chaque changement. useEffect, c'est pour les effets de bord : API calls, subscriptions, logs, etc.",
    code_initial: "import React, { useState, useEffect } from 'react';\n\nfunction EffetDeBord() {\n  // État compteur\n  \n  // useEffect au montage\n  \n  // useEffect qui surveille le compteur\n  \n  return (\n    <div>\n      <h2>Compteur : {/* affiche compteur */}</h2>\n      <button onClick={/* incrémente */}>+</button>\n    </div>\n  );\n}\n\nexport default EffetDeBord;",
    validation_attendue: {
      doit_contenir: [
        "useEffect",
        "[]",
        "console.log"
      ]
    },
    difficulte: 3
  },
  {
    id: "react-08",
    titre: "Composants réutilisables : la Card universelle",
    type: "code-react",
    consigne: "Crée un composant 'Card' qui accepte des props : titre, description, et imageSrc. Stylise-le avec du CSS (inline style ou classe). Utilise ce composant 3 fois avec des données différentes dans App.jsx pour créer une grille de 3 cards (utilise Flexbox ou Grid dans ton CSS). C'est la philosophie React : créer des composants réutilisables. Cette Card pourrait être utilisée partout dans une vraie app.",
    code_initial: "import React from 'react';\n\nfunction Card({ titre, description, imageSrc }) {\n  return (\n    <div className=\"card\">\n      {/* Affiche image, titre, description */}\n    </div>\n  );\n}\n\nexport default Card;\n\n// CSS suggéré :\n// .card { padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }",
    validation_attendue: {
      doit_contenir: [
        "props",
        "<img",
        "<h3>",
        "<p>"
      ]
    },
    difficulte: 4
  },
  {
    id: "react-09",
    titre: "Formulaire avec plusieurs inputs (multi-state)",
    type: "code-react",
    consigne: "Crée un formulaire avec 3 inputs contrôlés : nom, email, message. Chaque input a son propre état (useState pour chacun). À la soumission du formulaire (onSubmit), empêche le comportement par défaut (e.preventDefault()), puis affiche les valeurs dans la console. Bonus : affiche un message de confirmation en dessous du formulaire après soumission. C'est la gestion de formulaires en React, base de toute interaction utilisateur.",
    code_initial: "import React, { useState } from 'react';\n\nfunction FormulaireContact() {\n  // États pour nom, email, message\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    // Affiche les valeurs\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      {/* Inputs contrôlés */}\n      <button type=\"submit\">Envoyer</button>\n    </form>\n  );\n}\n\nexport default FormulaireContact;",
    validation_attendue: {
      doit_contenir: [
        "useState",
        "onSubmit",
        "preventDefault",
        "value=",
        "onChange="
      ]
    },
    difficulte: 4
  },
  {
    id: "react-10",
    titre: "Todo App : le projet final React (ton chef-d'œuvre)",
    type: "code-react",
    consigne: "Crée une Todo App complète. État : un array de todos (chaque todo est un objet avec id, texte, complété). Fonctionnalités : ajouter un todo (input + bouton), afficher la liste (.map()), marquer comme complété (toggle avec onClick), supprimer un todo. Utilise useState pour l'état, des fonctions pour chaque action, du CSS pour styliser (barre les todos complétés). C'est LE projet classique pour comprendre React : gestion d'état, listes, événements, tout y est. Prends ton temps, peaufine, rends-le beau. C'est ton portfolio piece.",
    code_initial: "import React, { useState } from 'react';\n\nfunction TodoApp() {\n  // État : array de todos\n  // État : input pour nouveau todo\n  \n  // Fonction : ajouter un todo\n  \n  // Fonction : toggle complétion\n  \n  // Fonction : supprimer un todo\n  \n  return (\n    <div className=\"todo-app\">\n      <h1>Ma Todo App</h1>\n      \n      {/* Formulaire d'ajout */}\n      <div>\n        <input /* ... */ />\n        <button /* ... */>Ajouter</button>\n      </div>\n      \n      {/* Liste des todos */}\n      <ul>\n        {/* .map() sur les todos */}\n      </ul>\n    </div>\n  );\n}\n\nexport default TodoApp;\n\n// Structure todo : { id: Date.now(), texte: '...', complete: false }",
    validation_attendue: {
      doit_contenir: [
        "useState",
        ".map",
        "onClick",
        "filter"
      ]
    },
    difficulte: 5
  }
];

