import { Linkedin, Twitter, Github } from 'lucide-react';
import { FOOTER_CONTENT } from '../../constants/content';
import logo from '../../assets/zeelogics.png';

export default function Footer() {
  const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
    Linkedin,
    Twitter,
    Github,
  };

  return (
    <footer className="bg-black py-12 md:py-16">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {/* Left: Logo & Tagline */}
          <div>
            <img src={logo} alt="Zeelogics Logo" className="h-16 md:h-20 w-auto mb-4" />
            <p className="body-sm text-text-secondary">{FOOTER_CONTENT.tagline}</p>
          </div>

          {/* Center: Navigation Links */}
          <div>
            <h4 className="heading-sm mb-4 text-text-primary">Navigation</h4>
            <nav>
              <ul className="space-y-2">
                {FOOTER_CONTENT.navigation.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="body-md text-text-secondary hover:text-neon transition-colors focus:outline-none focus:text-neon"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right: Contact & Social */}
          <div>
            <h4 className="heading-sm mb-4 text-text-primary">Contact</h4>
            <div className="space-y-2 mb-4">
              <p className="body-md text-text-secondary">
                <a
                  href={`mailto:${FOOTER_CONTENT.contact.email}`}
                  className="hover:text-neon transition-colors focus:outline-none focus:text-neon"
                >
                  {FOOTER_CONTENT.contact.email}
                </a>
              </p>
              <p className="body-md text-text-secondary">
                <a
                  href={`tel:${FOOTER_CONTENT.contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-neon transition-colors focus:outline-none focus:text-neon"
                >
                  {FOOTER_CONTENT.contact.phone}
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {FOOTER_CONTENT.social.map((social) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    aria-label={social.platform}
                    className="text-text-secondary hover:text-neon transition-colors focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-lighter rounded"
                  >
                    {IconComponent && <IconComponent size={24} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="body-sm text-center text-text-muted">
            {FOOTER_CONTENT.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
