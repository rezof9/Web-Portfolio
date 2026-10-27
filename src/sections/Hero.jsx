import { Button } from "@/components/Button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Download,
  Code2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "Laravel",
  "PHP",
  "React",
  "JavaScript",
  "Tailwind CSS",
  "MySQL",
  "REST API",
  "Git",
  "GitHub",
  "Bootstrap",
  "Flutter",
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-12"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Ambient Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 100}%`,
              animation: `slow-drift ${12 + (i % 8)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* SISI KIRI: Teks & Call to Action */}
          <div className="space-y-8">
            {/* Status Indicator */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs md:text-sm text-primary font-medium border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Available for Projects & Full-Time Roles
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] animate-fade-in animation-delay-100">
                Crafting <br />
                <span className="text-primary glow-text">scalable</span> &amp;{" "}
                <br />
                <span className="font-serif italic font-normal text-white">
                  modern web apps.
                </span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl animate-fade-in animation-delay-200">
                Halo! Saya{" "}
                <span className="text-white font-semibold">
                  M. Farel Ibrahim
                </span>
                , seorang Full-Stack Web Developer yang berfokus membangun aplikasi web yang cepat, responsif, dan mudah digunakan menggunakan ekosistem{" "}
                <span className="text-primary font-medium">Laravel</span>,{" "}
                <span className="text-primary font-medium">React</span>, dan{" "}
                <span className="text-primary font-medium">Tailwind CSS</span>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300">
              <a href="#projects">
                <Button size="lg" className="gap-2 cursor-pointer">
                  Lihat Portfolio
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <a href="/cv.pdf" download="CV_M_Farel_Ibrahim.pdf">
                <AnimatedBorderButton className="gap-2 cursor-pointer">
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400 pt-2">
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                Connect with me:
              </span>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-white/10"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-white/10"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* SISI KANAN: Foto Profil & Floating Badges */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-sm sm:max-w-md mx-auto">
              
              {/* Radial Ambient Glow Behind Photo */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl -z-10" />

              {/* Card Container Foto */}
              <div className="relative glass rounded-[2rem] p-3 glow-border border border-white/10 shadow-2xl">
                <img
                  src="/profile-photo.jpg"
                  alt="M. Farel Ibrahim"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover rounded-[1.5rem]"
                />

                {/* Floating Badge: Tech Stack */}
                <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 glass rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/10 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/20 text-primary">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        Full-Stack Dev
                      </div>
                      <div className="text-[11px] sm:text-xs text-primary font-medium">
                        Laravel • React
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge: Location */}
                <div className="absolute -top-4 -left-2 sm:-top-6 sm:-left-6 glass rounded-2xl px-4 py-3 shadow-xl border border-white/10 animate-float animation-delay-200">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                        Based in
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        Indonesia
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge Tambahan: Experience Highlight */}
                <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 glass rounded-2xl px-3 py-2 shadow-xl border border-white/10 hidden sm:flex items-center gap-2 animate-float animation-delay-400">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold text-white">
                    Clean Code
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION MARQUEE SKILLS */}
        <div className="mt-24 animate-fade-in animation-delay-600">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-muted-foreground/80 mb-8 text-center">
            Technologies &amp; Tools I Work With
          </p>

          <div className="relative overflow-hidden">
            {/* Left Gradient Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

            {/* Right Gradient Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Infinite Marquee Loop */}
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill}-${index}`}
                  className="flex-shrink-0 px-6 sm:px-8 py-3"
                >
                  <span className="text-base sm:text-lg font-semibold text-muted-foreground/60 hover:text-primary transition-colors cursor-default">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
            Explore
          </span>
          <div className="w-5 h-9 rounded-full border border-muted-foreground/30 group-hover:border-primary/50 flex justify-center pt-2 transition-colors">
            <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};