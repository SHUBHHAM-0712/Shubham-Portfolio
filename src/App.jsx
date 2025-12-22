import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Archievement from "@/components/resume";
import Contact from "@/components/contact";

const pages = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/resume", label: "Resume" },
  { path: "/contact", label: "Contact" },
];

function PageWithNavigation({ pageIndex, children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex =
    pages.findIndex((p) => p.path === location.pathname) ?? pageIndex;

  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage =
    currentIndex >= 0 && currentIndex < pages.length - 1
      ? pages[currentIndex + 1]
      : null;

  return (
    <div className="relative min-h-screen">
      {children}

      {prevPage && (
        <button
          type="button"
          onClick={() => navigate(prevPage.path)}
          className="fixed bottom-4 left-4 rounded-full bg-primary px-4 py-2 text-xs md:text-sm font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
        >
          ← {prevPage.label}
        </button>
      )}

      {nextPage && (
        <button
          type="button"
          onClick={() => navigate(nextPage.path)}
          className="fixed bottom-4 right-4 rounded-full bg-primary px-4 py-2 text-xs md:text-sm font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
        >
          {nextPage.label} →
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <PageWithNavigation pageIndex={0}>
                <Hero />
              </PageWithNavigation>
            }
          />
          <Route
            path="/about"
            element={
              <PageWithNavigation pageIndex={1}>
                <About />
              </PageWithNavigation>
            }
          />
          <Route
            path="/projects"
            element={
              <PageWithNavigation pageIndex={2}>
                <Projects />
              </PageWithNavigation>
            }
          />
          <Route
            path="/skills"
            element={
              <PageWithNavigation pageIndex={3}>
                <Skills />
              </PageWithNavigation>
            }
          />
          <Route
            path="/resume"
            element={
              <PageWithNavigation pageIndex={4}>
                <Archievement />
              </PageWithNavigation>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWithNavigation pageIndex={5}>
                <Contact />
              </PageWithNavigation>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
