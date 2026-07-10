"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import {
  Calendar,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase as BriefcaseIcon,
  Trophy,
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
     {
      period: "Feb 2026",
      title: "Tata Group Data Analytics Simulation (Forage)",
      organization: "Job Simulation on 'theforage.com'",
      location: "Remote",
      description:
        "Performed EDA using GenAI tools to identify data quality issues and risk indicators. Developed no-code predictive framework for customer delinquency risk assessment. Designed AI-based collections strategy with automation, compliance, and ethical AI.",
      tags: ["Data Analytics" , "GenAI" , "Predictive Modeling"],
      link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_697a6cd04fbf8c8be5eef621_1770923801876_completion_certificate.pdf", // Add your credential link here
    },
    {
      period: "Certificate",
      title: "AWS Cloud Practitioner Essentials",
      organization: "Amazon Web Services (AWS)",
      location: "Online",
      description:
        "Completed the AWS Cloud Practitioner Essentials training, gaining an overall understanding of the AWS Cloud platform, covering basic cloud concepts, AWS services, security, architecture, pricing, and support.",
      tags: ["AWS", "Cloud Computing"],
      link: "https://drive.google.com/file/d/1ErAh-EEY2IKDJVEFyLPRnLbpemCpL7BB/view?usp=sharing", // Add your credential link here
    },
  ];

  const educationItems = [
    {
      periodLabel: "2023 - Present",
      title: "B.Tech - Information and Communication Technology",
      organization: "Dhirubhai Ambani University (Formerly DA-IICT)",
      location: "Gandhinagar, Gujarat, India",
      description:
        "Current coursework includes Data Structures, DBMS, Probability & Statistics, core AI/ML concepts, and software engineering fundamentals.",
      score: "Score: 7.2 CPI",
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

  const achievementsItems = [
    {
      periodLabel: "Programming",
      title: "Codeforces Specialist & LeetCode Knight",
      organization: "Codeforces & LeetCode",
      location: "Global",
      description: "Achieved Specialist rating (1434 max) on Codeforces and Knight badge (1956 max, Top 3%) on LeetCode.",
      tags: ["Competitive Programming", "DSA", "Problem Solving"],
      links: [
        { url: "https://codeforces.com/profile/shubham_0712", label: "Codeforces" }, // Add your Codeforces profile link here
        { url: "https://leetcode.com/u/RSS0712/", label: "LeetCode" }    // Add your LeetCode profile link here
      ],
    },
    {
      periodLabel: "2023",
      title: "JEE Mains - All India Rank 5241",
      organization: "National Testing Agency",
      location: "India",
      description: "Secured an All India Rank of 5241 in the highly competitive JEE Mains examination with a 99.56 Percentile.",
      tags: ["JEE Mains", "Top Percentile"],
    },
    {
      periodLabel: "2023",
      title: "ACPC All Gujarat Rank 63",
      organization: "Admission Committee for Professional Courses",
      location: "Gujarat, India",
      description: "Achieved an outstanding All Gujarat Rank of 63. Also secured 99.65 PR in GHSEB and 99.92 PR in GUJCET.",
      tags: ["ACPC", "GUJCET", "State Topper"],
    },
  ];

  const items =
    activeTab === "experience"
      ? experienceItems
      : activeTab === "education"
        ? educationItems
        : achievementsItems;

  return (
    <section id="resume" className="section-wrap">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <span className="comic-chip chip-hover reveal-up">Resume</span>
        <a
          href="https://drive.google.com/file/d/1rP2WXL8K4NKpVnkR_fz8l62dUFaFJZDi/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="comic-btn panel-hover wiggle-hover reveal-up delay-100 bg-secondary text-black"
        >
          <ExternalLink className="h-4 w-4" /> View Resume
        </a>
      </div>

      <div className="comic-panel reveal-up delay-200 p-2 md:p-3">
        <div className="flex flex-wrap gap-2 border-[3px] border-black bg-white p-2">
          <button
            type="button"
            onClick={() => setActiveTab("experience")}
            className={`chip-hover inline-flex items-center gap-2 border-[3px] border-black px-4 py-2 text-sm font-extrabold uppercase transition-colors ${
              activeTab === "experience" ? "bg-primary text-black" : "bg-white text-black"
            }`}
          >
            <BriefcaseIcon className="h-4 w-4" /> Experience
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("education")}
            className={`chip-hover inline-flex items-center gap-2 border-[3px] border-black px-4 py-2 text-sm font-extrabold uppercase transition-colors ${
              activeTab === "education" ? "bg-primary text-black" : "bg-white text-black"
            }`}
          >
            <GraduationCap className="h-4 w-4" /> Education
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("achievements")}
            className={`chip-hover inline-flex items-center gap-2 border-[3px] border-black px-4 py-2 text-sm font-extrabold uppercase transition-colors ${
              activeTab === "achievements" ? "bg-primary text-black" : "bg-white text-black"
            }`}
          >
            <Trophy className="h-4 w-4" /> Achievements
          </button>
        </div>

        <div className="relative mt-6 pl-4 md:pl-8">
          <div className="absolute left-1.5 top-0 h-full w-[3px] bg-black md:left-4" />

          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="reveal-up relative pl-5 md:pl-7"
                style={{ transitionDelay: `${120 + index * 110}ms` }}
              >
                <div className="absolute left-0 top-4 h-3 w-3 border-[2px] border-black bg-primary md:left-0.5" />

                <div className="chip-hover mb-3 inline-flex items-center border-[2px] border-black bg-secondary px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-black">
                  <Calendar className="mr-2 h-3.5 w-3.5" />
                  {item.period || item.periodLabel}
                </div>

                <Card className="comic-panel panel-hover py-0">
                  <CardHeader className="border-b-[3px] border-black bg-primary py-4">
                    <CardTitle className="text-xl font-extrabold text-black md:text-2xl">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4 p-6">
                    <div className="flex flex-wrap gap-3 text-sm font-bold text-foreground/90">
                      <span className="chip-hover inline-flex items-center gap-2 border-[2px] border-black bg-white px-3 py-1">
                        <GraduationCap className="h-4 w-4" />
                        {item.organization}
                      </span>
                      <span className="chip-hover inline-flex items-center gap-2 border-[2px] border-black bg-white px-3 py-1">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </span>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="chip-hover inline-flex items-center gap-2 border-[2px] border-black bg-[#ffd54f] px-3 py-1 hover:bg-[#ffc107]"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Certificate
                        </a>
                      )}
                      {item.links && item.links.map((linkObj, idx) => (
                        <a
                          key={idx}
                          href={linkObj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="chip-hover inline-flex items-center gap-2 border-[2px] border-black bg-[#ffd54f] px-3 py-1 hover:bg-[#ffc107]"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {linkObj.label}
                        </a>
                      ))}
                    </div>

                    <p className="text-sm leading-relaxed text-foreground/85 md:text-base">
                      {item.description}
                    </p>

                    {"score" in item && (
                      <p className="chip-hover inline-flex border-[2px] border-black bg-[#b6e4d8] px-3 py-1 text-sm font-extrabold text-black">
                        {item.score}
                      </p>
                    )}

                    {"tags" in item && item.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="chip-hover border-[2px] border-black bg-accent px-3 py-1 text-xs font-bold text-black"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
