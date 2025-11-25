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

      {/* CTA Button */}
      <div className="text-center mt-12">
        <a
          href="#calendly-placeholder"
          className="inline-flex items-center px-8 py-4 bg-neon text-dark font-semibold rounded-full hover:shadow-[0_0_30px_rgba(231,255,0,0.6)] hover:scale-105 transition-all duration-300"
        >
          Learn More About Us
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </SectionContainer>
  );
}
