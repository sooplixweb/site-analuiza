import SectionReveal from './SectionReveal';

export default function Concept() {
  return (
    <section id="amagus-lapidar" className="amagus-pattern-light relative overflow-hidden py-14 lg:py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionReveal>
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">
                Âmagus Lapidar
              </p>
              <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Lapidar é um processo delicado.
              </h2>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="border-l border-primary/20 pl-6 sm:pl-8">
              <div className="space-y-5 text-base leading-relaxed text-foreground/70 sm:text-lg">
                <p>
                  Não significa retirar quem você é, mas revelar aquilo que sempre esteve ali, escondido pelas dores, pelos medos e pelas marcas da vida.
                </p>
                <p>
                  A psicoterapia também é assim: um caminho de descoberta, reconstrução e presença.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {['Descoberta', 'Reconstrução', 'Presença'].map((item) => (
                  <div key={item} className="border border-primary/15 bg-background/55 px-4 py-5 text-center backdrop-blur-sm">
                    <span className="mx-auto mb-3 block h-2 w-2 rotate-45 bg-primary" />
                    <span className="font-heading text-lg text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
