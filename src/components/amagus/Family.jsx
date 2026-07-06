import { motion, useScroll, useTransform } from 'framer-motion';
import { AMAGUS } from '@/lib/amagusConfig';
import SectionReveal from './SectionReveal';
import AmagusLogo from './AmagusLogo';

export default function Family() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, -40]);

  return (
    <section id="familia" className="amagus-pattern-light relative py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <SectionReveal y={50}>
              <div className="relative overflow-hidden">
                <motion.img
                  style={{ y: imageY }}
                  src={AMAGUS.images.family}
                  alt="Mãos segurando xícaras de chá — símbolo de acolhimento e rede de apoio"
                  className="h-[360px] w-full scale-110 object-cover sm:h-[480px] lg:h-[560px]"
                />
                <div className="pointer-events-none absolute inset-4 border border-primary/15" />
                {/* Corner accent */}
                <div className="absolute -left-3 -top-3 h-16 w-16 border-l border-t border-primary/25" />
              </div>
            </SectionReveal>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <SectionReveal>
              <AmagusLogo className="h-8 w-8 text-primary" showInner={false} />
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2 className="mt-8 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Sua família também pode fazer parte do cuidado
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="mt-8 text-base leading-relaxed text-foreground/70">
                Em alguns momentos, compreender a rede de apoio é parte importante do processo. Quando há diálogo, respeito e orientação, a família pode contribuir para que a pessoa se sinta menos sozinha na travessia.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px w-12 bg-primary/40" />
                <span className="font-heading text-sm italic text-primary">
                  diálogo · respeito · orientação
                </span>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}