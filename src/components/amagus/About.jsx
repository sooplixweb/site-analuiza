import { AMAGUS } from '@/lib/amagusConfig';
import SectionReveal from './SectionReveal';

const PILLARS = [
  { title: 'Ciência', desc: 'Prática baseada em evidências.' },
  { title: 'Ética', desc: 'Sigilo e respeito em cada passo.' },
  { title: 'Presença', desc: 'Escuta inteira, sem pressa.' },
  { title: 'História', desc: 'O ponto de partida do cuidado.' },
];

const CREDENTIALS = [
  { value: `${AMAGUS.yearsExperience}`, label: 'anos de escuta clínica' },
  { value: `CRP ${AMAGUS.crp}`, label: 'registro profissional' },
  { value: AMAGUS.university, label: 'formação em Psicologia' },
];

export default function About() {
  return (
    <section id="quem-sou" className="amagus-pattern-light relative overflow-hidden pt-14 pb-12 sm:pt-16 lg:pt-20 lg:pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
        <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Portrait + credentials */}
          <div className="lg:col-span-5">
            <SectionReveal y={40}>
              <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
                <img
                  src={AMAGUS.images.about}
                  alt="Ana Luiza Rigueira em seu consultório"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-3 border border-primary/15" />
                <div className="pointer-events-none absolute -right-3 -bottom-3 h-16 w-16 border-r border-b border-primary/25 sm:h-20 sm:w-20" />
              </div>

              <dl className="mx-auto mt-6 grid max-w-sm grid-cols-3 divide-x divide-primary/12 border border-primary/12 sm:max-w-md lg:max-w-none">
                {CREDENTIALS.map((item) => (
                  <div key={item.label} className="px-3 py-4 text-center">
                    <dt className="font-display text-lg text-foreground sm:text-xl">{item.value}</dt>
                    <dd className="mt-1 text-[11px] leading-snug tracking-wide text-foreground/50">{item.label}</dd>
                  </div>
                ))}
              </dl>
            </SectionReveal>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7">
            <SectionReveal>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">
                Quem sou eu
              </span>
              <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                Sou Ana Luiza.
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/70 sm:mt-7">
                <p className="text-lg text-foreground/80">
                  Há {AMAGUS.yearsExperience} anos acompanho mulheres em momentos em que a vida parece ter perdido o rumo.
                </p>
                <p>
                  Ao longo desses anos percebi que, por trás da ansiedade, dos conflitos nos relacionamentos, do luto, da culpa ou da baixa autoestima, quase sempre existe uma história que ainda não pôde ser contada com segurança.
                </p>
                <p>
                  Meu trabalho não é dizer o que você deve fazer. É ajudar você a compreender por que sente o que sente, reconhecer padrões construídos ao longo da vida e encontrar caminhos mais conscientes para viver suas relações consigo mesma e com o mundo.
                </p>
                <p>
                  Acredito numa psicologia profundamente humana, baseada em ciência, ética e presença.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="mt-7 flex items-center gap-4">
                <span className="h-px w-10 bg-primary/40" />
                <span className="font-heading text-lg italic text-primary/80">Ana Luiza Rigueira</span>
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* Pillars band */}
        <SectionReveal delay={0.15}>
          <div className="mt-12 border-t border-primary/12 pt-8 sm:mt-14 lg:mt-16">
            <div className="grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4 sm:gap-x-6">
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="group">
                  <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rotate-45 bg-primary transition-transform duration-500 group-hover:rotate-[135deg]" />
                    <h3 className="font-display text-xl text-foreground sm:text-2xl">{pillar.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/55">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
