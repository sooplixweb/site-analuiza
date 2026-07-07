import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionReveal from './SectionReveal';

const AREAS = [
  { title: 'Relações', desc: 'Compreender vínculos, padrões afetivos, limites e escolhas para construir relações mais saudáveis.' },
  { title: 'Trauma', desc: 'Feridas antigas continuam influenciando o presente até serem compreendidas. O processo terapêutico ajuda a dar novos significados ao que ficou marcado.' },
  { title: 'Luto', desc: 'Nem toda perda é apenas a morte de alguém. Também existem perdas de sonhos, relacionamentos, versões de nós mesmos e projetos de vida.' },
  { title: 'Autoestima', desc: 'Construir uma relação mais gentil consigo mesma, fortalecendo sua voz e seu valor.' },
  { title: 'Ansiedade', desc: 'Mais do que aliviar sintomas, compreender aquilo que a ansiedade tenta comunicar.' },
];

export default function Caminhos() {
  const railRef = useRef(null);

  const scrollCards = (direction) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: direction * Math.min(430, rail.clientWidth * 0.86),
      behavior: 'smooth',
    });
  };

  return (
    <section id="caminhos" className="amagus-pattern-dark relative py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionReveal>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary/60">
              Temas clínicos
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-background sm:text-5xl lg:text-6xl">
              Caminhos de cuidado
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-background/55">
              Não são rótulos fechados. São entradas possíveis para compreender histórias, vínculos e modos de atravessar a vida.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => scrollCards(-1)}
                className="inline-flex h-11 w-11 items-center justify-center border border-primary/20 text-primary transition-colors hover:border-primary/50 hover:bg-primary/10"
                aria-label="Ver caminho anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollCards(1)}
                className="inline-flex h-11 w-11 items-center justify-center border border-primary/20 text-primary transition-colors hover:border-primary/50 hover:bg-primary/10"
                aria-label="Ver próximo caminho"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </SectionReveal>
        </div>

        <div
          ref={railRef}
          className="amagus-scrollbar-none mt-10 flex snap-x gap-4 overflow-x-auto pb-4 lg:mt-12"
        >
          {AREAS.map((area, i) => (
            <SectionReveal key={area.title} delay={(i % 2) * 0.08} className="snap-start">
              <article className="group relative flex min-h-[260px] w-[78vw] max-w-[340px] flex-col overflow-hidden border border-primary/10 bg-background/[0.02] p-6 transition-all duration-500 hover:border-primary/35 hover:bg-primary/[0.05] sm:w-[330px]">
                <span className="absolute right-5 top-5 font-heading text-sm text-primary/25 transition-colors duration-500 group-hover:text-primary/45">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="mb-6 flex items-center gap-3 pr-10">
                  <span className="h-1.5 w-1.5 rotate-45 bg-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-[135deg]" />
                  <h3 className="font-display text-2xl text-background transition-colors duration-300">
                    {area.title}
                  </h3>
                </div>

                <p className="text-base leading-relaxed text-background/60 transition-colors duration-300 group-hover:text-background/75">
                  {area.desc}
                </p>

                <div className="mt-auto pt-8">
                  <span className="block h-px w-12 bg-primary/30 transition-all duration-500 group-hover:w-20" />
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-primary/50 transition-all duration-500 group-hover:w-full" />
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
