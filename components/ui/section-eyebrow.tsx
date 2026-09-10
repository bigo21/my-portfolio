import type { ReactNode } from "react";

/** "01 / À propos" label that opens each section. */
export function SectionEyebrow({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <p className="mb-4 font-mono text-[12px] tracking-[0.16em] text-accent uppercase">
      <span className="text-dim">{index} /</span> {children}
    </p>
  );
}
