-- ============================================
-- BLIND TEST MULTI-ÉQUIPES - SCHÉMA SUPABASE
-- ============================================

-- 1. TABLE DES SESSIONS DE JEU
-- Une session représente une partie en cours
CREATE TABLE game_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL, -- Code à 6 chiffres pour rejoindre la partie
    host_name TEXT NOT NULL,
    genre TEXT NOT NULL, -- pop, rock, hip-hop, etc.
    status TEXT DEFAULT 'waiting', -- waiting, playing, finished
    current_song_index INTEGER DEFAULT 0,
    total_songs INTEGER DEFAULT 10,
    current_song_data JSONB, -- Stocke les données de la chanson actuelle
    song_start_time TIMESTAMPTZ, -- Quand la chanson a commencé
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. TABLE DES ÉQUIPES
-- Chaque équipe appartient à une session
CREATE TABLE teams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID REFERENCES game_sessions(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    color TEXT DEFAULT '#00D800', -- Couleur de l'équipe
    total_score INTEGER DEFAULT 0,
    correct_answers INTEGER DEFAULT 0,
    wrong_answers INTEGER DEFAULT 0,
    joined_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(session_id, name) -- Un nom d'équipe unique par session
);

-- 3. TABLE DES RÉPONSES
-- Enregistre chaque réponse donnée par une équipe
CREATE TABLE answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID REFERENCES game_sessions(id) ON DELETE CASCADE,
    team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
    song_index INTEGER NOT NULL,
    answer TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    response_time_ms INTEGER NOT NULL, -- Temps en millisecondes
    points_earned INTEGER DEFAULT 0,
    answered_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. TABLE DES PLAYLIST (optionnel, pour pré-charger)
-- Stocke les playlists par genre pour éviter de recharger à chaque fois
CREATE TABLE playlists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    genre TEXT NOT NULL,
    songs JSONB NOT NULL, -- Array de chansons avec titre, artiste, preview, cover
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(genre)
);

-- ============================================
-- INDEX POUR OPTIMISER LES REQUÊTES
-- ============================================

CREATE INDEX idx_game_sessions_code ON game_sessions(code);
CREATE INDEX idx_game_sessions_status ON game_sessions(status);
CREATE INDEX idx_teams_session ON teams(session_id);
CREATE INDEX idx_answers_session ON answers(session_id);
CREATE INDEX idx_answers_team ON answers(team_id);
CREATE INDEX idx_answers_song_index ON answers(song_index);

-- ============================================
-- FONCTIONS UTILES
-- ============================================

-- Fonction pour générer un code de session unique à 6 chiffres
CREATE OR REPLACE FUNCTION generate_session_code()
RETURNS TEXT AS $$
DECLARE
    new_code TEXT;
    code_exists BOOLEAN;
BEGIN
    LOOP
        -- Générer un code à 6 chiffres
        new_code := LPAD(FLOOR(RANDOM() * 1000000)::TEXT, 6, '0');
        
        -- Vérifier si le code existe déjà
        SELECT EXISTS(SELECT 1 FROM game_sessions WHERE code = new_code) INTO code_exists;
        
        -- Si le code n'existe pas, le retourner
        IF NOT code_exists THEN
            RETURN new_code;
        END IF;
    END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour calculer le score basé sur le temps de réponse
CREATE OR REPLACE FUNCTION calculate_points(response_time_ms INTEGER)
RETURNS INTEGER AS $$
BEGIN
    -- Plus rapide = plus de points
    -- 0-3s = 100 points, 3-10s = 50 points, 10-30s = 25 points
    IF response_time_ms <= 3000 THEN
        RETURN 100;
    ELSIF response_time_ms <= 10000 THEN
        RETURN 50;
    ELSE
        RETURN 25;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour mettre à jour le score total d'une équipe
CREATE OR REPLACE FUNCTION update_team_score()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.is_correct THEN
        UPDATE teams
        SET 
            total_score = total_score + NEW.points_earned,
            correct_answers = correct_answers + 1
        WHERE id = NEW.team_id;
    ELSE
        UPDATE teams
        SET wrong_answers = wrong_answers + 1
        WHERE id = NEW.team_id;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour mettre à jour automatiquement le score quand une réponse est ajoutée
