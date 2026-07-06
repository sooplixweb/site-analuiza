import SectionReveal from './SectionReveal';

const CREDENTIALS = [
  { type: 'Graduação', field: 'Psicologia', institution: 'Universidade Federal de São João del-Rei' },
  { type: 'Pós-graduação', field: 'Trauma, Neurociência e Saúde Mental', institution: 'Unineuroconsciente' },
  { type: 'Pós-graduação', field: 'Psicogerontologia', institution: 'Uniube' },
  { type: 'Pós-graduação', field: 'Terapia de Casal', institution: 'Uniube' },
  { type: 'Pós-graduação', field: 'Psicologia Hospitalar', institution: 'Hospital Monte Sinai — JF' },
  { type: 'Curso', field: 'Mediação e Conciliação Familiar', institution: 'TJMG' },
];

export default function Story() {
  return (
    <section id="historia" className="amagus-pattern-light relative py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <SectionReveal>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">
            Trajetória & formação
          </span>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Uma escuta construída ao longo dos anos
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/70">
            Há 16 anos, Ana Luiza dedica-se a uma psicologia ética, acessível e profundamente humana — sustentada por uma formação contínua em áreas que envolvem relações, trauma, saúde mental e família.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14">
          {CREDENTIALS.map((c, i) => (
            <SectionReveal key={c.field} delay={(i % 2) * 0.08}>
              <div className="group relative h-full overflow-hidden border border-primary/15 bg-primary/[0.02] p-6 transition-all duration-500 hover:border-primary/40 hover:bg-primary/[0.06] sm:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rotate-45 bg-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-[135deg]" />
                  <span className="font-body text-[10px] tracking-[0.25em] uppercase text-primary/70">
                    {c.type}
                  </span>
                </div>
                <h3 className="font-display text-lg leading-snug text-foreground sm:text-xl">
                  {c.field}
                </h3>
                <p className="mt-2 font-heading text-sm text-foreground/50">
                  {c.institution}
                </p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-primary/50 transition-all duration-500 group-hover:w-full" />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}