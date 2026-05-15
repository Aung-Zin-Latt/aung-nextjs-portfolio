"use client";

import { motion } from "framer-motion";
import { GitBranch, Github, Star } from "lucide-react";

import { AnimatedSection } from "@/components/section/animated-section";
import { SectionHeading } from "@/components/section/section-heading";
import { Button } from "@/components/ui/button";
import { openSourceHighlights, siteConfig } from "@/data/site";

export function GitHubSection() {
  return (
    <AnimatedSection className="section-padding relative">
      <div className="section-divider absolute top-0 left-0" />
      <div className="container" id="github">
        <SectionHeading
          label="Open source"
          title="GitHub & public engineering"
          subtitle="Curated patterns and references — connect for private repositories under NDA"
        />

        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {openSourceHighlights.map((card, i) => (
            <AnimatedSection key={card.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/20 hover:shadow-[0_8px_30px_-12px_hsl(var(--glow)/0.08)]"
              >
                <div className="mb-3 flex items-center gap-2">
                  <GitBranch size={13} className="text-primary" />
                  <span className="text-[15px] font-semibold tracking-[-0.01em]">{card.name}</span>
                </div>
                <p className="mb-3 text-[14px] leading-[1.6] text-muted-foreground">{card.description}</p>
                <span className="inline-flex items-center gap-1 rounded border border-primary/20 bg-primary/[0.06] px-2 py-0.5 text-[14px] font-medium text-primary">
                  <Star size={9} /> {card.tag}
                </span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
