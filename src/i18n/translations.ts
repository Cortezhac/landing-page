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
        'Técnico en Desarrollo de Software especializado en backend. Experto en SQL (PostgreSQL, MariaDB, SQL Server) y versátil con experiencia en C# .NET.',
      adaptabilityTitle: 'ADAPTABILIDAD',
      adaptabilityText:
        'Enfocado en el aprendizaje continuo. Mejorando activamente mi inglés hacia B1 para integración global en equipos remotos.',
      ctaProjects: 'Ver Proyectos',
      ctaContact: 'Contactar',
      techStack: 'Stack Tecnológico y Herramientas',
      codeFilename: 'ProfileController.php',
      databaseEngine: 'MOTOR DE BASE DE DATOS',
      databaseValue: 'PostgreSQL / MariaDB / SQL Server',
      cyclingBadge: 'APASIONADO DEL CICLISMO',
    },
    marquee: [
      { icon: 'verified', label: 'TDD FIRST' },
      { icon: 'smart_toy', label: 'FLUJOS CON IA' },
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
        'Software Development Technician specialized in backend. Expert in SQL (PostgreSQL, MariaDB, SQL Server) and versatile with experience in C# .NET.',
      adaptabilityTitle: 'ADAPTABILITY',
      adaptabilityText:
        'Focused on continuous learning. Actively improving my English toward B1 for seamless global team integration.',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
      techStack: 'Tech Stack & Tools',
      codeFilename: 'ProfileController.php',
      databaseEngine: 'DATABASE ENGINE',
      databaseValue: 'PostgreSQL / MariaDB / SQL Server',
      cyclingBadge: 'CYCLING ENTHUSIAST',
    },
    marquee: [
      { icon: 'verified', label: 'TDD FIRST' },
      { icon: 'smart_toy', label: 'AI DRIVEN WORKFLOWS' },
      { icon: 'cloud', label: 'REMOTE SPECIALIST' },
      { icon: 'code', label: 'CLEAN ARCHITECTURE' },
    ],
    footer: {
      copyright: '© 2024 Irvin. Built with Laravel & Tailwind.',
      links: ['GitHub', 'LinkedIn', 'Source Code'],
    },
  },
};

export function getTranslations(lang: string): Translations {
  return translations[lang as Lang] ?? translations.es;
}
