// TCA 30 Anos Commemorative Logo SVG Component
export function TcaLogo30Anos({ size = 160 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Comemorativa 30 Anos do Tribunal de Contas de Angola"
    >
      {/* Outer ring */}
      <circle cx="100" cy="100" r="96" fill="#0A2540" stroke="#C9A347" strokeWidth="3" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="#C9A347" strokeWidth="1" />

      {/* Top arc text "TRIBUNAL DE CONTAS DE ANGOLA" */}
      <defs>
        <path id="topArc" d="M 100 100 m -72 0 a 72 72 0 0 1 144 0" />
        <path id="bottomArc" d="M 100 100 m -72 0 a 72 72 0 1 0 144 0" />
      </defs>
      <text fill="#C9A347" fontSize="9" fontFamily="Roboto, sans-serif" fontWeight="700" letterSpacing="2">
        <textPath href="#topArc" startOffset="5%">TRIBUNAL DE CONTAS DE ANGOLA</textPath>
      </text>
      <text fill="#C9A347" fontSize="8" fontFamily="Roboto, sans-serif" fontWeight="500" letterSpacing="1.5">
        <textPath href="#bottomArc" startOffset="18%">1996 — 2026</textPath>
      </text>

      {/* Central balance/scale icon */}
      <g transform="translate(100, 92)">
        {/* Balance beam */}
        <rect x="-28" y="-2" width="56" height="3" rx="1.5" fill="#C9A347" />
        {/* Center pillar */}
        <rect x="-2" y="-18" width="4" height="20" rx="2" fill="#C9A347" />
        {/* Left pan */}
        <line x1="-28" y1="-1" x2="-22" y2="12" stroke="#C9A347" strokeWidth="1.5" />
        <line x1="-22" y1="12" x2="-34" y2="12" stroke="#C9A347" strokeWidth="1.5" />
        {/* Right pan */}
        <line x1="28" y1="-1" x2="22" y2="12" stroke="#C9A347" strokeWidth="1.5" />
        <line x1="22" y1="12" x2="34" y2="12" stroke="#C9A347" strokeWidth="1.5" />
        {/* Star on top */}
        <polygon
          points="0,-28 2.9,-20.4 10.6,-20.4 4.8,-15.6 7,-7.5 0,-12 -7,-7.5 -4.8,-15.6 -10.6,-20.4 -2.9,-20.4"
          fill="#C9A347"
        />
      </g>

      {/* "30" large text */}
      <text
        x="100"
        y="132"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="26"
        fontFamily="Roboto, sans-serif"
        fontWeight="900"
        letterSpacing="-1"
      >
        30
      </text>

      {/* "ANOS" text */}
      <text
        x="100"
        y="148"
        textAnchor="middle"
        fill="#C9A347"
        fontSize="10"
        fontFamily="Roboto, sans-serif"
        fontWeight="700"
        letterSpacing="4"
      >
        ANOS
      </text>

      {/* Bottom star decorations */}
      <text x="62" y="152" fill="#C9A347" fontSize="7" textAnchor="middle">★</text>
      <text x="138" y="152" fill="#C9A347" fontSize="7" textAnchor="middle">★</text>
    </svg>
  );
}

export function TcaLogoText({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size * 2.5}
      height={size}
      viewBox="0 0 140 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tribunal de Contas de Angola"
    >
      <text x="0" y="22" fill="#FFFFFF" fontSize="22" fontFamily="Roboto, sans-serif" fontWeight="700">TCA</text>
      <rect x="0" y="27" width="50" height="1.5" fill="#C9A347" />
      <text x="0" y="40" fill="#C9A347" fontSize="6.5" fontFamily="Roboto, sans-serif" fontWeight="500" letterSpacing="0.5">TRIBUNAL DE CONTAS</text>
      <text x="0" y="50" fill="#C9A347" fontSize="6.5" fontFamily="Roboto, sans-serif" fontWeight="500" letterSpacing="0.5">DE ANGOLA</text>
    </svg>
  );
}
