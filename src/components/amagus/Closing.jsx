import { ArrowRight, Instagram } from 'lucide-react';
import { AMAGUS, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/amagusConfig';
import SectionReveal from './SectionReveal';

export default function Closing() {
  return (
    <section id="fechamento" className="amagus-pattern-dark relative flex min-h-[80vh] items-center py-24 lg:py-40">
      {/* Decorative geometry */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <div className="h-[440px] w-[440px] rotate-45 border border-background/50" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-12">
        <SectionReveal>
          <span className="mb-12 block font-body text-xs uppercase tracking-[0.3em] text-primary/60">
            Próximo passo
          </span>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="font-display text-4xl leading-tight text-background sm:text-5xl lg:text-6xl">
            Você não precisa<br className="hidden sm:block" /> atravessar tudo sozinha.
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl font-heading text-xl italic leading-relaxed text-background/60 sm:text-2xl">
            Se algo dentro de você sente que é hora de olhar para sua história com mais cuidado, talvez esse seja o primeiro passo.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.35}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-sm tracking-wide text-foreground transition-all duration-300 hover:bg-primary/90"
            >
              Conversar com a Ana Luiza
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={AMAGUS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary/25 px-8 py-4 text-sm tracking-wide text-background/70 transition-all duration-300 hover:border-primary/50 hover:text-background"
            >
              <Instagram className="h-4 w-4" />
              Ver Instagram
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
