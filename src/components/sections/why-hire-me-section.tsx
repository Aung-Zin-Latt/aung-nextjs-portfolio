"use client";

import { motion } from "framer-motion";
import { Brain, Briefcase, Code2, Gauge, Globe, ShieldCheck } from "lucide-react";

import { AnimatedSection } from "@/components/section/animated-section";
import { SectionHeading } from "@/components/section/section-heading";
import { interpersonalStrengths, whyHireReasons } from "@/data/site";

const icons = [Brain, Briefcase, Code2, ShieldCheck, Gauge, Globe] as const;

export function WhyHireMeSection() {
  return (
    <AnimatedSection className="section-padding relative">
      <div className="section-divider absolute top-0 left-0" />
      <div className="container" id="why-hire-me">
        <SectionHeading
          label="Why me"
          title="How I show up for teams"
          subtitle="Engineering judgement paired with communication habits that keep distributed work predictable"
        />

        <div className="mb-10 rounded-xl border border-dashed border-primary/20 bg-primary/[0.03] p-5 md:p-6">
          <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-primary">Collaboration strengths</p>
          <ul className="mt-3 space-y-2 text-[15px] leading-[1.7] text-muted-foreground">
            {interpersonalStrengths.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-primary/70">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyHireReasons.map((r, i) => {
            const Icon = icons[i % icons.length];
            return (
              <AnimatedSection key={r.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/25 hover:shadow-[0_16px_48px_-12px_hsl(var(--glow)/0.12)]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/[0.08] transition-colors duration-300 group-hover:bg-primary/[0.15]">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="mb-2 text-[16px] font-semibold tracking-[-0.01em]">{r.title}</h3>
                  <p className="text-[15px] leading-[1.7] text-muted-foreground">{r.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
