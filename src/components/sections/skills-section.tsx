"use client";

import { motion } from "framer-motion";
import { Database, Monitor, Server, Wrench } from "lucide-react";

import { AnimatedSection } from "@/components/section/animated-section";
import { SectionHeading } from "@/components/section/section-heading";
import { type SkillLevel, skillGroups } from "@/data/site";

const groupIcons = [Server, Monitor, Database, Wrench] as const;

const levelColor: Record<SkillLevel, string> = {
  Expert: "text-primary border-primary/30 bg-primary/[0.08]",
  Advanced: "text-muted-foreground border-border bg-secondary/50",
};

export function SkillsSection() {
  return (
    <AnimatedSection className="section-padding relative">
      <div className="section-divider absolute top-0 left-0" />
      <div className="container" id="skills">
        <SectionHeading
          label="Tech stack"
          title="Tools I trust in production"
          subtitle="Grouped by depth — honest about where I lead vs where I collaborate"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((g, i) => {
            const Icon = groupIcons[i % groupIcons.length];
            return (
              <AnimatedSection key={g.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/20 hover:shadow-[0_8px_30px_-12px_hsl(var(--glow)/0.1)]"
                >
                  <div className="mb-5 flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                      <Icon size={15} className="text-primary" />
                    </div>
                    <h3 className="text-[16px] font-semibold tracking-[-0.01em]">{g.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span
                        key={s.name}
                        className={`inline-flex cursor-default items-center gap-1.5 rounded-md border px-2.5 py-1 text-[14px] transition-all duration-300 ${levelColor[s.level]}`}
                      >
                        {s.name}
                        <span className="text-[14px] font-medium uppercase tracking-wider opacity-70">{s.level}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}