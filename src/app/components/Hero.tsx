import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { TcaLogo30Anos } from "./TcaLogo";

const HERO_BG = "https://images.unsplash.com/photo-1760904050658-e05a50a4d529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdWFuZGElMjBhbmdvbGElMjBjaXR5c2NhcGUlMjBtb2Rlcm58ZW58MXx8fHwxNzcyODAzODczfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [logoRef, titleRef, subtitleRef, ctaRef];
    elements.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = "0";
        ref.current.style.transform = "translateY(30px)";
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            ref.current.style.opacity = "1";
            ref.current.style.transform = "translateY(0)";
          }
        }, 200 + i * 200);
      }
    });
  }, []);

  const scrollToTimeline = () => {
    document.querySelector("#timeline")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEvent = () => {
    document.querySelector("#evento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
        aria-hidden="true"
      />
      {/* Dark overlay with navy tint */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(10,37,64,0.93) 0%, rgba(1,15,40,0.88) 60%, rgba(10,37,64,0.82) 100%)" }}
        aria-hidden="true"
      />
      {/* Gold border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #C9A347, transparent)" }} aria-hidden="true" />

      {/* Decorative stars */}
      <div className="absolute top-32 left-10 text-[#C9A347]/20 text-6xl select-none hidden lg:block">★</div>
      <div className="absolute top-20 right-16 text-[#C9A347]/15 text-4xl select-none hidden lg:block">★</div>
      <div className="absolute bottom-32 left-20 text-[#C9A347]/10 text-3xl select-none hidden lg:block">★</div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Commemorative Logo */}
        <div ref={logoRef} className="flex justify-center mb-10">
          <div className="drop-shadow-2xl">
            <TcaLogo30Anos size={180} />
          </div>
        </div>

        {/* Eyebrow text */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-[#C9A347]" />
          <span
            className="text-[#C9A347] text-sm font-semibold tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            1996 – 2026
          </span>
          <div className="h-px w-16 bg-[#C9A347]" />
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-white mb-6"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          TCA: <span style={{ color: "#C9A347" }}>30 Anos</span> de História
          <br className="hidden sm:block" /> e Inovação
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-white/75 mb-12 max-w-2xl mx-auto"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            fontWeight: 300,
            lineHeight: 1.7,
            letterSpacing: "0.01em",
          }}
        >
          Fiscalizando a legalidade das finanças públicas com rigor, transparência e ao serviço do interesse nacional angolano.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToTimeline}
            className="px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "'Roboto', sans-serif",
              backgroundColor: "#C9A347",
              color: "#0A2540",
              letterSpacing: "0.1em",
              boxShadow: "0 4px 20px rgba(201,163,71,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FFD700";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#C9A347";
            }}
          >
            Conheça a nossa trajectória
          </button>
          <button
            onClick={scrollToEvent}
            className="px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: "'Roboto', sans-serif",
              border: "2px solid #C9A347",
              color: "#C9A347",
              backgroundColor: "transparent",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(201,163,71,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
            }}
          >
            Ver Programação
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: "'Roboto', sans-serif" }}>Scroll</span>
          <ChevronDown size={20} className="text-[#C9A347]/60" />
        </div>
      </div>
    </section>
  );
}
