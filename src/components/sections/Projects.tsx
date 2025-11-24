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
    height: 'h-[650px]',
  },
  {
    id: 2,
    title: 'Lucky Cruz',
    category: 'Golf Profile & Donations',
    year: '2025',
    image: luckyImage,
    url: 'https://luckycruz.org/',
    width: '40%',
    height: 'h-[650px]',
  },
  {
    id: 3,
    title: 'Cherish Life Care Services',
    category: 'NDIS Healthcare',
    year: '2025',
    image: ndisImage,
    url: 'https://cherishlifecs.com.au/',
    width: '50%',
    height: 'h-[700px]',
  },
  {
    id: 4,
    title: 'Shorrosh Foundation',
    category: 'Non-Profit Organization',
    year: '2025',
    image: shorroshImage,
    url: 'https://shorrosh-foundation-latest-1.vercel.app/',
    width: '50%',
    height: 'h-[700px]',
  },
  {
    id: 5,
    title: 'Texas Crafts',
    category: 'E-Commerce & Crafts',
    year: '2025',
    image: texasImage,
    url: '#',
    width: '45%',
    height: 'h-[750px]',
  },
];

export default function Projects() {

  return (
    <section id="projects" className="relative bg-dark pt-48 pb-20">
      <div className="w-full">
        {/* Projects Grid - No Heading */}
        <div className="space-y-6">
          {/* Row 1: Alfa (60%) - Lucky (40%) */}
          <div className="flex flex-col md:flex-row gap-6">
            <ProjectCard project={PROJECTS[0]} index={0} />
            <ProjectCard project={PROJECTS[1]} index={1} />
          </div>

          {/* Row 2: Cherish (50%) - Shorrosh (50%) */}
          <div className="flex flex-col md:flex-row gap-6">
            <ProjectCard project={PROJECTS[2]} index={2} />
            <ProjectCard project={PROJECTS[3]} index={3} />
          </div>

          {/* Row 3: Texas Crafts (45%) */}
          <div>
            <ProjectCard project={PROJECTS[4]} index={4} />
          </div>
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
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ width: project.width }}
      className="group w-full md:w-auto relative"
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
