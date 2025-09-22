'use client'
import { useState, useEffect } from 'react';
import { Sparkles, Star, PenTool, Play, Award, Users, Heart } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
// If you have a custom Button component, import it here:
// import Button from './Button';

type StarType = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState<StarType[]>([]);

  useEffect(() => {
    // Generate random stars for background
    const starArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
    }));
    setStars(starArray);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-500">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`,
            }}
          >
            <div
              className="rounded-full bg-white/60"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 border-2 border-purple-400/30 rotate-45 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute top-40 right-20 w-6 h-6 border-2 border-blue-400/30 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-yellow-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-60 right-40 w-5 h-5 border-2 border-green-400/30 rotate-12 animate-spin" style={{ animationDuration: '12s' }} />
      </div>

      {/* Mouse-following gradient orb */}
      <div 
        className="fixed w-96 h-96 rounded-full bg-gradient-radial from-purple-500/20 via-blue-500/10 to-transparent blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between pt-8">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-yellow-400 transition-all duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-bold text-xl text-slate-900 dark:text-white tracking-wide">Priyanka Chandak</span>
          </div>
          
          <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-transform duration-300 group-hover:scale-110" />
          </button>
        </nav>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-12">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-400/30 text-purple-700 dark:text-purple-200 text-sm font-medium flex items-center gap-2">
                <Award className="w-4 h-4" />
                International Coach
              </div>
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm border border-pink-400/30 text-pink-700 dark:text-pink-200 text-sm font-medium flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Proud Mom
              </div>
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-700 dark:text-emerald-200 text-sm font-medium flex items-center gap-2">
                <PenTool className="w-4 h-4" />
                Creator
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-900 dark:text-white block">Master the</span>
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent block animate-gradient">
                  Art of Solving
                </span>
                <span className="text-slate-900 dark:text-white block text-4xl lg:text-5xl mt-2">& Beautiful Writing</span>
              </h1>
              
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              From <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Pyraminx to shapeshifters</span>, from elegant brush scripts to modern lettering—train with a teacher whose daughter mesmerized audiences on <span className="text-purple-600 dark:text-purple-400 font-semibold">India's Got Talent</span> solving cubes while hula hooping! ✨
            </p>

            <div className="flex items-center gap-4">
              <Button
                size="lg"
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 hover:scale-105"
                cta
                aria-label="Start Learning on WhatsApp"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Start Learning
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                variant="ghost"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-slate-700 dark:text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2 group"
                cta
                aria-label="Our Story on WhatsApp"
              >
                <Star className="w-5 h-5 text-yellow-400 transition-transform duration-300 group-hover:rotate-12" />
                Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-6">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Users className="w-5 h-5 text-emerald-500" />
                <span className="font-semibold text-slate-900 dark:text-white">1000+</span>
                <span className="text-sm">Students Worldwide</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-slate-600 dark:text-slate-300 text-sm">Perfect Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in-delayed">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-image.png"
                alt="Priyanka Chandak - Calligraphy and Cubing Expert"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </header>
  );
}