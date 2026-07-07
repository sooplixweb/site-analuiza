import SectionReveal from './SectionReveal';

const PHRASES = [
  'vive tentando ser suficiente para todo mundo e esqueceu de si.',
  'sente que sempre acaba vivendo relações parecidas.',
  'carrega culpas que já não consegue explicar.',
  'perdeu alguém importante e sente que uma parte sua foi embora junto.',
  'sabe que precisa mudar, mas não entende por onde começar.',
  'sente que está sobrevivendo quando gostaria de voltar a viver.',
];

export default function HowCanHelp() {
  return (
    <section id="como-posso-ajudar" className="amagus-pattern-dark relative py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <SectionReveal>
          <span className="mb-10 block font-body text-xs uppercase tracking-[0.3em] text-primary/60">
            Como posso ajudar
          </span>
          <h2 className="font-display text-3xl leading-tight text-background sm:text-4xl lg:text-5xl">
            Talvez você tenha chegado aqui porque...
          </h2>
        </SectionReveal>

        <div className="mt-12 lg:mt-16">
          <div className="border-t border-primary/10" />
          {PHRASES.map((phrase, i) => (
            <SectionReveal key={phrase} delay={i * 0.07}>
              <div className="group flex items-baseline gap-4 border-b border-primary/10 py-5 transition-colors duration-300 hover:bg-primary/[0.02] sm:gap-8 sm:py-6">
                <span className="font-heading text-sm italic text-primary/40 sm:text-base">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-heading text-lg text-background/70 transition-colors duration-300 group-hover:text-background sm:text-xl lg:text-2xl">
                  {phrase}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
