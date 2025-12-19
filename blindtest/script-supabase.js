// ============================================
// CONFIGURATION SUPABASE
// ============================================

const SUPABASE_URL = 'https://moqvghbfebrjmfotlkjk.supabase.co';

// ⚠️ IMPORTANT : Mettez votre clé ANON (pas la service_role !)
// La clé doit commencer par "eyJ..." et faire plusieurs lignes de long
// 
// Pour la trouver :
// 1. https://moqvghbfebrjmfotlkjk.supabase.co
// 2. Project Settings (icône ⚙️ en bas à gauche)
// 3. API
// 4. Sous "Project API keys", copiez la clé "anon" "public"
//    (PAS la "service_role" qui est secrète !)

// ⚠️ REMPLACE CETTE CLÉ PAR LA VRAIE !
// Voir ACCES_DASHBOARD.md pour savoir comment récupérer ta clé
const SUPABASE_KEY = 'VOTRE_CLE_ANON_COMPLETE_ICI_eyJhbGc...';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================
// VARIABLES GLOBALES
// ============================================

let currentMode = null; // 'host' ou 'team'
let sessionId = null;
let teamId = null;
let sessionCode = null;
let playlist = [];
let currentSongIndex = 0;
let songStartTime = null;
let audioPlayer = new Audio();
let subscriptions = [];

const topArtists = {
  'all': [],
  'pop': ['Taylor Swift', 'Ed Sheeran', 'Ariana Grande', 'Dua Lipa', 'The Weeknd', 'Bruno Mars', 'Harry Styles', 'Billie Eilish'],
  'rock': ['Queen', 'The Beatles', 'Nirvana', 'Foo Fighters', 'Arctic Monkeys', 'Red Hot Chili Peppers', 'Coldplay'],
  'hip-hop': ['Drake', 'Kendrick Lamar', 'Post Malone', 'Travis Scott', 'Eminem', 'Kanye West', 'J. Cole'],
  'electronic': ['Daft Punk', 'Calvin Harris', 'David Guetta', 'Avicii', 'Kygo', 'Marshmello', 'The Chainsmokers'],
  'rap-fr': ['Booba', 'PNL', 'Nekfeu', 'Ninho', 'Jul', 'Orelsan', 'Damso', 'SCH'],
  'classique': ['Mozart', 'Beethoven', 'Bach', 'Chopin', 'Vivaldi'],
  'jazz': ['Miles Davis', 'Ella Fitzgerald', 'Louis Armstrong', 'Billie Holiday'],
  'reggae': ['Bob Marley', 'Damian Marley', 'Sean Paul'],
  'latino': ['Bad Bunny', 'J Balvin', 'Shakira', 'Daddy Yankee'],
  'country': ['Johnny Cash', 'Dolly Parton', 'Taylor Swift']
};

// Générer la liste "tout confondu"
topArtists.all = Object.values(topArtists).flat().filter((v, i, a) => a.indexOf(v) === i && v).slice(0, 15);

// ============================================
// NAVIGATION ENTRE LES ÉCRANS
// ============================================

function hideAllScreens() {
  document.getElementById('modeSelection').style.display = 'none';
  document.getElementById('hostSetup').style.display = 'none';
  document.getElementById('teamJoin').style.display = 'none';
  document.getElementById('hostWaiting').style.display = 'none';
  document.getElementById('teamWaiting').style.display = 'none';
  document.getElementById('loading').style.display = 'none';
  document.getElementById('gameScreen').style.display = 'none';
  document.getElementById('endScreen').style.display = 'none';
}

function showHostSetup() {
  hideAllScreens();
  document.getElementById('hostSetup').style.display = 'block';
  currentMode = 'host';
}

function showTeamJoin() {
  hideAllScreens();
  document.getElementById('teamJoin').style.display = 'block';
  currentMode = 'team';
}

function backToMode() {
  hideAllScreens();
  document.getElementById('modeSelection').style.display = 'block';
  currentMode = null;
}

// ============================================
// FONCTIONS HOST
// ============================================

