"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.15, 1], [0.2, 0.65, 1]);

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[200] h-[3px] bg-white/10">
      <motion.div style={{ scaleX, opacity }} className="h-full origin-left bg-white" />
    </div>
  );
}
