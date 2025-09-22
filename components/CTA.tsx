"use client";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <div className="container text-center">
      <div className="glass p-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to start?</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-6">Book a trial session for Rubik&apos;s or Calligraphy.</p>
        <div className="flex justify-center">
          <a href="https://wa.me/917738080370" target="_blank" rel="noreferrer">
            <Button size="lg" className="gap-2">
              <MessageCircle className="h-5 w-5" /> WhatsApp Priyanka
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
