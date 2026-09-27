"use client";
import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { copy, type Locale } from "@/data/site";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "@/lib/contact-config";
export function ContactForm({ locale }: { locale: Locale }) {
  const c = copy[locale].form;
  const form = useRef<HTMLFormElement>(null);
  const inFlight = useRef(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "invalid"
  >("idle");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inFlight.current || !form.current) return;
    const data = new FormData(form.current);
    if (data.get("company_website")) return;
    const name = String(data.get("from_name") || "").trim(),
      email = String(data.get("from_email") || "").trim(),
      message = String(data.get("message") || "").trim(),
      topic = String(data.get("topic") || "");
    if (
      name.length < 2 ||
      name.length > 100 ||
      !/^\S+@\S+\.\S+$/.test(email) ||
      email.length > 254 ||
      message.length < 20 ||
      message.length > 5000
    ) {
      setStatus("invalid");
      return;
    }
    inFlight.current = true;
    setStatus("sending");
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          message: `${topic}\n\n${message}`,
          subject: `Portfolio enquiry: ${topic}`,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
          limitRate: { id: "portfolio-contact", throttle: 10000 },
        },
      );
      form.current.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
    }
  }
  return (
    <form
      ref={form}
      className="contact-form"
      onSubmit={submit}
      aria-busy={status === "sending"}
    >
      <div className="form-heading">
        <span>{locale === "ar" ? "رسالة جديدة" : "NEW MESSAGE"}</span>
        <span>↗</span>
      </div>
      <div className="form-grid">
        <label htmlFor="contact-name">
          {c.name}
          <input
            id="contact-name"
            name="from_name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            placeholder={locale === "ar" ? "الاسم" : "Name"}
          />
        </label>
        <label htmlFor="contact-email">
          {c.email}
          <input
            id="contact-email"
            name="from_email"
            autoComplete="email"
            type="email"
            required
            maxLength={254}
            placeholder="you@company.com"
            dir="ltr"
          />
        </label>
      </div>
      <label htmlFor="contact-topic">
        {c.type}
        <select id="contact-topic" name="topic">
          {c.options.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label htmlFor="contact-message">
        {c.message}
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={20}
          maxLength={5000}
          rows={4}
          placeholder={c.placeholder}
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="contact-website">
          Website
          <input
            id="contact-website"
            name="company_website"
            autoComplete="off"
            tabIndex={-1}
          />
        </label>
      </div>
      <div className="form-submit">
        <p>{c.note}</p>
        <button
          className="button primary"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? c.sending : c.send}
          {status === "sending" ? (
            <LoaderCircle className="spin" size={17} />
          ) : (
            <ArrowUpRight size={18} />
          )}
        </button>
      </div>
      <div
        className={`form-status status-${status}`}
        role="status"
        aria-live="polite"
      >
        {status === "success" ? (
          <>
            <CheckCircle2 size={18} />
            {c.success}
          </>
        ) : status === "error" ? (
          c.error
        ) : status === "invalid" ? (
          c.invalid
        ) : null}
      </div>
    </form>
  );
}
