import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Github, Linkedin, Mail, Twitter, Phone, MapPin } from "lucide-react";
import { sendContactMessage } from "@/services/contactService";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await sendContactMessage(formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.log("[react] Contact form error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socials = [
    {
      icon: Github,
      href: "https://github.com/SHUBHHAM-0712",
      label: "GitHub",
      username: "@SHUBHHAM-0712",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ramoliya-shubham-288707329",
      label: "LinkedIn",
      username: "@ramoliya-shubham",
    },
    {
      icon: Twitter,
      href: "https://x.com/SHUBH_071205",
      label: "Twitter",
      username: "@SHUBH_071205",
    },
    {
      icon: Mail,
      href: "mailto:ramoliya.shubham07@gmail.com",
      label: "Email",
      username: "ramoliya.shubham07@gmail.com",
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(147,51,234,0.2),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(34,211,238,0.15),_transparent_55%)] opacity-50" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <h2 className="text-center text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">
          <span className="text-primary">CONTACT</span> COMMAND
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-sm md:text-base leading-relaxed">
          {"> SEND TRANSMISSION • COLLABORATE ON EPIC QUESTS"}
        </p>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)] items-stretch">
          {/* Contact Information */}
          <Card className="bg-card/70 backdrop-blur-md border border-primary/30 shadow-[0_25px_80px_rgba(15,23,42,0.8)] flex flex-col justify-between rounded-2xl">
            <div>
              <CardHeader className="pb-8 pt-8 px-8">
                <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  COMMUNICATION HUB
                </CardTitle>
                <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
                  Always open to discussing new projects, creative ideas, and
                  exciting opportunities.
                </p>
              </CardHeader>

              <CardContent className="space-y-7 pb-8 px-8">
                <div className="space-y-5">
                  <InfoRow
                    icon={Mail}
                    title="Email"
                    value="ramoliya.shubham07@gmail.com"
                  />
                  <InfoRow
                    icon={Phone}
                    title="Phone"
                    value={"+91 76000 65064"}
                  />
                  <InfoRow
                    icon={MapPin}
                    title="Location"
                    value="Jamnagar, Gujarat, India"
                  />
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                    Social Channels
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {socials.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2.5 text-xs md:text-sm text-muted-foreground hover:text-primary-foreground hover:border-primary/60 hover:bg-gradient-to-br hover:from-primary/80 hover:to-secondary/80 transition-all shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_35px_rgba(129,140,248,0.5)]"
                      >
                        <social.icon className="h-4 w-4" />
                        <span>{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>

            <div className="px-8 pb-6 pt-2 text-xs md:text-sm text-muted-foreground/80 leading-relaxed">
              <p>💌 Prefer email? I'll typically respond within 24 hours.</p>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="relative overflow-hidden rounded-2xl border border-primary/35 bg-gradient-to-b from-card/80 to-background/70 shadow-[0_28px_90px_rgba(15,23,42,0.9)]">
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <CardHeader className="pb-2 pt-8 px-8">
              <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-10 pt-5">
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 md:h-13 rounded-lg border border-primary/35 bg-primary/5 px-4 text-sm md:text-base tracking-wide placeholder:text-muted-foreground/60 focus-visible:border-primary/70 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-0"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 md:h-13 rounded-lg border border-primary/35 bg-primary/5 px-4 text-sm md:text-base tracking-wide placeholder:text-muted-foreground/60 focus-visible:border-primary/70 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-0"
                  />
                </div>

                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="h-12 md:h-13 rounded-lg border border-primary/35 bg-primary/5 px-4 text-sm md:text-base tracking-wide placeholder:text-muted-foreground/60 focus-visible:border-primary/70 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-0"
                />

                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="min-h-[160px] rounded-lg border border-primary/35 bg-primary/5 px-4 py-3 text-sm md:text-base tracking-wide placeholder:text-muted-foreground/60 focus-visible:border-primary/70 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-0 resize-none leading-relaxed"
                />

                <div className="space-y-2">
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-primary via-accent to-secondary px-6 h-12 md:h-13 text-sm md:text-base font-semibold text-primary-foreground shadow-[0_18px_55px_rgba(15,23,42,0.8)] transition-all hover:shadow-[0_22px_70px_rgba(15,23,42,0.9)]"
                  >
                    <span className="relative z-10">
                      {status === "sending"
                        ? "Sending..."
                        : status === "success"
                        ? "Message Sent!"
                        : "Send Message"}
                    </span>
                  </Button>

                  {status === "error" && (
                    <p className="text-xs md:text-sm text-destructive text-center">
                      Failed to send message. Please try again.
                    </p>
                  )}
                  {status === "success" && (
                    <p className="text-xs md:text-sm text-emerald-400 text-center">
                      Thanks for reaching out! I'll get back to you soon.
                    </p>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center text-xs md:text-sm text-muted-foreground space-y-2">
          <p>© 2025 Shubham Ramoliya. All rights reserved.</p>
          <p>
            Designed & Built With React, Tailwind CSS & A Passion For Gaming
          </p>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, title, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-[0_18px_35px_rgba(15,23,42,0.9)]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {title}
        </p>
        <p className="text-sm md:text-base font-medium text-card-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}
