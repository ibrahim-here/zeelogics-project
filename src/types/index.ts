// TypeScript interfaces and types for the Zeelogics website
import type { ReactNode } from 'react';

// Base types
export type BackgroundColor = 'dark' | 'charcoal' | 'lighter';
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type HoverEffect = 'glow' | 'border' | 'none';

// Component Props Interfaces
export interface SectionProps {
  id: string;
  backgroundColor: BackgroundColor;
  children: ReactNode;
  className?: string;
}

export interface ButtonProps {
  variant: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  ctaText?: string;
  ctaLink?: string;
  hoverEffect?: HoverEffect;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  ctaText: string;
  ctaLink: string;
}

export interface ServiceItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

// Content Data Interfaces
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  ctaText: string;
  ctaLink: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface AboutAttribute {
  id: string;
  text: string;
  icon: string;
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
