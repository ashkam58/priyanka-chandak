"use client";
import { motion } from "framer-motion";

export default function ParallaxSection({
  children,
  className = ""
}: { children: React.ReactNode; className?: string; }) {

  return (
    <section className={"section-pad " + className}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.1, 0.25, 1],
          staggerChildren: 0.1
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
