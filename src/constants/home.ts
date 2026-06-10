import { APP_URL, GITHUB_URL, SIGN_UP_URL } from '@/configs/website-config';

export const homeHeaderLinks = {
  social: [
    { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/virazait' },
    { id: 'github', label: 'GitHub', href: GITHUB_URL },
  ],
  auth: [
    { id: 'contact', label: 'Contact', href: '/contact' },
    { id: 'rendezvous', label: 'Prenez rendez-vous', href: SIGN_UP_URL },
  ],
} as const;

export const homeContentData = {
  hero: {
    title: 'Digitalisez votre entreprise\navec Viraza',
    description:
      'Votre partenaire pour la transformation digitale en RDC. Donnez un coup d\'accélérateur à votre entreprise grâce à nos solutions digitales innovantes.',
    primaryCta: { label: 'Découvrir nos solutions', href: '/#services' },
    secondaryCta: { label: 'Nous contacter', href: '/contact' },
    poster: { src: '', width: 1533, height: 908 },
    videos: [],
    logos: [],
  },
  services: {
    heading: 'Nos services',
    subheading: 'CE QUE NOUS FAISONS',
    description: 'Nous fournissons un service exclusif pour votre entreprise avec des solutions technologiques de pointe.',
    link: { label: 'Voir tous les services', href: '/contact' },
    items: [
      {
        icon: '/icons/header/glossary.svg',
        title: 'Web Development',
        description: 'Sites web et applications sur mesure avec React, Next.js, Tailwind CSS pour des performances optimales.',
      },
      {
        icon: '/icons/header/blog.svg',
        title: 'UI/UX Design',
        description: 'Interfaces intuitives et attractives qui reflètent votre identité de marque et captivent votre audience.',
      },
      {
        icon: '/icons/header/changelog.svg',
        title: 'Digital Marketing',
        description: 'Stratégies omnicanales pour maximiser votre présence en ligne et générer plus de trafic ciblé.',
      },
      {
        icon: '/icons/header/case-studies.svg',
        title: 'Business Analysis',
        description: 'Analyse approfondie de votre secteur pour identifier les opportunités de croissance.',
      },
      {
        icon: '/icons/header/glossary.svg',
        title: 'Cloud Services',
        description: 'Infrastructure cloud scalable pour une infrastructure IT résiliente et performante.',
      },
      {
        icon: '/icons/header/blog.svg',
        title: 'IT Consulting',
        description: 'Accompagnement stratégique pour définir votre feuille de route digitale.',
      },
    ],
  },
  products: {
    heading: 'Nos solutions',
    subheading: 'PRODUITS',
    description: 'Des innovations technologiques conçues pour transformer l\'éducation et les services publics en RDC.',
    items: [
      {
        title: 'MyEduc',
        tagline: 'Plateforme de gestion scolaire nouvelle génération',
        description: 'Solution complète de gestion scolaire pour l\'enseignement supérieur et secondaire. MyEduc digitalise l\'ensemble des processus administratifs, pédagogiques et financiers des établissements éducatifs.',
        features: ['Gestion des inscriptions et scolarité', 'Suivi pédagogique et notes', 'Paiements en ligne', 'Communication parents-école', 'Tableaux de bord analytiques'],
        gradient: 'from-emerald to-teal',
      },
      {
        title: 'SNEN',
        tagline: 'Système de Numérisation de l\'Enseignement National',
        description: 'Plateforme nationale de digitalisation du système éducatif. SNEN permet au ministère de l\'enseignement de centraliser, suivre et analyser les données de tous les établissements du pays.',
        features: ['Cartographie des établissements', 'Suivi des effectifs', 'Gestion des enseignants', 'Statistiques nationales', 'Rapports automatisés'],
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        title: 'Syrcow',
        tagline: 'Écosystème de solutions connectées',
        description: 'Plateforme mutualisée de services et d\'applications interconnectés. Syrcow fédère l\'ensemble des outils et services numériques de l\'écosystème Viraza en une expérience unifiée.',
        features: ['Interconnexion des services', 'API unifiée', 'Authentification centralisée', 'Monitoring en temps réel', 'Scalabilité horizontale'],
        gradient: 'from-purple-500 to-pink-500',
      },
      {
        title: 'SRIP & SYPROC',
        tagline: 'Solutions gouvernementales',
        description: 'Système de Recensement et d\'Identification de la Population (SRIP) et Système de Pilotage des Ressources Opérationnelles et Commerciales (SYPROC). Des solutions sur mesure pour l\'administration publique.',
        features: ['Recensement biométrique', 'Gestion des ressources', 'Pilotage opérationnel', 'Rapports gouvernementaux', 'Sécurité des données'],
        gradient: 'from-amber-500 to-orange-500',
      },
    ],
  },
  whyUs: {
    heading: 'Pourquoi nous choisir',
    subheading: '5+ ANS D\'EXPÉRIENCE',
    description: 'Plus de 5 ans d\'expérience à offrir des services informatiques de qualité en RD Congo.',
    stats: [
      { value: '96+', label: 'Projets terminés' },
      { value: '99%', label: 'Clients satisfaits' },
      { value: '10+', label: 'Experts qualifiés' },
      { value: '6+', label: 'Prix honorables' },
    ],
    features: [
      {
        title: 'Croissance de l\'entreprise',
        description: 'Transférez efficacement les idées phares avant leur commercialisation avec notre accompagnement stratégique.',
      },
      {
        title: 'Produits de qualité',
        description: 'Des solutions robustes et évolutives, développées avec les meilleures technologies du marché.',
      },
      {
        title: 'Support 24/7',
        description: 'Une équipe dédiée disponible à tout moment pour vous accompagner et résoudre vos problèmes.',
      },
      {
        title: 'Sécurité de haut niveau',
        description: 'Protection maximale de vos données avec des protocoles de sécurité avancés et une infrastructure sécurisée.',
      },
    ],
  },
  process: {
    heading: 'Notre processus',
    subheading: 'COMMENT NOUS PROCÉDONS',
    description: 'Une méthodologie éprouvée pour garantir le succès de vos projets.',
    steps: [
      {
        number: '01',
        title: 'Sélection du projet',
        description: 'Nous analysons vos besoins et définissons ensemble le périmètre du projet pour garantir une collaboration réussie.',
      },
      {
        number: '02',
        title: 'Analyse du projet',
        description: 'Étude approfondie des exigences techniques et fonctionnelles pour concevoir une solution adaptée.',
      },
      {
        number: '03',
        title: 'Plan et exécution',
        description: 'Mise en œuvre agile avec des livraisons itératives pour un contrôle qualité optimal.',
      },
      {
        number: '04',
        title: 'Livraison du résultat',
        description: 'Déploiement, formation et accompagnement post-livraison pour assurer votre autonomie.',
      },
    ],
  },
  cta: {
    heading: 'Prêt à digitaliser votre entreprise ?',
    subheading: 'Contactez-nous dès aujourd\'hui pour une consultation gratuite.',
    buttonLabel: 'Contactez-nous',
    buttonHref: '/contact',
  },
};

export const homePageData = {
  pathname: '/',
  metadata: {
    tagline: 'Transformation Digitale en RDC',
    description: 'Viraza IT Solutions - Votre partenaire pour la transformation digitale en RDC. Solutions innovantes pour accélérer votre croissance.',
    pathname: '/',
  },
};
