"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const HOVER_SELECTOR = 'button, a, [data-cursor="pointer"]';

/**
 * Decorative custom cursor with interactive hover and click states.
 *
 * @remarks
 * Client component — disabled on touch devices and does not
 * interfere with pointer events.
 */
export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const ringX = useSpring(x, {
    stiffness: 150,
    damping: 15,
  });
  const ringY = useSpring(y, {
    stiffness: 150,
    damping: 15,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");

    const updateDeviceMode = () => {
      setIsDesktop(!mediaQuery.matches);
    };

    updateDeviceMode();
    mediaQuery.addEventListener("change", updateDeviceMode);

    return () => {
      mediaQuery.removeEventListener("change", updateDeviceMode);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      document.body.classList.remove("cursor-none");
      return;
    }

    document.body.classList.add("cursor-none");

    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);

      const target = event.target as HTMLElement | null;
      setIsHoveringInteractive(Boolean(target?.closest(HOVER_SELECTOR)));
    };

    let clickTimeout: ReturnType<typeof setTimeout> | undefined;
    const handleMouseDown = () => {
      setIsClicking(true);

      if (clickTimeout) {
        clearTimeout(clickTimeout);
      }

      clickTimeout = setTimeout(() => {
        setIsClicking(false);
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      if (clickTimeout) {
        clearTimeout(clickTimeout);
      }
    };
  }, [isDesktop, x, y]);

  if (!isDesktop) {
    return null;
  }

  const ringScale = isClicking ? 0.8 : isHoveringInteractive ? 1.5 : 1;
  const dotScale = isClicking ? 0.8 : isHoveringInteractive ? 0.5 : 1;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-2 w-2 rounded-full bg-[var(--text-primary)]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: dotScale }}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 rounded-full border-[1.5px] border-[var(--text-primary)]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: ringScale,
          backgroundColor: isHoveringInteractive
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
