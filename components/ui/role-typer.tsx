"use client";

import { useEffect, useState } from "react";

const TYPE_DELAY = 62;
const ERASE_DELAY = 34;
const HOLD_DELAY = 1500;
const SWITCH_DELAY = 220;
const START_DELAY = 1200;

/** Types and erases each role in turn, terminal-style. */
export function RoleTyper({ roles }: { roles: string[] }) {
  const [text, setText] = useState(roles[0] ?? "");

  useEffect(() => {
    if (roles.length === 0) return;

    // Reduced motion keeps the first role, rendered as the initial state.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let index = 0;
    let length = 0;
    let erasing = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = roles[index % roles.length];
      length += erasing ? -1 : 1;
      setText(word.slice(0, length));

      let wait = erasing ? ERASE_DELAY : TYPE_DELAY;
      if (!erasing && length === word.length) {
        erasing = true;
        wait = HOLD_DELAY;
      } else if (erasing && length === 0) {
        erasing = false;
        index += 1;
        wait = SWITCH_DELAY;
      }

      timer = setTimeout(tick, wait);
    };

    timer = setTimeout(tick, START_DELAY);
    return () => clearTimeout(timer);
  }, [roles]);

  return (
    <>
      <span className="font-medium text-accent">{text}</span>
      <span className="caret ml-0.5" aria-hidden="true" />
    </>
  );
}
