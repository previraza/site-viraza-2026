import { createElement, Fragment } from 'react';
import buildDeployConnectImage from '@/assets/images/home/build-deploy/connect.png';
import buildDeployDeployImage from '@/assets/images/home/build-deploy/deploy.png';
import buildDeployPreviewImage from '@/assets/images/home/build-deploy/preview.png';
import buildDeployShipImage from '@/assets/images/home/build-deploy/ship.png';
import buildDeployValidateImage from '@/assets/images/home/build-deploy/validate.png';
import ctaPosterImage from '@/assets/images/home/cta/poster.jpg';
import gatewayAuthDepthImage from '@/assets/images/home/gateway/auth-depth.png';
import heroPosterImage from '@/assets/images/home/hero/hero-poster.png';
import observeDashImage from '@/assets/images/home/observe/dash.png';
import portalDocsImage from '@/assets/images/home/portal/docs.png';
import portalKeysImage from '@/assets/images/home/portal/keys.png';
import portalZeroImage from '@/assets/images/home/portal/zero.png';
import { APP_URL, GITHUB_URL, SIGN_UP_URL } from '@/configs/website-config';
import { buildDeployTechnologyLogos, homePortfolioLogos } from '@/constants/logos';
import { Alignment, Fit } from '@rive-app/react-canvas';

export const homeHeaderLinks = {
  social: [
    { id: 'discord', label: 'Discord', href: 'https://viraza.net/discord' },
    { id: 'github', label: 'GitHub', href: GITHUB_URL, metric: '5.3k' },
  ],
  auth: [
    { id: 'login', label: 'Login', href: APP_URL },
    { id: 'signUp', label: 'Sign Up', href: SIGN_UP_URL },
  ],
} as const;

