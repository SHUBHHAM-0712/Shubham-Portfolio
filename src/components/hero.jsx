"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText =
    "FULL-STACK ENGINEER / JAVA SPRING BOOT & MERN DEVELOPER / PRODUCT BUILDER /";

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SHUBHHAM-0712",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ramoliya-shubham-288707329",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:ramoliya.shubham07@gmail.com",
      label: "Email",
    },
  ];

  const highlights = [
    "Full-Stack Dev",
    "Java Spring Boot",
    "MERN/Next.js",
    "SQL",
    "Python",
    "AI Features",
    "Backend Logic",
  ];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="section-wrap pt-10 md:pt-12">
      <div className="comic-panel panel-hover reveal-up px-5 py-7 md:px-8 md:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="reveal-up mb-3 text-3xl font-extrabold text-secondary">
              Hi there!
            </p>

            <h1 className="reveal-up delay-100 text-4xl leading-tight text-black sm:text-5xl md:text-4xl">
              I&apos;m Shubham Ramoliya.
            </h1>

            <p className="reveal-up delay-200 mt-5 max-w-xl text-base text-foreground/90 md:text-lg">
              I am a Full-Stack Developer dedicated to building scalable,
              end-to-end web applications. I specialize in Java Spring Boot and
              the MERN/Next.js stack, with a focus on integrating intelligent
              features like AI assistants and automated data pipelines into
              modern products. From architecting real-time collaboration
              platforms to designing responsive, cross-device UIs, I thrive on
              the challenge of building secure, high-performance systems. I
              bridge the gap between complex backend logic and seamless user
              experiences, ensuring every product I ship is both technically
              robust and user-centric. Driven by a product mindset and an
              algorithmic approach to problem-solving, I aim to build functional
              software that solves real-world problems with precision.
            </p>

            <div className="mt-4 h-7">
              <p className="reveal-up delay-300 font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground md:text-base">
                {text}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal-up panel-hover icon-bop inline-flex h-11 w-11 items-center justify-center border-[3px] border-black bg-white text-black shadow-[3px_3px_0_#000]"
                  style={{ transitionDelay: `${220 + index * 90}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="comic-btn wiggle-hover reveal-up delay-400 bg-secondary text-black"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="scribble reveal-up delay-500 bg-transparent text-3xl font-bold text-foreground"
              >
                Let&apos;s build something.
              </button>
            </div>
          </div>

          <div className="reveal-right delay-100 float-slow relative mx-auto w-full max-w-[390px]">
            <div className="float-slower panel-hover absolute -left-4 top-10 border-[3px] border-black bg-secondary px-3 py-1 text-xl font-black text-black shadow-[3px_3px_0_#000]">
              &lt;/&gt;
            </div>
            <div className="float-slow panel-hover absolute -right-2 bottom-12 border-[3px] border-black bg-primary px-3 py-1 text-xl font-black text-black shadow-[3px_3px_0_#000]">
              _
            </div>

            <div className="panel-hover rotate-[-2deg] border-[3px] border-black bg-secondary p-3 shadow-[6px_6px_0_#000]">
              <img
                src="/shubham2.JPG"
                alt="Shubham Ramoliya"
                className="h-[360px] w-full border-[3px] border-black bg-white object-cover md:h-[420px]"
                loading="lazy"
              />
            </div>

            <div className="chip-hover wiggle-hover absolute -bottom-2 right-2 border-[3px] border-black bg-[#b6e4d8] px-3 py-1 text-sm font-extrabold uppercase text-black shadow-[3px_3px_0_#000]">
              Builder + Full-Stack
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t-[3px] border-black pt-6">
          {highlights.map((item, index) => (
            <span
              key={item}
              className="reveal-up chip-hover border-[3px] border-black bg-white px-4 py-1 text-sm font-bold text-black shadow-[3px_3px_0_#000]"
              style={{ transitionDelay: `${320 + index * 70}ms` }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
