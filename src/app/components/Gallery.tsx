import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1722306562387-2af58393d08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXN0aWNlJTIwY291cnRob3VzZSUyMGluc3RpdHV0aW9uYWwlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI4MDM4NzB8MA&ixlib=rb-4.1.0&q=80&w=800",
    caption: "Sede do Tribunal de Contas de Angola",
    category: "Instituição",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1735886161697-b868f22f7dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGFybGlhbWVudCUyMHNlc3Npb24lMjBwbGVuYXJ5fGVufDF8fHx8MTc3MjgwMzg3N3ww&ixlib=rb-4.1.0&q=80&w=800",
    caption: "Sessão Plenária do Tribunal",
    category: "Sessões",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1768399808130-abac2a8442e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBmaW5hbmNlJTIwYXVkaXQlMjBnb3Zlcm5tZW50JTIwbWVldGluZ3xlbnwxfHx8fDE3NzI4MDM4NzF8MA&ixlib=rb-4.1.0&q=80&w=800",
    caption: "Reunião da Comissão de Auditoria",
    category: "Auditoria",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1757143137392-0b1e1a27a7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbiUyMG9mZmljaWFsJTIwZXZlbnR8ZW58MXx8fHwxNzcyODAzODc0fDA&ixlib=rb-4.1.0&q=80&w=800",
    caption: "Cerimónia de Tomada de Posse",
    category: "Eventos",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1678345201957-5612bd7dd6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZ292ZXJubWVudCUyMGNlcmVtb255JTIwb2ZmaWNpYWwlMjBzaWduaW5nfGVufDF8fHx8MTc3MjgwMzg3MXww&ixlib=rb-4.1.0&q=80&w=800",
    caption: "Assinatura de Protocolo Institucional",
    category: "Eventos",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1764113697577-b5899b9a339d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBzY2FsZSUyMGp1c3RpY2UlMjBiYWxhbmNlJTIwc3ltYm9sfGVufDF8fHx8MTc3MjgwMzg3NXww&ixlib=rb-4.1.0&q=80&w=800",
    caption: "Símbolo da Justiça e da Legalidade",
    category: "Instituição",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "O Tribunal de Contas representa um pilar fundamental para a transparência e a boa governação em Angola. Trinta anos de dedicação ao serviço público são motivo de grande orgulho para toda a nação.",
    name: "Dr. Exequiel Luvualu de Carvalho",
    role: "Presidente do Tribunal de Contas de Angola",
    image: "https://images.unsplash.com/photo-1615656850442-e6fa34e3cf8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwbWFuJTIwcG9ydHJhaXQlMjBzdWl0fGVufDF8fHx8MTc3MjgwMzg3OHww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 2,
    quote:
      "Ao longo destes trinta anos, testemunhei a evolução notável desta instituição, que cresceu em capacidade técnica, modernidade e impacto na gestão das finanças públicas angolanas.",
    name: "Dra. Maria da Conceição",
    role: "Vice-Presidente do Tribunal de Contas",
    image: "https://images.unsplash.com/photo-1710778044102-56a3a6b69a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwd29tYW4lMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI4MDM4Nzh8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 3,
    quote:
      "A missão do TCA vai além da fiscalização; é um compromisso permanente com a construção de um Estado mais justo, transparente e eficiente ao serviço dos cidadãos angolanos.",
    name: "Dr. António Fernandes",
    role: "Juiz Conselheiro — Tribunal de Contas",
    image: "https://images.unsplash.com/photo-1615656850442-e6fa34e3cf8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwbWFuJTIwcG9ydHJhaXQlMjBzdWl0fGVufDF8fHx8MTc3MjgwMzg3OHww&ixlib=rb-4.1.0&q=80&w=400",
  },
];

function GalleryGrid({ onImageClick }: { onImageClick: (id: number) => void }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {galleryImages.map((img, i) => (
        <button
          key={img.id}
          onClick={() => onImageClick(img.id)}
          className="relative overflow-hidden group focus:outline-none"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.95)",
            transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
            border: "1px solid rgba(201,163,71,0.3)",
          }}
          aria-label={img.caption}
        >
          <img
            src={img.src}
            alt={img.caption}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#0A2540]/0 group-hover:bg-[#0A2540]/70 transition-all duration-300 flex items-end p-4">
            <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span
                className="text-[#C9A347] text-xs font-bold tracking-wider uppercase block mb-1"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {img.category}
              </span>
              <p
                className="text-white text-sm"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {img.caption}
              </p>
            </div>
          </div>
          {/* Gold corner accent */}
          <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full h-0.5 bg-[#C9A347]" />
            <div className="w-0.5 h-full bg-[#C9A347]" />
          </div>
        </button>
      ))}
    </div>
  );
}

