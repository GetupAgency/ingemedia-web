# 📚 Comment Travailler sur le Projet "G Faim"

## 🎯 Approche Pédagogique

Le projet **G Faim** contient des TODO à compléter. L'objectif est d'apprendre en cherchant et en essayant par vous-même !

---

## 🔍 Où Trouver les Corrections ?

Les corrections ne sont **PAS** dans le code. Elles sont disponibles **auprès de votre enseignant** si vous êtes vraiment bloqué(e).

**Pourquoi ?** Pour vous encourager à :
- 🧠 Réfléchir par vous-même
- 💪 Développer votre autonomie
- 🔍 Apprendre à chercher des solutions
- 🤝 Travailler en équipe

Dans le code, vous trouverez :
```javascript
// TODO: Fonction à compléter par les étudiants
const maFonction = () => {
  // Indices :
  // - Utiliser filter()
  // - Vérifier avec includes()
  
  // VOTRE CODE ICI
};
```

---

## 📝 Fichiers Contenant des Corrections

### JavaScript (Logique)

1. **src/pages/GFaimPage.jsx**
   - ✅ `handleAddIngredient()` - Ajouter un ingrédient
   - ✅ `handleRemoveIngredient()` - Retirer un ingrédient

2. **src/components/GFaim/IngredientInput.jsx**
   - ✅ `handleSubmit()` - Valider et soumettre le formulaire

3. **src/components/GFaim/RecipeSuggestions.jsx**
   - ✅ Algorithme de filtrage complet dans `useMemo`

4. **src/components/GFaim/RecipeCard.jsx**
   - ✅ `getMissingIngredients()` - Calculer les ingrédients manquants
   - ✅ Calcul du pourcentage de correspondance

### CSS (Style)

Tous les fichiers CSS contiennent :
- ⚠️ Un en-tête "STYLES DE BASE - À AMÉLIORER"
- 💡 Des TODO commentés suggérant des améliorations
- 🎨 Un style volontairement simple à enrichir

---

## 🚀 Méthode de Travail Suggérée

### Phase 1 : Essayer Seul(e) (15-20 min par fonction)

1. **Lire le TODO** et comprendre l'objectif
2. **Réfléchir** à la solution
3. **Essayer de coder** sans regarder la correction
4. **Tester** dans le navigateur
5. **Déboguer** avec `console.log()`

### Phase 2 : Utiliser les Indices (5-10 min)

Si vous êtes bloqué(e) :
- Lisez les commentaires au-dessus du TODO
- Consultez le guide `PROJET_GFAIM.md` (section "Indices")
- Demandez de l'aide à un camarade

### Phase 3 : Demander de l'Aide (5-10 min)

En dernier recours :
1. **Demandez à votre enseignant** qui pourra vous donner des indices supplémentaires
2. **Consultez la correction** si votre enseignant vous la montre
3. **Lisez ligne par ligne** avec les explications
4. **Comprenez** la logique avant de copier
5. **Retapez** le code (ne copiez-collez pas !)
6. **Testez** pour vérifier que ça fonctionne

### Phase 4 : Amélioration CSS (tout le temps restant)

Pour le CSS :
1. Lisez les TODO dans chaque fichier `.css`
2. Choisissez les améliorations qui vous inspirent
3. Expérimentez avec les couleurs, tailles, animations
4. Testez en temps réel dans le navigateur
5. Soyez créatifs !

---

## 💻 Exemple Pratique : handleAddIngredient

### 1️⃣ Le Code Initial (À Compléter)

```javascript
const handleAddIngredient = (ingredient) => {
  // Ajouter l'ingrédient à la liste (éviter les doublons)
  // VOTRE CODE ICI
};
```

### 2️⃣ Essayez Seul(e)

Réfléchissez :
- Comment vérifier si c'est vide ?
- Comment éviter les doublons ?
- Comment ajouter au state ?

### 3️⃣ Si Vous Êtes Bloqué(e)

Demandez à votre enseignant qui pourra :
- Vous donner des indices supplémentaires
- Vous expliquer la logique
- Vous montrer un exemple similaire
- Vous donner la correction si vraiment nécessaire

**Rappel** : Les corrections ne sont pas dans le code volontairement. Le but est que vous appreniez à chercher et à réfléchir !

### 4️⃣ Retapez et Testez

