import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import AmagusSymbol from './AmagusSymbol';

const STEPS = ['Descoberta', 'Reconstrução', 'Presença'];

export default function Concept() {
  return (
    <section
      id="amagus-lapidar"
      className="amagus-pattern-light relative overflow-hidden py-16 lg:py-24"
    >
      {/* Faint concentric backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.07] sm:h-[560px] sm:w-[560px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        {/* Heading — single line on desktop */}
        <SectionReveal>
          <div className="max-w-4xl">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">
              Âmagus Lapidar
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:whitespace-nowrap lg:text-[3.25rem]">
              Lapidar é um processo delicado.
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-10 grid items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Text — left */}
          <SectionReveal delay={0.1}>
            <div className="border-l border-primary/20 pl-6 sm:pl-8">
              <div className="space-y-5 text-base leading-relaxed text-foreground/70 sm:text-lg">
                <p>
                  Não significa retirar quem você é, mas revelar aquilo que sempre
                  esteve ali, escondido pelas dores, pelos medos e pelas marcas da vida.
                </p>
                <p>
                  A psicoterapia também é assim: um caminho de{' '}
                  <span className="text-foreground/90">descoberta</span>,{' '}
                  <span className="text-foreground/90">reconstrução</span> e{' '}
                  <span className="text-foreground/90">presença</span>.
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Orbit — right */}
          <SectionReveal delay={0.2} y={40}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[300px] w-[300px] sm:h-[360px] sm:w-[360px]">
                {/* Static rings */}
                <div className="absolute inset-4 rounded-full border border-primary/15" />
                <div className="absolute inset-16 rounded-full border border-primary/10" />

                {/* Slow counter-rotating dashed ring */}
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-9 rounded-full border border-dashed border-primary/15"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 46, repeat: Infinity, ease: 'linear' }}
                />

                {/* Center symbol */}
                <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[#a89f95]">
                  <AmagusSymbol className="h-[4.5rem] w-[4.5rem] animate-amagus-orbit-center sm:h-24 sm:w-24" />
                </div>

                {/* Orbiting words */}
                <div className="amagus-orbit absolute inset-0">
                  {STEPS.map((step, index) => (
                    <span
                      key={step}
                      className="amagus-orbit-item absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap border border-primary/20 bg-background/85 px-4 py-2 font-heading text-sm text-foreground/80 shadow-[0_14px_34px_rgba(46,40,36,0.09)] backdrop-blur-sm sm:px-5 sm:py-2.5 sm:text-base"
                      style={{
                        '--angle': `${index * 120 - 90}deg`,
                        '--radius': 'clamp(104px, 28vw, 138px)',
                      }}
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
