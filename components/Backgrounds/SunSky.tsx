"use client";
import { motion, useCycle } from "framer-motion";

export default function SunSky() {
  return (
    <div className="fixed inset-0 -z-10 block dark:hidden bg-gradient-to-b from-sky-100 via-amber-50 to-white">
      <motion.div
        className="absolute -z-10"
        initial={{ x: -100, y: -80, scale: 1 }}
        animate={{ x: 40, y: 20, scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <div className="w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffd27a,rgba(255,200,64,0.6),transparent_70%)] opacity-80" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-amber-100/60 to-transparent"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
}
