// Variables globales
let score = 0;
let currentRound = 0;
let totalRounds = 10;
let timer = 30;
let timerInterval = null;
let currentSong = null;
let playlist = [];
let audioPlayer = new Audio();
let selectedGenre = '';

// Variables pour le mode équipe
let isTeamMode = false;
let currentTeam = 1;
let team1Score = 0;
let team2Score = 0;
let team1Name = 'Équipe 1';
let team2Name = 'Équipe 2';

const topArtists = {
  'pop': ['Taylor Swift', 'Ed Sheeran', 'Ariana Grande', 'Dua Lipa', 'The Weeknd', 'Bruno Mars', 'Harry Styles', 'Billie Eilish', 'Olivia Rodrigo', 'Shawn Mendes'],
  'rock': ['Queen', 'The Beatles', 'Nirvana', 'Foo Fighters', 'Arctic Monkeys', 'Red Hot Chili Peppers', 'Coldplay', 'Imagine Dragons', 'The Rolling Stones', 'AC/DC'],
  'hip-hop': ['Drake', 'Kendrick Lamar', 'Post Malone', 'Travis Scott', 'Eminem', 'Kanye West', 'J. Cole', 'Nicki Minaj', 'Cardi B', '21 Savage'],
  'electronic': ['Daft Punk', 'Calvin Harris', 'David Guetta', 'Avicii', 'Kygo', 'Marshmello', 'The Chainsmokers', 'Martin Garrix', 'Tiesto', 'Skrillex'],
  'rap-fr': ['Booba', 'PNL', 'Nekfeu', 'Ninho', 'Jul', 'Orelsan', 'Damso', 'SCH', 'Niska', 'Gradur'],
  'classique': ['Mozart', 'Beethoven', 'Bach', 'Chopin', 'Vivaldi', 'Tchaikovsky', 'Debussy', 'Brahms', 'Handel', 'Liszt'],
  'jazz': ['Miles Davis', 'John Coltrane', 'Ella Fitzgerald', 'Louis Armstrong', 'Billie Holiday', 'Duke Ellington', 'Nina Simone', 'Charlie Parker', 'Chet Baker', 'Herbie Hancock'],
  'reggae': ['Bob Marley', 'Damian Marley', 'Sean Paul', 'Shaggy', 'UB40', 'Jimmy Cliff', 'Peter Tosh', 'Ziggy Marley', 'Toots and the Maytals', 'Burning Spear'],
  'latino': ['Bad Bunny', 'J Balvin', 'Shakira', 'Daddy Yankee', 'Ozuna', 'Maluma', 'Rosalia', 'Karol G', 'Nicky Jam', 'Anuel AA'],
  'country': ['Johnny Cash', 'Dolly Parton', 'Taylor Swift', 'Carrie Underwood', 'Luke Bryan', 'Blake Shelton', 'Keith Urban', 'Miranda Lambert', 'Kenny Chesney', 'Florida Georgia Line']
};

// Fonction pour obtenir tous les artistes de tous les genres
function getAllArtists() {
  const allArtists = [];
  for (const genre in topArtists) {
    allArtists.push(...topArtists[genre]);
  }
  // Retirer les doublons
  return [...new Set(allArtists)];
}

function showTeamSetup() {
  const setupHTML = `
    <div class="team-setup" id="teamSetup" style="text-align: center;">
      <h2 style="color: #FFF; font-size: 1.2rem; margin-bottom: 20px; text-shadow: 4px 0 0 #E30000, -4px 0 0 #E30000, 0 4px 0 #E30000, 0 -4px 0 #E30000, 4px 4px 0 #000;">Mode Équipe</h2>
      
      <div style="margin-bottom: 20px;">
        <label style="display: block; color: #000; font-size: 0.8rem; margin-bottom: 8px; font-weight: 700;">Nom Équipe 1 :</label>
        <input type="text" id="team1Input" placeholder="Équipe 1" value="Équipe 1" 
          style="width: 80%; padding: 12px; font-size: 0.9rem; border: 4px solid #000; border-radius: 8px; background: #FFF; font-family: 'Press Start 2P', monospace;">
      </div>
      
      <div style="margin-bottom: 30px;">
        <label style="display: block; color: #000; font-size: 0.8rem; margin-bottom: 8px; font-weight: 700;">Nom Équipe 2 :</label>
        <input type="text" id="team2Input" placeholder="Équipe 2" value="Équipe 2"
          style="width: 80%; padding: 12px; font-size: 0.9rem; border: 4px solid #000; border-radius: 8px; background: #FFF; font-family: 'Press Start 2P', monospace;">
      </div>
      
      <button onclick="confirmTeamSetup()" class="submit-btn" style="margin-bottom: 10px;">Commencer</button>
      <button onclick="cancelTeamSetup()" class="skip-btn">Annuler</button>
    </div>
  `;
  
  document.querySelector('#startScreen').insertAdjacentHTML('beforeend', setupHTML);
  document.querySelector('.genre-selection').style.display = 'none';
  document.querySelector('.start-screen h2').style.display = 'none';
}

