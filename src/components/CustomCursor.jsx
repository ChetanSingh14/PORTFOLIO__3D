import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if mouse is over an interactive element
      const target = e.target;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("cursor-pointer"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#915EFF] rounded-full pointer-events-none z-50 shadow-[0_0_12px_#915EFF]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isClicking ? 0.7 : isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "#00cea8" : "#915EFF",
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
          mass: 0.1,
        }}
      />

      {/* Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border-2 border-[#915EFF]/50 rounded-full pointer-events-none z-50 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isClicking ? 0.8 : isHovered ? 1.5 : 1,
          borderColor: isHovered ? "rgba(0, 206, 168, 0.7)" : "rgba(145, 94, 255, 0.4)",
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.3,
        }}
      />
    </>
  );
};

export default CustomCursor;
