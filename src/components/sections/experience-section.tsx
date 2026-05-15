"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

import { AnimatedSection } from "@/components/section/animated-section";
import { SectionHeading } from "@/components/section/section-heading";
import { experiences } from "@/data/site";

export function ExperienceSection() {
  return (
    <AnimatedSection className="section-padding relative">
      <div className="section-divider absolute top-0 left-0" />
      <div className="container" id="experience">
        <SectionHeading
          label="Experience"
          title="Where I have delivered impact"
          subtitle="Singapore security technology platforms plus formative full-stack roles in Myanmar"
        />
        <div className="relative max-w-3xl">
          <div className="absolute top-2 bottom-2 left-[13px] w-px bg-gradient-to-b from-primary/30 via-border to-transparent" />

          <div className="space-y-8">
            {experiences.map((e, i) => (
              <AnimatedSection key={`${e.company}-${e.period}`} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-[6px] flex h-[26px] w-[26px] items-center justify-center rounded-lg border border-border bg-card">
                    <Briefcase size={12} className="text-primary" />
                  </div>

                  <div className="rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/20 hover:shadow-[0_8px_30px_-12px_hsl(var(--glow)/0.08)]">
                    <div className="mb-2 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                      <span className="font-mono text-[14px] font-medium tracking-wide text-primary">{e.period}</span>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span className="text-[14px] text-muted-foreground">{e.location}</span>
                    </div>
                    <h3 className="mb-0.5 text-[16px] font-semibold tracking-[-0.01em]">{e.role}</h3>
                    <p className="mb-4 text-[15px] text-muted-foreground">{e.company}</p>
                    <ul className="mb-4 space-y-1.5">
                      {e.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-[15px] leading-[1.65] text-muted-foreground">
                          <span className="mt-[3px] shrink-0 text-[14px] text-primary/60">▸</span> {p}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 border-t border-border/60 pt-3">
                      {e.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[14px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}