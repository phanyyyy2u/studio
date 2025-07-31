"use client";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "@/lib/language-provider";
import { dictionary } from "@/lib/i18n";

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const t = dictionary[language];
  return (
    <section id="testimonios" className="container py-16 animate-fade-in-up" style={{animationDuration: '1.2s'}}>
      <h2 className="text-3xl font-headline font-bold text-center mb-8 text-rose-700">{t.testimonials.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.testimonials.items.map((item, i) => (
          <Card key={i} className="bg-rose-50/80 border-0 shadow-lg rounded-xl">
            <CardContent className="p-6 flex flex-col items-center">
              <span className="text-lg font-semibold text-rose-800 mb-2">{item.name}</span>
              <p className="text-center text-rose-900 italic mb-2">“{item.text}”</p>
              <span className="text-xs text-rose-400">{item.date}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
