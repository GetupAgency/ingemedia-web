# ✅ CONFIGURATION TERMINÉE !

## La clé API est maintenant configurée ✓

Votre clé Publishable API : `sb_publishable_ycy5qwvRuYJHkzhz5u6mIg_0OmMp_-i`

---

## 🚀 DERNIÈRES ÉTAPES :

### 1️⃣ Créer les tables SQL (2 min)

Vas sur **https://supabase.com/dashboard/project/moqvghbfebrjmfotlkjk**

1. Clique sur **SQL Editor** (menu gauche)
2. Clique sur **New Query**
3. Copie TOUT le contenu du fichier `supabase-schema.sql`
4. Colle dans l'éditeur
5. Clique sur **RUN** ▶️

Tu devrais voir : `Success. No rows returned`

---

### 2️⃣ Activer Realtime (1 min)

Toujours dans le dashboard :

1. Clique sur **Database** → **Replication** (menu gauche)
2. Active **Source** pour ces 3 tables :
   - ☑️ **game_sessions**
   - ☑️ **teams**
   - ☑️ **answers**

---

## 🎮 C'EST PRÊT !

Lance `index.html` et teste :

1. **Onglet 1** : "Je suis le PROF" → Créer session → Note le code
2. **Onglet 2** : "Je suis une ÉQUIPE" → Entre le code + nom équipe
3. **Onglet 1** : Clique sur "Démarrer la partie"
4. **Onglet 2** : Écoute et réponds !

---

## 📊 Vérification rapide

Ouvre la console du navigateur (F12), tu devrais voir :
```
✅ Blind Test Supabase chargé !
```

Si tu vois des erreurs, c'est probablement que les tables ne sont pas créées ou Realtime pas activé.

---

## 🚀 Déploiement Vercel

L'app devrait se déployer automatiquement sur Vercel dès que tu push sur Git !

Les fichiers modifiés :
- ✅ index.html
- ✅ script-supabase.js (avec la clé)
- ✅ style.css
- ✅ supabase-schema.sql

Push et c'est en ligne ! 🎉
