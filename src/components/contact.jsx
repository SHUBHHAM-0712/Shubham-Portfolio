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
    <section id="contact" className="relative py-20 px-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(147,51,234,0.35),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(34,211,238,0.2),_transparent_55%)] opacity-70" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="text-primary">Get in</span> Touch
        </h2>
        <p className="text-center text-muted-foreground mb-10 md:mb-16 text-sm md:text-base">
          {"> Ready to collaborate? Drop a message or reach out directly."}
        </p>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)] items-stretch">
          {/* Contact Information */}
          <Card className="bg-card/95 backdrop-blur-md border border-primary/25 shadow-[0_25px_80px_rgba(15,23,42,0.9)] flex flex-col justify-between rounded-[26px]">
            <div>
              <CardHeader className="pb-6 pt-7 px-7">
                <CardTitle className="text-2xl md:text-3xl font-semibold tracking-tight text-card-foreground">
                  Contact Information
                </CardTitle>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  Always open to discussing new projects, creative ideas, or
                  opportunities.
                </p>
              </CardHeader>

              <CardContent className="space-y-6 pb-7 px-7">
                <div className="space-y-4">
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

                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent my-2" />

                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    Follow Me
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {socials.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/20 bg-background/60 px-3 py-2 text-xs md:text-sm text-muted-foreground hover:text-primary-foreground hover:border-primary/60 hover:bg-gradient-to-br hover:from-primary/90 hover:to-secondary/90 transition-all shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_35px_rgba(129,140,248,0.65)]"
                      >
                        <social.icon className="h-4 w-4" />
                        <span>{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>

            <div className="px-7 pb-6 pt-2 text-xs md:text-sm text-muted-foreground/90">
              <p>Prefer email? I'll usually respond within 24 hours.</p>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="relative overflow-hidden rounded-[26px] border border-primary/30 bg-gradient-to-b from-card/95 to-background/90 shadow-[0_28px_90px_rgba(15,23,42,1)]">
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <CardHeader className="pb-2 pt-7 px-7">
              <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-card-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="px-7 pb-8 pt-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 md:h-14 rounded-xl border border-primary/35 bg-background/40 px-4 text-sm md:text-base tracking-wide placeholder:text-muted-foreground/60 focus-visible:border-primary/80 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-0"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 md:h-14 rounded-xl border border-primary/35 bg-background/40 px-4 text-sm md:text-base tracking-wide placeholder:text-muted-foreground/60 focus-visible:border-primary/80 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-0"
                  />
                </div>

                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="h-12 md:h-14 rounded-xl border border-primary/35 bg-background/40 px-4 text-sm md:text-base tracking-wide placeholder:text-muted-foreground/60 focus-visible:border-primary/80 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-0"
                />

                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="min-h-[150px] rounded-xl border border-primary/35 bg-background/40 px-4 py-3 text-sm md:text-base tracking-wide placeholder:text-muted-foreground/60 focus-visible:border-primary/80 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-0 resize-none"
                />

                <div className="space-y-2">
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary via-accent to-secondary px-6 h-12 md:h-14 text-sm md:text-base font-semibold text-primary-foreground shadow-[0_18px_55px_rgba(15,23,42,1)] transition-all hover:shadow-[0_22px_70px_rgba(15,23,42,1)]"
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

        <div className="mt-10 md:mt-14 text-center text-xs md:text-sm text-muted-foreground">
          <p>© 2025 Shubham Ramoliya. All rights reserved.</p>
          <p className="mt-2">Designed & built with React and Tailwind CSS.</p>
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
