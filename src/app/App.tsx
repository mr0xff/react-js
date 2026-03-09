import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Timeline } from "./components/Timeline";
import { StatsSection } from "./components/StatsSection";
import { MissionSection } from "./components/MissionSection";
import { Gallery } from "./components/Gallery";
import { EventSection } from "./components/EventSection";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton"; // Importe aqui

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <title>30 Anos – Tribunal de Contas de Angola | 1996–2026</title>

      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <Timeline />
        <MissionSection />
        <Gallery />
        <EventSection />
      </main>
      <Footer />

      {/* O botão flutuante entra aqui no final */}
      <WhatsAppButton />
    </div>
  );
}