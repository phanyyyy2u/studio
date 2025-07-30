import AiPlannerSection from "./ai-planner-section";
import AvailabilitySection from "./availability-section";
import ContactSection from "./contact-section";
import Footer from "./footer";
import Header from "./header";
import HeroSection from "./hero-section";
import MoodBoardSection from "./mood-board-section";
import PackagesSection from "./packages-section";
import SocialFeedSection from "./social-feed-section";
import VenueShowcase from "./venue-showcase";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main>
                <HeroSection />
                <VenueShowcase />
                <PackagesSection />
                <AiPlannerSection />
                <AvailabilitySection />
                <MoodBoardSection />
                <SocialFeedSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    )
}
