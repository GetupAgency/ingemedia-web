# 🆘 Blind Test - Indices et Aide

## Guide d'aide progressif pour débloquer les étudiantes

Pour chaque fonction, 3 niveaux d'aide :
- 💡 **Indice léger** : Direction générale
- 🔍 **Indice moyen** : Structure du code
- ✅ **Solution complète** : Code complet

---

## 1️⃣ `startGame(genre)`

### 💡 Indice léger
Tu dois cacher l'écran de démarrage, afficher le loading, et lancer le chargement de la playlist.

### 🔍 Indice moyen
```javascript
// 1. Enregistrer le genre
selectedGenre = genre;

// 2. Cacher l'écran de démarrage
document.querySelector('#startScreen').style.display = 'none';

// 3. Afficher le loading (ajoute la classe 'show')

// 4. Appeler fetchPlaylist(genre)
```

### ✅ Solution
```javascript
function startGame(genre) {
  selectedGenre = genre;
  document.querySelector('#startScreen').style.display = 'none';
  document.querySelector('#loading').classList.add('show');
  fetchPlaylist(genre);
  console.log('🎮 Démarrage du jeu - Genre:', genre);
}
```

---

## 2️⃣ `fetchPlaylist(genre)`

### 💡 Indice léger
Utilise une boucle `for` pour parcourir les artistes, fais un `fetch()` pour chacun, et ajoute les résultats à `playlist`.

