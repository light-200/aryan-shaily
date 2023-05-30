"use client";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.main
        className="grid grid-cols-3 lg:grid-rows-6 lg:grid-cols-5 min-h-screen p-4 lg:p-16 h-screen w-screen max-w-[1920px] xl:m-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <Logo />
        {children}
      </motion.main>
    </>
  );
}
