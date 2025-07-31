"use client";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Ana López",
    text: "¡El lugar es hermoso y el servicio fue excelente! Mi boda fue inolvidable.",
    date: "Julio 2025"
  },
  {
    name: "Carlos Méndez",
    text: "Muy atentos y flexibles. Todo salió perfecto para nuestro evento corporativo.",
    date: "Junio 2025"
  },
  {
    name: "María García",
    text: "El jardín y la decoración superaron nuestras expectativas. ¡Repetiría sin dudarlo!",
    date: "Mayo 2025"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="container py-16">
      <h2 className="text-3xl font-headline font-bold text-center mb-8 text-rose-700">Testimonios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Card key={i} className="bg-rose-50/80 border-0 shadow-lg rounded-xl">
            <CardContent className="p-6 flex flex-col items-center">
              <span className="text-lg font-semibold text-rose-800 mb-2">{t.name}</span>
              <p className="text-center text-rose-900 italic mb-2">“{t.text}”</p>
              <span className="text-xs text-rose-400">{t.date}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
