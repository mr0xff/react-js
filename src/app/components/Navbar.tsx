import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { TcaLogoText } from "./TcaLogo";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Linha do Tempo", href: "#timeline" },
  { label: "Galeria", href: "#galeria" },
  { label: "Evento", href: "#evento" },
  { label: "Contacto", href: "#rodape" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "#0A2540" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,163,71,0.3)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="flex items-center gap-3 focus:outline-none"
          aria-label="Voltar ao início"
        >
          <img src="logo.png" alt="30 anos de aniversairo" className="w-32" />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-white/90 hover:text-[#C9A347] transition-colors duration-200 text-sm font-medium tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A347] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://tcontas.ao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-[#C9A347] text-[#C9A347] hover:bg-[#C9A347] hover:text-[#0A2540] transition-all duration-200 px-4 py-2 text-sm font-medium tracking-wide"
            >
              <ExternalLink size={14} />
              tcontas.ao
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden" style={{ backgroundColor: "#0A2540", borderTop: "1px solid rgba(201,163,71,0.3)" }}>
          <ul className="py-4 px-6 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left text-white/90 hover:text-[#C9A347] transition-colors py-3 text-base font-medium border-b border-white/10"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="https://tcontas.ao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#C9A347] font-medium"
              >
                <ExternalLink size={14} />
                Voltar a tcontas.ao
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
