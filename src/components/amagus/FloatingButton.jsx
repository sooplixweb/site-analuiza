import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FloatingButton({ onClick }) {
  const [glowing, setGlowing] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.03, 0.08], [0, 0, 1]);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      setGlowing(scrolled / max > 0.4);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.button
      onClick={onClick}
      style={{ opacity }}
      className="group fixed bottom-6 right-6 z-[100] flex flex-col items-center gap-2"
      aria-label="Entender meu momento — Recanto Âmagus"
    >
      {/* Label */}
      <span className="pointer-events-none max-w-0 overflow-hidden whitespace-nowrap text-xs font-body tracking-wide text-primary opacity-0 transition-all duration-500 group-hover:max-w-[160px] group-hover:opacity-100">
        Entender meu momento
      </span>

      {/* Faceted diamond button */}
      <div
        className={`relative flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-500 ${
          glowing
            ? 'border-primary/60 bg-foreground/80 backdrop-blur-sm animate-glow-pulse'
            : 'border-primary/25 bg-foreground/60 backdrop-blur-sm'
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          className="h-9 w-9 animate-rotate-slow text-primary"
          aria-hidden="true"
        >
          <path d="M50 6 L94 50 L50 94 L6 50 Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M50 6 L50 50 L6 50" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
          <path d="M50 6 L50 50 L94 50" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
          <path d="M50 94 L50 50 L6 50" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
          <path d="M50 94 L50 50 L94 50" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
          <path d="M50 34 L62 50 L50 66 L38 50 Z" fill="currentColor" opacity="0.15" />
          <circle cx="50" cy="50" r="2" fill="currentColor" />
        </svg>
      </div>
    </motion.button>
  );
}
