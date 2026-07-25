import { useState } from "react";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";

interface Props {
  /** Extra fields shown on the contact page */
  withCountry?: boolean;
  dark?: boolean;
  productName?: string;
}

interface Errors {
  name?: string;
  company?: string;
  email?: string;
  requirements?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function InquiryForm({ withCountry = false, dark = false, productName }: Props) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    requirements: productName ? `Hi, I'm interested in your ${productName}. Please send me a quotation.\n\n` : "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
    setErrors({ ...errors, [k]: undefined });
    setServerError("");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.company.trim()) errs.company = "Please enter your company name.";
    if (!form.email.trim()) errs.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(form.email.trim())) errs.email = "Please enter a valid email address.";
    if (!form.requirements.trim()) errs.requirements = "Please describe your product requirements.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Submission failed (${res.status}).`);
      }
      setSubmitted(true);
    } catch (err) {
      setServerError(
        err instanceof Error
          ? `${err.message} You can also email us directly at sales@aysentsmartfilm.com.`
          : "Network error. Please email us directly at sales@aysentsmartfilm.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = (err?: string) =>
    `w-full rounded-md border px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-[#9AA9B8] ${
      dark
        ? "bg-white/10 text-white placeholder:text-white/50"
        : "bg-white text-[#1B2A3A]"
    } ${err ? "border-red-400 focus:border-red-400" : dark ? "border-white/25 focus:border-white/70" : "border-[#D5DEE6] focus:border-brand-accent"}`;

  const labelCls = `mb-1.5 block text-sm font-medium ${dark ? "text-white/90" : "text-[#33475C]"}`;
  const errCls = "mt-1 text-xs text-red-400";

  if (submitted) {
    return (
      <div className={`flex flex-col items-center justify-center rounded-md px-6 py-12 text-center ${dark ? "bg-white/10" : "bg-[#F0F7F1] border border-[#C9E4CF]"}`}>
        <CheckCircle2 className={`mb-3 h-12 w-12 ${dark ? "text-emerald-300" : "text-emerald-600"}`} />
        <h3 className={`text-lg font-bold ${dark ? "text-white" : "text-[#1B2A3A]"}`}>Inquiry Sent Successfully!</h3>
        <p className={`mt-2 max-w-sm text-sm ${dark ? "text-white/75" : "text-[#4A5B6C]"}`}>
          Thank you, {form.name.split(" ")[0]}. Our sales engineer will reply to{" "}
          <span className="font-semibold">{form.email}</span> within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", company: "", email: "", country: "", requirements: "" });
          }}
          className="mt-5 rounded-md border border-current px-4 py-2 text-sm font-medium opacity-80 transition-opacity hover:opacity-100"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label className={labelCls} htmlFor="inq-name">Name *</label>
        <input id="inq-name" className={inputCls(errors.name)} placeholder="Your full name" value={form.name} onChange={set("name")} />
        {errors.name && <p className={errCls}>{errors.name}</p>}
      </div>
      <div>
        <label className={labelCls} htmlFor="inq-company">Company *</label>
        <input id="inq-company" className={inputCls(errors.company)} placeholder="Company / organization" value={form.company} onChange={set("company")} />
        {errors.company && <p className={errCls}>{errors.company}</p>}
      </div>
      <div className={withCountry ? "" : "sm:col-span-2"}>
        <label className={labelCls} htmlFor="inq-email">Email *</label>
        <input id="inq-email" type="email" className={inputCls(errors.email)} placeholder="you@company.com" value={form.email} onChange={set("email")} />
        {errors.email && <p className={errCls}>{errors.email}</p>}
      </div>
      {withCountry && (
        <div>
          <label className={labelCls} htmlFor="inq-country">Country</label>
          <input id="inq-country" className={inputCls()} placeholder="Your country / region" value={form.country} onChange={set("country")} />
        </div>
      )}
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="inq-req">Product Requirements *</label>
        <textarea
          id="inq-req"
          rows={5}
          className={inputCls(errors.requirements)}
          placeholder="Product type, dimensions, quantity, destination port, control method, etc."
          value={form.requirements}
          onChange={set("requirements")}
        />
        {errors.requirements && <p className={errCls}>{errors.requirements}</p>}
      </div>
      {serverError && (
        <div className={`flex items-start gap-2.5 rounded-md border p-4 text-sm sm:col-span-2 ${dark ? "border-red-400/40 bg-red-500/10 text-red-200" : "border-red-200 bg-red-50 text-red-700"}`}>
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
          {serverError}
        </div>
      )}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className={`inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
            dark
              ? "bg-white text-brand hover:bg-[#EAF1F8]"
              : "bg-brand text-white hover:bg-brand-accent"
          }`}
        >
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {submitting ? "Sending…" : "Send Inquiry"}
        </button>
      </div>
    </form>
  );
}
