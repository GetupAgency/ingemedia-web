# 🚀 DÉMARRAGE EXPRESS - 5 MINUTES

## ✅ Étape 1 : Créer les tables (2 min)

1. Ouvrez https://moqvghbfebrjmfotlkjk.supabase.co
2. **SQL Editor** (menu gauche)
3. **New Query**
4. Copiez-collez tout le fichier `supabase-schema.sql`
5. **RUN** ▶️

Vous devriez voir : `Success. No rows returned`

## ✅ Étape 2 : Activer Realtime (1 min)

1. **Database** → **Replication** (menu gauche)
2. Activez **Source** pour ces 3 tables :
   - ✅ **game_sessions**
   - ✅ **teams**
   - ✅ **answers**

## ✅ Étape 3 : Configurer la clé API (1 min)

1. **⚙️ Project Settings** → **API**
2. Copiez la clé **anon** **public**
3. Ouvrez `script-supabase.js` ligne 7
4. Remplacez `your_actual_anon_key_here` par votre clé

## ✅ Étape 4 : Lancer ! (1 min)

**Option A - Local :**
```bash
cd blindtest
open index.html
```

**Option B - Vercel (déploiement auto) :**
Le déploiement devrait se faire automatiquement !
Vérifiez juste que les fichiers sont bien pushés sur Git.

---

## 🎮 TEST RAPIDE

1. Ouvrez l'app dans 2 onglets
2. Onglet 1 : "Je suis le PROF" → Créer session
3. Notez le CODE à 6 chiffres
4. Onglet 2 : "Je suis une ÉQUIPE" → Entrer le code
5. Onglet 1 : "Démarrer la partie"
6. Onglet 2 : Répondre !

---

## ❌ Problèmes ?

**Erreur "Code invalide"** → Vérifiez que les tables sont créées

**Pas de musique** → Normal, l'API iTunes peut être lente

**"Supabase is not defined"** → Vérifiez la clé API dans script-supabase.js

**Réponses pas reçues en temps réel** → Activez Realtime sur les tables

---

## 📚 Plus d'infos

- `INSTALL.md` - Installation détaillée
- `GET_SUPABASE_KEY.md` - Comment récupérer la clé
- `README.md` - Documentation complète
