import { createElement, Fragment } from 'react';
import { ArrowRightLeft, CircleDot, Flame, MessageSquare } from 'lucide-react';

import type { IProgramBenefit } from '@/components/pages/program/program-section';

export const ycContentData = {
  eyebrow: 'Programme Partenaires',
  title: createElement(
    Fragment,
    null,
    createElement('mark', null, '-30% sur nos solutions'),
    '\npour les institutions partenaires',
  ),
  description:
    "30% de réduction sur l'ensemble de nos solutions pour les établissements scolaires et universitaires partenaires. Accompagnement prioritaire et déploiement accéléré.",
  benefits: [
    {
      icon: CircleDot,
      title: "-30% pour les institutions",
      description:
        "Les établissements d'enseignement partenaires bénéficient de 30% de réduction sur toutes nos solutions éducatives.",
    },
    {
      icon: MessageSquare,
      title: 'Accompagnement dédié',
      description:
        "Un chef de projet dédié vous accompagne de l'audit initial au déploiement pour garantir le succès de votre projet.",
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