function confirmTeamSetup() {
  team1Name = document.querySelector('#team1Input').value || 'Équipe 1';
  team2Name = document.querySelector('#team2Input').value || 'Équipe 2';
  isTeamMode = true;
  currentTeam = 1;
  team1Score = 0;
  team2Score = 0;
  
  // Sauvegarder dans localStorage
  localStorage.setItem('blindtest_team_mode', 'true');
  localStorage.setItem('blindtest_team1_name', team1Name);
  localStorage.setItem('blindtest_team2_name', team2Name);
  localStorage.setItem('blindtest_team1_score', '0');
  localStorage.setItem('blindtest_team2_score', '0');
  localStorage.setItem('blindtest_current_team', '1');
  
  document.querySelector('#teamSetup').remove();
  document.querySelector('.genre-selection').style.display = 'grid';
  document.querySelector('.start-screen h2').style.display = 'block';
  document.querySelector('.start-screen h2').textContent = 'Choisissez un genre musical';
}

function cancelTeamSetup() {
  document.querySelector('#teamSetup').remove();
  document.querySelector('.genre-selection').style.display = 'grid';
  document.querySelector('.start-screen h2').style.display = 'block';
}

function startGame(genre) {
  selectedGenre = genre;
  document.querySelector('#startScreen').style.display = 'none';
  document.querySelector('#loading').classList.add('show');
  
  // Charger les données du mode équipe depuis localStorage si elles existent
  if (localStorage.getItem('blindtest_team_mode') === 'true') {
    isTeamMode = true;
    team1Name = localStorage.getItem('blindtest_team1_name') || 'Équipe 1';
    team2Name = localStorage.getItem('blindtest_team2_name') || 'Équipe 2';
    team1Score = parseInt(localStorage.getItem('blindtest_team1_score')) || 0;
    team2Score = parseInt(localStorage.getItem('blindtest_team2_score')) || 0;
    currentTeam = parseInt(localStorage.getItem('blindtest_current_team')) || 1;
  }
  
  fetchPlaylist(genre);
  console.log('Démarrage - Genre:', genre);
}

