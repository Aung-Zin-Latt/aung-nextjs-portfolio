"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Globe, Layers, Radio, Zap } from "lucide-react";

import { AnimatedSection } from "@/components/section/animated-section";
import { SectionHeading } from "@/components/section/section-heading";
import { architecturePatterns } from "@/data/site";

const icons = [Layers, Radio, Globe, Zap, Database] as const;

const principles = [
  { label: "Microservices", desc: "Independently deployable services" },
  { label: "Queues", desc: "Resilient asynchronous workflows" },
  { label: "Polyglot data", desc: "Right store per workload" },
  { label: "Operational clarity", desc: "Observable, reversible releases" },
] as const;

export function ArchitectureSection() {
  return (
    <AnimatedSection className="section-padding relative">
      <div className="section-divider absolute top-0 left-0" />
      <div className="container" id="architecture">
        <SectionHeading
          label="Architecture"
          title="Patterns from production"
          subtitle="How components connect when uptime and auditability are non-negotiable"
        />

        <div className="space-y-4">
          {architecturePatterns.map((arch, i) => {
            const Icon = icons[i % icons.length];
            return (
              <AnimatedSection key={arch.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/20 hover:shadow-[0_8px_30px_-12px_hsl(var(--glow)/0.08)] md:p-7"
                >
                  <div className="mb-5 flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08]">
                      <Icon size={17} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-[16px] font-semibold tracking-[-0.01em]">{arch.title}</h3>
                      <p className="text-[15px] leading-[1.6] text-muted-foreground">{arch.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-2 gap-y-2 md:hidden">
                    {arch.nodes.map((node) => (
                      <span
                        key={`${arch.title}-${node}-m`}
                        className="architecture-node border-border bg-secondary/60 text-secondary-foreground"
                      >
                        {node}
                      </span>
                    ))}
                  </div>

                  <div className="relative hidden w-full overflow-x-auto overscroll-x-contain pb-1 md:block">
                    <div className="flex min-w-max items-center gap-1.5">
                      {arch.nodes.map((node, j) => (
                        <div key={`${arch.title}-${node}`} className="flex items-center gap-1.5">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 + j * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="architecture-node border-border bg-secondary/60 text-secondary-foreground whitespace-nowrap transition-all duration-300 hover:border-primary/25 hover:bg-primary/5"
                          >
                            {node}
                          </motion.div>
                          {j < arch.nodes.length - 1 ? <ArrowRight size={12} className="architecture-arrow shrink-0" /> : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.2} className="mt-10">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {principles.map((p) => (
              <motion.div
                key={p.label}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl border border-border bg-card p-4 text-center transition-all duration-500 hover:border-primary/20"
              >
                <div className="mb-0.5 text-[15px] font-semibold text-primary">{p.label}</div>
                <div className="text-[14px] text-muted-foreground">{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
