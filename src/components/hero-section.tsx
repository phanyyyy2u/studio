import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center text-white py-0">
      <Image
        src="https://placehold.co/1920x1080"
        alt="Elegant event setup at Quinta Saucedo"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="elegant event"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="z-20 container px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline tracking-tight leading-tight mb-4 animate-fade-in-down">
          Crafting Unforgettable Moments
        </h1>
        <p className="max-w-3xl text-lg sm:text-xl text-primary-foreground/80 mb-8 animate-fade-in-up">
          Discover the perfect setting for your special day at Quinta Saucedo, where elegance meets nature.
        </p>
        <div className="flex space-x-4">
           <a href="#venue">
            <Button size="lg" variant="secondary">
              Explore Venue
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg">
              Book a Tour
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
