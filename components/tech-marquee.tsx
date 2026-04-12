"use client";

import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", 
  "Flutter", ". NET", "Docker", "Java Spring Boot", "Tailwind CSS",
  "Figma", "Ubuntu", "Jenkin", "Git", "Angular", "Python", "Laravel"
];

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-8 bg-card/50 border-y border-border">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: [0, -50 * technologies.length] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="text-2xl md:text-3xl font-bold text-muted-foreground/30 hover:text-primary transition-colors duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
