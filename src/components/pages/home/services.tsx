import Image from 'next/image';
import NextLink from 'next/link';

interface IServiceItem {
  icon: string;
  title: string;
  description: string;
}

interface IServicesProps {
  heading: string;
  subheading: string;
  description: string;
  link: { label: string; href: string };
  items: IServiceItem[];
}

function Services({ heading, subheading, description, link, items }: IServicesProps) {
  return (
    <section className="relative w-full border-b border-emerald/10 py-20 md:py-28" id="services">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-label text-sm tracking-widest text-emerald">{subheading}</span>
          <h2 className="mt-4 font-display text-3xl leading-[1.125] text-balance sm:text-4xl md:text-[2.5rem]">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl border border-emerald/10 bg-gradient-to-b from-emerald/5 to-transparent p-8 transition-all duration-300 hover:border-emerald/30 hover:from-emerald/10"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-emerald/10">
                <Image src={item.icon} alt="" width={24} height={24} className="size-6 text-emerald" aria-hidden />
              </div>
              <h3 className="mb-3 text-lg font-medium text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <NextLink
            href={link.href}
            className="inline-flex items-center gap-2 rounded-lg border border-emerald bg-emerald px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-2"
          >
            {link.label}
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </NextLink>
        </div>
      </div>
    </section>
  );
}

export default Services;
