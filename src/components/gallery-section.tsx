"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/1.jpg", alt: "Evento 1" },
  { src: "/images/2.jpg", alt: "Evento 2" },
  { src: "/images/3.jpg", alt: "Evento 3" },
  { src: "/images/4.jpg", alt: "Evento 4" },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <section id="galeria" className="container py-16">
      <h2 className="text-3xl font-headline font-bold text-center mb-8 text-rose-700">Galería de fotos</h2>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src={images[current].src}
            alt={images[current].alt}
            fill
            className="object-cover transition-all duration-500"
            sizes="(max-width: 768px) 100vw, 600px"
          />
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md">
            <ChevronLeft className="h-6 w-6 text-rose-700" />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md">
            <ChevronRight className="h-6 w-6 text-rose-700" />
          </button>
        </div>
        <div className="flex gap-2 mt-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 rounded-full ${i === current ? "bg-rose-700" : "bg-rose-200"}`}
              aria-label={`Ver imagen ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
