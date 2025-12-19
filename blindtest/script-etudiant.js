// ============================================
// BLIND TEST MUSICAL - VERSION ÉTUDIANTS
// ============================================
// Complétez les fonctions marquées avec TODO
// Les instructions sont dans les commentaires
// ============================================

// ============================================
// VARIABLES GLOBALES (Déjà fournies)
// ============================================
let score = 0;
let currentRound = 0;
let totalRounds = 10;
let timer = 30;
let timerInterval = null;
let currentSong = null;
let playlist = [];
let audioPlayer = new Audio();
let selectedGenre = '';

// Base de données des artistes par genre
const topArtists = {
  'pop': ['Taylor Swift', 'Ed Sheeran', 'Ariana Grande', 'Dua Lipa', 'The Weeknd'],
  'rock': ['Queen', 'The Beatles', 'Nirvana', 'Foo Fighters', 'Arctic Monkeys'],
  'hip-hop': ['Drake', 'Kendrick Lamar', 'Post Malone', 'Travis Scott', 'Eminem'],
  'electronic': ['Daft Punk', 'Calvin Harris', 'David Guetta', 'Avicii', 'Kygo']
};

// ============================================
// FONCTION 1 : Démarrer le jeu
// ============================================
// Cette fonction est appelée quand l'utilisateur clique sur un genre
function startGame(genre) {
    // TODO 1.1 : Stocker le genre sélectionné dans la variable selectedGenre
  selectedGenre = genre;

  // TODO 1.2 : Cacher l'écran de démarrage (id: startScreen)
  // Indice : utilisez style.display = 'none'
  document.querySelector('#startScreen').style.display = 'none';
  document.querySelector('#loading').classList.add('show');
  fetchPlaylist(genre);
  console.log('Démarrage - Genre:', genre);

  
  // TODO 1.3 : Afficher l'écran de chargement (id: loading)
  // Indice : ajoutez la classe 'show' avec classList.add()
  
  
  // TODO 1.4 : Appeler la fonction fetchPlaylist avec le genre
  
  
  console.log('Démarrage - Genre:', genre);
}

