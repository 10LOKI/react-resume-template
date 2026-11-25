# Ayoub Ouharda — CV & Portfolio

Site CV personnel basé sur le template [react-resume-template](https://github.com/tbakerx/react-resume-template), personnalisé pour **Ayoub Ouharda**.

Le site présente un profil **développeur web Full Stack** (Java, Angular, Laravel, React) et une ouverture aux postes de **relation client / centre d’appels en français et en anglais**.

## Contenu

- Profil, compétences et langues (FR / EN / AR)
- Formation (YouCode Nador, université, lycée)
- Expériences (stage PFA chez DEVTI, freelance)
- 6 projets sélectionnés avec vignettes
- Téléchargement du CV (`/assets/resume.pdf`)
- Formulaire de contact qui ouvre un e-mail pré-rempli

## Lancer en local

Le projet utilise Yarn (voir `yarn.lock`).

```bash
yarn install
yarn dev
```

Puis ouvrir http://localhost:3000.

## Personnalisation

Tout le contenu texte est dans `src/data/data.tsx`. Les traductions de l’interface sont dans les composants `src/components/Sections/`.

Le bouton « Télécharger mon CV » sert `public/assets/resume.pdf`. Remplacez ce fichier pour mettre à jour le CV proposé au téléchargement.

## Déploiement

Le projet est un site Next.js classique, déployable sur Vercel, Netlify ou GitHub Pages avec export statique.
