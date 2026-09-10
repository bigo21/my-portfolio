import { Reveal } from "@/components/ui/reveal";
import { RichText } from "@/components/ui/rich-text";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { profile } from "@/lib/content/profile";
import { ui } from "@/lib/content/ui";
import { createTranslator, type Locale } from "@/lib/i18n";

export function About({ locale }: { locale: Locale }) {
  const tr = createTranslator(locale);

  return (
    <section
      id="about"
      className="mx-auto max-w-[1180px] px-6 py-[clamp(56px,8vw,110px)]"
    >
      <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(28px,5vw,72px)]">
        <div>
          <SectionEyebrow index="01">{tr(ui.about.eyebrow)}</SectionEyebrow>
          <h2 className="font-mono text-[clamp(26px,3.4vw,38px)] leading-[1.15] font-bold tracking-[-0.03em] text-balance">
            {tr(ui.about.heading)}
          </h2>
        </div>

        <div>
          <p className="mb-5 text-[16.5px] leading-[1.8] text-pretty text-dim">
            <RichText>{tr(ui.about.paragraph1)}</RichText>
          </p>
          <p className="mb-7 text-[16.5px] leading-[1.8] text-pretty text-dim">
            {tr(ui.about.paragraph2)}
          </p>

          <ul className="flex flex-wrap gap-x-[26px] gap-y-3 font-mono text-[13px]">
            <li className="text-dim">
              <span className="text-accent">▹</span> {profile.location},{" "}
              {tr(profile.country)}
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent transition-colors hover:text-accent-alt"
              >
                {profile.githubLabel}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent transition-colors hover:text-accent-alt"
              >
                linkedin
              </a>
            </li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
