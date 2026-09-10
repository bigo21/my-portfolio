import { notFound } from "next/navigation";

import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Domains } from "@/components/sections/domains";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Interests } from "@/components/sections/interests";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { isLocale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <>
      <Hero locale={lang} />
      <About locale={lang} />
      <Domains locale={lang} />
      <Projects locale={lang} />
      <Experience locale={lang} />
      <Skills locale={lang} />
      <Contact locale={lang} />
      <Interests locale={lang} />
    </>
  );
}
