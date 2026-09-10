import { MediaFrame } from "@/components/ui/media-frame";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { interests } from "@/lib/content/interests";
import { ui } from "@/lib/content/ui";
import { createTranslator, t, type Locale } from "@/lib/i18n";

export function Interests({ locale }: { locale: Locale }) {
  const tr = createTranslator(locale);

  return (
    <section id="interests" className="border-t border-line bg-bg-alt">
      <div className="mx-auto max-w-[1180px] px-6 py-[clamp(48px,6vw,84px)]">
        <Reveal className="mb-[clamp(24px,3vw,36px)] flex flex-wrap items-baseline gap-x-7 gap-y-3.5">
          <SectionEyebrow index="07">{tr(ui.interests.eyebrow)}</SectionEyebrow>
          <p className="mb-4 max-w-[52ch] text-[15px] text-pretty text-dim">
            {tr(ui.interests.intro)}
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-6">
          {interests.map((interest, index) => (
            <Reveal
              as="li"
              key={interest.id}
              delay={index * 60}
              className={`relative min-h-[200px] overflow-hidden rounded-[10px] border border-line bg-surface-alt ${
                index < 2
                  ? "aspect-[16/10] sm:col-span-3"
                  : "aspect-[4/3] sm:col-span-2"
              }`}
            >
              <MediaFrame
                src={interest.image}
                alt={t(interest.title, locale)}
                pendingLabel={tr(ui.media.pending)}
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-[linear-gradient(to_top,rgba(6,9,13,0.92),rgba(6,9,13,0.55)_55%,transparent)] px-4.5 pt-[34px] pb-4">
                <span className="font-mono text-[14px] font-bold tracking-[-0.01em] text-[#f2f6fa]">
                  {t(interest.title, locale)}
                </span>
                <span className="text-[13px] leading-[1.55] text-pretty text-[#b9c4cf]">
                  {t(interest.caption, locale)}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
