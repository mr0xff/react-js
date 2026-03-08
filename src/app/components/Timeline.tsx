import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const IMAGES = {
  1996: "https://images.unsplash.com/photo-1666018215790-867b14fe4822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2lhbCUyMGRvY3VtZW50JTIwc2lnbmluZyUyMGluc3RpdHV0aW9uYWwlMjBjZXJlbW9ueXxlbnwxfHx8fDE3NzI4MDM4Nzd8MA&ixlib=rb-4.1.0&q=80&w=800",
  2006: "https://images.unsplash.com/photo-1678345201957-5612bd7dd6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZ292ZXJubWVudCUyMGNlcmVtb255JTIwb2ZmaWNpYWwlMjBzaWduaW5nfGVufDF8fHx8MTc3MjgwMzg3MXww&ixlib=rb-4.1.0&q=80&w=800",
  2016: "https://images.unsplash.com/photo-1768399808130-abac2a8442e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBmaW5hbmNlJTIwYXVkaXQlMjBnb3Zlcm5tZW50JTIwbWVldGluZ3xlbnwxfHx8fDE3NzI4MDM4NzF8MA&ixlib=rb-4.1.0&q=80&w=800",
  2026: "https://images.unsplash.com/photo-1742996111692-2d924f12a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwYnVzaW5lc3MlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc3MjgwMzg3NHww&ixlib=rb-4.1.0&q=80&w=800",
};

const timelineData = [
  {
    year: 1996,
    title: "Fundação do Tribunal de Contas",
    text: "Por força da Lei n.º 4/96, de 22 de março, o Tribunal de Contas de Angola é criado como órgão supremo de fiscalização e controlo da administração financeira do Estado. Inicia-se uma nova era de transparência e legalidade nas finanças públicas angolanas.",
    side: "right" as const,
  },
  {
    year: 2006,
    title: "Consolidação Institucional",
    text: "Uma década de operação consolida o TCA como pilar fundamental da governação financeira em Angola. Reformas internas reforçam os mecanismos de controlo e ampliam a capacidade técnica dos magistrados e auditores, fortalecendo o quadro jurídico de fiscalização.",
    side: "left" as const,
  },
  {
    year: 2016,
    title: "Modernização e Transparência",
    text: "O TCA abraça a modernização tecnológica e a digitalização dos seus processos, adoptando novos sistemas de gestão e controlo financeiro. Inicia-se a publicação electrónica dos relatórios de auditoria, promovendo a transparência e o acesso público à informação.",
    side: "right" as const,
  },
  {
    year: 2026,
    title: "30 Anos — Uma Nova Visão",
    text: "Trinta anos de história, compromisso e dedicação ao serviço público. O TCA reitera o seu compromisso com a legalidade, a eficiência e a modernidade, projectando-se para o futuro com uma visão renovada ao serviço do povo angolano e do desenvolvimento sustentável.",
    side: "left" as const,
  },
];

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timelineData)[0];
  index: number;
}) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row items-center gap-0"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
    >
      {/* LEFT CONTENT — visible only when side=left on desktop */}
      <div
        className={`hidden md:flex w-5/12 ${item.side === "left" ? "justify-end pr-12" : "justify-end pr-12 opacity-0 pointer-events-none"}`}
      >
        {item.side === "left" && (
          <div className="max-w-sm text-right">
            <img
              src={IMAGES[item.year as keyof typeof IMAGES]}
              alt={`${item.year} — ${item.title}`}
              className="w-full h-48 object-cover mb-4 shadow-lg"
              style={{ border: "2px solid #C9A347" }}
            />
            <h3
              className="text-[#0A2540] mb-2"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.15rem", fontWeight: 700 }}
            >
              {item.title}
            </h3>
            <p
              className="text-[#555] leading-relaxed"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.9rem", fontWeight: 400 }}
            >
              {item.text}
            </p>
          </div>
        )}
      </div>

      {/* CENTER — year circle + line */}
      <div className="flex flex-col items-center w-full md:w-2/12 z-10">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
          style={{
            backgroundColor: "#0A2540",
            border: "3px solid #C9A347",
            boxShadow: "0 0 0 6px rgba(201,163,71,0.15)",
          }}
        >
          <span
            className="text-[#C9A347]"
            style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em" }}
          >
            {item.year}
          </span>
        </div>
      </div>

      {/* RIGHT CONTENT — visible only when side=right on desktop */}
      <div
        className={`hidden md:flex w-5/12 ${item.side === "right" ? "justify-start pl-12" : "justify-start pl-12 opacity-0 pointer-events-none"}`}
      >
        {item.side === "right" && (
          <div className="max-w-sm">
            <img
              src={IMAGES[item.year as keyof typeof IMAGES]}
              alt={`${item.year} — ${item.title}`}
              className="w-full h-48 object-cover mb-4 shadow-lg"
              style={{ border: "2px solid #C9A347" }}
            />
            <h3
              className="text-[#0A2540] mb-2"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.15rem", fontWeight: 700 }}
            >
              {item.title}
            </h3>
            <p
              className="text-[#555] leading-relaxed"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.9rem", fontWeight: 400 }}
            >
              {item.text}
            </p>
          </div>
        )}
      </div>

      {/* MOBILE CONTENT */}
      <div className="md:hidden w-full px-4 pb-4 mt-4">
        <img
          src={IMAGES[item.year as keyof typeof IMAGES]}
          alt={`${item.year} — ${item.title}`}
          className="w-full h-44 object-cover mb-4 shadow-lg"
          style={{ border: "2px solid #C9A347" }}
        />
        <h3
          className="text-[#0A2540] mb-2"
          style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.1rem", fontWeight: 700 }}
        >
          {item.title}
        </h3>
        <p
          className="text-[#555] leading-relaxed"
          style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.875rem" }}
        >
          {item.text}
        </p>
      </div>
    </div>
  );
}

export function Timeline() {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver();

  return (
    <section
      id="timeline"
      className="py-24 bg-white"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={titleRef}
          className="text-center mb-20"
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
            >
              Marcos Históricos
            </span>
            <div className="h-px w-12 bg-[#C9A347]" />
          </div>
          <h2
            className="text-[#0A2540]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Uma Trajectória de <span style={{ color: "#C9A347" }}>Excelência</span>
          </h2>
          <p
            className="text-[#555] mt-4 max-w-xl mx-auto"
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.7 }}
          >
            Trinta anos de compromisso com a fiscalização financeira, a legalidade e o desenvolvimento de Angola.
          </p>
        </div>

        {/* Timeline items */}
        <div className="relative">
          {/* Vertical gold line — desktop only */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, #C9A347 0%, rgba(201,163,71,0.2) 100%)" }}
            aria-hidden="true"
          />
          {/* Mobile vertical line */}
          <div
            className="md:hidden absolute left-8 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(180deg, #C9A347 0%, rgba(201,163,71,0.2) 100%)" }}
            aria-hidden="true"
          />

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