```javascript
const handleAddIngredient = (ingredient) => {
  // Votre code basé sur la correction
  if (!ingredient || ingredient.trim() === '') {
    return;
  }
  
  const cleanedIngredient = ingredient.trim().toLowerCase();
  
  if (ingredients.includes(cleanedIngredient)) {
    alert('Cet ingrédient est déjà dans votre liste !');
    return;
  }
  
  setIngredients([...ingredients, cleanedIngredient]);
};
```

---

## 🎨 Exemple CSS : Améliorer une Carte de Recette

### 1️⃣ Le CSS de Base (Volontairement Simple)

```css
.recipe-card {
  background: white;
  border: 1px solid #ddd;
  padding: 15px;
  cursor: pointer;
  /* TODO: Ajouter border-radius */
  /* TODO: Ajouter une box-shadow */
}
```

### 2️⃣ Vos Améliorations

```css
.recipe-card {
  background: white;
  border: 1px solid #ddd;
  padding: 15px;
  cursor: pointer;
  
  /* ✨ Vos améliorations : */
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```

---

## ⚠️ Conseils Importants

### ✅ À FAIRE

- **Comprendre** avant de copier
- **Retaper** le code (mémoire musculaire)
- **Tester** après chaque modification
- **Expérimenter** avec les valeurs CSS
- **Demander de l'aide** si besoin

### ❌ À ÉVITER

- **Copier-coller** sans comprendre
- **Tout décommenter** d'un coup
- **Sauter** la phase de réflexion
- **Abandonner** trop vite
- **Travailler seul(e)** si vous êtes bloqué(e)

---

## 🐛 Debugging : Utiliser console.log()

Ajoutez des `console.log()` pour comprendre ce qui se passe :

```javascript
const handleAddIngredient = (ingredient) => {
  console.log('Ingrédient reçu:', ingredient);
  
  if (!ingredient || ingredient.trim() === '') {
    console.log('Ingrédient vide, on arrête');
    return;
  }
  
  const cleanedIngredient = ingredient.trim().toLowerCase();
  console.log('Ingrédient nettoyé:', cleanedIngredient);
  console.log('Liste actuelle:', ingredients);
  
  if (ingredients.includes(cleanedIngredient)) {
    console.log('Doublon détecté !');
    return;
  }
  
  const newIngredients = [...ingredients, cleanedIngredient];
  console.log('Nouvelle liste:', newIngredients);
  setIngredients(newIngredients);
};
```

---

## 🎯 Objectifs d'Apprentissage

### JavaScript

En suivant cette méthode, vous allez comprendre :
- ✅ La validation de données
- ✅ L'immutabilité en React
- ✅ Les méthodes de tableau (map, filter, some)
- ✅ La gestion d'état avec useState
- ✅ L'optimisation avec useMemo

### CSS

En améliorant les styles, vous allez apprendre :
- ✅ Les propriétés modernes (flexbox, grid)
- ✅ Les transitions et animations
- ✅ Le responsive design (media queries)
- ✅ Les effets visuels (shadows, transforms)
- ✅ La composition de couleurs

---

## 📊 Auto-Évaluation

Après chaque fonction, demandez-vous :

- [ ] Est-ce que je comprends **pourquoi** ce code fonctionne ?
- [ ] Pourrais-je **expliquer** cette fonction à quelqu'un ?
- [ ] Pourrais-je **réécrire** ce code de mémoire ?
- [ ] Ai-je **testé** avec différentes valeurs ?
- [ ] Ai-je **compris** les erreurs rencontrées ?

Si vous répondez OUI à tout : **Bravo, vous avez compris ! 🎉**

---

## 🚀 Et Après ?

Une fois les fonctions de base complétées :

1. **Améliorez le CSS** (le plus important pour demain !)
2. **Ajoutez des fonctionnalités bonus**
3. **Personnalisez** l'application
4. **Déployez** sur Vercel/Netlify
5. **Ajoutez** au portfolio

---

## 💡 Message Important

> Les corrections sont là pour vous **aider à apprendre**, pas pour vous **dispenser de réfléchir**.
> 
> Le but est de **comprendre**, pas de finir vite.
> 
> Prenez votre temps, expérimentez, faites des erreurs : **c'est comme ça qu'on apprend !**

---

## 🎉 Bon Apprentissage !

N'oubliez pas : **chaque développeur a commencé par où vous êtes maintenant.**

La différence entre un junior et un senior, c'est juste du temps et de la pratique. 💪

**Vous avez tout ce qu'il faut pour réussir ! 🚀**

---

*Dernière mise à jour : Décembre 2025*

