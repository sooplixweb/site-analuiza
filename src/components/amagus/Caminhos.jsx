import SectionReveal from './SectionReveal';

const AREAS = [
  { title: 'Relacionamentos', desc: 'para olhar com mais clareza para vínculos, limites, escolhas e padrões afetivos.' },
  { title: 'Autoestima feminina', desc: 'para reconhecer seu valor, fortalecer sua voz e habitar seu lugar no mundo.' },
  { title: 'Luto', desc: 'para atravessar perdas com presença, significado e acolhimento da dor.' },
  { title: 'Trauma', desc: 'para compreender feridas do passado e encontrar caminhos de reconstrução.' },
  { title: 'Libido feminina', desc: 'para habitar o desejo e o prazer com consciência e autocuidado.' },
  { title: 'Ansiedade', desc: 'para entender seus gatilhos e construir um relacionamento mais sereno com a vida.' },
  { title: 'Conflitos familiares', desc: 'para navegar dinâmicas complexas com diálogo, limites e respeito.' },
  { title: 'Autoconhecimento', desc: 'para olhar para si com profundidade, honestidade e compaixão.' },
];

export default function Caminhos() {
  return (
    <section id="caminhos" className="amagus-pattern-dark relative py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionReveal>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary/60">
            Oito portais
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-background sm:text-5xl lg:text-6xl">
            Caminhos de cuidado
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14">
          {AREAS.map((area, i) => (
            <SectionReveal key={area.title} delay={(i % 2) * 0.08}>
              <div className="group relative h-full overflow-hidden border border-primary/10 bg-background/[0.02] p-6 transition-all duration-500 hover:border-primary/40 hover:bg-primary/[0.06] sm:p-7">
                <span className="absolute right-5 top-5 font-display text-3xl text-primary/10 transition-all duration-500 group-hover:text-primary/20">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="mb-4 flex items-center gap-3">
                  <span className="h-2 w-2 rotate-45 bg-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-[135deg]" />
                  <h3 className="font-display text-xl text-background transition-colors duration-300 sm:text-2xl">
                    {area.title}
                  </h3>
                </div>

                <p className="font-heading text-base leading-relaxed text-background/50 transition-colors duration-300 group-hover:text-background/70">
                  {area.desc}
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