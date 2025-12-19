import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Trophy, Zap } from "lucide-react";

export default function About() {
  const stats = [
    { icon: User, label: "Level", value: "Final Year B.Tech Student" },
    { icon: Code, label: "Class", value: "Full-Stack Developer" },
    { icon: Trophy, label: "XP", value: "Multiple Projects & Internships" },
    { icon: Zap, label: "Status", value: "Ready for New Quests" },
  ];

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary">ABOUT</span> ME
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {"> Character Profile Loaded"}
        </p>

        <div className="flex justify-center mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] max-w-sm">
            <CardContent className="p-8 text-center">
              <div className="relative inline-block mb-4">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-50 animate-pulse"></div>
                <img
                  src="/image.png"
                  alt="Shubham Ramoliya"
                  width={180}
                  height={180}
                  className="rounded-lg border-2 border-primary/50 relative shadow-[0_0_20px_rgba(147,51,234,0.5)]"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                SHUBHAM RAMOLIYA
              </h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                Player ID: #DEV2024
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] group"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:text-secondary transition-colors" />
                <div className="text-xs text-muted-foreground uppercase mb-1">
                  {stat.label}
                </div>
                <div className="text-sm font-bold text-foreground">
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Player Stats
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>React.js</span>
                  <span className="text-primary">95%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-primary shadow-[0_0_10px_rgba(147,51,234,0.8)] animate-slideRight" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Node.js & Express</span>
                  <span className="text-secondary">90%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-secondary shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-slideRight delay-100" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Python & AI/ML</span>
                  <span className="text-accent">85%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-accent shadow-[0_0_10px_rgba(236,72,153,0.8)] animate-slideRight delay-200" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>DBMS & SQL</span>
                  <span className="text-neon-green">88%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[88%] bg-neon-green shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-slideRight delay-300" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>C++ Programming</span>
                  <span className="text-primary">92%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-primary shadow-[0_0_10px_rgba(147,51,234,0.8)] animate-slideRight delay-400" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
