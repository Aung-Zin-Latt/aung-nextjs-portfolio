"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16 md:mb-20">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4 inline-flex items-center gap-2 text-[14px] font-medium uppercase tracking-[0.15em] text-primary"
      >
        <span className="h-px w-6 bg-primary/60" />
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="text-heading-hero"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-xl text-[18px] leading-relaxed text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}