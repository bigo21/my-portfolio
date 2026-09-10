import type { LocalizedText } from "@/lib/i18n";

/** Domain keys double as the project filter values. */
export const domainKeys = [
  "frontend",
  "backend",
  "mobile",
  "devops",
  "securite",
] as const;

export type DomainKey = (typeof domainKeys)[number];

export type Domain = {
  id: string;
  /** Set when the card should tally the projects tagged with this domain. */
  key: DomainKey | null;
  name: LocalizedText;
  /** Shown instead of the project tally, for domains that are not project filters. */
  badge?: LocalizedText;
  description: LocalizedText;
  stack?: LocalizedText;
  /** Renders a link to the contact section instead of a stack line. */
  exploring?: boolean;
};

export const domains: Domain[] = [
  {
    id: "frontend",
    key: "frontend",
    name: { fr: "Frontend", en: "Frontend" },
    description: {
      fr: "Interfaces réactives et accessibles, du design system au composant métier.",
      en: "Responsive, accessible interfaces, from design system to business component.",
    },
    stack: {
      fr: "React · Next.js · Angular · Tailwind",
      en: "React · Next.js · Angular · Tailwind",
    },
  },
  {
    id: "backend",
    key: "backend",
    name: { fr: "Backend", en: "Backend" },
    description: {
      fr: "APIs, modèles de données et logique métier pensés pour durer et se maintenir.",
      en: "APIs, data models and business logic built to last and to maintain.",
    },
    stack: {
      fr: "Node.js · Laravel · GraphQL · PostgreSQL",
      en: "Node.js · Laravel · GraphQL · PostgreSQL",
    },
  },
  {
    id: "mobile",
    key: "mobile",
    name: { fr: "Mobile", en: "Mobile" },
    description: {
      fr: "Applications cross-platform livrées jusqu'au store, temps réel inclus.",
      en: "Cross-platform apps shipped all the way to the store, real-time included.",
    },
    stack: {
      fr: "React Native · Expo · Supabase · Socket.io",
      en: "React Native · Expo · Supabase · Socket.io",
    },
  },
  {
    id: "devops",
    key: "devops",
    name: { fr: "DevOps", en: "DevOps" },
    description: {
      fr: "Conteneurisation, déploiement et synchronisation entre local et distant.",
      en: "Containerisation, deployment and local-to-remote synchronisation.",
    },
    stack: {
      fr: "Docker · Git · Linux · Windows Server",
      en: "Docker · Git · Linux · Windows Server",
    },
  },
  {
    id: "securite",
    key: "securite",
    name: { fr: "Cybersécurité", en: "Cybersecurity" },
    description: {
      fr: "Chiffrement, anonymat et durcissement d'infrastructure — pare-feu, DMZ.",
      en: "Encryption, anonymity and infrastructure hardening — firewalls, DMZ.",
    },
    stack: {
      fr: "pfSense · DMZ · Chiffrement",
      en: "pfSense · DMZ · Encryption",
    },
  },
  {
    id: "networks",
    key: null,
    name: { fr: "Réseaux & systèmes", en: "Networks & systems" },
    badge: { fr: "4 ans", en: "4 years" },
    description: {
      fr: "Le socle : quatre ans de terrain à déployer et sécuriser des infrastructures.",
      en: "The foundation: four years in the field deploying and securing infrastructure.",
    },
    stack: { fr: "VLAN · Pare-feu · Linux", en: "VLAN · Firewall · Linux" },
  },
  {
    id: "ai",
    key: null,
    name: { fr: "IA / ML", en: "AI / ML" },
    badge: { fr: "En cours", en: "Exploring" },
    description: {
      fr: "Formation en intelligence artificielle, premières intégrations d'assistance intelligente en produit.",
      en: "Trained in artificial intelligence, with first smart-assistance features shipped in product.",
    },
    exploring: true,
  },
  {
    id: "data",
    key: null,
    name: { fr: "Data", en: "Data" },
    badge: { fr: "En cours", en: "Exploring" },
    description: {
      fr: "Modélisation, requêtage et restitution — la suite naturelle des bases que j'administre déjà.",
      en: "Modelling, querying and reporting — the natural next step from the databases I already run.",
    },
    exploring: true,
  },
];
