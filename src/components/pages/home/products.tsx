interface IProductItem {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  gradient: string;
}

interface IProductsProps {
  heading: string;
  subheading: string;
  description: string;
  items: IProductItem[];
}

function Products({ heading, subheading, description, items }: IProductsProps) {
  return (
    <section className="relative w-full border-b border-emerald/10 py-20 md:py-28" id="produits">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-label text-sm tracking-widest text-emerald">{subheading}</span>
          <h2 className="mt-4 font-display text-3xl leading-[1.125] text-balance sm:text-4xl md:text-[2.5rem]">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {items.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-emerald/10 bg-gradient-to-b from-emerald/5 to-transparent p-8 transition-all duration-300 hover:border-emerald/30"
            >
              <div
                className={`absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br ${product.gradient} opacity-10 blur-3xl`}
                aria-hidden
              />
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-medium text-white">{product.title}</h3>
                <p className="mt-2 text-sm font-medium text-emerald">{product.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {product.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <svg
                        className="mt-0.5 size-4 shrink-0 text-emerald"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
