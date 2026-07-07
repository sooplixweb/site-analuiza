import { AMAGUS } from '@/lib/amagusConfig';
import SectionReveal from './SectionReveal';
import AmagusLogo from './AmagusLogo';

const POINTS = [
  'Ciência',
  'Ética',
  'Presença',
  'História',
];

export default function About() {
  return (
    <section id="quem-sou" className="amagus-pattern-light relative py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image — asymmetric placement */}
          <div className="lg:col-span-5 lg:col-start-1">
            <SectionReveal y={50}>
              <div className="relative">
                <img
                  src={AMAGUS.images.about}
                  alt="Ana Luiza Rigueira em seu consultório"
                  className="h-[360px] w-full object-cover sm:h-[460px]"
                />
                <div className="pointer-events-none absolute inset-3 border border-primary/15" />
                {/* Offset accent */}
                <div className="absolute -right-3 -bottom-3 h-20 w-20 border-r border-b border-primary/25" />
              </div>
            </SectionReveal>
          </div>

          {/* Text — offset to the right */}
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionReveal>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">
                Quem sou eu
              </span>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                Sou Ana Luiza.
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/70">
                <p>
                  Há 16 anos acompanho mulheres em momentos em que a vida parece ter perdido o rumo.
                </p>
                <p>
                  Ao longo desses anos percebi que, por trás da ansiedade, dos conflitos nos relacionamentos, do luto, da culpa ou da baixa autoestima, quase sempre existe uma história que ainda não pôde ser contada com segurança.
                </p>
                <p>
                  Meu trabalho não é dizer o que você deve fazer.
                </p>
                <p>
                  É ajudar você a compreender por que sente o que sente, reconhecer padrões construídos ao longo da vida e encontrar caminhos mais conscientes para viver suas relações consigo mesma e com o mundo.
                </p>
                <p>
                  Acredito numa psicologia profundamente humana, baseada em ciência, ética e presença.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="mt-10 border-t border-primary/15 pt-9">
                <div className="relative mx-auto h-[250px] w-[250px] sm:h-[280px] sm:w-[280px]">
                  <div className="absolute inset-5 rounded-full border border-primary/15" />
                  <div className="absolute inset-12 rounded-full border border-primary/10" />

                  <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-primary/25 bg-background/70 text-primary shadow-[0_18px_45px_rgba(46,40,36,0.08)] backdrop-blur-sm">
                    <AmagusLogo className="h-14 w-14 animate-amagus-orbit-center" />
                  </div>

                  <div className="amagus-orbit absolute inset-0">
                    {POINTS.map((point, index) => (
                      <span
                        key={point}
                        className="amagus-orbit-item absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-primary/20 bg-background/85 px-4 py-2 font-heading text-sm text-foreground/80 shadow-[0_12px_30px_rgba(46,40,36,0.08)] backdrop-blur-sm"
                        style={{
                          '--angle': `${index * 90}deg`,
                          '--radius': '104px',
                        }}
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
