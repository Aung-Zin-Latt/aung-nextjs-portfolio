"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { AnimatedSection } from "@/components/section/animated-section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function CTASection() {
  const { cvUrl } = siteConfig;

  return (
    <AnimatedSection className="relative py-20 md:py-28">
      <div className="container">
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-center md:p-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-primary/[0.03] transition-all duration-700 group-hover:from-primary/[0.07] group-hover:to-primary/[0.04]" />
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            style={{ boxShadow: "inset 0 0 80px hsl(var(--glow) / 0.04)" }}
          />
          <div className="relative z-10">
            <h2 className="text-heading-hero mb-4">Ready for senior full-stack ownership?</h2>
            <p className="mx-auto mb-8 max-w-lg text-[17px] leading-relaxed text-muted-foreground">
              Singapore enterprise delivery, global remote, or Vietnam/Malaysia on-site — immediate availability with a track record
              across eRoster, VMS, and product platforms.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  Start a conversation <ArrowRight size={15} />
                </a>
              </Button>
              {cvUrl ? (
                <Button variant="hero-outline" size="lg" asChild>
                  <a href={cvUrl} download="Aung-Zin-Latt-Full-Stack-Engineer-SG-On-site.pdf" target="_blank" rel="noopener noreferrer">
                    <Download size={15} /> Download CV
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
