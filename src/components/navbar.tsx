"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Architecture", href: "#architecture" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "glass shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]" : "bg-transparent"
      }`}
    >
      <div className="relative z-[102]">
        <div className="container flex h-14 items-center justify-between">
        <a
          href="/"
          className="font-heading text-base font-semibold text-foreground transition-colors hover:text-primary"
          onClick={(e) => {
            e.preventDefault();
            setMobileOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.replaceState(null, "", "/");
          }}
        >
          <span className="text-primary">AUNG</span>
        </a>

        <div className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-[15px] text-muted-foreground transition-all duration-200 hover:bg-secondary/60 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <div className="ml-2 border-l border-border pl-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-1.5 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen
          ? [
              <motion.button
                key="nav-backdrop"
                type="button"
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-x-0 top-14 bottom-0 z-[100] bg-foreground/25 backdrop-blur-sm md:hidden"
                onClick={() => setMobileOpen(false)}
              />,
              <motion.div
                key="nav-panel"
                id="mobile-nav-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="fixed left-0 right-0 top-14 z-[101] max-h-[min(75dvh,calc(100dvh-3.5rem))] overflow-y-auto border-b border-border bg-card shadow-lg md:hidden"
              >
                <div className="flex flex-col gap-0.5 px-4 py-4 sm:px-6">
                  {links.map((l, i) => (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-3 text-[15px] text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
                    >
                      {l.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>,
            ]
          : null}
      </AnimatePresence>
    </motion.nav>
  );
}