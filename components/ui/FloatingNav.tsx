"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    nameDe?: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const { locale } = useLanguage();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-5 z-[5000] mx-auto flex max-w-[calc(100vw-7rem)] items-center justify-center gap-1 overflow-x-auto border-2 border-stone-900 bg-[#f8f1e5] px-2 py-2 shadow-[5px_5px_0_#c51f2d] dark:border-stone-100 dark:bg-[#24211d] sm:max-w-fit",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex shrink-0 items-center px-3 py-2 font-mono text-xs font-bold uppercase text-stone-700 transition hover:bg-[#c51f2d] hover:text-white dark:text-stone-200"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="!cursor-pointer">{locale === 'de' ? navItem.nameDe ?? navItem.name : navItem.name}</span>
          </Link>
        ))}
        
      </motion.div>
    </AnimatePresence>
  );
};
