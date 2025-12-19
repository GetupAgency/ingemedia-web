# 🎵 Blind Test Multi-Équipes en Temps Réel

Application de blind test musical pour jouer en classe avec plusieurs équipes simultanément.

## ⚡ Quick Start

1. **Créer les tables** : Exécutez `supabase-schema.sql` dans Supabase SQL Editor
2. **Activer Realtime** : Activez la réplication pour `game_sessions`, `teams`, `answers`
3. **Configurer la clé** : Mettez votre clé Supabase dans `script-supabase.js`
4. **Ouvrir** : Lancez `index.html` ou déployez sur Vercel

📖 Voir `INSTALL.md` pour les détails

## 🎮 Comment jouer

### Mode Professeur
- Créez une session
- Partagez le code à 6 chiffres
- Lancez les chansons
- Voyez les réponses en temps réel

### Mode Équipe
- Rejoignez avec le code
- Répondez le plus vite possible
- Gagnez des points selon votre temps

## 🏆 Points

- 0-3s : **100 pts**
- 3-10s : **50 pts**
- 10-30s : **25 pts**

## 🛠️ Stack

- Supabase (temps réel + database)
- iTunes API (musiques)
- Vanilla JS
- CSS Mario style

## 📁 Fichiers importants

- `index.html` - Interface
- `script-supabase.js` - Logique complète
- `supabase-schema.sql` - Schéma BDD
- `style.css` - Thème Mario
