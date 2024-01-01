"use client";
import { motion, useAnimate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function Cursor() {
  const [scope, animate] = useAnimate();

  const cursorSize = 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  //Smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { pageX, pageY } = e;

    //move custom cursor to center of stickyElement
    mouse.x.set(pageX - cursorSize / 2);
    mouse.y.set(pageY - cursorSize / 2);
  };

  const manageMouseDown = () => {
    animate(
      scope?.current,
      { scaleX: 2, scaleY: 2 },
      { duration: 0.1, type: "spring" }
    );
  };

  const manageMouseUp = () => {
    animate(
      scope?.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1, type: "spring" }
    );
  };

  useEffect(() => {
    window.addEventListener("mousedown", () => manageMouseDown());
    window.addEventListener("mouseup", () => manageMouseUp());
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousedown", () => manageMouseDown());
      window.removeEventListener("mouseup", () => manageMouseUp());
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
      className={`mix-blend-difference bg-documentBg pointer-events-none rounded-full absolute z-50`}
      id="cursor"
      ref={scope}
    ></motion.div>
  );
}
