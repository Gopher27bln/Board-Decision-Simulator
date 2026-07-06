import type { Scenario } from "../types";

export const scenarios: Scenario[] = [
  {
    id: "cloud-invest",
    title: "Cloud-Investitionsprogramm 2025",
    description:
      "Migration der On-Premise-Infrastruktur in eine cloud-native Plattform. Der Vorstand muss zwischen Voll-Investition, Pilot und Verschiebung entscheiden.",
    status: "ready",
    options: [
      {
        id: "opt-invest",
        label: "Option A: Investieren",
        summary:
          "Volle Migration innerhalb von 12 Monaten. Hohe Investition, aber schnellster Time-to-Value und volle Skalierbarkeit.",
        impact: { revenue: 4, cost: 5, risk: 3, timeToValue: 9 },
        affectedAreas: ["IT", "Finance", "Legal", "Operations", "HR"],
        risks: [
          { text: "Hohe Upfront-Kosten und Budgetumverteilung", severity: "high" },
          { text: "Abhängigkeit vom Cloud-Provider", severity: "medium" },
          { text: "Mitarbeiter:innen müssen neu geschult werden", severity: "medium" },
        ],
        approvals: [
          "Investitionsausschuss",
          "IT-Beirat",
          "Datenschutzbeauftragte:r",
          "Aufsichtsrat (ab >5 Mio.)",
        ],
        openQuestions: [
          "Genaues TCU-Modell des bevorzugten Providers",
          "Exit-Strategie und Datenportabilität",
          "Bestehende Vertragslaufzeiten mit Rechenzentren",
        ],
        stakeholderRadar: [
          { name: "CIO", role: "Intern", interest: 9, influence: 8 },
          { name: "CFO", role: "Intern", interest: 8, influence: 9 },
          { name: "COO", role: "Intern", interest: 7, influence: 7 },
          { name: "Cloud-Provider", role: "Extern", interest: 6, influence: 5 },
          { name: "Betriebsrat", role: "Intern", interest: 5, influence: 6 },
          { name: "Datenschutzbehörde", role: "Extern", interest: 4, influence: 7 },
        ],
      },
      {
        id: "opt-pilot",
        label: "Option B: Pilot",
        summary:
          "Migration eines nicht-kritischen Systems in 6 Monaten. Proof-of-Value mit begrenztem Risiko und messbaren Ergebnissen.",
        impact: { revenue: 2, cost: 2, risk: 1, timeToValue: 6 },
        affectedAreas: ["IT", "Operations", "Legal"],
        risks: [
          { text: "Pilot könnte nicht repräsentativ sein", severity: "medium" },
          { text: "Verzögerte Gesamtabschaltung alter Systeme", severity: "low" },
        ],
        approvals: [
          "IT-Beirat",
          "Pilot-System-Verantwortliche:r",
          "Datenschutzbeauftragte:r",
        ],
        openQuestions: [
          "Auswahl des Pilot-Systems",
          "KPIs für den Proof-of-Value",
          "Budget für Pilot-Phase",
        ],
        stakeholderRadar: [
          { name: "CIO", role: "Intern", interest: 8, influence: 8 },
          { name: "CFO", role: "Intern", interest: 6, influence: 7 },
          { name: "COO", role: "Intern", interest: 5, influence: 6 },
          { name: "Cloud-Provider", role: "Extern", interest: 4, influence: 4 },
          { name: "Betriebsrat", role: "Intern", interest: 3, influence: 4 },
          { name: "Datenschutzbehörde", role: "Extern", interest: 2, influence: 5 },
        ],
      },
      {
        id: "opt-postpone",
        label: "Option C: Verschieben",
        summary:
          "Keine Migration in 2025. Weiterbetrieb der On-Premise-Landschaft. Vermeidet Investitionsrisiko, aber höhere laufende Kosten.",
        impact: { revenue: -1, cost: 3, risk: 4, timeToValue: 0 },
        affectedAreas: ["IT", "Finance", "Operations"],
        risks: [
          { text: "Wachsende technische Schuld", severity: "high" },
          { text: "Wettbewerbsnachteil durch geringere Agilität", severity: "high" },
          { text: "Erhöhte Wartungs- und Lizenzkosten", severity: "medium" },
        ],
        approvals: ["CFO", "IT-Beirat"],
        openQuestions: [
          "Wie lange sind alte Systeme noch supportfähig?",
          "Welche regulatorischen Anforderungen drohen?",
          "Alternativen zu einer Full-Cloud-Migration?",
        ],
        stakeholderRadar: [
          { name: "CIO", role: "Intern", interest: 7, influence: 7 },
          { name: "CFO", role: "Intern", interest: 7, influence: 9 },
          { name: "COO", role: "Intern", interest: 6, influence: 6 },
          { name: "Cloud-Provider", role: "Extern", interest: 2, influence: 3 },
          { name: "Betriebsrat", role: "Intern", interest: 4, influence: 5 },
          { name: "Datenschutzbehörde", role: "Extern", interest: 3, influence: 6 },
        ],
      },
    ],
  },
  {
    id: "new-subsidiary",
    title: "Gründung Tochtergesellschaft Südamerika",
    description:
      "Aufbau einer lokalen Tochtergesellschaft in Brasilien, um Marktzugang und lokale Compliance sicherzustellen.",
    status: "draft",
    options: [
      {
        id: "opt-full-subsidiary",
        label: "Option A: Vollständige Tochterfirma",
        summary:
          "Eigenständige GmbH-ähnliche Rechtsform mit lokalem Geschäftsführer. Volle Kontrolle, aber hoher Aufbauaufwand.",
        impact: { revenue: 5, cost: 5, risk: 4, timeToValue: 18 },
        affectedAreas: ["Legal", "Finance", "HR", "Sales", "Operations"],
        risks: [
          { text: "Hohe regulatorische Komplexität (Steuern, Arbeitsrecht)", severity: "high" },
          { text: "Kapitalbindung für Gründung und Betrieb", severity: "high" },
          { text: "Rekrutierung lokaler Führungskräfte", severity: "medium" },
        ],
        approvals: [
          "Vorstand (Vollständigkeit)",
          "Aufsichtsrat",
          "Steuerberater (international)",
          "Compliance-Officer",
          "Notarielle Gründungsurkunde",
        ],
        openQuestions: [
          "Optimale Rechtsform in Brasilien",
          "Lokale Steuerstruktur und Transfer Pricing",
          "Sitz und Repräsentanzpflichten",
        ],
        stakeholderRadar: [
          { name: "CEO", role: "Intern", interest: 9, influence: 10 },
          { name: "CLO", role: "Intern", interest: 9, influence: 8 },
          { name: "CFO", role: "Intern", interest: 8, influence: 9 },
          { name: "CHRO", role: "Intern", interest: 7, influence: 6 },
          { name: "Lokaler Berater", role: "Extern", interest: 6, influence: 5 },
          { name: "Brasilianische Behörden", role: "Extern", interest: 4, influence: 8 },
        ],
      },
      {
        id: "opt-partnership",
        label: "Option B: Joint Venture / Partner",
        summary:
          "Zusammenarbeit mit lokalem Partner. Geringerer Kapitalbedarf und schnellerer Markteintritt, aber weniger Kontrolle.",
        impact: { revenue: 3, cost: 3, risk: 3, timeToValue: 12 },
        affectedAreas: ["Legal", "Sales", "Finance", "Operations"],
        risks: [
          { text: "Abhängigkeit vom Partner und Know-how-Transfer", severity: "medium" },
          { text: "Vertrags- und Governance-Risiken", severity: "medium" },
          { text: "Gewinn- und Kontrollverteilung", severity: "medium" },
        ],
        approvals: [
          "Vorstand",
          "Aufsichtsrat (ab Vertragsvolumen >2 Mio.)",
          "Compliance-Officer",
          "Rechtsexperte LATAM",
        ],
        openQuestions: [
          "Kurzliste potenzieller Partner",
          "Due-Diligence-Status",
          "Gewinn- und Kontrollmechanismen",
        ],
        stakeholderRadar: [
          { name: "CEO", role: "Intern", interest: 8, influence: 9 },
          { name: "CLO", role: "Intern", interest: 8, influence: 7 },
          { name: "CFO", role: "Intern", interest: 7, influence: 8 },
          { name: "CHRO", role: "Intern", interest: 4, influence: 5 },
          { name: "Lokaler Berater", role: "Extern", interest: 7, influence: 6 },
          { name: "Brasilianische Behörden", role: "Extern", interest: 3, influence: 7 },
        ],
      },
      {
        id: "opt-remote",
        label: "Option C: Remote aus Deutschland",
        summary:
          "Marktbearbeitung über deutsches Unternehmen mit lokalen Vertriebsagenten. Geringster Aufbauaufwand, aber begrenzte Skalierung.",
        impact: { revenue: 1, cost: 2, risk: 2, timeToValue: 6 },
        affectedAreas: ["Sales", "Legal", "Finance"],
        risks: [
          { text: "Steuerliche Niederlassungsrisiken (Permanent Establishment)", severity: "high" },
          { text: "Geringere Akzeptanz bei lokalen Kunden", severity: "medium" },
          { text: "Längere Reaktionszeiten im Vertrieb", severity: "low" },
        ],
        approvals: ["Vorstand", "Steuerberater (international)", "Compliance-Officer"],
        openQuestions: [
          "PE-Risiko-Analyse für Vertriebsaktivitäten",
          "Lokale Vertriebsagenten-Verträge",
          "Währungsabsicherung und Zahlungsverkehr",
        ],
        stakeholderRadar: [
          { name: "CEO", role: "Intern", interest: 7, influence: 9 },
          { name: "CLO", role: "Intern", interest: 8, influence: 7 },
          { name: "CFO", role: "Intern", interest: 7, influence: 8 },
          { name: "CHRO", role: "Intern", interest: 2, influence: 4 },
          { name: "Lokaler Berater", role: "Extern", interest: 5, influence: 5 },
          { name: "Brasilianische Behörden", role: "Extern", interest: 3, influence: 6 },
        ],
      },
    ],
  },
];
