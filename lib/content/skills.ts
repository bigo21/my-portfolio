import type { LocalizedText } from "@/lib/i18n";

export type SkillGroup = {
  id: string;
  title: LocalizedText;
  items: LocalizedText[];
};

const plain = (value: string): LocalizedText => ({ fr: value, en: value });

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: { fr: "Langages", en: "Languages" },
    items: ["JavaScript", "PHP", "Python", "Java", "C", "HTML", "CSS"].map(plain),
  },
  {
    id: "frameworks",
    title: { fr: "Frameworks", en: "Frameworks" },
    items: [
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "Laravel",
      "React Native",
      "ElectronJS",
    ].map(plain),
  },
  {
    id: "databases",
    title: { fr: "Bases de données", en: "Databases" },
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Supabase"].map(plain),
  },
  {
    id: "networks",
    title: { fr: "Réseaux & sécurité", en: "Networks & security" },
    items: [
      plain("VLAN"),
      { fr: "Pare-feu", en: "Firewall" },
      plain("DMZ / pfSense"),
      plain("Linux"),
      plain("Windows Server"),
    ],
  },
  {
    id: "tools",
    title: { fr: "Outils", en: "Tools" },
    items: ["Git / GitHub", "Docker", "Figma", "Claude Code"].map(plain),
  },
];

export type Education = {
  id: string;
  year: string;
  degree: LocalizedText;
  school: string;
  honours?: LocalizedText;
};

export const education: Education[] = [
  {
    id: "esign",
    year: "2025",
    degree: {
      fr: "Master Professionnel en Ingénierie des Systèmes Numériques",
      en: "Professional Master's in Digital Systems Engineering",
    },
    school: "ESIGN, Sangmélima",
    honours: { fr: "Mention Très Bien", en: "High honours" },
  },
  {
    id: "bac",
    year: "2019",
    degree: {
      fr: "Baccalauréat C",
      en: "Baccalauréat C (Maths & Physics)",
    },
    school: "Collège Jean-Paul II, Mbalmayo",
  },
];
