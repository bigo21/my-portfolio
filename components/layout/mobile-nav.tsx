"use client";

import { useEffect, useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/ui/icons";

type MobileNavProps = {
  items: { href: string; label: string }[];
  openLabel: string;
  closeLabel: string;
};

/** Anchor menu shown below the desktop breakpoint. */
export function MobileNav({ items, openLabel, closeLabel }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? closeLabel : openLabel}
        className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full border border-line text-dim transition-colors hover:border-accent hover:text-accent"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav
        id="mobile-nav"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-bg/95 backdrop-blur-lg"
      >
        <ul className="mx-auto flex max-w-[1180px] flex-col px-6 py-2">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line/60 py-3.5 font-mono text-[13px] tracking-[0.04em] text-dim uppercase transition-colors last:border-0 hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
