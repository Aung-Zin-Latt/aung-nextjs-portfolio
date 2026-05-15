"use client";

import { AchievementsSection } from "@/components/sections/achievements-section";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { BackendExpertiseSection } from "@/components/sections/backend-expertise-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { GitHubSection } from "@/components/sections/github-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { SummarySection } from "@/components/sections/summary-section";
import { WhyHireMeSection } from "@/components/sections/why-hire-me-section";
import { WorkAvailabilitySection } from "@/components/sections/work-availability-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export function PortfolioPage() {
  return (
    <div className="min-h-screen min-w-0 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SummarySection />
      <ExperienceSection />
      <ProjectsSection />
      <BackendExpertiseSection />
      <SkillsSection />
      <ArchitectureSection />
      <AchievementsSection />
      <CTASection />
      <WhyHireMeSection />
      <WorkAvailabilitySection />
      <EducationSection />
      <GitHubSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
