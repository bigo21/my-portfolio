"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { submitContactForm } from "@/lib/actions/contact";
import { initialContactState } from "@/lib/actions/contact-state";
import type { Locale } from "@/lib/i18n";

type ContactFormLabels = {
  name: string;
  email: string;
  message: string;
  submit: string;
  submitting: string;
};

export function ContactForm({
  locale,
  labels,
}: {
  locale: Locale;
  labels: ContactFormLabels;
}) {
  const [state, formAction] = useActionState(
    submitContactForm,
    initialContactState,
  );

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 rounded-[10px] border border-line bg-surface p-[clamp(22px,3vw,34px)]"
    >
      <input type="hidden" name="locale" value={locale} />

      <Field
        name="name"
        label={labels.name}
        defaultValue={state.values.name}
        error={state.errors.name}
      />
      <Field
        name="email"
        type="email"
        label={labels.email}
        defaultValue={state.values.email}
        error={state.errors.email}
      />
      <Field
        name="message"
        label={labels.message}
        defaultValue={state.values.message}
        error={state.errors.message}
        multiline
      />

      {state.message && (
        <p
          role="status"
          className={`font-mono text-[12.5px] leading-[1.6] ${
            state.status === "success" ? "text-accent" : "text-shell-red"
          }`}
        >
          {state.message}
        </p>
      )}

      <SubmitButton idle={labels.submit} busy={labels.submitting} />
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  defaultValue,
  error,
  multiline = false,
}: {
  name: string;
  label: string;
  type?: string;
  defaultValue: string;
  error?: string;
  multiline?: boolean;
}) {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;
  const className =
    "rounded-[4px] border border-line bg-bg-alt px-3.5 py-3 font-sans text-[15px] text-fg outline-none focus:border-accent";

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-[11px] tracking-[0.13em] text-dim uppercase"
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          required
          defaultValue={defaultValue}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${className} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required
          defaultValue={defaultValue}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={className}
        />
      )}

      {error && (
        <p id={errorId} className="font-mono text-[12px] text-shell-red">
          {error}
        </p>
      )}
    </div>
  );
}

function SubmitButton({ idle, busy }: { idle: string; busy: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="cursor-pointer rounded-[4px] bg-accent px-[18px] py-3.5 font-mono text-[13px] font-semibold tracking-[0.05em] text-bg transition-[filter] hover:brightness-110 disabled:cursor-progress disabled:opacity-70"
    >
      {pending ? busy : idle}
    </button>
  );
}
