"use client";

import { motion } from "framer-motion";
import { Briefcase, Globe2, LineChart, Server } from "lucide-react";

import { AnimatedSection } from "@/components/section/animated-section";
import { SectionHeading } from "@/components/section/section-heading";
import { achievements } from "@/data/site";

const icons = [LineChart, Server, Globe2, Briefcase] as const;

export function AchievementsSection() {
  return (
    <AnimatedSection className="section-padding relative">
      <div className="section-divider absolute top-0 left-0" />
      <div className="container">
        <SectionHeading
          label="Impact"
          title="Outcomes I optimize for"
          subtitle="High-stakes platforms, polyglot data, and reliable cloud operations"
        />
        <div className="grid grid-cols-2 items-stretch gap-4 lg:grid-cols-4">
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <AnimatedSection key={a.label} delay={i * 0.08} className="h-full min-h-0">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex h-full min-h-0 w-full flex-col rounded-xl border border-border bg-card p-6 text-center transition-all duration-500 hover:border-primary/25 hover:shadow-[0_12px_40px_-12px_hsl(var(--glow)/0.12)]"
                >
                  <div className="mx-auto mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08] transition-colors duration-300 group-hover:bg-primary/[0.14]">
                    <Icon size={19} className="text-primary" />
                  </div>
                  <div className="mb-1 text-lg font-bold leading-tight tracking-[-0.02em] text-gradient sm:text-xl">
                    {a.metric}
                  </div>
                  <div className="mb-2 shrink-0 text-[14px] font-semibold tracking-[-0.01em]">{a.label}</div>
                  <p className="flex-1 text-[14px] leading-[1.55] text-muted-foreground">{a.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
