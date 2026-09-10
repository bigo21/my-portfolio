"use server";

import type { ContactFormState } from "@/lib/actions/contact-state";
import { ui } from "@/lib/content/ui";
import { profile } from "@/lib/content/profile";
import { isLocale, t, type Locale } from "@/lib/i18n";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const rawLocale = String(formData.get("locale") ?? "");
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";

  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: ContactFormState["errors"] = {};
  if (values.name.length < 2) {
    errors.name = t(ui.contact.nameRequired, locale);
  }
  if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = t(ui.contact.emailInvalid, locale);
  }
  if (values.message.length < 10) {
    errors.message = t(ui.contact.messageRequired, locale);
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  try {
    await deliverMessage(values);
  } catch (error) {
    console.error("[contact] delivery failed", error);
    return {
      status: "error",
      errors: {},
      message: t(ui.contact.error, locale),
      values,
    };
  }

  return {
    status: "success",
    errors: {},
    message: t(ui.contact.success, locale),
    values: { name: "", email: "", message: "" },
  };
}

/**
 * Delivery is not wired to a provider yet.
 *
 * TODO: replace the log below with a real transport, for example Resend:
 *
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "portfolio@your-domain.tld",
 *     to: profile.email,
 *     replyTo: submission.email,
 *     subject: `Portfolio — ${submission.name}`,
 *     text: submission.message,
 *   });
 */
async function deliverMessage(submission: {
  name: string;
  email: string;
  message: string;
}) {
  console.info(
    `[contact] message for ${profile.email} from ${submission.name} <${submission.email}>:\n${submission.message}`,
  );
}
