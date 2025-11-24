import type { ServiceItemProps } from '../../types';

export default function ServiceItem({ icon, title, description }: ServiceItemProps) {
  return (
    <div
      className="group p-6 rounded-lg border border-white/10 bg-charcoal/50 transition-all duration-300 hover:border-neon hover:shadow-[0_0_25px_rgba(0,255,0,0.2)] flex flex-col h-full"
      role="article"
      aria-label={`Service: ${title}`}
    >
      {/* Icon */}
      <div className="mb-4 text-neon transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <h3 className="heading-md mb-3 text-text-primary">{title}</h3>

      {/* Description */}
      <p className="body-md text-text-secondary flex-grow">{description}</p>
    </div>
  );
}
