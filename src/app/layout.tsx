import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import { LanguageProvider } from "@/lib/language-provider";

export const metadata: Metadata = {
  title: "Quinta Saucedo",
  description: "El lugar perfecto para tus eventos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="El lugar perfecto para tus eventos en Morelos. Jardín, salón y atención personalizada." />
        <meta name="keywords" content="eventos, jardín, salón, bodas, fiestas, morelos, quinta saucedo" />
        <meta name="author" content="Quinta Saucedo" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased scroll-smooth transition-colors duration-500 bg-background">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
