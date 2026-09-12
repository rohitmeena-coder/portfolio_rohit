"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend } from "react-icons/fi";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      // EmailJS setup:
      // 1. npm i @emailjs/browser (already in package.json)
      // 2. Create a service + template at https://www.emailjs.com
      // 3. Set the three env vars below in .env.local
      const emailjs = (await import("@emailjs/browser")).default;
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not configured.");
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad relative bg-surface/40">
      <div className="mx-auto max-w-4xl">
        <span className="eyebrow">07 · Contact</span>
        <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
          Let&apos;s <span className="text-gradient">build something.</span>
        </h2>
        <p className="mt-4 max-w-lg text-sm text-muted">
          Open to internships, freelance collaborations, and interesting problems. The fastest
          way to reach me is the form below, or directly at{" "}
          <a href={`mailto:${profile.email}`} className="text-electric-soft hover:underline">
            {profile.email}
          </a>{" "}
          or{" "}
          <a href={`tel:${profile.phone}`} className="text-electric-soft hover:underline">
            {profile.phone}
          </a>
          .
        </p>

        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass mt-10 grid gap-5 rounded-2xl p-7 sm:grid-cols-2 sm:p-9"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted">
              Name
            </label>
            <input
              id="name"
              name="user_name"
              required
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-electric"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted">
              Email
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              required
              placeholder="you@example.com"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-electric"
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="subject" className="font-mono text-xs uppercase tracking-wider text-muted">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              required
              placeholder="What's this about?"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-electric"
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me a bit about the project or opportunity."
              className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-electric"
            />
          </div>

          <div className="flex items-center justify-between gap-4 sm:col-span-2">
            <button
              type="submit"
              disabled={status === "sending"}
              data-cursor="pointer"
              className="btn-primary disabled:opacity-60"
            >
              {status === "sending" ? (
                "Sending…"
              ) : (
                <>
                  <FiSend size={15} /> Send Message
                </>
              )}
            </button>

            {status === "sent" && (
              <span className="font-mono text-xs text-electric-soft">Sent — thank you!</span>
            )}
            {status === "error" && (
              <span className="font-mono text-xs text-red-400">
                Couldn&apos;t send — check EmailJS config.
              </span>
            )}
          </div>
        </motion.form>

        <a
          href={`mailto:${profile.email}`}
          data-cursor="pointer"
          className="mt-8 inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
        >
          <FiMail size={15} /> or email me directly
        </a>
      </div>
    </section>
  );
}
