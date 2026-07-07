import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AMAGUS, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/amagusConfig';
import OnlineStatus from './OnlineStatus';
import OfficialLogo from './OfficialLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ?
      'bg-background/90 backdrop-blur-md border-b border-primary/10' :
      'bg-transparent'}`
      }>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          className={`relative flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'h-16'
              : 'h-[72px] lg:h-auto lg:flex-col lg:justify-center lg:gap-3 lg:py-5'
          }`}
        >
          {/* Logo — single instance:
              - expanded (top): hidden on mobile (Hero shows the logo), centered & large on desktop
              - scrolled: compact, left-aligned, on every breakpoint */}
          <a
            href="#inicio"
            className={`group items-center transition-all duration-500 ${
              scrolled
                ? 'flex static translate-x-0'
                : 'hidden lg:flex lg:static lg:w-auto lg:translate-x-0 lg:justify-center'
            }`}
            aria-label="Âmagus Lapidar - Ana Luiza Rigueira"
          >
            <OfficialLogo
              loading="eager"
              className={`transition-all duration-500 group-hover:opacity-80 ${
                scrolled
                  ? 'w-[150px] opacity-100 sm:w-[174px] lg:w-[190px]'
                  : 'w-[480px] opacity-100 brightness-[.72] lg:w-[480px]'
              }`}
            />
          </a>

          {/* Desktop nav — inline (right) when scrolled, centered below the logo when expanded */}
          <nav className="static hidden items-center gap-8 transition-all duration-500 lg:flex">
            {AMAGUS.navItems.map((item) =>
            <a
              key={item.href}
              href={item.href}
              className="group relative font-body text-sm text-foreground/70 transition-colors duration-300 hover:text-foreground">

                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2 -ml-2"
            aria-label="Abrir menu">

            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen &&
      <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-primary/10 animate-fade-in">
          <nav className="flex flex-col px-6 py-6 space-y-4">
            {AMAGUS.navItems.map((item) =>
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="font-body text-sm text-foreground/80 transition-colors hover:text-primary">

                {item.label}
              </a>
          )}
            <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-2.5 justify-center px-6 py-3 bg-foreground text-background text-xs tracking-[0.15em] uppercase mt-2">

              <OnlineStatus />
              Conversar com a Ana
            </a>
          </nav>
        </div>
      }
    </header>);

}
