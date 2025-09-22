"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Check, 
  Star, 
  Crown, 
  Zap, 
  Users, 
  Video, 
  MessageCircle, 
  Trophy,
  Clock,
  BookOpen
} from "lucide-react";

const pricingPlans = [
  {
    name: "Explorer",
    price: 49,
    period: "month",
    description: "Perfect for beginners wanting to try our courses",
    popular: false,
    features: [
      { text: "Access to 1 course track", included: true },
      { text: "Monthly group sessions (4 sessions)", included: true },
      { text: "Basic learning materials", included: true },
      { text: "Community forum access", included: true },
      { text: "Email support", included: true },
      { text: "Course completion certificate", included: true },
      { text: "1-on-1 mentoring sessions", included: false },
      { text: "Priority instructor access", included: false },
      { text: "Advanced workshops", included: false }
    ],
    buttonText: "Start Exploring",
    buttonVariant: "outline" as const,
    icon: BookOpen
  },
  {
    name: "Achiever",
    price: 89,
    period: "month",
    description: "Most popular choice for dedicated learners",
    popular: true,
    features: [
      { text: "Access to all course tracks", included: true },
      { text: "Weekly group sessions (4 sessions)", included: true },
      { text: "Complete learning materials kit", included: true },
      { text: "Community forum + Discord access", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "Course completion certificate", included: true },
      { text: "Monthly 1-on-1 mentoring (30 min)", included: true },
      { text: "Bonus workshop recordings", included: true },
      { text: "Advanced techniques modules", included: false }
    ],
    buttonText: "Join Achievers",
    buttonVariant: "default" as const,
    icon: Trophy
  },
  {
    name: "Master",
    price: 149,
    period: "month",
    description: "For serious students aiming for expertise",
    popular: false,
    features: [
      { text: "All Achiever benefits", included: true },
      { text: "Unlimited access to all content", included: true },
      { text: "Weekly 1-on-1 mentoring (45 min)", included: true },
      { text: "Direct instructor messaging", included: true },
      { text: "Exclusive advanced workshops", included: true },
      { text: "Competition coaching", included: true },
      { text: "Teaching methodology training", included: true },
      { text: "Instructor certification pathway", included: true },
      { text: "Lifetime community access", included: true }
    ],
    buttonText: "Become a Master",
    buttonVariant: "outline" as const,
    icon: Crown
  }
];

const additionalOptions = [
  {
    title: "Private 1-on-1 Sessions",
    price: 75,
    period: "session",
    description: "Personalized instruction tailored to your specific goals",
    features: ["60-minute focused sessions", "Customized curriculum", "Flexible scheduling"],
    icon: Users
  },
  {
    title: "Competition Prep Intensive",
    price: 199,
    period: "package",
    description: "8-week intensive program for competition readiness",
    features: ["Advanced techniques", "Performance psychology", "Mock competitions"],
    icon: Zap
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container">
        <div className="text-center mb-12">
          <Badge>Pricing</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tighter">
            Choose Your Learning Journey
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            Flexible pricing options designed to fit your goals and budget. Start your transformation today.
          </p>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-brand-500 text-white px-3 py-1 text-xs md:text-sm">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full ${plan.popular ? 'border-brand-500 shadow-xl' : ''} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${plan.popular ? 'bg-brand-100 dark:bg-brand-900/30' : 'bg-slate-100 dark:bg-slate-800'}`}>
                      <plan.icon className={`h-6 w-6 ${plan.popular ? 'text-brand-600 dark:text-brand-400' : 'text-slate-600 dark:text-slate-400'}`} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-slate-600 dark:text-slate-400">/{plan.period}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button 
                    className="w-full mb-6" 
                    variant={plan.buttonVariant}
                    size="lg"
                    cta
                  >
                    {plan.buttonText}
                  </Button>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`mt-0.5 ${feature.included ? 'text-green-500' : 'text-slate-300 dark:text-slate-600'}`}>
                          <Check className="h-4 w-4" />
                        </div>
                        <span className={`text-sm ${feature.included ? 'text-slate-700 dark:text-slate-300' : 'text-slate-400 dark:text-slate-600'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Additional Options</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Supplement your learning with specialized offerings
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalOptions.map((option, index) => (
              <Card key={option.title} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-brand-100 dark:bg-brand-900/30">
                    <option.icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{option.title}</h4>
                    <div className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-2">
                      ${option.price}
                      <span className="text-sm font-normal text-slate-600 dark:text-slate-400">
                        /{option.period}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                      {option.description}
                    </p>
                    <ul className="space-y-1">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <Check className="h-3 w-3 text-green-500" />
                          <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 mb-8 text-center"
        >
          <Card className="p-6 md:p-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
            <div className="flex flex-col items-center gap-4">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30">
                <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">30-Day Money-Back Guarantee</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
                  Not satisfied with your learning experience? Get a full refund within your first month. 
                  We're confident you'll love what you learn with us.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
