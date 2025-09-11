'use client'
import React, { useState, useRef, useEffect } from 'react';

export default function CalligraphyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#FF6B6B');
  const [brushSize, setBrushSize] = useState(12);
  const [currentArtwork, setCurrentArtwork] = useState(0);
  const [showInspiration, setShowInspiration] = useState(true);
  const [selectedFont, setSelectedFont] = useState('');

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
    '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F',
    '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA'
  ];

  const inspirationalArtworks = [
    {
      title: "Flowing Dreams",
      style: "Modern Brush",
      description: "Graceful curves that dance across the canvas",
      pattern: "flowing",
    },
    {
      title: "Bold Statements",
      style: "Gothic Revival",
      description: "Strong, confident strokes with dramatic flair",
      pattern: "bold",
    },
    {
      title: "Zen Garden",
      style: "Japanese Shodo",
      description: "Minimalist beauty in every deliberate stroke",
      pattern: "zen",
    },
    {
      title: "Elegant Flourish",
      style: "Copperplate",
      description: "Delicate loops and sophisticated swashes",
      pattern: "elegant",
    },
    {
      title: "Playful Spirit",
      style: "Hand Lettering",
      description: "Fun, bouncy letters full of personality",
      pattern: "playful",
    },
  ];

  const tips = [
    "Start with basic strokes - the foundation of beautiful lettering",
    "Practice consistent spacing between letters and words",
    "Let your breath guide your strokes for natural rhythm",
    "Experiment with different pen angles for varied effects",
    "Don't rush - calligraphy is meditation in motion"
  ];

  const fonts = [
    { name: 'Modern Brush', style: 'Brush Script MT, cursive' },
    { name: 'Gothic Revival', style: 'Old English Text MT, serif' },
    { name: 'Japanese Shodo', style: 'Noto Serif JP, serif' },
    { name: 'Copperplate', style: 'Copperplate, serif' },
    { name: 'Hand Lettering', style: 'Comic Sans MS, cursive' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size properly
    const rect = canvas.getBoundingClientRect();
    canvas.width = 800;
    canvas.height = 500;
    
    if (showInspiration) {
      drawInspirationArtwork(ctx, canvas.width, canvas.height);
    }

    const interval = setInterval(() => {
      if (showInspiration) {
        setCurrentArtwork(prev => (prev + 1) % inspirationalArtworks.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentArtwork, showInspiration]);

  const drawInspirationArtwork = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
    const artwork = inspirationalArtworks[currentArtwork];
    const centerX = width / 2;
    const centerY = height / 2;

    // Set up context for calligraphy
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    switch (artwork.pattern) {
      case 'flowing':
        drawFlowingPattern(ctx, centerX, centerY);
        break;
      case 'bold':
        drawBoldPattern(ctx, centerX, centerY);
        break;
      case 'zen':
        drawZenPattern(ctx, centerX, centerY);
        break;
      case 'elegant':
        drawElegantPattern(ctx, centerX, centerY);
        break;
      case 'playful':
        drawPlayfulPattern(ctx, centerX, centerY);
        break;
    }
  };

  const drawFlowingPattern = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number) => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1'];
    
    colors.forEach((color, index) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 8 - index * 2;
      ctx.globalAlpha = 0.7;
      
      ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const x = centerX - 100 + t * 200 + Math.sin(t * Math.PI * 3) * 30;
        const y = centerY - 20 + Math.sin(t * Math.PI * 2) * 40 + index * 15;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    });
  };

  const drawBoldPattern = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number) => {
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 16;
    ctx.globalAlpha = 0.8;
    
    // Draw bold letter-like strokes
    const strokes = [
      [[centerX - 60, centerY - 40], [centerX - 60, centerY + 40]],
      [[centerX - 60, centerY - 40], [centerX - 20, centerY - 40]],
      [[centerX - 60, centerY], [centerX - 30, centerY]],
      [[centerX, centerY - 40], [centerX, centerY + 40]],
      [[centerX + 20, centerY - 40], [centerX + 60, centerY + 40]],
      [[centerX + 60, centerY - 40], [centerX + 20, centerY + 40]]
    ];
    
    strokes.forEach(stroke => {
      ctx.beginPath();
      ctx.moveTo(stroke[0][0], stroke[0][1]);
      ctx.lineTo(stroke[1][0], stroke[1][1]);
      ctx.stroke();
    });
  };

  const drawZenPattern = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number) => {
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 6;
    ctx.globalAlpha = 0.8;
    
    // Simple, clean brush strokes
    ctx.beginPath();
    ctx.moveTo(centerX - 80, centerY);
    ctx.quadraticCurveTo(centerX - 40, centerY - 30, centerX, centerY);
    ctx.quadraticCurveTo(centerX + 40, centerY + 30, centerX + 80, centerY);
    ctx.stroke();
    
    // Add a simple circle
    ctx.beginPath();
    ctx.arc(centerX, centerY - 50, 20, 0, Math.PI * 2);
    ctx.stroke();
  };

  const drawElegantPattern = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number) => {
    ctx.strokeStyle = '#8E44AD';
    ctx.lineWidth = 4;
    ctx.globalAlpha = 0.7;
    
    // Elegant flourishes
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      const startX = centerX - 60 + i * 60;
      const startY = centerY - 20;
      
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(startX + 20, startY - 30, startX + 40, startY);
      ctx.quadraticCurveTo(startX + 20, startY + 30, startX, startY + 60);
      ctx.stroke();
    }
  };

  const drawPlayfulPattern = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number) => {
    const playfulColors = ['#E74C3C', '#F39C12', '#9B59B6', '#3498DB'];
    
    playfulColors.forEach((color, index) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 8;
      ctx.globalAlpha = 0.8;
      
      const offsetX = (index - 1.5) * 40;
      const offsetY = Math.sin(index) * 20;
      
      ctx.beginPath();
      ctx.moveTo(centerX + offsetX - 15, centerY + offsetY - 30);
      ctx.lineTo(centerX + offsetX - 15, centerY + offsetY + 30);
      ctx.quadraticCurveTo(centerX + offsetX, centerY + offsetY + 40, centerX + offsetX + 15, centerY + offsetY + 30);
      ctx.lineTo(centerX + offsetX + 15, centerY + offsetY - 30);
      ctx.stroke();
    });
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setShowInspiration(false);
    setIsDrawing(true);
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    
    ctx.globalAlpha = 1;
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const showInspirationArt = () => {
    setShowInspiration(true);
    clearCanvas();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100 dark:from-purple-900 dark:via-slate-800 dark:to-cyan-900 p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent mb-4">
          Discover the Magic of Calligraphy
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Unleash your creativity with beautiful lettering. Every stroke is a step toward artistic mastery!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-6">
        {/* Main Canvas */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-6 border-4 border-gradient-to-r from-purple-400 to-cyan-400">
            {/* Canvas Controls */}
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Choose Your Color
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setCurrentColor(color)}
                        className={`w-10 h-10 rounded-full border-4 transition-all duration-200 hover:scale-110 ${
                          currentColor === color ? 'border-gray-800 scale-110' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Brush Size
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="24"
                    value={brushSize}
                    onChange={(e) => setBrushSize(Number(e.target.value))}
                    className="w-24"
                  />
                  <span className="text-sm text-gray-600 ml-2">{brushSize}px</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={showInspirationArt}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  ✨ Get Inspired
                </button>
                <button
                  onClick={clearCanvas}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  🎨 Clear Canvas
                </button>
              </div>
            </div>

            {/* Canvas */}
            <div className="relative">
              <canvas
                ref={canvasRef}
                width={800}
                height={500}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                className="w-full h-96 bg-gradient-to-br from-yellow-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl border-2 border-dashed border-gray-300 cursor-crosshair shadow-inner"
              />
              
              {showInspiration && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-white/90 dark:bg-gray-800/90 rounded-2xl backdrop-blur-sm cursor-pointer"
                  onClick={() => setShowInspiration(false)}
                >
                  <div className="text-center pointer-events-none">
                    <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                      {inspirationalArtworks[currentArtwork].title}
                    </div>
                    <div className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-2">
                      {inspirationalArtworks[currentArtwork].style}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 mb-4">
                      {inspirationalArtworks[currentArtwork].description}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Click anywhere to start creating your own masterpiece!
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Learning Tips */}
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
              💡 Calligraphy Tips
            </h3>
            <div className="space-y-3">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-400 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Font Style Selector */}
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              🖋️ Font Style Preview
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Choose a Font Style
              </label>
              <select
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
                className="w-full p-3 border rounded-lg text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700"
              >
                <option value="">Select a font</option>
                {fonts.map((font, index) => (
                  <option key={index} value={font.style}>
                    {font.name}
                  </option>
                ))}
              </select>
            </div>

            <div
              className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-700 text-center"
              style={{ fontFamily: selectedFont || 'inherit' }}
            >
              <p className="text-2xl md:text-4xl text-gray-800 dark:text-gray-200">
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {selectedFont ? `Font: ${selectedFont}` : 'Select a font to preview'}
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-3xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-2">🌟</div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
              Ready to Begin?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Start your calligraphy journey today and discover the artist within!
            </p>
            <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-lg">
              Join Calligraphy Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}