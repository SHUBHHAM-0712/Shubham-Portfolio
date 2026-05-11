"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [checkpointPositions, setCheckpointPositions] = useState(() =>
    navLinks.map((_, index) =>
      navLinks.length > 1 ? (index / (navLinks.length - 1)) * 100 : 50,
    ),
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const safeMaxScroll = Math.max(maxScroll, 1);
      const nextProgress =
        maxScroll > 0 ? Math.min((scrollY / maxScroll) * 100, 100) : 0;
      setScrollProgress(nextProgress);

      const nextCheckpointPositions = navLinks.map((link, index) => {
        const el = document.getElementById(link.id);
        if (!el) {
          return navLinks.length > 1
            ? (index / (navLinks.length - 1)) * 100
            : 50;
        }

        return Math.min((el.offsetTop / safeMaxScroll) * 100, 100);
      });
      setCheckpointPositions(nextCheckpointPositions);

      const offset = 140;
      let current = "home";

      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop - offset;
          if (scrollY >= top) {
            current = link.id;
          }
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveSection(id);
    setIsOpen(false);
  };

  const activeIndex = navLinks.findIndex((link) => link.id === activeSection);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-4">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[6px] border-y-[2px] border-black bg-primary" />
        <div
          className="pointer-events-none absolute left-0 top-0 h-[6px] border-y-[2px] border-black bg-secondary transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />

        {navLinks.map((link, index) => {
          const fallbackLeft =
            navLinks.length > 1 ? (index / (navLinks.length - 1)) * 100 : 50;
          const left = checkpointPositions[index] ?? fallbackLeft;

          return (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              aria-label={`Go to ${link.label}`}
              aria-current={index === activeIndex ? "true" : "false"}
              className="pointer-events-auto absolute top-0 flex h-6 w-6 -translate-x-1/2 -translate-y-1/4 cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-110 focus-visible:scale-110 focus-visible:outline-none"
              style={{ left: `${left}%` }}
            >
              {index === activeIndex && (
                <span className="checkpoint-pulse absolute h-5 w-5 rounded-full border-[2px] border-black/70" />
              )}
              <span
                className={`block h-4 w-4 rounded-full border-[3px] border-black ${
                  index <= activeIndex ? "bg-primary" : "bg-white"
                }`}
              />
            </button>
          );
        })}
      </div>

      <nav className="relative z-50 px-3 pb-3 pt-6 md:px-5 md:pt-7">
        <div className="mx-auto w-full border-[3px] border-black bg-primary px-3 py-2 shadow-[8px_8px_0_#000] transition-all duration-200">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="panel-hover icon-bop inline-flex h-11 w-11 items-center justify-center border-[3px] border-black bg-secondary text-base font-extrabold uppercase tracking-wide text-black shadow-[3px_3px_0_#000]"
            >
              SR
            </button>

            <div className="hidden md:flex flex-1 items-center justify-center gap-2 lg:gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`chip-hover border-[2px] border-transparent px-3 py-1 text-sm font-extrabold uppercase tracking-wide transition-colors ${
                    activeSection === link.id
                      ? "border-black bg-black text-primary"
                      : "text-black hover:border-black hover:bg-white/70"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <span className="chip-hover float-slower border-[3px] border-black bg-white px-3 py-2 text-sm font-semibold text-black shadow-[3px_3px_0_#000]">
                <span className="scribble text-xl">Creator Mode</span>
              </span>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="comic-btn wiggle-hover bg-secondary px-4 py-2 text-black"
              >
                Get in Touch!
              </button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 border-[3px] border-black bg-secondary text-black hover:bg-secondary/80 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {isOpen && (
            <div className="mt-2 border-t-[3px] border-black py-3 md:hidden">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`chip-hover block w-full border-[2px] border-transparent px-3 py-2 text-left text-sm font-bold uppercase tracking-wide ${
                    activeSection === link.id
                      ? "border-black bg-black text-primary"
                      : "text-black hover:border-black hover:bg-white/70"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="comic-btn wiggle-hover mt-2 w-full bg-secondary text-black"
              >
                Get in Touch!
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
