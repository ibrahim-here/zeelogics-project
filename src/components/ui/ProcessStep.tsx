import type { ProcessStepProps } from '../../types';

export default function ProcessStep({
  stepNumber,
  title,
  description,
  icon,
}: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step Number Circle */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-neon bg-dark text-neon">
        <span className="heading-sm">{stepNumber}</span>
      </div>

      {/* Icon */}
      <div className="mb-4 text-neon">{icon}</div>

      {/* Title */}
      <h3 className="heading-sm mb-2 text-text-primary">{title}</h3>

      {/* Description */}
      <p className="body-md text-text-secondary max-w-xs">{description}</p>
    </div>
  );
}
