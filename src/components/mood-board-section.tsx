"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, ImagePlus } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

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

  const toggleImage = (src: string) => {
    setSelectedImages((prev) =>
      prev.includes(src) ? prev.filter((img) => img !== src) : [...prev, src]
    );
  };

  return (
    <section id="mood-board" className="container">
      <div className="text-center mb-12">
        <ImagePlus className="h-12 w-12 mx-auto text-primary" />
        <h2 className="text-4xl font-headline font-bold mt-4">Create Your Mood Board</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Select images from our gallery to build a visual palette for your event. Let your creativity flow!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <h3 className="font-headline text-2xl mb-4">Inspiration Gallery</h3>
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
            <h3 className="font-headline text-2xl mb-4">Your Mood Board</h3>
            <Card className="min-h-[400px] bg-secondary border-dashed">
                <CardContent className="p-4">
                    {selectedImages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground pt-16">
                            <p>Your selected images will appear here.</p>
                            <p className="text-sm">Click on the images to the left to add them.</p>
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
