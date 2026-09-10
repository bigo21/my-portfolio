# Portfolio — ANGO ABONDO Loïc Gaëtan

Portfolio one-page bilingue (FR / EN), style sombre / terminal, construit avec
Next.js 16 (App Router), React 19, TypeScript et Tailwind CSS v4.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000 → redirige vers /fr ou /en
npm run build
npm run lint
```

## Architecture

```
app/
  [lang]/layout.tsx    Layout racine : <html lang>, polices, thème, header/footer
  [lang]/page.tsx      Les huit sections de la page
  globals.css          Tokens de design, thèmes clair/sombre, animations
components/
  layout/              Header (nav, bascules FR-EN et thème, CV) et footer
  sections/            Une section par fichier
  ui/                  Briques partagées (Reveal, CountUp, RoleTyper, icônes…)
lib/
  i18n.ts              Locales, type LocalizedText, helpers de traduction
  content/             Tout le contenu éditorial, typé
  actions/             Server Action du formulaire de contact
proxy.ts               Négocie la langue sur `/` et redirige vers /fr ou /en
```

### Internationalisation

Chaque langue est une route prérendue (`/fr`, `/en`). Le contenu vit en un seul
endroit, sous forme d'objets `{ fr, en }` — les deux langues ne peuvent pas
diverger. `lib/i18n.ts` expose `t()` et `createTranslator()` pour les résoudre.

La bascule FR/EN est volontairement un lien classique et non un `<Link>` : le
site n'a qu'une page par langue, et une navigation complète laisse le script
d'amorçage réappliquer le thème mémorisé.

### Thème clair / sombre

Les tokens sont des variables CSS sur `:root`, redéfinies sous
`html[data-theme="light"]`, puis exposées à Tailwind via `@theme inline`. Un
script inline dans `<head>` applique le thème stocké avant le premier rendu,
donc pas de flash. L'attribut `data-theme` n'est jamais rendu par React : il
appartient au script et au bouton de bascule.

### Server Components

Tout est rendu côté serveur par défaut. Seuls sont des Client Components les
éléments réellement interactifs : `Reveal`, `CountUp`, `RoleTyper`,
`ThemeToggle`, `MobileNav`, `ProjectsGrid` (filtres) et `ContactForm`.

## Ce qu'il reste à brancher

- **Formulaire de contact** — la Server Action `lib/actions/contact.ts` valide
  et renvoie les états d'UI, mais l'envoi réel est un `TODO` : il suffit de
  remplacer `deliverMessage()` par un appel à un service mail (exemple Resend
  en commentaire dans le fichier).
- **Visuels des projets et de la section « Hors écran »** — les emplacements
  affichent un placeholder. Pour les remplir : déposer l'image dans
  `public/images/`, puis renseigner le champ `image` de l'entrée concernée dans
  `lib/content/projects.ts` ou `lib/content/interests.ts`.

## Déploiement

Le site est entièrement statique en dehors de la Server Action du formulaire ;
il se déploie tel quel sur Vercel.
