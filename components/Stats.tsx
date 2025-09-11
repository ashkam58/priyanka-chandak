"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Users, Award, Clock, Globe, Trophy, Star, BookOpen, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Students Trained",
    description: "Learners across 15+ countries"
  },
  {
    icon: Award,
    number: "50+",
    label: "Competition Winners",
    description: "Regional & national champions"
  },
  {
    icon: Clock,
    number: "10,000+",
    label: "Teaching Hours",
    description: "Dedicated instruction time"
  },
  {
    icon: Globe,
    number: "15+",
    label: "Countries Reached",
    description: "Global learning community"
  },
  {
    icon: Trophy,
    number: "98%",
    label: "Success Rate",
    description: "Students achieving their goals"
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Student Rating",
    description: "Average course satisfaction"
  }
];

export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-brand-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container">
        <div className="text-center mb-12">
          <Badge>Our Impact</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tighter">
            Transforming Lives Through Learning
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            Numbers that tell the story of our community's growth and achievements
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center p-6 h-full hover:scale-105 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-brand-500 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-brand-600 dark:text-brand-400 mb-1">
                  {stat.number}
                </div>
                <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  {stat.description}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-to-r from-brand-500/10 to-purple-500/10 border-brand-200 dark:border-brand-800">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <Heart className="h-16 w-16 text-brand-500" />
                  <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1">
                    <Star className="h-4 w-4 text-yellow-800" />
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Featured on India's Got Talent
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Our proudest moment: watching our student showcase incredible skills on national television, 
                  solving a Rubik's cube while hula hooping—a perfect blend of focus, skill, and creativity.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge>National TV</Badge>
                  <Badge>Skill Mastery</Badge>
                  <Badge>Student Success</Badge>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
