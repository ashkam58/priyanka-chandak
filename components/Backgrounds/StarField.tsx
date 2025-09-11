"use client";
import { useEffect, useRef } from "react";

type Star = { x:number; y:number; z:number; size:number; speed:number; };

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const centerX = () => w / 2;
    const centerY = () => h / 2;

    const STAR_COUNT = Math.min(300, Math.floor((w*h)/12000));
    starsRef.current = new Array(STAR_COUNT).fill(0).map(() => ({
      x: (Math.random() - 0.5) * w,
      y: (Math.random() - 0.5) * h,
      z: Math.random() * 1 + 0.5,
      size: Math.random() * 1.2 + 0.3,
      speed: Math.random() * 0.3 + 0.05
    }));

    const draw = () => {
      ctx.clearRect(0,0,w,h);
      ctx.fillStyle = "rgba(10,20,40,0.9)";
      ctx.fillRect(0,0,w,h);

      for (const s of starsRef.current) {
        s.x += (Math.sin(s.y * 0.002) * s.speed);
        s.y += (Math.cos(s.x * 0.002) * s.speed);
        if (s.x < -w || s.x > w || s.y < -h || s.y > h) {
          s.x = (Math.random() - 0.5) * w;
          s.y = (Math.random() - 0.5) * h;
        }
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.8 * s.z;
        ctx.arc(centerX()+s.x, centerY()+s.y, s.size, 0, Math.PI*2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      raf.current = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 hidden dark:block" />;
}
