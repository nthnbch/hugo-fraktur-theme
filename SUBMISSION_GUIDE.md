# Guide de Soumission à Hugo Themes

Ce guide vous accompagne dans la soumission de votre thème au catalogue officiel de Hugo.

## ✅ Prérequis Complétés

Tous les fichiers requis ont été préparés :

- ✅ **theme.toml** : Métadonnées complètes du thème
- ✅ **hugo.toml** : Configuration de version Hugo minimum
- ✅ **LICENSE** : Licence MIT (Open Source)
- ✅ **README.md** : Documentation avec URLs absolues
- ✅ **images/screenshot.png** : Screenshot 2480×1653px (ratio 3:2)
- ✅ **images/tn.png** : Thumbnail 2398×1599px (ratio 3:2)

## 📝 Étapes de Soumission

### 1. Commiter et Pusher vos Modifications

```bash
# Vérifier les modifications
git status

# Ajouter tous les fichiers modifiés
git add .

# Commiter les changements
git commit -m "Préparer le thème pour soumission à Hugo Themes"

# Pusher vers GitHub
git push origin main
```

### 2. Créer un Tag de Version (Recommandé)

Hugo utilise le versioning sémantique. Créer un tag aide à la gestion :

```bash
# Créer un tag de version
git tag -a v1.0.0 -m "Version initiale pour Hugo Themes"

# Pusher le tag
git push origin v1.0.0
```

### 3. Fork du Repository Hugo Themes

1. Allez sur https://github.com/gohugoio/hugoThemesSiteBuilder
2. Cliquez sur le bouton "Fork" en haut à droite
3. Clonez votre fork :

```bash
cd ~/Documents/GitHub
git clone https://github.com/VOTRE-USERNAME/hugoThemesSiteBuilder.git
cd hugoThemesSiteBuilder
```

### 4. Ajouter Votre Thème à themes.txt

Éditez le fichier `themes.txt` et ajoutez votre thème dans l'ordre alphabétique :

```bash
# Ouvrir themes.txt
code themes.txt
```

Ajoutez cette ligne dans l'ordre lexicographique :
```
github.com/nthnbch/hugo-white-paper-theme
```

### 5. Commiter et Créer une Pull Request

```bash
# Ajouter la modification
git add themes.txt

# Commiter avec un message descriptif
git commit -m "Add hugo-white-paper-theme"

# Pusher vers votre fork
git push origin main
```

### 6. Créer la Pull Request sur GitHub

1. Allez sur votre fork : https://github.com/VOTRE-USERNAME/hugoThemesSiteBuilder
2. Cliquez sur "Pull requests" puis "New pull request"
3. Assurez-vous que la base est `gohugoio/hugoThemesSiteBuilder:main` et que la comparaison est votre branche
4. Cliquez sur "Create pull request"
5. Titre : "Add hugo-white-paper-theme"
6. Description : Décrivez brièvement votre thème
7. Créez la PR

### 7. Vérifier le Netlify Deploy Preview

Une fois la PR créée, Netlify va automatiquement :
- Construire le site avec votre thème
- Créer un aperçu (deploy preview)
- Afficher un ✅ vert si tout fonctionne, ou ❌ rouge en cas d'erreur

**Si le build échoue :**
1. Consultez les logs Netlify dans la PR
2. Corrigez les erreurs dans votre repository
3. Pushez les corrections
4. Amendez le commit dans votre PR :
```bash
git commit --amend --no-edit
git push -f
```

### 8. Attendre la Review

L'équipe Hugo va :
- Vérifier que votre thème respecte les critères
- Tester le thème
- Demander des modifications si nécessaire
- Merger la PR si tout est OK

## 🎯 Critères d'Acceptation

Votre thème respecte déjà tous les critères :

- ✅ **Licence Open Source** : MIT License
- ✅ **Pas de version payante** : Thème gratuit
- ✅ **Documentation complète** : README.md détaillé
- ✅ **Images correctes** : Screenshot et thumbnail au bon format
- ✅ **Métadonnées complètes** : theme.toml et hugo.toml
- ✅ **Pas de fork** : Thème original (inspiré de Winston mais différent)

## ⚠️ Points d'Attention

1. **Ne supprimez jamais de tags Git** une fois le thème soumis
2. **Mettez à jour régulièrement** votre thème (au moins tous les 18 mois)
3. **Utilisez le versioning sémantique** pour les releases
4. **Répondez aux issues** sur GitHub

## 🔄 Après Acceptation

Une fois votre PR mergée :
- Le site themes.gohugo.io se reconstruit automatiquement toutes les 24h (à 00:00 UTC)
- Votre thème apparaîtra sur https://themes.gohugo.io
- Les utilisateurs pourront le découvrir et l'installer

## 📚 Ressources

- [Hugo Themes Builder README](https://github.com/gohugoio/hugoThemesSiteBuilder/blob/main/README.md)
- [Versioning Sémantique](https://semver.org/)
- [Guide Hugo Modules](https://gohugo.io/hugo-modules/)

## ✨ Bonne Chance !

Votre thème est prêt pour la soumission. Suivez les étapes ci-dessus et votre thème sera bientôt disponible pour toute la communauté Hugo !
