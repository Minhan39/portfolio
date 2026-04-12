"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, Sparkles } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { RevealText } from "./reveal-text";

type Particle = {
  left: string;
  top: string;
  xOffset: number;
  duration: number;
  delay: number;
};

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        xOffset: Math.random() * 20 - 10,
        duration: 3 + Math.random() * 3,
        delay: Math.random() * 3,
      }))
    );
  }, []);

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{ left: p.left, top: p.top }}
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

      <div className="max-w-2xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-primary font-mono text-sm mb-4 inline-flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            04. What&apos;s Next?
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            <RevealText delay={0.3}>Get In Touch</RevealText>
          </h2>

          <motion.p
            className="text-muted-foreground text-lg mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            I&apos;m currently looking for new opportunities. Whether you have a
            question, want to collaborate on a project, or just want to say hi,
            my inbox is always open. I&apos;ll do my best to get back to you!
          </motion.p>

          {/* Animated CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <MagneticButton
              className="relative group"
              onClick={() => window.location.href = "mailto:annpm.0107@gmail.com"}
            >
              <motion.div
                className="relative px-10 py-5 border-2 border-primary text-primary font-mono rounded-lg overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: "-100%", skewX: -15 }}
                  animate={{ x: isHovered ? "0%" : "-100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* Button content */}
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-300">
                  <motion.span
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={isHovered ? "text-background" : "text-primary"}
                  >
                    <Mail className="w-5 h-5" />
                  </motion.span>
                  <span className={isHovered ? "text-background" : "text-primary"}>
                    Say Hello
                  </span>
                  <motion.span
                    animate={{
                      x: isHovered ? 5 : 0,
                      rotate: isHovered ? 45 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className={isHovered ? "text-background" : "text-primary"}
                  >
                    <Send className="w-4 h-4" />
                  </motion.span>
                </span>
              </motion.div>
            </MagneticButton>
          </motion.div>

          {/* Email with copy animation */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
          >
            <motion.span
              className="text-muted-foreground text-sm font-mono cursor-pointer hover:text-primary transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              annpm.0107@gmail.com
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
