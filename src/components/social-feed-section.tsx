"use client";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { TiktokIcon, WhatsappIcon } from "./icons";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "@/lib/language-provider";
import { dictionary } from "@/lib/i18n";
import Link from "next/link";

const SocialFeed = ({ platform, icon, handle, images, followText }: { platform: string, icon: React.ReactNode, handle: string, images: {src: string, hint: string}[], followText: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="font-headline text-2xl">{platform}</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={image.src}
                alt={`${platform} feed image ${index + 1}`}
                width={200}
                height={200}
                className="aspect-square object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                data-ai-hint={image.hint}
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <Button variant="link" asChild className="mt-4 text-primary">
        <Link href="#">{followText} @{handle}</Link>
      </Button>
    </div>
  );
};

export default function SocialFeedSection() {
    const { language } = useLanguage();
    const t = dictionary[language];

  // Instagram real feed usando SnapWidget (puedes personalizar el tamaño y diseño en snapwidget.com)
  const instagramWidget = (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center gap-2 mb-4">
        <Instagram className="h-7 w-7 text-primary" />
        <h3 className="font-headline text-2xl">Instagram</h3>
      </div>
      <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-lg border-2 border-rose-100">
        {/* SnapWidget Instagram Feed */}
        <iframe
          src="https://snapwidget.com/embed/1104242"
          title="Quinta Saucedo - Event salon"
          className="w-full h-[340px] md:h-[510px] border-0"
          allowTransparency={true}
          frameBorder="0"
          scrolling="no"
          style={{ border: 'none', overflow: 'hidden' }}
        ></iframe>
      </div>
      <Button variant="link" asChild className="mt-4 text-primary">
        <a href="https://www.instagram.com/quintasaucedo/" target="_blank" rel="noopener noreferrer">Síguenos @quintasaucedo</a>
      </Button>
    </div>
  );
  const facebookImages = [
    { src: "/images/fb-1.jpg", hint: "venue drone" },
    { src: "/images/fb-2.jpg", hint: "event catering" },
    { src: "/images/fb-3.jpg", hint: "wedding cake" },
    { src: "/images/fb-4.jpg", hint: "happy guests" },
  ];
  const tiktokImages = [
    { src: "/images/tt-1.jpg", hint: "event highlights" },
    { src: "/images/tt-2.jpg", hint: "decor timelapse" },
    { src: "/images/tt-3.jpg", hint: "guest reactions" },
    { src: "/images/tt-4.jpg", hint: "party transition" },
  ];
  return (
    <section id="social" className="bg-secondary animate-fade-in-up" style={{animationDuration: '1.2s'}}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold">{t.social.title}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            {t.social.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {instagramWidget}
          <SocialFeed
            platform="Facebook"
            icon={<Facebook className="h-7 w-7 text-primary" />}
            handle="QuintaSaucedoEvents"
            images={facebookImages}
            followText={t.social.follow}
          />
          <SocialFeed
            platform="TikTok"
            icon={<TiktokIcon className="h-7 w-7 text-primary" />}
            handle="QS_Events"
            images={tiktokImages}
            followText={t.social.follow}
          />
        </div>
      </div>
    </section>
  );
}
