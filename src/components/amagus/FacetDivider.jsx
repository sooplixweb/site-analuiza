import AmagusLogo from './AmagusLogo';

export default function FacetDivider({ variant = 'light', className = '' }) {
  const color = variant === 'light' ? 'text-primary/40' : 'text-primary/50';
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className={`h-px w-16 bg-current ${color}`} />
      <AmagusLogo className={`w-4 h-4 ${color}`} showInner={false} />
      <div className={`h-px w-16 bg-current ${color}`} />
    </div>
  );
}