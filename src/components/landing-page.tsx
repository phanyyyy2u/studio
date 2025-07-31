import AvailabilitySection from "./availability-section";
import ContactSection from "./contact-section";
import Footer from "./footer";
import Header from "./header";
import HeroSection from "./hero-section";
import PackagesSection from "./packages-section";
import SocialFeedSection from "./social-feed-section";
import VenueShowcase from "./venue-showcase";
import TestimonialsSection from "./testimonials-section";
import MapSection from "./map-section";
import GallerySection from "./gallery-section";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main>
            <HeroSection />
            <VenueShowcase />
            <GallerySection />
            <TestimonialsSection />
            <PackagesSection />
            <AvailabilitySection />
            <MapSection />
            <SocialFeedSection />
            <ContactSection />
            </main>
            <Footer />
            {/* Botón flotante de WhatsApp tipo chat */}
            <a
              href="https://wa.me/528781118320?text=Hola%2C%20quiero%20informes%20de%20Quinta%20Saucedo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-4 flex items-center gap-2 animate-bounce"
              style={{ boxShadow: '0 4px 24px 0 rgba(37, 211, 102, 0.3)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.1 1.5 5.82L0 24l6.18-1.5A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.13-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.67.89.89-3.67-.22-.37A9.96 9.96 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
              </svg>
              <span className="hidden sm:inline text-white font-bold">¿Tienes dudas? ¡Chatea!</span>
            </a>
        </div>
    )
}
