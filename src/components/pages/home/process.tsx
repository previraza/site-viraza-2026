interface IProcessStep {
  number: string;
  title: string;
  description: string;
}

interface IProcessProps {
  heading: string;
  subheading: string;
  description: string;
  steps: IProcessStep[];
}

function Process({ heading, subheading, description, steps }: IProcessProps) {
  return (
    <section className="relative w-full border-b border-emerald/10 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="font-label text-sm tracking-widest text-emerald">{subheading}</span>
          <h2 className="mt-4 font-display text-3xl leading-[1.125] text-balance sm:text-4xl md:text-[2.5rem]">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div
                  className="absolute top-8 left-[calc(50%+2rem)] hidden h-0.5 w-[calc(100%-4rem)] bg-gradient-to-r from-emerald/40 to-transparent lg:block"
                  aria-hidden
                />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="flex size-16 items-center justify-center rounded-full border border-emerald/20 bg-emerald/10">
                  <span className="font-display text-2xl font-medium text-emerald">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
