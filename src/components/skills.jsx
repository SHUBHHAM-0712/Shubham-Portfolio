"use client";

import { Card, CardContent } from "@/components/ui/card.jsx";
import { Code2, Database, Globe, Cpu, Wrench, Brain } from "lucide-react";

export default function Skills() {
  const toneMap = {
    cyan: {
      panel: "border-t-[6px] border-t-secondary",
      icon: "bg-secondary",
    },
    yellow: {
      panel: "border-t-[6px] border-t-primary",
      icon: "bg-primary",
    },
    pink: {
      panel: "border-t-[6px] border-t-accent",
      icon: "bg-accent",
    },
    mint: {
      panel: "border-t-[6px] border-t-[#b6e4d8]",
      icon: "bg-[#b6e4d8]",
    },
  };

  const skillCategories = [
    {
      icon: Cpu,
      title: "Programming",
      skills: ["C++", "Java", "Python", "JavaScript"],
      tone: "cyan",
    },
    {
      icon: Brain,
      title: "Technologies / Frameworks",
      skills: [" Spring Boot", "Next.js", "Node.js", "REST APIs"],
      tone: "pink",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["React.js(Basic)", "HTML", "CSS"],
      tone: "pink",
    },
    {
      icon: Database,
      title: "Data & DB",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
      tone: "yellow",
    },
    {
      icon: Code2,
      title: "Data Science & Machine Learning",
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
      ],
      tone: "cyan",
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "Github", "Postman", "Jupyter Notebook"],
      tone: "pink",
    },
  ];

  return (
    <section id="skills" className="section-wrap">
      <div className="mb-6">
        <span className="comic-chip chip-hover reveal-up">Skills</span>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className={`comic-panel panel-hover reveal-up py-0 ${toneMap[category.tone].panel}`}
            style={{ transitionDelay: `${100 + index * 90}ms` }}
          >
            <CardContent className="p-6">
              <div className="mb-5 flex items-center gap-4 border-b-[3px] border-black pb-4">
                <div
                  className={`icon-bop float-slower border-[3px] border-black p-2 text-black shadow-[3px_3px_0_#000] ${toneMap[category.tone].icon}`}
                >
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-extrabold uppercase text-black">
                  {category.title}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="chip-hover border-[2px] border-black bg-white px-3 py-1 text-sm font-bold text-black"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
