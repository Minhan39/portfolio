"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Briefcase, Calendar, ChevronRight } from "lucide-react";
import { RevealText } from "./reveal-text";

const experiences = [
  {
    company: "Quan Chi Investment Jsc",
    role: "IT",
    period: "2026 - Present",
    url: "https://quanchi.com.vn",
    description: [
      "Developed and maintained internal web applications",
      "Administered and operated Ubuntu servers (deployment, monitoring, maintenance)",
      "Managed and troubleshot network infrastructure, workstations, IP cameras, and printers",
      "Generated and managed operational reports via Base.vn platform",
    ],
    technologies: ["Laravel", "Network Administration", "Ubuntu", "PostgreSQL"],
  },
  {
    company: "VNPT Binh Duong",
    role: "Software Engineer",
    period: "2024 - 2025",
    url: "https://binhduong.vnpt.vn",
    description: [
      "Developed and maintained Flutter mobile applications serving internal and enterprise users",
      "Designed and implemented RESTful APIs using .NET Core, handling authentication and business logic",
      "Optimized PostgreSQL queries to improve data retrieval performance",
      "Worked directly with clients to gather requirements and support UAT",
      "Collaborated in a team of 5 members using Git and GitLab",
    ],
    technologies: ["Flutter", ".NET Core", "Angular", "Java Spring Boot", "Figma", "PostgreSQL"],
  },
  {
    company: "E-Learning Program - Thu Dau Mot University",
    role: "Collaborator",
    period: "2021 - 2024",
    url: "https://elearning.tdmu.edu.vn",
    description: [
      "Provide account support for students & lecturers",
      "Manage access permissions for academic systems",
      "Offer technical assistance for internal tools",
      "Develop & maintain internal administrative applications",
      "Streamline school operations through software solutions",
    ],
    technologies: ["Flutter", "Laravel", "Window Form", "Microsoft 365 Admin", "Figma"],
  },
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleTabChange = (index: number) => {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 md:py-32 px-6 bg-card/30 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <RevealText>Where I&apos;ve Worked</RevealText>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab list with animated indicator */}
            <div className="relative flex md:flex-col overflow-x-auto md:overflow-visible">
              {/* Vertical line background */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-border" />

              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.company}
                  onClick={() => handleTabChange(index)}
                  className={`relative px-6 py-4 text-sm font-mono whitespace-nowrap text-left transition-all duration-300 group ${activeTab === index
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                    }`}
                  whileHover={{ x: 4 }}
                >
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: activeTab === index ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.span>
                    {exp.company}
                  </span>

                  {/* Active indicator */}
                  {activeTab === index && (
                    <motion.div
                      layoutId="experienceIndicator"
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Content with slide animation */}
            <div className="flex-1 min-h-[450px] relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeTab}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 50, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: direction * -50, filter: "blur(10px)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  {/* Role and company */}
                  <div className="flex items-start gap-4 mb-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="p-2 bg-primary/10 rounded-lg"
                    >
                      <Briefcase className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {experiences[activeTab].role}
                      </h3>
                      <motion.a
                        href={experiences[activeTab].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1 text-lg"
                        whileHover={{ x: 3 }}
                      >
                        @ {experiences[activeTab].company}
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Period */}
                  <motion.p
                    className="text-muted-foreground font-mono text-sm mb-6 flex items-center gap-2 ml-14"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Calendar className="w-4 h-4" />
                    {experiences[activeTab].period}
                  </motion.p>

                  {/* Description with staggered animation */}
                  <ul className="space-y-4 ml-14">
                    {experiences[activeTab].description.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + index * 0.1 }}
                        className="flex gap-3 text-muted-foreground group"
                      >
                        <motion.span
                          className="text-primary mt-1.5 transition-transform"
                          whileHover={{ scale: 1.5, rotate: 90 }}
                        >
                          ▹
                        </motion.span>
                        <span className="group-hover:text-foreground transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies with pop animation */}
                  <motion.div
                    className="flex flex-wrap gap-2 mt-8 ml-14"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {experiences[activeTab].technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 0.5 + index * 0.05,
                          type: "spring",
                          stiffness: 300,
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(100,200,180,0.2)",
                        }}
                        className="px-3 py-1.5 text-xs font-mono text-primary bg-primary/10 rounded-full border border-primary/20 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
