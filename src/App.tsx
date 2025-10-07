import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { HoursSection } from "./components/hours-section";
import { LocationSection } from "./components/location-section";
import { SocialSection } from "./components/social-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <HoursSection />
      <LocationSection />
      <SocialSection />
      <Footer />
    </div>
  );
}