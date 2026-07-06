import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AMAGUS, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/amagusConfig';
import AmagusLogo from './AmagusLogo';
import OnlineStatus from './OnlineStatus';

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
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo + name */}
          <a href="#inicio" className="group flex items-center gap-3">
            <AmagusLogo className="h-7 w-7 text-primary transition-transform duration-500 group-hover:rotate-90" showInner={false} />
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg text-foreground tracking-wide">Âmagus Lapidar</span>
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary/70">Ana Luiza Rigueira</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
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

          {/* Desktop CTA with Online/Offline status */}
          







          

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Abrir menu">
            
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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