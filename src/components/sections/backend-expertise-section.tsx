"use client";

import { motion } from "framer-motion";
import { Database, Layers, ListTodo, Route, ShieldAlert, Workflow } from "lucide-react";

import { AnimatedSection } from "@/components/section/animated-section";
import { SectionHeading } from "@/components/section/section-heading";
import { backendExpertiseAreas, devOpsHighlights } from "@/data/site";

const icons = [Route, Layers, Database, Workflow, ListTodo, ShieldAlert] as const;

export function BackendExpertiseSection() {
  return (
    <AnimatedSection className="section-padding relative">
      <div className="section-divider absolute top-0 left-0" />
      <div className="container" id="backend">
        <SectionHeading
          label="Engineering depth"
          title="How I build and run platforms"
          subtitle="Architecture, data, cloud operations, and leadership habits from Singapore production work"
        />

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {backendExpertiseAreas.map((area, i) => {
            const Icon = icons[i % icons.length];
            return (
              <AnimatedSection key={area.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="group h-full rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/20 hover:shadow-[0_8px_30px_-12px_hsl(var(--glow)/0.1)]"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/[0.08] transition-colors duration-300 group-hover:bg-primary/[0.12]">
                    <Icon size={17} className="text-primary" />
                  </div>
                  <h3 className="mb-3 text-[15px] font-semibold tracking-[-0.01em]">{area.title}</h3>
                  <ul className="space-y-1.5">
                    {area.points.map((p) => (
                      <li key={p} className="flex items-start gap-1.5 text-[14px] leading-[1.6] text-muted-foreground">
                        <span className="mt-0.5 shrink-0 text-primary/50">▹</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {devOpsHighlights.map((block, i) => (
            <AnimatedSection key={block.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -2 }}
                className="rounded-xl border border-border bg-secondary/20 p-5 transition-all duration-500 hover:border-primary/20"
              >
                <h4 className="mb-3 text-[14px] font-semibold uppercase tracking-[0.12em] text-primary">{block.title}</h4>
                <ul className="space-y-2 text-[14px] leading-[1.6] text-muted-foreground">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}