import Link from 'next/link';
import { APP_URL, ENTERPRISE_CONTACT_URL } from '@/configs/website-config';

import type { IPricingPlan, IPricingTableFeatures } from '@/types/pricing';

export const pricingContentData = {
  title: (
    <>
      <mark>Des solutions adaptées&nbsp;</mark>
      <mark>à vos besoins</mark>
      {'\n'}
      avec des tarifs transparents et sans surprise.
    </>
  ),
  tabs: [
    {
      value: 'deploy',
      label: 'Solutions SaaS',
    },
    {
      value: 'api-management',
      label: 'Services IT',
    },
  ],
  consultingTitle: (
    <>
      <mark>Consulting IT</mark>
      {'\n'}
      Un accompagnement sur mesure pour votre transformation digitale.
    </>
  ),
  faq: {
    mainTitle: 'FAQ',
    title: 'Des questions ?',
    description: 'Nous avons les réponses.',
  },
  usageCalculator: {
    title: (
      <>
        Allocation Server
        {'\n'}
        <mark>Un devis sur mesure.</mark>
      </>
    ),
    subtitle: `Infrastructure cloud scalable et sécurisée. Bénéficiez d'un hébergement haute disponibilité avec sauvegarde automatisée et conformité RGPD.`,
    actionText: 'Demander un devis',
    actionHref: 'https://viraza.net/contact',
  },
  calculator: {
    title: 'Allocation Server',
    subtitle: 'Estimez le coût de votre infrastructure cloud.',
    fieldLabels: {
      cpu: 'vCPU moyen / instance',
      memory: 'Mémoire moyenne / instance',
      instances: "Nombre d'instances",
      egress: 'Trafic sortant / mois',
    },
    fieldTooltips: {
      cpu: 'Nombre moyen de vCPU par instance. Facturé à la consommation réelle.',
      memory: 'Mémoire moyenne utilisée par instance. Facturé à la consommation réelle.',
      instances: "Nombre total d'instances exécutées simultanément",
      egress: 'Volume total de données sortantes par mois',
    },
    memoryOptions: [
      { value: '0.25', label: '1/4 Go' },
      { value: '0.5', label: '1/2 Go' },
      { value: '1', label: '1 Go' },
      { value: '2', label: '2 Go' },
      { value: '4', label: '4 Go' },
      { value: '8', label: '8 Go' },
      { value: '16', label: '16 Go' },
    ],
    cpuPlaceholder: '0.5',
    estimate: {
      heading: 'Estimation',
      usageBased: 'À la consommation',
      total: 'Total',
      perMonth: '/ mo',
    },
    rateLabels: {
      vcpu: 'vCPU/s',
      memory: 'Mémoire/Go/s',
      egress: 'Trafic/Go',
    },
  },
};

export const deployPricingPlans: IPricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Audit et conseil mensuel pour petites structures.',
    monthlyPrice: 500,
    annualPrice: 500,
    currency: 'USD',
    priceMonthlyLabel: ' / mo',
    priceAnnualLabel: ' / mo',
    priceType: 'number',
    features: {
      title: 'Ce qui est inclus',
      items: [
        {
          label: 'Audit trimestriel',
          lucideIcon: 'check',
        },
        {
          label: 'Rapport de performance',
          lucideIcon: 'check',
        },
        {
          label: 'Support email',
          lucideIcon: 'check',
        },
      ],
    },
    link: {
      label: 'Choisir',
      href: ENTERPRISE_CONTACT_URL,
    },
  },
  {
    id: 'pro',
    name: 'Professionnel',
    description: 'Accompagnement complet avec consultant dédié.',
    monthlyPrice: 1500,
    annualPrice: 1500,
    currency: 'USD',
    priceMonthlyLabel: ' / mo',
    priceAnnualLabel: ' / mo',
    priceType: 'number',
    isMostPopular: true,
    features: {
      title: 'Ce qui est inclus',
      items: [
        {
          label: 'Audit mensuel',
          lucideIcon: 'check',
        },
        {
          label: 'Rapport de performance',
          lucideIcon: 'check',
        },
        {
          label: 'Consultant dédié',
          lucideIcon: 'check',
        },
        {
          label: 'Support prioritaire',
          lucideIcon: 'check',
        },
      ],
    },
    link: {
      label: 'Choisir',
      href: ENTERPRISE_CONTACT_URL,
    },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Partenariat stratégique global pour grandes organisations.',
    currency: 'USD',
    monthlyPriceDisplay: 'Sur mesure',
    annualPriceDisplay: 'Sur mesure',
    priceType: 'string',
    features: {
      title: 'Ce qui est inclus',
      items: [
        {
          label: 'Audit hebdomadaire',
          lucideIcon: 'check',
        },
        {
          label: 'Rapport détaillé',
          lucideIcon: 'check',
        },
        {
          label: 'Consultant dédié',
          lucideIcon: 'check',
        },
        {
          label: 'Support 24/7',
          lucideIcon: 'check',
        },
        {
          label: 'Intervention sur site',
          lucideIcon: 'check',
        },
      ],
    },
    link: {
      label: 'Contactez-nous',
      href: ENTERPRISE_CONTACT_URL,
    },
  },
];

