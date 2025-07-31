"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { PlayCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";
import { dictionary } from "@/lib/i18n";
import VideoModal from "./video-modal";

export default function HeroSection() {
  const { language } = useLanguage();
  const t = dictionary[language];
  const [modalOpen, setModalOpen] = useState(false);

  // Video de Facebook (src del iframe)
  const videoId = "https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fwww.facebook.com%2F100095272112778%2Fvideos%2F23904706119182285%2F&show_text=false&width=560&t=0";

  return (
    <>
      <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-center text-white py-0 animate-fade-in-up" style={{animationDuration: '1.2s'}}>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/images/1.jpg"
            alt="Amigable y tranquilo lugar para eventos al aire libre"
            layout="fill"
            objectFit="cover"
            className="z-0"
            data-ai-hint="luxury venue exterior"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10" />
        </div>
        <div className="z-20 container px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline tracking-tight leading-tight mb-4 animate-fade-in-down text-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="#venue">
              <Button size="lg" variant="secondary" className="bg-opacity-80 backdrop-blur-sm">
                {t.hero.exploreButton}
              </Button>
            </a>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10" onClick={() => setModalOpen(true)}>
              <PlayCircle className="mr-2 h-6 w-6" />
              {t.hero.tourButton}
            </Button>
          </div>
        </div>
      </section>
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoId={videoId}
        videoType="facebook"
      />
    </>
  );
}
