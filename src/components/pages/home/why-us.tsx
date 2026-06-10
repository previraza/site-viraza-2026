interface IWhyUsProps {
  heading: string;
  subheading: string;
  description: string;
  stats: { value: string; label: string }[];
  features: { title: string; description: string }[];
}

function WhyUs({ heading, subheading, description, stats, features }: IWhyUsProps) {
  return (
    <section className="relative w-full border-b border-emerald/10 py-20 md:py-28" id="ecosysteme">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-label text-sm tracking-widest text-emerald">{subheading}</span>
          <h2 className="mt-4 font-display text-3xl leading-[1.125] text-balance sm:text-4xl md:text-[2.5rem]">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
        </div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-emerald/10 p-8 transition-all duration-300 hover:border-emerald/30"
            >
              <h3 className="mb-3 text-lg font-medium text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