export const apiManagementPricingPlans: IPricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    // lucideIcon: "gem",
    description:
      'Everything you need to start fast, with the core tools to protect and manage your API.',
    currency: 'USD',
    monthlyPrice: 0,
    annualPrice: 0,
    priceMonthlyLabel: ' / mo',
    priceAnnualLabel: ' / mo',
    priceType: 'number',
    features: {
      title: 'What’s included',
      items: [
        {
          label: '1k API keys',
          lucideIcon: 'check',
        },
        {
          label: '150K valid requests / mo',
          lucideIcon: 'check',
        },
        {
          label: '1-day logs retention',
          lucideIcon: 'check',
        },
        {
          label: '3-day audit log retention',
          lucideIcon: 'check',
        },
        {
          label: 'Unlimited APIs',
          lucideIcon: 'check',
        },
      ],
    },
    link: {
      label: 'Start for free',
      href: APP_URL,
    },
  },
  {
    id: 'pro',
    name: 'Pro',
    // lucideIcon: "gem",
    description:
      'Predictable pricing without surprises, built for scaling APIs with clear usage-based billing.',
    monthlyPrice: 25,
    annualPrice: 25,
    currency: 'USD',
    priceMonthlyLabel: ' / mo',
    priceAnnualLabel: ' / mo',
    priceType: 'number',
    priceTiers: [
      {
        value: '250k',
        label: '250K Requests',
        monthlyPrice: 25,
        annualPrice: 25,
        featureOverrides: { 'valid-requests': '250K valid requests / mo' },
      },
      {
        value: '500k',
        label: '500K Requests',
        monthlyPrice: 50,
        annualPrice: 50,
        featureOverrides: { 'valid-requests': '500K valid requests / mo' },
      },
      {
        value: '1m',
        label: '1M Requests',
        monthlyPrice: 75,
        annualPrice: 75,
        featureOverrides: { 'valid-requests': '1M valid requests / mo' },
      },
      {
        value: '2m',
        label: '2M Requests',
        monthlyPrice: 100,
        annualPrice: 100,
        featureOverrides: { 'valid-requests': '2M valid requests / mo' },
      },
      {
        value: '10m',
        label: '10M Requests',
        monthlyPrice: 250,
        annualPrice: 250,
        featureOverrides: { 'valid-requests': '10M valid requests / mo' },
      },
      {
        value: '50m',
        label: '50M Requests',
        monthlyPrice: 500,
        annualPrice: 500,
        featureOverrides: { 'valid-requests': '50M valid requests / mo' },
      },
      {
        value: '100m',
        label: '100M Requests',
        monthlyPrice: 1000,
        annualPrice: 1000,
        featureOverrides: { 'valid-requests': '100M valid requests / mo' },
      },
    ],
    features: {
      title: 'What’s included',
      items: [
        {
          label: '1M API keys',
          lucideIcon: 'check',
        },
        {
          id: 'valid-requests',
          label: '250K valid requests / mo',
          lucideIcon: 'check',
        },
        {
          label: '7-day logs retention',
          lucideIcon: 'check',
        },
        {
          label: '14-day audit log retention',
          lucideIcon: 'check',
        },
        {
          label: 'Unlimited APIs',
          lucideIcon: 'check',
        },
        {
          label: 'Workspaces with team members',
          lucideIcon: 'check',
        },
      ],
    },
    link: {
      label: 'Get started',
      href: APP_URL,
    },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    // lucideIcon: "gem",
    description:
      'Need more support, or pricing doesn’t fit? Built for teams running mission-critical APIs at global scale.',
    monthlyPriceDisplay: 'Custom',
    annualPriceDisplay: 'Custom',
    currency: 'USD',
    priceType: 'string',
    features: {
      title: 'What’s included',
      items: [
        {
          label: 'Custom quotas',
          lucideIcon: 'check',
        },
        {
          label: 'IP Whitelisting',
          lucideIcon: 'check',
        },
        {
          label: 'Dedicated Slack channel',
          lucideIcon: 'check',
        },
      ],
    },
    link: {
      label: 'Contact us',
      href: ENTERPRISE_CONTACT_URL,
    },
  },
];

