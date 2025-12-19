# 🚀 Installation Rapide

## Étape 1 : Créer les tables dans Supabase

1. Connectez-vous à https://moqvghbfebrjmfotlkjk.supabase.co
2. Allez dans **SQL Editor**
3. Copiez le contenu de `supabase-schema.sql`
4. Cliquez sur **Run**

## Étape 2 : Activer Realtime

Dans **Database** → **Replication**, activez :
- ✅ game_sessions
- ✅ teams  
- ✅ answers

## Étape 3 : Récupérer votre clé API

1. Allez dans **Project Settings** → **API**
2. Copiez la clé `anon` `public`
3. Ouvrez `script-supabase.js`
4. Remplacez `your_actual_anon_key_here` par votre clé

```javascript
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // <- Mettez votre clé ici
```

## Étape 4 : Tester

Ouvrez `index.html` dans votre navigateur ou déployez sur Vercel !

---

## 🎮 Utilisation

### Professeur (Host)
1. Cliquez sur "Je suis le PROF"
2. Entrez votre nom
3. Choisissez un genre
4. Partagez le CODE à 6 chiffres aux élèves
5. Démarrez quand les équipes sont prêtes

### Élèves (Équipes)
1. Cliquez sur "Je suis une ÉQUIPE"
2. Entrez le code du prof
3. Choisissez un nom d'équipe
4. Attendez que le prof démarre
5. Répondez le plus vite possible !

## 🏆 Système de points

- **0-3 secondes** : 100 points
- **3-10 secondes** : 50 points  
- **10-30 secondes** : 25 points
- **Mauvaise réponse** : 0 point

Plus vous répondez vite, plus vous gagnez de points !
