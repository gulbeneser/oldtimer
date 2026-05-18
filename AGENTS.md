# AGENTS.md — Oldtimer Urlaubsreisen

## Projektüberblick
Dieses Repository enthält eine professionelle multi-route React-TypeScript/Vite Website für **Oldtimer Urlaubsreisen by DRIVR**. Die Seite ist als hochwertiges Marketing- und Lead-Generation-Konzept für Oldtimer-, Youngtimer- und Sportwagenreisen 2026 aufgebaut.

## Technischer Stack
- React mit TypeScript (`src/main.tsx`, `src/App.tsx`)
- Vite als Build Tool (`vite.config.ts`)
- Globale CSS-Datei ohne CSS-Framework (`src/styles.css`)
- SEO-Basis in `index.html`, `public/robots.txt` und `public/sitemap.xml`

## Struktur und wichtige Dateien
- `index.html`: HTML-Shell, Meta-Tags, Open Graph, Canonical, JSON-LD Schema.org Daten.
- `src/App.tsx`: Hauptanwendung mit leichtem clientseitigem Routing (`/`, `/konzept`, `/reisen`, `/sportwagen`, `/ueber-uns`, `/kontakt`), Header, Hero, Konzept, Reisen, Sportwagen, Über-uns, FAQ, Kontakt und Footer.
- `src/data/site.ts`: Zentrale Datenquelle für Navigation, Reisen, Features, FAQ und Kontaktdaten. Neue Inhalte möglichst zuerst hier ergänzen.
- `src/styles.css`: Vollständiges visuelles Design, Responsive Layout und Komponenten-Styles.
- `src/utils/seo.ts`: Kleine Hilfsfunktion für dokumentbasierte Meta-Aktualisierung.
- `public/sitemap.xml`: Sitemap. Nach jeder neuen öffentlichen Route prüfen und aktualisieren.
- `public/_redirects`: SPA-Fallback für Hosts wie Netlify, damit direkte Unterseiten-URLs auf `index.html` fallen.
- `public/robots.txt`: Verweist auf die Sitemap.

## Entwicklungsworkflow
1. Abhängigkeiten installieren: `npm install`
2. Entwicklungsserver starten: `npm run dev`
3. TypeScript prüfen: `npm run lint`
4. Produktionsbuild prüfen: `npm run build`

## Code-Konventionen
- Neue Inhalte datengetrieben in `src/data/site.ts` modellieren, statt Text mehrfach in Komponenten zu duplizieren.
- TypeScript strikt halten; keine `any`-Abkürzungen für Domain-Daten verwenden.
- Keine `try/catch`-Blöcke um Imports setzen.
- Komponenten in `src/App.tsx` klein, semantisch und zugänglich halten. Bei starkem Wachstum in `src/components/` auslagern.
- CSS-Klassen sprechend und wiederverwendbar benennen.
- Externe Bilder mit sinnvollen `alt`-Texten versehen oder dekorative Hintergründe über CSS nutzen.

## SEO- und Qualitätsregeln
- Jede relevante öffentliche Seite/Route braucht eindeutigen Title, Description, Canonical und Sitemap-Eintrag.
- Strukturierte Daten in `index.html` aktuell halten, wenn sich Firmenname, Telefon, E-Mail, URL oder Leistungsgebiet ändern.
- Sitemap nach jeder Änderung an öffentlichen URLs prüfen und `lastmod` aktualisieren, wenn Inhalte wesentlich geändert wurden.
- Semantische HTML-Elemente (`header`, `main`, `section`, `article`, `footer`) beibehalten.
- Buttons nur für Aktionen verwenden; Navigation und Kontaktlinks als echte Links umsetzen.
- Inhalte auf Deutsch konsistent, professionell und conversion-orientiert formulieren.

## Hinweise für nächste KI-Agenten
- Der Nutzer wünscht bei jeder Aufgabe, dass AGENTS.md geprüft, erzeugt oder aktualisiert wird. Dieses Dokument daher am Ende jeder Aufgabe auf Aktualität prüfen.
- Der Nutzer wünscht außerdem, dass Sitemap-Dateien am Ende jeder Aufgabe geprüft werden. Bei neuen Seiten/Abschnitten `public/sitemap.xml` anpassen.
- Ziel ist „SEO Perfect“: Meta-Daten, semantische Struktur, schnelle Builds, zugängliche Interaktionen und klare Inhalte immer mitdenken.
- Wenn sichtbare UI geändert wird, nach Möglichkeit einen Screenshot über den lokalen Preview-Server erstellen.
