"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { ExternalLink, Github, Lock } from "lucide-react";

export default function Projects() {
  const stripTones = [
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "bg-[#b6e4d8]",
  ];

  const projects = [
    {
      level: "PROJECT 01",
      title: "Portfolio Website",
      description:
        "Personal portfolio highlighting my Data Science, AI/ML, and Full-Stack journey with interactive storytelling and modern UI motion.",
      tech: ["React.js", "Email.js", "Framer Motion", "Tailwind", "Vite"],
      github: "https://github.com/SHUBHHAM-0712/Shubham-Portfolio",
      live: "#",
      locked: false,
    },
    {
      level: "PROJECT 02",
      title: "Clssync - Virtual Classroom Platform",
      description:
        "Developed a virtual classroom platform using Next.js and MongoDB with AI doubt solver, quiz generator, and chat assistant with a responsive UI for seamless cross-device learning experience. Implemented role-based authentication, real-time chat, assignments, and collaboration features.",
      tech: ["Next.js", "Firebase", "MongoDB", "GenAI", "Socket.io"],
      github: "https://github.com/SHUBHHAM-0712/Classync",
      live: "https://classync2025.vercel.app/",
      locked: false,
    },
    {
      level: "PROJECT 03",
      title: "TwinTrail",
      description:
        "Collaborative project platform with real-time updates and analytics-focused insights to support better team decisions.",
      tech: ["React.js", "Vite", "Leaflet", "Tailwind"],
      github: "https://github.com/SHUBHHAM-0712/TwinTrails",
      live: "https://twintrails.vercel.app/",
      locked: false,
    },
    {
      level: "PROJECT 04",
      title: "Skillify",
      description:
        "Skillify is a full-stack freelancer network where people build career momentum by shipping real projects with the right team.",
      tech: [
        "MongoDB",
        "React.js",
        "Express.js",
        "Node.js",
        "JWT",
        "Node Mailer",
      ],
      github: "https://github.com/SHUBHHAM-0712/Skillify",
      live: "https://skillify-app.onrender.com/",
      locked: false,
    },
  ];

  return (
    <section id="projects" className="section-wrap">
      <div className="mb-6 flex items-end justify-between gap-4">
        <span className="comic-chip chip-hover reveal-up">Projects</span>
        <p className="scribble reveal-up delay-100 hidden text-3xl font-bold text-foreground md:block">
          Selected work
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="comic-panel panel-hover reveal-up group relative overflow-hidden py-0"
            style={{ transitionDelay: `${120 + index * 110}ms` }}
          >
            {project.locked && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/70 backdrop-blur-[1px]">
                <Lock className="h-12 w-12 animate-pulse text-white" />
              </div>
            )}

            <CardHeader
              className={`border-b-[3px] border-black py-4 ${stripTones[index % stripTones.length]}`}
            >
              <div className="mb-2 text-xs font-black uppercase tracking-[0.12em] text-black/80">
                {project.level}
              </div>
              <CardTitle className="text-xl font-extrabold text-black md:text-2xl">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <p className="text-sm leading-relaxed text-foreground/85">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="chip-hover border-[2px] border-black bg-white px-3 py-1 text-xs font-bold text-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pb-3 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comic-btn panel-hover icon-bop wiggle-hover bg-white text-black"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`comic-btn panel-hover icon-bop wiggle-hover text-black ${
                    project.locked
                      ? "pointer-events-none bg-muted opacity-60"
                      : "bg-secondary"
                  }`}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
