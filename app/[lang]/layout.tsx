import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ui } from "@/lib/content/ui";
import { profile } from "@/lib/content/profile";
import { isLocale, locales, t, type Locale } from "@/lib/i18n";

import "../globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

/**
 * Applies the stored theme before first paint and flags that JavaScript is
 * running, which is what arms the scroll-reveal animations.
 *
 * `data-theme` is deliberately absent from the JSX below: the attribute is
 * owned by this script and by the theme toggle, and React must not manage it.
 * The script only ever runs on the server-rendered document — every link that
 * would re-render this layout on the client is a full page navigation.
 */
const bootstrapTheme = `(function(){try{var d=document.documentElement;d.dataset.js="1";var s=localStorage.getItem("theme");d.dataset.theme=(s==="light"||s==="dark")?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")}catch(e){document.documentElement.dataset.theme="dark"}})()`;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "fr";

  return {
    title: t(ui.metadata.title, locale),
    description: t(ui.metadata.description, locale),
    authors: [{ name: profile.fullName, url: profile.github }],
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      title: t(ui.metadata.title, locale),
      description: t(ui.metadata.description, locale),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootstrapTheme }} />
      </head>
      <body
        className={`${jetBrainsMono.variable} ${ibmPlexSans.variable} overflow-x-hidden bg-bg font-sans text-fg`}
      >
        <SiteHeader locale={lang} />
        <main>{children}</main>
        <SiteFooter locale={lang} />
      </body>
    </html>
  );
}
