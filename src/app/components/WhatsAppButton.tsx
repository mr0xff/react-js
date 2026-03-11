import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppButton() {
  // Substitua pelo número real do Tribunal (ex: 244900000000)
  const phoneNumber = "244222371920"; 
  const message = encodeURIComponent("Olá! Gostaria de informações sobre os 30 anos do Tribunal de Contas.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group"
      aria-label="Contactar via WhatsApp"
    >
      {/* Ícone do WhatsApp */}
      <FaWhatsapp className="text-3xl" />

      {/* Balão de texto que aparece no hover (opcional) */}
      <span className="absolute right-20 bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
}