import SectionReveal from './SectionReveal';

export default function NarrativeDivider({ children, tone = 'light' }) {
  const isDark = tone === 'dark';

  return (
    <section
      className={`relative overflow-hidden py-8 sm:py-10 ${
        isDark ? 'bg-foreground text-background' : 'bg-[#F9F5F1] text-foreground'
      }`}
      aria-label="Frase de transição"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]">
        <div
          className={`h-44 w-44 rounded-full border ${
            isDark ? 'border-primary/60' : 'border-primary/40'
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <SectionReveal>
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className={`h-px w-12 ${isDark ? 'bg-primary/40' : 'bg-primary/35'}`} />
            <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
            <span className={`h-px w-12 ${isDark ? 'bg-primary/40' : 'bg-primary/35'}`} />
          </div>
          <p className={`font-heading text-xl italic leading-relaxed sm:text-2xl ${
            isDark ? 'text-background/75' : 'text-foreground/70'
          }`}>
            {children}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
