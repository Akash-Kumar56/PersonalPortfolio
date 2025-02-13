"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "../../lib/utils";

interface SlightFlipProps {
  word: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function SlightFlip({
  word,
  duration = 2.5,
  delayMultiple = 0.08,
  framerProps = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  className,
}: SlightFlipProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: delayMultiple } }, // Staggered animation
      }}
      className="flex justify-start bs-mx:justify-center space-x-1"
    >
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          transition={{ duration }}
          className={cn("origin-center drop-shadow-sm", className)}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

