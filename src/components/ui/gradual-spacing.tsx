"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "../../lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 3.5,
  delayMultiple = 0.2,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={{ visible: { transition: { staggerChildren: delayMultiple } } }}
      className="flex justify-start space-x-1"
    >
      {text.split("").map((char, i) => (
        <motion.h1
          key={i}
          variants={framerProps}
          transition={{ duration }}
          className={cn("drop-shadow-sm", className)}
        >
          {char === " " ? <span>&nbsp;</span> : char}
        </motion.h1>
      ))}
    </motion.div>
  );
}

