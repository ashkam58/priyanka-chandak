"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What age groups do you teach?",
    answer: "We welcome learners of all ages! Our youngest students are typically 6 years old for Rubik's cube training, while our calligraphy courses are popular with teens and adults. We customize our teaching approach to match each learner's developmental stage and learning style."
  },
  {
    question: "Do I need any prior experience to start?",
    answer: "Not at all! Our courses are designed for complete beginners. We start with the fundamentals and gradually build up your skills. Whether you've never touched a Rubik's cube or held a calligraphy pen, we'll guide you through every step of your learning journey."
  },
  {
    question: "How are the online classes conducted?",
    answer: "Our live online classes use interactive platforms with high-quality video, screen sharing, and real-time feedback. Classes are small (max 8 students) to ensure personalized attention. All sessions are recorded so you can review them later."
  },
  {
    question: "What materials do I need to get started?",
    answer: "For Rubik's cube courses, you'll need quality speed cubes (we can recommend specific models). For calligraphy, you'll need brush pens, practice paper, and basic supplies. We provide a detailed materials list upon enrollment and can suggest where to purchase everything."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes! We offer a 30-day money-back guarantee. If you're not completely satisfied with your course experience within the first month, we'll provide a full refund. We're confident you'll love learning with us, but your satisfaction is our priority."
  },
  {
    question: "Do you offer certificates upon completion?",
    answer: "Absolutely! Upon successful completion of any course, you'll receive a digital certificate of achievement. Advanced students can also work toward instructor certification, which qualifies them to teach others under our guidance."
  },
  {
    question: "How long does it take to see progress?",
    answer: "Most students see noticeable improvement within 2-3 weeks of consistent practice. For Rubik's cubes, many can solve a 3x3 within a month. Calligraphy students typically develop basic letterforms within 3-4 weeks. Remember, everyone learns at their own pace!"
  },
  {
    question: "Do you offer one-on-one tutoring?",
    answer: "Yes! We offer private lessons for students who prefer individualized instruction or have specific goals. Private sessions can be scheduled flexibly and are perfect for competition preparation or addressing particular challenges."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-10 py-16 md:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container max-w-4xl px-4 md:px-6 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about our courses and learning experience
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 md:p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <div className="flex items-start md:items-center justify-between gap-3">
                    <h3 className="text-sm md:text-lg font-semibold text-left leading-tight">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 mt-1 md:mt-0">
                      {openIndex === index ? (
                        <Minus className="h-4 w-4 md:h-5 md:w-5 text-brand-500" />
                      ) : (
                        <Plus className="h-4 w-4 md:h-5 md:w-5 text-slate-500" />
                      )}
                    </div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 pb-4 md:pb-6">
                        <p className="text-xs md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 md:mt-12"
        >
          <Card className="p-4 md:p-6 bg-gradient-to-r from-brand-50 to-purple-50 dark:from-brand-900/20 dark:to-purple-900/20 text-center">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-3 md:mb-4 max-w-md mx-auto">
              We're here to help! Reach out to us and we'll get back to you within 24 hours.
            </p>
            <a 
              href="mailto:hello@priyankachandak.com" 
              className="inline-flex items-center text-sm md:text-base text-brand-600 dark:text-brand-400 font-medium hover:underline"
            >
              Contact Us →
            </a>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
