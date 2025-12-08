import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hoverText, setHoverText] = useState("");

  const smoothX = useSpring(cursorX, { stiffness: 250, damping: 30 });
  const smoothY = useSpring(cursorY, { stiffness: 250, damping: 30 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const hoverables = document.querySelectorAll("button, a, .hover-target");

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => setHoverText("Click"));
      el.addEventListener("mouseleave", () => setHoverText(""));
    });
  }, []);

  return (
    <>
      {/* Cursor Dot */}
      <motion.div
        style={{
          translateX: smoothX,
          translateY: smoothY,
        }}
        className="fixed pointer-events-none z-[9999] w-4 h-4 rounded-full bg-white mix-blend-difference"
      />

      {/* Cursor Label */}
      <motion.div
        style={{
          translateX: smoothX,
          translateY: smoothY,
          opacity: hoverText ? 1 : 0,
          scale: hoverText ? 1 : 0.5,
        }}
        className="fixed pointer-events-none z-[9999] px-3 py-1 text-sm rounded-full bg-primary text-primary-foreground"
      >
        {hoverText}
      </motion.div>
    </>
  );
}
