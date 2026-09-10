import { profile } from "@/lib/content/profile";
import { ui } from "@/lib/content/ui";
import { createTranslator, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const tr = createTranslator(locale);

  return (
    <footer className="border-t border-line bg-bg-alt">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-[12px] text-dim">
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <span>
          {tr(ui.footer.built)} <span className="text-accent">●</span>
        </span>
      </div>
    </footer>
  );
}
