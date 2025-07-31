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
            {/* Botones flotantes de WhatsApp, Instagram y Facebook */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
              <a href="https://wa.me/528781118320" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-3 transition-colors">
                {/* WhatsApp SVG igual */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.1 1.5 5.82L0 24l6.18-1.5A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.13-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.67.89.89-3.67-.22-.37A9.96 9.96 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/quintasaucedo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 rounded-full shadow-lg p-3 transition-colors">
                {/* Instagram SVG igual */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17" cy="7" r="1.5" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100095272112778" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg p-3 transition-colors">
                {/* Facebook SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-white">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
              </a>
            </div>
        </div>
    )
}
