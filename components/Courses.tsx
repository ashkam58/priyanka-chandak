// src/components/sections/courses.tsx

"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonProps } from "@/components/ui/button";
import { Box, Shapes, Triangle, PenTool, CheckCircle, LucideIcon, User } from "lucide-react";
import Image from "next/image"; // Assuming Next.js for optimized images

// 1. --- TYPE DEFINITIONS ---
// Define the shape of our data for type safety and autocompletion.

interface Track {
  icon: LucideIcon; // Icon component for the track
  title: string; // Title of the track
  desc: string; // Description of the track
}

interface Instructor {
  name: string;
  title: string;
  avatarUrl: string; // URL to the instructor's image
}

interface Course {
  title: string; // Title of the course
  description: string; // Description of the course
  level: "Beginner" | "Intermediate" | "Advanced"; // Difficulty level
  duration: string; // Duration of the course
  instructor: {
    name: string; // Name of the instructor
    title: string; // Title or designation of the instructor
    avatarUrl: string; // URL to the instructor's avatar image
  };
  keySkills: string[]; // List of key skills taught in the course
  tracks: Track[]; // List of tracks/modules in the course
  buttonText: string; // Text for the enrollment button
  buttonVariant?: ButtonProps["variant"]; // Variant for the button styling
}


// 2. --- COMPREHENSIVE DATA SOURCE ---
// Centralized data array. Adding a new course is as simple as adding a new object here.

const coursesData: Course[] = [
  {
    title: "Print/Normal Handwriting Classes",
    description: "Improve legibility, speed, and confidence in your handwriting with our structured sessions.",
    level: "Beginner",
    duration: "15 Sessions",
    instructor: {
      name: "Priyanka Chandak",
      title: "Handwriting Improvement Teacher",
      avatarUrl: "/avatars/priyanka-chandak.jpg",
    },
    keySkills: ["Legibility", "Speed", "Confidence"],
    tracks: [
      { icon: PenTool, title: "Basic Strokes", desc: "Learn the foundational strokes for clear handwriting." },
      { icon: PenTool, title: "Letter Formation", desc: "Master the art of forming letters with precision." },
      { icon: PenTool, title: "Word Spacing", desc: "Achieve consistent spacing for better readability." },
    ],
    buttonText: "Enroll in Handwriting Classes",
    buttonVariant: "default",
  },
  {
    title: "Cursive Handwriting Classes (1:1 Session)",
    description: "Master cursive handwriting with personalized one-on-one sessions.",
    level: "Intermediate",
    duration: "15 Sessions",
    instructor: {
      name: "Priyanka Chandak",
      title: "Handwriting Improvement Teacher",
      avatarUrl: "/avatars/priyanka-chandak.jpg",
    },
    keySkills: ["Cursive Writing", "Fluency", "Style"],
    tracks: [
      { icon: PenTool, title: "Cursive Basics", desc: "Understand the flow and connections of cursive writing." },
      { icon: PenTool, title: "Advanced Cursive", desc: "Refine your cursive style for elegance and speed." },
    ],
    buttonText: "Join Cursive Classes",
    buttonVariant: "outline",
  },
  {
    title: "Rubik's Cube Mastery Classes",
    description: "Learn efficient techniques to solve the Rubik's Cube and enhance problem-solving skills.",
    level: "Beginner",
    duration: "7 Weeks",
    instructor: {
      name: "Priyanka Chandak",
      title: "Rubik's Cube Coach",
      avatarUrl: "/avatars/priyanka-chandak.jpg",
    },
    keySkills: ["Problem-Solving", "Focus", "Memory"],
    tracks: [
      { icon: Box, title: "Beginner Methods", desc: "Learn the basic steps to solve the cube." },
      { icon: Box, title: "Advanced Techniques", desc: "Master algorithms for faster solving." },
    ],
    buttonText: "Start Cubing Journey",
    buttonVariant: "default",
  },
  {
    title: "Megaminx Cube Classes",
    description: "Dive into the world of Megaminx and solve this fascinating puzzle.",
    level: "Intermediate",
    duration: "6 Sessions",
    instructor: {
      name: "Priyanka Chandak",
      title: "Rubik's Cube Coach",
      avatarUrl: "/avatars/priyanka-chandak.jpg",
    },
    keySkills: ["Advanced Cubing", "Spatial Reasoning"],
    tracks: [
      { icon: Box, title: "Megaminx Basics", desc: "Understand the unique structure of the Megaminx." },
      { icon: Box, title: "Advanced Megaminx", desc: "Learn efficient solving techniques." },
    ],
    buttonText: "Master the Megaminx",
    buttonVariant: "outline",
  },
  {
    title: "Pyramix Cube Classes",
    description: "Learn to solve the Pyramix Cube with ease and confidence.",
    level: "Beginner",
    duration: "4 Sessions",
    instructor: {
      name: "Priyanka Chandak",
      title: "Rubik's Cube Coach",
      avatarUrl: "/avatars/priyanka-chandak.jpg",
    },
    keySkills: ["Cubing Basics", "Problem-Solving"],
    tracks: [
      { icon: Box, title: "Pyramix Basics", desc: "Get started with the fundamentals of Pyramix solving." },
    ],
    buttonText: "Solve the Pyramix",
    buttonVariant: "default",
  },
  {
    title: "Basic 4 Cubes Combo",
    description: "Master the basics of 4 different cubes in one comprehensive course.",
    level: "Beginner",
    duration: "15 Sessions",
    instructor: {
      name: "Priyanka Chandak",
      title: "Rubik's Cube Coach",
      avatarUrl: "/avatars/priyanka-chandak.jpg",
    },
    keySkills: ["Cubing Fundamentals", "Versatility"],
    tracks: [
      { icon: Box, title: "4 Cubes Basics", desc: "Learn the fundamentals of solving 4 different cubes." },
    ],
    buttonText: "Enroll in Combo Course",
    buttonVariant: "default",
  },
];


