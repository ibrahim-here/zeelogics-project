import type { TestimonialProps } from '../../types';
import { Quote } from 'lucide-react';

export default function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <div
      className="group p-8 rounded-lg border border-white/10 bg-charcoal/30 transition-all duration-300 hover:border-neon/30 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] flex flex-col h-full"
      role="article"
      aria-label={`Testimonial from ${author}`}
    >
      {/* Quote Icon */}
      <div className="mb-4 text-neon/50">
        <Quote size={32} />
      </div>

      {/* Quote Text */}
      <blockquote className="body-lg italic text-text-primary mb-6 flex-grow">
        "{quote}"
      </blockquote>

      {/* Author Info */}
      <div className="border-t border-white/10 pt-4">
        <p className="body-md font-medium text-text-primary">{author}</p>
        <p className="body-sm text-text-secondary">
          {role}, {company}
        </p>
      </div>
    </div>
  );
}
