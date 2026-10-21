export const site = {
  name: "Fábio Almeida",
  role: "Desenvolvedor Full Stack",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://almeidafabio-portifolio.vercel.app",
  description:
    "Desenvolvedor full stack com foco em TypeScript, React, Next.js e Node.js. Construo aplicações web completas, do banco de dados ao deploy.",
  location: "Brasil · Remoto",
  email: "fabio.633@hotmail.com",
  phone: "+55 98 98753-4423",
  whatsapp: "https://wa.me/5598987534423",
  linkedin: "https://www.linkedin.com/in/almeidafabioo/",
  github: "https://github.com/AlmeidaFabio",
  avatar: "/perfil-2026-studio.webp",
  availability: "Disponível para oportunidades e projetos",
} as const;

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Contato", href: "#contato" },
] as const;

export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
  repo?: string;
  live?: string;
  image?: string;
  cover?: "onepiece" | "quiz";
  featured?: boolean;
  stars?: number;
  highlight?: string;
};

export const projects: Project[] = [
  {
    slug: "chess-streamers",
    title: "Chess Streamers",
    year: "2026",
    summary:
      "Descubra streamers de xadrez do Chess.com: quem está ao vivo, busca por nome e favoritos, com links diretos para Twitch, YouTube e Kick.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    repo: "https://github.com/AlmeidaFabio/chess_streamers",
    live: "https://almeidafabio.github.io/chess_streamers/",
    image: "/projects/chess-streamers.webp",
    featured: true,
    highlight: "Busca, favoritos e status ao vivo",
  },
  {
    slug: "petisquinho",
    title: "Petisquinho",
    year: "2026",
    summary:
      "Blog estático em Astro e Tailwind com acessibilidade 100, cabeçalhos de segurança e checagens de build que bloqueiam link quebrado e imagem ausente.",
    tags: ["Astro", "TypeScript", "Tailwind CSS", "SEO"],
    repo: "https://github.com/AlmeidaFabio/petisquinho-blog",
    live: "https://petisquinho.com",
    image: "/projects/petisquinho.webp",
    featured: true,
    highlight: "Acessibilidade 100 no Lighthouse",
  },
  {
    slug: "onepiece-api",
    title: "OnePiece API",
    year: "2026",
    summary:
      "API REST de personagens de One Piece com CRUD completo, autenticação JWT, upload de imagens, testes com Vitest e ambiente Docker.",
    tags: ["Node.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    repo: "https://github.com/AlmeidaFabio/OnePiece-api",
    cover: "onepiece",
    featured: true,
    stars: 7,
    highlight: "JWT, testes e Docker",
  },
  {
    slug: "edital-em-questao",
    title: "Edital em Questão",
    year: "2025",
    summary:
      "Plataforma de simulados para concursos públicos: provas com timer, correção automática, estatísticas de desempenho e histórico de tentativas. Front em Next.js, API em Laravel.",
    tags: ["Next.js", "TypeScript", "Laravel", "PHP"],
    repo: "https://github.com/AlmeidaFabio/Next-e-questions",
    live: "https://e-questions.vercel.app",
    image: "/projects/edital-em-questao.webp",
    featured: true,
    highlight: "Simulados com timer e estatísticas",
  },
];

export const otherProjects: Project[] = [
  {
    slug: "quiz-multijogador",
    title: "Quiz Multijogador",
    year: "2026",
    summary:
      "Quiz em tempo real com salas, lobby, cronômetro no servidor e ranking final. Fastify + Socket.IO no back, React no front e Redis para escalar.",
    tags: ["Fastify", "Socket.IO", "Redis", "React"],
    repo: "https://github.com/AlmeidaFabio/quiz-multijogador-online",
    cover: "quiz",
  },
  {
    slug: "githubers",
    title: "GitHubers",
    year: "2023",
    summary:
      "Aplicação que busca usuários do GitHub e exibe perfil, avatar e informações do perfil em uma interface responsiva.",
    tags: ["React", "TypeScript"],
    repo: "https://github.com/AlmeidaFabio/githubers",
    live: "https://almeidafabio.github.io/githubers/",
  },
  {
    slug: "flashcards-cnu",
    title: "Flashcards CNU",
    year: "2025",
    summary:
      "Flashcards 3D para o Concurso Nacional Unificado, com dashboard de progresso, categorias por matéria e navegação acessível por teclado.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/AlmeidaFabio/next-cnu-flashcards",
    live: "https://next-cnu-flashcards.vercel.app",
  },
];

export const stack = [
  {
    group: "Front-end",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Astro", "JavaScript"],
  },
  {
    group: "Back-end",
    items: ["Node.js", "Fastify", "Express", "Prisma", "TypeORM", "JWT"],
  },
  {
    group: "Dados",
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "SQL"],
  },
  {
    group: "DevOps & ferramentas",
    items: ["Docker", "Git", "GitHub Actions", "Vitest", "Vercel", "Linux"],
  },
] as const;

export const learning = ["Arquitetura de software", "Observabilidade", "AWS"] as const;

export type Milestone = {
  year: string;
  title: string;
  description: string;
  tag: string;
};

export const milestones: Milestone[] = [
  {
    year: "2019",
    title: "Primeiras linhas",
    description:
      "HTML, CSS e JavaScript pelos cursos da B7Web. O começo da jornada, ainda sem saber onde ela ia dar.",
    tag: "Início",
  },
  {
    year: "2022",
    title: "Graduação em ADS",
    description:
      "Análise e Desenvolvimento de Sistemas pela Estácio. Base de lógica, banco de dados e engenharia de software.",
    tag: "Formação",
  },
  {
    year: "2023",
    title: "Primeiros projetos no ar",
    description:
      "GitHubers e a primeira versão do portfólio publicados. A transição de exercícios para coisas que qualquer pessoa podia abrir no navegador.",
    tag: "Projetos",
  },
  {
    year: "2024",
    title: "Back-end na prática",
    description:
      "APIs com Node, TypeScript, TypeORM e MySQL. Estudo de SOLID, padrões de projeto e testes automatizados.",
    tag: "Back-end",
  },
  {
    year: "2025",
    title: "Produtos completos",
    description:
      "Edital em Questão, ligando Next.js a uma API em Laravel, e os flashcards para o Concurso Nacional Unificado.",
    tag: "Full stack",
  },
  {
    year: "2026",
    title: "Full stack em produção",
    description:
      "OnePiece API com JWT e Docker, quiz multijogador com Socket.IO e Redis, e o Petisquinho em Astro.",
    tag: "Produção",
  },
];