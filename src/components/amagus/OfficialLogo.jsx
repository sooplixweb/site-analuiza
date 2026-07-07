const LOGO_SRC = '/assets/amagus/logo-magus.svg';

export default function OfficialLogo({
  className = '',
  alt = 'Âmagus Lapidar | Ana Luiza Rigueira',
  loading = 'lazy',
}) {
  return (
    <img
      src={LOGO_SRC}
      alt={alt}
      loading={loading}
      decoding="async"
      draggable="false"
      className={`block h-auto select-none ${className}`}
    />
  );
}
