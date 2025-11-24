import type { ProjectCardProps } from '../../types';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({
  title,
  description,
  image,
  ctaText,
  ctaLink,
}: ProjectCardProps) {
  return (
    <div
      className="group rounded-lg border border-white/10 bg-charcoal/50 p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] hover:-translate-y-2 flex flex-col h-full"
      role="article"
      aria-label={`Project: ${title}`}
    >
      {/* Image Placeholder */}
      {image && (
        <div className="mb-4 aspect-video w-full overflow-hidden rounded-md bg-lighter">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="heading-md mb-3 text-text-primary">{title}</h3>
        <p className="body-md mb-6 text-text-secondary flex-grow">{description}</p>

        {/* CTA Link */}
        <a
          href={ctaLink}
          className="inline-flex items-center gap-2 text-neon hover:gap-3 transition-all focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-charcoal rounded"
          aria-label={`${ctaText} for ${title}`}
        >
          <span className="font-medium">{ctaText}</span>
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
}
