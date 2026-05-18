# AGENTS Guide

## Projektüberblick
Dies ist eine React + TypeScript + Vite Webanwendung für "Oldtimer Urlaubsreisen".

## Architektur
- `src/App.tsx`: App-Layout, Navigation, Routing.
- `src/pages/*`: Seitenmodule (Home, Reisen, Über uns, Kontakt).
- `src/styles.css`: Zentrales Styling.
- `public/sitemap.xml`: SEO-Sitemap.

## Entwicklungsregeln
1. Neue Seiten immer über React Router hinzufügen.
2. Bei jeder neuen öffentlichen Seite `public/sitemap.xml` aktualisieren.
3. SEO-Basis in `index.html` beibehalten (title, description, canonical, robots).
4. TypeScript-Strict einhalten und Build ohne Fehler halten.
5. Komponenten klein und klar halten.

## Nächste Verbesserungen
- Meta-Tags pro Route via react-helmet-async.
- JSON-LD Schema.org Daten.
- i18n (DE/EN/TR).
- Form-Validierung mit react-hook-form + zod.
