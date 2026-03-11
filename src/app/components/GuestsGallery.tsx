import { User, MapPin, Award, GraduationCap } from "lucide-react";

// Estrutura de dados unificada
// const guestCategories = [
//   {
//     title: "Membros da OISC-CPLP",
//     members: [
//       { id: 1, name: "Vital do Rego Filho", role: "Presidente do TCU", country: "Brasil", image: "" },
//       { id: 2, name: "Ana Maria Gemo Bié", role: "Presidente do Tribunal Administrativo", country: "Moçambique", image: "" },
//       { id: 3, name: "Filipa Urbano Calvão", role: "Presidente do Tribunal de Contas", country: "Portugal", image: "" },
//       { id: 4, name: "Ricardino Costa Alegre", role: "Presidente do Tribunal de Contas", country: "S. Tomé e Príncipe", image: "" },
//     ]
//   },
//   {
//     title: "Convidados de Honra",
//     members: [
//       { id: 5, name: "Gareth Davies", role: "Auditor Geral do Reino Unido", country: "Inglaterra", image: "" },
//       { id: 6, name: "Wynand Wentzel", role: "Director Executivo da AFROSAI-E", country: "África do Sul", image: "" },
//       { id: 7, name: "Pierre Moscovici", role: "Presidente da JURISAI / Cour des comptes", country: "França", image: "" },
//       { id: 8, name: "Marco Villas Boas", role: "Dir. Geral da Escola Superior da Magistratura", country: "Brasil", image: "" },
//       { id: 9, name: "Marco António da Silva Modes", role: "Procurador-Geral do MPC - Tocantins", country: "Brasil", image: "" },
//     ]
//   },
//   {
//     title: "Observadores Internacionais",
//     members: [
//       { id: 10, name: "Edilson de Sousa Silva", role: "Presidente da ATRICON", country: "Brasil", theme: "Diálogos Institucionais e Boa Administração", image: "" },
//       { id: 11, name: "Nelson Pellegrini", role: "Presidente da ABRACON", country: "Brasil", theme: "LINDB e Balizas do Controle Externo", image: "" },
//       { id: 13, name: "Benjamin Zymler", role: "Ministro do TCU / Sec. Geral OISC-CPLP", country: "Brasil", image: "" },
//       { id: 14, name: "Mirian Radiziane", role: "Presidente da ASUR", country: "Argentina", image: "" },
//     ]
//   },
//   {
//     title: "Corpo de Conselheiros",
//     members: [
//       { id: 15, name: "Marcos Peixoto", role: "Conselheiro TCE-RS", country: "Brasil", image: "" },
//       { id: 16, name: "Edilberto Pontes", role: "Conselheiro TCE-CE", country: "Brasil", image: "" },
//       { id: 17, name: "Andre de Matos", role: "Conselheiro TCE-TO", country: "Brasil", theme: "Atividade Financeira e Papel de Controle", image: "" },
//       { id: 18, name: "Marcus Presidio", role: "Conselheiro TCE-BA", country: "Brasil", image: "" },
//       { id: 20, name: "Sebastião Helvécio", role: "Conselheiro TCE-MG", country: "Brasil", theme: "Jurisdição Inclusiva", image: "" },
//       { id: 21, name: "Fábio Nogueira", role: "Presidente TCE-PB", country: "Brasil", image: "" },
//     ]
//   },
//   {
//     title: "Académicos e Especialistas",
//     members: [
//       { id: 23, name: "Maria Santana Milhomem", role: "Reitora da UFT", country: "Brasil", theme: "Conhecimento, Inovação e Controlo Externo", image: "" },
//       { id: 24, name: "Jorge Bacelar Gouveia", role: "Professor Doutor", country: "Portugal", theme: "Sustentabilidade Fiscal", image: "" },
//       { id: 25, name: "Luciano Vieira de Araújo", role: "Professor da USP", country: "Brasil", theme: "IA Generativa: Do Texto à Tarefa", image: "" },
//       { id: 28, name: "Dra. Carina Leite", role: "Especialista em Saúde Ocupacional", country: "Portugal", theme: "Bem-Estar Institucional", image: "" },
//       { id: 33, name: "Marina Faraco Siqueira e Silva", role: "Professora PUC/SP", country: "Brasil", theme: "Arquitetura Constitucional", image: "" },
//       { id: 38, name: "José Fontes", role: "Prof. Catedrático Academia Militar", country: "Portugal", theme: "Consolidação da Jurisdição Financeira", image: "" },
//     ]
//   }
// ];

