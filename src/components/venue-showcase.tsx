import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export default function VenueShowcase() {
  const images = [
    { src: "https://placehold.co/600x800", alt: "Garden area set up for a wedding ceremony", hint: "wedding ceremony" },
    { src: "https://placehold.co/600x400", alt: "Main salon decorated for a quinceañera", hint: "quinceanera reception" },
    { src: "https://placehold.co/600x400", alt: "Poolside view during an evening event", hint: "poolside evening" },
    { src: "https://placehold.co/600x800", alt: "Corporate meeting setup in the main hall", hint: "corporate meeting" },
    { src: "https://placehold.co/600x400", alt: "Detailed view of table setting", hint: "table setting" },
    { src: "https://placehold.co/600x400", alt: "Lush greenery surrounding the venue", hint: "lush garden" },
  ];

  return (
    <section id="venue" className="container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-headline font-bold">A Venue for Every Dream</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          From lush gardens to elegant salons, explore the versatile spaces that make Quinta Saucedo unique.
        </p>
      </div>
      <div className="columns-2 md:columns-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
             <Card className="overflow-hidden">
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
