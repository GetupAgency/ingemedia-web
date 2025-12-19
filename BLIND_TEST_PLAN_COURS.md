# 🎓 Plan de cours - Blind Test Musical

## 📋 Checklist de préparation

### Avant le cours
- [ ] Tester `blind-test-CORRECTION.html` dans le navigateur
- [ ] Vérifier que l'API Deezer fonctionne (connexion Internet)
- [ ] Installer Live Server dans VS Code (extension)
- [ ] Préparer un vidéoprojecteur/écran partagé
- [ ] Imprimer ou partager le fichier `BLIND_TEST_INDICES.md`
- [ ] Préparer des petits prix pour le tournoi final (optionnel) 🏆

### Matériel nécessaire
- Ordinateurs avec navigateur moderne (Chrome/Firefox/Edge)
- VS Code + Live Server extension
- Connexion Internet stable
- Haut-parleurs ou casques

---

## ⏱️ Déroulé du cours (2h)

### 🎬 Phase 1 : Introduction (15 min)

#### ✅ À faire
1. **Démo du jeu** (5 min)
   - Ouvrir `blind-test-CORRECTION.html` avec Live Server
   - Jouer 2-3 manches en direct
   - Montrer les différents genres musicaux
   - Ouvrir la console (F12) pour montrer les logs

2. **Présentation des objectifs** (5 min)
   ```
   Aujourd'hui vous allez apprendre à :
   - Utiliser des API externes (Deezer)
   - Manipuler l'audio en JavaScript
   - Gérer des timers et des événements
   - Créer un vrai jeu interactif !
   ```

3. **Distribution des fichiers** (5 min)
   - Partager `blind-test-ETUDIANT.html`
   - Ouvrir avec Live Server
   - Explorer rapidement la structure

#### 💬 Questions à poser
- "Qui utilise Spotify/Deezer ?"
- "Quelqu'un a déjà joué à un blind test ?"
- "Qu'est-ce qu'une API selon vous ?"

---

### 🔧 Phase 2 : Exploration du code (20 min)

#### ✅ À faire
1. **Structure HTML/CSS** (5 min)
   - Montrer les 3 écrans : start, game, end
   - Expliquer les classes CSS (`.show`, `.active`, `.playing`)
   - Montrer l'animation du vinyle

2. **Variables globales** (5 min)
   ```javascript
   let score = 0;              // Score du joueur
   let currentRound = 0;        // Manche actuelle
   let playlist = [];           // Liste des chansons
   let audioPlayer = new Audio(); // Lecteur audio
   ```

3. **L'API Deezer** (10 min)
   - Expliquer le concept d'API
   - Montrer une requête dans le navigateur :
     ```
     https://api.deezer.com/search?q=artist:"Taylor Swift"
     ```
   - Montrer la structure JSON de la réponse
   - Expliquer `fetch()`, `async/await`

#### 💡 Conseil
Faites un schéma au tableau du flux du jeu :
```
Choix genre → Fetch API → Shuffle → Jeu → Réponse → Next → Fin
```

---

### 💻 Phase 3 : Codage guidé (60 min)

#### 🟢 Session 1 - Les bases (20 min)

**Fonctions à compléter ensemble :**

1. **`startGame(genre)`** (5 min)
   ```javascript
   // Live coding au tableau
   // Expliquer querySelector, classList, style.display
   ```

2. **`updateUI()`** (5 min)
   ```javascript
   // Montrer comment mettre à jour plusieurs éléments
   // Expliquer textContent vs innerHTML
   ```

3. **`hideFeedback()`** (3 min)
   ```javascript
   // Simple exemple de manipulation de classes
   ```

4. **`handleKeyPress(event)`** (3 min)
   ```javascript
   // Expliquer event.key et les event listeners
   ```

5. **Test en direct** (4 min)
   - Ouvrir la console, tester les fonctions
   - `startGame('pop')` pour voir si ça marche

#### 🟡 Session 2 - Le gameplay (20 min)

**Fonctions à faire ensemble ou en autonomie guidée :**

5. **`showFeedback()`** (5 min)
   - Expliquer les conditions `if/else`
   - Montrer les template literals

