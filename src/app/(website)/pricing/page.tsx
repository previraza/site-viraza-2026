import { homeContentData } from '@/constants/home';
import { pricingContentData } from '@/constants/pricing';

import { getMetadata } from '@/lib/get-metadata';
import Cta from '@/components/pages/home/cta';
import FaqSection from '@/components/pages/pricing/faq/faq';
import PricingMainContent from '@/components/pages/pricing/pricing-main-content';

export const metadata = getMetadata({
  title: 'Pricing',
  description: 'Nos solutions et tarifs pour accompagner votre transformation digitale.',
  pathname: '/pricing',
});

export default function PricingPage() {
  return (
    <main>
      <PricingMainContent title={pricingContentData.title} />
      <FaqSection />
      <Cta {...homeContentData.cta} />
    </main>
  );
}
