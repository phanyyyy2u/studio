"use client";

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="container py-16 animate-fade-in-up" style={{animationDuration: '1.2s'}}>
      <h2 className="text-3xl font-headline font-bold text-center mb-8 text-rose-700">Reseñas de Google</h2>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1690000000000!6m8!1m7!1sCAoSLEFGMVFpcE1wZ2Z6d2Z6d2Z6d2Z6d2Z6d2Z6d2Z6d2Z6d2Z6d2Z6d2Z6!2m2!1d28.7012349!2d-100.5371236!3f0!4f0!5f0.7820865974627469"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Reseñas de Google Quinta Saucedo"
        ></iframe>
      </div>
    </section>
  );
}
