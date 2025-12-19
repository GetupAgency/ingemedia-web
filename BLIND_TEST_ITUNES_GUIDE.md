# 🎵 BLIND TEST - ITUNES API - GUIDE FINAL

## ✅ VERSION FINALE QUI FONCTIONNE ! 🎉

L'API iTunes est **gratuite**, **sans CORS**, et fournit de **vraies previews audio de 30 secondes** !

---

## 📁 FICHIERS À UTILISER

### ⭐ Pour les étudiantes
**`blind-test-ITUNES-ETUDIANT.html`**
- Version avec TODO à compléter
- 13 fonctions JavaScript à coder
- Interface complète fournie (HTML/CSS)
- Audio RÉEL avec iTunes API

### ✅ Pour vous (démo/correction)
**`blind-test-ITUNES-CORRECTION.html`**
- Version complète et fonctionnelle
- À utiliser pour la démo
- Référence pour corriger

---

## 🎯 CE QUE VOS ÉTUDIANTES VONT APPRENDRE

### API & Asynchrone
- ✅ `fetch()` - Appels HTTP
- ✅ `async/await` - Code asynchrone
- ✅ Manipulation de JSON
- ✅ Gestion d'erreurs (try/catch)

### Audio HTML5
- ✅ `new Audio()` - Créer un lecteur
- ✅ `.play()` / `.pause()` - Contrôles
- ✅ `.src` - Charger une source
- ✅ Event listeners (ended)

### Logique de jeu
- ✅ Timers (setInterval/clearInterval)
- ✅ Gestion d'état (variables globales)
- ✅ Validation de réponses
- ✅ Calcul de score
- ✅ Flow du jeu (rounds, fin)

### DOM & Interface
- ✅ querySelector()
- ✅ classList (add/remove)
- ✅ Changement d'écrans
- ✅ Mise à jour dynamique

### Algorithmes
- ✅ Fisher-Yates (mélange)
- ✅ Normalisation de chaînes
- ✅ Comparaison flexible

---

## 🚀 SÉQUENCE DE COURS (2h)

### Phase 1 : Démo (10 min)
```
1. Ouvrir blind-test-ITUNES-CORRECTION.html
2. Choisir un genre (Pop, Rock, Hip-Hop, Electronic)
3. Cliquer "▶️ Jouer" → L'audio se lance !
4. Jouer 2-3 manches
5. Montrer : pochette, timer, score, feedback
```

### Phase 2 : Exploration (15 min)
```
1. Ouvrir blind-test-ITUNES-ETUDIANT.html dans VS Code
2. Montrer la structure :
   - Variables globales (lignes ~280)
   - Configuration des artistes (fournie)
   - 13 fonctions à compléter
3. Expliquer l'API iTunes
4. Montrer un exemple de requête dans le navigateur
```

### Phase 3 : Codage guidé (70 min)

#### Session 1 - Les bases (20 min)
```javascript
1. startGame() - Simple affichage/masquage
2. initGame() - Initialiser les variables
3. updateUI() - Mise à jour interface
4. hideFeedback() - Retirer des classes
```

**PAUSE (10 min)**

#### Session 2 - API & Jeu (25 min)
```javascript
5. fetchPlaylist() - ⭐ LE GROS MORCEAU (fetch iTunes)
6. shufflePlaylist() - Algorithme de mélange
7. loadNextSong() - Charger chanson + pochette
8. showFeedback() - Afficher résultat
```

#### Session 3 - Audio & Finalisation (25 min)
```javascript
9. togglePlay() - Play/Pause audio
10. startTimer() / stopTimer() - Gestion timer
11. checkAnswer() - Validation réponse
12. skipSong() - Passer chanson
13. endGame() - Fin + score
14. restartGame() - Recommencer
```

### Phase 4 : Tests (15 min)
```
- Chaque étudiante teste son jeu
- Debug avec la console
- Comparer avec la correction
```

### Phase 5 : Mini-tournoi (10 min)
```
- Organisez un tournoi
- Meilleur score = gagnante
- Célébrez les réussites ! 🎉
```

---

## 💡 ASTUCES POUR L'ENSEIGNANT

### Pour la fonction `fetchPlaylist()` (la plus complexe)

**Décomposez en étapes claires :**

```javascript
// Étape 1 : Construire l'URL
const url = `https://itunes.apple.com/search?term=${encodeURIComponent(artist)}&media=music&entity=song&limit=1`;

// Étape 2 : Faire la requête
const response = await fetch(url);

// Étape 3 : Récupérer le JSON
const data = await response.json();

// Étape 4 : Extraire les infos
const track = data.results[0];

