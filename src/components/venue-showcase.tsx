"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "@/lib/language-provider";
import { dictionary } from "@/lib/i18n";

export default function VenueShowcase() {
  const { language } = useLanguage();
  const t = dictionary[language];

  const images = [
    { src: "/images/venue-1.jpg", alt: "Garden area set up for a wedding ceremony", hint: "wedding ceremony" },
    { src: "/images/venue-2.jpg", alt: "Main salon decorated for a quinceañera", hint: "quinceanera reception" },
    { src: "/images/venue-3.jpg", alt: "Poolside view during an evening event", hint: "poolside evening" },
    { src: "/images/venue-4.jpg", alt: "Corporate meeting setup in the main hall", hint: "corporate meeting" },
    { src: "/images/venue-5.jpg", alt: "Detailed view of table setting", hint: "table setting" },
    { src: "/images/venue-6.jpg", alt: "Lush greenery surrounding the venue", hint: "lush garden" },
  ];

  return (
    <section id="venue" className="container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-headline font-bold">{t.venue.title}</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          {t.venue.subtitle}
        </p>
      </div>
      <div className="columns-2 md:columns-3 gap-4">
        {images.map((image, index) => (
          <div key={image.src} className="mb-4 break-inside-avoid">
             <Card className="overflow-hidden rounded-lg shadow-md">
                <CardContent className="p-0">
                    <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={index % 3 === 0 ? 800 : 400}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={image.hint}
                    />
                </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
