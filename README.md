# Board Decision Simulator

Ein React-Mockup für einen Microsoft Teams-Tab, der als interaktives Governance-Cockpit für Vorstandsentscheidungen dient.

## Features

- Teams-ähnliches UI mit Tab-Frame und Meeting-Context
- Zwei statische Beispiel-Beschlüsse:
  - Cloud-Investitionsprogramm 2025
  - Gründung Tochtergesellschaft Südamerika
- Pro Beschluss: 3 Entscheidungsoptionen mit simuliertem Impact
- Dashboard-Panels:
  - Impact & Business Value (Balkendiagramm)
  - Betroffene Bereiche
  - Risiken & Abhängigkeiten
  - Benötigte Freigaben
  - Fehlende Informationen
  - Stakeholder Radar (Interesse/Einfluss)

## Technik

- React 18 + TypeScript + Vite
- Tailwind CSS
- Lucide React Icons
- Recharts für Diagramme

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Für Netlify ist `netlify.toml` bereits konfiguriert. Einfach das Repository verbinden oder `netlify deploy --prod --dir=dist` nutzen.
