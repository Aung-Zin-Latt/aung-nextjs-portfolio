"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

import { AnimatedSection } from "@/components/section/animated-section";
import { SectionHeading } from "@/components/section/section-heading";
import { siteConfig } from "@/data/site";

export function EducationSection() {
  return (
    <AnimatedSection className="section-padding relative">
      <div className="section-divider absolute top-0 left-0" />
      <div className="container grid gap-8 lg:grid-cols-2" id="education">
        <div>
          <SectionHeading label="Education" title="Academic foundation" />
          <div className="max-w-lg">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/20"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08]">
                <GraduationCap size={17} className="text-primary" />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold tracking-[-0.01em]">B.C.Sc (Computer Science)</h3>
                <p className="mt-1 text-[15px] text-muted-foreground">University of Computer Studies, Meiktila</p>
                <span className="mt-2 inline-block font-mono text-[14px] tracking-wide text-primary">2014 – 2019</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div>
          <SectionHeading label={siteConfig.leadership.label} title="Community leadership" />
          <div className="max-w-lg space-y-3">
            {siteConfig.leadership.items.map((item) => (
              <motion.div
                key={item.org}
                whileHover={{ y: -2 }}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/20"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08]">
                  <Users size={17} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold tracking-[-0.01em]">{item.org}</h3>
                  <span className="mt-2 inline-block font-mono text-[14px] tracking-wide text-primary">{item.period}</span>
                </div>
              </motion.div>
            ))}
            <p className="text-[15px] italic leading-relaxed text-muted-foreground">
              Motivation: <span className="text-foreground/80 not-italic">{siteConfig.personal.motivation}</span>
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
