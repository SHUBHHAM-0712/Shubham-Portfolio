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
      title: "InternNova",
      description:
        "InternNova is an AI-powered career platform that connects students and professionals with internships and job opportunities. It streamlines the hiring process through AI-driven resume screening, application tracking, and skill-based matching, helping candidates discover relevant opportunities while enabling companies to identify top talent efficiently.",
      tech: ["React.js", "Spring Boot", "MongoDB", "GenAI", "Tailwind CSS"],
      github: "https://github.com/SHUBHHAM-0712/InternNova",
      live: "https://internnova.vercel.app/",
      locked: false,
    },
    {
      level: "PROJECT 02",
      title: "Classync - Virtual Classroom Platform",
      description:
      "Developed a virtual classroom platform using Next.js and MongoDB with AI doubt solver, quiz generator, and chat assistant with a responsive UI for seamless cross-device learning experience. Implemented role-based authentication, real-time chat, assignments, and collaboration features.",
      tech: ["Next.js", "Firebase", "MongoDB", "GenAI", "Socket.io"],
      github: "https://github.com/SHUBHHAM-0712/Classync",
      live: "https://classync2025.vercel.app/",
      locked: false,
    },
    {
      level: "PROJECT 03",
      title: "AI-Powered Fitness Tracker - Microservice App",
      description:
        "Developed an AI-powered Fitness Tracker microservice application using Spring Boot and React.js, enabling users to track activities, monitor fitness progress, and receive AI-driven insights. Implemented secure authentication and authorization with Keycloak, adopted a microservices architecture, and integrated RabbitMQ for asynchronous communication between AI and Activity services to ensure scalable and efficient data processing.",
      tech: ["Spring Boot","React.js", "RabbitMQ", "Keycloak"], 
      github: "https://github.com/SHUBHHAM-0712/AI-Fitness-Tracker-Microservice-App",
      live: "https://github.com/SHUBHHAM-0712/AI-Fitness-Tracker-Microservice-App",
      locked: false,
    },
    {
      level: "PROJECT 04",
      title: "Skillify",
      description:
        "Skillify is a full-stack freelancer networking platform that connects individuals with real-world projects and like-minded teammates. It enables users to collaborate, showcase their skills, build strong portfolios, and gain practical experience to accelerate their career growth.",
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
