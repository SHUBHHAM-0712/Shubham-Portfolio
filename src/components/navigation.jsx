"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "skills", label: "SKILLS" },
    { id: "resume", label: "RESUME" },
    { id: "contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const offset = 120; // navbar height + spacing
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveSection(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold text-primary hover:text-secondary transition-colors bg-transparent border-0 p-0"
          >
            {"<SR />"}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`text-sm transition-colors tracking-wider bg-transparent border-0 ${
                  activeSection === link.id
                    ? "text-primary drop-shadow-[0_0_10px_rgba(147,51,234,0.9)]"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm transition-colors bg-transparent border-0 ${
                  activeSection === link.id
                    ? "text-primary drop-shadow-[0_0_10px_rgba(147,51,234,0.9)]"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
