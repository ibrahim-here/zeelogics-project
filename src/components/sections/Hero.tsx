import { motion } from 'framer-motion';
import { Button } from '../ui';
import DarkVeil from '../ui/DarkVeil';
import { HERO_CONTENT } from '../../constants/content';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[50vh] md:h-[60vh] flex-col items-center justify-center bg-dark overflow-visible pt-24 md:pt-32 -mx-10"
    >
      {/* DarkVeil Background - Full Coverage */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <DarkVeil 
            hueShift={185}
            noiseIntensity={0}
            speed={2}
            scanlineFrequency={0}
            scanlineIntensity={0}
            warpAmount={0}
          />
        </div>
      </div>

      {/* Content Container - No Glassmorphism */}
      <div className="container mx-auto max-w-4xl text-center relative z-10 px-10">
        {/* Eyebrow Text with Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-4 md:mb-6 mt-12 md:mt-20"
        >
          <span className="eyebrow px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-neon/10 border border-neon/30 text-neon backdrop-blur-sm text-xs md:text-sm">
            {HERO_CONTENT.eyebrow}
          </span>
        </motion.div>

        {/* Main Heading - Two Lines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 md:mb-14 text-text-primary leading-tight"
        >
          {HERO_CONTENT.heading}<br />
          <span className="italic font-normal" style={{ fontFamily: 'Playfair Display, serif' }}>
            {HERO_CONTENT.headingSecond}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base md:text-lg mb-6 md:mb-10 text-text-secondary max-w-3xl mx-auto"
        >
          {HERO_CONTENT.subheading}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="primary" size="lg" href="#contact">
            {HERO_CONTENT.primaryCTA}
          </Button>
          <Button variant="secondary" size="lg" href="#projects">
            {HERO_CONTENT.secondaryCTA}
          </Button>
        </motion.div>
      </div>

    </section>
  );
}
