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

  const instagramImages = [
    { src: "https://placehold.co/200x201", hint: "wedding couple" },
    { src: "https://placehold.co/200x202", hint: "dance floor" },
    { src: "https://placehold.co/200x203", hint: "event fireworks" },
    { src: "https://placehold.co/200x204", hint: "candid guest" },
  ];
  const facebookImages = [
    { src: "https://placehold.co/200x205", hint: "venue drone" },
    { src: "https://placehold.co/200x206", hint: "event catering" },
    { src: "https://placehold.co/200x207", hint: "wedding cake" },
    { src: "https://placehold.co/200x208", hint: "happy guests" },
  ];
  const tiktokImages = [
    { src: "https://placehold.co/200x209", hint: "event highlights" },
    { src: "https://placehold.co/200x210", hint: "decor timelapse" },
    { src: "https://placehold.co/200x211", hint: "guest reactions" },
    { src: "https://placehold.co/200x212", hint: "party transition" },
  ];
  return (
    <section id="social" className="bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold">{t.social.title}</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            {t.social.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <SocialFeed
            platform="Instagram"
            icon={<Instagram className="h-7 w-7 text-primary" />}
            handle="QuintaSaucedo"
            images={instagramImages}
            followText={t.social.follow}
          />
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
