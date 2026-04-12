"use client";

import { motion } from "framer-motion";

interface MorphingBlobProps {
  className?: string;
  color?: string;
}

export function MorphingBlob({ className = "", color = "primary" }: MorphingBlobProps) {
  const blobVariants = {
    animate: {
      borderRadius: [
        "60% 40% 30% 70% / 60% 30% 70% 40%",
        "30% 60% 70% 40% / 50% 60% 30% 60%",
        "60% 40% 30% 70% / 60% 30% 70% 40%",
      ],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
    },
  };

  return (
    <motion.div
      className={`absolute bg-${color}/10 blur-3xl ${className}`}
      variants={blobVariants}
      animate="animate"
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
