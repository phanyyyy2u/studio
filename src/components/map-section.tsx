"use client";

export default function MapSection() {
  return (
    <section id="ubicacion" className="container py-16">
      <h2 className="text-3xl font-headline font-bold text-center mb-8 text-emerald-700">¿Dónde estamos?</h2>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl rounded-xl overflow-hidden shadow-lg border-2 border-emerald-100">
          <iframe
            src="https://www.google.com/maps?q=18.8999999,-99.1833333&z=15&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación del evento"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
