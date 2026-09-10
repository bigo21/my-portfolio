import type { LocalizedText } from "@/lib/i18n";

export const profile = {
  firstName: "Loïc Gaëtan",
  lastName: "ANGO ABONDO",
  fullName: "ANGO ABONDO Loïc Gaëtan",
  email: "gloic.ango@gmail.com",
  phone: "(+237) 657 55 96 16",
  phoneHref: "tel:+237657559616",
  location: "Mbalmayo / Yaoundé",
  country: { fr: "Cameroun", en: "Cameroon" } satisfies LocalizedText,
  city: "Yaoundé",
  github: "https://github.com/bigo21",
  githubLabel: "github.com/bigo21",
  linkedin: "https://linkedin.com/in/gaetan-ango-779225246",
  linkedinLabel: "linkedin.com/in/gaetan-ango-779225246",
  portrait: "/images/loic.png",
  resume: "/CV_ANGO_ABONDO_Loic_Gaetan.pdf",
} as const;

/** Roles cycled by the typing effect in the hero. */
export const roles: LocalizedText[] = [
  { fr: "Développeur FullStack", en: "FullStack Developer" },
  { fr: "Développeur Frontend", en: "Frontend Developer" },
  { fr: "Développeur Backend", en: "Backend Developer" },
  { fr: "Développeur Mobile", en: "Mobile Developer" },
  { fr: "DevOps", en: "DevOps" },
  { fr: "Cybersécurité", en: "Cybersecurity" },
  { fr: "Réseaux & systèmes", en: "Networks & systems" },
];

/** Chips shown under the hero call-to-actions. */
export const everydayStack = [
  "React",
  "React Native",
  "Node.js",
  "Angular",
  "Laravel",
  "PostgreSQL",
  "Docker",
];

export type Stat = {
  value: number | null;
  display: string;
  suffix?: string;
  label: LocalizedText;
};

export const stats: Stat[] = [
  {
    value: 4,
    display: "4",
    suffix: "+",
    label: { fr: "Années d'expérience", en: "Years of experience" },
  },
  {
    value: 5,
    display: "5",
    label: { fr: "Produits livrés", en: "Products shipped" },
  },
  {
    value: 25,
    display: "25",
    suffix: "+",
    label: { fr: "Technologies maîtrisées", en: "Technologies mastered" },
  },
  {
    value: null,
    display: "M2",
    label: { fr: "Master — Mention T.B.", en: "Master's — High honours" },
  },
];
