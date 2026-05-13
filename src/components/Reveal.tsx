import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealPreset = "fade-up" | "fade-left" | "fade-right" | "scale" | "soft-pop";

const easing = [0.22, 1, 0.36, 1] as const;

const hiddenByPreset = (preset: RevealPreset, y: number) => {
  if (preset === "fade-left") return { opacity: 0, x: -32, filter: "blur(10px)" };
  if (preset === "fade-right") return { opacity: 0, x: 32, filter: "blur(10px)" };
  if (preset === "scale") return { opacity: 0, y: 18, scale: 0.96, filter: "blur(10px)" };
  if (preset === "soft-pop") return { opacity: 0, y, scale: 0.985, filter: "blur(12px)" };

  return { opacity: 0, y, filter: "blur(10px)" };
};

const visibleByPreset = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  filter: "blur(0px)",
};

export const baseVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.985, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easing },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  y = 28,
  once = true,
  preset = "fade-up",
  amount = 0.22,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li" | "h1" | "h2" | "h3" | "p";
  y?: number;
  once?: boolean;
  preset?: RevealPreset;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;

  return (
    <Comp
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: hiddenByPreset(preset, y),
        visible: {
          ...visibleByPreset,
          transition: { duration: 0.85, ease: easing, delay },
        },
      }}
    >
      {children}
    </Comp>
  );
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0.05,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 26,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, scale: 0.985, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.72, ease: easing },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCard({
  children,
  className,
  hoverY = -7,
}: {
  children: ReactNode;
  className?: string;
  hoverY?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: hoverY, scale: 1.012 }}
      whileTap={reduce ? undefined : { scale: 0.992 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}