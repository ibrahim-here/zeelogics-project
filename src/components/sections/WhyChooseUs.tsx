import { motion } from 'framer-motion';
import asteriskIcon from '../../assets/icons/asterisk.png';
import alterSectionBg from '../../assets/alter-section.png';

// Enhanced problem data with facts and numbers
const ENHANCED_PROBLEMS = [
  {
    id: 'visibility',
    title: (
      <>
        Lack <span className="text-neon">Visibility</span>
      </>
    ),
    description: (
      <>
        <span className="text-white font-semibold">94% of first impressions</span> are design-driven. 
        Without visibility, your brand remains invisible to{' '}
        <span className="text-white font-semibold">75% of potential customers</span>.
      </>
    ),
  },
  {
    id: 'disconnected',
    title: (
      <>
        <span className="text-neon">Disconnected</span> Systems
      </>
    ),
    description: (
      <>
        Businesses lose <span className="text-white font-semibold">30% of leads</span> due to poor follow-up. 
        Integration gaps cost <span className="text-white font-semibold">$1.2M annually</span> in lost productivity.
      </>
    ),
  },
  {
    id: 'scale',
    title: (
      <>
        Don't <span className="text-neon">Scale</span>
      </>
    ),
    description: (
      <>
        Manual processes consume <span className="text-white font-semibold">40% of work hours</span>. 
        Automation increases efficiency by <span className="text-white font-semibold">3-5x</span> while reducing costs.
      </>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us" 
      className="relative py-20 px-10 -mx-10"
      style={{
        backgroundImage: `url(${alterSectionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/85 pointer-events-none" />
      
      <div className="w-full relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-wider text-text-secondary mb-4">THE PROBLEM</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Why Most Brands <span className="text-neon">Stay Hidden</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            The real barriers to growth and how Zeelogics removes them.
          </p>
        </div>

        {/* Problems - Descending Layout */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-8">
          {ENHANCED_PROBLEMS.map((problem, index) => {
            // More descending heights: 1st highest, 3rd lowest
            const heightClass = ['md:h-[650px]', 'md:h-[550px]', 'md:h-[450px]'][index];

            return (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex-1 ${heightClass} flex flex-col items-start`}
              >
                {/* Icon - Left aligned with heading */}
                <div className="mb-8 flex-shrink-0">
                  <img
                    src={asteriskIcon}
                    alt="Asterisk Icon"
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 max-w-[60%]">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
