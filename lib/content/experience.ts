import type { LocalizedText } from "@/lib/i18n";

export type Experience = {
  id: string;
  period: LocalizedText;
  company: string;
  role: LocalizedText;
  description: LocalizedText;
};

export const experiences: Experience[] = [
  {
    id: "umdeny",
    period: { fr: "Avril 2026 — Présent", en: "April 2026 — Present" },
    company: "UMDENY SARL",
    role: { fr: "Développeur Web Junior", en: "Junior Web Developer" },
    description: {
      fr: "Développement et maintenance d'applications web en production.",
      en: "Building and maintaining web applications in production.",
    },
  },
  {
    id: "cover-fleuva",
    period: { fr: "Novembre 2025 — Présent", en: "November 2025 — Present" },
    company: "COVER SARL",
    role: {
      fr: "Partenaire-Développeur — Projet Fleuva",
      en: "Partner-Developer — Fleuva project",
    },
    description: {
      fr: "Module Assistance de la suite Fleuva : Angular, GraphQL, Laravel.",
      en: "The Assistance module of the Fleuva suite: Angular, GraphQL, Laravel.",
    },
  },
  {
    id: "smart-scolar",
    period: {
      fr: "Octobre 2024 — Septembre 2025",
      en: "October 2024 — September 2025",
    },
    company: "Smart Scolar",
    role: { fr: "Développeur FullStack", en: "FullStack Developer" },
    description: {
      fr: "Conception et développement de l'écosystème desktop de gestion scolaire, de la base de données à l'interface.",
      en: "Design and development of the desktop school-management ecosystem, from database to interface.",
    },
  },
  {
    id: "cover-it",
    period: {
      fr: "Septembre 2022 — Septembre 2025",
      en: "September 2022 — September 2025",
    },
    company: "COVER SARL",
    role: { fr: "Informaticien Généraliste", en: "IT Generalist" },
    description: {
      fr: "Support, administration systèmes et réseaux, maintenance du parc informatique.",
      en: "Support, systems and network administration, hardware fleet maintenance.",
    },
  },
  {
    id: "metaconnx",
    period: { fr: "Janvier 2022 — Mai 2024", en: "January 2022 — May 2024" },
    company: "Metaconn'X",
    role: { fr: "Technicien Réseau", en: "Network Technician" },
    description: {
      fr: "Déploiement et sécurisation d'infrastructures réseau : VLAN, pare-feu, DMZ.",
      en: "Deploying and securing network infrastructure: VLANs, firewalls, DMZ.",
    },
  },
];
