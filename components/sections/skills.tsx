import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { education, skillGroups } from "@/lib/content/skills";
import { ui } from "@/lib/content/ui";
import { createTranslator, t, type Locale } from "@/lib/i18n";

export function Skills({ locale }: { locale: Locale }) {
  const tr = createTranslator(locale);

  return (
    <section id="skills" className="border-y border-line bg-bg-alt">
      <div className="mx-auto max-w-[1180px] px-6 py-[clamp(56px,8vw,110px)]">
        <Reveal className="mb-[clamp(32px,4vw,52px)]">
          <SectionEyebrow index="05">{tr(ui.skills.eyebrow)}</SectionEyebrow>
          <h2 className="font-mono text-[clamp(26px,3.4vw,38px)] font-bold tracking-[-0.03em]">
            {tr(ui.skills.heading)}
          </h2>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-0.5">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.id}
              delay={index * 50}
              className={`py-6 ${
                index === 0 ? "pr-[26px]" : "border-l border-line px-[26px]"
              }`}
            >
              <h3 className="mb-4 font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
                {t(group.title, locale)}
              </h3>
              <ul className="flex flex-wrap gap-[7px]">
                {group.items.map((item) => (
                  <li
                    key={t(item, "fr")}
                    className="rounded-[3px] border border-line px-2.5 py-1.5 font-mono text-[13px] text-fg"
                  >
                    {t(item, locale)}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-[clamp(40px,5vw,64px)] grid grid-cols-1 gap-6 border-t border-line pt-[clamp(32px,4vw,48px)] md:grid-cols-3">
          <h3 className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
            {tr(ui.skills.education)}
          </h3>
          <ol className="flex flex-col gap-[22px] md:col-span-2">
            {education.map((entry) => (
              <li key={entry.id}>
                <p className="mb-1.5 font-mono text-[12.5px] text-dim">
                  {entry.year}
                </p>
                <h4 className="mb-1 font-mono text-[17px] font-bold tracking-[-0.02em]">
                  {t(entry.degree, locale)}
                </h4>
                <p className="text-[14.5px] text-dim">
                  {entry.school}
                  {entry.honours && (
                    <>
                      {" — "}
                      <span className="text-accent">
                        {t(entry.honours, locale)}
                      </span>
                    </>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
