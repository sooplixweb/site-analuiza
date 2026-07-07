import { Instagram, MapPin, MessageCircle } from 'lucide-react';
import { AMAGUS, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/amagusConfig';
import OfficialLogo from './OfficialLogo';

const footerLinks = [
  {
    label: 'Instagram',
    value: AMAGUS.instagram,
    href: AMAGUS.instagramUrl,
    icon: Instagram,
  },
  {
    label: 'WhatsApp',
    value: 'Conversar com a Ana',
    href: whatsappLink(DEFAULT_WHATSAPP_MESSAGE),
    icon: MessageCircle,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-foreground px-6 py-14 text-background lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <OfficialLogo className="w-[260px] sm:w-[320px]" />

        <p className="mt-5 text-sm text-background/55">
          Psicóloga · CRP {AMAGUS.crp}
        </p>

        <div className="mt-10 h-px w-full max-w-4xl bg-primary/12" />

        <div className="mt-10 grid w-full max-w-5xl gap-8 md:grid-cols-3 md:gap-10">
          {footerLinks.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[118px] flex-col items-center justify-center text-center"
            >
              <Icon className="h-5 w-5 text-primary/70 transition-colors group-hover:text-primary" />
              <span className="mt-4 text-[10px] uppercase tracking-[0.25em] text-background/35">
                {label}
              </span>
              <span className="mt-2 text-sm leading-relaxed text-background/70 transition-colors group-hover:text-primary">
                {value}
              </span>
            </a>
          ))}

          <div className="flex min-h-[118px] flex-col items-center justify-center text-center">
            <MapPin className="h-5 w-5 text-primary/70" />
            <span className="mt-4 text-[10px] uppercase tracking-[0.25em] text-background/35">
              Consultório
            </span>
            <span className="mt-2 max-w-sm text-sm leading-relaxed text-background/60">
              {AMAGUS.address}
            </span>
          </div>
        </div>

        <div className="mt-10 h-px w-full max-w-4xl bg-primary/12" />

        <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-background/28">
          © {new Date().getFullYear()} Ana Luiza Rigueira
        </p>
      </div>
    </footer>
  );
}
