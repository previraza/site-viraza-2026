import { createElement, Fragment } from 'react';
import flowEditorImage from '@/assets/images/about/blog/flow-editor.png';
import noSignupImage from '@/assets/images/about/blog/no-signup.png';
import serverlessImage from '@/assets/images/about/blog/serverless.png';
import andreasThomasImage from '@/assets/images/about/founders/andreas-thomas.jpg';
import jamesPerkinsImage from '@/assets/images/about/founders/james-perkins.jpg';
import allisonPickensImage from '@/assets/images/about/investors/allison-pickens.jpg';
import andrewMiklasImage from '@/assets/images/about/investors/andrew-miklas.jpg';
import andyMcLoughlinImage from '@/assets/images/about/investors/andy-mc-loughlin.jpg';
import antWilsonImage from '@/assets/images/about/investors/ant-wilson.jpg';
import liuJiangImage from '@/assets/images/about/investors/liu-jiang.jpg';
import paulCopplestoneImage from '@/assets/images/about/investors/paul-copplestone.jpg';
import roryWildingImage from '@/assets/images/about/investors/rory-wilding.jpg';
import theoBrowneImage from '@/assets/images/about/investors/theo-browne.jpg';
import timothyChenImage from '@/assets/images/about/investors/timothy-chen.jpg';
import tomPrestonWernerImage from '@/assets/images/about/investors/tom-preston-werner.jpg';

export const aboutContentData = {
  title: createElement(
    Fragment,
    null,
    'Solutions IT ',
    createElement('br', { className: 'inline sm:hidden xl:inline' }),
    createElement(
      'span',
      { className: 'sm:hidden xl:inline' },
      'pour une ',
      createElement('mark', null, 'transformation'),
      '\n',
      createElement('mark', null, 'numérique'),
      ' software.',
    ),
    createElement(
      'span',
      { className: 'hidden sm:inline xl:hidden' },
      'for ',
      createElement('mark', null, 'fast '),
      '\n',
      createElement('mark', null, 'and scalable'),
      ' réussie.',
    ),
  ),
  description: createElement(
    Fragment,
    null,
    'Fondée par des experts en technologies digitales, ',
    createElement('span', { className: 'font-medium text-foreground' }, 'Viraza'),
    ' conçoit des solutions IT innovantes pour ',
    createElement('span', { className: 'font-medium text-foreground' }, "l'éducation et les entreprises,"),
    ' avec une expertise reconnue en développement web, cloud et intelligence artificielle.',
  ),
  values: [
    {
      title: 'Qualité',
      description: "Nous livrons des solutions robustes et performantes, testées et validées avant chaque déploiement.",
    },
    {
      title: 'Innovation',
      description: "Nous restons à la pointe de la technologie pour offrir les meilleures solutions à nos clients.",
    },
    {
      title: 'Proximité',
      description: "Chaque client est unique. Nous privilégions l'écoute et l'échange pour comprendre vos vrais besoins.",
    },
    {
      title: 'Engagement',
      description: "Nous nous engageons sur la qualité, les délais et la satisfaction de nos clients.",
    },
    {
      title: 'Sécurité',
      description: "La protection de vos données est notre priorité absolue. Conformité RGPD garantie.",
    },
    {
      title: 'Accompagnement',
      description: "Du conseil à la maintenance, nous sommes présents à chaque étape de votre projet.",
    },
  ],
  team: {
    title: "L'équipe qui construit Viraza chaque jour.",
    subtitle: 'Passionnés par la technologie et animés par l\'innovation.',
    badgeLabel: "L'Équipe",
    qaItems: [
      {
        question: "Quelle est la mission de Viraza ?",
        answer:
          "Notre mission est de rendre la technologie accessible et utile pour les entreprises et les institutions éducatives. Nous croyons que le numérique est un levier puissant de développement et nous voulons accompagner nos clients dans cette transformation avec des solutions concrètes et adaptées.",
      },
      {
        question: "Qu'est-ce qui vous rend fiers chez Viraza ?",
        answer:
          "Nous sommes fiers de créer des solutions qui ont un impact réel. Voir nos clients utiliser Syrcow, MyEduc 360 ou Snen au quotidien et constater les gains d'efficacité est notre plus belle récompense. Notre équipe est soudée, compétente et animée par une vraie passion pour la technologie.",
      },
      {
        question: "Quel a été le plus grand défi ?",
        answer:
          "Le plus grand défi est de concilier innovation et accessibilité. Nous voulons des solutions avancées, mais nous devons rester accessibles et adaptées au contexte local. Chaque projet est un nouveau défi qui nous pousse à nous dépasser.",
      },
    ],
    quote: createElement(
      Fragment,
      null,
      `"Nous avons fondé Viraza avec la vision de créer des solutions digitales qui transforment réellement les organisations. Nous croyons que la technologie bien conçue peut simplifier la vie, améliorer l'éducation et booster la compétitivité des entreprises."`,
    ),
    founders: [
      {
        name: 'James Perkins',
        title: 'Founder and CEO',
        imageSrc: jamesPerkinsImage.src,
      },
      {
        name: 'Andreas Thomas',
        title: 'Founder and CTO',
        imageSrc: andreasThomasImage.src,
      },
    ],
    // TODO: replace with Viraza founders' photos and info
  },
  investors: {
    label: 'Partenaires',
    heading: createElement(
      Fragment,
      null,
      'Soutenus par ',
      createElement('mark', null, 'des partenaires de confiance'),
      "",
    ),
    description:
      "Viraza collabore avec des partenaires technologiques et institutionnels de premier plan pour offrir des solutions toujours plus performantes.",
    list: [
      {
        name: 'Andy McLoughlin',
        role: 'Managing Partner,\r\nUncork Capital',
        imageSrc: andyMcLoughlinImage.src,
      },
      {
        name: 'Timothy Chen',
        role: 'GP, Essence VC',
        imageSrc: timothyChenImage.src,
      },
      {
        name: 'Liu Jiang',
        role: 'GP, Sunflower Capital',
        imageSrc: liuJiangImage.src,
      },
      {
        name: 'Allison Pickens',
        role: 'GP, The New Normal Fund',
        imageSrc: allisonPickensImage.src,
      },
      {
        name: 'Andrew Miklas',
        role: 'Former CTO, PageDuty',
        imageSrc: andrewMiklasImage.src,
      },
      {
        name: 'Tom Preston-Werner',
        role: 'Former CEO, GitHub',
        imageSrc: tomPrestonWernerImage.src,
      },
      {
        name: 'Theo Browne',
        role: 'CEO, Ping Labs',
        imageSrc: theoBrowneImage.src,
      },
      {
        name: 'Paul Copplestone',
        role: 'CEO, Supabase',
        imageSrc: paulCopplestoneImage.src,
      },
      {
        name: 'Ant Wilson',
        role: 'CTO, Supabase',
        imageSrc: antWilsonImage.src,
      },
      {
        name: 'Rory Wilding',
        role: 'Head of Growth, Supabase',
        imageSrc: roryWildingImage.src,
      },
    ],
  },
  blog: {
    label: 'Blog',
    heading: createElement(
      Fragment,
      null,
      'Explorez nos articles, astuces et actualités',
      createElement('br'),
      createElement('span', { className: 'text-gray-60' }, "directement de l'équipe Viraza."),
    ),
    ctaLabel: 'Read all stories',
    ctaHref: '/blog',
    cards: [],
  },
};

export const aboutBlogFallbackImages = [
  flowEditorImage.src,
  serverlessImage.src,
  noSignupImage.src,
] as const;
