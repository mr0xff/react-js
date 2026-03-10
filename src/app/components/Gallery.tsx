import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const galleryImages = [
  {
    id: 1,
    src: "https://tcontas.ao/wp-content/uploads/2025/09/04.webp",
    name: "Dr. Evaristo José Solano",
    description: "Juiz Conselheiro Vice-Presidente do Tribunal e Presidente da 1.ª Câmara",
    biographyUrl: "https://tcontas.ao/juizes/dr-evaristo-jose-solano/",
  },

  {
    id: 2,
    src: "https://tcontas.ao/wp-content/uploads/2025/09/06.webp",
    name: "Dra. Arlete Maria Bolonhês da Conceição",
    description: "JUÍZA CONSELHEIRA DA 1ª CÂMARA",
    biographyUrl: "https://tcontas.ao/juizes/dra-arlete-maria-bolonhes-da-conceicao/",
  },
  {
    id: 3,
    src: "https://tcontas.ao/wp-content/uploads/2025/09/04-1.webp",
    name: "Dr. Armindo Gideão Kunjiquisse Jelembi",
    description: "JUIZ CONSELHEIRO DA 1ª CÂMARA",
    biographyUrl: "https://tcontas.ao/juizes/dr-armindo-gideao-kunjiquisse-jelembi/",
  },
  {
    id: 4,
    src: "https://tcontas.ao/wp-content/uploads/2025/09/01-1.webp",
    name: "Dr. Januário José Domingos",
    description: "JUIZ CONSELHEIRO DA 1ª CÂMARA",
    biographyUrl: "https://tcontas.ao/juizes/dr-januario-jose-domingos/",
  },
  {
    id: 5,
    src: "https://tcontas.ao/wp-content/uploads/2025/09/03.webp",
    name: "Dr. Carlos Luís M. António",
    description: "JUIZ CONSELHEIRO DA 1ª CÂMARA",
    biographyUrl: "https://tcontas.ao/juizes/dr-carlos-luis-m-antonio/",
  },
  {
    id: 6,
    src: "https://tcontas.ao/wp-content/uploads/2025/09/8.webp",
    name: "Dra. Olinda França Cardoso",
    description: "JUÍZA CONSELHEIRA PRESIDENTE DA 2ª CÂMARA",
    biographyUrl: "https://tcontas.ao/juizes/dra-olinda-franca-cardoso/",
  },
  {
    id: 7,
    src: "https://tcontas.ao/wp-content/uploads/2025/09/03-1.webp",
    name: "Dr. Fausto Tavares de Carvalho Simões",
    description: "JUIZ CONSELHEIRO DA 2ª CÂMARA",
    biographyUrl: "https://tcontas.ao/juizes/dr-fausto-tavares-de-carvalho-simoes/",
  },
  {
    id: 8,
    src: "https://tcontas.ao/wp-content/uploads/2025/09/Imagem-WhatsApp-2025-10-09-as-12.58.44_7f1ebd62.png",
    name: "Dr. Manuel José Domingos",
    description: "JUIZ CONSELHEIRO DA 2ª CÂMARA",
    biographyUrl: "https://tcontas.ao/juizes/dr-manuel-jose-domingos/",
  },
  {
    id: 9,
    src: "https://tcontas.ao/wp-content/uploads/2025/09/02-1.webp",
    name: "Dr. Manuel da Cruz Neto",
    description: "JUIZ CONSELHEIRO DA 2ª CÂMARA",
    biographyUrl: "https://tcontas.ao/juizes/dr-manuel-da-cruz-neto/",
  },
  {
    id: 10,
    src: "https://tcontas.ao/wp-content/uploads/2025/09/05.webp",
    name: "Dr. Sebastião Jorge Diogo Bessa",
    description: "JUIZ CONSELHEIRO DA 2ª CÂMARA",
    biographyUrl: "https://tcontas.ao/juizes/dr-sebastiao-jorge-diogo-bessa/",
  },
  {
    id: 11,
    src: "https://tcontas.ao/wp-content/uploads/2025/09/02.webp",
    name: "Dr. João Carlos de C. Paiva",
    description: "JUIZ CONSELHEIRO DA 2ª CÂMARA",
    biographyUrl: "https://tcontas.ao/juizes/dr-joao-carlos-de-c-paiva/",
  },
  {
    id: 12,
    src: "https://tcontas.ao/wp-content/uploads/2025/09/01.webp",
    name: "Dr. Fernando de Almeida Gomes",
    description: "JUIZ CONSELHEIRO DA 2ª CÂMARA",
    biographyUrl: "https://tcontas.ao/juizes/dr-fernando-de-almeida-gomes/",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "O Tribunal de Contas representa um pilar fundamental para a transparência e a boa governação em Angola. Trinta anos de dedicação ao serviço público são motivo de grande orgulho para toda a nação.",
    name: "Dr. Carlos Luís M. António",
    role: "Juiz Conselheiro da 1ª Câmara do Tribunal de Contas",
      {
    id: 2,
    quote:
      "Ao longo destes trinta anos, a evolução notável desta instituição, que cresceu em capacidade técnica, modernidade e impacto na gestão das finanças públicas angolanas.",
    name: "Dra. Arlete Maria Bolonhês da Conceição",
    role: "Juíza Conselheira da 1ª Câmara do Tribunal de Contas",
    
  },
  {
    id: 3,
    quote:
      "A missão do TCA vai além da fiscalização; é um compromisso permanente com a construção de um Estado mais justo, transparente e eficiente ao serviço dos cidadãos angolanos.",
    name: "Dr. Sebastião Gunza",
    role: "Juiz Conselheiro — Tribunal de Contas",
  
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
            transform: isVisible ? "scale(1)" : "scale(0.98)",
            transition: `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`,
            border: "1px solid rgba(201,163,71,0.18)",
            /* switch to a taller portrait ratio so profile pictures aren’t cropped */
            aspectRatio: "3 / 4",
            /* remove the fixed max height so the container can grow with the image */
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label={img.description}
        >
          <img
            src={img.src}
            alt={img.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ 
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              objectPosition: "center 35%",
            }}
          />
          <div className="absolute inset-0 bg-[#0A2540]/0 group-hover:bg-[#0A2540]/70 transition-all duration-300 flex flex-col items-end justify-end p-4">
            <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
              <span
                className="text-[#C9A347] text-xs font-bold tracking-wider uppercase block mb-1"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {img.name}
              </span>
              <p
                className="text-white text-sm mb-3"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {img.description}
              </p>
              {img.biographyUrl && (
                <a
                  href={img.biographyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#C9A347] text-[#0A2540] text-xs font-bold rounded-sm transition-all hover:bg-white"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Ver Biografia
                </a>
              )}
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
        className="relative max-w-4xl w-full flex justify-center"
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
          alt={img.name}
          className="w-full"
          style={{ 
            display: "block",
            maxHeight: "65vh",
            objectFit: "contain",
            objectPosition: "center 35%",
            border: "1px solid rgba(201,163,71,0.35)",
           }}
        />
        <p
          className="text-center text-white/80 mt-3 text-sm"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          {img.name}
          <br />
          <br />
          {img.description}
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
