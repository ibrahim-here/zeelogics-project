import type { ReactNode } from 'react';
import type { HoverEffect } from '../../types';

interface CardProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  ctaText?: string;
  ctaLink?: string;
  hoverEffect?: HoverEffect;
  children?: ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  ctaText,
  ctaLink,
  hoverEffect = 'glow',
  children,
  className = '',
}: CardProps) {
  const baseStyles =
    'rounded-lg border border-white/10 bg-charcoal/50 p-6 transition-all duration-300';

  const hoverStyles = {
    glow: 'hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] hover:-translate-y-1',
    border: 'hover:border-neon hover:shadow-[0_0_20px_rgba(0,255,0,0.15)]',
    none: '',
  };

  return (
    <div className={`${baseStyles} ${hoverStyles[hoverEffect]} ${className}`}>
      {icon && <div className="mb-4 text-neon">{icon}</div>}
      
      {title && (
        <h3 className="heading-md mb-3 text-text-primary">{title}</h3>
      )}
      
      {description && (
        <p className="body-md mb-4 text-text-secondary">{description}</p>
      )}
      
      {children}
      
      {ctaText && ctaLink && (
        <a
          href={ctaLink}
          className="inline-flex items-center text-neon hover:underline focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-charcoal"
        >
          {ctaText}
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      )}
    </div>
  );
}
