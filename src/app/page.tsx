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
    <main className="min-h-screen bg-[#F8F6F3] text-[#111111] max-w-[1600px] mx-auto overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.08)]">
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