const guestCategories = [
  {
    title: "Membros da OISC-CPLP",
    members: [
      { id: "01", name: "Vital do Rego Filho", role: "Presidente do TCU", country: "Brasil", image: "/photos/p01.png" },
      { id: "02", name: "Ana Maria Gemo Bié", role: "Presidente do Tribunal Administrativo", country: "Moçambique", image: "/photos/p02.png" },
      { id: "03", name: "Filipa Urbano Calvão", role: "Presidente do Tribunal de Contas", country: "Portugal", image: "/photos/p03.png" },
      { id: "04", name: "Ricardino Costa Alegre", role: "Presidente do Tribunal de Contas", country: "S. Tomé e Príncipe", image: "/photos/p04.png" },
    ]
  },
  {
    title: "Convidados de Honra",
    members: [
      { id: "05", name: "Gareth Davies", role: "Auditor Geral do Reino Unido", country: "Inglaterra", image: "/photos/p05.png" },
      { id: "06", name: "Wynand Wentzel", role: "Director Executivo da AFROSAI-E", country: "África do Sul", image: "/photos/p06.png" },
      { id: "07", name: "Pierre Moscovici", role: "Presidente da JURISAI / Cour des comptes", country: "França", image: "/photos/p07.png" },
      { id: "08", name: "Marco Villas Boas", role: "Dir. Geral da Escola Superior da Magistratura", country: "Brasil", image: "/photos/p08.png" },
      { id: "09", name: "Marco António da Silva Modes", role: "Procurador-Geral do MPC - Tocantins", country: "Brasil", image: "/photos/p09.png" },
    ]
  },
  {
    title: "Convidados Observadores",
    members: [
      { id: "10", name: "Edilson de Sousa Silva", role: "Presidente da ATRICON", country: "Brasil", theme: "Diálogos Institucionais e Boa Administração", image: "/photos/p10.png" },
      { id: "11", name: "Nelson Pellegrini", role: "Presidente da ABRACON", country: "Brasil", theme: "LINDB e Balizas do Controle Externo", image: "/photos/p11.png" },
      { id: "12", name: "Inaldo Araújo", role: "Presidente do IRB", country: "Brasil", theme: "Cooperação Internacional", image: "/photos/p12.png" },
      { id: "13", name: "Benjamin Zymler", role: "Ministro do TCU / Sec. Geral OISC-CPLP", country: "Brasil", image: "/photos/p13.png" },
      { id: "14", name: "Mirian Radiziane", role: "Presidente da ASUR", country: "Argentina", image: "" }, // p14 não listado no seu ls
    ]
  },
  {
    title: "Conselheiros",
    members: [
      { id: "15", name: "Marcos Peixoto", role: "Conselheiro TCE-RS", country: "Brasil", image: "/photos/p15.png" },
      { id: "16", name: "Edilberto Pontes", role: "Conselheiro TCE-CE", country: "Brasil", image: "/photos/p16.png" },
      { id: "17", name: "Andre de Matos", role: "Conselheiro TCE-TO", country: "Brasil", theme: "Atividade Financeira e Papel de Controle", image: "/photos/p17.png" },
      { id: "18", name: "Marcus Presidio", role: "Conselheiro TCE-BA", country: "Brasil", image: "/photos/p18.png" },
      { id: "19", name: "Júlio Pinheiro", role: "Conselheiro TCE-AM", country: "Brasil", image: "/photos/p19.png" },
      { id: "20", name: "Sebastião Helvécio", role: "Conselheiro TCE-MG", country: "Brasil", theme: "Jurisdição Inclusiva", image: "/photos/p20.png" },
      { id: "21", name: "Fábio Nogueira", role: "Presidente TCE-PB", country: "Brasil", image: "/photos/p21.png" },
      { id: "22", name: "Joaquim Kennedy N. Barros", role: "Presidente TCE-PI", country: "Brasil", image: "/photos/p22.png" },
    ]
  },
  {
    title: "Académicos e Outros Convidados",
    members: [
      { id: "23", name: "Maria Santana Milhomem", role: "Reitora da UFT", country: "Brasil", theme: "Conhecimento, Inovação e Controlo Externo", image: "/photos/p23.png" },
      { id: "24", name: "Jorge Bacelar Gouveia", role: "Professor Doutor", country: "Portugal", theme: "Sustentabilidade Fiscal", image: "/photos/p24.png" },
      { id: "25", name: "Luciano Vieira de Araújo", role: "Professor da USP", country: "Brasil", theme: "IA Generativa: Do Texto à Tarefa", image: "/photos/p25.png" },
      { id: "26", name: "Suzana Gilioli", role: "Professora UFT", country: "Brasil", image: "/photos/p26.png" },
      { id: "27", name: "Waldecy Rodrigues", role: "Professor UFT", country: "Brasil", image: "/photos/p27.png" },
      { id: "28", name: "Dra. Carina Leite", role: "Especialista em Saúde Ocupacional", country: "Portugal", theme: "Bem-Estar Institucional", image: "" }, // p28 não listado
      { id: "29", name: "Aly Elias Lalá", role: "Intérprete de Gestão Pública", country: "Moçambique", image: "/photos/p29.png" },
      { id: "30", name: "Wanderlei Barbosa Campos", role: "Governador de Palmas", country: "Brasil", image: "/photos/p30.png" },
      { id: "33", name: "Marina Faraco Siqueira e Silva", role: "Professora PUC/SP", country: "Brasil", theme: "Arquitetura Constitucional", image: "/photos/p33.png" },
      { id: "37", name: "Augusto Nardes", role: "Ministro do TCU", country: "Brasil", theme: "Governança Pública", image: "/photos/p37.png" },
      { id: "38", name: "José Fontes", role: "Prof. Catedrático Academia Militar", country: "Portugal", theme: "Consolidação da Jurisdição Financeira", image: "/photos/p38.png" },
      { id: "39", name: "Eduardo Vera-Cruz", role: "Professor Doutor Univ. Lisboa", country: "Portugal", image: "/photos/p39.png" },
    ]
  }
];

