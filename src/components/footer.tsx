import Link from "next/link";
import { Instagram, Facebook, Star, Languages, MessageCircle } from "lucide-react";
import { TiktokIcon, WhatsappIcon } from "./icons";
import { Button } from "./ui/button";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-secondary">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <Star className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">
            &copy; {year} Quinta Saucedo. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://wa.me/528781118320" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsappIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.facebook.com/profile.php?id=100095272112778" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.instagram.com/quintasaucedo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
