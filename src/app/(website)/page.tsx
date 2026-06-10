import { Metadata } from 'next';
import { homeContentData, homePageData } from '@/constants/home';

import { getMetadata } from '@/lib/get-metadata';
import Cta from '@/components/pages/home/cta';
import Hero from '@/components/pages/home/hero';
import Process from '@/components/pages/home/process';
import Products from '@/components/pages/home/products';
import Services from '@/components/pages/home/services';
import WhyUs from '@/components/pages/home/why-us';

export const metadata: Metadata = getMetadata({
  tagline: homePageData.metadata?.tagline,
  description: homePageData.metadata?.description,
  pathname: homePageData.pathname,
});

export default function HomePage() {
  const { hero, services, products, whyUs, process, cta } = homeContentData;

  return (
    <main className="relative w-full overflow-x-clip bg-background text-white">
      <Hero {...hero} />
      <Services {...services} />
      <Products {...products} />
      <WhyUs {...whyUs} />
      <Process {...process} />
      <Cta {...cta} />
    </main>
  );
}
