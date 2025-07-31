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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.393964073839!2d-100.5371236849876!3d28.7012349823897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdc2e2e2e2e2e%3A0x1234567890abcdef!2sFrancisco%20Villa%20268%2C%20Col%20Venustiano%20Carranza%2C%20Venustiano%20Carranza%20Sur%2C%2026094%20Piedras%20Negras%2C%20Coahuila!5e0!3m2!1ses-419!2smx!4v1690000000000!5m2!1ses-419!2smx"
          width="100%"
          height="400"
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
