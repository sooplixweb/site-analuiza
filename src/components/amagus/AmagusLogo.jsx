import { motion } from 'framer-motion';

export default function AmagusLogo({ className = '', showInner = true, spin = false }) {
  const svg = (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer diamond */}
      <path
        d="M50 4 L96 50 L50 96 L4 50 Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Crown facets (top half) */}
      <path d="M50 4 L50 50 L4 50" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <path d="M50 4 L50 50 L96 50" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      {/* Pavilion facets (bottom half) */}
      <path d="M50 96 L50 50 L4 50" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <path d="M50 96 L50 50 L96 50" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      {/* Diagonal facet lines */}
      <path d="M50 4 L27 27 L4 50" stroke="currentColor" strokeWidth="0.35" opacity="0.35" />
      <path d="M50 4 L73 27 L96 50" stroke="currentColor" strokeWidth="0.35" opacity="0.35" />
      <path d="M50 96 L27 73 L4 50" stroke="currentColor" strokeWidth="0.35" opacity="0.35" />
      <path d="M50 96 L73 73 L96 50" stroke="currentColor" strokeWidth="0.35" opacity="0.35" />
      {showInner && (
        <>
          {/* Inner star/diamond */}
          <path
            d="M50 34 L60 50 L50 66 L40 50 Z"
            fill="currentColor"
            opacity="0.12"
          />
          {/* Center point */}
          <circle cx="50" cy="50" r="1.8" fill="currentColor" />
        </>
      )}
    </motion.svg>
  );

  if (spin) {
    return <span className="animate-amagus-windmill">{svg}</span>;
  }
  return svg;
}