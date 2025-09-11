"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Story() {
  return (
    <div id="story" className="container">
      <div className="text-center mb-8">
        <Badge>Our Story</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">Practice, Perseverance, Performance</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass p-6 md:p-8"
      >
        <p className="text-lg text-slate-700 dark:text-slate-200">
          Priyanka has trained learners across the globe—shaping patient problem-solvers and confident creators.
          Her proudest moment? Watching her daughter feature on <b>India&apos;s Got Talent</b>, solving a Rubik&apos;s Cube while
          hooping—a celebration of focus and fun.
        </p>
      </motion.div>
    </div>
  );
}
