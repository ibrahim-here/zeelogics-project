import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
}

export default function ScrollIndicator({ targetId, className = '' }: ScrollIndicatorProps) {
  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`animate-bounce text-neon hover:text-neon/80 transition-colors focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-dark rounded-full p-2 ${className}`}
      aria-label="Scroll down"
    >
      <ChevronDown size={32} />
    </button>
  );
}