// Étape 5 : Ajouter à la playlist
playlist.push({
  title: track.trackName,
  artist: track.artistName,
  preview: track.previewUrl,
  cover: track.artworkUrl100.replace('100x100', '400x400')
});
```

### Pour le timer

**Expliquez bien setInterval vs setTimeout :**
- `setInterval()` → Répète toutes les X millisecondes
- `setTimeout()` → Execute UNE FOIS après X millisecondes

### Pour l'audio

**Montrez les méthodes clés :**
```javascript
audioPlayer.play()    // Lance la lecture
audioPlayer.pause()   // Met en pause
audioPlayer.paused    // true/false (état)
audioPlayer.src       // URL de la source
```

---

## 🎵 API ITUNES - INFOS TECHNIQUES

### URL de base
```
https://itunes.apple.com/search
```

### Paramètres utilisés
- `term` : Terme de recherche (artiste)
- `media=music` : Rechercher de la musique
- `entity=song` : Type chanson
- `limit=1` : Un seul résultat

### Exemple de requête
```
https://itunes.apple.com/search?term=Taylor%20Swift&media=music&entity=song&limit=1
```

### Structure de la réponse
```json
{
  "results": [
    {
      "trackName": "Anti-Hero",
      "artistName": "Taylor Swift",
      "previewUrl": "https://...",
      "artworkUrl100": "https://...",
      ...
    }
  ]
}
```

### Limites de l'API
- ✅ Gratuite
- ✅ Pas de clé nécessaire
- ✅ Pas de CORS
- ⚠️ 20 requêtes/minute (large pour un cours)
- ⚠️ Preview de 30 secondes (parfait pour un blind test !)

---

## 📊 GRILLE D'ÉVALUATION

| Fonction | Points | Difficulté |
|----------|--------|------------|
| startGame() | 1 pt | 🟢 Facile |
| initGame() | 1 pt | 🟢 Facile |
| updateUI() | 1 pt | 🟢 Facile |
| hideFeedback() | 0.5 pt | 🟢 Facile |
| showFeedback() | 1 pt | 🟡 Moyen |
| shufflePlaylist() | 1.5 pt | 🟡 Moyen |
| loadNextSong() | 1.5 pt | 🟡 Moyen |
| togglePlay() | 1 pt | 🟡 Moyen |
| **fetchPlaylist()** | **3 pts** | 🔴 Difficile |
| startTimer() | 2 pts | 🔴 Difficile |
| stopTimer() | 0.5 pt | 🟢 Facile |
| checkAnswer() | 2 pts | 🔴 Difficile |
| skipSong() | 1 pt | 🟡 Moyen |
| endGame() | 1.5 pt | 🟡 Moyen |
| restartGame() | 1.5 pt | 🟡 Moyen |
| **TOTAL** | **20 pts** | |

---

## ✅ CHECKLIST AVANT LE COURS

- [ ] blind-test-ITUNES-CORRECTION.html testé et fonctionne
- [ ] Audio se lance bien
- [ ] blind-test-ITUNES-ETUDIANT.html prêt à distribuer
- [ ] Console (F12) ouverte pour les démos
- [ ] Connexion Internet stable (pour l'API iTunes)
- [ ] Haut-parleurs testés

---

## 🎉 MESSAGES À DIRE AUX ÉTUDIANTES

### À l'ouverture
> "Aujourd'hui on crée un VRAI blind test avec de la vraie musique !
> On va apprendre à utiliser une API externe (iTunes) pour récupérer
> des chansons, les jouer, et créer un jeu complet !"

### Pendant le codage
> "La fonction la plus complexe c'est `fetchPlaylist()` parce qu'elle
> utilise `async/await` pour appeler l'API. On va la faire ensemble !"

### À la fin
> "Bravo ! Vous venez de créer un blind test fonctionnel avec une vraie API.
> Vous savez maintenant appeler des services externes et créer des jeux interactifs !"

---

## 💪 DÉFIS BONUS

Pour les étudiantes qui finissent en avance :

1. **Ajouter un système de vies** (3 erreurs = game over)
2. **Sauvegarder le meilleur score** (localStorage)
3. **Ajouter plus de genres** (jazz, country, etc.)
4. **Mode difficile** : 15 secondes au lieu de 30
5. **Afficher le titre après validation**
6. **Effet de fondu audio** au début/fin
7. **Historique des réponses** (bonnes/mauvaises)

---

## 🆘 PROBLÈMES POSSIBLES

### L'audio ne se lance pas
**Causes** :
- Pas de connexion Internet
- iTunes API temporairement indisponible
- Preview non disponible pour cet artiste

**Solutions** :
- Vérifier la connexion
- Essayer un autre genre
- Voir dans la console si les URLs sont valides

### Pas de résultats pour un artiste
**Normal !** Tous les artistes n'ont pas de preview sur iTunes.
C'est géré dans le code (on skip si pas de previewUrl).

### API lente
**Normal pour la première fois** (chargement de 5 chansons).
Montrez le spinner de loading !

---

## 📚 RESSOURCES SUPPLÉMENTAIRES

### Documentation
- [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/)
- [HTML Audio Element](https://developer.mozilla.org/fr/docs/Web/HTML/Element/audio)
- [Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)

### Améliorations possibles
- Utiliser Spotify API (plus complexe, OAuth requis)
- Ajouter des animations CSS
- Mode multijoueur avec WebSocket
- Statistiques détaillées

---

## 🎯 RÉSUMÉ EN UNE PHRASE

> Un blind test musical complet avec l'API iTunes qui fonctionne parfaitement, enseigne fetch/async/await, et passionne les étudiantes ! 🎵🎉

---

**BON COURS ! Vos étudiantes vont ADORER ! 🚀🎸**
