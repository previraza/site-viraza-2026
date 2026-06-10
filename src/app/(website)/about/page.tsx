import { aboutContentData, aboutPageData } from '@/constants/about';
import { homeContentData } from '@/constants/home';

import { getMetadata } from '@/lib/get-metadata';
import Hero from '@/components/pages/about/hero';
import Cta from '@/components/pages/home/cta';

export const metadata = getMetadata({
  title: aboutPageData.metadata?.title,
  description: aboutPageData.metadata?.description,
  pathname: aboutPageData.pathname,
});

export default function AboutPage() {
  const { values, mission, stats } = aboutContentData;

  return (
    <main className="relative w-full overflow-x-clip bg-background text-white">
      <section className="container py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="font-label text-sm tracking-widest text-emerald">À PROPOS</span>
            <h1 className="mt-4 font-display text-4xl leading-[1.125] text-balance sm:text-5xl md:text-[2.625rem] lg:text-[3.25rem]">
              {aboutContentData.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {aboutContentData.description}
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="mt-20 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-emerald/10 bg-gradient-to-b from-emerald/5 to-transparent p-8">
              <h2 className="text-xl font-medium text-white">Notre Mission</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {mission.description}
              </p>
            </div>
            <div className="rounded-xl border border-emerald/10 bg-gradient-to-b from-emerald/5 to-transparent p-8">
              <h2 className="text-xl font-medium text-white">Notre Vision</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {mission.vision}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-xl border border-emerald/10 bg-gradient-to-b from-emerald/5 to-transparent p-6 text-center"
              >
                <div className="font-display text-4xl font-medium text-emerald md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mt-20">
            <h2 className="text-center font-display text-3xl leading-[1.125] text-balance sm:text-4xl">
              Nos Valeurs
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-emerald/10 p-8 transition-all duration-300 hover:border-emerald/30"
                >
                  <h3 className="text-lg font-medium text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta {...homeContentData.cta} />
    </main>
  );
}
