import type { DomainKey } from "@/lib/content/domains";
import { domainKeys } from "@/lib/content/domains";
import type { LocalizedText } from "@/lib/i18n";

export type Project = {
  id: string;
  name: string;
  /** Small label above the title, e.g. "01 — DESKTOP". */
  kind: LocalizedText;
  index: string;
  description: LocalizedText;
  tech: string[];
  /** Filter buckets the project belongs to. */
  domains: DomainKey[];
  /** Spans two columns on wide screens. */
  featured?: boolean;
  /** Path under /public. Falls back to a placeholder frame when absent. */
  image?: string;
  imageAlt?: LocalizedText;
};

export const projects: Project[] = [
  {
    id: "smart-scolar",
    name: "Smart Scolar",
    index: "01",
    kind: { fr: "DESKTOP", en: "DESKTOP" },
    description: {
      fr: "Écosystème de gestion scolaire : élèves, notes, finances, assistance intelligente et synchronisation entre réseau local et serveurs distants.",
      en: "A school management ecosystem: students, grades, finances, smart assistance and synchronisation between local network and remote servers.",
    },
    tech: ["ElectronJS", "React", "Node.js", "SQLite", "PostgreSQL"],
    domains: ["backend", "frontend", "devops"],
    featured: true,
    imageAlt: {
      fr: "Capture Smart Scolar (desktop)",
      en: "Smart Scolar screenshot (desktop)",
    },
  },
  {
    id: "munya",
    name: "MUNYA",
    index: "02",
    kind: { fr: "MOBILE", en: "MOBILE" },
    description: {
      fr: "Application de sécurité pour victimes de violences domestiques : mise en relation anonyme avec des professionnels certifiés, écran de camouflage, chiffrement des données.",
      en: "A safety app for domestic-violence survivors: anonymous matching with certified professionals, a decoy screen, and encrypted data.",
    },
    tech: ["React Native", "Supabase"],
    domains: ["mobile", "securite", "backend"],
    imageAlt: { fr: "Écrans MUNYA (mobile)", en: "MUNYA screens (mobile)" },
  },
  {
    id: "klar-gaz",
    name: "KLAR GAZ",
    index: "03",
    kind: { fr: "MOBILE", en: "MOBILE" },
    description: {
      fr: "Livraison de gaz domestique : commande, suivi de livraison en temps réel et chat entre client et livreur.",
      en: "Domestic gas delivery: ordering, real-time delivery tracking and customer–courier chat.",
    },
    tech: ["React Native", "Socket.io"],
    domains: ["mobile", "backend"],
    imageAlt: { fr: "Écrans KLAR GAZ (mobile)", en: "KLAR GAZ screens (mobile)" },
  },
  {
    id: "otokton",
    name: "Otokton",
    index: "04",
    kind: { fr: "WEB", en: "WEB" },
    description: {
      fr: "Conception UI/UX et intégration front-end / back-end d'une application web complète.",
      en: "UI/UX design plus front-end and back-end integration of a full web application.",
    },
    tech: ["React", "TailwindCSS", "Bootstrap"],
    domains: ["frontend", "backend"],
    imageAlt: { fr: "Capture Otokton (web)", en: "Otokton screenshot (web)" },
  },
  {
    id: "fleuva",
    name: "Fleuva",
    index: "05",
    kind: { fr: "EN COURS", en: "IN PROGRESS" },
    description: {
      fr: "Suite logicielle de gestion d'entreprise. Je développe le module Assistance en tant que partenaire-développeur.",
      en: "A business management software suite. I develop the Assistance module as a partner-developer.",
    },
    tech: ["Angular", "GraphQL", "Laravel"],
    domains: ["frontend", "backend"],
    imageAlt: {
      fr: "Capture Fleuva (module Assistance)",
      en: "Fleuva screenshot (Assistance module)",
    },
  },
];

/** Number of projects tagged with each domain, for the domain cards. */
export const projectCountByDomain: Record<DomainKey, number> =
  Object.fromEntries(
    domainKeys.map((key) => [
      key,
      projects.filter((project) => project.domains.includes(key)).length,
    ]),
  ) as Record<DomainKey, number>;
