"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { TiltCard } from "./tilt-card";
import { SpotlightCard } from "./spotlight-card";
import { RevealText } from "./reveal-text";

const featuredProjects = [
  {
    title: "Personal Finance",
    description:
      "A Flutter app for personal finance management — track income, expenses, and investments with Excel-based data import and Firebase real-time sync.",
    technologies: ["Flutter", "Firebase", "Google Service"],
    github: "https://github.com/Minhan39/Personal-Finance",
    live: "#",
    image: "/project-1.png",
  },
  {
    title: "Oauth Basic",
    description:
      "A minimal three-app OAuth 2.0 demo inspired by the book OAuth 2 in Action and the companion repo oauthinaction/oauth-in-action-code. It shows the Authorization Code flow end-to-end with simple in-memory stores.",
    technologies: ["Node.js"],
    github: "https://github.com/Minhan39/oauth_basic",
    live: "#",
    image: "/project-2.png",
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio built with Next.js & Framer Motion, showcasing my projects, skills, and experience as a Fullstack Developer.",
    technologies: ["Next.js"],
    github: "https://github.com/Minhan39/portfolio",
    live: "https://minhan.one",
    image: "/project-3.png",
  },
];

const otherProjects = [
  {
    title: "Social Network MHN - APP",
    description:
      "A cross-platform social media app built with Flutter — features real-time feed, post interactions, messaging, and user profile management with a smooth, native-like experience.",
    technologies: ["Flutter", "Firebase"],
    github: "https://github.com/Minhan39/SocialNetworkMHN",
    live: "#",
  },
  {
    title: "Social Network MHN - WEB API",
    description:
      "A RESTful API powering the social media platform — handles authentication, post management, user relationships, and real-time notifications with scalable and maintainable architecture.",
    technologies: ["Laravel", "MySQL", "JWT"],
    github: "https://github.com/Minhan39/apiSocialNetwork",
    live: "#",
  },
  {
    title: "Cinema Booking - APP",
    description:
      "A cross-platform movie ticket booking app built with React Native — browse movies, select showtimes, choose seats interactively, and complete bookings with a smooth and intuitive mobile experience.",
    technologies: ["React Native"],
    github: "https://github.com/Minhan39/AppMobileDatVeXemPhim_v2",
    live: "#",
  },
  {
    title: "Cinema Booking - WEB",
    description:
      "A RESTful API built with Laravel to power the movie ticket booking platform — manages movies, showtimes, seat availability, booking transactions, and user authentication with a clean and scalable architecture.",
    technologies: ["Laravel", "MySQL"],
    github: "https://github.com/Minhan39/WebDatVeXemPhim_v2",
    live: "#",
  },
];

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              <RevealText>Featured Projects</RevealText>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured Projects with 3D Tilt */}
          <div className="space-y-32 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? "md:text-right" : ""
                  }`}
              >
                {/* Project Image with Tilt */}
                <div
                  className={`md:col-span-7 ${index % 2 === 1 ? "md:order-2 md:col-start-6" : ""
                    }`}
                >
                  <TiltCard className="group rounded-lg">
                    <a href={project.live} className="relative block">
                      <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden">
                        {/* Placeholder with animated border */}
                        <div className="w-full h-full relative">
                          {project.image ? (
                            <>
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent z-10"
                                initial={{ opacity: 0.6 }}
                                whileHover={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              />
                            </>
                          ) : (
                            <>
                              <div className="w-full h-full bg-gradient-to-br from-card to-secondary flex items-center justify-center relative">
                                <Folder className="w-20 h-20 text-primary/20 group-hover:text-primary/40 transition-colors duration-500" />
                                <motion.div
                                  className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50"
                                  initial={{ scale: 0 }}
                                  whileHover={{ scale: 1 }}
                                />
                                <motion.div
                                  className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50"
                                  initial={{ scale: 0 }}
                                  whileHover={{ scale: 1 }}
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </a>
                  </TiltCard>
                </div>

                {/* Project Info */}
                <div
                  className={`md:col-span-6 ${index % 2 === 1
                    ? "md:order-1 md:col-start-1"
                    : "md:col-start-6"
                    } md:row-start-1`}
                >
                  <motion.p
                    className="text-primary font-mono text-sm mb-2"
                    initial={{ opacity: 0, x: index % 2 === 1 ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    Featured Project
                  </motion.p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    <a
                      href={project.live}
                      className="hover:text-primary transition-colors relative group"
                    >
                      {project.title}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </h3>
                  <motion.div
                    className="relative z-10 bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-border/50 mb-4"
                    whileHover={{
                      boxShadow: "0 0 30px rgba(100,200,180,0.1)",
                      borderColor: "rgba(100,200,180,0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>
                  <ul
                    className={`flex flex-wrap gap-3 mb-4 text-sm font-mono text-muted-foreground ${index % 2 === 1 ? "md:justify-end" : ""
                      }`}
                  >
                    {project.technologies.map((tech, i) => (
                      <motion.li
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.2 + i * 0.05 }}
                        className="hover:text-primary transition-colors cursor-default"
                      >
                        {tech}
                      </motion.li>
                    ))}
                  </ul>
                  <div
                    className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""
                      }`}
                  >
                    <motion.a
                      href={project.github}
                      aria-label="GitHub"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      aria-label="Live Demo"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects with Spotlight effect */}
          <div>
            <h3 className="text-xl font-semibold text-foreground text-center mb-8">
              <RevealText delay={0.2}>Other Noteworthy Projects</RevealText>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <SpotlightCard
                  key={project.title}
                  className="bg-card border border-border rounded-lg group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="p-6 h-full flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Folder className="w-10 h-10 text-primary" />
                      </motion.div>
                      <div className="flex gap-3">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            aria-label="GitHub"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                        {project.live && (
                          <motion.a
                            href={project.live}
                            aria-label="Live Demo"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="hover:text-primary transition-colors"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
