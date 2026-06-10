import { BOOK_A_CALL_URL, GITHUB_URL } from '@/configs/website-config';

import type { IFooterMenuSection, IMenuSocialItem } from '@/types/common';

export const MENUS = {
  header: [
    {
      label: 'Solutions',
      href: '/',
      children: [
        {
          label: 'Nos Services',
          href: '/#services',
          description: 'Développement web, UX/UI, marketing digital',
          icon: '/icons/header/blog.svg',
        },
        {
          label: 'Produits',
          href: '/#produits',
          description: 'MyEduc, SNEN, Syrcow et plus',
          icon: '/icons/header/case-studies.svg',
        },
        {
          label: 'Écosystème',
          href: '/#ecosysteme',
          description: 'Découvrez notre écosystème technologique',
          icon: '/icons/header/glossary.svg',
        },
      ],
    },
    { label: 'À propos', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    description: 'Votre partenaire pour la transformation digitale en RDC. Solutions innovantes pour accélérer votre croissance.',
    copyright: '© 2026 Viraza IT Solutions. Tous droits réservés.',
    main: [
      {
        title: 'Entreprise',
        items: [
          { label: 'À propos', href: '/about' },
          { label: 'Notre équipe', href: '/about' },
          { label: 'Carrières', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Solutions',
        items: [
          { label: 'Web Development', href: '/#services' },
          { label: 'UI/UX Design', href: '/#services' },
          { label: 'Digital Marketing', href: '/#services' },
          { label: 'Cloud Services', href: '/#services' },
          { label: 'IT Consulting', href: '/#services' },
        ],
      },
      {
        title: 'Produits',
        items: [
          { label: 'MyEduc', href: '/#produits' },
          { label: 'SNEN', href: '/#produits' },
          { label: 'Syrcow', href: '/#produits' },
          { label: 'SRIP', href: '/#produits' },
          { label: 'SYPROC', href: '/#produits' },
        ],
      },
      {
        title: 'Légal',
        items: [
          { label: 'Conditions d\'utilisation', href: '/policies/terms' },
          { label: 'Politique de confidentialité', href: '/policies/privacy' },
        ],
      },
    ] satisfies IFooterMenuSection[],
    social: [
      {
        href: 'https://www.facebook.com/virazait',
        label: 'Suivez-nous sur Facebook',
        icon: 'facebook',
      },
      {
        href: 'https://www.linkedin.com/company/virazait',
        label: 'Suivez-nous sur LinkedIn',
        icon: 'linkedin',
      },
      {
        href: 'https://www.youtube.com/@virazait',
        label: 'Suivez-nous sur YouTube',
        icon: 'youtube',
      },
    ] satisfies IMenuSocialItem[],
  },
};
