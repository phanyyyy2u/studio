"use client";

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="container py-16 animate-fade-in-up" style={{animationDuration: '1.2s'}}>
      <h2 className="text-3xl font-headline font-bold text-center mb-8 text-rose-700">Reseñas de Google</h2>
      {/* Widget de reseñas de Google Elfsight */}
      <script src="https://static.elfsight.com/platform/platform.js" async></script>
      <div className="elfsight-app-cba1eca2-3f7c-44c2-bec0-7bb34f3f40b0" data-elfsight-app-lazy></div>
    </section>
  );
}
