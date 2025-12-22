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
    <section id="archievement" className="relative py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            <span className="text-primary">My</span> Resume
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            My professional journey and qualifications.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 shadow-[0_0_25px_rgba(34,197,235,0.4)]"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1sdPVo_dUxLG2BMHkmiqIXyzmWM0ABvvd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> View Resume
              </a>
            </Button>
          </div>

          <div className="mt-10 inline-flex rounded-full bg-background/40 p-1 border border-primary/20">
            <button
              type="button"
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors flex items-center gap-2 ${
                isExperience
                  ? "bg-primary text-primary-foreground shadow-[0_0_18px_rgba(34,197,235,0.5)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <BriefcaseIcon className="h-4 w-4" /> Experience
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors flex items-center gap-2 ${
                !isExperience
                  ? "bg-primary text-primary-foreground shadow-[0_0_18px_rgba(34,197,235,0.5)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GraduationCap className="h-4 w-4" /> Education
            </button>
          </div>
        </div>

        <div className="mt-8 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/25" />

          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index} className="relative flex gap-6 items-stretch">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(34,197,235,0.8)] mt-1" />
                  <div className="flex-1" />
                </div>

                <div className="mt-[-2px]">
                  <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-1 text-xs mb-3">
                    <Calendar className="h-3 w-3 mr-2" />
                    {isExperience ? item.period : item.periodLabel}
                  </div>

                  <Card className="bg-card/90 border border-primary/20 shadow-[0_18px_45px_rgba(15,23,42,0.8)]">
                    <CardContent className="p-6 md:p-7">
                      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between mb-3">
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                        {"score" in item && (
                          <span className="text-xs md:text-sm font-semibold text-emerald-400">
                            {item.score}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                        <span className="inline-flex items-center gap-1">
                          <GraduationCap className="h-4 w-4 text-primary" />
                          {item.organization}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-primary" />
                          {item.location}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {"tags" in item && item.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
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