6. **`initGame()`** (4 min)
   - Initialisation des variables
   - Enchaînement de fonctions

7. **`togglePlay()`** (6 min)
   - API Audio : `.play()`, `.pause()`, `.paused`
   - Animations CSS avec classList

8. **`skipSong()`** (5 min)
   - setTimeout pour les délais
   - Enchaînement d'actions

**⏸️ PAUSE (10 min)**

#### 🔴 Session 3 - Les défis (20 min)

**Travail plus autonome avec indices disponibles :**

9. **`loadNextSong()`** (7 min)
   - Logique conditionnelle complexe
   - Gestion du flow du jeu

10. **`startTimer()` / `stopTimer()`** (8 min)
    - setInterval et clearInterval
    - Décrémenter une variable
    - Conditions sur le timer

11. **`checkAnswer()`** (5 min)
    - Normalisation de chaînes
    - Comparaison flexible
    - Calcul des points

---

### 🧪 Phase 4 : Tests et debug (20 min)

#### ✅ À faire
1. **Tests individuels** (10 min)
   - Chaque étudiante teste son jeu
   - Vous circulez pour aider
   - Utilisation de la console pour déboguer

2. **Problèmes courants** (10 min)
   - Corriger les erreurs fréquentes
   - Montrer comment lire les erreurs dans la console
   - Partager les solutions

#### 🐛 Erreurs fréquentes à anticiper
```javascript
// ❌ Oubli de querySelector
feedback.textContent = '...'; // undefined

// ✅ Correction
const feedback = document.querySelector('#feedback');
feedback.textContent = '...';

// ❌ Oubli de .value
const answer = document.querySelector('#answerInput');

// ✅ Correction
const answer = document.querySelector('#answerInput').value;

// ❌ Timer qui continue
startTimer(); // Appelé plusieurs fois

// ✅ Correction
stopTimer(); // Arrêter l'ancien d'abord
startTimer();
```

---

### 🏆 Phase 5 : Tournoi final (15 min)

#### ✅ Format du tournoi

**Option 1 : Score individuel**
- Chaque étudiante joue une partie complète (10 manches)
- La meilleure score gagne
- Afficher les 3 meilleurs scores au tableau

**Option 2 : Battle en binôme**
- Par équipes de 2
- Élimination directe
- Finale devant toute la classe

**Option 3 : Speed run**
- Qui termine les 10 manches le plus vite ?
- Avec un minimum de 5 bonnes réponses

#### 🎁 Récompenses
- Meilleur score : "Expert Musical 🏆"
- Plus rapide : "Speed Master ⚡"
- Plus drôle : "Worst Guesser 😂"

---

### 📝 Phase 6 : Débrief et ouverture (10 min)

#### ✅ Questions de débrief
1. "Qu'est-ce qui était le plus difficile ?"
2. "Qu'avez-vous appris de nouveau ?"
3. "Quelles améliorations ajouteriez-vous ?"

#### 🚀 Ouvertures possibles
```
Ce projet est une base pour :
- Un quiz de culture générale
- Un jeu de rapidité
- Une app de karaoké
- Un memory musical
- Un Spotify-like simplifié
```

#### 📚 Devoirs (optionnel)
"Pour la semaine prochaine, ajoutez UNE fonctionnalité au jeu :"
- [ ] Système de vies (3 erreurs = game over)
- [ ] Sauvegarde du meilleur score (localStorage)
- [ ] Mode difficile (15 secondes au lieu de 30)
- [ ] Affichage de la pochette d'album
- [ ] Indices payants (-20 points)

---

## 🎯 Objectifs pédagogiques atteints

### Compétences techniques
- ✅ **API REST** : fetch(), async/await, JSON
- ✅ **DOM** : querySelector, classList, textContent
- ✅ **Événements** : onclick, onkeypress, addEventListener
- ✅ **Audio** : new Audio(), play(), pause()
- ✅ **Timers** : setInterval, setTimeout, clearInterval
- ✅ **Algorithmes** : Fisher-Yates shuffle
- ✅ **État** : Variables globales, gestion du state

### Compétences transversales
- ✅ **Debugging** : console.log, erreurs, devtools
- ✅ **Logique** : Conditions, boucles, flow
- ✅ **Autonomie** : Lire des indices, chercher des solutions
- ✅ **Créativité** : Personnalisation, améliorations

