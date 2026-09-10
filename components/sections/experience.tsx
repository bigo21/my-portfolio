import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { experiences } from "@/lib/content/experience";
import { ui } from "@/lib/content/ui";
import { createTranslator, t, type Locale } from "@/lib/i18n";

export function Experience({ locale }: { locale: Locale }) {
  const tr = createTranslator(locale);

  return (
    <section
      id="experience"
      className="mx-auto max-w-[1180px] px-6 py-[clamp(56px,8vw,110px)]"
    >
      <Reveal className="mb-[clamp(32px,4vw,52px)]">
        <SectionEyebrow index="04">{tr(ui.experience.eyebrow)}</SectionEyebrow>
        <h2 className="font-mono text-[clamp(26px,3.4vw,38px)] font-bold tracking-[-0.03em]">
          {tr(ui.experience.heading)}
        </h2>
      </Reveal>

      <ol className="flex flex-col">
        {experiences.map((experience, index) => (
          <Reveal
            as="li"
            key={experience.id}
            delay={index * 60}
            className="grid grid-cols-1 gap-y-2 border-t border-line py-6 last:border-b md:grid-cols-3 md:gap-x-8"
          >
            <div>
              <p className="mb-1 font-mono text-[12.5px] text-accent">
                {t(experience.period, locale)}
              </p>
              <p className="font-mono text-[11px] tracking-[0.1em] text-dim uppercase">
                {experience.company}
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="mb-2 font-mono text-[19px] font-bold tracking-[-0.02em]">
                {t(experience.role, locale)}
              </h3>
              <p className="max-w-[62ch] text-[15px] leading-[1.7] text-dim">
                {t(experience.description, locale)}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
