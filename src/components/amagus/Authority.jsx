import { BookOpen, HeartHandshake, MonitorCheck, Timer } from 'lucide-react';
import SectionReveal from './SectionReveal';

const PROOFS = [
  { icon: Timer, text: '16 anos de experiência clínica' },
  { icon: MonitorCheck, text: 'Atendimento presencial e online' },
  { icon: BookOpen, text: 'Formação continuada em trauma, neurociência e saúde mental' },
  { icon: HeartHandshake, text: 'Experiência com relacionamentos, luto, ansiedade e reconstrução de vínculos' },
];

export default function Authority() {
  return (
    <section id="autoridade" className="amagus-pattern-dark relative py-14 lg:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <SectionReveal>
          <span className="mb-10 block font-body text-xs uppercase tracking-[0.3em] text-primary/60">
            Experiência clínica
          </span>
          <h2 className="font-display text-3xl leading-tight text-background sm:text-4xl lg:text-5xl">
            Uma trajetória construída<br className="hidden sm:block" /> com escuta e responsabilidade
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {PROOFS.map(({ icon: Icon, text }, i) => (
            <SectionReveal key={text} delay={(i % 2) * 0.08}>
              <div className="group relative h-full overflow-hidden border border-primary/10 bg-background/[0.025] p-6 transition-all duration-500 hover:border-primary/40 hover:bg-primary/[0.06] sm:p-7">
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center border border-primary/25 text-primary transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/10">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-heading text-xl leading-relaxed text-background/70">{text}</p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-primary/50 transition-all duration-500 group-hover:w-full" />
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.4}>
          <div className="mt-16 border-t border-primary/10 pt-10">
            <blockquote className="text-center font-heading text-2xl italic leading-relaxed text-primary/70 sm:text-3xl">
              "Antes de qualquer resposta, existe uma história.<br />Antes de qualquer direção, existe escuta."
            </blockquote>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
