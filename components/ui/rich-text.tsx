import { Fragment } from "react";

/**
 * Renders content strings that use `**double asterisks**` to emphasise a
 * fragment — the only markup the copy needs.
 */
export function RichText({ children }: { children: string }) {
  return (
    <>
      {children.split("**").map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-fg">
            {part}
          </strong>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
