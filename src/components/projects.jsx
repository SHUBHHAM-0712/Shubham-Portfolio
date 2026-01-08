"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ExternalLink, Github, Lock } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      level: "LEVEL 01",
      title: "Portfolio Website",
      description:
        "Gaming-themed portfolio showcasing projects and skills with modern animations and interactions.",
      tech: ["React.js", "Email.js", "Framer Motion", "Tailwind", "Vite"],
      github: "https://github.com/SHUBHHAM-0712/Shubham-Portfolio",
      live: "#",
      locked: false,
    },
    {
      level: "LEVEL 02",
      title: "Clssync - Virtual Classroom Platform",
      description:
        "Developed a virtual classroom platform with AI-powered doubt solving, quiz generation, and chat assistance. Implemented role-based authentication, real-time communication (chats, announcements, file sharing), and assignment management with a responsive, user-friendly interface for seamless online learning.",
      tech: ["Next.js", "Firebase", "MongoDB", "GenAI", "Socket.io"],
      github: "https://github.com/SHUBHHAM-0712/Classync",
      live: "https://classync2025.vercel.app/",
      locked: false,
    },
    {
      level: "LEVEL 03",
      title: "TwinTrail",
      description:
        "Collaborative project management tool with real-time updates, team features, and analytics.",
      tech: ["React.js", "Vite", "Leaflet", "Tailwind"],
      github: "https://github.com/SHUBHHAM-0712/TwinTrails",
      live: "https://twintrails.vercel.app/",
      locked: false,
    },
    {
      level: "LEVEL 04",
      title: "Word Cloud Generator",
      description:
        "Built a word cloud generator where I first wrote a C++ program to count word frequencies, and then used a Python script to turn that frequency map into a word cloud image. Kept both parts independent but linked them in workflow.",
      tech: ["C++", "Python"],
      github: "https://github.com/SHUBHHAM-0712/Word-Cloude-Generator",
      live: "#",
      locked: true,
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 bg-muted/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-6 text-white">
          <span className="text-primary">QUEST</span> ARCHIVE
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-sm md:text-base">
          {"> EMBARK ON EPIC JOURNEYS • EXPLORE LEGENDARY PROJECTS"}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/60 backdrop-blur-sm border-primary/30 hover:border-secondary/50 transition-all hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] group relative overflow-hidden"
            >
              {project.locked && (
                <div className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center z-10">
                  <Lock className="h-12 w-12 text-muted-foreground" />
                </div>
              )}

              <CardHeader>
                <div className="text-xs text-secondary mb-3 font-mono uppercase tracking-wider">
                  {project.level}
                </div>
                <CardTitle className="text-xl md:text-2xl text-white group-hover:text-secondary transition-colors font-bold">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 bg-primary/15 text-primary border border-primary/30 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent text-xs font-semibold"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
