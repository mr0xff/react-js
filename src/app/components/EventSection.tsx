import { useState, FormEvent } from "react";
import { Calendar, MapPin, Clock, CheckCircle2, Users, Music, Award, Mic } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const schedule = [
  { time: "08:30", title: "Recepção e Acreditação dos Convidados", icon: Users },
  { time: "09:00", title: "Sessão Solene de Abertura", icon: Award },
  { time: "10:00", title: "Conferência: 30 Anos de Fiscalização Financeira em Angola", icon: Mic },
  { time: "11:30", title: "Painel: O Futuro do Controlo das Finanças Públicas", icon: Mic },
  { time: "13:00", title: "Almoço Institucional", icon: Users },
  { time: "15:00", title: "Entrega de Condecorações e Reconhecimentos", icon: Award },
  { time: "16:30", title: "Apresentação Cultural — Arte e Identidade Angolana", icon: Music },
  { time: "18:00", title: "Cerimónia de Encerramento e Cocktail", icon: CheckCircle2 },
];

function RSVPForm() {
  const [form, setForm] = useState({ nome: "", email: "", cargo: "", instituicao: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputStyle = {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(201,163,71,0.3)",
    color: "#fff",
    fontSize: "0.9rem",
    padding: "12px 16px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontFamily: "'Roboto', sans-serif",
    color: "#C9A347",
    fontSize: "0.8rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "6px",
    display: "block",
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: "rgba(201,163,71,0.15)", border: "2px solid #C9A347" }}
        >
          <CheckCircle2 size={40} className="text-[#C9A347]" />
        </div>
        <h3
          className="text-white mb-3"
          style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.4rem", fontWeight: 700 }}
        >
          Presença Confirmada!
        </h3>
        <p
          className="text-white/60 max-w-xs"
          style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}
        >
          Obrigado, <span style={{ color: "#C9A347" }}>{form.nome}</span>. A sua confirmação foi registada com sucesso. Irá receber uma confirmação no seu endereço de email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label style={labelStyle}>Nome Completo *</label>
        <input
          type="text"
          required
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          placeholder="Insira o seu nome completo"
          style={inputStyle}
          onFocus={(e) => { e.currentTarget.style.borderColor = "#C9A347"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,163,71,0.3)"; }}
        />
      </div>
      <div>
        <label style={labelStyle}>Endereço de Email *</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="exemplo@instituicao.ao"
          style={inputStyle}
          onFocus={(e) => { e.currentTarget.style.borderColor = "#C9A347"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,163,71,0.3)"; }}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>Cargo / Função</label>
          <input
            type="text"
            value={form.cargo}
            onChange={(e) => setForm({ ...form, cargo: e.target.value })}
            placeholder="Ex: Director, Técnico..."
            style={inputStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = "#C9A347"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,163,71,0.3)"; }}
          />
        </div>
        <div>
          <label style={labelStyle}>Instituição</label>
          <input
            type="text"
            value={form.instituicao}
            onChange={(e) => setForm({ ...form, instituicao: e.target.value })}
            placeholder="Nome da instituição"
            style={inputStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = "#C9A347"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,163,71,0.3)"; }}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 mt-2 hover:scale-[1.02] disabled:opacity-60"
        style={{
          fontFamily: "'Roboto', sans-serif",
          backgroundColor: loading ? "#888" : "#C9A347",
          color: "#0A2540",
          letterSpacing: "0.15em",
          boxShadow: loading ? "none" : "0 4px 20px rgba(201,163,71,0.4)",
        }}
      >
        {loading ? "A processar..." : "Confirmar Presença"}
      </button>
      <p
        className="text-white/40 text-center"
        style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.75rem" }}
      >
        * Campos obrigatórios. A sua informação será tratada de forma confidencial.
      </p>
    </form>
  );
}

export function EventSection() {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver();
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver();

  return (
    <section
      id="evento"
      className="py-24"
      style={{ backgroundColor: "#0A2540", fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            <span className="text-[#C9A347] text-xs font-bold tracking-[0.3em] uppercase">
              Evento Comemorativo
            </span>
            <div className="h-px w-12 bg-[#C9A347]" />
          </div>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Comemoração dos <span style={{ color: "#C9A347" }}>30 Anos</span>
          </h2>
          <p
            className="text-white/60 mt-4 max-w-xl mx-auto"
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.7 }}
          >
            Junte-se a nós nesta celebração histórica que marca três décadas de fiscalização ao serviço de Angola.
          </p>
        </div>

        {/* Event info bar */}
        <div
          ref={contentRef}
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px mb-12"
            style={{ backgroundColor: "rgba(201,163,71,0.3)" }}
          >
            {[
              {
                icon: Calendar,
                label: "Data",
                value: "22 de Março de 2026",
                sub: "Sábado",
              },
              {
                icon: Clock,
                label: "Horário",
                value: "08:30 — 20:00",
                sub: "Horário de Angola (WAT)",
              },
              {
                icon: MapPin,
                label: "Local",
                value: "Palácio da República",
                sub: "Cidade Alta, Luanda",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-6"
                style={{ backgroundColor: "#0D2D50" }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(201,163,71,0.12)", border: "1px solid rgba(201,163,71,0.4)" }}
                >
                  <item.icon size={22} className="text-[#C9A347]" />
                </div>
                <div>
                  <p
                    className="text-[#C9A347] text-xs font-bold tracking-widest uppercase mb-0.5"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-white font-medium"
                    style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1rem" }}
                  >
                    {item.value}
                  </p>
                  <p
                    className="text-white/50 text-xs"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map + Schedule + RSVP */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Map + Schedule */}
            <div className="space-y-8">
              {/* Google Maps embed */}
              <div>
                <h3
                  className="text-white mb-4"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.1rem", fontWeight: 700 }}
                >
                  <span style={{ color: "#C9A347" }}>★</span> Localização
                </h3>
                <div
                  className="overflow-hidden"
                  style={{ border: "1px solid rgba(201,163,71,0.3)", height: "220px" }}
                >
                  <iframe
                    title="Localização — Cidade Alta, Luanda"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.3234085476727!2d13.234!3d-8.835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f1a41c3f6a19%3A0x1e6d4e3a0b4e1a31!2sCidade%20Alta%2C%20Luanda%2C%20Angola!5e0!3m2!1spt!2sao!4v1680000000000!5m2!1spt!2sao"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p
                  className="text-white/40 text-xs mt-2"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  <MapPin size={12} className="inline mr-1" />
                  Rua 17 de Setembro, Cidade Alta, Luanda, Angola
                </p>
              </div>

              {/* Schedule */}
              <div>
                <h3
                  className="text-white mb-5"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.1rem", fontWeight: 700 }}
                >
                  <span style={{ color: "#C9A347" }}>★</span> Cronograma do Evento
                </h3>
                <div className="space-y-2">
                  {schedule.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-3 transition-all duration-200 hover:bg-white/5 group"
                      style={{ borderLeft: "2px solid rgba(201,163,71,0.3)" }}
                    >
                      <div
                        className="flex-shrink-0 w-14 text-right"
                      >
                        <span
                          className="text-[#C9A347] font-bold"
                          style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.8rem" }}
                        >
                          {item.time}
                        </span>
                      </div>
                      <div
                        className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:bg-[#C9A347]/20"
                        style={{ border: "1px solid rgba(201,163,71,0.3)" }}
                      >
                        <item.icon size={14} className="text-[#C9A347]" />
                      </div>
                      <p
                        className="text-white/80 group-hover:text-white transition-colors"
                        style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.85rem" }}
                      >
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: RSVP Form */}
            <div>
              <div
                className="p-8"
                style={{ border: "1px solid rgba(201,163,71,0.3)", backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.3rem", fontWeight: 700 }}
                >
                  <span style={{ color: "#C9A347" }}>★</span> Confirmar Presença
                </h3>
                <p
                  className="text-white/50 mb-8"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.85rem", lineHeight: 1.6 }}
                >
                  Preencha o formulário abaixo para confirmar a sua participação na cerimónia comemorativa dos 30 Anos do TCA.
                </p>
                <RSVPForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
