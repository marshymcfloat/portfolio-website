"use client";

import { motion } from "framer-motion";

export default function BGCircle({
  size,
  initialX,
  initialY,
  animateX,
  animateY,
  duration,
  className,
}: {
  size: number;
  duration: number;
  initialX: string;
  initialY: string;
  animateX: string;
  animateY: string;
  className: string;
}) {
  return (
    <motion.div
      initial={{ x: initialX, y: initialY }}
      animate={{ x: animateX, y: animateY }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      style={{
        width: size,
        height: size,
        position: "absolute",
        filter: "blur(80px)",
        zIndex: -1,
        willChange: "transform",
      }}
      className={className}
    />
  );
}
