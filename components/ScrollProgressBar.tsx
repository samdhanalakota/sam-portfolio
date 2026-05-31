"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Top-of-page scroll progress indicator.
 *
 * @remarks
 * Client component — uses framer-motion scrollYProgress with spring smoothing.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left"
      style={{
        scaleX,
        transformOrigin: "left",
        // background: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
        // background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);",
        // background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);",
        background: "linear-gradient(to top, #dfe9f3 0%, white 100%);"
      }}
    />
  );
}
