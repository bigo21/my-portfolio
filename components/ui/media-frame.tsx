import Image from "next/image";

type MediaFrameProps = {
  /** Path under /public. Without it the frame renders a labelled placeholder. */
  src?: string;
  alt: string;
  /** Caption of the empty state. */
  pendingLabel: string;
  sizes?: string;
  className?: string;
};

/**
 * Image well used by the project cards and the off-screen mosaic. Slots that
 * have no artwork yet render a terminal-style placeholder rather than a hole.
 */
export function MediaFrame({
  src,
  alt,
  pendingLabel,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  className = "",
}: MediaFrameProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface-alt ${className}`}
      role="img"
      aria-label={alt}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      <span className="relative font-mono text-[11px] tracking-[0.16em] text-dim uppercase">
        {pendingLabel}
      </span>
      <span className="relative max-w-[80%] text-center font-mono text-[12.5px] text-dim/80">
        {alt}
      </span>
    </div>
  );
}
