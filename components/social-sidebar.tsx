"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Minhan39", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/minhan39", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/pma_0107", label: "Instagram" },
];

export function SocialSidebar() {
  return (
    <>
      {/* Left sidebar - Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed left-6 lg:left-10 bottom-0 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30"
      >
        {socials.map(({ icon: Icon, href, label }, index) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 + index * 0.1 }}
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>

      {/* Right sidebar - Email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed right-6 lg:right-10 bottom-0 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30"
      >
        <motion.a
          href="mailto:annpm.0107@gmail.com"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300 font-mono text-xs tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          annpm.0107@gmail.com
        </motion.a>
      </motion.div>
    </>
  );
}
