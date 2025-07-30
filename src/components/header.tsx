"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Star, Languages } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const navLinks = [
    { href: "#venue", label: "Venue" },
    { href: "#packages", label: "Packages" },
    { href: "#availability", label: "Availability" },
    { href: "#contact", label: "Contact" },
  ];
  
  const NavLinksComponent = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Star className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Quinta Saucedo
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavLinksComponent />
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                  <Star className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">
                    Quinta Saucedo
                  </span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  <NavLinksComponent />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Languages className="h-5 w-5" />
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                English
              </DropdownMenuItem>
              <DropdownMenuItem>
                Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#contact">
            <Button>
              Book Now
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
