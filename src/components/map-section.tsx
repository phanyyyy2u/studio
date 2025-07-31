"use client";
import { useLanguage } from "@/lib/language-provider";
import { dictionary } from "@/lib/i18n";

export default function MapSection() {
  const { language } = useLanguage();
  const t = dictionary[language];
  return (
    <section id="ubicacion" className="container py-16 animate-fade-in-up" style={{animationDuration: '1.2s'}}>
      <h2 className="text-3xl font-headline font-bold text-center mb-8 text-emerald-700">{t.map.title}</h2>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-lg border-2 border-emerald-100">
        <iframe
          src="https://www.google.com/maps?q=Francisco+Villa+268,+Col+Venustiano+Carranza,+Venustiano+Carranza+Sur,+26094+Col.+Venustiano+Carranza,+Coahuila&z=17&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Quinta Saucedo"
        ></iframe>
        </div>
      </div>
    </section>
  );
}
