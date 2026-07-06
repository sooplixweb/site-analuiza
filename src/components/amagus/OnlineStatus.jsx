import { useEffect, useState } from 'react';

export default function OnlineStatus({ className = '' }) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      setIsOnline(now.getHours() >= 8 && now.getHours() < 18);
    };
    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (isOnline === null) return null;

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="relative flex h-2 w-2">
        {isOnline && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-background/30'}`} />
      </span>
      <span className={`text-[10px] tracking-wide ${isOnline ? 'text-green-400' : 'text-background/40'}`}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </span>
  );
}