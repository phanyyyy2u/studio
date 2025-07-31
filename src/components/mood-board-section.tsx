"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, ImagePlus } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-provider";
import { dictionary } from "@/lib/i18n";

const moodImages = [
  { src: "https://placehold.co/400x400", alt: "Bohemian style table setting", hint: "bohemian table" },
  { src: "https://placehold.co/400x400", alt: "Minimalist floral centerpiece", hint: "minimalist floral" },
  { src: "https://placehold.co/400x400", alt: "Vintage lighting fixtures", hint: "vintage lighting" },
  { src: "https://placehold.co/400x400", alt: "Modern lounge area setup", hint: "modern lounge" },
  { src: "https://placehold.co/400x400", alt: "Rustic outdoor ceremony arch", hint: "rustic arch" },
  { src: "https://placehold.co/400x400", alt: "Elegant gold cutlery", hint: "gold cutlery" },
  { src: "https://placehold.co/400x400", alt: "Pastel color balloon decorations", hint: "pastel balloons" },
  { src: "https://placehold.co/400x400", alt: "Luxurious velvet seating", hint: "velvet seating" },
];

export default function MoodBoardSection() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const { language } = useLanguage();
  const t = dictionary[language];

  const toggleImage = (src: string) => {
    setSelectedImages((prev) =>
      prev.includes(src) ? prev.filter((img) => img !== src) : [...prev, src]
    );
  };

  return (
    <section id="gallery" className="container">
      <div className="text-center mb-12">
        <ImagePlus className="h-12 w-12 mx-auto text-primary" />
        <h2 className="text-4xl font-headline font-bold mt-4">{t.moodboard.title}</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          {t.moodboard.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <h3 className="font-headline text-2xl mb-4">{t.moodboard.galleryTitle}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {moodImages.map((image) => {
                const isSelected = selectedImages.includes(image.src);
                return (
                <div key={image.src} className="relative cursor-pointer group" onClick={() => toggleImage(image.src)}>
                    <Card className={cn("overflow-hidden transition-all", isSelected && "ring-2 ring-primary ring-offset-2 ring-offset-background")}>
                    <CardContent className="p-0">
                        <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
                        className="aspect-square object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.hint}
                        />
                    </CardContent>
                    </Card>
                    <div className={cn("absolute inset-0 bg-black/50 transition-opacity opacity-0 group-hover:opacity-100", isSelected && "opacity-100")}>
                        <div className="flex items-center justify-center h-full">
                            <Check className={cn("h-12 w-12 text-white transition-transform transform scale-50 opacity-0", isSelected && "scale-100 opacity-100")} />
                        </div>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        
        <div>
            <h3 className="font-headline text-2xl mb-4">{t.moodboard.boardTitle}</h3>
            <Card className="min-h-[400px] bg-secondary border-dashed">
                <CardContent className="p-4">
                    {selectedImages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground pt-16">
                            <p>{t.moodboard.boardEmptyState}</p>
                            <p className="text-sm">{t.moodboard.boardEmptyStateHint}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-2">
                            {selectedImages.map((src) => (
                                <div key={src} className="relative">
                                    <Image
                                        src={src}
                                        alt="Selected mood board image"
                                        width={150}
                                        height={150}
                                        className="aspect-square object-cover rounded-md"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
