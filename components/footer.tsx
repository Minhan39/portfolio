"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Minhan39", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/minhan39", label: "LinkedIn" },
  { icon: Mail, href: "mailto:annpm.0107@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Social links for mobile */}
        <div className="flex justify-center gap-6 mb-6 md:hidden">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/alexnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-mono"
          >
            <p className="mb-1">Designed & Built by Pham Minh An</p>
            <p className="text-xs">© 2026 All Rights Reserved</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
