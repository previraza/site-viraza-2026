import { BOOK_A_CALL_URL, GITHUB_URL } from '@/configs/website-config';

import type { IFooterMenuSection, IMenuSocialItem } from '@/types/common';

export const MENUS = {
  header: [
    {
      label: 'Resources',
      href: '/',
      children: [
        {
          label: 'Blog',
          href: '/blog',
          description: 'Read product updates and insights',
          icon: '/icons/header/blog.svg',
        },
        /*
        {
          label: 'Case studies',
          href: '/case-studies',
          description: 'Practical results from real deployments',
          icon: '/icons/header/case-studies.svg',
        },
        */
        {
          label: 'Changelog',
          href: '/changelog',
          description: 'Track what shipped, improved, and fixed',
          icon: '/icons/header/changelog.svg',
        },
        {
          label: 'Glossary',
          href: '/glossary',
          description: 'Clear definitions for API terms',
          icon: '/icons/header/glossary.svg',
        },
        {
          label: 'Événements',
          href: '/evenements',
          description: 'Webinaires et événements à venir',
          icon: '/icons/header/glossary.svg',
        },
      ],
    },
    { label: 'Projects', href: '/projects' },
    { label: 'Événements', href: '/evenements' },
    { label: 'Pricing', href: '/pricing' },
  ],
  footer: {
    description: 'Des solutions IT innovantes pour votre entreprise',
    copyright: '© 2026 Viraza Inc. All rights reserved.',
    main: [
      {
        title: 'Company',
        items: [
          { label: 'About', href: '/about' },
          { label: 'Source Code', href: GITHUB_URL },
          { label: 'Status Page', href: 'https://status.viraza.net' },
          { label: 'Roadmap', href: 'https://feedback.viraza.net/roadmap' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Blog', href: '/blog' },
          { label: 'Projects', href: '/projects' },
          { label: 'Événements', href: '/evenements' },
          { label: 'Changelog', href: '/changelog' },
          { label: 'Glossary', href: '/glossary' },
          { label: 'Feature Request', href: 'https://feedback.viraza.net/' },
          // { label: 'Case Studies', href: '/case-studies' },
        ],
      },
      {
        title: 'Connect',
        items: [
          { label: 'X (Twitter)', href: 'https://x.com/viraza' },
          { label: 'Discord', href: 'https://viraza.net/discord' },
          { label: 'Book a Call', href: BOOK_A_CALL_URL },
        ],
      },
      {
        title: 'Legal',
        items: [
          { label: 'Terms of Service', href: '/policies/terms' },
          { label: 'Privacy Policy', href: '/policies/privacy' },
        ],
      },
    ] satisfies IFooterMenuSection[],
    social: [
      {
        href: 'https://x.com/viraza',
        label: 'Follow us on X',
        icon: 'twitter',
      },
      {
        href: GITHUB_URL,
        label: 'Follow us on GitHub',
        icon: 'github',
      },
      {
        href: 'https://viraza.net/discord',
        label: 'Join our Discord',
        icon: 'discord',
      },
    ] satisfies IMenuSocialItem[],
  },
};
