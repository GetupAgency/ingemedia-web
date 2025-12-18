# 🍽️ G Faim - Application de Recettes

## 📖 Description

Application React permettant de saisir les ingrédients disponibles dans son frigo et de recevoir des suggestions de recettes correspondantes.

Projet pédagogique pour cours de développement web - Master 1.

---

## 🎓 Objectifs Pédagogiques

- Gestion d'état React (useState, useMemo)
- Manipulation de tableaux (map, filter, sort)
- Validation et nettoyage de données
- Design responsive et animations CSS
- Communication parent-enfant via props

---

## 📂 Structure

```
src/
├── pages/
│   ├── GFaimPage.jsx          # Page principale
│   └── GFaimPage.css
│
└── components/GFaim/
    ├── IngredientInput.jsx     # Saisie d'ingrédients
    ├── IngredientList.jsx      # Liste des ingrédients
    ├── RecipeSuggestions.jsx   # Suggestions de recettes
    └── RecipeCard.jsx          # Carte de recette individuelle
```

---

## 🚀 Accès

L'application est accessible via le menu principal : **🍽️ G Faim**

URL : `http://localhost:5173/gfaim`

---

## 📚 Documentation

### Pour les étudiants
📘 **PROJET_GFAIM.md** - Guide complet avec :
- Fonctions à compléter
- Indices et ressources
- Pistes d'amélioration CSS
- Idées de fonctionnalités bonus

### Pour l'enseignant
📝 **GFAIM_MEMO_ENSEIGNANT.md** - Déroulé de cours suggéré (2-3h)

🔐 **GFAIM_SOLUTIONS_ENSEIGNANT.md** - Solutions complètes et bonus avancés

---

## ✨ Fonctionnalités

### Implémentées (squelette)
- ✅ Structure complète de l'application
- ✅ Composants créés et importés
- ✅ CSS de base
- ✅ Base de données de 5 recettes

### À compléter par les étudiants
- 🔧 Logique d'ajout/suppression d'ingrédients
- 🔧 Algorithme de filtrage de recettes
- 🔧 Calcul des ingrédients manquants
- 🎨 Améliorations CSS et responsive
- 🎨 Animations et transitions

### Bonus possibles
- ⭐ Système de favoris (localStorage)
- ⭐ Filtres (végétarien, rapide, facile)
- ⭐ Modal de recette détaillée
- ⭐ Plus de recettes
- ⭐ Suggestions d'ingrédients

---

## 🛠️ Technologies

- **React 18** - Framework UI
- **React Router** - Navigation
- **Vite** - Build tool
- **CSS3** - Styling

---

## 📦 Installation & Lancement

```bash
# Installation des dépendances (si nécessaire)
npm install

# Lancement en développement
npm run dev

# Build pour production
npm run build
```

---

## 🎯 Durée Estimée

- **Logique JavaScript** : 1h - 1h30
- **Style CSS** : 1h - 1h30
- **Bonus** : 30min+

**Total** : 2h30 - 3h

---

## 👥 Modalités

- **Travail** : Individuel ou binôme
- **Niveau** : Master 1
- **Prérequis** : Bases de React, JavaScript ES6, CSS

---

## 📈 Évolutions Possibles

- Intégration d'API externes (Spoonacular, Edamam)
- Base de données (Firebase, Supabase)
- Authentification utilisateur
- Partage de recettes
- Progressive Web App (PWA)
- Mode hors ligne
- Liste de courses automatique

---

## 🎉 Résultat Attendu

Une application web fonctionnelle permettant de :
1. Saisir plusieurs ingrédients
2. Voir des recettes correspondantes triées par pertinence
3. Identifier les ingrédients manquants
4. Interface responsive et agréable

---

## 📸 Aperçu

```
┌─────────────────────────────────────────────────────┐
│              🍽️ G Faim                              │
│   Trouve des recettes avec les ingrédients         │
│             de ton frigo !                          │
└─────────────────────────────────────────────────────┘

┌──────────────────┐  ┌────────────────────────────┐
│ Mes Ingrédients  │  │   Recettes Suggérées       │
│                  │  │                            │
│ [Input + Bouton] │  │  ┌──────┐  ┌──────┐        │
│                  │  │  │  🍝  │  │  🍳  │        │
│ 🥗 tomates   ❌  │  │  │Pâtes │  │Omelette│      │
│ 🥗 poulet    ❌  │  │  │      │  │      │        │
│ 🥗 riz       ❌  │  │  └──────┘  └──────┘        │
│                  │  │                            │
└──────────────────┘  └────────────────────────────┘
```

---

## 📞 Support

Pour toute question sur le projet, consulter :
- Le guide étudiant : `PROJET_GFAIM.md`
- La documentation React : https://fr.react.dev
- MDN Web Docs : https://developer.mozilla.org/fr/

---

**Bon appétit et bon code ! 🍽️👨‍💻**

*Projet créé en décembre 2025*

