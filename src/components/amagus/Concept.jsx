import SectionReveal from './SectionReveal';
import AmagusLogo from './AmagusLogo';

export default function Concept() {
  return (
    <section id="amagus-lapidar" className="amagus-pattern-light relative py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <SectionReveal>
          <AmagusLogo className="mx-auto h-12 w-12 text-primary" />
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <p className="mt-10 font-body text-xs tracking-[0.3em] uppercase text-primary">
            Âmagus Lapidar
          </p>
        </SectionReveal>

        <SectionReveal delay={0.25}>
          <h2 className="mt-6 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Lapidar dores, histórias e relações
            <br />
            <span className="font-heading italic text-primary">com escuta, cuidado e presença.</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/30" />
            <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
            <div className="h-px w-12 bg-primary/30" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}