import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navItems } from "@/lib/content/navigation";
import { profile } from "@/lib/content/profile";
import { ui } from "@/lib/content/ui";
import { createTranslator, otherLocale, type Locale } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const tr = createTranslator(locale);
  const target = otherLocale(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1180px] items-center gap-5 px-6 py-3.5">
        <a
          href="#top"
          aria-label={tr(ui.header.home)}
          className="flex items-center gap-2 font-mono text-[15px] font-bold tracking-[-0.01em] text-fg"
        >
          <span className="text-accent">~/</span>loic
          <span className="font-normal text-dim">.dev</span>
        </a>

        <div className="flex-1" />

        <ul className="hidden gap-[22px] font-mono text-[12.5px] tracking-[0.04em] text-dim uppercase lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-accent"
              >
                {tr(item.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`/${target}`}
            hrefLang={target}
            title={tr(ui.header.language)}
            aria-label={tr(ui.header.language)}
            className="rounded-full border border-line px-2.5 py-1.5 font-mono text-[12px] font-medium tracking-[0.06em] text-dim transition-colors hover:border-accent hover:text-fg"
          >
            {locale === "fr" ? (
              <>
                FR / <span className="text-accent">EN</span>
              </>
            ) : (
              <>
                <span className="text-accent">FR</span> / EN
              </>
            )}
          </a>

          <ThemeToggle label={tr(ui.header.theme)} />

          <a
            href={profile.resume}
            download
            aria-label={tr(ui.header.resumeLabel)}
            className="rounded-full bg-accent px-3.5 py-2 font-mono text-[12px] font-semibold tracking-[0.05em] whitespace-nowrap text-bg uppercase transition-[filter] hover:brightness-110"
          >
            {tr(ui.header.resume)}
          </a>

          <MobileNav
            items={navItems.map((item) => ({
              href: item.href,
              label: tr(item.label),
            }))}
            openLabel={tr(ui.header.openMenu)}
            closeLabel={tr(ui.header.closeMenu)}
          />
        </div>
      </nav>
    </header>
  );
}
