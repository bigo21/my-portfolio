export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

/** A piece of content declined in every supported locale. */
export type LocalizedText = Record<Locale, string>;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}

/** Resolves a localized string. */
export function t(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

/** Bound resolver, so a component reads `tr(ui.nav.about)` instead of repeating the locale. */
export function createTranslator(locale: Locale) {
  return (text: LocalizedText) => text[locale];
}
