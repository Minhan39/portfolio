"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface TextScrambleProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
}

const chars = "!<>-_\\/[]{}—=+*^?#________";

export function TextScramble({ text, className = "", scrambleOnHover = false }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(!scrambleOnHover);

  const scramble = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    if (isScrambling) {
      return scramble();
    }
  }, [isScrambling, scramble]);

  const handleHover = () => {
    if (scrambleOnHover) {
      setIsScrambling(true);
    }
  };

  return (
    <motion.span
      className={`font-mono ${className}`}
      onMouseEnter={handleHover}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayText}
    </motion.span>
  );
}
