# ⚡ BLIND TEST - DÉMARRAGE RAPIDE

## 🚀 Prêt en 10 minutes !

Vous avez un cours dans 30 minutes et vous voulez utiliser le Blind Test ? Voici le minimum vital.

---

## ✅ Checklist express (10 min)

### 1️⃣ Tester le jeu (3 min)
```
- Ouvrir blind-test-CORRECTION.html dans Chrome/Firefox
- Cliquer sur "Pop"
- Attendre le chargement (10 secondes)
- Cliquer sur "▶️ Jouer"
- Jouer une manche pour tester
```

**✅ Ça marche ?** Parfait, continuez !  
**❌ Ça ne marche pas ?** → Vérifiez votre connexion Internet

---

### 2️⃣ Installer Live Server (3 min)
```
1. Ouvrir VS Code
2. Extensions (Ctrl+Shift+X)
3. Chercher "Live Server"
4. Installer (5-Second)
5. Redémarrer VS Code
```

**Test** : Clic droit sur un fichier HTML → "Open with Live Server"

---

### 3️⃣ Préparer le matériel (4 min)
```
- [ ] Vidéoprojecteur branché
- [ ] blind-test-CORRECTION.html ouvert (pour la démo)
- [ ] blind-test-ETUDIANT.html prêt à partager
- [ ] BLIND_TEST_INDICES.md ouvert (pour aider)
- [ ] Haut-parleurs testés
```

---

## 📋 Déroulé ultra-simplifié (2h)

### ⏱️ 0:00 - 0:15 | Démo et intro (15 min)
**Ce que vous faites :**
- Ouvrir `blind-test-CORRECTION.html`
- Jouer 2-3 manches
- Dire : "Aujourd'hui on va coder ce jeu ensemble !"
- Distribuer `blind-test-ETUDIANT.html`

---

### ⏱️ 0:15 - 0:30 | Exploration (15 min)
**Ce que vous montrez :**
- Structure du fichier (HTML en haut, JS en bas)
- Les TODO dans le code
- La console (F12)
- L'API Deezer : `https://api.deezer.com/search?q=artist:"Taylor Swift"`

---

### ⏱️ 0:30 - 1:30 | Codage (60 min)

**🟢 Session 1 : Les bases (20 min)**
Codez ensemble ces 4 fonctions :
1. `startGame()` - Afficher/cacher des divs
2. `updateUI()` - Mettre à jour le score/timer
3. `hideFeedback()` - Retirer des classes
4. `handleKeyPress()` - Détecter Entrée

**PAUSE 10 MIN**

**🟡 Session 2 : Le jeu (20 min)**
Guidez-les sur ces fonctions :
5. `showFeedback()` - Afficher correct/incorrect
6. `togglePlay()` - Jouer/Pause audio
7. `skipSong()` - Passer la chanson

**🔴 Session 3 : Les défis (20 min)**
Travail plus autonome :
8. `checkAnswer()` - Valider la réponse
9. `loadNextSong()` - Chanson suivante
10. `startTimer()` - setInterval

---

### ⏱️ 1:30 - 1:50 | Tests (20 min)
**Ce que vous faites :**
- Circuler pour aider
- Corriger les erreurs communes
- Utiliser `BLIND_TEST_INDICES.md` si bloquées

---

### ⏱️ 1:50 - 2:00 | Tournoi + Débrief (10 min)
**Mini-tournoi :**
- Chacune joue une partie
- Meilleur score = gagnante
- Applaudissements 🎉

**Débrief :**
- "Qu'avez-vous appris ?"
- "Qu'est-ce qui était difficile ?"
- "Que pourriez-vous améliorer ?"

---

## 💡 Phrases clés à dire

### Au début
> "Aujourd'hui on va créer un blind test musical. À la fin du cours, vous aurez un vrai jeu fonctionnel !"

### Pendant
> "Si vous êtes bloquées, appelez-moi OU regardez le fichier d'indices."
> "Utilisez console.log() pour déboguer !"
> "Testez après chaque fonction !"

### À la fin
> "Bravo ! Vous venez de créer votre premier jeu en JavaScript !"
> "Vous pouvez l'améliorer à la maison et me montrer la semaine prochaine."

---

## 🆘 Problèmes fréquents (solutions express)

### "L'API ne charge pas"
```javascript
// Vérifier que l'URL est correcte
const url = `https://api.deezer.com/search?q=artist:"${encodeURIComponent(artistName)}"`;
```

### "La musique ne se joue pas"
```javascript
// Vérifier que c'est bien audioPlayer (variable globale)
audioPlayer.play(); // ✅ Correct
audio.play();       // ❌ Erreur
```

### "Le timer continue après la réponse"
```javascript
// Toujours arrêter avant de continuer
stopTimer();
audioPlayer.pause();
```

### "La comparaison ne marche pas"
```javascript
// Utiliser normalizeString()
const user = normalizeString(userAnswer);
const correct = normalizeString(currentSong.artist);
if (user === correct) { ... }
```

---

## 📱 Aide-mémoire : Fonctions par ordre de difficulté

### 🟢 FACILE (commencer par ça)
- `startGame()` - Cacher/afficher
- `updateUI()` - Mettre à jour texte
- `hideFeedback()` - Retirer classes
- `handleKeyPress()` - Détecter touche

### 🟡 MOYEN (faire ensuite)
- `showFeedback()` - Conditions + DOM
- `initGame()` - Initialisation
- `togglePlay()` - Audio + animations
- `skipSong()` - Enchaîner fonctions
- `loadNextSong()` - Logique de jeu

### 🔴 DIFFICILE (si temps restant)
- `checkAnswer()` - Validation complexe
- `startTimer()` / `stopTimer()` - setInterval
- `endGame()` - Calculs + conditions
- `restartGame()` - Reset complet
- `fetchPlaylist()` - Fetch API async
- `shufflePlaylist()` - Algorithme

---

## 🎯 Si vous êtes VRAIMENT pressé (cours dans 5 min)

**Stratégie "Demo Only" :**
1. Ouvrir `blind-test-CORRECTION.html`
2. Faire une démo de 10 min
3. Montrer le code dans VS Code
4. Expliquer les concepts en direct
5. Donner les fichiers en devoirs

**Consigne aux étudiantes :**
> "Regardez comment ça marche. Pour la semaine prochaine, vous devez compléter le fichier `blind-test-ETUDIANT.html` en vous aidant des indices."

---

## 📞 Besoin de plus de détails ?

| Question | Fichier à lire |
|----------|----------------|
| "Comment organiser tout le cours ?" | `BLIND_TEST_PLAN_COURS.md` |
| "Comment aider une étudiante bloquée ?" | `BLIND_TEST_INDICES.md` |
| "Quels sont les objectifs pédagogiques ?" | `BLIND_TEST_README.md` |
| "Vue d'ensemble de tout le projet ?" | `BLIND_TEST_INDEX.md` |

---

## ✅ Checklist finale (30 secondes)

Avant de commencer le cours :
- [ ] Internet fonctionne
- [ ] blind-test-CORRECTION.html marche
- [ ] Live Server installé
- [ ] Haut-parleurs OK
- [ ] Fichier étudiant prêt

**C'EST BON ? ALLEZ-Y ! 🚀**

---

## 🎓 Message final

> Vous avez tout ce qu'il faut.  
> Le jeu est fun, le code est clair, les étudiantes vont adorer.  
> Faites-vous confiance et amusez-vous !

**BON COURS ! 🎵**
