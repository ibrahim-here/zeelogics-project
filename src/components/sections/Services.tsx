import { motion } from 'framer-motion';
import { SERVICES_CONTENT } from '../../constants/content';

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-20">
      <div className="w-full">
        {/* Section Heading */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
          <p className="text-sm uppercase tracking-wider text-text-secondary mb-4">HOW, YOU ASK?</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            {SERVICES_CONTENT.heading}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            {SERVICES_CONTENT.intro}
          </p>
          </motion.div>
        </div>

        {/* Bento Grid Wrapper with Charcoal Background */}
        <div className="bg-charcoal rounded-3xl p-6 md:p-10">
          {/* Bento Grid - Mobile: Stack, Desktop: Original Layout */}
          <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - 60% - Web Design & Development with Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden bg-black border border-white/10 hover:border-neon/30 transition-all duration-300 w-full md:w-[60%] min-h-[400px] md:min-h-[600px] flex flex-col justify-end p-6 md:p-8 rounded-2xl"
          >
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-all duration-500"
              >
                <source src="https://res.cloudinary.com/tone/video/upload/v1742466858/podium-mackbook.mockup-short_u7qpez.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">Web Design & Development</h3>
              <p className="text-base text-text-secondary leading-relaxed">
                Premium websites built to convert, engage, and scale your business.
              </p>
            </div>
          </motion.div>

          {/* Right Column - 40% */}
          <div className="flex flex-col gap-6 w-full md:w-[40%]">
            {/* Top Row - AI Automation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden bg-black border border-white/10 hover:border-neon/30 transition-all duration-300 min-h-[250px] md:min-h-[280px] flex flex-col justify-end p-6 md:p-8 rounded-2xl"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src="https://i.pinimg.com/1200x/73/07/9c/73079cb83aedc740eb8daffe2665abcc.jpg"
                  alt="AI Automation"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">AI Automation</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Intelligent workflows that save time and boost productivity.
                </p>
              </div>
            </motion.div>

            {/* Bottom Row - 2 columns */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left - AI Agents and CRM stacked */}
              <div className="flex flex-col gap-6 w-full md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group relative overflow-hidden bg-black border border-white/10 hover:border-neon/30 transition-all duration-300 min-h-[200px] md:min-h-[180px] flex flex-col justify-end p-6 rounded-2xl"
                >
                  <div className="absolute inset-0 z-0">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-all duration-500"
                    >
                      <source src="https://cdn.dribbble.com/userupload/45216117/file/3d3095b6bc865da0d95a9227c93e1bfe.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">AI Agents</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Smart assistants that handle tasks 24/7.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group relative overflow-hidden bg-black border border-white/10 hover:border-neon/30 transition-all duration-300 min-h-[200px] md:min-h-[180px] flex flex-col justify-end p-6 rounded-2xl"
                >
                  <div className="absolute inset-0 z-0">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-all duration-500"
                    >
                      <source src="https://cdn.dribbble.com/userupload/15065510/file/original-5da98e635284fff47f1ee0bf4f08ec54.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">CRM & ERP</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Integrated systems for seamless operations.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right - Lead Generation (tall) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative overflow-hidden bg-black border border-white/10 hover:border-neon/30 transition-all duration-300 w-full md:w-1/2 min-h-[250px] md:min-h-[380px] flex flex-col justify-end p-6 rounded-2xl"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://cdn.dribbble.com/userupload/45098293/file/f11b7c5ffe5d1b07a2c79847f953f21d.png?resize=1200x900&vertical=center"
                    alt="Lead Generation"
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Lead Generation</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Strategic campaigns that drive qualified leads and conversions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          </div>
          {/* End Bento Grid */}
        </div>
        {/* End Bento Grid Wrapper */}
      </div>
    </section>
  );
}
