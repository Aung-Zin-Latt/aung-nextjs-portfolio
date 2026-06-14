"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";

import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.55 },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function HeroSection() {
  const { hero, contact, social, cvUrl } = siteConfig;

  return (
    <section className="relative flex min-h-[100dvh] w-full min-w-0 items-center overflow-x-hidden pt-14 pb-10 lg:overflow-hidden">
      <div className="pointer-events-none absolute inset-0 isolate overflow-hidden contain-paint">
        <div className="animate-pulse-slow absolute top-[15%] left-[55%] h-[min(280px,92vw)] w-[min(280px,92vw)] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[64px] sm:h-[380px] sm:w-[380px] sm:blur-[80px] md:h-[480px] md:w-[480px] lg:h-[600px] lg:w-[600px] lg:blur-[100px]" />
        <div className="animate-float-delayed absolute bottom-[10%] left-[20%] h-[min(220px,70vw)] w-[min(220px,70vw)] rounded-full bg-primary/[0.03] blur-[56px] sm:h-[260px] sm:w-[260px] sm:blur-[64px] md:h-[300px] md:w-[300px] md:blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(hsl(var(--foreground) / 0.4) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container relative z-10 w-full">
        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-w-0 flex-1 lg:max-w-[660px]"
          >
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-8 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-left text-[14px] text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              {siteConfig.availabilityBadge}
            </motion.div>

            <h1 className="text-heading-hero mb-4 max-w-full break-words [overflow-wrap:anywhere]">
              <span className="text-gradient">{siteConfig.hero.roleTitle}</span>
              <br />
              <span className="text-[0.42em] font-medium tracking-[-0.02em] text-foreground/60 sm:text-[0.45em]">
                {siteConfig.hero.roleSubtitle}
              </span>
              <br />
              <span className="text-[0.5em] font-medium tracking-[-0.02em] text-foreground/50">
                {siteConfig.title}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-3 w-full max-w-[560px] break-words text-[18px] leading-[1.75] text-foreground/85 [overflow-wrap:anywhere]"
            >
              {siteConfig.summary.headline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.5 }}
              className="mb-7 flex max-w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-1.5"
            >
              {hero.proofPoints.map((p) => (
                <span key={p} className="flex min-w-0 items-start gap-1.5 text-[14px] text-muted-foreground sm:items-center">
                  <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-primary/60 sm:mt-0" />
                  {p}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mb-10 flex max-w-full flex-wrap gap-1.5"
            >
              {hero.techBadges.map((b) => (
                <motion.span
                  key={b}
                  variants={item}
                  className="max-w-full cursor-default break-all rounded-md border border-border bg-secondary/40 px-3 py-1 font-mono text-[13px] text-muted-foreground transition-all duration-300 hover:border-primary/25 hover:bg-primary/[0.04] hover:text-foreground sm:break-normal sm:text-[14px]"
                >
                  {b}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Button variant="hero" size="lg" className="w-full shrink-0 sm:w-auto sm:justify-center" asChild>
                <a href="#projects">
                  View Projects <ArrowRight size={15} />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="w-full shrink-0 sm:w-auto sm:justify-center" asChild>
                <a href={`mailto:${contact.email}`}>
                  <Mail size={15} /> Get in Touch
                </a>
              </Button>
              {cvUrl ? (
                <Button variant="hero-outline" size="lg" className="w-full shrink-0 sm:w-auto sm:justify-center" asChild>
                  <a href={cvUrl} download="Aung-Zin-Latt-Full-Stack-Engineer-SG-On-site.pdf" target="_blank" rel="noopener noreferrer">
                    <Download size={15} aria-hidden /> Download CV
                  </a>
                </Button>
              ) : null}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="mt-8 flex items-center gap-1.5"
            >
              {[
                { href: social.github, icon: Github },
                { href: contact.linkedin, icon: Linkedin },
                { href: `mailto:${contact.email}`, icon: Mail },
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/30 text-muted-foreground transition-all duration-300 hover:border-primary/25 hover:bg-primary/5 hover:text-foreground"
                >
                  <Icon size={15} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden flex-shrink-0 sm:block"
          >
            <div className="group relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 blur-3xl transition-opacity duration-1000 group-hover:opacity-100" />
              <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl shadow-foreground/5 dark:shadow-primary/5 lg:h-72 lg:w-72">
                <Image
                  src={siteConfig.profileImage}
                  alt={`Portrait of ${siteConfig.name}`}
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 1024px) 224px, 288px"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 rounded-lg border border-border bg-card/90 px-3 py-1.5 font-mono text-[14px] text-muted-foreground shadow-lg backdrop-blur-sm">
                <Terminal size={11} className="text-primary" />
                {siteConfig.tagline}
              </div>
              <div className="absolute -top-2 -left-2 h-8 w-8 rounded-lg border border-primary/10 bg-primary/[0.03]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}