CREATE TRIGGER trigger_update_team_score
AFTER INSERT ON answers
FOR EACH ROW
EXECUTE FUNCTION update_team_score();

-- Fonction pour mettre à jour updated_at automatiquement
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour updated_at sur game_sessions
CREATE TRIGGER trigger_update_game_sessions_updated_at
BEFORE UPDATE ON game_sessions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Activer RLS sur toutes les tables
ALTER TABLE game_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE playlists ENABLE ROW LEVEL SECURITY;

-- Politique : Tout le monde peut lire les sessions actives
CREATE POLICY "Anyone can read active sessions"
ON game_sessions FOR SELECT
USING (status IN ('waiting', 'playing'));

-- Politique : Tout le monde peut créer une session
CREATE POLICY "Anyone can create sessions"
ON game_sessions FOR INSERT
WITH CHECK (true);

-- Politique : Seul le créateur peut mettre à jour sa session
CREATE POLICY "Host can update own session"
ON game_sessions FOR UPDATE
USING (true); -- À améliorer avec l'authentification si nécessaire

-- Politique : Tout le monde peut lire les équipes d'une session
CREATE POLICY "Anyone can read teams"
ON teams FOR SELECT
USING (true);

-- Politique : Tout le monde peut créer une équipe
CREATE POLICY "Anyone can create teams"
ON teams FOR INSERT
WITH CHECK (true);

-- Politique : Les équipes peuvent mettre à jour leurs propres infos
CREATE POLICY "Teams can update themselves"
ON teams FOR UPDATE
USING (true);

-- Politique : Tout le monde peut lire les réponses
CREATE POLICY "Anyone can read answers"
ON answers FOR SELECT
USING (true);

-- Politique : Les équipes peuvent créer des réponses
CREATE POLICY "Teams can create answers"
ON answers FOR INSERT
WITH CHECK (true);

-- Politique : Tout le monde peut lire les playlists
CREATE POLICY "Anyone can read playlists"
ON playlists FOR SELECT
USING (true);

-- Politique : Tout le monde peut créer/mettre à jour des playlists (pour le cache)
CREATE POLICY "Anyone can manage playlists"
ON playlists FOR ALL
USING (true);

-- ============================================
-- VUES UTILES
-- ============================================

-- Vue pour le classement en temps réel
CREATE OR REPLACE VIEW leaderboard AS
SELECT 
    t.session_id,
    t.id as team_id,
    t.name as team_name,
    t.color,
    t.total_score,
    t.correct_answers,
    t.wrong_answers,
    COALESCE(AVG(a.response_time_ms), 0) as avg_response_time,
    ROW_NUMBER() OVER (PARTITION BY t.session_id ORDER BY t.total_score DESC, AVG(a.response_time_ms) ASC) as rank
FROM teams t
LEFT JOIN answers a ON t.id = a.team_id AND a.is_correct = true
GROUP BY t.session_id, t.id, t.name, t.color, t.total_score, t.correct_answers, t.wrong_answers;

-- Vue pour les statistiques de session
CREATE OR REPLACE VIEW session_stats AS
SELECT 
    gs.id as session_id,
    gs.code,
    gs.status,
    gs.current_song_index,
    gs.total_songs,
    COUNT(DISTINCT t.id) as team_count,
    COUNT(a.id) as total_answers,
    COUNT(CASE WHEN a.is_correct THEN 1 END) as correct_answers_count
FROM game_sessions gs
LEFT JOIN teams t ON gs.id = t.session_id
LEFT JOIN answers a ON gs.id = a.session_id
GROUP BY gs.id, gs.code, gs.status, gs.current_song_index, gs.total_songs;

-- ============================================
-- DONNÉES DE TEST (optionnel)
-- ============================================

-- Exemple de session de test
-- INSERT INTO game_sessions (code, host_name, genre, status)
-- VALUES ('123456', 'Prof Martin', 'pop', 'waiting');

-- ============================================
-- REALTIME SUBSCRIPTION
-- ============================================
-- Pour activer les subscriptions en temps réel, exécutez dans le Dashboard Supabase :
-- 
-- ALTER PUBLICATION supabase_realtime ADD TABLE game_sessions;
-- ALTER PUBLICATION supabase_realtime ADD TABLE teams;
-- ALTER PUBLICATION supabase_realtime ADD TABLE answers;
