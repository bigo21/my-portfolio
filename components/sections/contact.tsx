import { ContactForm } from "@/components/sections/contact-form";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { profile } from "@/lib/content/profile";
import { ui } from "@/lib/content/ui";
import { createTranslator, type Locale } from "@/lib/i18n";

export function Contact({ locale }: { locale: Locale }) {
  const tr = createTranslator(locale);

  const linkClass =
    "flex items-center gap-3 text-accent transition-colors hover:text-accent-alt";

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1180px] px-6 py-[clamp(56px,8vw,110px)]"
    >
      <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(32px,5vw,72px)]">
        <div>
          <SectionEyebrow index="06">{tr(ui.contact.eyebrow)}</SectionEyebrow>
          <h2 className="mb-[18px] font-mono text-[clamp(28px,3.8vw,44px)] leading-[1.12] font-bold tracking-[-0.03em] text-balance">
            {tr(ui.contact.heading)}
          </h2>
          <p className="mb-[34px] max-w-[44ch] text-[16px] leading-[1.75] text-pretty text-dim">
            {tr(ui.contact.intro)}
          </p>

          <ul className="flex flex-col gap-4 font-mono text-[14.5px]">
            <li>
              <a href={`mailto:${profile.email}`} className={linkClass}>
                <MailIcon />
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.phoneHref} className={linkClass}>
                <PhoneIcon />
                {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-dim">
              <PinIcon />
              {profile.location}, {tr(profile.country)}
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <GitHubIcon />
                {profile.githubLabel}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <LinkedInIcon />
                {profile.linkedinLabel}
              </a>
            </li>
          </ul>
        </div>

        <ContactForm
          locale={locale}
          labels={{
            name: tr(ui.contact.name),
            email: tr(ui.contact.email),
            message: tr(ui.contact.message),
            submit: tr(ui.contact.submit),
            submitting: tr(ui.contact.submitting),
          }}
        />
      </Reveal>
    </section>
  );
}
