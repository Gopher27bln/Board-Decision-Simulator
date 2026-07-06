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

## KI / ML Integration (Ausblick)

Das aktuelle Mockup arbeitet mit statischen Beispieldaten. Für eine produktive Boardwise-KI könnten folgende Funktionen angebunden werden:

### 1. Optionen generieren (Generative KI)

- **Input:** Beschlussentwurf oder Agendapunkt als Freitext
- **KI:** LLM (z. B. OpenAI GPT-4o, Anthropic Claude, Azure OpenAI) schlägt 3–5 handlungsfähige Optionen vor
- **Integration:** Ein kleiner Backend-Proxy oder Serverless-Endpoint (Netlify Functions, Azure Functions) sendet den Text an die API und parsed die Optionen in das `Option`-Schema

### 2. Impact- und Risiko-Bewertung

- **Input:** Gewählte Option + Kontext (Unternehmensgröße, Branche, Historie)
- **KI:** LLM bewertet Revenue, Kosten, Risiko und Time-to-Value anhand von Trainingsdaten oder Heuristiken
- **Output:** Numerische Scores für das Impact-Diagramm plus begründete Risiken
- **Optional:** Fine-tuned Modell auf eigenen Vorstandsprotokollen für branchenspezifische Einschätzungen

### 3. Stakeholder- und Freigaben-Erkennung

- **Input:** Beschlusstext und zugehörige Dokumente
- **KI:** NER/Classification-Modell (z. B. spaCy, Azure AI Language) erkennt betroffene Bereiche, benötigte Gremien und externe Stakeholder
- **Output:** Automatische Befüllung der Panels „Betroffene Bereiche“, „Benötigte Freigaben“ und „Stakeholder Radar“

### 4. Offene Fragen ableiten

- **Input:** Generierte Optionen + Impact-Bewertung
- **KI:** LLM listet gezielt Informationen auf, die noch fehlen, um eine saubere Entscheidung zu treffen (z. B. fehlende Due-Diligence-Daten, unklare Budgetposten)

### 5. Dokumentenbasierte Anreicherung (RAG)

- **Input:** Hochgeladene Protokolle, Verträge, Finanzpläne
- **KI:** Retrieval-Augmented-Generation (RAG) mit Vektor-DB (z. B. Pinecone, Weaviate, Azure AI Search)
- **Output:** KI bezieht sich bei jeder Empfehlung auf konkrete Dokumentenstellen und Quellen

### Empfohlene Architektur

```text
React App (Teams Tab)
        │
        ▼
Serverless API / Proxy  ──▶  LLM API (OpenAI, Azure, Anthropic)
        │
        ▼
Vektor-DB + Dokumentenspeicher (für RAG)
```

**Wichtig:** API-Keys sollten nie im Frontend liegen, sondern über einen Proxy oder Serverless-Endpoint sicher verwaltet werden.
