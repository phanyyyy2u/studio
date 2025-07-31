"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent } from "./ui/dialog";
import { useLanguage } from "@/lib/language-provider";
import { dictionary } from "@/lib/i18n";

export default function VenueShowcase() {
  const { language } = useLanguage();
  const t = dictionary[language];
  const images = [
    { src: "/images/1.jpg", alt: "Garden area set up for a wedding ceremony", hint: "wedding ceremony" },
    { src: "/images/2.jpg", alt: "Main salon decorated for a quinceañera", hint: "quinceanera reception" },
    { src: "/images/3.jpg", alt: "Poolside view during an evening event", hint: "poolside evening" },
    { src: "/images/4.jpg", alt: "Corporate meeting setup in the main hall", hint: "corporate meeting" },
    { src: "/images/1.jpg", alt: "Detailed view of table setting", hint: "table setting" },
    { src: "/images/2.jpg", alt: "Lush greenery surrounding the venue", hint: "lush garden" },
  ];

  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<{src: string, alt: string} | null>(null);

  const handleOpen = (img: {src: string, alt: string}) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  return (
    <section id="venue" className="container animate-fade-in-up" style={{animationDuration: '1.2s'}}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-headline font-bold">{t.venue.title}</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          {t.venue.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.src} className="mb-4 cursor-pointer" onClick={() => handleOpen(image)}>
             <Card className="overflow-hidden rounded-lg shadow-md">
                <CardContent className="p-0">
                    <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={image.hint}
                    />
                </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-2xl bg-gradient-to-br from-amber-50/95 to-rose-100/90 border-0 shadow-2xl flex flex-col items-center justify-center p-0 animate-fade-in rounded-2xl">
          {selectedImg && (
            <div className="w-full flex items-center justify-center p-4">
              <Image
                src={selectedImg.src}
                alt={selectedImg.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[70vh] object-contain rounded-xl shadow-lg transition-all duration-300"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
