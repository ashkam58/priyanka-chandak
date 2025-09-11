"use client";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  { name: "Aarav (UAE)", quote: "From 3 minutes to under 40 seconds—Priyanka ma'am made it exciting!", topic: "3x3 speed" },
  { name: "Mia (USA)", quote: "Her calligraphy drills are meditative. Loved the portfolio projects!", topic: "Brush script" },
  { name: "Riya (India)", quote: "Pyraminx clicked for me after one session. Clear, friendly guidance.", topic: "Pyraminx" }
];

export default function Testimonials() {
  return (
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Student Voices</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <Card key={i}>
            <CardContent>
              <p className="italic">“{t.quote}”</p>
              <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">— {t.name} • {t.topic}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
