import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ayoub Ouharda — CV & Portfolio',
  description:
    'Développeur web Full Stack (Java, Angular, Laravel, React), à l’aise en français et en anglais. Disponible en développement web et en relation client.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Ayoub Ouharda`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Développeur <strong className="text-stone-100">Full Stack</strong> basé à Béni Mellal / Nador (Maroc). Je
        conçois des applications web, des API REST et des solutions métier avec{' '}
        <strong className="text-stone-100">Java, Angular, Laravel et React</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Je maîtrise le <strong className="text-stone-100">français et l’anglais</strong> et je suis ouvert aux postes
        de <strong className="text-stone-100">développeur web</strong> comme aux missions de{' '}
        <strong className="text-stone-100">charge de clientèle / centre d’appels</strong> : écoute, compréhension des
        besoins et résolution de problèmes.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Télécharger mon CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Me contacter',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description:
    'Développeur Full Stack Java / Angular, je conçois des applications web et des solutions métier. Mon parcours combine projets freelance, conception d’API REST et travail en équipe agile, avec une expérience complémentaire en Laravel et React. Je recherche actuellement des opportunités en développement web, mais je suis également disposé à mettre ma communication et ma maîtrise du français et de l’anglais au service d’un poste en relation client ou centre d’appels.',
  aboutItems: [
    {label: 'Localisation', text: 'Béni Mellal / Nador, Maroc', Icon: MapIcon},
    {label: 'Langues', text: 'Français · Anglais · Arabe', Icon: FlagIcon},
    {label: 'Recherche', text: 'Développement web · Relation client FR/EN', Icon: SparklesIcon},
    {label: 'Formation', text: 'YouCode Nador (Simplon.co)', Icon: AcademicCapIcon},
    {label: 'Expérience', text: 'Freelance · Stage PFA chez DEVTI', Icon: BuildingOffice2Icon},
    {label: 'Centres d’intérêt', text: 'Film making · Création de contenu', Icon: CalendarIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Langues & relation client',
    skills: [
      {name: 'Français — courant', level: 10},
      {name: 'Anglais — courant / technique', level: 9},
      {name: 'Arabe — langue maternelle', level: 10},
      {name: 'Communication & écoute client', level: 9},
      {name: 'Résolution de problèmes', level: 9},
    ],
  },
  {
    name: 'Développement front-end',
    skills: [
      {name: 'Angular', level: 9},
      {name: 'React JS', level: 8},
      {name: 'TypeScript', level: 8},
      {name: 'JavaScript', level: 8},
      {name: 'Tailwind CSS', level: 8},
      {name: 'Vue.js / Inertia.js', level: 7},
    ],
  },
  {
    name: 'Back-end & API',
    skills: [
      {name: 'Java & API REST', level: 9},
      {name: 'PHP / Laravel', level: 8},
      {name: 'Principes SOLID & MVC', level: 8},
      {name: 'Intégration d’IA (DeepSeek, RAG)', level: 7},
      {name: 'Python', level: 6},
    ],
  },
  {
    name: 'Bases de données & outils',
    skills: [
      {name: 'MySQL', level: 9},
      {name: 'Git / GitHub', level: 9},
      {name: 'PostgreSQL & SQLite', level: 7},
      {name: 'Docker & GitHub Actions', level: 7},
      {name: 'Postman / API Dog', level: 8},
      {name: 'Figma · UML · Jira', level: 7},
      {name: 'MongoDB', level: 6},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Agrifober',
    description:
      'Plateforme web et mobile d’assistance agricole : rapports des techniciens, suivi de la fertilisation et conseils personnalisés via un assistant IA (DeepSeek, RAG, API météo).',
    url: 'https://github.com/10LOKI/AgriFober',
    image: porfolioImage1,
  },
  {
    title: 'RestaurantAI',
    description:
      'API REST et interface React : recommandation de plats par IA, gestion des rôles, authentification Sanctum et traitements asynchrones (queues & jobs).',
    url: 'https://github.com/10LOKI/Restaurant-AI-Brigade',
    image: porfolioImage2,
  },
  {
    title: 'Loki-PHP',
    description:
      'Conception d’un framework PHP maison avec une architecture MVC structurée, sécurisée et évolutive (Clean Code, prévention XSS/SQLi).',
    url: 'https://github.com/10LOKI',
    image: porfolioImage3,
  },
  {
    title: 'LocalMart',
    description:
      'Plateforme e-commerce académique en Laravel, MySQL et Tailwind CSS. Rôle de Scrum Master : gestion fine des accès et optimisation des performances.',
    url: 'https://github.com/10LOKI/LocalMart',
    image: porfolioImage4,
  },
  {
    title: 'ActTogether',
    description:
      'Projet hackathon (2ᵉ place) : mise en relation des étudiants avec des missions solidaires. Coordination Scrum et architecture API React.',
    url: 'https://github.com/10LOKI/act2ogether',
    image: porfolioImage5,
  },
  {
    title: 'Portfolio 10LOKI',
    description:
      'Site portfolio personnel présentant les projets, le parcours et les compétences. Déployé sur GitHub Pages.',
    url: 'https://10loki.github.io/Portfolio-/',
    image: porfolioImage6,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2025 – 2027',
    location: 'YouCode Nador (Simplon.co)',
    title: 'Développement web Full Stack',
    content: (
      <p>
        Formation intensive aux technologies Java, Angular, Laravel, React et API REST, avec un travail régulier en
        équipe agile et des projets concrets livrés en autonomie.
      </p>
    ),
  },
  {
    date: '2024 – 2025',
    location: 'Université Sultan Moulay Slimane',
    title: '1ʳᵉ année en sciences physiques (PC)',
    content: <p>Année universitaire en sciences physiques, avant l’orientation vers le développement web.</p>,
  },
  {
    date: '2023 – 2024',
    location: 'Lycée Ezzerktouni',
    title: 'Baccalauréat sciences physiques',
    content: <p>Obtention du baccalauréat en sciences physiques.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Mai – Juin 2026 · 2 mois',
    location: 'DEVTI Technologie · Tanger',
    title: 'Développeur Full Stack — Stage PFA',
    content: (
      <p>
        Responsable backend et API mobile, et full stack de l’espace admin. Échanges directs avec le client pour cadrer
        les besoins, participation à la conception du projet et livraison des fonctionnalités en autonomie en équipe
        agile. <strong>Laravel 11 · Sanctum · Inertia.js · Vue.js · Flutter · MySQL</strong>
      </p>
    ),
  },
  {
    date: '2024 – Présent',
    location: 'Freelance',
    title: 'Consultant technique Full Stack',
    content: (
      <p>
        Accompagnement de clients de la définition du besoin jusqu’à la livraison : recueil des exigences, conception
        de la solution et suivi post-déploiement. Projets en e-commerce et automatisation métier, avec des échanges en
        français et en anglais. <strong>Laravel · React JS · MySQL · Tailwind CSS · API Design</strong>
      </p>
    ),
  },
];

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Parlons de votre projet.',
  description:
    'Un poste en développement web, une mission de relation client francophone/anglophone ou simplement une question : écrivez-moi, je réponds rapidement. Vous pouvez aussi télécharger mon CV depuis la section d’accueil.',
  items: [
    {
      type: ContactType.Email,
      text: 'ayoubouharda33@gmail.com',
      href: 'mailto:ayoubouharda33@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+212 684 093 893',
      href: 'tel:+212684093893',
    },
    {
      type: ContactType.Location,
      text: 'Béni Mellal / Nador, Maroc',
      href: 'https://www.google.com/maps/search/?api=1&query=Beni+Mellal+Maroc',
    },
    {
      type: ContactType.LinkedIn,
      text: 'linkedin.com/in/ayoub-ouharda/',
      href: 'https://www.linkedin.com/in/ayoub-ouharda/',
    },
    {
      type: ContactType.Github,
      text: 'github.com/10LOKI',
      href: 'https://github.com/10LOKI',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'GitHub', Icon: GithubIcon, href: 'https://github.com/10LOKI'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ayoub-ouharda/'},
];
