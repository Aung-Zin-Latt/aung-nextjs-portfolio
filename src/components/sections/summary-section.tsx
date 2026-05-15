"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Globe2, Server, Shield, Users } from "lucide-react";

import { AnimatedSection } from "@/components/section/animated-section";
import { SectionHeading } from "@/components/section/section-heading";
import { siteConfig, summaryHighlights } from "@/data/site";

const icons = [Server, Database, Shield, Cloud, Users, Globe2] as const;

export function SummarySection() {
  return (
    <AnimatedSection className="section-padding relative">
      <div className="section-divider absolute top-0 left-0" />
      <div className="container" id="about">
        <SectionHeading
          label="About"
          title="Senior engineer, full-stack execution"
          subtitle="Seven years shipping production systems — from Laravel monoliths to AWS microservices"
        />
        <div className="mb-16 max-w-2xl space-y-5">
          {siteConfig.summary.body.map((paragraph, index) => (
            <p key={index} className="text-[18px] leading-[1.75] text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {summaryHighlights.map((h, i) => {
            const Icon = icons[i % icons.length];
            return (
              <AnimatedSection key={h.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="group h-full rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/25 hover:shadow-[0_12px_40px_-12px_hsl(var(--glow)/0.1)]"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/[0.08] transition-colors duration-300 group-hover:bg-primary/[0.14]">
                    <Icon size={17} className="text-primary" />
                  </div>
                  <h3 className="mb-1.5 text-[17px] font-semibold tracking-[-0.01em]">{h.title}</h3>
                  <p className="text-[17px] leading-[1.65] text-muted-foreground">{h.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}