### 🔍 Indice moyen
```javascript
async function fetchPlaylist(genre) {
  try {
    playlist = [];
    const artists = genreArtists[genre];
    
    // Boucle sur tous les artistes
    for (let i = 0; i < artists.length; i++) {
      const artistName = artists[i];
      
      // Construire l'URL
      const url = `https://api.deezer.com/search?q=artist:"${encodeURIComponent(artistName)}"`;
      
      // Faire le fetch
      const response = await fetch(url);
      const data = await response.json();
      
      // Récupérer le premier résultat
      if (data.data && data.data.length > 0) {
        const track = data.data[0];
        
        // Ajouter à la playlist
        playlist.push({
          title: track.title,
          artist: track.artist.name,
          preview: track.preview,
          cover: track.album.cover_big
        });
      }
    }
    
    // Mélanger et initialiser
    shufflePlaylist();
    initGame();
    
  } catch (error) {
    console.error('Erreur:', error);
    alert('❌ Erreur de chargement');
  }
}
```

---

## 3️⃣ `shufflePlaylist()`

### 💡 Indice léger
Utilise l'algorithme de Fisher-Yates : parcours le tableau de la fin vers le début, échange chaque élément avec un élément aléatoire.

### 🔍 Indice moyen
```javascript
function shufflePlaylist() {
  for (let i = playlist.length - 1; i > 0; i--) {
    // Générer un index aléatoire entre 0 et i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Échanger playlist[i] et playlist[j]
    // Utilise la destructuration : [a, b] = [b, a]
  }
}
```

### ✅ Solution
```javascript
function shufflePlaylist() {
  for (let i = playlist.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
  }
  console.log('🔀 Playlist mélangée');
}
```

---

## 4️⃣ `initGame()`

### 💡 Indice léger
Réinitialise les variables, cache le loading, affiche l'écran de jeu, et charge la première chanson.

### 🔍 Indice moyen
```javascript
function initGame() {
  score = 0;
  currentRound = 0;
  
  // Cacher le loading (retire la classe 'show')
  
  // Afficher l'écran de jeu (ajoute la classe 'active')
  
  // Charger la première chanson
  loadNextSong();
}
```

### ✅ Solution
```javascript
function initGame() {
  score = 0;
  currentRound = 0;
  document.querySelector('#loading').classList.remove('show');
  document.querySelector('#gameScreen').classList.add('active');
  loadNextSong();
  console.log('🎮 Jeu initialisé !');
}
```

---

## 5️⃣ `loadNextSong()`

### 💡 Indice léger
Vérifie qu'il reste des chansons, récupère la chanson actuelle, charge l'audio, met à jour l'interface.

### 🔍 Indice moyen
```javascript
function loadNextSong() {
  if (currentRound < totalRounds && currentRound < playlist.length) {
    // Récupérer la chanson
    currentSong = playlist[currentRound];
    
    // Charger l'audio
    audioPlayer.src = currentSong.preview;
    audioPlayer.load();
    
    // Mettre à jour l'interface
    updateUI();
    hideFeedback();
    
    // Incrémenter le round
    currentRound++;
    
    // Mettre à jour l'affichage du round
    document.querySelector('#roundDisplay').textContent = `${currentRound}/${totalRounds}`;
    
  } else {
    // Terminer le jeu
    endGame();
  }
}
```

---

## 6️⃣ `togglePlay()`

### 💡 Indice léger
Vérifie si l'audio est en pause. Si oui, lance la lecture et le timer. Sinon, met en pause.

### 🔍 Indice moyen
```javascript
function togglePlay() {
  const vinyl = document.querySelector('#vinyl');
  const playBtn = document.querySelector('#playBtn');
  
  if (audioPlayer.paused) {
    // Lancer la lecture
    audioPlayer.play();
    vinyl.classList.add('playing');
    playBtn.textContent = '⏸️ Pause';
    startTimer();
  } else {
    // Mettre en pause
    audioPlayer.pause();
    vinyl.classList.remove('playing');
    playBtn.textContent = '▶️ Jouer';
    stopTimer();
  }
}
```

---

## 7️⃣ `startTimer()` et `stopTimer()`

### 💡 Indice léger
Utilise `setInterval()` pour décrémenter `timer` chaque seconde. Quand timer = 0, passe à la chanson suivante.

### 🔍 Indice moyen
```javascript
function startTimer() {
  timer = 30;
  stopTimer(); // Arrêter l'ancien timer
  
  timerInterval = setInterval(() => {
    timer--;
    
    // Mettre à jour l'affichage
    document.querySelector('#timerDisplay').textContent = timer;
    
    // Si timer <= 10, ajouter la classe 'warning'
    
    // Si timer = 0, arrêter et passer à la suivante
    if (timer <= 0) {
      stopTimer();
      audioPlayer.pause();
      showFeedback(false, currentSong.artist);
      setTimeout(() => loadNextSong(), 2500);
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}
```

---

## 8️⃣ `checkAnswer()`

### 💡 Indice léger
Récupère la réponse de l'utilisateur, nettoie-la, compare avec l'artiste actuel, affiche le feedback, met à jour le score.

### 🔍 Indice moyen
```javascript
function checkAnswer() {
  const userAnswer = document.querySelector('#answerInput').value;
  
  if (!userAnswer.trim()) {
    alert('⚠️ Entre une réponse !');
    return;
  }
  
  // Normaliser les réponses
  const normalizedUser = normalizeString(userAnswer);
  const normalizedCorrect = normalizeString(currentSong.artist);
  
  // Comparer (égalité ou inclusion)
  const isCorrect = normalizedUser === normalizedCorrect || 
                    normalizedCorrect.includes(normalizedUser);
  
  // Arrêter la musique
  audioPlayer.pause();
  document.querySelector('#vinyl').classList.remove('playing');
  stopTimer();
  
  if (isCorrect) {
    // Ajouter des points
    const points = Math.max(50, timer * 3);
    score += points;
    showFeedback(true);
  } else {
    showFeedback(false, currentSong.artist);
  }
  
  // Mettre à jour le score
  document.querySelector('#scoreDisplay').textContent = score;
  
  // Passer à la suivante après 2.5s
  setTimeout(() => loadNextSong(), 2500);
}
```

---

## 9️⃣ `showFeedback()` et `hideFeedback()`

### 💡 Indice léger
Change le texte et les classes CSS du feedback selon si c'est correct ou non.

### 🔍 Indice moyen
```javascript
function showFeedback(isCorrect, correctAnswer = '') {
  const feedback = document.querySelector('#feedback');
  
  if (isCorrect) {
    feedback.textContent = '🎉 Bravo ! Bonne réponse !';
    feedback.className = 'feedback correct show';
  } else {
    feedback.textContent = `❌ Raté ! C'était ${correctAnswer}`;
    feedback.className = 'feedback wrong show';
  }
}

function hideFeedback() {
  const feedback = document.querySelector('#feedback');
  feedback.classList.remove('show', 'correct', 'wrong');
}
```

---

## 🔟 `skipSong()`

### 💡 Indice léger
Arrête la musique, affiche le feedback avec la bonne réponse, passe à la chanson suivante après 2.5s.

### ✅ Solution
```javascript
function skipSong() {
  audioPlayer.pause();
  document.querySelector('#vinyl').classList.remove('playing');
  stopTimer();
  showFeedback(false, currentSong.artist);
  console.log('⏭️ Chanson passée');
  setTimeout(() => loadNextSong(), 2500);
}
```

---

## 1️⃣1️⃣ `updateUI()`

### 💡 Indice léger
Met à jour tous les affichages : score, round, timer, input vide.

### ✅ Solution
```javascript
function updateUI() {
  document.querySelector('#scoreDisplay').textContent = score;
  document.querySelector('#roundDisplay').textContent = `${currentRound + 1}/${totalRounds}`;
  timer = 30;
  document.querySelector('#timerDisplay').textContent = timer;
  document.querySelector('#timerDisplay').classList.remove('warning');
  document.querySelector('#answerInput').value = '';
  document.querySelector('#playBtn').textContent = '▶️ Jouer';
  document.querySelector('#vinyl').classList.remove('playing');
}
```

---

## 1️⃣2️⃣ `endGame()`

### 💡 Indice léger
Cache l'écran de jeu, affiche l'écran de fin avec le score et un message selon le score.

### 🔍 Indice moyen
```javascript
function endGame() {
  document.querySelector('#gameScreen').classList.remove('active');
  document.querySelector('#endScreen').classList.add('active');
  document.querySelector('#finalScore').textContent = score;
  
  // Calculer le pourcentage de réussite
  const maxScore = totalRounds * 90;
  const percentage = (score / maxScore) * 100;
  
  // Message selon le score
  let message = '';
  if (percentage >= 80) {
    message = '🏆 Incroyable ! Tu es un expert !';
  } else if (percentage >= 60) {
    message = '🎵 Très bien ! Belle performance !';
  } else if (percentage >= 40) {
    message = '👍 Pas mal ! Continue comme ça !';
  } else {
    message = '🎧 C\'est un début ! Réessaye !';
  }
  
  document.querySelector('#finalMessage').textContent = message;
}
```

---

## 1️⃣3️⃣ `restartGame()`

### 💡 Indice léger
Réinitialise toutes les variables, arrête la musique et le timer, affiche l'écran de démarrage.

### ✅ Solution
```javascript
function restartGame() {
  score = 0;
  currentRound = 0;
  timer = 30;
  currentSong = null;
  playlist = [];
  
  audioPlayer.pause();
  audioPlayer.src = '';
  stopTimer();
  
  document.querySelector('#endScreen').classList.remove('active');
  document.querySelector('#gameScreen').classList.remove('active');
  document.querySelector('#loading').classList.remove('show');
  document.querySelector('#startScreen').style.display = 'block';
  document.querySelector('#vinyl').classList.remove('playing');
  
  console.log('🔄 Jeu réinitialisé');
}
```

---

## 1️⃣4️⃣ `handleKeyPress(event)`

### 💡 Indice léger
Vérifie si la touche pressée est 'Enter', et si oui, appelle `checkAnswer()`.

### ✅ Solution
```javascript
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    checkAnswer();
  }
}
```

---

## 🎯 Ordre recommandé de complétion

### Phase 1 - Les bases (30 min)
1. `startGame()` - Simple affichage/masquage
2. `updateUI()` - Mise à jour de l'interface
3. `hideFeedback()` - Retirer des classes
4. `handleKeyPress()` - Event listener simple

### Phase 2 - Le cœur du jeu (45 min)
5. `showFeedback()` - Conditions et DOM
6. `initGame()` - Initialisation
7. `togglePlay()` - Audio et animations
8. `skipSong()` - Enchaînement de fonctions
9. `loadNextSong()` - Logique de jeu

### Phase 3 - Les défis (45 min)
10. `startTimer()` / `stopTimer()` - setInterval
11. `checkAnswer()` - Validation complexe
12. `endGame()` - Calculs et messages
13. `restartGame()` - Réinitialisation complète
14. `fetchPlaylist()` - Fetch API asynchrone
15. `shufflePlaylist()` - Algorithme

---

## 🐛 Problèmes fréquents et solutions

### Problème : "Cannot read property of undefined"
**Solution** : Vérifie que tu as bien récupéré l'élément avec `querySelector()`

### Problème : La musique ne se lance pas
**Solution** : Vérifie que tu appelles bien `audioPlayer.play()` et pas `audio.play()`

### Problème : Le timer ne s'arrête pas
**Solution** : Pense à appeler `stopTimer()` avant de lancer un nouveau timer

### Problème : La comparaison ne fonctionne pas
**Solution** : Utilise `normalizeString()` pour nettoyer les chaînes avant de comparer

### Problème : L'API Deezer ne répond pas
**Solution** : Vérifie que tu utilises bien Live Server (pas file://)

---

## 💪 Défis bonus

Une fois le jeu fonctionnel, proposez ces améliorations :

1. **Afficher la pochette de l'album** pendant la lecture
2. **Ajouter un système de vies** (3 erreurs = game over)
3. **Sauvegarder le meilleur score** avec localStorage
4. **Ajouter un mode difficile** avec seulement 15 secondes
5. **Créer un mode "titre"** où il faut deviner le titre de la chanson
6. **Ajouter des indices payants** (-20 points pour afficher la première lettre)
7. **Créer un leaderboard** avec les 10 meilleurs scores

---

**Bon courage ! 🚀🎵**
