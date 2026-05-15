"use client";

import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@teispace/next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-foreground"
      aria-label="Toggle color theme"
      suppressHydrationWarning
    >
      {!mounted ? (
        <span className="inline-block h-[14px] w-[14px]" aria-hidden />
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? <Moon size={14} /> : <Sun size={14} />}
          </motion.div>
        </AnimatePresence>
      )}
    </motion.button>
  );
}