async function fetchPlaylist(genre) {
  try {
    playlist = [];
    let artists;
    
    // Si "tout confondu", prendre des artistes aléatoires de tous les genres
    if (genre === 'all') {
      artists = getAllArtists().sort(() => Math.random() - 0.5).slice(0, 15);
    } else {
      artists = topArtists[genre];
    }
    
    console.log('Recherche de', artists.length, 'artistes sur iTunes...');
    
    for (let i = 0; i < artists.length; i++) {
      const artist = artists[i];
      
      try {
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(artist)}&media=music&entity=song&limit=1`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
          const track = data.results[0];
          console.log(data.results);
          if (track.previewUrl) {
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
    
    if (playlist.length === 0) {
      alert('Impossible de charger les musiques. Réessayez.');
      restartGame();
      return;
    }
    
    console.log('Playlist chargée:', playlist.length, 'chansons');
    shufflePlaylist();
    initGame();
    
  } catch (error) {
    console.error('Erreur:', error);
    alert('Erreur de chargement. Réessayez.');
    restartGame();
  }
}

function shufflePlaylist() {
  for (let i = playlist.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
  }
  console.log('Playlist mélangée');
}

function initGame() {
  score = 0;
  currentRound = 0;
  document.querySelector('#loading').classList.remove('show');
  document.querySelector('#gameScreen').classList.add('active');
  
  // Afficher le bandeau d'équipe si mode équipe activé
  if (isTeamMode) {
    updateTeamDisplay();
  }
  
  loadNextSong();
  console.log('Jeu initialisé');
}

function updateTeamDisplay() {
  const gameHeader = document.querySelector('.game-header');
  
  // Retirer l'ancien bandeau s'il existe
  const existingBanner = document.querySelector('.team-banner');
  if (existingBanner) existingBanner.remove();
  
  const teamBanner = document.createElement('div');
  teamBanner.className = 'team-banner';
  teamBanner.innerHTML = `
    <div class="team-info ${currentTeam === 1 ? 'active' : ''}">
      <span class="team-name">${team1Name}</span>
      <span class="team-score">${team1Score} pts</span>
    </div>
    <div class="team-vs">VS</div>
    <div class="team-info ${currentTeam === 2 ? 'active' : ''}">
      <span class="team-name">${team2Name}</span>
      <span class="team-score">${team2Score} pts</span>
    </div>
  `;
  
  gameHeader.insertAdjacentElement('beforebegin', teamBanner);
}

function loadNextSong() {
  if (currentRound < totalRounds && currentRound < playlist.length) {
    currentSong = playlist[currentRound];
    audioPlayer.src = currentSong.preview;
    audioPlayer.load();
    
    document.querySelector('#albumCover img').src = currentSong.cover;
    
    updateUI();
    hideFeedback();
    currentRound++;
    document.querySelector('#roundDisplay').textContent = `${currentRound}/${totalRounds}`;
    console.log(`Chanson ${currentRound}/${totalRounds}:`, currentSong.title);
  } else {
    endGame();
  }
}

function togglePlay() {
  const playBtn = document.querySelector('#playBtn');
  
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.textContent = 'Pause';
    startTimer();
    console.log('Lecture');
  } else {
    audioPlayer.pause();
    playBtn.textContent = 'Jouer';
    stopTimer();
    console.log('Pause');
  }
}

function startTimer() {
  timer = 30;
  stopTimer();
  
  timerInterval = setInterval(() => {
    timer--;
    const timerDisplay = document.querySelector('#timerDisplay');
    timerDisplay.textContent = timer;
    
    if (timer <= 10) {
      timerDisplay.classList.add('warning');
    } else {
      timerDisplay.classList.remove('warning');
    }
    
    if (timer <= 0) {
      stopTimer();
      audioPlayer.pause();
      
      if (isTeamMode) {
        showFeedback(false, currentSong.artist, currentTeam);
      } else {
        showFeedback(false, currentSong.artist);
      }
      
      setTimeout(() => {
        // Changer d'équipe si mode équipe
        if (isTeamMode) {
          currentTeam = currentTeam === 1 ? 2 : 1;
          localStorage.setItem('blindtest_current_team', currentTeam);
          updateTeamDisplay();
        }
        loadNextSong();
      }, 2500);
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function checkAnswer() {
  const userAnswer = document.querySelector('#answerInput').value;
  
  if (!userAnswer.trim()) {
    alert('Entrez une réponse');
    return;
  }
  
  const normalizedUser = normalizeString(userAnswer);
  const normalizedCorrect = normalizeString(currentSong.artist);
  
  const isCorrect = normalizedUser === normalizedCorrect || 
                    normalizedCorrect.includes(normalizedUser) ||
                    normalizedUser.includes(normalizedCorrect);
  
  audioPlayer.pause();
  stopTimer();
  
  if (isCorrect) {
    const points = Math.max(50, timer * 3);
    
    if (isTeamMode) {
      // Ajouter les points à l'équipe active
      if (currentTeam === 1) {
        team1Score += points;
        localStorage.setItem('blindtest_team1_score', team1Score);
      } else {
        team2Score += points;
        localStorage.setItem('blindtest_team2_score', team2Score);
      }
      updateTeamDisplay();
      showFeedback(true, null, currentTeam);
    } else {
      score += points;
      showFeedback(true);
    }
    
    console.log(`Bonne réponse ! +${points} points`);
  } else {
    if (isTeamMode) {
      showFeedback(false, currentSong.artist, currentTeam);
    } else {
      showFeedback(false, currentSong.artist);
    }
    console.log('Mauvaise réponse');
  }
  
  document.querySelector('#scoreDisplay').textContent = isTeamMode ? 
    (currentTeam === 1 ? team1Score : team2Score) : score;
  
  setTimeout(() => {
    // Changer d'équipe si mode équipe
    if (isTeamMode) {
      currentTeam = currentTeam === 1 ? 2 : 1;
      localStorage.setItem('blindtest_current_team', currentTeam);
      updateTeamDisplay();
    }
    loadNextSong();
  }, 2500);
}

function showFeedback(isCorrect, correctAnswer = '', team = null) {
  const feedback = document.querySelector('#feedback');
  
  if (isCorrect) {
    if (isTeamMode && team) {
      const teamName = team === 1 ? team1Name : team2Name;
      feedback.textContent = `Bravo ${teamName} ! Bonne réponse !`;
    } else {
      feedback.textContent = 'Bravo ! Bonne réponse !';
    }
    feedback.className = 'feedback correct show';
  } else {
    if (isTeamMode && team) {
      const teamName = team === 1 ? team1Name : team2Name;
      feedback.textContent = `${teamName} : Raté ! C'était ${correctAnswer}`;
    } else {
      feedback.textContent = `Raté ! C'était ${correctAnswer}`;
    }
    feedback.className = 'feedback wrong show';
  }
}

function hideFeedback() {
  const feedback = document.querySelector('#feedback');
  feedback.classList.remove('show', 'correct', 'wrong');
}

