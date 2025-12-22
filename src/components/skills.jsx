"use client";

import { Card, CardContent } from "@/components/ui/card.jsx";
import { Code2, Database, Globe, Cpu, Wrench, Brain } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
      color: "primary",
    },
    {
      icon: Globe,
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
      color: "secondary",
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
      color: "accent",
    },
    {
      icon: Brain,
      title: "AI / ML",
      skills: [
        "Python",
        "Langchain",
        "TensorFlow",
        "Scikit-learn",
        "OpenAI API",
      ],
      color: "neon-green",
    },
    {
      icon: Cpu,
      title: "Programming",
      skills: ["C", "C++", "Python", "Matlab", "JavaScript", "TypeScript"],
      color: "primary",
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: [
        "Git",
        "Github",
        "VS Code",
        "Figma",
        "PGadmin",
        "Jupyter Notebook",
        "Cursor",
      ],
      color: "secondary",
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary">SKILL</span> TREE
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          {"> Abilities Unlocked"}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] group"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 bg-${category.color}/10 rounded-lg border border-${category.color}/20`}
                  >
                    <category.icon
                      className={`h-6 w-6 text-${category.color}`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-center gap-2 group-hover:text-foreground transition-colors"
                    >
                      <span
                        className={`w-1.5 h-1.5 bg-${category.color} rounded-full`}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
