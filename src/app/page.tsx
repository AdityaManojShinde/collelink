import AboutSection from "@/components/home/AboutSection";
import { EventsSection } from "@/components/home/EventsSection";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <main className="ml-2 mr-2 md:ml-8 md:mr-8">
        <Hero />
        {/* Events */}
        <EventsSection />
        {/* About Section */}
        <AboutSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