function skipSong() {
  audioPlayer.pause();
  stopTimer();
  
  if (isTeamMode) {
    showFeedback(false, currentSong.artist, currentTeam);
  } else {
    showFeedback(false, currentSong.artist);
  }
  
  console.log('Chanson passée');
  
  setTimeout(() => {
    // Changer d'équipe si mode équipe
    if (isTeamMode) {
      currentTeam = currentTeam === 1 ? 2 : 1;
      localStorage.setItem('blindtest_current_team', currentTeam);
      updateTeamDisplay();
    }
    loadNextSong();
  }, 2500);
}

function updateUI() {
  if (isTeamMode) {
    document.querySelector('#scoreDisplay').textContent = currentTeam === 1 ? team1Score : team2Score;
    // Changer le label pour indiquer quelle équipe joue
    const scoreLabel = document.querySelector('.stat-card .stat-label');
    if (scoreLabel && scoreLabel.textContent === 'Score') {
      scoreLabel.textContent = currentTeam === 1 ? team1Name : team2Name;
    }
  } else {
    document.querySelector('#scoreDisplay').textContent = score;
  }
  document.querySelector('#roundDisplay').textContent = `${currentRound + 1}/${totalRounds}`;
  timer = 30;
  document.querySelector('#timerDisplay').textContent = timer;
  document.querySelector('#timerDisplay').classList.remove('warning');
  document.querySelector('#answerInput').value = '';
  document.querySelector('#playBtn').textContent = 'Jouer';
}

function endGame() {
  document.querySelector('#gameScreen').classList.remove('active');
  document.querySelector('#endScreen').classList.add('active');
  
  if (isTeamMode) {
    // Afficher les résultats des deux équipes
    let winnerMessage = '';
    if (team1Score > team2Score) {
      winnerMessage = `${team1Name} gagne !`;
    } else if (team2Score > team1Score) {
      winnerMessage = `${team2Name} gagne !`;
    } else {
      winnerMessage = 'Égalité parfaite !';
    }
    
    document.querySelector('#finalScore').innerHTML = `
      <div style="font-size: 0.9rem; margin-bottom: 20px; color: #000; text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.5);">
        ${team1Name}: ${team1Score} pts<br>
        ${team2Name}: ${team2Score} pts
      </div>
    `;
    document.querySelector('#finalMessage').textContent = winnerMessage;
    
    // Réinitialiser le mode équipe
    localStorage.removeItem('blindtest_team_mode');
    localStorage.removeItem('blindtest_team1_score');
    localStorage.removeItem('blindtest_team2_score');
    localStorage.removeItem('blindtest_current_team');
    
  } else {
    document.querySelector('#finalScore').textContent = score;
    
    const maxScore = totalRounds * 90;
    const percentage = (score / maxScore) * 100;
    
    let message = '';
    if (percentage >= 80) message = 'Incroyable ! Vous êtes un expert !';
    else if (percentage >= 60) message = 'Très bien ! Belle performance !';
    else if (percentage >= 40) message = 'Pas mal ! Continuez comme ça !';
    else if (percentage >= 20) message = 'C\'est un début ! Réessayez !';
    else message = 'Ne lâchez rien !';
    
    document.querySelector('#finalMessage').textContent = message;
  }
  
  console.log('Fin - Score:', isTeamMode ? `${team1Name}: ${team1Score} / ${team2Name}: ${team2Score}` : score);
}

function restartGame() {
  score = 0;
  currentRound = 0;
  timer = 30;
  currentSong = null;
  playlist = [];
  audioPlayer.pause();
  audioPlayer.src = '';
  stopTimer();
  
  // Réinitialiser le mode équipe
  isTeamMode = false;
  currentTeam = 1;
  team1Score = 0;
  team2Score = 0;
  localStorage.removeItem('blindtest_team_mode');
  localStorage.removeItem('blindtest_team1_score');
  localStorage.removeItem('blindtest_team2_score');
  localStorage.removeItem('blindtest_current_team');
  
  // Retirer le bandeau d'équipe s'il existe
  const teamBanner = document.querySelector('.team-banner');
  if (teamBanner) teamBanner.remove();
  
  document.querySelector('#endScreen').classList.remove('active');
  document.querySelector('#gameScreen').classList.remove('active');
  document.querySelector('#loading').classList.remove('show');
  document.querySelector('#startScreen').style.display = 'block';
  console.log('Réinitialisé');
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    checkAnswer();
  }
}

function normalizeString(str) {
  return str
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ');
}

audioPlayer.addEventListener('ended', () => {
  console.log('Chanson terminée');
  skipSong();
});

console.log('%cBlind Test Musical - iTunes API', 'color: #8b5cf6; font-size: 20px; font-weight: bold;');
console.log('%cAudio réel qui fonctionne !', 'color: #10b981; font-size: 14px;');