// ============================================
// FONCTION 2 : Récupérer la playlist depuis iTunes
// ============================================
// Cette fonction charge les musiques depuis l'API iTunes
async function fetchPlaylist(genre) {
  try {
    // Réinitialiser la playlist
    playlist = [];
    
    // Récupérer la liste des artistes pour ce genre
    const artists = topArtists[genre];
    
    console.log('Recherche de', artists.length, 'artistes sur iTunes...');
    
    // Boucle sur chaque artiste
    for (let i = 0; i < artists.length; i++) {
      const artist = artists[i];
      
      try {
        // URL de l'API iTunes
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(artist)}&media=music&entity=song&limit=1`;
        
        // TODO 2.1 : Faire un appel fetch à l'API iTunes
        // Indice : const response = await fetch(url);
        
        
        // TODO 2.2 : Convertir la réponse en JSON
        // Indice : const data = await response.json();
        
        
        // Vérifier si on a des résultats
        if (data.results && data.results.length > 0) {
          const track = data.results[0];
          
          // TODO 2.3 : Vérifier si la chanson a un previewUrl
          if (track.previewUrl) {
            // TODO 2.4 : Ajouter la chanson à la playlist
            // La chanson doit être un objet avec : title, artist, preview, cover
            // Indice : playlist.push({ ... })
            playlist.push({
              title: track.trackName,
              artist: track.artistName,
              preview: track.previewUrl,
              cover: track.artworkUrl100.replace('100x100', '600x600')
            });
            
            console.log(`${i + 1}/${artists.length} - ${track.artistName} - ${track.trackName}`);
          }
        }
      } catch (error) {
        console.error(`Erreur pour ${artist}:`, error);
      }
    }
    
    // Vérifier qu'on a au moins des chansons
    if (playlist.length === 0) {
      alert('Impossible de charger les musiques. Réessayez.');
      restartGame();
      return;
    }
    
    console.log('Playlist chargée:', playlist.length, 'chansons');
    
    // TODO 2.5 : Appeler la fonction shufflePlaylist()
    
    
    // TODO 2.6 : Appeler la fonction initGame()
    
    
  } catch (error) {
    console.error('Erreur:', error);
    alert('Erreur de chargement. Réessayez.');
    restartGame();
  }
}

// ============================================
// FONCTION 3 : Mélanger la playlist
// ============================================
// Algorithme de Fisher-Yates pour mélanger un tableau
function shufflePlaylist() {
  // TODO 3.1 : Compléter la boucle pour mélanger la playlist
  // Indice : Boucle de i = playlist.length - 1 jusqu'à i > 0
  for (let i = playlist.length - 1; i > 0; i--) {
    // Générer un index aléatoire entre 0 et i
    const j = Math.floor(Math.random() * (i + 1));
    
    // TODO 3.2 : Échanger les éléments i et j
    // Indice : utilisez la déstructuration [a, b] = [b, a]
    
  }
  console.log('Playlist mélangée');
}

// ============================================
// FONCTION 4 : Initialiser le jeu
// ============================================
function initGame() {
  // TODO 4.1 : Réinitialiser le score à 0
  
  
  // TODO 4.2 : Réinitialiser currentRound à 0
  
  
  // TODO 4.3 : Cacher l'écran de chargement
  // Indice : retirez la classe 'show' avec classList.remove()
  
  
  // TODO 4.4 : Afficher l'écran de jeu (id: gameScreen)
  // Indice : ajoutez la classe 'active'
  
  
  // TODO 4.5 : Charger la première chanson
  // Indice : appelez la fonction loadNextSong()
  
  
  console.log('Jeu initialisé');
}

// ============================================
// FONCTION 5 : Charger la chanson suivante
// ============================================
function loadNextSong() {
  // TODO 5.1 : Vérifier qu'il reste des manches à jouer
  // Condition : currentRound < totalRounds ET currentRound < playlist.length
  if (currentRound < totalRounds && currentRound < playlist.length) {
    
    // TODO 5.2 : Récupérer la chanson actuelle depuis la playlist
    // Indice : currentSong = playlist[currentRound]
    
    
    // TODO 5.3 : Charger l'audio dans audioPlayer
    // Indice : audioPlayer.src = ... puis audioPlayer.load()
    
    
    // TODO 5.4 : Mettre à jour l'image de la pochette
    // Indice : document.querySelector('#albumCover img').src = ...
    
    
    // Mettre à jour l'interface
    updateUI();
    hideFeedback();
    
    // TODO 5.5 : Incrémenter currentRound de 1
    
    
    // TODO 5.6 : Mettre à jour l'affichage du numéro de manche
    // Indice : document.querySelector('#roundDisplay').textContent = ...
    
    
    console.log(`Chanson ${currentRound}/${totalRounds}:`, currentSong.title);
  } else {
    // Plus de chansons, fin du jeu
    endGame();
  }
}

// ============================================
// FONCTION 6 : Jouer/Pause la musique
// ============================================
function togglePlay() {
  const playBtn = document.querySelector('#playBtn');
  
  // TODO 6.1 : Vérifier si l'audio est en pause
  if (audioPlayer.paused) {
    // TODO 6.2 : Lancer la lecture
    // Indice : audioPlayer.play()
    
    
    // TODO 6.3 : Changer le texte du bouton en "Pause"
    
    
    // TODO 6.4 : Démarrer le timer
    // Indice : appelez startTimer()
    
    
    console.log('Lecture');
  } else {
    // TODO 6.5 : Mettre en pause
    
    
    // TODO 6.6 : Changer le texte du bouton en "Jouer"
    
    
    // TODO 6.7 : Arrêter le timer
    
    
    console.log('Pause');
  }
}

// ============================================
// FONCTION 7 : Gérer le timer
// ============================================
function startTimer() {
  timer = 30;
  stopTimer(); // Arrêter le timer précédent s'il existe
  
  // TODO 7.1 : Créer un intervalle qui s'exécute toutes les 1000ms (1 seconde)
  timerInterval = setInterval(() => {
    // TODO 7.2 : Décrémenter le timer de 1
    
    
    // Récupérer l'élément d'affichage du timer
    const timerDisplay = document.querySelector('#timerDisplay');
    
    // TODO 7.3 : Mettre à jour l'affichage du timer
    
    
    // TODO 7.4 : Si le timer est <= 10, ajouter la classe 'warning'
    if (timer <= 10) {
      
    } else {
      timerDisplay.classList.remove('warning');
    }
    
    // TODO 7.5 : Si le timer est <= 0, temps écoulé !
    if (timer <= 0) {
      // Arrêter tout
      stopTimer();
      audioPlayer.pause();
      
      // Afficher la mauvaise réponse
      showFeedback(false, currentSong.artist);
      
      // Passer à la chanson suivante après 2.5 secondes
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

// ============================================
// FONCTION 8 : Vérifier la réponse
// ============================================
function checkAnswer() {
  // TODO 8.1 : Récupérer la valeur de l'input (id: answerInput)
  const userAnswer = document.querySelector('#answerInput').value;
  
  // TODO 8.2 : Vérifier que l'utilisateur a bien entré quelque chose
  if (!userAnswer.trim()) {
    alert('Entrez une réponse');
    return;
  }
  
  // Normaliser les réponses (enlever accents, majuscules, etc.)
  const normalizedUser = normalizeString(userAnswer);
  const normalizedCorrect = normalizeString(currentSong.artist);
  
  // TODO 8.3 : Comparer les réponses
  // La réponse est correcte si :
  // - normalizedUser === normalizedCorrect OU
  // - normalizedCorrect contient normalizedUser OU
  // - normalizedUser contient normalizedCorrect
  const isCorrect = normalizedUser === normalizedCorrect || 
                    normalizedCorrect.includes(normalizedUser) ||
                    normalizedUser.includes(normalizedCorrect);
  
  // Arrêter la musique et le timer
  audioPlayer.pause();
  stopTimer();
  
  // TODO 8.4 : Si la réponse est correcte
  if (isCorrect) {
    // TODO 8.5 : Calculer les points (minimum 50, ou timer * 3)
    const points = Math.max(50, timer * 3);
    
    // TODO 8.6 : Ajouter les points au score
    
    
    // Afficher le feedback positif
    showFeedback(true);
    console.log(`Bonne réponse ! +${points} points`);
  } else {
    // TODO 8.7 : Afficher le feedback négatif
    
    
    console.log('Mauvaise réponse');
  }
  
  // TODO 8.8 : Mettre à jour l'affichage du score
  
  
  // Passer à la chanson suivante après 2.5 secondes
  setTimeout(() => loadNextSong(), 2500);
}

// ============================================
// FONCTION 9 : Afficher le feedback
// ============================================
function showFeedback(isCorrect, correctAnswer = '') {
  const feedback = document.querySelector('#feedback');
  
  // TODO 9.1 : Si la réponse est correcte
  if (isCorrect) {
    // TODO 9.2 : Mettre le texte "Bravo ! Bonne réponse !"
    
    
    // TODO 9.3 : Définir les classes CSS : 'feedback correct show'
    
  } else {
    // TODO 9.4 : Mettre le texte "Raté ! C'était " + le nom de l'artiste
    
    
    // TODO 9.5 : Définir les classes CSS : 'feedback wrong show'
    
  }
}

function hideFeedback() {
  const feedback = document.querySelector('#feedback');
  feedback.classList.remove('show', 'correct', 'wrong');
}

// ============================================
// FONCTION 10 : Passer la chanson
// ============================================
function skipSong() {
  // TODO 10.1 : Mettre en pause l'audio
  
  
  // TODO 10.2 : Arrêter le timer
  
  
  // TODO 10.3 : Afficher le feedback avec la bonne réponse
  
  
  console.log('Chanson passée');
  
  // Passer à la chanson suivante après 2.5 secondes
  setTimeout(() => loadNextSong(), 2500);
}

// ============================================
// FONCTION 11 : Mettre à jour l'interface
// ============================================
function updateUI() {
  // Réinitialiser l'affichage
  document.querySelector('#scoreDisplay').textContent = score;
  document.querySelector('#roundDisplay').textContent = `${currentRound + 1}/${totalRounds}`;
  timer = 30;
  document.querySelector('#timerDisplay').textContent = timer;
  document.querySelector('#timerDisplay').classList.remove('warning');
  document.querySelector('#answerInput').value = '';
  document.querySelector('#playBtn').textContent = 'Jouer';
}

// ============================================
// FONCTION 12 : Terminer le jeu
// ============================================
function endGame() {
  // TODO 12.1 : Cacher l'écran de jeu (retirer la classe 'active')
  
  
  // TODO 12.2 : Afficher l'écran de fin (ajouter la classe 'active')
  
  
  // TODO 12.3 : Afficher le score final
  
  
  // Calculer le pourcentage de réussite
  const maxScore = totalRounds * 90;
  const percentage = (score / maxScore) * 100;
  
  // TODO 12.4 : Définir un message en fonction du pourcentage
  let message = '';
  if (percentage >= 80) {
    message = 'Incroyable ! Vous êtes un expert !';
  } else if (percentage >= 60) {
    message = 'Très bien ! Belle performance !';
  } else if (percentage >= 40) {
    message = 'Pas mal ! Continuez comme ça !';
  } else if (percentage >= 20) {
    message = 'C\'est un début ! Réessayez !';
  } else {
    message = 'Ne lâchez rien !';
  }
  
  // TODO 12.5 : Afficher le message final
  
  
  console.log('Fin - Score:', score);
}

// ============================================
// FONCTION 13 : Recommencer le jeu
// ============================================
function restartGame() {
  // Réinitialiser toutes les variables
  score = 0;
  currentRound = 0;
  timer = 30;
  currentSong = null;
  playlist = [];
  audioPlayer.pause();
  audioPlayer.src = '';
  stopTimer();
  
  // Réinitialiser l'affichage
  document.querySelector('#endScreen').classList.remove('active');
  document.querySelector('#gameScreen').classList.remove('active');
  document.querySelector('#loading').classList.remove('show');
  document.querySelector('#startScreen').style.display = 'block';
  
  console.log('Réinitialisé');
}

// ============================================
// FONCTION BONUS : Gérer la touche Entrée
// ============================================
function handleKeyPress(event) {
  // TODO BONUS : Si la touche pressée est "Enter", valider la réponse
  if (event.key === 'Enter') {
    
  }
}

// ============================================
// FONCTION BONUS : Normaliser les chaînes
// ============================================
// Cette fonction est déjà complète, elle sert à comparer les réponses
function normalizeString(str) {
  return str
    .toLowerCase()              // Tout en minuscules
    .trim()                     // Enlever les espaces au début/fin
    .normalize('NFD')           // Décomposer les accents
    .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
    .replace(/[^a-z0-9\s]/g, '') // Garder que lettres et chiffres
    .replace(/\s+/g, ' ');      // Remplacer espaces multiples par un seul
}

// ============================================
// EVENT LISTENER : Chanson terminée
// ============================================
audioPlayer.addEventListener('ended', () => {
  console.log('Chanson terminée');
  skipSong();
});

// Message de bienvenue dans la console
console.log('%cBlind Test Musical - iTunes API', 'color: #8b5cf6; font-size: 20px; font-weight: bold;');
console.log('%cVersion Étudiants - À compléter !', 'color: #10b981; font-size: 14px;');
console.log('%cCherchez les TODO dans le code', 'color: #f59e0b; font-size: 12px;');