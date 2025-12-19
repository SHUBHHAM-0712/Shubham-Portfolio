"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Briefcase, Award } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      icon: Briefcase,
      type: "INTERNSHIP",
      title: "Full-Stack Developer Intern",
      organization: "Tech Company XYZ",
      period: "Jun 2024 - Aug 2024",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with team to deliver client projects.",
      color: "primary",
    },
    {
      icon: Trophy,
      type: "HACKATHON",
      title: "Winner - Smart India Hackathon",
      organization: "Government of India",
      period: "Mar 2024",
      description: "Built an innovative solution for education sector using AI/ML. Led a team of 6 members to victory.",
      color: "secondary",
    },
    {
      icon: Award,
      type: "PROJECT",
      title: "Major Project - AI Assistant",
      organization: "University Final Year",
      period: "Jan 2024 - Present",
      description: "Developing an AI-powered virtual assistant using NLP and machine learning technologies.",
      color: "accent",
    },
    {
      icon: Briefcase,
      type: "INTERNSHIP",
      title: "Web Developer Intern",
      organization: "Startup ABC",
      period: "Dec 2023 - Feb 2024",
      description:
        "Created responsive landing pages and implemented RESTful APIs. Worked with modern web technologies.",
      color: "primary",
    },
  ]

  return (
    <section id="experience" className="relative py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary">QUEST</span> LOG
        </h2>
        <p className="text-center text-muted-foreground mb-12">{"> Achievements & Experience"}</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 -ml-4 md:-ml-4">
                  <div
                    className={`w-8 h-8 rounded-full bg-${exp.color} flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.6)]`}
                  >
                    <exp.icon className="h-4 w-4 text-background" />
                  </div>
                </div>

                {/* Content */}
                <Card
                  className={`flex-1 ml-20 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-[calc(50%+2rem)]" : "md:ml-[calc(50%+2rem)]"
                  } bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]`}
                >
                  <CardContent className="p-6">
                    <div className={`text-xs text-${exp.color} mb-2`}>{exp.type}</div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{exp.title}</h3>
                    <div className="text-sm text-muted-foreground mb-2">{exp.organization}</div>
                    <div className="text-xs text-secondary mb-3">{exp.period}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
