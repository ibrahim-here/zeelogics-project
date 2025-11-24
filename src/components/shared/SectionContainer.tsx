import type { ReactNode } from 'react';
import type { BackgroundColor } from '../../types';

interface SectionContainerProps {
  id: string;
  backgroundColor: BackgroundColor;
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  id,
  backgroundColor,
  children,
  className = '',
}: SectionContainerProps) {
  const bgStyles = {
    dark: 'bg-dark',
    charcoal: 'bg-charcoal bg-pattern-overlay',
    lighter: 'bg-lighter bg-pattern-overlay',
  };

  return (
    <section
      id={id}
      className={`${bgStyles[backgroundColor]} py-20 md:py-32 ${className}`}
    >
      <div className="container mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
}
