export type Lang = 'es' | 'en';

export interface NavTrans {
  about: string;
  skills: string;
  projects: string;
  contact: string;
}

export interface HeroTrans {
  badge: string;
  headline: string;
  description: string;
  backgroundTitle: string;
  backgroundText: string;
  adaptabilityTitle: string;
  adaptabilityText: string;
  ctaProjects: string;
  ctaContact: string;
  techStack: string;
  codeFilename: string;
  databaseEngine: string;
  databaseValue: string;
  cyclingBadge: string;
}

export interface MarqueeItem {
  icon: string;
  label: string;
}

export interface FooterTrans {
  copyright: string;
  links: string[];
}

export interface Translations {
  layout: { title: string };
  nav: NavTrans;
  hero: HeroTrans;
  marquee: MarqueeItem[];
  footer: FooterTrans;
}

export const translations: Record<Lang, Translations> = {
  es: {
    layout: { title: 'Irvin Cortez | Desarrollador Backend' },
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Disponible para Trabajo Remoto',
      headline:
        'Irvin Cortez: <span class="text-primary">Desarrollador Backend</span> &amp; Especialista Laravel',
      description:
        'Construyendo aplicaciones robustas con Laravel, Livewire y Filament. Apasionado por el testing, los flujos de trabajo con agentes de IA y el ciclismo.',
      backgroundTitle: 'TRAYECTORIA',
      backgroundText:
        'Técnico en Desarrollo de Software especializado en backend con Laravel, C# .NET y SQL (PostgreSQL, MariaDB, SQL Server). Experiencia en múltiples proyectos desarrollando funcionalidades e integraciones, enfocado en calidad, rendimiento y entrega de valor.',
      adaptabilityTitle: 'ADAPTABILIDAD',
      adaptabilityText:
        'Desarrollador backend comprometido con el aprendizaje continuo y la visión integral del desarrollo. Exploro infraestructura, despliegue y automatización para construir soluciones más sólidas.',
      ctaProjects: 'Ver Proyectos',
      ctaContact: 'Contactar',
      techStack: 'Stack Tecnológico y Herramientas',
      codeFilename: 'ProfileController.php',
      databaseEngine: 'MOTOR DE BASE DE DATOS',
      databaseValue: 'PostgreSQL / MariaDB / SQL Server',
      cyclingBadge: 'APASIONADO DEL CICLISMO',
    },
    marquee: [
      { icon: 'badge-check', label: 'CONSTRUYO CON PRUEBAS' },
      { icon: 'bot', label: 'FLUJOS CON IA' },
      { icon: 'cloud', label: 'ESPECIALISTA REMOTO' },
      { icon: 'code', label: 'ARQUITECTURA LIMPIA' },
    ],
    footer: {
      copyright: '© 2024 Irvin. Hecho con Laravel y Tailwind.',
      links: ['GitHub', 'LinkedIn', 'Código Fuente'],
    },
  },

  en: {
    layout: { title: 'Irvin Cortez | Backend Developer' },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for Remote Work',
      headline: 'Irvin Cortez: <span class="text-primary">Backend Developer</span> &amp; Laravel Specialist',
      description:
        'Building robust applications with Laravel, Livewire and Filament. Passionate about testing, AI agent workflows, and cycling.',
      backgroundTitle: 'BACKGROUND',
      backgroundText:
        'Software Development Technician specialized in backend with Laravel, C# .NET and SQL (PostgreSQL, MariaDB, SQL Server). Experienced building features and integrations across multiple projects, focused on code quality, performance, and value delivery.',
      adaptabilityTitle: 'ADAPTABILITY',
      adaptabilityText:
        'Backend developer committed to continuous learning and a holistic view of development. I explore infrastructure, deployment, and automation to build more robust solutions.',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
      techStack: 'Tech Stack & Tools',
      codeFilename: 'ProfileController.php',
      databaseEngine: 'DATABASE ENGINE',
      databaseValue: 'PostgreSQL / MariaDB / SQL Server',
      cyclingBadge: 'CYCLING ENTHUSIAST',
    },
    marquee: [
      { icon: 'badge-check', label: 'BUILD WITH TEST' },
      { icon: 'bot', label: 'AI DRIVEN WORKFLOWS' },
      { icon: 'cloud', label: 'REMOTE SPECIALIST' },
      { icon: 'code', label: 'CLEAN ARCHITECTURE' },
    ],
    footer: {
      copyright: '© 2024 Irvin. Built with Astro & Tailwind.',
      links: ['GitHub', 'LinkedIn', 'Source Code'],
    },
  },
};

export function getTranslations(lang: string): Translations {
  return translations[lang as Lang] ?? translations.es;
}
