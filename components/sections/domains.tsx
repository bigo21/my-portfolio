import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { domains } from "@/lib/content/domains";
import { projectCountByDomain } from "@/lib/content/projects";
import { ui } from "@/lib/content/ui";
import { createTranslator, t, type Locale } from "@/lib/i18n";

export function Domains({ locale }: { locale: Locale }) {
  const tr = createTranslator(locale);

  return (
    <section id="domains" className="border-t border-line bg-bg-alt">
      <div className="mx-auto max-w-[1180px] px-6 py-[clamp(56px,8vw,110px)]">
        <Reveal className="mb-[clamp(32px,4vw,52px)] max-w-[60ch]">
          <SectionEyebrow index="02">{tr(ui.domains.eyebrow)}</SectionEyebrow>
          <h2 className="mb-3 font-mono text-[clamp(26px,3.4vw,38px)] font-bold tracking-[-0.03em]">
            {tr(ui.domains.heading)}
          </h2>
          <p className="text-[16px] leading-[1.75] text-pretty text-dim">
            {tr(ui.domains.intro)}
          </p>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-px overflow-hidden rounded-[10px] border border-line bg-line">
          {domains.map((domain, index) => {
            const count = domain.key ? projectCountByDomain[domain.key] : null;

            return (
              <Reveal
                as="article"
                key={domain.id}
                delay={index * 40}
                className="flex flex-col gap-3 bg-surface px-6 pt-[26px] pb-6"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-mono text-[17px] font-bold tracking-[-0.02em]">
                    {t(domain.name, locale)}
                  </h3>

                  {count !== null ? (
                    <span className="font-mono text-[11px] whitespace-nowrap text-accent">
                      {count}{" "}
                      {count > 1
                        ? tr(ui.domains.projectCount)
                        : tr(ui.domains.projectCountOne)}
                    </span>
                  ) : (
                    domain.badge && (
                      <span
                        className={`font-mono text-[11px] whitespace-nowrap ${
                          domain.exploring
                            ? "rounded-[3px] border border-line px-[7px] py-[3px] text-dim"
                            : "text-accent"
                        }`}
                      >
                        {t(domain.badge, locale)}
                      </span>
                    )
                  )}
                </div>

                <p className="flex-1 text-[14.5px] leading-[1.7] text-pretty text-dim">
                  {t(domain.description, locale)}
                </p>

                {domain.exploring ? (
                  <a
                    href="#contact"
                    className="font-mono text-[12px] font-semibold text-accent transition-colors hover:text-accent-alt"
                  >
                    {tr(ui.domains.talk)}
                  </a>
                ) : (
                  domain.stack && (
                    <p className="font-mono text-[11.5px] leading-[1.7] text-dim">
                      {t(domain.stack, locale)}
                    </p>
                  )
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
