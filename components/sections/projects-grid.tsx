"use client";

import { useMemo, useState } from "react";

import { MediaFrame } from "@/components/ui/media-frame";
import { Reveal } from "@/components/ui/reveal";
import type { DomainKey } from "@/lib/content/domains";

export type ProjectCard = {
  id: string;
  name: string;
  index: string;
  kind: string;
  description: string;
  tech: string[];
  domains: DomainKey[];
  featured: boolean;
  image?: string;
  imageAlt: string;
};

type ProjectsGridProps = {
  projects: ProjectCard[];
  filters: { value: DomainKey | "all"; label: string }[];
  labels: {
    filter: string;
    empty: string;
    pendingMedia: string;
  };
};

export function ProjectsGrid({ projects, filters, labels }: ProjectsGridProps) {
  const [active, setActive] = useState<DomainKey | "all">("all");

  const visible = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((project) => project.domains.includes(active)),
    [active, projects],
  );

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 font-mono text-[11px] tracking-[0.13em] text-dim uppercase">
          {labels.filter}
        </span>
        {filters.map((filter) => {
          const on = filter.value === active;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              aria-pressed={on}
              className={`cursor-pointer rounded-[3px] border px-3 py-[7px] font-mono text-[12.5px] transition-colors ${
                on
                  ? "border-accent bg-accent text-bg"
                  : "border-line text-dim hover:border-accent hover:text-fg"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 font-mono text-[14px] text-dim">{labels.empty}</p>
      ) : (
        <div className="mt-[clamp(28px,4vw,44px)] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) =>
            project.featured ? (
              <Reveal
                as="article"
                key={project.id}
                className="grid grid-cols-1 overflow-hidden rounded-[10px] border border-line bg-surface md:col-span-2 lg:grid-cols-2"
              >
                <div className="relative min-h-[280px] bg-surface-alt">
                  <MediaFrame
                    src={project.image}
                    alt={project.imageAlt}
                    pendingLabel={labels.pendingMedia}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
                <div className="p-[clamp(24px,3vw,38px)]">
                  <p className="mb-3 font-mono text-[11px] tracking-[0.14em] text-accent">
                    {project.index} — {project.kind}
                  </p>
                  <h3 className="mb-3 font-mono text-[26px] font-bold tracking-[-0.02em]">
                    {project.name}
                  </h3>
                  <p className="mb-5 text-[15px] leading-[1.75] text-pretty text-dim">
                    {project.description}
                  </p>
                  <TechList tech={project.tech} />
                </div>
              </Reveal>
            ) : (
              <Reveal
                as="article"
                key={project.id}
                className="flex flex-col overflow-hidden rounded-[10px] border border-line bg-surface"
              >
                <div className="relative h-[220px] bg-surface-alt">
                  <MediaFrame
                    src={project.image}
                    alt={project.imageAlt}
                    pendingLabel={labels.pendingMedia}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="font-mono text-[11px] tracking-[0.14em] text-accent">
                    {project.index} — {project.kind}
                  </p>
                  <h3 className="font-mono text-[21px] font-bold tracking-[-0.02em]">
                    {project.name}
                  </h3>
                  <p className="flex-1 text-[14.5px] leading-[1.7] text-pretty text-dim">
                    {project.description}
                  </p>
                  <TechList tech={project.tech} />
                </div>
              </Reveal>
            ),
          )}
        </div>
      )}
    </>
  );
}

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-[7px]">
      {tech.map((item) => (
        <li
          key={item}
          className="rounded-[3px] bg-surface-alt px-[9px] py-[5px] font-mono text-[11.5px] text-dim"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
