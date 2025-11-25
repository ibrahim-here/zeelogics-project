import { motion } from 'framer-motion';
import { HOW_WE_WORK_CONTENT, PROCESS_STEPS } from '../../constants/content';
import alterSectionBg from '../../assets/alter-section.png';

export default function HowWeWork() {
  return (
    <section 
      id="how-we-work" 
      className="relative py-20 -mx-10"
      style={{
        backgroundImage: `url(${alterSectionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/85 pointer-events-none" />
      
      <div className="w-full relative z-10 px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-text-secondary mb-4">OUR PROCESS</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            {HOW_WE_WORK_CONTENT.heading}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            {HOW_WE_WORK_CONTENT.subtext}
          </p>
        </motion.div>

        {/* Process Steps - 2 Rows Layout */}
        <div className="space-y-6">
          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROCESS_STEPS.slice(0, 3).map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-transparent border-2 border-white/20 hover:border-neon/50 transition-all duration-500 p-6 rounded-xl overflow-hidden"
              >
                {/* Radial Gradient Hover Effect - Full Width */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 100% 35% at bottom, rgba(231, 255, 0, 0.15) 0%, transparent 100%)',
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Large Serial Number with Dot */}
                  <div className="text-7xl font-bold text-neon mb-4">
                    {step.stepNumber}.
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-primary mb-3 text-left">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed text-left">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {PROCESS_STEPS.slice(3, 5).map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                className="group relative bg-transparent border-2 border-white/20 hover:border-neon/50 transition-all duration-500 p-6 rounded-xl overflow-hidden"
              >
                {/* Radial Gradient Hover Effect - Full Width */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 100% 35% at bottom, rgba(231, 255, 0, 0.15) 0%, transparent 100%)',
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Large Serial Number with Dot */}
                  <div className="text-7xl font-bold text-neon mb-4">
                    {step.stepNumber}.
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-primary mb-3 text-left">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed text-left">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#calendly-placeholder"
            className="inline-flex items-center px-8 py-4 bg-neon text-dark font-semibold rounded-full hover:shadow-[0_0_30px_rgba(231,255,0,0.6)] hover:scale-105 transition-all duration-300"
          >
            Let's Work Together
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
