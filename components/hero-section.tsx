"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { TextScramble } from "./text-scramble";

const roles = [
  "Fullstack Developer",
  "Mobile Engineer — Flutter",
  "Backend Engineer — .NET · Java · Laravel",
  "Prompt Engineer",
  "UI/UX Enthusiast",
];

type Particle = {
  left: string;
  top: string;
  xOffset: number;
  duration: number;
  delay: number;
};

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Typewriter effect
  useEffect(() => {
    setParticles(
      [...Array(30)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        xOffset: Math.random() * 20 - 10,
        duration: 4 + Math.random() * 3,
        delay: Math.random() * 3,
      }))
    );
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity, scale }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,200,180,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,180,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Morphing blobs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]"
        animate={{
          borderRadius: [
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
          ],
          scale: [1, 0.9, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { code: "const dev = 'fullstack';", x: "10%", y: "20%", delay: 0 },
          { code: "npm run build", x: "80%", y: "15%", delay: 1 },
          { code: "git push origin main", x: "15%", y: "70%", delay: 2 },
          { code: "docker compose up", x: "75%", y: "75%", delay: 3 },
          { code: "SELECT * FROM skills;", x: "5%", y: "45%", delay: 4 },
          { code: "export default App;", x: "85%", y: "45%", delay: 5 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-primary/20"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [20, -20, -60],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            {item.code}
          </motion.div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{ left: p.left, top: p.top }} // 👈 từ state, không còn random lúc render
            animate={{
              y: [0, -30, 0],
              x: [0, p.xOffset, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 text-center max-w-5xl mx-auto">
        {/* Greeting with scramble effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <TextScramble
            text="Hello, I'm"
            className="text-muted-foreground tracking-widest uppercase text-sm"
          />
        </motion.div>

        {/* Name with letter animation */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight overflow-hidden"
        >
          {"Pham Minh An".split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary"
              initial={{ y: 100, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="h-12 mb-8"
        >
          <span className="text-xl md:text-2xl text-primary font-mono">
            {"<"}
            <span className="text-foreground">{displayText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              |
            </motion.span>
            {" />"}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I build software that solves real business problems
          from mobile UI to API integration & database optimization.
          Focused on scalable systems, clean architecture & great products.
        </motion.p>

        {/* Magnetic social buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/Minhan39", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/minhan39", label: "LinkedIn" },
            { icon: Mail, href: "mailto:annpm.0107@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <MagneticButton
              key={label}
              className="p-4 rounded-full border border-border bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 group"
            >
              <a href={href} aria-label={label}>
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </MagneticButton>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-12"
        >
          <MagneticButton className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden">
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-widest">
              Scroll
            </span>
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
