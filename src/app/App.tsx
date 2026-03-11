import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Timeline } from "./components/Timeline";
import { StatsSection } from "./components/StatsSection";
import { MissionSection } from "./components/MissionSection";
import { Gallery } from "./components/Gallery";
import { EventSection } from "./components/EventSection";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton"; // Importe aqui
import { SpeakersSection } from "./components/SpeakersSection";
import { GuestsGallery } from "./components/GuestsGallery";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <Timeline />
        <MissionSection />
        <Gallery />
        <EventSection />
        <SpeakersSection />
        <GuestsGallery />
      </main>
      <Footer />

      {/* O botão flutuante entra aqui no final */}
      <WhatsAppButton />
    </div>
  );
}