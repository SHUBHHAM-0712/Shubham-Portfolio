import { Card, CardContent } from "@/components/ui/card.jsx";
import { User, Code, Trophy, Zap } from "lucide-react";

export default function About() {
  const labelTones = [
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "bg-[#b6e4d8]",
  ];

  const stats = [
    {
      icon: User,
      label: "Current Role",
      value: "Focusing on AI-integrated systems and software engineering",
    },
    {
      icon: Code,
      label: "Core Focus",
      value:
        "Specializing in Next.js, Java-Springboot, and Python-based machine learning.",
    },
    {
      icon: Trophy,
      label: "Highlights",
      value: "AI-enabled projects, data workflows, and internships",
    },
    {
      icon: Zap,
      label: "Status",
      value: "Actively building AI-driven and full-stack products",
    },
  ];

  return (
    <section id="about" className="section-wrap pt-2">
      <div className="mb-6">
        <span className="comic-chip chip-hover reveal-up">About</span>
      </div>

      <Card className="comic-panel panel-hover reveal-up delay-100 py-0">
        <CardContent className="space-y-6 p-6 text-base md:p-8 md:text-lg">
          <p className="reveal-up delay-200">
            I am a
            <span className="chip-hover ml-2 inline-block border-[2px] border-black bg-secondary px-2 py-0.5 font-bold text-black">
              Full-Stack Developer
            </span>
            dedicated to building scalable, end-to-end web applications. I
            specialize in
            <span className="chip-hover ml-2 inline-block border-[2px] border-black bg-primary px-2 py-0.5 font-bold text-black">
              Java Spring Boot
            </span>
            and the
            <span className="chip-hover ml-2 inline-block border-[2px] border-black bg-accent px-2 py-0.5 font-bold text-black">
              MERN/Next.js
            </span>
            stack, with a focus on integrating intelligent features like
            <span className="chip-hover ml-2 inline-block border-[2px] border-black bg-[#b6e4d8] px-2 py-0.5 font-bold text-black">
              AI assistants
            </span>
            and automated data pipelines into modern products.
          </p>

          <p className="reveal-up delay-300">
            From architecting
            <span className="chip-hover ml-2 inline-block border-[2px] border-black bg-primary px-2 py-0.5 font-bold text-black">
              real-time collaboration platforms
            </span>
            to designing responsive, cross-device UIs, I thrive on the challenge
            of building secure, high-performance systems. I bridge the gap
            between complex backend logic and seamless user experiences,
            ensuring every product I ship is both technically robust and
            user-centric.
          </p>

          <p className="reveal-up delay-400">
            Driven by a
            <span className="chip-hover ml-2 inline-block border-[2px] border-black bg-secondary px-2 py-0.5 font-bold text-black">
              product mindset
            </span>
            and an algorithmic approach to problem-solving, I aim to build
            functional software that solves real-world problems with precision.
          </p>
        </CardContent>
      </Card>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card
            key={stat.label}
            className="comic-panel panel-hover reveal-up group py-0"
            style={{ transitionDelay: `${140 + index * 90}ms` }}
          >
            <CardContent className="p-5">
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`chip-hover border-[2px] border-black px-2 py-1 text-xs font-extrabold uppercase text-black ${labelTones[index % labelTones.length]}`}
                >
                  {stat.label}
                </span>
                <stat.icon className="h-5 w-5 text-black transition-transform duration-200 group-hover:scale-110" />
              </div>
              <p className="text-sm font-semibold leading-relaxed text-foreground md:text-base">
                {stat.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
