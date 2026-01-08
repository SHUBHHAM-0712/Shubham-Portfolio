"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Data Scientist / Web-Developer / Software Engineer / Tech Enthusiast";
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-4 text-sm text-secondary tracking-widest animate-fadeIn">
          {"> PLAYER PROFILE"}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
          <span className="text-primary">SHUBHAM</span>{" "}
          <span className="text-foreground">RAMOLIYA</span>
        </h1>

        <div className="h-8 mb-8">
          <p className="text-lg md:text-xl text-muted-foreground font-mono">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeIn delay-500">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] transition-all"
            onClick={() => navigate("/projects")}
          >
            START GAME
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
            onClick={() => navigate("/about")}
          >
            ENTER PORTFOLIO
          </Button>
        </div>

        <button
          type="button"
          onClick={() => navigate("/about")}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors animate-bounce bg-transparent border-0"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
