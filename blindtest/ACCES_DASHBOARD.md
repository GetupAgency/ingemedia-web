# 🔑 Accéder au Dashboard Supabase

## L'URL API n'est PAS le dashboard !

❌ `https://moqvghbfebrjmfotlkjk.supabase.co` → C'est l'URL de l'API (pour le code)

✅ `https://supabase.com/dashboard` → C'est le dashboard (pour toi)

---

## 🚀 Comment accéder au dashboard :

### Option 1 : URL directe
Va sur : **https://supabase.com/dashboard/project/moqvghbfebrjmfotlkjk**

### Option 2 : Via le site
1. Va sur **https://supabase.com**
2. Clique sur **Sign In** (en haut à droite)
3. Connecte-toi avec ton compte
4. Tu verras la liste de tes projets
5. Clique sur ton projet

---

## 📍 Une fois connecté, pour récupérer la clé :

1. Dans le menu de gauche, tout en bas : **⚙️ Settings**
2. Clique sur **API**
3. Tu verras une section **"Project API keys"**
4. Copie la clé **anon** **public** (la longue qui commence par `eyJ...`)
5. Colle-la dans `script-supabase.js` ligne 19

---

## 🆘 Tu n'as plus accès ?

Si tu as créé le projet mais perdu l'accès :
- Vérifie tes emails Supabase
- Va sur supabase.com et connecte-toi avec le même compte
- Le projet devrait apparaître dans ton dashboard

---

## ⚡ Alternative : Créer un nouveau projet (5 min)

Si vraiment tu n'arrives pas à accéder :

1. Va sur https://supabase.com
2. **New Project**
3. Note la nouvelle URL et la clé anon
4. Exécute `supabase-schema.sql` dans le SQL Editor
5. Mets à jour l'URL et la clé dans `script-supabase.js`
