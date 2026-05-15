"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, ImageIcon, Lock } from "lucide-react";

import { AnimatedSection } from "@/components/section/animated-section";
import { SectionHeading } from "@/components/section/section-heading";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/site";

function ProjectMedia({ project, priority }: { project: Project; priority?: boolean }) {
  if (project.isPrivate) {
    return (
      <div className="relative flex aspect-[16/10] items-center justify-center bg-secondary/30">
        <Lock size={20} className="text-muted-foreground/30" />
      </div>
    );
  }

  if (project.coverImage) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        <Image
          src={project.coverImage}
          alt={`${project.title} — product screenshot`}
          fill
          priority={priority}
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[16/10] flex-col items-center justify-center gap-2 bg-gradient-to-br from-muted/50 via-secondary/30 to-muted/40">
      <ImageIcon size={22} className="text-muted-foreground/40" />
      <span className="text-[14px] font-medium uppercase tracking-[0.14em] text-muted-foreground/70">
        Visual placeholder
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  imagePriority,
}: {
  project: Project;
  index: number;
  imagePriority?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection key={project.title} delay={index * 0.06}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/20 hover:shadow-[0_12px_40px_-12px_hsl(var(--glow)/0.12)]"
      >
        <ProjectMedia project={project} priority={imagePriority} />

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[14px] font-medium uppercase tracking-[0.12em] text-primary">{project.category}</span>
            {project.isPrivate ? (
              <span className="rounded border border-border bg-secondary/50 px-1.5 py-0.5 text-[14px] text-muted-foreground">
                NDA
              </span>
            ) : null}
          </div>

          <h3 className="mb-2 text-[17px] font-semibold tracking-[-0.01em]">{project.title}</h3>
          <p className="mb-3 text-[15px] leading-[1.65] text-muted-foreground">{project.overview}</p>

          <p className="mb-3 text-[14px] leading-[1.6] text-foreground/70">
            <span className="text-[14px] font-semibold uppercase tracking-wider text-primary">Role:</span> {project.role}
          </p>

          <div className="mb-3">
            <span className="mb-1.5 block text-[14px] font-semibold uppercase tracking-wider text-primary">Highlights</span>
            <ul className="space-y-1">
              {project.backendHighlights.map((h) => (
                <li key={h} className="flex items-start gap-1.5 text-[14px] leading-[1.6] text-muted-foreground">
                  <span className="mt-0.5 shrink-0 text-primary/50">▹</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mb-3 flex items-center gap-1 text-[14px] font-medium text-primary transition-colors hover:text-primary/80"
          >
            {expanded ? "Hide details" : "Challenges & results"}
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mb-3 overflow-hidden"
              >
                <div className="space-y-2 pb-1">
                  <div>
                    <span className="text-[14px] font-semibold uppercase tracking-wider text-primary">Challenge</span>
                    <p className="mt-0.5 text-[14px] leading-[1.6] text-muted-foreground">{project.challenges}</p>
                  </div>
                  <div>
                    <span className="text-[14px] font-semibold uppercase tracking-wider text-primary">Results</span>
                    <p className="mt-0.5 text-[14px] leading-[1.6] text-muted-foreground">{project.results}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-auto flex flex-wrap gap-1.5 border-t border-border/60 pt-3">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[14px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <AnimatedSection className="section-padding relative">
      <div className="section-divider absolute top-0 left-0" />
      <div className="container" id="projects">
        <SectionHeading
          label="Projects"
          title="Systems shipped in production"
          subtitle="Enterprise security, commerce, education, and financial tooling — all grounded in measurable operations"
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg border px-3 py-1.5 text-[14px] font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-5 md:grid-cols-3"
          >
            {filtered.map((p, i) => (
              <ProjectCard
                key={p.title}
                project={p}
                index={i}
                imagePriority={
                  i < 6 && Boolean(p.coverImage) && !p.isPrivate
                }
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}