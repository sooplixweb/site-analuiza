import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AMAGUS } from '@/lib/amagusConfig';
import SectionReveal from './SectionReveal';
import AmagusLogo from './AmagusLogo';

const BADGES = [
  '16 anos de experiência',
  'CRP 16/11155',
  'Relacionamentos, luto, trauma e autoestima',
];

export default function Hero({ onRecanto }) {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 1.06]);
  const overlayY = useTransform(scrollY, [0, 600], [0, -24]);

  return (
    <section id="inicio" className="amagus-hero-gradient relative flex min-h-screen items-center overflow-hidden pt-20 pb-12 lg:pt-0 lg:pb-0">
      {/* Decorative geometric elements */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.04]">
        <svg viewBox="0 0 400 800" fill="none" className="h-full w-full">
          <path d="M200 50 L380 400 L200 750 L20 400 Z" stroke="#2E2824" strokeWidth="0.5" />
          <path d="M200 150 L320 400 L200 650 L80 400 Z" stroke="#2E2824" strokeWidth="0.5" />
          <path d="M200 250 L260 400 L200 550 L140 400 Z" stroke="#2E2824" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Text content */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <SectionReveal>
              <div className="mb-6 flex items-center gap-3">
                <AmagusLogo className="h-6 w-6 text-primary" showInner={false} spin />
                <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">
                  Âmagus Lapidar
                </span>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h1 className="font-display text-foreground">
                <span className="block font-heading italic text-xl tracking-wide text-primary/70 sm:text-2xl">
                  Psicóloga
                </span>
                <span className="mt-2 block text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                  Ana Luiza
                </span>
                <span className="mt-1 block font-heading italic text-2xl text-foreground/35 sm:text-3xl">
                  Rigueira
                </span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="mt-7 font-heading text-xl leading-relaxed text-primary sm:text-2xl">
                Bem-vinda ao Âmagus Lapidar, um espaço de escuta, cuidado e reconstrução emocional.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/60">
                Para mulheres que desejam se sentir valorizadas, compreender seus padrões afetivos e construir relações mais conscientes.
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
                Entender como posso ser ajudada
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </SectionReveal>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <SectionReveal delay={0.15} y={60}>
              <div className="relative">
                <motion.div style={{ scale }} className="relative overflow-hidden">
                  <img
                    src={AMAGUS.images.hero}
                    alt="Ana Luiza Rigueira, psicóloga"
                    className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[520px]"
                  />
                  {/* Gold frame overlay */}
                  <div className="pointer-events-none absolute inset-4 border border-primary/15" />
                </motion.div>

                {/* Floating geometric accent */}
                <motion.div
                  style={{ y: overlayY }}
                  className="pointer-events-none absolute -left-4 -top-4 hidden lg:block"
                >
                  <AmagusLogo className="h-14 w-14 text-primary/30" showInner={false} />
                </motion.div>

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