---

## 💡 Astuces pour l'enseignant

### Pour maintenir l'engagement
1. **Musique de fond** : Mettez des playlists pendant le codage
2. **Compétition amicale** : "Qui a fini en premier ?"
3. **Pauses régulières** : Toutes les 20 min
4. **Live coding** : Codez avec eux, pas juste au tableau
5. **Encouragements** : Célébrez chaque fonction qui marche !

### Pour gérer les différences de niveau

**Étudiantes en avance :**
- Proposer les défis bonus du fichier `INDICES.md`
- Les faire aider leurs camarades
- Leur demander d'améliorer le CSS

**Étudiantes en difficulté :**
- Donner les indices progressifs
- Les regrouper pour qu'elles s'entraident
- Commencer par les fonctions les plus simples
- Autoriser la copie de petits bouts de code

**Groupe hétérogène :**
- Binômes mixtes (avancée + débutante)
- Rotation : chacune code une fonction à tour de rôle
- Code review : une écrit, l'autre explique

---

## 📊 Évaluation (optionnelle)

### Grille d'évaluation sur 20 points

| Critère | Points | Détails |
|---------|--------|---------|
| **Fonctions de base** | 6 pts | startGame, updateUI, hideFeedback, handleKeyPress |
| **Gameplay** | 6 pts | showFeedback, initGame, togglePlay, skipSong, loadNextSong |
| **Fonctionnalités avancées** | 4 pts | checkAnswer, timers, endGame, restartGame |
| **Fetch API** | 2 pts | fetchPlaylist complète et fonctionnelle |
| **Code propre** | 1 pt | Indentation, commentaires, console.log |
| **Bonus créatif** | 1 pt | Amélioration personnelle |

### Barème de notation
- **16-20** : Excellent - Toutes les fonctions marchent
- **12-15** : Bien - La majorité des fonctions marchent
- **8-11** : Assez bien - Les fonctions de base marchent
- **4-7** : Passable - Quelques fonctions marchent
- **0-3** : Insuffisant - Presque rien ne marche

---

## 🔧 Dépannage technique

### Problème : Live Server ne fonctionne pas
**Solutions :**
1. Vérifier que l'extension est bien installée
2. Clic droit sur le fichier HTML > "Open with Live Server"
3. Alternative : `python -m http.server 8000`

### Problème : API Deezer bloquée
**Solutions :**
1. Vérifier la connexion Internet
2. Désactiver les bloqueurs de pub
3. Essayer un autre navigateur
4. Utiliser un VPN si l'école bloque Deezer

### Problème : Audio ne se joue pas
**Solutions :**
1. Vérifier que le son n'est pas coupé
2. Tester avec un casque
3. Vérifier les permissions du navigateur
4. Recharger la page

### Problème : Code ne fonctionne pas
**Solutions :**
1. Ouvrir la console (F12)
2. Lire les erreurs en rouge
3. Vérifier les `;` et les `{}`
4. Comparer avec la correction

---

## 📚 Ressources supplémentaires

### Pour aller plus loin
- **MDN Web Docs** : Documentation JavaScript complète
- **JavaScript.info** : Tutoriels détaillés
- **Deezer API Doc** : https://developers.deezer.com/api
- **Spotify API** : Pour un projet plus avancé

### Projets similaires à proposer
1. **Quiz de culture générale** (même principe)
2. **Memory musical** (retrouver les paires)
3. **Karaoké** (lyrics + sync)
4. **Jeu de rapidité** (cliquer au bon moment)
5. **Générateur de playlist** (algorithme de recommandation)

---

## ✅ Checklist post-cours

- [ ] Recueillir les retours des étudiantes
- [ ] Noter les difficultés rencontrées
- [ ] Envoyer les fichiers de correction
- [ ] Proposer les défis bonus
- [ ] Planifier un projet de suite (quiz, jeu, etc.)
- [ ] Célébrer les réussites ! 🎉

---

**Bon cours ! Vous allez assurer ! 🚀🎵**

*N'hésitez pas à adapter ce plan selon votre style d'enseignement et le niveau de vos étudiantes.*
