import SectionReveal from './SectionReveal';
import AmagusLogo from './AmagusLogo';

const PROOFS = [
  '16 anos de atuação',
  'CRP 16/11155',
  'Mais de 21 mil pessoas acompanham seus conteúdos',
  'Temas frequentes: relacionamento, luto, trauma, libido feminina e livros',
  'Conteúdo psicológico com linguagem acessível e responsabilidade ética',
];

export default function Authority() {
  return (
    <section id="autoridade" className="amagus-pattern-dark relative py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <SectionReveal>
          <AmagusLogo className="h-8 w-8 text-primary mb-10" showInner={false} />
          <h2 className="font-display text-3xl leading-tight text-background sm:text-4xl lg:text-5xl">
            Uma trajetória construída<br className="hidden sm:block" /> com escuta e responsabilidade
          </h2>
        </SectionReveal>

        <div className="mt-16 space-y-6">
          {PROOFS.map((proof, i) => (
            <SectionReveal key={proof} delay={i * 0.08}>
              <div className="flex items-start gap-4">
                <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-primary" />
                <p className="font-heading text-lg text-background/70 sm:text-xl">{proof}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.4}>
          <div className="mt-20 border-t border-primary/10 pt-12">
            <blockquote className="text-center font-heading text-2xl italic leading-relaxed text-primary/70 sm:text-3xl">
              "Antes de qualquer resposta, existe uma história.<br />Antes de qualquer direção, existe escuta."
            </blockquote>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}