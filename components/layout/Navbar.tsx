"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { useTranslation } from "@/hooks/useTranslation";
import { NAV_ITEMS } from "@/lib/constants/navigation";
import { scrollToSection } from "@/lib/utils/scroll";

/**
 * Main site navigation with active-section tracking and mobile menu.
 *
 * @remarks
 * Client component — depends on theme state, viewport scroll and
 * section intersection tracking.
 */
export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("navbar");
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("intro");
  const isDark = mounted ? theme !== "light" : true;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-80px 0px 0px 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const onNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  if (pathname.startsWith("/projects/")) return null;

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "border-[var(--custom-border)] bg-[var(--bg-primary)]/80 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
        style={{ paddingRight: "2rem" }}
      >
        <nav className="relative flex h-20 w-full items-center justify-between px-6 md:pl-10 md:pr-10">
          <button
            type="button"
            onClick={() => onNavClick("intro")}
            className="flex items-center"
            aria-label={t("nav_items.intro")}
          >
            <Image
              src={isDark ? "/logo-dark.png" : "/logo-light.png"}
              alt={t("logo_alt")}
              width={70}
              height={70}
              className="h-auto w-auto"
              priority
            />
          </button>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavClick(item.id)}
                  className={`[font-family:var(--font-display)] text-[13px] font-bold uppercase tracking-widest transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--nav-active)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {t(`nav_items.${item.id}`)}
                </button>
              );
            })}
          </div>

          <div className="hidden items-center pr-8 md:flex md:pr-12">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              disabled={!mounted}
              className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[var(--custom-border)] text-[var(--text-primary)] transition-colors duration-200 hover:border-[var(--text-primary)]"
              aria-label={t("toggle_theme")}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark || !mounted ? (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.75 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.75 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    <Sun size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.75 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.75 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    <Moon size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[var(--custom-border)] text-[var(--text-primary)] md:hidden"
            aria-label={t("open_menu")}
          >
            <Menu size={18} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[var(--bg-primary)] md:hidden"
          >
            <div className="flex h-20 items-center justify-end px-6">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[var(--custom-border)] text-[var(--text-primary)]"
                aria-label={t("close_menu")}
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-7 px-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavClick(item.id)}
                  className="text-[18px] font-semibold uppercase tracking-wide text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)] [font-family:var(--font-display)]"
                >
                  {t(`nav_items.${item.id}`)}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
