"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { RevealText } from "./reveal-text";

const skills = [
  { name: "Flutter", level: 85 },
  { name: ".NET Core", level: 80 },
  { name: "Java Spring Boot", level: 70 },
  { name: "Node.js", level: 80 },
  { name: "PostgreSQL", level: 90 },
  { name: "Python", level: 82 },
  { name: "Laravel", level: 88 },
  { name: "Prompt Engineer", level: 89 },
];

const tabs = ["Skills", "Experience", "Education"];

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("Skills");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <RevealText>About Me</RevealText>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Bio */}
            <div className="md:col-span-2 space-y-6 text-muted-foreground">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="leading-relaxed"
              >
                Hi, I'm Pham Minh An, a software developer based in Ho Chi Minh City, Vietnam.
                I focus on{" "}
                <span className="text-primary font-semibold">Flutter mobile development</span>{" "}
                and{" "}
                <span className="text-primary font-semibold">.NET Core backend development</span>{" "}
                , with hands-on experience building applications for enterprise and government use cases.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="leading-relaxed"
              >
                I enjoy turning business requirements into practical software, from mobile UI to API integration and database optimization.
                I am currently growing toward a Junior–Mid Software Engineer role with strong interest in scalable systems, clean architecture,
                and product-focused development.
              </motion.p>

              {/* Interactive tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <div className="flex gap-2 mb-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors ${activeTab === tab
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/30"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {activeTab === "Skills" && (
                    <motion.div
                      key="skills"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className="group"
                        >
                          <div className="flex justify-between mb-1 text-sm">
                            <span
                              className={`transition-colors ${hoveredSkill === skill.name
                                ? "text-primary"
                                : "text-foreground"
                                }`}
                            >
                              {skill.name}
                            </span>
                            <span className="text-muted-foreground font-mono">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{
                                delay: 0.5 + index * 0.05,
                                duration: 1,
                                ease: "easeOut",
                              }}
                            >
                              {/* Shimmer effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatDelay: 3,
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "Experience" && (
                    <motion.div
                      key="experience"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {[
                        { role: "IT", company: "Quan Chi Investment Jsc", period: "2026 - Present" },
                        { role: "Software Engineer", company: "VNPT Binh Duong", period: "2024 - 2025" },
                        { role: "Collaborator", company: "E-Learning Program - Thu Dau Mot University", period: "2021 - 2024" },
                      ].map((job, index) => (
                        <motion.div
                          key={job.role}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                        >
                          <h4 className="font-semibold text-foreground">{job.role}</h4>
                          <p className="text-primary text-sm">{job.company}</p>
                          <p className="text-muted-foreground text-xs font-mono mt-1">{job.period}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "Education" && (
                    <motion.div
                      key="education"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                      >
                        <h4 className="font-semibold text-foreground">B.S. Information Technology</h4>
                        <p className="text-primary text-sm">Thu Dau Mot University</p>
                        <p className="text-muted-foreground text-xs font-mono mt-1">2020 - 2025</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Profile Image with glitch effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative group"
            >
              <div className="relative w-full aspect-square max-w-[280px] mx-auto">
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "linear-gradient(90deg, transparent, transparent, rgba(100,200,180,0.5), transparent, transparent)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Decorative corner brackets */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary transition-all duration-300 group-hover:-top-3 group-hover:-left-3" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-primary transition-all duration-300 group-hover:-top-3 group-hover:-right-3" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-primary transition-all duration-300 group-hover:-bottom-3 group-hover:-left-3" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary transition-all duration-300 group-hover:-bottom-3 group-hover:-right-3" />

                {/* Image container with glitch effect on hover */}
                <div className="relative w-full h-full bg-card rounded-lg overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    whileHover={{
                      opacity: [0.1, 0, 0.1],
                      x: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Placeholder avatar */}
                  <div className="w-full h-full bg-gradient-to-br from-card to-secondary flex items-center justify-center relative overflow-hidden">
                    <motion.span
                      className="text-7xl font-bold text-primary/30"
                      whileHover={{
                        textShadow: [
                          "0 0 0 transparent",
                          "2px 2px 0 rgba(100,200,180,0.5), -2px -2px 0 rgba(255,100,100,0.3)",
                          "0 0 0 transparent",
                        ],
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <img src="https://avatars.githubusercontent.com/u/81009449?v=4" />
                    </motion.span>
                    {/* Scan lines */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-20"
                      style={{
                        background:
                          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
