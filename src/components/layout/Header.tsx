import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo from '../../assets/zeelogics.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6; // 60vh
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="px-5 md:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <a
            href="#hero"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Zeelogics Logo" className="h-16 md:h-20 w-auto" />
          </a>

          {/* Navigation Links - Center */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <li>
              <a
                href="#projects"
                className="text-text-secondary hover:text-neon transition-colors body-md"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-text-secondary hover:text-neon transition-colors body-md"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-text-secondary hover:text-neon transition-colors body-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#how-we-work"
                className="text-text-secondary hover:text-neon transition-colors body-md"
              >
                How We Work
              </a>
            </li>
          </ul>

          {/* CTA Button - Right */}
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-neon text-dark font-semibold hover:shadow-[0_0_30px_rgba(231,255,0,0.6)] hover:scale-105 transition-all duration-300 body-md"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
