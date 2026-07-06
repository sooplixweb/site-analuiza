import { AMAGUS } from '@/lib/amagusConfig';
import SectionReveal from './SectionReveal';

const POINTS = [
  'Escuta acolhedora',
  'Experiência clínica',
  'Cuidado ético',
  'Olhar humanizado',
];

export default function About() {
  return (
    <section id="quem-sou" className="amagus-pattern-light relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image — asymmetric placement */}
          <div className="lg:col-span-5 lg:col-start-1">
            <SectionReveal y={50}>
              <div className="relative">
                <img
                  src={AMAGUS.images.about}
                  alt="Ana Luiza Rigueira em seu consultório"
                  className="h-[360px] w-full object-cover sm:h-[460px]"
                />
                <div className="pointer-events-none absolute inset-3 border border-primary/15" />
                {/* Offset accent */}
                <div className="absolute -right-3 -bottom-3 h-20 w-20 border-r border-b border-primary/25" />
              </div>
            </SectionReveal>
          </div>

          {/* Text — offset to the right */}
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionReveal>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">
                Quem sou eu
              </span>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                Uma presença que acolhe<br />histórias e recomeços.
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/70">
                <p>
                  Sou Ana Luiza, psicóloga há 16 anos. Meu trabalho é acolher histórias, dores, conflitos e recomeços com ética, escuta qualificada e presença.
                </p>
                <p>
                  Atendo mulheres que desejam compreender seus padrões afetivos, fortalecer sua autoestima e construir relações mais saudáveis.
                </p>
              </div>
            </SectionReveal>

            {/* Discrete points — not cards */}
            <SectionReveal delay={0.3}>
              <div className="mt-10 grid grid-cols-2 gap-y-5 border-t border-primary/15 pt-8">
                {POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
                    <span className="font-heading text-lg text-foreground/80">{point}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
