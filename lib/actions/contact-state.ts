export type ContactFormState = {
  status: "idle" | "success" | "error";
  /** Field-level messages, keyed by input name. */
  errors: Partial<Record<"name" | "email" | "message", string>>;
  /** Form-level message, shown above the submit button. */
  message?: string;
  /** Values echoed back so a rejected submission is not retyped. */
  values: { name: string; email: string; message: string };
};

export const initialContactState: ContactFormState = {
  status: "idle",
  errors: {},
  values: { name: "", email: "", message: "" },
};
