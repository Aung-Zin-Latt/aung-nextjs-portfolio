"use client";

import { Download, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function Footer() {
  const { contact, social, cvUrl, shortName, title } = siteConfig;

  return (
    <footer className="relative">
      <div className="section-divider absolute top-0 left-0" />
      <div className="container py-16 text-center">
        <p className="mb-2 text-lg font-semibold">Ready to build something dependable?</p>
        <p className="mb-6 text-[15px] text-muted-foreground">
          {siteConfig.cvUrl
            ? "Download my CV or send a short note with the role, stack, and pass type."
            : "Send a short note with the role, stack, and pass type — happy to share a CV on request."}
        </p>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Contact me</a>
          </Button>
          {cvUrl ? (
            <Button variant="hero-outline" size="lg" asChild>
              <a href={cvUrl} download="AUNG-ZIN-LATT.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={15} /> Download CV
              </a>
            </Button>
          ) : null}
        </div>
      </div>

      <div className="section-divider" />
      <div className="container flex w-full flex-col gap-4 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="text-[14px] text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-foreground/80">
            {shortName}
          </span>{" "}
          · {title}
        </div>
        <div className="flex items-center justify-center gap-1.5 sm:justify-end">
          {[
            { href: social.github, icon: Github },
            { href: contact.linkedin, icon: Linkedin },
            { href: `mailto:${contact.email}`, icon: Mail },
          ].map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-primary/20 hover:text-foreground"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
