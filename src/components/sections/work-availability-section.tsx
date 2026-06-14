"use client";

import { motion } from "framer-motion";
import { Building2, Clock3, FileText, Laptop, MapPin } from "lucide-react";

import { AnimatedSection } from "@/components/section/animated-section";
import { SectionHeading } from "@/components/section/section-heading";
import { siteConfig, workModes } from "@/data/site";

const icons = [MapPin, Building2, Laptop, FileText, Clock3] as const;

export function WorkAvailabilitySection() {
  return (
    <AnimatedSection className="section-padding relative">
      <div className="section-divider absolute top-0 left-0" />
      <div className="container" id="availability">
        <SectionHeading
          label="Availability"
          title="How I can partner with you"
          subtitle="Singapore on-site, global remote, and Vietnam/Malaysia on-site — transparent about timeline and pass eligibility"
        />

        <div className="mb-8 grid gap-3 rounded-xl border border-border bg-card p-5 md:grid-cols-3 md:p-6">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-primary">Notice</p>
            <p className="mt-1 text-base text-foreground">{siteConfig.noticePeriod}</p>
          </div>
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-primary">Compensation</p>
            <p className="mt-1 text-base text-foreground">{siteConfig.compensation}</p>
          </div>
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-primary">Pass eligibility</p>
            <p className="mt-1 text-base text-foreground">{siteConfig.workAuthorization}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workModes.map((m, i) => {
            const Icon = icons[i % icons.length];
            return (
              <AnimatedSection key={m.label} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex h-full items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/20 hover:shadow-[0_8px_30px_-12px_hsl(var(--glow)/0.1)]"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/[0.08] transition-colors duration-300 group-hover:bg-primary/[0.14]">
                    <Icon size={17} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-[16px] font-semibold tracking-[-0.01em]">{m.label}</h3>
                    <p className="text-[14px] leading-[1.6] text-muted-foreground">{m.description}</p>
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
