export type ServiceCategory = {
  title: string;
  subtitle: string;
  icon: "eye" | "pen" | "leaf" | "drop" | "lotus" | "laser" | "hair" | "hand";
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "O Olhar",
    subtitle: "Sobrancelhas e cílios",
    icon: "eye",
    items: [
      "Design de Sobrancelhas Personalizado",
      "Coloração de Sobrancelhas",
      "Flow Up / Brow Lamination",
      "Lash Lifting (cílios naturais)",
      "Extensão de Cílios (técnicas variadas)",
    ],
  },
  {
    title: "Micropigmentação",
    subtitle: "Traços sutis e duradouros",
    icon: "pen",
    items: ["Micro de Sobrancelhas (técnicas variadas)", "Micropigmentação Labial"],
  },
  {
    title: "Estética Facial",
    subtitle: "Pele saudável e luminosa",
    icon: "leaf",
    items: [
      "Limpeza de Pele Premium (com revitalização de olhos e lábios)",
      "Protocolo de Hidratação (Fios de Seda)",
      "Peeling Químico & Peeling Coreano",
      "Tratamento de Rejuvenescimento",
      "Tratamento para Manchas",
      "Microagulhamento Facial",
      "Drenagem Facial",
      "Glow Lips (Microagulhamento Labial)",
    ],
  },
  {
    title: "SPA Facial",
    subtitle: "Ritual completo de cuidado",
    icon: "drop",
    items: ["Experiência completa com hidratação, esfoliação, drenagem e máscara"],
  },
  {
    title: "SPA e Bem-estar",
    subtitle: "Corpo em equilíbrio",
    icon: "lotus",
    items: [
      "Massagem Relaxante",
      "Drenagem Linfática Corporal",
      "Drenagem Linfática para Gestantes",
      "Natural Slim (redução de medidas e celulite)",
      "Momento Relax: massagem relaxante + escalda pés",
      "Momento SPA Sancin: massagem, escalda pés, SPA facial e degustação",
      "Escalda Pés (com massagem podal)",
    ],
  },
  {
    title: "Depilação e Laser",
    subtitle: "Pele lisa com segurança",
    icon: "laser",
    items: [
      "Depilação a Laser",
      "Depilação com Cera",
      "Remoção a Laser (marroquina) — micropigmentação e tatuagem",
    ],
  },
  {
    title: "Hair Care",
    subtitle: "Cabelos com saúde e brilho",
    icon: "hair",
    items: [
      "Corte & Penteados",
      "Coloração e Retoque de Raiz",
      "Luzes e Mechas",
      "Tratamentos: Hidratação (L'Oréal/Wella), Reconstrução, Joico, Sensience CPR",
      "Alinhamentos: Botox Capilar, Progressiva, Fast Liss",
      "Escova",
      "Maquiagem Profissional",
    ],
  },
  {
    title: "Mãos e Pés",
    subtitle: "Detalhes bem cuidados",
    icon: "hand",
    items: [
      "Manicure e Pedicure tradicional",
      "Esmaltação em Gel & Blindagem",
      "Podologia Especializada",
      "Spa dos Pés",
    ],
  },
];
