import SectionReveal from './SectionReveal';

const PHRASES = [
  'Sinto que não sou valorizada.',
  'Tenho dificuldade de me posicionar.',
  'Minha ansiedade atravessa meus relacionamentos.',
  'Estou vivendo uma separação, perda ou luto.',
  'Quero entender por que repito os mesmos padrões.',
  'Preciso voltar a me reconhecer.',
  'Minha família também faz parte dessa dor.',
];

export default function HowCanHelp() {
  return (
    <section id="como-posso-ajudar" className="amagus-pattern-dark relative py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <SectionReveal>
          <span className="mb-10 block font-body text-xs uppercase tracking-[0.3em] text-primary/60">
            Como posso ajudar
          </span>
          <h2 className="font-display text-3xl leading-tight text-background sm:text-4xl lg:text-5xl">
            Talvez você tenha chegado aqui<br className="hidden sm:block" /> porque algo dentro de você<br className="hidden sm:block" /> pede cuidado.
          </h2>
        </SectionReveal>

        <div className="mt-16 lg:mt-20">
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
