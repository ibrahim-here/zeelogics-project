import { motion } from 'framer-motion';
import { useState } from 'react';
import projectAlfa from '../../assets/projects/project-alfa.PNG?url';
import alfaMobile from '../../assets/projects/alfa-verputzer-mobile.png';
import luckyImage from '../../assets/projects/lucky.png';
import ndisImage from '../../assets/projects/ndis.png';
import shorroshImage from '../../assets/projects/shorrosh.png';
import texasImage from '../../assets/projects/texas-crafts.png';

const PROJECTS = [
  {
    id: 1,
    title: 'Alfa Verputzer & Maler',
    category: 'Construction & Painting Services',
    year: '2025',
    image: projectAlfa,
    hoverImage: alfaMobile,
    url: 'https://www.alfa-verputzer-maler.de/',
    width: '60%',
    height: 'h-[450px] md:h-[550px]',
  },
  {
    id: 2,
    title: 'Lucky Cruz',
    category: 'Golf Profile & Donations',
    year: '2025',
    image: luckyImage,
    url: 'https://luckycruz.org/',
    width: '40%',
    height: 'h-[450px] md:h-[550px]',
  },
  {
    id: 3,
    title: 'Cherish Life Care Services',
    category: 'NDIS Healthcare',
    year: '2025',
    image: ndisImage,
    url: 'https://cherishlifecs.com.au/',
    width: '50%',
    height: 'h-[450px] md:h-[600px]',
  },
  {
    id: 4,
    title: 'Shorrosh Family Foundation',
    category: 'Non-Profit Organization',
    year: '2025',
    image: shorroshImage,
    url: 'http://shorroshfamilyfoundation.com',
    width: '50%',
    height: 'h-[450px] md:h-[600px]',
  },
  {
    id: 5,
    title: 'Texas Crafts',
    category: 'E-Commerce & Crafts',
    year: '2025',
    image: texasImage,
    url: 'https://texascraftwings.com/',
    width: '45%',
    height: 'h-[450px] md:h-[650px]',
  },
];

export default function Projects() {

  return (
    <section id="projects" className="relative bg-dark pt-0 md:pt-48 pb-20 -mt-20 md:mt-0">
      <div className="w-full">
        {/* Projects Grid - No Heading */}
        <div className="space-y-6">
          {/* Row 1: Alfa (60%) - Lucky (40%) */}
          <div className="flex flex-col md:flex-row gap-6">
            <ProjectCard project={PROJECTS[0]} />
            <ProjectCard project={PROJECTS[1]} />
          </div>

          {/* Row 2: Cherish (50%) - Shorrosh (50%) */}
          <div className="flex flex-col md:flex-row gap-6">
            <ProjectCard project={PROJECTS[2]} />
            <ProjectCard project={PROJECTS[3]} />
          </div>

          {/* Row 3: Texas Crafts (45%) */}
          <div>
            <ProjectCard project={PROJECTS[4]} />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#calendly-placeholder"
            className="inline-flex items-center px-8 py-4 bg-neon text-dark font-semibold rounded-full hover:shadow-[0_0_30px_rgba(231,255,0,0.6)] hover:scale-105 transition-all duration-300"
          >
            Start Your Project
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    year: string;
    image: string;
    hoverImage?: string;
    url: string;
    width: string;
    height: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ width: window.innerWidth < 768 ? '100%' : project.width }}
      className="group w-full relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Custom Cursor - Positioned relative to card */}
      {isHovered && (
        <div
          className="absolute pointer-events-none z-50 flex items-center justify-center"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-24 h-24 rounded-full bg-neon flex items-center justify-center">
            <span className="text-dark font-bold text-sm text-center">View<br/>Live</span>
          </div>
        </div>
      )}

      {/* Image Card */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className={`relative ${project.height} overflow-hidden rounded-xl mb-4 cursor-none`}>
          <img
            src={isHovered && project.hoverImage ? project.hoverImage : project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        {/* Project Info */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-neon transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary">{project.category}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-text-secondary">{project.year}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