export function GuestsGallery() {
  return (
    <section id="convidados" className="py-24 bg-[#0A2540]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Secção */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C9A347]" />
            <span className="text-[#C9A347] text-xs font-bold tracking-[0.3em] uppercase">Protocolo Institucional</span>
            <div className="h-px w-12 bg-[#C9A347]" />
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Convidados e <span className="text-[#C9A347]">Dignitários</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Presenças confirmadas das mais altas instâncias de controlo externo e figuras proeminentes da magistratura internacional.
          </p>
        </div>

        {guestCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-20 last:mb-0">
            {/* Título da Categoria */}
            <div className="flex items-center gap-6 mb-10">
              <h3 className="text-[#C9A347] font-bold uppercase tracking-[0.2em] text-xs whitespace-nowrap">
                {category.title}
              </h3>
              <div className="h-px w-full bg-[#C9A347]/10" />
            </div>

            {/* Grid de Membros */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {category.members.map((person) => (
                <div 
                  key={person.id} 
                  className="group bg-white/[0.02] border border-white/5 hover:border-[#C9A347]/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Container da Foto */}
                  <div className="aspect-[4/5] overflow-hidden bg-slate-900/50 relative">
                    {person.image ? (
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 group-hover:scale-100"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/[0.03] group-hover:text-[#C9A347]/10 transition-colors">
                        <User size={80} />
                      </div>
                    )}
                    
                    {/* Overlay Decorativo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-3 left-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={10} className="text-[#C9A347]" />
                        <span className="text-[#C9A347] text-[9px] font-bold uppercase tracking-widest">
                          {person.country}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Detalhes do Convidado */}
                  <div className="p-5">
                    <h4 className="text-white font-bold text-sm mb-1.5 leading-tight group-hover:text-[#C9A347] transition-colors">
                      {person.name}
                    </h4>
                    <p className="text-white/40 text-[10px] leading-relaxed font-light italic h-8 line-clamp-2">
                      {person.role}
                    </p>
                    
                    {/* Badge de Palestrante */}
                    {'theme' in person && (
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <p className="text-white/60 text-[10px] leading-snug font-light italic group-hover:text-white/80 transition-colors">
                          <span className="text-[#C9A347] font-bold not-italic mr-1 opacity-80">Tema:</span> 
                          "{person.theme}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Nota de Protocolo */}
        <div className="mt-16 p-8 border border-white/5 bg-white/[0.01] text-center rounded-sm">
          <p className="text-white/20 text-[11px] tracking-wide">
             A ORDEM DE PRECEDÊNCIA SEGUE AS NORMAS DO PROTOCOLO INSTITUCIONAL DO TRIBUNAL DE CONTAS DE ANGOLA.
          </p>
        </div>

      </div>
    </section>
  );
}