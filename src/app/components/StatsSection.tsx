import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const stats = [
  { value: 30, suffix: "", label: "Anos de Serviço", description: "ao povo angolano" },
  { value: 1500, suffix: "+", label: "Auditorias Realizadas", description: "em todo o território nacional" },
  { value: 18, suffix: "", label: "Províncias Cobertas", description: "em fiscalização directa" },
  { value: 500, suffix: "+", label: "Técnicos Especializados", description: "ao serviço da transparência" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count.toLocaleString("pt-AO")}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0A2540 0%, #001F3F 100%)",
        borderTop: "3px solid #C9A347",
        borderBottom: "3px solid #C9A347",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#C9A347]/20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center px-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              <div
                className="text-[#C9A347] mb-2"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, lineHeight: 1 }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} active={isVisible} />
              </div>
              <p
                className="text-white font-semibold mb-1"
                style={{ fontSize: "0.95rem" }}
              >
                {stat.label}
              </p>
              <p
                className="text-white/40"
                style={{ fontSize: "0.78rem" }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
