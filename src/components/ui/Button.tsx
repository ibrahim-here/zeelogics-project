import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonVariant, ButtonSize } from '../../types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  href?: string;
  ariaLabel?: string;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  ariaLabel,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-dark rounded-full';

  const variantStyles = {
    primary:
      'bg-neon text-dark hover:shadow-[0_0_30px_rgba(231,255,0,0.6)] hover:scale-105 active:scale-95 font-semibold',
    secondary:
      'bg-transparent border-2 border-neon/30 text-neon hover:bg-neon/10 hover:border-neon hover:shadow-[0_0_20px_rgba(231,255,0,0.3)] backdrop-blur-sm',
  };

  const sizeStyles = {
    sm: 'px-5 py-2 text-sm min-h-[36px] min-w-[36px]',
    md: 'px-7 py-3 text-base min-h-[44px] min-w-[44px]',
    lg: 'px-9 py-4 text-lg min-h-[52px] min-w-[52px]',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        aria-label={ariaLabel}
        role="button"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClassName}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
