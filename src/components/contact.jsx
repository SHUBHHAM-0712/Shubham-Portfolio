import { useEffect, useState } from "react";
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
import { sendContactMessage, sendOtp } from "@/services/contactService";

const RATE_LIMIT_STORAGE_KEY = "contact_form_timestamps";
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const MAX_MESSAGES_PER_WINDOW = 3;
const OTP_RESEND_SECONDS = 60;

// Validates email format before triggering EmailJS.
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(String(email).trim());
}

// Keeps at most 3 successful sends in a 5-minute rolling window.
function checkRateLimit() {
  const now = Date.now();
  let timestamps = [];

  try {
    const stored = JSON.parse(
      localStorage.getItem(RATE_LIMIT_STORAGE_KEY) || "[]",
    );
    if (Array.isArray(stored)) {
      timestamps = stored;
    }
  } catch {
    timestamps = [];
  }

  const recentTimestamps = timestamps.filter(
    (timestamp) =>
      Number.isFinite(timestamp) && now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  localStorage.setItem(
    RATE_LIMIT_STORAGE_KEY,
    JSON.stringify(recentTimestamps),
  );

  return {
    allowed: recentTimestamps.length < MAX_MESSAGES_PER_WINDOW,
    recentTimestamps,
  };
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [otp, setOtp] = useState("");
  const [otpStatus, setOtpStatus] = useState("");
  const [otpErrorMessage, setOtpErrorMessage] = useState("");
  const [otpCooldown, setOtpCooldown] = useState(0);
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const canSubmit =
    status !== "sending" && otpStatus === "sent" && otp.trim().length === 6;

  useEffect(() => {
    if (otpCooldown <= 0) {
      return undefined;
    }

    const timer = setInterval(() => {
      setOtpCooldown((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [otpCooldown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateEmail(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (otpStatus !== "sent") {
      setOtpStatus("error");
      setOtpErrorMessage("Send OTP first, then enter the 6-digit code.");
      return;
    }

    if (!otp || otp.trim().length !== 6) {
      setOtpStatus("error");
      setOtpErrorMessage("Please enter the 6-digit OTP sent to your email.");
      return;
    }

    const rateLimitResult = checkRateLimit();
    if (!rateLimitResult.allowed) {
      setStatus("error");
      setErrorMessage(
        "You have sent too many messages. Please try again later.",
      );
      return;
    }

    setStatus("sending");
    setOtpErrorMessage("");

    try {
      await sendContactMessage({ ...formData, otp: otp.trim() });

      localStorage.setItem(
        RATE_LIMIT_STORAGE_KEY,
        JSON.stringify([...rateLimitResult.recentTimestamps, Date.now()]),
      );

      setStatus("success");
      setErrorMessage("");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setOtp("");

      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      const message =
        error?.message || "Failed to send message. Please try again.";
      if (message.toLowerCase().includes("otp")) {
        setOtpStatus("error");
        setOtpErrorMessage("OTP expired or invalid. Please request a new OTP.");
        setStatus("");
        return;
      }

      setStatus("error");
      setErrorMessage(message);
    }
  };

  const handleChange = (e) => {
    if (status === "error") {
      setStatus("");
    }
    setErrorMessage("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e) => {
    if (otpStatus === "error") {
      setOtpStatus("");
    }
    setOtpErrorMessage("");
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(value);
  };

  const handleSendOtp = async () => {
    setOtpErrorMessage("");

    if (!validateEmail(formData.email)) {
      setOtpStatus("error");
      setOtpErrorMessage("Please enter a valid email address first.");
      return;
    }

    setOtpStatus("sending");

    try {
      await sendOtp(formData.email);
      setOtpStatus("sent");
      setOtpErrorMessage("");
      setOtpCooldown(OTP_RESEND_SECONDS);
    } catch (error) {
      setOtpStatus("error");
      const message = error?.message || "Failed to send OTP.";
      setOtpErrorMessage(message);

      if (Number.isFinite(error?.retryAfterMs) && error.retryAfterMs > 0) {
        setOtpCooldown(Math.ceil(error.retryAfterMs / 1000));
      }
    }
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
    <section id="contact" className="section-wrap pb-10">
      <div className="mb-6">
        <span className="comic-chip chip-hover reveal-up">Get In Touch</span>
      </div>

      <p className="reveal-up delay-100 mb-8 text-center text-lg font-bold text-foreground md:text-2xl">
        Let&apos;s build AI-powered and data-driven products together.
      </p>

      <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.25fr]">
        <Card className="comic-panel panel-hover reveal-up delay-200 py-0">
          <CardHeader className="border-b-[3px] border-black bg-primary py-5">
            <CardTitle className="text-2xl text-black">
              Data + AI Collaboration Hub
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 p-6">
            <div className="space-y-4">
              <InfoRow
                icon={Mail}
                title="Email"
                value="ramoliya.shubham07@gmail.com"
              />
              <InfoRow icon={Phone} title="Phone" value={"+91 76000 65064"} />
              <InfoRow
                icon={MapPin}
                title="Location"
                value="Jamnagar, Gujarat, India"
              />
            </div>

            <div className="border-t-[3px] border-black pt-4">
              <p className="mb-4 text-sm font-extrabold uppercase tracking-wide text-black">
                Social Channels
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="panel-hover icon-bop reveal-up flex items-center gap-3 border-[3px] border-black bg-white px-3 py-2 text-sm font-bold text-black shadow-[3px_3px_0_#000]"
                    style={{ transitionDelay: `${220 + index * 80}ms` }}
                  >
                    <social.icon className="h-4 w-4" />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="comic-panel panel-hover reveal-up delay-300 py-0">
          <CardHeader className="border-b-[3px] border-black bg-secondary py-5">
            <CardTitle className="text-2xl text-black">
              Discuss a Project
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6">
            <form
              onSubmit={handleSubmit}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" &&
                  event.target?.tagName !== "TEXTAREA"
                ) {
                  event.preventDefault();
                }
              }}
              className="space-y-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-11 border-[3px] border-black bg-white px-3 text-sm font-semibold text-black placeholder:text-black/55 focus-visible:ring-0"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-11 border-[3px] border-black bg-white px-3 text-sm font-semibold text-black placeholder:text-black/55 focus-visible:ring-0"
                />
              </div>

              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="h-11 border-[3px] border-black bg-white px-3 text-sm font-semibold text-black placeholder:text-black/55 focus-visible:ring-0"
              />

              <Textarea
                name="message"
                placeholder="Tell me about your data science, ML, AI, or full-stack project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="min-h-[150px] resize-none border-[3px] border-black bg-white px-3 py-2 text-sm font-semibold text-black placeholder:text-black/55 focus-visible:ring-0"
              />

              <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                <Input
                  name="otp"
                  inputMode="numeric"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={handleOtpChange}
                  required
                  className="h-11 border-[3px] border-black bg-white px-3 text-sm font-semibold text-black placeholder:text-black/55 focus-visible:ring-0"
                />
                <Button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={otpStatus === "sending" || otpCooldown > 0}
                  className="comic-btn panel-hover h-11 bg-accent text-black"
                >
                  {otpStatus === "sending"
                    ? "Sending OTP..."
                    : otpCooldown > 0
                      ? `Resend in ${otpCooldown}s`
                      : "Send OTP"}
                </Button>
              </div>

              {otpStatus === "sent" && (
                <p className="text-center text-xs font-bold text-emerald-700">
                  OTP sent! Check your inbox.
                </p>
              )}
              {otpStatus === "error" && (
                <p className="text-center text-xs font-bold text-destructive">
                  {otpErrorMessage || "Failed to send OTP."}
                </p>
              )}

              <Button
                type="submit"
                disabled={!canSubmit}
                className="comic-btn panel-hover wiggle-hover h-12 w-full bg-primary text-black"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                    ? "Message Sent!"
                    : "Send Message"}
              </Button>

              {status === "error" && (
                <p className="text-center text-sm font-bold text-destructive">
                  {errorMessage || "Failed to send message. Please try again."}
                </p>
              )}
              {status === "success" && (
                <p className="text-center text-sm font-bold text-emerald-700">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 border-t-[3px] border-black pt-5 text-center text-sm font-bold text-foreground/80">
        <p>(c) 2026 Shubham Ramoliya. All rights reserved.</p>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, title, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="float-slower flex h-10 w-10 items-center justify-center border-[3px] border-black bg-accent text-black shadow-[3px_3px_0_#000]">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs font-extrabold uppercase tracking-wide text-black/70">
          {title}
        </p>
        <p className="text-sm font-bold text-card-foreground md:text-base">
          {value}
        </p>
      </div>
    </div>
  );
}
