import type { LocalizedText } from "@/lib/i18n";

export type Interest = {
  id: string;
  title: LocalizedText;
  caption: LocalizedText;
  /** Path under /public. Falls back to a placeholder frame when absent. */
  image?: string;
};

export const interests: Interest[] = [
  {
    id: "lifestyle",
    title: { fr: "Style de vie", en: "Lifestyle" },
    caption: {
      fr: "Du rythme, du soin apporté aux détails.",
      en: "Rhythm, and care for the details.",
    },
  },
  {
    id: "football",
    title: { fr: "Football", en: "Football" },
    caption: {
      fr: "Le collectif, appris sur le terrain.",
      en: "Teamwork, learned on the pitch.",
    },
  },
  {
    id: "cuisine",
    title: { fr: "Cuisine", en: "Cooking" },
    caption: {
      fr: "Un algorithme aux meilleures récompenses.",
      en: "An algorithm with better rewards.",
    },
  },
  {
    id: "lecture",
    title: { fr: "Lecture", en: "Reading" },
    caption: {
      fr: "La curiosité, au-delà de la doc technique.",
      en: "Curiosity, beyond technical docs.",
    },
  },
  {
    id: "musique",
    title: { fr: "Musique", en: "Music" },
    caption: {
      fr: "La bande-son des sessions de code.",
      en: "The soundtrack to coding sessions.",
    },
  },
];
