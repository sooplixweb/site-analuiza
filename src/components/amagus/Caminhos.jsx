import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from './SectionReveal';
import AmagusSymbol from './AmagusSymbol';

const AREAS = [
  {
    title: 'Relações',
    lead: 'Vínculos que pedem compreensão.',
    desc: 'Compreender vínculos, padrões afetivos, limites e escolhas para construir relações mais saudáveis consigo mesma e com o mundo.',
  },
  {
    title: 'Trauma',
    lead: 'O passado que ainda fala no presente.',
    desc: 'Feridas antigas continuam influenciando o presente até serem compreendidas. O processo terapêutico ajuda a dar novos significados ao que ficou marcado.',
  },
  {
    title: 'Luto',
    lead: 'Nem toda perda é a morte de alguém.',
    desc: 'Também existem perdas de sonhos, relacionamentos, versões de nós mesmos e projetos de vida — e todas merecem um lugar para serem elaboradas.',
  },
  {
    title: 'Autoestima',
    lead: 'Uma relação mais gentil consigo.',
    desc: 'Construir uma relação mais gentil consigo mesma, fortalecendo sua voz, reconhecendo seu valor e devolvendo confiança às próprias escolhas.',
  },
  {
    title: 'Ansiedade',
    lead: 'Escutar o que ela tenta dizer.',
    desc: 'Mais do que aliviar sintomas, compreender aquilo que a ansiedade tenta comunicar e encontrar formas mais sustentáveis de atravessar o dia.',
  },
];

export default function Caminhos() {
  const [active, setActive] = useState(0);
  const area = AREAS[active];

  return (
    <section id="caminhos" className="amagus-pattern-dark relative overflow-hidden py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionReveal>
          <div className="max-w-2xl">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary/60">
              Temas clínicos
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-background sm:text-5xl lg:text-6xl">
              Caminhos de cuidado
            </h2>
            <p className="mt-5 text-base leading-relaxed text-background/55">
              Não são rótulos fechados. Cada tema é uma face por onde a escuta começa —
              escolha uma para ver como o cuidado se aproxima dela.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          {/* Facet list */}
          <SectionReveal className="lg:col-span-5">
            <ul className="flex flex-col">
              {AREAS.map((a, i) => {
                const isActive = i === active;
                return (
                  <li key={a.title}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className="group flex w-full items-center gap-5 border-t border-primary/12 py-5 text-left last:border-b"
                    >
                      <span
                        className={`font-heading text-sm tabular-nums transition-colors duration-300 ${
                          isActive ? 'text-primary' : 'text-primary/30 group-hover:text-primary/60'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`font-display text-2xl transition-all duration-300 sm:text-3xl ${
                          isActive
                            ? 'translate-x-1 text-background'
                            : 'text-background/45 group-hover:translate-x-0.5 group-hover:text-background/75'
                        }`}
                      >
                        {a.title}
                      </span>
                      <span
                        className={`ml-auto h-1.5 w-1.5 rotate-45 bg-primary transition-all duration-300 ${
                          isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </SectionReveal>

          {/* Active facet detail */}
          <div className="lg:col-span-7">
            <div className="relative h-full overflow-hidden border border-primary/12 bg-background/[0.03] p-8 sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-12 -top-12 text-primary opacity-[0.05]">
                <AmagusSymbol className="h-64 w-64" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <span className="font-heading text-6xl leading-none text-primary/15 sm:text-7xl">
                    {String(active + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 font-display text-3xl text-background sm:text-4xl">
                    {area.title}
                  </h3>
                  <p className="mt-3 font-heading text-lg italic text-primary/80 sm:text-xl">
                    {area.lead}
                  </p>
                  <div className="mt-6 h-px w-16 bg-primary/40" />
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/70">
                    {area.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
