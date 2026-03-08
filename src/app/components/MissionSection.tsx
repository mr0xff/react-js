import { Shield, Eye, TrendingUp, BookOpen } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const pillars = [
  {
    icon: Shield,
    title: "Legalidade",
    text: "Verificar a conformidade dos actos de gestão financeira com as leis e regulamentos em vigor na República de Angola.",
  },
  {
    icon: Eye,
    title: "Transparência",
    text: "Promover a divulgação pública dos resultados das auditorias e fiscalizações, contribuindo para uma governação aberta.",
  },
  {
    icon: TrendingUp,
    title: "Eficiência",
    text: "Avaliar a economicidade, eficiência e eficácia na utilização dos recursos públicos do Estado angolano.",
  },
  {
    icon: BookOpen,
    title: "Integridade",
    text: "Assegurar que a gestão financeira pública é conduzida com elevados padrões de ética, rigor e responsabilidade.",
  },
];

export function MissionSection() {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver();

  return (
    <section
      className="py-24 bg-white"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={titleRef}
          className="text-center mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C9A347]" />
            <span
              className="text-[#C9A347] text-xs font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Missão & Valores
            </span>
            <div className="h-px w-12 bg-[#C9A347]" />
          </div>
          <h2
            className="text-[#0A2540]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Os Pilares que nos <span style={{ color: "#C9A347" }}>Guiam</span>
          </h2>
          <p
            className="text-[#555] mt-4 max-w-2xl mx-auto"
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.7 }}
          >
            Fundado sobre os princípios da democracia e do Estado de Direito, o TCA orienta a sua acção por valores que garantem a confiança dos cidadãos angolanos.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Quote banner */}
        <QuoteBanner />
      </div>
    </section>
  );
}

function PillarCard({ pillar, index }: { pillar: (typeof pillars)[0]; index: number }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="group p-8 text-center transition-all duration-300 hover:shadow-lg"
      style={{
        border: "1px solid rgba(201,163,71,0.2)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#C9A347";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,163,71,0.2)";
      }}
    >
      <div
        className="w-16 h-16 mx-auto flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#0A2540]"
        style={{
          backgroundColor: "rgba(10,37,64,0.06)",
          border: "1px solid rgba(201,163,71,0.3)",
        }}
      >
        <pillar.icon
          size={28}
          style={{ color: "#C9A347" }}
        />
      </div>
      <h3
        className="text-[#0A2540] mb-3"
        style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.1rem", fontWeight: 700 }}
      >
        {pillar.title}
      </h3>
      <p
        className="text-[#666]"
        style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 400 }}
      >
        {pillar.text}
      </p>
    </div>
  );
}

function QuoteBanner() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className="mt-16 py-12 px-8 md:px-16 text-center relative overflow-hidden"
      style={{
        backgroundColor: "#0A2540",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
      }}
    >
      {/* Gold borders */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9A347]" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A347]" />

      <span
        className="text-[#C9A347]/20 absolute -top-8 left-8 leading-none"
        style={{ fontSize: "10rem", fontFamily: "Georgia, serif" }}
        aria-hidden="true"
      >
        "
      </span>

      <p
        className="text-white relative z-10 max-w-3xl mx-auto"
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
          fontStyle: "italic",
          fontWeight: 300,
          lineHeight: 1.8,
        }}
      >
        O Tribunal de Contas é um <span style={{ color: "#C9A347", fontStyle: "normal", fontWeight: 600 }}>garante fundamental</span> da boa governação e da legalidade na gestão das finanças públicas, contribuindo decisivamente para o desenvolvimento sustentável e para a construção de um Angola mais transparente e próspero.
      </p>

      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="h-px w-16 bg-[#C9A347]/40" />
        <span
          className="text-[#C9A347] text-xs tracking-[0.3em] uppercase font-bold"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Tribunal de Contas de Angola
        </span>
        <div className="h-px w-16 bg-[#C9A347]/40" />
      </div>
    </div>
  );
}
