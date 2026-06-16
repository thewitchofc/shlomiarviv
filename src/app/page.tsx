import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import BrandStory from "@/components/sections/BrandStory";
import Transformations from "@/components/sections/Transformations";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import InstagramGallery from "@/components/sections/InstagramGallery";
import Location from "@/components/sections/Location";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5]">
      <Navigation />
      <HeroSection />
      <BrandStory />
      <Transformations />
      <Services />
      <Testimonials />
      <InstagramGallery />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  );
}
