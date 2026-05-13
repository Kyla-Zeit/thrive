import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

<<<<<<< HEAD
const baseVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
=======
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
>>>>>>> ec08a15 (commit)
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  y = 28,
  once = true,
<<<<<<< HEAD
=======
  preset = "fade-up",
  amount = 0.22,
>>>>>>> ec08a15 (commit)
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li" | "h1" | "h2" | "h3" | "p";
  y?: number;
  once?: boolean;
<<<<<<< HEAD
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
=======
  preset?: RevealPreset;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;

>>>>>>> ec08a15 (commit)
  return (
    <Comp
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
<<<<<<< HEAD
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay } },
=======
      viewport={{ once, amount }}
      variants={{
        hidden: hiddenByPreset(preset, y),
        visible: {
          ...visibleByPreset,
          transition: { duration: 0.85, ease: easing, delay },
        },
>>>>>>> ec08a15 (commit)
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
<<<<<<< HEAD
=======
  delayChildren = 0.05,
>>>>>>> ec08a15 (commit)
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
<<<<<<< HEAD
}) {
  const reduce = useReducedMotion();
=======
  delayChildren?: number;
}) {
  const reduce = useReducedMotion();

>>>>>>> ec08a15 (commit)
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
<<<<<<< HEAD
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
=======
      viewport={{ once: true, amount: 0.16 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren } },
>>>>>>> ec08a15 (commit)
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
<<<<<<< HEAD
  y = 24,
=======
  y = 26,
>>>>>>> ec08a15 (commit)
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
<<<<<<< HEAD
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
=======
        hidden: { opacity: 0, y, scale: 0.985, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.72, ease: easing },
        },
>>>>>>> ec08a15 (commit)
      }}
    >
      {children}
    </motion.div>
  );
}

<<<<<<< HEAD
export { baseVariants };
=======
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
>>>>>>> ec08a15 (commit)
