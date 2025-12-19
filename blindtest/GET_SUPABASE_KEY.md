# 🔑 Récupérer votre clé Supabase

## Étapes rapides :

1. Allez sur https://moqvghbfebrjmfotlkjk.supabase.co

2. Cliquez sur **⚙️ Project Settings** (en bas à gauche)

3. Cliquez sur **API** dans le menu

4. Copiez la clé **anon** **public** (celle qui commence par `eyJ...`)

5. Ouvrez `script-supabase.js` ligne 7

6. Remplacez :
```javascript
const SUPABASE_KEY = 'your_actual_anon_key_here';
```

Par :
```javascript
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // Votre clé ici
```

7. Sauvegardez et c'est prêt ! 🚀

---

## ⚠️ IMPORTANT

- **NE PAS** utiliser la clé `service_role` (celle-là est secrète)
- **UTILISER** la clé `anon` (elle est publique et sécurisée)
- La clé `anon` peut être visible dans votre code frontend, c'est normal

## 🧪 Tester

Ouvrez la console du navigateur (F12), vous devriez voir :
```
✅ Blind Test Supabase chargé !
```

Si vous voyez une erreur, vérifiez que :
1. Les tables sont créées (supabase-schema.sql exécuté)
2. Realtime est activé
3. La clé est correcte
