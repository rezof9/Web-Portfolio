import { Github, Linkedin, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/rezof9",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { href: "#about", label: "Tentang Saya" },
  { href: "#projects", label: "Project" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#contact", label: "Kontak" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              FI<span className="text-primary">.</span>
            </a>

            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} M. Farel Ibrahim. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  text-sm
                  text-muted-foreground
                  hover:text-primary
                  transition-colors
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="
                  p-2
                  rounded-full
                  glass
                  text-muted-foreground
                  hover:bg-primary/10
                  hover:text-primary
                  hover:border-primary/30
                  transition-all
                "
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            Built with
            <span className="text-primary">React</span>
            <Heart className="w-3 h-3 text-primary fill-current" />
            in Indonesia
          </p>
        </div>

      </div>
    </footer>
  );
};
