import { MapPin, Phone, Mail, ExternalLink, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import { TcaLogo30Anos, TcaLogoText } from "./TcaLogo";

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Twitter, label: "Twitter / X", href: "https://twitter.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

const quickLinks = [
  { label: "Início", href: "#hero" },
  { label: "Linha do Tempo", href: "#timeline" },
  { label: "Galeria", href: "#galeria" },
  { label: "Evento", href: "#evento" },
];

const institutionalLinks = [
  { label: "Sobre o TCA", href: "https://tcontas.ao" },
  { label: "Relatórios de Auditoria", href: "https://tcontas.ao" },
  { label: "Legislação", href: "https://tcontas.ao" },
  { label: "Contactos", href: "https://tcontas.ao" },
  { label: "Portal da Transparência", href: "https://tcontas.ao" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="rodape"
      style={{ backgroundColor: "#001F3F", fontFamily: "'Roboto', sans-serif" }}
    >
      {/* Gold top border */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #C9A347, transparent)" }} />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logos and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-6 mb-6 flex-wrap">
              <TcaLogo30Anos size={80} />
              <div className="h-12 w-px bg-[#C9A347]/30 hidden sm:block" />
              <TcaLogoText size={40} />
            </div>
            <p
              className="text-white/50 leading-relaxed mb-6"
              style={{ fontSize: "0.85rem", lineHeight: 1.8 }}
            >
              O Tribunal de Contas de Angola é o órgão supremo de fiscalização e controlo da administração financeira do Estado angolano, ao serviço da legalidade e da transparência.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-200 hover:bg-[#C9A347] hover:border-[#C9A347] group"
                  style={{ border: "1px solid rgba(201,163,71,0.4)", color: "rgba(255,255,255,0.6)" }}
                >
                  <s.icon size={15} className="group-hover:text-[#0A2540] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4
              className="text-[#C9A347] mb-5"
              style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 hover:text-[#C9A347] transition-colors text-sm flex items-center gap-2 group"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    <span
                      className="w-4 h-0.5 bg-[#C9A347]/40 group-hover:w-6 group-hover:bg-[#C9A347] transition-all duration-300"
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institutional links */}
          <div>
            <h4
              className="text-[#C9A347] mb-5"
              style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}
            >
              Institucional
            </h4>
            <ul className="space-y-3">
              {institutionalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#C9A347] transition-colors text-sm flex items-center gap-2 group"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    <span
                      className="w-4 h-0.5 bg-[#C9A347]/40 group-hover:w-6 group-hover:bg-[#C9A347] transition-all duration-300"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4
              className="text-[#C9A347] mb-5"
              style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}
            >
              Contactos
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C9A347] flex-shrink-0 mt-0.5" />
                <span
                  className="text-white/60 text-sm leading-relaxed"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  Rua 17 de Setembro,<br />
                  Cidade Alta, Luanda,<br />
                  República de Angola
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#C9A347] flex-shrink-0" />
                <a
                  href="tel:+244222371920"
                  className="text-white/60 hover:text-[#C9A347] transition-colors text-sm"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  +244 222 371 920
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#C9A347] flex-shrink-0" />
                <a
                  href="mailto:info@tcontas.ao"
                  className="text-white/60 hover:text-[#C9A347] transition-colors text-sm"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  info@tcontas.ao
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="https://tcontas.ao"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:scale-105"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  border: "1px solid #C9A347",
                  color: "#C9A347",
                  letterSpacing: "0.12em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C9A347";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#0A2540";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#C9A347";
                }}
              >
                <ExternalLink size={13} />
                Voltar a tcontas.ao
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(201,163,71,0.15)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/30 text-center sm:text-left"
            style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.8rem" }}
          >
            © 2026 Tribunal de Contas de Angola. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span
              className="text-[#C9A347]/60"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em" }}
            >
              TCA — 30 ANOS | 1996 – 2026
            </span>
            <span className="text-[#C9A347]">★</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
