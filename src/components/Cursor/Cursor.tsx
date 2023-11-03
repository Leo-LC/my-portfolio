import { useEffect } from "react";
import s from "./Cursor.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";
const Cursor = () => {
  const cursorSize = 20;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothPosition = {
    x: useSpring(mouse.x, { stiffness: 300, damping: 20 }),
    y: useSpring(mouse.y, { stiffness: 300, damping: 20 }),
  };

  const manageMouseMove = (e: MouseEvent) => {
    mouse.x.set(e.clientX - cursorSize / 2);
    mouse.y.set(e.clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <motion.div
      className={s.cursor}
      id="cursor"
      style={{ left: smoothPosition.x, top: smoothPosition.y }}
    ></motion.div>
  );
};

export default Cursor;
