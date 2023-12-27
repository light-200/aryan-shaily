"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function ShuffleBtn({
  children,
  href,
  className,
  newTab,
}: {
  children: React.ReactNode;
  href: string;
  className: string;
  newTab: boolean;
}) {
  const [effect, setEffect] = useState<any>(null); // Adjust the type accordingly
  const element = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Dynamic import on the client side
    import("shuffle-text")
      .then((module) => {
        const ShuffleText = module.default;
        if (element.current) {
          setEffect(new ShuffleText(element.current));
          if (effect) {
            effect.duration = 600;
            effect.emptyCharacter = "#";
            effect.sourceRandomCharacter = element.current.innerText || "aryan";
          }
        }
      })
      .catch((error) => {
        console.error("Error importing ShuffleText:", error);
      });

    return () => {
      // Cleanup effect if necessary
      if (effect) {
        effect.dispose();
      }
    };
  }, []);

  return (
    <motion.a
      ref={element}
      href={href}
      onMouseEnter={() => !effect?.isRunning && effect?.start()}
      target={newTab ? "_blank" : "_self"}
      className={
        "btn-primary lowercase shrink-0 w-[8ch] whitespace-nowrap text-center " +
        className
      }
    >
      {children}
    </motion.a>
  );
}
