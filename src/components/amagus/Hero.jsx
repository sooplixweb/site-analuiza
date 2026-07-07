import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AMAGUS } from '@/lib/amagusConfig';
import SectionReveal from './SectionReveal';
import OfficialLogo from './OfficialLogo';

const BADGES = [
  '16 anos de experiência clínica',
  'CRP 16/11155',
  'Atendimento presencial e online',
];

export default function Hero({ onRecanto }) {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 1.06]);
  const overlayY = useTransform(scrollY, [0, 600], [0, -24]);

  return (
    <section id="inicio" className="amagus-hero-gradient relative flex min-h-screen items-center overflow-hidden pt-24 pb-12 md:pt-20 lg:pt-0 lg:pb-0">
      {/* Decorative geometric elements */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.04]">
        <svg viewBox="0 0 400 800" fill="none" className="h-full w-full">
          <path d="M200 50 L380 400 L200 750 L20 400 Z" stroke="#2E2824" strokeWidth="0.5" />
          <path d="M200 150 L320 400 L200 650 L80 400 Z" stroke="#2E2824" strokeWidth="0.5" />
          <path d="M200 250 L260 400 L200 550 L140 400 Z" stroke="#2E2824" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-9 md:grid-cols-12 md:gap-7 lg:gap-8">
          {/* Text content */}
          <div className="order-1 md:col-span-6 lg:col-span-5">
            <SectionReveal>
              <div className="mb-7 md:mb-8 lg:mb-9">
                <OfficialLogo
                  loading="eager"
                  className="hero-official-logo mx-auto w-[min(82vw,390px)] sm:w-[420px] md:mx-0 md:w-[340px] lg:w-[500px]"
                />
                <div className="animate-subtle-divider mx-auto mt-5 flex w-full max-w-[170px] items-center justify-center gap-4 sm:max-w-[190px]">
                  <span className="h-px w-16 bg-primary/35" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
                  <span className="h-px w-10 bg-primary/20" />
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h1 className="max-w-xl font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-[2.75rem] lg:text-6xl">
                Existe uma história por trás de cada dor. É por ela que começamos.
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="mt-7 max-w-xl border-l border-primary/35 bg-background/35 px-5 py-5 backdrop-blur-sm md:px-6">
                <p className="font-heading text-xl italic leading-relaxed text-primary sm:text-2xl md:text-xl lg:text-2xl">
                  Não acredito em fórmulas prontas.
                </p>
                <p className="mt-3 text-base leading-relaxed text-foreground/65 sm:text-lg md:text-base lg:text-lg">
                  Acredito que toda dor faz sentido quando sua história finalmente encontra um lugar seguro para ser escutada.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/60">
                Antes de qualquer direção, existe uma escuta. E é a partir dela que o cuidado pode começar.
              </p>
            </SectionReveal>

            {/* Badges */}
            <SectionReveal delay={0.4}>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {BADGES.map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
                    <span className="text-sm text-foreground/70">{badge}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>

            {/* CTA */}
            <SectionReveal delay={0.5}>
              <button
                onClick={onRecanto}
                className="group mt-9 inline-flex items-center gap-3 border border-primary/30 bg-primary/[0.03] px-8 py-4 text-sm tracking-wide text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:bg-primary/10"
              >
                <span className="h-1.5 w-1.5 rotate-45 bg-primary transition-all duration-300 group-hover:scale-150" />
                Começar pela escuta
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </SectionReveal>
          </div>

          {/* Portrait */}
          <div className="order-2 md:col-span-6 lg:col-span-7">
            <SectionReveal delay={0.15} y={60}>
              <div className="relative mx-auto w-full max-w-[560px] md:max-w-none">
                <motion.div style={{ scale }} className="relative overflow-hidden">
                  <img
                    src={AMAGUS.images.hero}
                    alt="Ana Luiza Rigueira, psicóloga"
                    className="h-[320px] w-full object-cover object-center sm:h-[390px] md:h-[min(50vw,430px)] lg:h-[520px]"
                  />
                  {/* Gold frame overlay */}
                  <div className="pointer-events-none absolute inset-4 border border-primary/15" />
                </motion.div>

                {/* Floating geometric accent */}
                <motion.div
                  style={{ y: overlayY }}
                  className="pointer-events-none absolute -left-4 -top-4 hidden h-16 w-16 border-l border-t border-primary/25 lg:block"
                />

                {/* Bottom accent line */}
                <div className="absolute -bottom-3 left-0 h-px w-2/3 bg-gradient-to-r from-primary/40 to-transparent" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary/50">Explorar</span>
          <div className="h-12 w-px bg-gradient-to-b from-primary/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