// 3. --- REUSABLE SUB-COMPONENT ---
// A highly reusable card component that takes a course object and renders it.

interface CourseCardProps {
  course: Course;
  animationDelay?: number;
}

/**
 * A detailed card component for displaying a single course.
 * It's data-driven, animated, and presents comprehensive information
 * in a clear, visually appealing layout.
 */
const CourseCard = ({ course, animationDelay = 0 }: CourseCardProps) => {
  const { title, description, level, duration, instructor, keySkills, tracks, buttonText, buttonVariant } = course;

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border-2 hover:border-brand-500/80 transition-colors duration-300">
        <CardHeader>
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge>{level}</Badge>
            <Badge>{duration}</Badge>
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className="flex items-center gap-3 pt-4">
            <Image
              src={instructor.avatarUrl}
              alt={`Instructor: ${instructor.name}`}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">{instructor.name}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{instructor.title}</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <div className="mb-4">
            <h4 className="font-semibold mb-2">What you'll learn:</h4>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1">
              {keySkills.map(skill => (
                <li key={skill} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <h4 className="font-semibold mb-2 mt-6">Course Modules:</h4>
          <div className="space-y-3">
            {tracks.map((track) => (
              <div key={track.title} className="flex gap-3 items-start">
                <track.icon className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium">{track.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{track.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>

        <div className="px-6 pb-6 mt-auto pt-4">
          <Button className="w-full text-lg py-6" variant={buttonVariant}>
            {buttonText}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};


// 4. --- MAIN EXPORTED COMPONENT ---
// The primary section component that orchestrates the layout and renders the cards.

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <Badge>Our Curriculum</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tighter">Choose Your Craft</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-3xl mx-auto">
            We offer structured learning paths designed to build mastery from the ground up. Each course provides hands-on projects, expert feedback, and a supportive community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {coursesData.map((course, index) => (
            <CourseCard
              key={course.title}
              course={course}
              animationDelay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}