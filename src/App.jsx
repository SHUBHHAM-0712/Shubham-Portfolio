import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Archievement from "@/components/resume";
import Contact from "@/components/contact";

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Archievement />
        <Contact />
      </main>
    </div>
  );
}

export default App;
