# 🚀 Démarrage Rapide

## Installation et lancement (5 minutes)

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

### 3. Ouvrir dans le navigateur

```
http://localhost:5173
```

C'est tout ! La plateforme est prête. ✨

## 📝 Premiers pas pour l'enseignant

### Tester la plateforme

1. **Page d'accueil** : Vue d'ensemble des 4 modules
2. **Cliquer sur "Module HTML"** : Liste des 13 exercices
3. **Cliquer sur le premier exercice** : Interface d'édition de code

### Personnaliser un exercice

Éditer : `src/data/exercicesHTML.js`

```javascript
{
  id: "html-01",
  titre: "Ton nouveau titre",
  consigne: "Ta nouvelle consigne...",
  // ...
}
```

Sauvegarder → La page se recharge automatiquement.

### Ajouter un exercice

Copier-coller un exercice existant, changer l'`id`, et modifier le contenu.

## 🎓 Utilisation en cours

### Scénario 1 : Démonstration en classe

1. Afficher la plateforme au projecteur
2. Naviguer vers un exercice
3. Coder en direct dans l'éditeur
4. Les étudiants voient le résultat en temps réel

### Scénario 2 : Travail autonome des étudiants

1. Partager l'URL de la plateforme déployée
2. Assigner des exercices spécifiques
3. Les étudiants travaillent à leur rythme
4. Vérification lors du cours suivant

## 📚 Ressources

- **README.md** : Documentation complète
- **GUIDE_ENSEIGNANT.md** : Conseils pédagogiques détaillés
- **src/data/** : Tous les exercices sont ici

## 🆘 Problèmes courants

### "Command not found: npm"

➜ Installer Node.js : https://nodejs.org

### Port 5173 déjà utilisé

➜ Fermer l'application qui utilise ce port, ou modifier le port dans `vite.config.js`

### Changements non visibles

➜ Rafraîchir le navigateur (Cmd+R / Ctrl+R)

---

**Besoin d'aide ?** Consulte le README.md ou le GUIDE_ENSEIGNANT.md

