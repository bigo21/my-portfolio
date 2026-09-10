import type { LocalizedText } from "@/lib/i18n";

export type NavItem = {
  href: string;
  label: LocalizedText;
};

export const navItems: NavItem[] = [
  { href: "#about", label: { fr: "À propos", en: "About" } },
  { href: "#domains", label: { fr: "Domaines", en: "Domains" } },
  { href: "#projects", label: { fr: "Projets", en: "Projects" } },
  { href: "#experience", label: { fr: "Parcours", en: "Experience" } },
  { href: "#skills", label: { fr: "Stack", en: "Stack" } },
  { href: "#contact", label: { fr: "Contact", en: "Contact" } },
];
