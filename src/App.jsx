import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Archievement from "@/components/resume";
import Contact from "@/components/contact";

function App() {
  useEffect(() => {
    const revealSelector = ".reveal-up, .reveal-right, .reveal-down";
    const observed = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    const observeRevealElements = () => {
      const targets = document.querySelectorAll(revealSelector);
      targets.forEach((element) => {
        if (!observed.has(element)) {
          observed.add(element);
          observer.observe(element);
        }
      });
    };

    observeRevealElements();

    const mutationObserver = new MutationObserver(() => {
      observeRevealElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#cfcfcf] text-foreground">
      <main className="relative mx-auto w-full max-w-[2240px] px-3 pb-16 pt-6 md:px-5 md:pt-7 xl:pl-[200px] xl:pr-8">
        <div className="comic-shell">
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Archievement />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
