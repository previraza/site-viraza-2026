import { createElement, Fragment } from 'react';
import { ArrowRightLeft, CircleDot, Flame, MessageSquare } from 'lucide-react';

import type { IProgramBenefit } from '@/components/pages/program/program-section';

export const startupsContentData = {
  eyebrow: 'Programme Startups',
  title: createElement(
    Fragment,
    null,
    createElement('mark', null, '-50% sur vos solutions'),
    '\npendant la première année',
  ),
  description:
    "50% de réduction sur toutes nos solutions SaaS la première année, support prioritaire et accompagnement dédié pour les startups éligibles.",
  benefits: [
    {
      icon: CircleDot,
      title: '-50% la première année',
      description:
        "Profitez de 50% de réduction sur l'ensemble de nos solutions pour aider votre startup à décoller sans vous ruiner.",
    },
    {
      icon: MessageSquare,
      title: 'Support prioritaire',
      description:
        "En tant que startup, vous bénéficiez d'un canal dédié avec notre équipe technique pour répondre à toutes vos questions rapidement.",
    },
    {
      icon: Flame,
      title: 'Concierge onboarding',
      description:
        'If helpful for your startup, we can schedule a 1:1 onboarding session to help you get started with Unkey and decide on what is best for your use case.',
    },
    {
      icon: ArrowRightLeft,
      title: 'Migration support',
      description: 'Hands on support to help you migrate to Unkey from your existing platform.',
    },
  ] satisfies IProgramBenefit[],
};