export const homeContentData = {
  hero: {
    title: "Votre partenaire numérique de confiance",
    description:
      "Viraza conçoit des solutions IT sur mesure pour transformer votre entreprise. De l'infrastructure cloud aux applications métier, nous accélérons votre transformation digitale.",
    primaryCta: { label: 'Start for free', href: APP_URL },
    secondaryCta: { label: 'View on GitHub', href: GITHUB_URL },
    poster: { src: heroPosterImage.src, width: 1533, height: 908 },
    videos: [
      { src: '/videos/home/hero-av1.mp4', type: 'video/mp4; codecs=av01' },
      { src: '/videos/home/hero.mp4', type: 'video/mp4; codecs=hvc1' },
      { src: '/videos/home/hero.webm', type: 'video/webm' },
    ],
    logos: homePortfolioLogos,
  },
  controlPlane: {
    heading: createElement(
      Fragment,
      null,
      'Une gamme complète de solutions digitales pour\n',
      createElement('mark', null, 'tous vos besoins IT.'),
    ),
    description:
      'Stop chercher des solutions disparates. Viraza vous propose un écosystème unifié d\'applications et services pour gérer votre éducation, votre entreprise et vos projets numériques.',
    riveDefaults: {
      src: '/rive/home/control-plane/control-plane.riv',
      fonts: {
        urls: {
          regular: '/rive/home/JetBrainsMono-Regular.ttf',
          medium: '/rive/home/JetBrainsMono-Medium.ttf',
        },
      },
      alignment: Alignment.Center,
      fit: Fit.Cover,
    },
    cards: [
      {
        id: 'branch',
        title: 'Syrcow',
        body: 'Notre solution de chatbot IA pour l\'éducation et l\'assistance. Accompagnez vos étudiants et collaborateurs 24/7 avec une intelligence artificielle sur mesure.',
        rive: {
          artboard: 'branch',
        },
      },
      {
        id: 'keys',
        title: 'MyEduc 360',
        body: 'Plateforme éducative tout-en-un. Gérez les inscriptions, les cours, les évaluations et le suivi pédagogique dans un environnement cloud sécurisé.',
        rive: {
          artboard: 'api',
          autoBind: false,
        },
      },
      {
        id: 'control',
        title: 'Snen',
        body: 'Solution de gestion administrative pour les établissements scolaires. Simplifiez la gestion des dossiers, des emplois du temps et des communications.',
        rive: {
          artboard: 'control',
          autoBind: false,
        },
      },
      {
        id: 'usage',
        title: 'Infogérance',
        body: 'Déléguez la gestion de votre infrastructure IT. Supervision, maintenance, sécurité et support — nous gérons tout pour vous.',
        rive: {
          artboard: 'usage',
          autoBind: false,
        },
      },
    ],
  },
  buildDeploy: {
    heading: 'Découvrez nos solutions phares pour la transformation digitale.',
    description:
      'Chez Viraza, nous développons des applications modernes qui répondent aux défis spécifiques de l\'éducation, de l\'administration et des services IT.',
    panels: [
      {
        id: 'connect',
        tabLabel: 'Syrcow',
        title: 'Syrcow — Assistant IA intelligent',
        subtitle: 'Chatbot éducatif et professionnel',
        body: 'Syrcow est notre chatbot dernier cri basé sur l\'IA générative. Il répond aux questions des étudiants, automatise le support et assiste vos équipes 24h/24 avec des réponses précises et contextualisées.',
        image: buildDeployConnectImage.src,
      },
      {
        id: 'deploy',
        tabLabel: 'MyEduc 360',
        title: 'MyEduc 360 — Plateforme éducative',
        subtitle: 'Gestion scolaire tout-en-un',
        body: 'Une plateforme complète pour les établissements d\'enseignement : gestion des inscriptions, planning des cours, suivi pédagogique, notes, communications et tableaux de bord en temps réel.',
        image: buildDeployDeployImage.src,
        hasLogos: true,
        logos: buildDeployTechnologyLogos,
      },
      {
        id: 'preview',
        tabLabel: 'Snen',
        title: 'Snen — Gestion administrative',
        subtitle: 'Simplifiez vos processus',
        body: "Snen digitalise l'ensemble de vos processus administratifs : dossiers élèves, emplois du temps, gestion du personnel, facturation et reporting. Fini le papier, place à l'efficacité.",
        image: buildDeployPreviewImage.src,
      },
      {
        id: 'ship',
        tabLabel: 'Infogérance',
        title: 'Infogérance IT — On s\'occupe de tout',
        subtitle: 'Gérez votre infrastructure en toute sérénité',
        body: "Déléguez la gestion complète de votre infrastructure IT : supervision 24/7, maintenance prédictive, sécurité proactive, sauvegarde et support technique. Vous vous concentrez sur votre métier, on gère le reste.",
        image: buildDeployShipImage.src,
      },
      {
        id: 'validate',
        tabLabel: 'Cloud',
        title: 'Solutions Cloud & Hébergement',
        subtitle: 'Infrastructure scalable et sécurisée',
        body: 'Déployez vos applications sur notre infrastructure cloud sécurisée. Hébergement haute disponibilité, sauvegarde automatisée et conformité RGPD pour toutes vos données sensibles.',
        image: buildDeployValidateImage.src,
        textTopClass: 'lg:pt-[7.875rem]',
      },
    ],
  },
  gateway: {
    heading:
      'Protect and control traffic at the edge. Offload access control and rate limiting to global gateways.',
    riveDefaults: {
      autoBind: true,
      alignment: Alignment.BottomCenter,
    },
    cards: [
      {
        title: 'Auth + Keys',
        body: 'Manage API keys end to end and control who can call what.',
        webgl: {
          imageSrc: gatewayAuthDepthImage.src,
          appearanceEffect: 'natural' as const,
          matrixCharSize: 12,
          backgroundCharSize: 85,
          backgroundColor: '#040406',
          backgroundCharColor: '#878787',
          objectColor1: '#bababa',
          objectColor2: '#bababa',
          objectColor3: '#bababa',
          depthIntensity: 4,
          symbolBalance: 21,
          blackPoint: 8,
        },
        useTextBackground: true,
        textWidthClass: 'max-w-88',
        gridClassName:
          'h-[clamp(20rem,76vw,26.25rem)] sm:h-[21rem] md:h-[24rem] xl:h-auto sm:col-start-1 sm:row-start-1 xl:col-start-1 xl:row-start-1',
      },
      {
        title: 'Global platform',
        body: 'Edge gateway enforces access and routes requests to the closest instance for low latency.',
        rive: {
          src: '/rive/home/gateway/global-platform.riv',
          fonts: { urls: { regular: '/rive/home/JetBrainsMono-Regular.ttf' } },
          fit: Fit.Cover,
          alignment: Alignment.TopCenter,
        },
        textWidthClass: 'max-w-90',
        gridClassName:
          'aspect-[505/902] sm:aspect-auto sm:h-auto sm:min-h-0 sm:col-start-2 sm:row-start-1 sm:row-span-2 xl:col-start-2 xl:row-span-2',
      },
      {
        title: 'Rate limits',
        body: 'Set limits per IP, user, or key and enforce them close to your users.',
        rive: {
          src: '/rive/home/gateway/rate-limits.riv',
          fonts: { urls: { regular: '/rive/home/JetBrainsMono-Regular.ttf' } },
        },
        gridClassName:
          'h-[clamp(20rem,76vw,26.25rem)] sm:h-[21rem] md:h-[24rem] xl:h-auto sm:col-start-1 sm:row-start-2 xl:col-start-1 xl:row-start-2',
      },
      {
        title: 'Validation',
        body: 'Enforce request rules early to catch bad traffic before it hits your API.',
        rive: {
          src: '/rive/home/gateway/validation.riv',
          stateMachines: 'State Machine 1',
        },
        gridClassName:
          'h-[clamp(20rem,76vw,26.25rem)] sm:h-[21rem] md:h-[24rem] xl:h-auto sm:col-start-1 sm:row-start-3 xl:col-start-3 xl:row-start-1',
      },
      {
        title: 'Analytics',
        body: 'Access real-time insights into your API usage without adding custom instrumentation.',
        rive: {
          src: '/rive/home/gateway/analytics.riv',
          autoBind: false,
        },
        textWidthClass: 'max-w-96',
        gridClassName:
          'h-[clamp(20rem,76vw,26.25rem)] sm:h-[21rem] md:h-[24rem] xl:h-auto sm:col-start-2 sm:row-start-3 xl:col-start-3 xl:row-start-2',
      },
    ],
  },
  production: {
    label: 'Pourquoi choisir Viraza',
    items: [
      {
        title: 'Expertise locale',
        text: "Viraza est une équipe d'experts passionnés basés en Afrique. Nous comprenons les enjeux locaux et proposons des solutions adaptées à votre contexte.",
      },
      {
        title: 'Accompagnement sur mesure',
        text: "Chaque projet est unique. Nous vous accompagnons de la conception à la maintenance, avec un suivi personnalisé et une écoute constante de vos besoins.",
      },
    ],
  },
  scale: {
    heading: createElement(
      Fragment,
      null,
      'Des solutions qui évoluent avec vous, de la PME à ',
      createElement('mark', null, "la grande entreprise"),
      '.',
    ),
    description:
      "Viraza vous accompagne à chaque étape de votre croissance. De l'audit initial à la solution industrielle, notre plateforme s'adapte à vos besoins.",
    buttonLabel: 'Nous contacter',
    buttonHref: 'https://viraza.net/contact',
    riveDefaults: {
      src: '/rive/home/scale/icons.riv',
      fit: Fit.Cover,
      alignment: Alignment.Center,
    },
    features: [
      {
        title: 'Solutions sur mesure',
        text: 'Chaque produit Viraza est conçu pour répondre à un besoin spécifique. Pas de solution standard, mais un accompagnement personnalisé.',
        rive: {
          artboard: 'main 1',
        },
      },
      {
        title: 'Technologie moderne',
        text: 'Nos applications utilisent les technologies les plus récentes : cloud, IA, et architectures scalables pour garantir performance et fiabilité.',
        rive: {
          artboard: 'main 2',
        },
      },
      {
        title: 'Pricing transparent',
        text: "Des tarifs clairs et adaptés à votre budget. Pas de frais cachés, pas de surprises. Un devis personnalisé pour chaque projet.",
        rive: {
          artboard: 'main 3',
        },
      },
      {
        title: 'Sécurité et conformité',
        text: 'Toutes nos solutions respectent les normes RGPD et les standards de sécurité les plus stricts. Vos données sont protégées.',
        rive: {
          artboard: 'main 4',
        },
      },
    ],
  },
  observe: {
    heading: 'Suivez vos projets en temps réel.',
    subheading: 'Chaque étape est visible. Chaque décision est tracée.',
    riveDefaults: {
      src: '/rive/home/observe/observe.riv',
      alignment: Alignment.BottomCenter,
    },
    mobileImage: observeDashImage.src,
    buttonLabel: 'En savoir plus',
    buttonHref: 'https://viraza.net/contact',
    columns: [
      {
        lead: 'Suivi de projet en temps réel.',
        rest: "Visualisez l'avancement de vos projets Viraza, les jalons atteints et les prochaines étapes depuis votre tableau de bord dédié.",
      },
      {
        lead: 'Rapports et analyses.',
        rest: "Accédez à des rapports détaillés sur l'utilisation de vos solutions, les performances et les indicateurs clés de votre activité.",
      },
      {
        lead: 'Support réactif.',
        rest: "Notre équipe est disponible pour vous assister. Suivez l'état de vos tickets, les temps de réponse et les résolutions apportées.",
      },
      {
        lead: 'Tableaux de bord personnalisés.',
        rest: "Configurez vos propres indicateurs et visualisez les données qui comptent vraiment pour votre entreprise.",
      },
    ],
  },
  portal: {
    heading: "Un accompagnement complet de A à Z.",
    subheading: 'De l\'audit à la maintenance, Viraza est votre partenaire IT.',
    buttonLabel: 'Nous contacter',
    buttonHref: 'https://viraza.net/contact',
    cards: [
      {
        text: 'Audit et conseil : nous analysons vos besoins et vous proposons la solution la mieux adaptée à votre contexte.',
        graphic: portalZeroImage.src,
        textWidthClass: 'max-w-[23.375rem]',
      },
      {
        text: 'Développement sur mesure : nos experts conçoivent et développent des applications parfaitement adaptées à vos processus métier.',
        graphic: portalDocsImage.src,
        textWidthClass: 'max-w-[25.6875rem]',
      },
      {
        text: "Maintenance et support : nous assurons le suivi, les mises à jour et l'assistance technique pour toutes nos solutions.",
        graphic: portalKeysImage.src,
        textWidthClass: 'max-w-[25.5625rem]',
      },
    ],
  },
  cta: {
    heading: 'Prêt à transformer votre entreprise avec le digital ?',
    subheading: 'Contactez-nous dès aujourd\'hui pour un audit gratuit de vos besoins IT.',
    buttonLabel: 'Contactez-nous',
    buttonHref: 'https://viraza.net/contact',
    poster: ctaPosterImage.src,
    videos: [
      { src: '/videos/home/cta.mp4', type: 'video/mp4; codecs=hvc1' },
      { src: '/videos/home/cta.webm', type: 'video/webm' },
    ],
  },
};

export const homePageData = {
  pathname: '/',
  metadata: {
    tagline: 'Votre partenaire numérique de confiance',
    description: "Viraza conçoit des solutions IT sur mesure pour l'éducation et les entreprises. Applications cloud, IA, chatbot et infogérance.",
    pathname: '/',
  },
};
