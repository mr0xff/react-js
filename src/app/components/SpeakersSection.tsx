import { User, MapPin, Quote } from "lucide-react";

const speakers = [
  { id: 1, name: "Aurora Virgínia & Fernanda Mualeia", country: "Angola/Moçambique", theme: "Compliance e Tribunal de Contas em Angola: Prevenção, Legalidade e Boa Governação", flag: "🇦🇴/🇲🇿" },
  { id: 2, name: "Edilson de Sousa Silva", country: "Brasil", theme: "Diálogos Institucionais e os Tribunais de Contas Como Agentes do Direito Fundamental à Boa Administração Pública", flag: "🇧🇷" },
  { id: 3, name: "Inaldo Araújo", country: "Brasil", theme: "A Importância da Cooperação Internacional para o Aperfeiçoamento dos Tribunais de Contas", flag: "🇧🇷" },
  { id: 4, name: "André de Matos", country: "Brasil", theme: "Os Aspectos Centrais da Actividade Financeira do Estado e o Indispensável Papel de Controle das Instituições Superiores de Controlo", flag: "🇧🇷" },
  { id: 5, name: "Filipa Urbano Calvão", country: "Portugal", theme: "Painel de Direito Público e Fiscalização", flag: "🇵🇹" },
  { id: 6, name: "Maria Santana Milhomem", country: "Brasil", theme: "Conhecimento, Inovação e Controlo Externo: Contributos da Academia para a Jurisdição Financeira no Século XXI", flag: "🇧🇷" },
  { id: 7, name: "Sebastião Helvécio", country: "Brasil", theme: "A Jurisdição dos Tribunais de Contas como Pilar de Instituição Inclusiva", flag: "🇧🇷" },
  { id: 8, name: "Jorge Bacelar Gouveia", country: "Portugal", theme: "Sustentabilidade Fiscal e Responsabilidade Intergeracional na Gestão dos Recursos Públicos", flag: "🇵🇹" },
  { id: 9, name: "Nelson Pelligrine", country: "Brasil", theme: "LINDB 13.655/2018, Regras para Interpretação e Aplicação do Direito Público", flag: "🇧🇷" },
  { id: 10, name: "Luciano Vieira de Araújo", country: "Brasil", theme: "IA Generativa Ativa: Do Texto à tarefa, do Risco ao Controle", flag: "🇧🇷" },
  { id: 11, name: "Marina Faraco Siqueira e Silva", country: "Brasil", theme: "Arquitetura Constitucional do Controle Externo: Separação de Poderes e Legitimação Democrática das Cortes de Contas na Experiência Brasileira", flag: "🇧🇷" },
  { id: 12, name: "Augusto Nardes", country: "Brasil", theme: "Governança Pública", flag: "🇧🇷" },
  { id: 13, name: "José Fontes", country: "Portugal", theme: "A Cooperação Internacional dos Tribunais de Contas e a Consolidação da Jurisdição Financeira nas Democracias Contemporâneas", flag: "🇵🇹" },
  { id: 14, name: "Carina Leite", country: "Portugal", theme: "Saúde ocupacional de Bem-Estar Institucional: Fundamentos para um Tribunal de Contas Moderno e Sustentável", flag: "🇵🇹" },
];

export function SpeakersSection() {
  return (
    <section id="oradores" className="py-24 bg-[#0A2540]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Secção */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#C9A347]" />
            <span className="text-[#C9A347] text-xs font-bold tracking-widest uppercase">Prelectores Convidados</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Corpo de <span className="text-[#C9A347]">Oradores</span>
          </h2>
        </div>

        {/* Grelha de Oradores */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {speakers.map((speaker) => (
            <div 
              key={speaker.id}
              className="group relative bg-white/5 border border-white/10 p-6 transition-all duration-300 hover:bg-white/[0.08] hover:border-[#C9A347]/50"
            >
              {/* Número de Ordem Subtil */}
              <span className="absolute top-4 right-6 text-white/5 font-bold text-5xl group-hover:text-[#C9A347]/10 transition-colors">
                {speaker.id.toString().padStart(2, '0')}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{speaker.flag}</span>
                  <span className="text-[#C9A347] text-[10px] font-bold uppercase tracking-tighter flex items-center gap-1">
                    <MapPin size={10} /> {speaker.country}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-3 flex items-start gap-2 group-hover:text-[#C9A347] transition-colors">
                  <User size={18} className="mt-1 text-[#C9A347] flex-shrink-0" />
                  {speaker.name}
                </h3>

                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Quote size={14} className="text-[#C9A347] flex-shrink-0 mt-1 rotate-180" />
                    <p className="text-white/60 text-sm leading-relaxed italic font-light">
                      {speaker.theme}
                    </p>
                  </div>
                </div>
              </div>

              {/* Detalhe Decorativo Inferior */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C9A347] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Footer da Secção */}
        <div className="mt-12 text-center">
          <p className="text-white/30 text-xs italic">
            * A lista de oradores inclui prelectores nacionais e internacionais de referência na jurisdição financeira.
          </p>
        </div>
      </div>
    </section>
  );
}