import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tournaments from "./components/Tournaments";
import AboutUs from "./components/AboutUs";
import GamesSection from "./components/GamesSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <Navbar />
      <Hero />
      <Tournaments />
      <AboutUs />
      <GamesSection />
      <ContactSection />
    </main>
  );
}