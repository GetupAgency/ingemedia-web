# 🎵 Blind Test Musical - Guide d'utilisation

## 🎯 Objectif pédagogique

Ce projet est un **blind test musical interactif** qui permet aux étudiantes d'apprendre :
- Les appels API asynchrones avec `fetch()`
- La manipulation du DOM (querySelector, classList, etc.)
- La gestion d'événements (click, keypress)
- L'API Audio HTML5
- Les timers (`setInterval`, `setTimeout`)
- La gestion d'état avec des variables globales
- Les conditions et boucles avancées

## 📁 Fichiers

### 1. `blind-test-ETUDIANT.html`
Version à compléter par les étudiantes. Contient :
- ✅ L'interface HTML/CSS complète
- ✅ La structure JavaScript de base
- ❌ Les fonctions sont à compléter (marquées TODO)

### 2. `blind-test-CORRECTION.html`
Version complète et fonctionnelle avec toutes les solutions.

## 🚀 Comment l'utiliser en cours

### Étape 1 : Présentation (10 min)
1. Ouvrez `blind-test-CORRECTION.html` dans le navigateur
2. Faites une démo du jeu fonctionnel
3. Jouez une manche pour montrer les fonctionnalités
4. Ouvrez la console (F12) pour montrer les logs

### Étape 2 : Exploration du code (15 min)
1. Ouvrez `blind-test-ETUDIANT.html` dans VS Code
2. Montrez la structure :
   - Variables globales (lignes ~260-270)
   - Configuration des genres (lignes ~280-290)
   - Les 13 fonctions à compléter
3. Expliquez l'API Deezer :
   ```
   https://api.deezer.com/search?q=artist:"nom_artiste"
   ```

### Étape 3 : Travail guidé (45 min)
Complétez les fonctions dans cet ordre :

#### 🟢 Niveau Facile (pour débuter)
1. **`startGame(genre)`** - Cacher/afficher des éléments
2. **`updateUI()`** - Mettre à jour l'affichage
3. **`hideFeedback()`** - Retirer des classes CSS
4. **`handleKeyPress(event)`** - Détecter la touche Entrée

#### 🟡 Niveau Moyen (concepts importants)
5. **`showFeedback(isCorrect, correctAnswer)`** - Conditions et DOM
6. **`initGame()`** - Initialiser les variables
7. **`togglePlay()`** - Audio et animations
8. **`skipSong()`** - Enchaîner les fonctions

#### 🔴 Niveau Avancé (challenge)
9. **`fetchPlaylist(genre)`** - Fetch API et boucles asynchrones
10. **`shufflePlaylist()`** - Algorithme de Fisher-Yates
11. **`loadNextSong()`** - Logique de jeu
12. **`checkAnswer()`** - Validation et comparaison de chaînes
13. **`startTimer()` / `stopTimer()`** - setInterval
14. **`endGame()`** - Calculs et messages conditionnels
15. **`restartGame()`** - Réinitialisation complète

### Étape 4 : Test et debug (20 min)
- Testez chaque fonction après l'avoir complétée
- Utilisez `console.log()` pour déboguer
- Comparez avec la correction en cas de blocage

## 🎮 Fonctionnalités du jeu

### Gameplay
- **4 genres musicaux** : Pop, Rap, Rock, Electro
- **10 manches** par partie
- **30 secondes** par chanson
- **Système de points** : Plus on répond vite, plus on gagne de points
- **Feedback visuel** : Vert (correct) / Rouge (incorrect)
- **Animation** : Vinyle qui tourne pendant la lecture

### Techniques
- **API Deezer** : Récupération de previews de 30 secondes
- **Recherche intelligente** : Par artiste avec encodage URI
- **Comparaison flexible** : Normalisation des chaînes (accents, casse, etc.)
- **Timer dynamique** : Décompte avec alerte visuelle
- **Score adaptatif** : Plus on répond vite, plus on gagne

## 📚 Concepts JavaScript abordés

### 1. Fetch API (Asynchrone)
```javascript
async function fetchPlaylist(genre) {
  const response = await fetch(url);
  const data = await response.json();
}
```

### 2. Manipulation du DOM
```javascript
document.querySelector('#element').classList.add('active');
element.textContent = 'Nouveau texte';
```

### 3. Audio HTML5
```javascript
let audio = new Audio();
audio.src = 'url.mp3';
audio.play();
audio.pause();
```

### 4. Timers
```javascript
let interval = setInterval(() => {
  // Code répété chaque seconde
}, 1000);

clearInterval(interval);
```

### 5. Event Listeners
```javascript
element.addEventListener('click', () => {
  // Action au clic
});
```

## 🎨 Personnalisation possible

### Idées d'amélioration pour aller plus loin :

1. **Difficultés** : Facile (60s), Normal (30s), Difficile (15s)
2. **Modes de jeu** :
   - Mode titre (deviner le titre de la chanson)
   - Mode année (deviner l'année de sortie)
   - Mode duo (jouer à deux)
3. **Système de vies** : 3 erreurs = game over
4. **Leaderboard** : Sauvegarder les meilleurs scores (localStorage)
5. **Indices** : Afficher la première lettre (coût : -20 points)
6. **Genres personnalisés** : Ajouter d'autres genres musicaux
7. **Mode multijoueur** : Via WebSocket ou Firebase

## 🐛 Problèmes courants

### ❌ Erreur CORS
**Problème** : Deezer bloque les requêtes depuis `file://`  
**Solution** : Ouvrir avec un serveur local (Live Server dans VS Code)

### ❌ Audio ne se joue pas
**Problème** : Certains navigateurs bloquent l'autoplay  
**Solution** : L'utilisateur doit cliquer sur "Jouer" (déjà géré)

### ❌ API ne répond pas
**Problème** : Limite de taux Deezer atteinte  
**Solution** : Attendre quelques minutes ou utiliser un VPN

## 💡 Conseils pour l'enseignant

### Pour rendre ça plus fun :
1. **Organisez un tournoi** : Les étudiantes jouent et le meilleur score gagne
2. **Mode challenge** : Qui peut finir le code en premier ?
3. **Thème personnalisé** : Adaptez les genres aux goûts de la classe
4. **Compétition par équipes** : Chaque équipe code et joue
5. **Live coding** : Codez ensemble au tableau/écran partagé

### Timing suggéré (2h de cours) :
- 10 min : Démo et présentation
- 15 min : Exploration du code
- 60 min : Codage guidé (avec pauses)
- 20 min : Tests et debug
- 15 min : Tournoi et débrief

## 🌟 Points forts pédagogiques

✅ **Projet concret et ludique** : Les étudiantes voient le résultat immédiat  
✅ **Progression graduelle** : Du facile au difficile  
✅ **Apprentissage actif** : Elles codent, testent, débuggent  
✅ **Concepts variés** : API, DOM, Audio, Timers, Algo  
✅ **Réutilisable** : Base pour d'autres projets (quiz, jeux, etc.)  

## 📞 Support

Si vous avez des questions ou souhaitez des améliorations :
- Consultez la console (F12) pour les logs
- Vérifiez la correction pour comparer
- Utilisez `console.log()` pour déboguer

---

**Bon cours ! 🎓🎵**
