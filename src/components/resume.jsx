"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import {
  Calendar,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase as BriefcaseIcon,
} from "lucide-react";

export default function Archievement() {
  const [activeTab, setActiveTab] = useState("experience");

  const experienceItems = [
    {
      period: "Dec 2024 - Jan 2025",
      title: "Social Work Intern",
      organization: "Shri Bolbala Charitable Trust",
      location: "Rajkot, Gujarat, India",
      description:
        "Participated in a humanitarian project in collaboration with an NGO, helping to organize and distribute essential items such as food, clothing, and blankets to families in need across needy areas, reaching and supporting over 200+ individuals.",
      tags: ["Social Work", "Team Collaboration", "Humanitarian Aid"],
    },
  ];

  const educationItems = [
    {
      periodLabel: "2023 - Present",
      title: "B.Tech - Information and Communication Technology",
      organization: "Dhirubhai Ambani University (Formerly DA-IICT)",
      location: "Gandhinagar, Gujarat, India",
      description:
        "Current coursework includes Data Structures and Algorithms, DBMS, Design and Analysis of Algorithms, OOPs, and Introduction to ICT.",
      score: "Score: 7.11 CPI",
    },
    {
      periodLabel: "2022 - 2023",
      title: "12TH (Science, GHSEB)",
      organization: "Purohit Science School",
      location: "Jamnagar, Gujarat, India",
      description:
        "Secured 83.23% and achieved a 99.65 percentile rank in the GHSEB 12th Examination.",
      score: "Score: 83.23% | Percentile: 99.65",
    },
    {
      periodLabel: "2020 - 2021",
      title: "10TH (GSEB)",
      organization: "Krishna Science School",
      location: "Jamnagar, Gujarat, India",
      description: "Secured 95.33% in the GSEB 10th Examination.",
      score: "Score: 96.17% | Percentile: 99.73",
    },
  ];

  const isExperience = activeTab === "experience";
  const items = isExperience ? experienceItems : educationItems;

  return (
    <section id="resume" className="relative py-24 px-4 bg-muted/10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
            <span className="text-primary">CAREER</span> PROFILE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Professional journey, qualifications, and achievements
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-[0_0_25px_rgba(147,51,234,0.4)] text-base font-semibold"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1sdPVo_dUxLG2BMHkmiqIXyzmWM0ABvvd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-5 w-5" /> VIEW RESUME
              </a>
            </Button>
          </div>

          <div className="mt-12 inline-flex rounded-xl bg-background/50 p-1.5 border border-primary/25">
            <button
              type="button"
              onClick={() => setActiveTab("experience")}
              className={`px-7 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2.5 ${
                isExperience
                  ? "bg-primary text-primary-foreground shadow-[0_0_18px_rgba(147,51,234,0.5)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <BriefcaseIcon className="h-4 w-4" /> EXPERIENCE
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={`px-7 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2.5 ${
                !isExperience
                  ? "bg-primary text-primary-foreground shadow-[0_0_18px_rgba(147,51,234,0.5)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GraduationCap className="h-4 w-4" /> EDUCATION
            </button>
          </div>
        </div>

        <div className="mt-12 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/30" />

          <div className="space-y-10">
            {items.map((item, index) => (
              <div key={index} className="relative flex gap-6 items-stretch">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(147,51,234,0.8)] mt-1.5" />
                  <div className="flex-1" />
                </div>

                <div className="mt-[-2px]">
                  <div className="inline-flex items-center rounded-lg bg-primary/15 text-secondary px-4 py-1.5 text-xs mb-4 font-semibold uppercase tracking-wide">
                    <Calendar className="h-3.5 w-3.5 mr-2" />
                    {isExperience ? item.period : item.periodLabel}
                  </div>

                  <Card className="bg-card/70 border border-primary/30 shadow-[0_18px_45px_rgba(15,23,42,0.7)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.8)] transition-shadow">
                    <CardContent className="p-7 md:p-8">
                      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {item.title}
                        </h3>
                        {"score" in item && (
                          <span className="text-xs md:text-sm font-bold text-emerald-400 uppercase tracking-wider">
                            {item.score}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="inline-flex items-center gap-1.5">
                          <GraduationCap className="h-4 w-4 text-secondary flex-shrink-0" />
                          {item.organization}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-secondary flex-shrink-0" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {"tags" in item && item.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-4 py-1.5 rounded-lg bg-primary/15 text-primary border border-primary/30 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
