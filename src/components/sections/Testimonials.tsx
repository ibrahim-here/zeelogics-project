import { motion } from 'framer-motion';

// Placeholder testimonials data matching the image layout
const TESTIMONIALS_DATA = [
  {
    id: 1,
    rating: 5,
    quote: "Special thanks to Tone with the date visualization feature work.",
    author: "Yihang Zhang",
    role: "Co-Founder",
    company: "Agora",
    logo: "https://via.placeholder.com/80x30/333/fff?text=Agora"
  },
  {
    id: 2,
    rating: 5,
    quote: "Despite the numerous Lottie animations incorporated into the page, the site loads quickly.",
    author: "John Smith",
    role: "CEO",
    company: "LottieSeries",
    logo: "https://via.placeholder.com/80x30/333/fff?text=LottieSeries"
  },
  {
    id: 3,
    rating: 5,
    quote: "I don't know exactly how this style of animation is achieved, but it is very lovely.",
    author: "Randy Hawk",
    role: "Founder",
    company: "TechCo",
    logo: "https://via.placeholder.com/80x30/333/fff?text=TechCo"
  },
  {
    id: 4,
    rating: 5,
    quote: "We also love the playful site ambience—strengthened by the typography and illustrations.",
    author: "Annette Grasso",
    role: "Executive Creative Director",
    company: "HubSpot",
    logo: "https://via.placeholder.com/80x30/333/fff?text=HubSpot"
  },
  {
    id: 5,
    rating: 5,
    quote: "It does an excellent job of communicating his prowess as an illustrator, animator, and designer in a creative manner.",
    author: "Sarah Johnson",
    role: "Design Lead",
    company: "HubSpot",
    logo: "https://via.placeholder.com/80x30/333/fff?text=HubSpot"
  },
  {
    id: 6,
    rating: 5,
    quote: "A talented 2D and 3D illustrator, animator, and brand & Webflow designer.",
    author: "Mike Chen",
    role: "Creative Director",
    company: "LottieSeries",
    logo: "https://via.placeholder.com/80x30/333/fff?text=LottieSeries"
  },
  {
    id: 7,
    rating: 5,
    quote: "Packed full of delightful animations and clever interactions.",
    author: "Emily Davis",
    role: "Product Manager",
    company: "Webflow",
    logo: "https://via.placeholder.com/80x30/333/fff?text=Webflow"
  },
  {
    id: 8,
    rating: 5,
    quote: "Reminds me of playing with blocks as a kid and letting your imagination do the heavy lifting.",
    author: "Teddy Hawk",
    role: "Founder",
    company: "DesignStudio",
    logo: "https://via.placeholder.com/80x30/333/fff?text=Studio"
  },
];

export default function Testimonials() {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];
  
  return (
    <section id="testimonials" className="relative bg-dark py-20 overflow-hidden">
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
          <p className="text-4xl mb-2">⭐⭐⭐⭐⭐</p>
          <p className="text-sm uppercase tracking-wider text-text-secondary mb-4">OUR SPOTLIGHT</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Those Who've Tasted
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Designs that <span className="text-white font-semibold">work</span>. Loved by <span className="text-white font-semibold">people</span>. Brands that <span className="text-white font-semibold">endure</span>.
          </p>
          </motion.div>
        </div>

        {/* Single Marquee Container with Fade Edges */}
        <div className="relative">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-6 md:w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
          
          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-6 md:w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />
          
          {/* Single Row - Scroll Left */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -3200], // Adjust based on total width
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`testimonial-${index}`}
                  className="bg-white text-dark p-6 rounded-xl flex flex-col justify-between min-h-[200px] w-[380px] flex-shrink-0"
                >
                  {/* Quote */}
                  <p className="text-sm leading-relaxed mb-4 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author Info Only - No Company */}
                  <div className="flex items-center gap-3">
                    {/* Avatar Placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">{testimonial.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
