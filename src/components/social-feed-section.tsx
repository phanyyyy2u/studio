import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { TiktokIcon } from "./icons";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const SocialFeed = ({ platform, icon, handle, images }: { platform: string, icon: React.ReactNode, handle: string, images: {src: string, hint: string}[] }) => {
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
      <Button variant="link" className="mt-4 text-primary">
        Follow @{handle}
      </Button>
    </div>
  );
};

export default function SocialFeedSection() {
  const instagramImages = [
    { src: "https://placehold.co/200x200", hint: "wedding couple" },
    { src: "https://placehold.co/200x200", hint: "dance floor" },
    { src: "https://placehold.co/200x200", hint: "event fireworks" },
    { src: "https://placehold.co/200x200", hint: "candid guest" },
  ];
  const facebookImages = [
    { src: "https://placehold.co/200x200", hint: "venue drone" },
    { src: "https://placehold.co/200x200", hint: "event catering" },
    { src: "https://placehold.co/200x200", hint: "wedding cake" },
    { src: "https://placehold.co/200x200", hint: "happy guests" },
  ];
  const tiktokImages = [
    { src: "https://placehold.co/200x200", hint: "event highlights" },
    { src: "https://placehold.co/200x200", hint: "decor timelapse" },
    { src: "https://placehold.co/200x200", hint: "guest reactions" },
    { src: "https://placehold.co/200x200", hint: "party transition" },
  ];
  return (
    <section id="social" className="bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold">Follow Our Story</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            See the latest events and get inspired by our vibrant community on social media.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <SocialFeed
            platform="Instagram"
            icon={<Instagram className="h-7 w-7 text-primary" />}
            handle="QuintaSaucedo"
            images={instagramImages}
          />
          <SocialFeed
            platform="Facebook"
            icon={<Facebook className="h-7 w-7 text-primary" />}
            handle="QuintaSaucedoEvents"
            images={facebookImages}
          />
          <SocialFeed
            platform="TikTok"
            icon={<TiktokIcon className="h-7 w-7 text-primary" />}
            handle="QS_Events"
            images={tiktokImages}
          />
        </div>
      </div>
    </section>
  );
}