export const tableFeatures: IPricingTableFeatures[] = [
  {
    features: [
      {
        name: 'Projects',
        plans: [
          { planId: 'starter', value: 'Unlimited' },
          { planId: 'pro', value: 'Unlimited' },
          { planId: 'business', value: 'Unlimited' },
        ],
      },
      {
        name: 'Concurrent Builds',
        plans: [
          { planId: 'starter', value: '1' },
          { planId: 'pro', value: '1' },
          { planId: 'business', value: '1' },
        ],
      },
      {
        name: 'Max vCPU per Instance',
        plans: [
          { planId: 'starter', value: '2' },
          { planId: 'pro', value: '8' },
          { planId: 'business', value: '32' },
        ],
      },
      {
        name: 'Max RAM (GB) per Instance',
        plans: [
          { planId: 'starter', value: '2' },
          { planId: 'pro', value: '8' },
          { planId: 'business', value: '32' },
        ],
      },
      {
        name: 'Custom domains',
        plans: [
          { planId: 'starter', value: '1' },
          { planId: 'pro', value: '10' },
          { planId: 'business', value: '100' },
        ],
      },
      {
        name: 'Included usage',
        plans: [
          { planId: 'starter', value: '$5' },
          { planId: 'pro', value: '$25' },
          { planId: 'business', value: '$50' },
        ],
      },
      {
        name: 'Regions',
        plans: [
          { planId: 'starter', value: '3' },
          { planId: 'pro', value: 'All' },
          { planId: 'business', value: 'All' },
        ],
      },
      {
        name: 'Team members',
        plans: [
          { planId: 'starter', value: '1' },
          { planId: 'pro', value: 'Unlimited' },
          { planId: 'business', value: 'Unlimited' },
        ],
      },
      {
        name: 'Log retention',
        plans: [
          { planId: 'starter', value: '3 days' },
          { planId: 'pro', value: '7 days' },
          { planId: 'business', value: '14 days' },
        ],
      },
      {
        name: 'Audit log retention',
        plans: [
          { planId: 'starter', value: '7 days' },
          { planId: 'pro', value: '14 days' },
          { planId: 'business', value: '30 days' },
        ],
      },
      {
        name: 'Support',
        plans: [
          { planId: 'starter', value: 'Email' },
          { planId: 'pro', value: 'Email' },
          { planId: 'business', value: 'Email' },
        ],
      },
    ],
  },
];

export const faqItems = [
  {
    question: 'How does usage-based billing work with included credits?',
    answer: `Each paid plan includes a monthly credit allowance (e.g. $25/mo on Pro) that offsets your usage-based charges for compute and egress. Credits reset at the start of each billing cycle and do not roll over. Once credits are used up, additional usage is billed at the standard per-unit rates shown in the calculator.`,
  },
  {
    question: 'How do I avoid runaway costs?',
    answer: `Viraza vous propose des solutions adaptées à votre taille et vos besoins. Contactez-nous pour un devis personnalisé sans engagement.`,
  },
  {
    question: 'Can I try a paid plan, and can I downgrade later?',
    answer: `Nous proposons des formules adaptées à tous les budgets, de la PME à la grande entreprise. Contactez-nous pour bénéficier d'une démonstration gratuite de nos solutions.`,
  },
  {
    question: 'How is compute metered?',
    answer: `Tous nos tarifs sont transparents et basés sur votre consommation réelle. Pas de frais cachés, pas d'engagement longue durée. Vous payez pour ce que vous utilisez, quand vous l'utilisez. Chaque projet fait l'objet d'un devis détaillé et personnalisé.`,
  },
  {
    question: "What happens when I hit my plan's limits?",
    answer: `Each plan caps the max size of an Instance, the number of Instances, and total CPU and memory allocated across your workspace. If a new deployment would exceed any of these, it fails with a clear error. Running applications keep serving traffic without interruption, so you can upgrade or free up capacity before redeploying.`,
  },
  {
    question: 'Do preview deployments count against my usage?',
    answer: `Oui, chaque déploiement est facturé selon les ressources consommées. Contactez-nous pour connaître les détails de la tarification adaptée à votre projet.`,
  },
  {
    question: "Puis-je migrer mes données depuis une autre solution ?",
    answer: (
      <p>
        Absolument. Nous vous accompagnons dans la migration de vos données depuis votre solution
        actuelle vers Viraza, sans interruption de service. Nos experts vous guident à chaque
        étape du processus. Contactez-nous pour{' '}
        <Link
          href="https://viraza.net/contact"
          className="underline"
        >
          en savoir plus
        </Link>
        .
      </p>
    ),
  },
  {
    question: 'Où sont hébergées vos solutions ?',
    answer: (
      <p>
        Nos solutions sont déployées sur une infrastructure cloud sécurisée avec plusieurs zones de
        disponibilité. Vous choisissez la région de déploiement et le niveau de redondance adapté
        à vos besoins. Voir{' '}
        <Link href="https://viraza.net/contact" className="underline">
          contacter Viraza
        </Link>{' '}
        pour plus d'informations.
      </p>
    ),
  },
  {
    question: 'Proposez-vous des garanties de sécurité ?',
    answer: `Oui, toutes nos solutions respectent les normes RGPD et les standards de sécurité les plus stricts. Nous pouvons vous fournir notre documentation de conformité sur demande.`,
  },
  {
    question: "Comment obtenir un devis personnalisé ?",
    answer: (
      <p>
        Contactez-nous directement à{' '}
        <Link href="mailto:info@viraza.net" className="underline">
          info@viraza.net
        </Link>{' '}
        et nous étudierons avec vous la solution la mieux adaptée à vos besoins.
      </p>
    ),
  },
];

export const enterpriseData = {
  title: 'Enterprise',
  description:
    'Contactez notre équipe pour des besoins spécifiques, des déploiements dédiés ou des contrats annuels.',
  features: ['Solution sur mesure', 'Infrastructure dédiée', 'Support prioritaire'],
  buttonText: 'Contactez-nous',
  buttonUrl: ENTERPRISE_CONTACT_URL,
};
