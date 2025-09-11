"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  X, 
  ExternalLink, 
  Award, 
  Clock, 
  User,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Tv,
  PenTool,
  Palette
} from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    type: "video",
    category: "rubiks",
    title: "India's Got Talent Feature",
    description: "Our student showcasing incredible cube-solving skills while hula hooping on national TV",
    emoji: "📺",
    icon: Tv,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    achievement: "National Television",
    duration: "3:45"
  },
  {
    id: 2,
    type: "image",
    category: "calligraphy",
    title: "Wedding Invitation Suite",
    description: "Custom calligraphy for a luxury wedding with gold ink on handmade paper",
    emoji: "💌",
    icon: PenTool,
    student: "Sarah M.",
    achievement: "Portfolio Project"
  },
  {
    id: 3,
    type: "image",
    category: "rubiks",
    title: "Competition Winner",
    description: "Regional speedcubing champion with personal best of 8.2 seconds",
    emoji: "🏆",
    icon: Trophy,
    student: "Alex Chen",
    achievement: "Regional Champion"
  },
  {
    id: 4,
    type: "image",
    category: "calligraphy",
    title: "Gothic Masterpiece",
    description: "Intricate blackletter composition featuring classic poetry",
    emoji: "🖋️",
    icon: PenTool,
    student: "Maria R.",
    achievement: "Advanced Project"
  },
  {
    id: 5,
    type: "video",
    category: "rubiks",
    title: "Speed Solving Tutorial",
    description: "Student demonstrating advanced F2L techniques in real-time",
    emoji: "🎥",
    icon: Play,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    student: "David L.",
    duration: "12:30"
  },
  {
    id: 6,
    type: "image",
    category: "calligraphy",
    title: "Brand Logo Design",
    description: "Custom lettering for boutique brand identity",
    emoji: "🎨",
    icon: Palette,
    student: "Emma K.",
    achievement: "Client Work"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "rubiks", label: "Rubik's Cube" },
  { id: "calligraphy", label: "Calligraphy" }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <Badge>Student Showcase</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-3 tracking-tighter px-4">
            Amazing Student Achievements
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto px-4">
            Witness the incredible progress and creative works of our learning community
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8 px-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              className="text-xs md:text-sm"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                    {/* Large Emoji Display */}
                    <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.emoji}
                    </div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      {item.type === "video" ? (
                        <Play className="h-12 w-12 text-white" />
                      ) : (
                        <item.icon className="h-12 w-12 text-white" />
                      )}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-black/50 text-white border-white/20">
                        {item.category === "rubiks" ? "Rubik's" : "Calligraphy"}
                      </Badge>
                    </div>

                    {/* Duration for videos */}
                    {item.type === "video" && item.duration && (
                      <div className="absolute bottom-3 right-3">
                        <Badge className="bg-black/70 text-white border-white/20">
                          <Clock className="h-3 w-3 mr-1" />
                          {item.duration}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-3 md:p-4">
                    <h3 className="font-semibold text-sm md:text-lg mb-1 line-clamp-2">{item.title}</h3>
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-3">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      {item.student && (
                        <div className="flex items-center gap-1 text-xs md:text-sm">
                          <User className="h-3 w-3 md:h-4 md:w-4" />
                          <span>{item.student}</span>
                        </div>
                      )}
                      {item.achievement && (
                        <div className="flex items-center gap-1 text-xs md:text-sm text-brand-600 dark:text-brand-400">
                          <Award className="h-3 w-3 md:h-4 md:w-4" />
                          <span className="line-clamp-1">{item.achievement}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-slate-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-3 md:p-4 border-b">
                  <h3 className="text-sm md:text-xl font-semibold line-clamp-2 pr-2">{selectedItem.title}</h3>
                  <Button variant="ghost" size="sm" onClick={closeModal} className="shrink-0">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-3 md:p-6 max-h-[calc(90vh-80px)] overflow-y-auto">
                  {selectedItem.type === "video" ? (
                    <div className="aspect-video">
                      <iframe
                        src={selectedItem.videoUrl}
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl md:text-9xl mb-2 md:mb-4">{selectedItem.emoji}</div>
                        <selectedItem.icon className="h-8 w-8 md:h-16 md:w-16 text-slate-600 dark:text-slate-400 mx-auto" />
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-3 md:mt-4">
                    <p className="text-xs md:text-base text-slate-600 dark:text-slate-300 mb-3 md:mb-4">
                      {selectedItem.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4">
                      {selectedItem.student && (
                        <div className="flex items-center gap-1 md:gap-2">
                          <User className="h-3 w-3 md:h-4 md:w-4" />
                          <span className="text-xs md:text-sm font-medium">Student: {selectedItem.student}</span>
                        </div>
                      )}
                      {selectedItem.achievement && (
                        <div className="flex items-center gap-1 md:gap-2 text-brand-600 dark:text-brand-400">
                          <Award className="h-3 w-3 md:h-4 md:w-4" />
                          <span className="text-xs md:text-sm font-medium">{selectedItem.achievement}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
