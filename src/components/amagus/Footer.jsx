import { Instagram, MapPin, MessageCircle } from 'lucide-react';
import { AMAGUS, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/amagusConfig';
import AmagusLogo from './AmagusLogo';

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-foreground py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <AmagusLogo className="h-10 w-10 flex-shrink-0 text-primary" showInner={false} />
          <div>
            <span className="font-display text-2xl tracking-wide text-background">Âmagus Lapidar</span>
            <div className="mt-1 flex flex-col gap-1 text-sm text-background/55 sm:flex-row sm:items-center sm:gap-2">
              <span className="font-display text-base text-background/80">Ana Luiza Rigueira</span>
              <span className="hidden text-background/25 sm:inline">|</span>
              <span>Psicóloga · CRP {AMAGUS.crp}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-sm text-background/65 md:flex-row md:flex-wrap md:justify-center lg:justify-end">
          <a
            href={AMAGUS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 transition-colors hover:text-primary"
          >
            <Instagram className="h-4 w-4 text-primary/60 transition-colors group-hover:text-primary" />
            <span>{AMAGUS.instagram}</span>
          </a>
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 transition-colors hover:text-primary"
          >
            <MessageCircle className="h-4 w-4 text-primary/60 transition-colors group-hover:text-primary" />
            <span>WhatsApp</span>
          </a>
          <div className="flex max-w-sm items-start gap-3 text-center text-background/50 md:text-left">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary/60" />
            <span>{AMAGUS.address}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-primary/10 px-6 pt-6 lg:px-12">
        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-background/30 lg:text-left">
          Âmagus Lapidar © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
