import { useState, useEffect } from 'react';
import { Button } from '../ui';
import alterSectionBg from '../../assets/alter-section.png';

export default function FinalCTA() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Convert to Houston time (CST/CDT - UTC-6/-5)
  const houstonTime = new Date(time.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
  const hours = houstonTime.getHours();
  const minutes = houstonTime.getMinutes();
  const seconds = houstonTime.getSeconds();

  // Calculate angles for clock hands
  const secondAngle = (seconds * 6) - 90; // 6 degrees per second
  const minuteAngle = (minutes * 6 + seconds * 0.1) - 90; // 6 degrees per minute
  const hourAngle = ((hours % 12) * 30 + minutes * 0.5) - 90; // 30 degrees per hour

  return (
    <section 
      id="contact" 
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
        <div className="max-w-2xl mx-auto text-center">
          {/* Pre-heading */}
          <p className="text-lg md:text-xl text-text-secondary mb-4 uppercase tracking-wider">
            Ready to Transform?
          </p>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-16">
            Let's Roll.
          </h2>

          {/* Analog Clock */}
          <div className="relative w-64 h-64 mx-auto mb-12">
            {/* Clock Face */}
            <div className="absolute inset-0 rounded-full bg-dark border-4 border-white/20">
              {/* Clock Numbers 1-12 */}
              <div className="absolute inset-0">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number, index) => {
                  const angle = (index * 30) - 90; // 30 degrees per position
                  const radius = 100; // Distance from center
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <div
                      key={number}
                      className="absolute text-white text-lg font-semibold"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      {number}
                    </div>
                  );
                })}
              </div>

              {/* Center Dot */}
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-neon rounded-full transform -translate-x-1/2 -translate-y-1/2 z-30" />

              {/* Hour Hand - Neon */}
              <div
                className="absolute top-1/2 left-1/2 origin-left z-20"
                style={{
                  width: '60px',
                  height: '4px',
                  backgroundColor: '#E7FF00',
                  transform: `translate(0px, -2px) rotate(${hourAngle}deg)`,
                  borderRadius: '2px',
                }}
              />

              {/* Minute Hand - Neon */}
              <div
                className="absolute top-1/2 left-1/2 origin-left z-20"
                style={{
                  width: '80px',
                  height: '3px',
                  backgroundColor: '#E7FF00',
                  transform: `translate(0px, -1.5px) rotate(${minuteAngle}deg)`,
                  borderRadius: '2px',
                }}
              />

              {/* Second Hand - Neon */}
              <div
                className="absolute top-1/2 left-1/2 origin-left z-20"
                style={{
                  width: '90px',
                  height: '2px',
                  backgroundColor: '#E7FF00',
                  transform: `translate(0px, -1px) rotate(${secondAngle}deg)`,
                  borderRadius: '1px',
                }}
              />


            </div>
          </div>

          {/* Location Text */}
          <p className="text-base md:text-lg text-text-secondary mb-2">
            We guess you're in a Good Place?
          </p>
          <p className="text-base md:text-lg text-text-primary font-semibold mb-12">
            We're on <span className="text-white">Houston Time (CST)</span>.
          </p>

          {/* Address */}
          <p className="text-sm text-text-secondary mb-8">
            3724 FM 1960 W. #124B<br />
            Houston, TX 77068
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              href="#contact"
            >
              Talk with Us
            </Button>
            <a
              href="#contact"
              className="text-text-primary hover:text-neon transition-colors underline text-lg font-medium"
            >
              or Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
