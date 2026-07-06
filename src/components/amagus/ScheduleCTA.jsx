import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Compass, X } from 'lucide-react';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE, formatRecantoWhatsAppMessage } from '@/lib/amagusConfig';
import SectionReveal from './SectionReveal';
import AmagusLogo from './AmagusLogo';

export default function ScheduleCTA({ onRecanto, recantoAnswers }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const hasRecanto = recantoAnswers && recantoAnswers.tema;

  const openWhatsApp = (message) => {
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  const handleContact = () => {
    if (hasRecanto) setShowConfirm(true);
    else openWhatsApp(DEFAULT_WHATSAPP_MESSAGE);
  };

  return (
    <section id="contato" className="amagus-pattern-dark relative flex min-h-[60vh] items-center py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <AmagusLogo className="h-[420px] w-[420px] text-background" showInner={false} />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-12">
        <SectionReveal>
          <AmagusLogo className="mx-auto h-10 w-10 text-primary mb-10" showInner={false} />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="font-display text-4xl leading-tight text-background sm:text-5xl lg:text-6xl">
            Vamos conversar?
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-background/60 sm:text-xl">
            O primeiro passo pode ser hoje. Escreva para a Ana Luiza pelo WhatsApp — um espaço de escuta, sem pressa e sem julgamentos.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.35}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={handleContact}
              className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 text-sm tracking-wide text-foreground transition-all duration-300 hover:bg-primary/90"
            >
              <MessageCircle className="h-4 w-4" />
              Conversar no WhatsApp
            </button>
            <button
              onClick={onRecanto}
              className="group inline-flex items-center justify-center gap-3 border border-primary/25 px-8 py-4 text-sm tracking-wide text-background/70 transition-all duration-300 hover:border-primary/50 hover:text-background"
            >
              <Compass className="h-4 w-4" />
              Entender meu momento
            </button>
          </div>
        </SectionReveal>

        <AnimatePresence>
          {showConfirm && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto mt-8 max-w-md border border-primary/20 bg-foreground/[0.04] p-6 text-left backdrop-blur-sm"
            >
              <button
                onClick={() => setShowConfirm(false)}
                className="absolute right-4 top-4 text-background/40 transition-colors hover:text-primary"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="pr-6 font-heading text-base leading-relaxed text-background/80">
                Você já respondeu o Recanto Âmagus. Deseja enviar o resultado junto com sua mensagem?
              </p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <button
                  onClick={() => {
                    openWhatsApp(formatRecantoWhatsAppMessage(recantoAnswers));
                    setShowConfirm(false);
                  }}
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-primary px-5 py-3 text-xs tracking-wide text-foreground transition-all duration-300 hover:bg-primary/90"
                >
                  Enviar com meu Recanto
                </button>
                <button
                  onClick={() => {
                    openWhatsApp(DEFAULT_WHATSAPP_MESSAGE);
                    setShowConfirm(false);
                  }}
                  className="inline-flex flex-1 items-center justify-center gap-2 border border-primary/25 px-5 py-3 text-xs tracking-wide text-background/70 transition-all duration-300 hover:border-primary/50 hover:text-background"
                >
                  Apenas conversar
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}