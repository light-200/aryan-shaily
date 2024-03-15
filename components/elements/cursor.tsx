"use client";
import {
  motion,
  animate,
  useAnimate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";

export function Cursor({
  targetBtn,
}: {
  targetBtn: RefObject<HTMLAnchorElement>;
}) {
  const scope = useRef(null);
  const [isHover, setIsHover] = useState(false);

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
  const smoothOptions = { damping: 20, stiffness: 250, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { pageX, pageY } = e;

    if (isHover) {
      const { left, top, height, width } =
        targetBtn.current!!.getBoundingClientRect();

      //center position of the stickyElement
      const center = { x: left + width / 2, y: top + scrollY + height / 2 };
      const distance = { x: pageX - center.x, y: pageY - center.y };

      scale.x.set(2);
      scale.y.set(2);

      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else {
      //move custom cursor to center of stickyElement
      mouse.x.set(pageX - cursorSize / 2);
      mouse.y.set(pageY - cursorSize / 2);
    }
  };

  const manageMouseOver = (e: MouseEvent) => {
    setIsHover(true);
  };

  const manageMouseLeave = (e: MouseEvent) => {
    setIsHover(false);
    console.log("mouse left!!", isHover);

    animate(
      scope.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1, type: "spring" }
    );
  };

  const manageMouseDown = (e: MouseEvent) => {
    animate(
      scope.current,
      { scaleX: 2, scaleY: 2 },
      { duration: 0.05, ease: "easeIn" }
    );
    scale.x.set(2);
    scale.y.set(2);
  };

  const manageMouseUp = (e: MouseEvent) => {
    animate(
      scope.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.2, ease: "easeOut" }
    );
    scale.x.set(1);
    scale.y.set(1);
  };

  useEffect(() => {
    console.log(targetBtn.current);
    targetBtn?.current?.addEventListener("mouseenter", manageMouseOver);
    targetBtn?.current?.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousedown", manageMouseDown);
    window.addEventListener("mouseup", manageMouseUp);
    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("dragend", manageMouseUp);
    return () => {
      targetBtn?.current?.removeEventListener("mouseenter", manageMouseOver);
      targetBtn?.current?.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousedown", manageMouseDown);
      window.removeEventListener("mouseup", manageMouseUp);
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("dragend", manageMouseUp);
    };
  }, [isHover]);

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
      transition={{
        type: "spring",
        duration: 0.1,
        damping: 20,
        stiffness: 300,
        mass: 0.5,
      }}
      className={`mix-blend-difference bg-documentBg pointer-events-none rounded-full absolute z-50`}
      id="cursor"
      ref={scope}
    ></motion.div>
  );
}
