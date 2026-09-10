import Image from "next/image";

import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { RoleTyper } from "@/components/ui/role-typer";
import { everydayStack, profile, roles, stats } from "@/lib/content/profile";
import { ui } from "@/lib/content/ui";
import { createTranslator, t, type Locale } from "@/lib/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const tr = createTranslator(locale);

  return (
    <section
      id="top"
      className="relative mx-auto max-w-[1180px] px-6 pt-[clamp(48px,7vw,104px)] pb-[clamp(40px,5vw,72px)]"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-[clamp(32px,5vw,64px)]">
        <div>
          <p className="mb-[22px] flex items-center gap-2.5 font-mono text-[13px] text-accent">
            <span className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_0_4px_color-mix(in_oklch,var(--accent)_22%,transparent)]" />
            {tr(ui.hero.availability)}
          </p>

          <p className="mb-2.5 font-mono text-[14px] text-dim">
            <span className="text-accent-alt">$</span> {tr(ui.hero.prompt)}
            <span className="caret ml-1" aria-hidden="true" />
          </p>

          <h1 className="mb-[18px] font-mono text-[clamp(38px,6.4vw,72px)] leading-[1.02] font-extrabold tracking-[-0.035em]">
            {profile.lastName}
            <br />
            <span className="text-accent">{profile.firstName}</span>
          </h1>

          <p className="mb-5 min-h-[1.5em] font-mono text-[clamp(14px,1.5vw,17px)] leading-[1.5] text-fg">
            {tr(ui.hero.titlePrefix)}
            <RoleTyper roles={roles.map((role) => t(role, locale))} />
          </p>

          <p className="mb-[30px] max-w-[52ch] text-[16px] leading-[1.72] text-pretty text-dim">
            {tr(ui.hero.pitch)}
          </p>

          <div className="mb-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-[4px] bg-accent px-[22px] py-3.5 font-mono text-[13px] font-semibold tracking-[0.04em] text-bg transition-[filter] hover:brightness-110"
            >
              {tr(ui.hero.ctaProjects)}
            </a>
            <a
              href="#contact"
              className="rounded-[4px] border border-line px-[22px] py-3.5 font-mono text-[13px] font-semibold tracking-[0.04em] text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {tr(ui.hero.ctaContact)}
            </a>
          </div>

          <p className="mb-3.5 font-mono text-[11px] tracking-[0.14em] text-dim uppercase">
            {tr(ui.hero.stackLabel)}
          </p>
          <ul className="flex flex-wrap gap-2">
            {everydayStack.map((tech) => (
              <li
                key={tech}
                className="rounded-[3px] border border-line px-2.5 py-1.5 font-mono text-[12px] text-dim"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center pb-[clamp(56px,7vw,76px)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-[6%] -top-[8%] bottom-[6%] blur-[8px] [background:var(--glow)]"
          />

          <div className="relative aspect-[4/5] w-[min(100%,400px)] overflow-hidden rounded-[10px] border border-line bg-[linear-gradient(170deg,#ffffff_0%,#e7ebef_62%,#cfd6dd_100%)] shadow-[0_30px_70px_-28px_rgba(0,0,0,0.65)]">
            <Image
              src={profile.portrait}
              alt={tr(ui.hero.portraitAlt)}
              width={1254}
              height={1254}
              priority
              sizes="(min-width: 1024px) 400px, 100vw"
              className="absolute bottom-0 left-1/2 w-[104%] max-w-none -translate-x-1/2 contrast-[1.03] grayscale-[0.15]"
            />
            <span className="absolute top-3 left-3.5 font-mono text-[10.5px] tracking-[0.16em] text-[#5b6672] uppercase">
              01 / loic.png
            </span>
          </div>

          <div className="absolute bottom-0 left-0 w-[min(78%,290px)] animate-drift overflow-hidden rounded-lg border border-line bg-surface shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-1.5 border-b border-line bg-surface-alt px-3 py-2.5">
              <span className="h-2 w-2 rounded-full bg-shell-red" />
              <span className="h-2 w-2 rounded-full bg-shell-amber" />
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="ml-1.5 font-mono text-[10.5px] text-dim">
                dev.ts
              </span>
            </div>
            <pre className="overflow-hidden p-3.5 font-mono text-[11.5px] leading-[1.75] text-dim">
              <span className="text-accent-alt">const</span> dev = {"{"}
              {"\n"} name: <span className="text-accent">&quot;Loïc Gaëtan&quot;</span>,
              {"\n"} role: <span className="text-accent">&quot;FullStack &amp; Mobile&quot;</span>,
              {"\n"} base: <span className="text-accent">&quot;Yaoundé, CM&quot;</span>,
              {"\n"} stack: [<span className="text-accent">&quot;React&quot;</span>,{" "}
              <span className="text-accent">&quot;Node&quot;</span>,
              {"\n"}         <span className="text-accent">&quot;Laravel&quot;</span>],
              {"\n"} ships: <span className="text-accent-alt">true</span>,
              {"\n"}
              {"}"};
            </pre>
          </div>
        </div>
      </div>

      <Reveal
        as="dl"
        className="mt-[clamp(44px,6vw,80px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-0.5 border-y border-line"
      >
        {stats.map((stat, index) => (
          <div
            key={stat.display}
            className={`px-5 py-[26px] ${index > 0 ? "border-l border-line" : ""}`}
          >
            <dt className="mb-1.5 font-mono text-[clamp(30px,4vw,44px)] font-extrabold tracking-[-0.03em] text-accent">
              {stat.value === null ? (
                stat.display
              ) : (
                <>
                  <CountUp to={stat.value} />
                  {stat.suffix}
                </>
              )}
            </dt>
            <dd className="font-mono text-[11px] tracking-[0.13em] text-dim uppercase">
              {t(stat.label, locale)}
            </dd>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
