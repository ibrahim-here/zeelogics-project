import type { ReactNode } from 'react';

interface IconProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Icon({ children, size = 'md', className = '' }: IconProps) {
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  return (
    <div className={`inline-flex items-center justify-center ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  );
}