async function createSession(genre) {
  const hostName = document.getElementById('hostName').value.trim();
  
  if (!hostName) {
    alert('Entrez votre nom !');
    return;
  }
  
  try {
    hideAllScreens();
    document.getElementById('loading').style.display = 'block';
    
    // Générer un code unique
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Créer la session
    const { data, error } = await supabase
      .from('game_sessions')
      .insert({
        code: code,
        host_name: hostName,
        genre: genre,
        status: 'waiting'
      })
      .select()
      .single();
    
    if (error) throw error;
    
    sessionId = data.id;
    sessionCode = data.code;
    
    // Charger la playlist
    await loadPlaylist(genre);
    
    // Afficher l'écran d'attente
    hideAllScreens();
    document.getElementById('hostWaiting').style.display = 'block';
    document.getElementById('sessionCodeDisplay').textContent = code;
    
    // S'abonner aux nouvelles équipes
    subscribeToTeams();
    
    console.log('✅ Session créée:', code);
  } catch (error) {
    console.error('❌ Erreur:', error);
    alert('Erreur de création: ' + error.message);
    backToMode();
  }
}

async function loadPlaylist(genre) {
  try {
    playlist = [];
    const artists = topArtists[genre] || topArtists.pop;
    
    for (const artist of artists) {
      try {
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(artist)}&media=music&entity=song&limit=1`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
          const track = data.results[0];
          if (track.previewUrl) {
            playlist.push({
              title: track.trackName,
              artist: track.artistName,
              preview: track.previewUrl,
              cover: track.artworkUrl100.replace('100x100', '600x600')
            });
          }
        }
      } catch (err) {
        console.log('Erreur artiste:', artist, err);
      }
    }
    
    // Mélanger
    playlist.sort(() => Math.random() - 0.5);
    playlist = playlist.slice(0, 10);
    
    console.log('✅ Playlist chargée:', playlist.length, 'chansons');
  } catch (error) {
    console.error('❌ Erreur playlist:', error);
    throw error;
  }
}

function subscribeToTeams() {
  const channel = supabase
    .channel('teams-' + sessionId)
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'teams',
      filter: `session_id=eq.${sessionId}`
    }, (payload) => {
      console.log('Nouvelle équipe:', payload.new);
      updateTeamsList();
    })
    .subscribe();
  
  subscriptions.push(channel);
  updateTeamsList();
}

async function updateTeamsList() {
  try {
    const { data, error } = await supabase
      .from('teams')
      .select('*')
      .eq('session_id', sessionId)
      .order('joined_at', { ascending: true });
    
    if (error) throw error;
    
    const list = document.getElementById('teamsList');
    list.innerHTML = data.map(team => `
      <div style="background: linear-gradient(180deg, ${team.color} 0%, ${adjustColor(team.color, -30)} 100%); border: 4px solid #000; border-radius: 8px; padding: 15px; text-align: center; box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.3), 4px 4px 0 rgba(0, 0, 0, 0.3);">
        <div style="font-size: 0.9rem; font-weight: 700; color: #FFF; text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000;">${team.name}</div>
      </div>
    `).join('');
    
    // Activer le bouton si au moins 1 équipe
    const btn = document.getElementById('startGameBtn');
    if (data.length >= 1) {
      btn.disabled = false;
      btn.textContent = `Démarrer la partie (${data.length} équipe${data.length > 1 ? 's' : ''})`;
    }
  } catch (error) {
    console.error('❌ Erreur liste équipes:', error);
  }
}

function adjustColor(color, amount) {
  const num = parseInt(color.replace('#', ''), 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
  const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

async function startGame() {
  if (!playlist || playlist.length === 0) {
    alert('Playlist non chargée !');
    return;
  }
  
  try {
    // Démarrer la première chanson
    currentSongIndex = 0;
    await playNextSong();
    
    // Afficher l'écran de jeu pour le host
    hideAllScreens();
    showHostGameScreen();
  } catch (error) {
    console.error('❌ Erreur démarrage:', error);
    alert('Erreur: ' + error.message);
  }
}

async function playNextSong() {
  if (currentSongIndex >= playlist.length) {
    await endGame();
    return;
  }
  
  const song = playlist[currentSongIndex];
  songStartTime = new Date().toISOString();
  
  // Mettre à jour la session
  const { error } = await supabase
    .from('game_sessions')
    .update({
      status: 'playing',
      current_song_index: currentSongIndex,
      current_song_data: song,
      song_start_time: songStartTime
    })
    .eq('id', sessionId);
  
  if (error) throw error;
  
  // Jouer l'audio
  audioPlayer.src = song.preview;
  audioPlayer.play();
  
  console.log('🎵 Chanson', currentSongIndex + 1, ':', song.artist);
}

function showHostGameScreen() {
  const screen = document.getElementById('gameScreen');
  screen.style.display = 'block';
  screen.innerHTML = `
    <h2 style="color: #FFF; text-align: center; margin-bottom: 20px; font-size: 1rem; text-shadow: 4px 0 0 #E30000, -4px 0 0 #E30000, 0 4px 0 #E30000, 0 -4px 0 #E30000, 4px 4px 0 #000;">
      Chanson ${currentSongIndex + 1}/${playlist.length}
    </h2>
    
    <div style="background: linear-gradient(180deg, rgba(248, 200, 100, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%); border: 6px solid #000; padding: 30px; border-radius: 16px; text-align: center; margin-bottom: 30px;">
      <img src="${playlist[currentSongIndex].cover}" style="width: 200px; height: 200px; border: 6px solid #000; border-radius: 8px; margin-bottom: 20px; box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.4);">
      <div style="font-size: 0.8rem; color: #000; font-weight: 700;">En attente des réponses...</div>
    </div>
    
    <div id="hostAnswersList"></div>
    
    <button onclick="revealAnswer()" class="submit-btn" style="margin-top: 20px;">Révéler la réponse</button>
  `;
  
  subscribeToAnswers();
}

function subscribeToAnswers() {
  const channel = supabase
    .channel('answers-' + sessionId + '-' + currentSongIndex)
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'answers',
      filter: `session_id=eq.${sessionId}`
    }, async (payload) => {
      if (payload.new.song_index === currentSongIndex) {
        console.log('Nouvelle réponse:', payload.new);
        await updateHostAnswersList();
      }
    })
    .subscribe();
  
  subscriptions.push(channel);
}

async function updateHostAnswersList() {
  try {
    const { data, error } = await supabase
      .from('answers')
      .select(`
        *,
        teams (name, color)
      `)
      .eq('session_id', sessionId)
      .eq('song_index', currentSongIndex)
      .order('answered_at', { ascending: true });
    
    if (error) throw error;
    
    const list = document.getElementById('hostAnswersList');
    if (!list) return;
    
    list.innerHTML = `
      <h3 style="color: #000; font-size: 0.9rem; margin-bottom: 15px; font-weight: 700;">Réponses reçues :</h3>
      ${data.map((answer, i) => `
        <div style="background: ${answer.is_correct ? '#00D800' : '#E30000'}; border: 4px solid #000; border-radius: 8px; padding: 12px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <span style="color: #FFF; font-size: 0.8rem; font-weight: 700; text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000;">#${i + 1} ${answer.teams.name}</span>
            <span style="color: rgba(255, 255, 255, 0.8); font-size: 0.7rem; margin-left: 10px;">${(answer.response_time_ms / 1000).toFixed(2)}s</span>
          </div>
          <div style="color: #FFF; font-size: 0.8rem; font-weight: 700; text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000;">
            ${answer.is_correct ? '+' + answer.points_earned + ' pts' : '0 pt'}
          </div>
        </div>
      `).join('')}
    `;
  } catch (error) {
    console.error('❌ Erreur liste réponses:', error);
  }
}

async function revealAnswer() {
  const song = playlist[currentSongIndex];
  audioPlayer.pause();
  
  // Afficher la réponse
  const screen = document.getElementById('gameScreen');
  screen.innerHTML = `
    <div style="text-align: center; padding: 40px;">
      <h2 style="color: #FFF; font-size: 1.5rem; margin-bottom: 20px; text-shadow: 4px 0 0 #E30000, -4px 0 0 #E30000, 0 4px 0 #E30000, 0 -4px 0 #E30000, 4px 4px 0 #000;">
        C'était...
      </h2>
      <div style="background: linear-gradient(180deg, #FDB528 0%, #E8A615 100%); border: 6px solid #000; border-radius: 16px; padding: 40px; margin: 30px 0; box-shadow: inset 0 4px 0 rgba(255, 255, 255, 0.3), 6px 6px 0 rgba(0, 0, 0, 0.3);">
        <div style="font-size: 2rem; font-weight: 700; color: #000; margin-bottom: 10px; text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.5);">
          ${song.artist}
        </div>
        <div style="font-size: 1rem; color: #000; opacity: 0.8;">${song.title}</div>
      </div>
      <button onclick="nextSong()" class="submit-btn">Chanson suivante →</button>
    </div>
  `;
}

async function nextSong() {
  currentSongIndex++;
  if (currentSongIndex < playlist.length) {
    await playNextSong();
    showHostGameScreen();
  } else {
    await endGame();
  }
}

async function endGame() {
  audioPlayer.pause();
  
  // Mettre à jour le statut
  await supabase
    .from('game_sessions')
    .update({ status: 'finished' })
    .eq('id', sessionId);
  
  // Récupérer le classement
  const { data, error } = await supabase
    .from('teams')
    .select('*')
    .eq('session_id', sessionId)
    .order('total_score', { ascending: false });
  
  if (error) {
    console.error('❌ Erreur classement:', error);
    return;
  }
  
  hideAllScreens();
  const endScreen = document.getElementById('endScreen');
  endScreen.style.display = 'block';
  endScreen.innerHTML = `
    <h2 style="color: #FFF; font-size: 1.5rem; margin-bottom: 30px; text-shadow: 4px 0 0 #E30000, -4px 0 0 #E30000, 0 4px 0 #E30000, 0 -4px 0 #E30000, 4px 4px 0 #000;">
      🏆 CLASSEMENT FINAL 🏆
    </h2>
    
    ${data.map((team, i) => `
      <div style="background: linear-gradient(180deg, ${i === 0 ? '#FFD700' : i === 1 ? '#C0C0C0' : i === 2 ? '#CD7F32' : '#00D800'} 0%, ${adjustColor(i === 0 ? '#FFD700' : i === 1 ? '#C0C0C0' : i === 2 ? '#CD7F32' : '#00D800', -30)} 100%); border: 5px solid #000; border-radius: 12px; padding: 20px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 15px;">
          <div style="font-size: 2rem; font-weight: 700; color: #000; text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.5);">#${i + 1}</div>
          <div>
            <div style="font-size: 1rem; font-weight: 700; color: #FFF; text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000;">${team.name}</div>
            <div style="font-size: 0.7rem; color: rgba(0, 0, 0, 0.7);">${team.correct_answers}/${team.correct_answers + team.wrong_answers} bonnes réponses</div>
          </div>
        </div>
        <div style="font-size: 2rem; font-weight: 700; color: #FFF; text-shadow: 3px 0 0 #000, -3px 0 0 #000, 0 3px 0 #000, 0 -3px 0 #000;">
          ${team.total_score} pts
        </div>
      </div>
    `).join('')}
    
    <button onclick="location.reload()" class="restart-btn" style="margin-top: 30px;">Nouvelle partie</button>
  `;
}

// ============================================
// FONCTIONS ÉQUIPE
// ============================================

async function joinSession() {
  const code = document.getElementById('sessionCode').value.trim();
  const name = document.getElementById('teamName').value.trim();
  
  if (!code || code.length !== 6) {
    alert('Entrez un code à 6 chiffres !');
    return;
  }
  
  if (!name) {
    alert('Entrez un nom d\'équipe !');
    return;
  }
  
  try {
    // Trouver la session
    const { data: session, error: sessionError } = await supabase
      .from('game_sessions')
      .select('id, status')
      .eq('code', code)
      .single();
    
    if (sessionError) throw new Error('Code invalide !');
    if (session.status === 'finished') throw new Error('Cette session est terminée');
    
    sessionId = session.id;
    sessionCode = code;
    
    // Créer l'équipe
    const colors = ['#00D800', '#E30000', '#0080F8', '#FDB528', '#FF00FF', '#00FFFF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const { data: team, error: teamError } = await supabase
      .from('teams')
      .insert({
        session_id: sessionId,
        name: name,
        color: randomColor
      })
      .select()
      .single();
    
    if (teamError) {
      if (teamError.code === '23505') {
        throw new Error('Ce nom est déjà pris !');
      }
      throw teamError;
    }
    
    teamId = team.id;
    
    // Afficher l'écran d'attente
    hideAllScreens();
    document.getElementById('teamWaiting').style.display = 'block';
    document.getElementById('yourTeamName').textContent = name;
    
    // S'abonner à la session
    subscribeToSession();
    
    console.log('✅ Équipe créée:', name);
  } catch (error) {
    console.error('❌ Erreur:', error);
    alert(error.message);
  }
}

function subscribeToSession() {
  const channel = supabase
    .channel('session-' + sessionId)
    .on('postgres_changes', {
      event: 'UPDATE',
      schema: 'public',
      table: 'game_sessions',
      filter: `id=eq.${sessionId}`
    }, (payload) => {
      console.log('Session mise à jour:', payload.new);
      handleSessionUpdate(payload.new);
    })
    .subscribe();
  
  subscriptions.push(channel);
}

async function handleSessionUpdate(session) {
  if (session.status === 'playing' && session.current_song_data) {
    // Nouvelle chanson !
    const song = session.current_song_data;
    songStartTime = new Date(session.song_start_time);
    currentSongIndex = session.current_song_index;
    
    // Afficher l'écran de jeu
    hideAllScreens();
    showTeamGameScreen(song);
    
    // Jouer l'audio
    audioPlayer.src = song.preview;
    audioPlayer.play();
  } else if (session.status === 'finished') {
    // Partie terminée
    await showTeamEndScreen();
  }
}

function showTeamGameScreen(song) {
  const screen = document.getElementById('gameScreen');
  screen.style.display = 'block';
  screen.innerHTML = `
    <h2 style="color: #FFF; text-align: center; margin-bottom: 20px; font-size: 1rem; text-shadow: 4px 0 0 #E30000, -4px 0 0 #E30000, 0 4px 0 #E30000, 0 -4px 0 #E30000, 4px 4px 0 #000;">
      Chanson ${currentSongIndex + 1}
    </h2>
    
    <div style="background: linear-gradient(180deg, rgba(248, 200, 100, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%); border: 6px solid #000; padding: 30px; border-radius: 16px; text-align: center; margin-bottom: 30px;">
      <img src="${song.cover}" style="width: 200px; height: 200px; border: 6px solid #000; border-radius: 8px; margin-bottom: 20px; box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.4);">
    </div>
    
    <div id="teamFeedback"></div>
    
    <div class="answer-zone">
      <h3>Qui est l'artiste ?</h3>
      <input type="text" id="teamAnswer" class="answer-input" placeholder="Entrez le nom de l'artiste..." onkeypress="if(event.key==='Enter') submitTeamAnswer()">
      <button onclick="submitTeamAnswer()" class="submit-btn">Valider ma réponse</button>
    </div>
  `;
  
  document.getElementById('teamAnswer').focus();
}

async function submitTeamAnswer() {
  const answer = document.getElementById('teamAnswer').value.trim();
  
  if (!answer) {
    alert('Entrez une réponse !');
    return;
  }
  
  // Calculer le temps de réponse
  const now = new Date();
  const responseTime = now - new Date(songStartTime);
  
  try {
    // Récupérer la chanson actuelle
    const { data: session } = await supabase
      .from('game_sessions')
      .select('current_song_data')
      .eq('id', sessionId)
      .single();
    
    const correctAnswer = session.current_song_data.artist;
    
    // Vérifier la réponse
    const normalizedAnswer = normalizeString(answer);
    const normalizedCorrect = normalizeString(correctAnswer);
    const isCorrect = normalizedAnswer === normalizedCorrect || 
                      normalizedCorrect.includes(normalizedAnswer) ||
                      normalizedAnswer.includes(normalizedCorrect);
    
    // Calculer les points
    let points = 0;
    if (isCorrect) {
      if (responseTime <= 3000) points = 100;
      else if (responseTime <= 10000) points = 50;
      else points = 25;
    }
    
    // Enregistrer la réponse
    const { error } = await supabase
      .from('answers')
      .insert({
        session_id: sessionId,
        team_id: teamId,
        song_index: currentSongIndex,
        answer: answer,
        is_correct: isCorrect,
        response_time_ms: responseTime,
        points_earned: points
      });
    
    if (error) throw error;
    
    // Afficher le feedback
    const feedback = document.getElementById('teamFeedback');
    feedback.innerHTML = `
      <div class="feedback ${isCorrect ? 'correct' : 'wrong'} show">
        ${isCorrect ? `✓ Bonne réponse ! +${points} pts` : `✗ Raté ! C'était ${correctAnswer}`}
      </div>
    `;
    
    // Désactiver l'input
    document.getElementById('teamAnswer').disabled = true;
    document.querySelector('.submit-btn').disabled = true;
    
    console.log(isCorrect ? '✅ Bonne réponse!' : '❌ Mauvaise réponse');
  } catch (error) {
    console.error('❌ Erreur:', error);
    alert('Erreur: ' + error.message);
  }
}

async function showTeamEndScreen() {
  audioPlayer.pause();
  
  // Récupérer les stats de l'équipe
  const { data: team } = await supabase
    .from('teams')
    .select('*')
    .eq('id', teamId)
    .single();
  
  // Récupérer le classement
  const { data: allTeams } = await supabase
    .from('teams')
    .select('*')
    .eq('session_id', sessionId)
    .order('total_score', { ascending: false });
  
  const rank = allTeams.findIndex(t => t.id === teamId) + 1;
  
  hideAllScreens();
  const endScreen = document.getElementById('endScreen');
  endScreen.style.display = 'block';
  endScreen.innerHTML = `
    <h2 style="color: #FFF; font-size: 1.5rem; margin-bottom: 20px; text-shadow: 4px 0 0 #E30000, -4px 0 0 #E30000, 0 4px 0 #E30000, 0 -4px 0 #E30000, 4px 4px 0 #000;">
      Partie terminée !
    </h2>
    
    <div style="background: linear-gradient(180deg, #FDB528 0%, #E8A615 100%); border: 6px solid #000; border-radius: 16px; padding: 40px; margin: 30px 0; box-shadow: inset 0 4px 0 rgba(255, 255, 255, 0.3), 6px 6px 0 rgba(0, 0, 0, 0.3);">
      <div style="font-size: 1rem; color: #000; margin-bottom: 10px;">Votre classement</div>
      <div style="font-size: 3rem; font-weight: 700; color: #000; margin-bottom: 20px; text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.5);">
        #${rank} / ${allTeams.length}
      </div>
      <div style="font-size: 1.5rem; font-weight: 700; color: #FFF; text-shadow: 3px 0 0 #000, -3px 0 0 #000, 0 3px 0 #000, 0 -3px 0 #000;">
        ${team.total_score} points
      </div>
      <div style="font-size: 0.8rem; color: #000; margin-top: 10px;">
        ${team.correct_answers} bonnes réponses sur ${team.correct_answers + team.wrong_answers}
      </div>
    </div>
    
    <div style="text-align: center; margin-top: 30px;">
      <p style="color: #000; font-size: 0.8rem; font-weight: 700; margin-bottom: 20px;">
        ${rank === 1 ? '🏆 CHAMPIONS ! 🏆' : rank === 2 ? '🥈 Très bien !' : rank === 3 ? '🥉 Pas mal !' : 'Bravo !'}
      </p>
      <button onclick="location.reload()" class="restart-btn">Nouvelle partie</button>
    </div>
  `;
}

// ============================================
// UTILITAIRES
// ============================================

function normalizeString(str) {
  return str
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ');
}

// Nettoyer les subscriptions au déchargement
window.addEventListener('beforeunload', () => {
  subscriptions.forEach(sub => sub.unsubscribe());
  audioPlayer.pause();
});

console.log('✅ Blind Test Supabase chargé !');
