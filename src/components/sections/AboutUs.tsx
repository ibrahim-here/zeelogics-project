import SectionContainer from '../shared/SectionContainer';
import { ABOUT_CONTENT, ABOUT_ATTRIBUTES } from '../../constants/content';
import { Zap, Target, Award } from 'lucide-react';

export default function AboutUs() {
  const iconMap: Record<string, React.ElementType> = {
    Zap,
    Target,
    Award,
  };

  return (
    <SectionContainer id="about" backgroundColor="lighter">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="heading-lg mb-6 text-text-primary">
            {ABOUT_CONTENT.heading}
          </h2>
          <div className="space-y-4">
            {ABOUT_CONTENT.body.map((paragraph, index) => (
              <p key={index} className="body-lg text-text-secondary max-w-prose">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right: Icon Bullets */}
        <div className="space-y-6">
          {ABOUT_ATTRIBUTES.map((attribute) => {
            const IconComponent = iconMap[attribute.icon];
            return (
              <div
                key={attribute.id}
                className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-charcoal/30 hover:border-neon/30 transition-colors"
              >
                {IconComponent && (
                  <div className="flex-shrink-0">
                    <IconComponent size={28} className="text-neon" />
                  </div>
                )}
                <p className="body-lg text-text-primary">{attribute.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
