import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [variant, setVariant] = useState('ring');
  const [visible, setVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target;
      const isInteractive = target.closest(
        'a, button, [role="button"], input, select, textarea, label, [data-cursor="hover"]'
      );
      setVariant(isInteractive ? 'dot' : 'ring');
    };

    const leaveWindow = () => setVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', leaveWindow);
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', leaveWindow);
      document.body.style.cursor = '';
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
    >
      {variant === 'ring' ? (
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full border border-primary/50"
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      ) : (
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.15 }}
        />
      )}
    </motion.div>
  );
}