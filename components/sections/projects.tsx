import { ProjectsGrid } from "@/components/sections/projects-grid";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { domainKeys, domains } from "@/lib/content/domains";
import { projects } from "@/lib/content/projects";
import { ui } from "@/lib/content/ui";
import { createTranslator, t, type Locale } from "@/lib/i18n";

export function Projects({ locale }: { locale: Locale }) {
  const tr = createTranslator(locale);

  const filters = [
    { value: "all" as const, label: tr(ui.projects.filterAll) },
    ...domainKeys.map((key) => ({
      value: key,
      label: t(domains.find((domain) => domain.key === key)!.name, locale),
    })),
  ];

  return (
    <section
      id="projects"
      className="border-y border-line bg-bg-alt"
    >
      <div className="mx-auto max-w-[1180px] px-6 py-[clamp(56px,8vw,110px)]">
        <Reveal className="mb-[clamp(32px,4vw,56px)]">
          <SectionEyebrow index="03">{tr(ui.projects.eyebrow)}</SectionEyebrow>
          <h2 className="mb-3 font-mono text-[clamp(26px,3.4vw,38px)] font-bold tracking-[-0.03em]">
            {tr(ui.projects.heading)}
          </h2>
          <p className="mb-[26px] max-w-[54ch] text-[16px] text-dim">
            {tr(ui.projects.intro)}
          </p>
        </Reveal>

        <ProjectsGrid
          projects={projects.map((project) => ({
            id: project.id,
            name: project.name,
            index: project.index,
            kind: t(project.kind, locale),
            description: t(project.description, locale),
            tech: project.tech,
            domains: project.domains,
            featured: project.featured ?? false,
            image: project.image,
            imageAlt: project.imageAlt
              ? t(project.imageAlt, locale)
              : project.name,
          }))}
          filters={filters}
          labels={{
            filter: tr(ui.projects.filterLabel),
            empty: tr(ui.projects.empty),
            pendingMedia: tr(ui.media.pending),
          }}
        />
      </div>
    </section>
  );
}