function Lightbox({ imageId, onClose }: { imageId: number; onClose: () => void }) {
  const [current, setCurrent] = useState(galleryImages.findIndex((i) => i.id === imageId));
  const img = galleryImages[current];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(10,37,64,0.97)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/60 hover:text-[#C9A347] transition-colors"
          aria-label="Fechar"
        >
          <X size={28} />
        </button>
        <img
          src={img.src}
          alt={img.caption}
          className="w-full max-h-[75vh] object-contain"
          style={{ border: "1px solid rgba(201,163,71,0.4)" }}
        />
        <p
          className="text-center text-white/80 mt-3 text-sm"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          {img.caption}
        </p>
        {/* Navigation */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + galleryImages.length) % galleryImages.length)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-white/60 hover:text-[#C9A347] transition-colors hidden sm:block"
          aria-label="Anterior"
        >
          <ChevronLeft size={36} />
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % galleryImages.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-white/60 hover:text-[#C9A347] transition-colors hidden sm:block"
          aria-label="Próximo"
        >
          <ChevronRight size={36} />
        </button>
      </div>
    </div>
  );
}

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useIntersectionObserver();
  const t = testimonials[current];

  return (
    <div
      ref={ref}
      className="mt-20"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
      }}
    >
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="h-px w-12 bg-[#C9A347]" />
          <span className="text-[#C9A347] text-xs font-bold tracking-[0.3em] uppercase" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Depoimentos
          </span>
          <div className="h-px w-12 bg-[#C9A347]" />
        </div>
        <h3
          className="text-[#0A2540]"
          style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.6rem", fontWeight: 700 }}
        >
          Vozes da Instituição
        </h3>
      </div>

      <div className="max-w-3xl mx-auto">
        <div
          className="relative p-8 md:p-10 bg-white"
          style={{ border: "1px solid #C9A347", boxShadow: "0 8px 40px rgba(10,37,64,0.08)" }}
        >
          {/* Quote mark */}
          <div
            className="absolute -top-5 left-10 text-[#C9A347] leading-none"
            style={{ fontSize: "5rem", fontFamily: "Georgia, serif", lineHeight: 1 }}
            aria-hidden="true"
          >
            "
          </div>

          <p
            className="text-[#333] leading-relaxed text-center mb-8 pt-4"
            style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.05rem", fontStyle: "italic", fontWeight: 300 }}
          >
            {t.quote}
          </p>

          <div className="flex items-center justify-center gap-4">
            <img
              src={t.image}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover"
              style={{ border: "2px solid #C9A347" }}
            />
            <div>
              <p
                className="text-[#0A2540]"
                style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.95rem", fontWeight: 700 }}
              >
                {t.name}
              </p>
              <p
                className="text-[#C9A347]"
                style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.8rem", fontWeight: 500 }}
              >
                {t.role}
              </p>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: i === current ? "#C9A347" : "#ccc",
              }}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const [lightboxId, setLightboxId] = useState<number | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver();

  return (
    <section
      id="galeria"
      className="py-24"
      style={{ backgroundColor: "#F8F6F0", fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={titleRef}
          className="text-center mb-14"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C9A347]" />
            <span className="text-[#C9A347] text-xs font-bold tracking-[0.3em] uppercase">
              Memórias
            </span>
            <div className="h-px w-12 bg-[#C9A347]" />
          </div>
          <h2
            className="text-[#0A2540]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Galeria — <span style={{ color: "#C9A347" }}>30 Anos de Memórias</span>
          </h2>
          <p
            className="text-[#555] mt-4 max-w-xl mx-auto"
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.7 }}
          >
            Uma viagem visual pela história e os momentos que marcaram três décadas do Tribunal de Contas de Angola.
          </p>
        </div>

        <GalleryGrid onImageClick={setLightboxId} />
        <TestimonialCarousel />
      </div>

      {lightboxId !== null && (
        <Lightbox imageId={lightboxId} onClose={() => setLightboxId(null)} />
      )}
    </section>
  );
}
