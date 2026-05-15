"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

import { AnimatedSection } from "@/components/section/animated-section";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  const { contact } = siteConfig;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = form;
    window.location.href = `mailto:${contact.email}?subject=Portfolio inquiry from ${encodeURIComponent(
      name,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} <${email}>`)}`;
  };

  const infoRows = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Linkedin, label: "LinkedIn", value: contact.linkedinLabel, href: contact.linkedin },
    { icon: Github, label: "GitHub", value: siteConfig.social.githubLabel, href: siteConfig.social.github },
    { icon: MessageCircle, label: "WhatsApp", value: contact.whatsapp, href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    {
      icon: MapPin,
      label: "On-site focus",
      value: `${siteConfig.location.label} · ${siteConfig.location.detail}`,
      href: null,
    },
  ] as const;

  return (
    <section className="relative overflow-hidden py-32 md:py-40" id="contact">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-slow absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <AnimatedSection className="mb-16 text-center md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-sm font-medium tracking-wider text-primary uppercase"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Contact
          </motion.span>
          <h2 className="font-heading text-heading-hero mb-5 leading-tight text-foreground">
            Let&apos;s build <span className="text-gradient">reliable systems</span>
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Share the role, stack, and hiring timeline — I respond within one business day for serious opportunities.
          </p>
        </AnimatedSection>

        <div className="mx-auto grid max-w-5xl gap-8 md:gap-12 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-xl">
              <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="absolute inset-0 -z-[5] rounded-2xl bg-card/80 backdrop-blur-xl" />

              <h3 className="font-heading text-lg font-semibold text-foreground">Contact channels</h3>
              <p className="mb-8 text-base text-muted-foreground">Singapore on-site roles preferred — remote only for exceptional fit.</p>

              <div className="space-y-4">
                {infoRows.map((row, i) => {
                  const content = (
                    <>
                      <div className="flex items-center gap-4">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] transition-all duration-500 group-hover/item:bg-primary/[0.15]">
                          <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 blur-md transition-opacity duration-500 group-hover/item:opacity-100" />
                          <row.icon size={18} className="relative z-10 text-primary" />
                        </div>
                        <div>
                          <div className="text-base font-medium text-foreground">{row.label}</div>
                          <div className="text-sm text-muted-foreground">{row.value}</div>
                        </div>
                      </div>
                      {row.href ? (
                        <ArrowUpRight
                          size={16}
                          className="text-muted-foreground/30 transition-all duration-300 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:text-primary"
                        />
                      ) : null}
                    </>
                  );

                  return (
                    <AnimatedSection key={row.label} delay={0.12 + i * 0.06}>
                      {row.href ? (
                        <motion.a
                          href={row.href}
                          target={row.href.startsWith("mailto") || row.href.startsWith("tel") ? undefined : "_blank"}
                          rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="group/item flex cursor-pointer items-center justify-between rounded-xl border border-border/50 bg-background/40 p-4 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-primary/[0.04]"
                        >
                          {content}
                        </motion.a>
                      ) : (
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="group/item flex items-center justify-between rounded-xl border border-border/50 bg-background/40 p-4 backdrop-blur-sm"
                        >
                          {content}
                        </motion.div>
                      )}
                    </AnimatedSection>
                  );
                })}
              </div>

              <p className="mt-6 text-[14px] text-muted-foreground">
                Portfolio:{" "}
                <a className="text-primary hover:underline" href={contact.portfolio} target="_blank" rel="noopener noreferrer">
                  {contact.portfolioLabel}
                </a>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-xl">
              <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-primary/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="absolute inset-0 -z-[5] rounded-2xl bg-card/80 backdrop-blur-xl" />

              <h3 className="font-heading text-lg font-semibold text-foreground">Send a message</h3>
              <p className="mb-8 text-base text-muted-foreground">Prefer email? Write directly to {contact.email}.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { key: "name", label: "Your name", type: "text" as const },
                  { key: "email", label: "Email address", type: "email" as const },
                ].map(({ key, label, type }) => (
                  <div key={key} className="relative">
                    <label
                      className={`pointer-events-none absolute left-4 z-10 rounded-md px-1 transition-all duration-300 ${
                        focused === key || form[key as keyof typeof form]
                          ? "top-2 bg-card/90 text-[14px] font-medium text-primary"
                          : "top-1/2 -translate-y-1/2 text-base text-foreground/70"
                      }`}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                      onFocus={() => setFocused(key)}
                      onBlur={() => setFocused(null)}
                      className="relative z-0 w-full rounded-xl border border-border/50 bg-background/40 px-4 pt-6 pb-2 text-base text-foreground backdrop-blur-sm transition-all duration-400 focus:border-primary/40 focus:bg-primary/[0.02] focus:ring-2 focus:ring-primary/10 focus:outline-none"
                      required
                    />
                  </div>
                ))}

                <div className="relative">
                  <label
                    className={`pointer-events-none absolute left-4 z-10 rounded-md px-1 transition-all duration-300 ${
                      focused === "message" || form.message
                        ? "top-3 bg-card/90 text-[14px] font-medium text-primary"
                        : "top-4 text-base text-foreground/70"
                    }`}
                  >
                    Your message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    rows={5}
                    className="relative z-0 w-full resize-none rounded-xl border border-border/50 bg-background/40 px-4 pt-7 pb-3 text-base text-foreground backdrop-blur-sm transition-all duration-400 focus:border-primary/40 focus:bg-primary/[0.02] focus:ring-2 focus:ring-primary/10 focus:outline-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  className="relative w-full overflow-hidden rounded-xl py-3.5 text-base font-medium text-primary-foreground"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-accent transition-all duration-500 group-hover/btn:via-primary" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-500 group-hover/btn:opacity-100" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 blur-lg transition-opacity duration-500 group-hover/btn:opacity-60" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send size={14} /> Send message
                  </span>
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
