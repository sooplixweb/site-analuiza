import { motion } from 'framer-motion';

const AREAS = [
  {
    title: 'Relações',
    lead: 'Vínculos que pedem compreensão.',
    desc: 'Compreender vínculos, padrões afetivos, limites e escolhas para construir relações mais saudáveis consigo mesma e com o mundo.',
  },
  {
    title: 'Trauma',
    lead: 'O passado que ainda fala no presente.',
    desc: 'Feridas antigas seguem influenciando o presente até serem compreendidas. A terapia ajuda a dar novos significados ao que ficou marcado.',
  },
  {
    title: 'Luto',
    lead: 'Nem toda perda é a morte de alguém.',
    desc: 'Existem também perdas de sonhos, relações, versões de nós mesmos e projetos de vida — e todas merecem um lugar para serem elaboradas.',
  },
  {
    title: 'Autoestima',
    lead: 'Uma relação mais gentil consigo.',
    desc: 'Fortalecer sua voz, reconhecer o próprio valor e devolver confiança às escolhas, construindo um olhar mais gentil sobre si mesma.',
  },
  {
    title: 'Ansiedade',
    lead: 'Escutar o que ela tenta dizer.',
    desc: 'Mais do que aliviar sintomas, compreender aquilo que a ansiedade comunica e encontrar formas mais sustentáveis de atravessar o dia.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cell = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Caminhos() {
  return (
    <section id="caminhos" className="amagus-pattern-dark relative overflow-hidden py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-px overflow-hidden border border-primary/15 bg-primary/15 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Intro cell */}
          <motion.div variants={cell} className="flex flex-col justify-center bg-[#2E2824] p-8 lg:p-10">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary/60">
              Temas clínicos
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-background sm:text-4xl">
              Caminhos de cuidado
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-background/55">
              Não são rótulos fechados. Cada tema é uma face por onde a escuta começa.
            </p>
            <span className="mt-6 h-px w-12 bg-primary/40" />
          </motion.div>

          {/* Theme cells */}
          {AREAS.map((area, index) => (
            <motion.article
              key={area.title}
              variants={cell}
              className="group relative overflow-hidden bg-[#2E2824] p-8 transition-colors duration-500 hover:bg-[#38322c] lg:p-10"
            >
              <span className="pointer-events-none absolute right-5 top-3 font-display text-5xl leading-none text-primary/10 transition-all duration-500 group-hover:text-primary/25 sm:text-6xl">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rotate-45 bg-primary transition-transform duration-700 group-hover:rotate-[225deg]" />
                  <h3 className="font-display text-2xl text-background sm:text-[1.7rem]">
                    {area.title}
                  </h3>
                </div>

                <p className="mt-2 font-heading text-sm italic text-primary/70">
                  {area.lead}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-background/55 transition-colors duration-500 group-hover:text-background/80">
                  {area.desc}
                </p>

                <span className="mt-6 block h-px w-10 bg-primary/40 transition-all duration-500 group-hover:w-20" />
              </div>

              {/* Bottom reveal line */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-primary/60 transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
