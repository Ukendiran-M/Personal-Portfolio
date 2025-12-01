import React from 'react';
import CardSwap, { Card } from './CardSwap';
import { usePinSectionOnEnter } from './usePinSectionOnEnter';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
}

import HotelEuropaImg from '../assets/projects/Hotel-Europa.png';
import PrintoraImg from '../assets/projects/Printora.png';
import PsicologaImg from '../assets/projects/Psicologa.png';
import PuerhcraftImg from '../assets/projects/Puerhcraft.png';
import MarketingFortImg from '../assets/projects/Marketing-Fort.png';
import RuizhiHealthcareImg from '../assets/projects/Ruizhi-Healthcare.jpeg';

const projects: Project[] = [
  // --- New Cards (Web Only) ---
  {
    id: 101,
    title: 'Hotel Europa',
    description: `Hotel Europa is a 3-star business and leisure hotel in the heart of Foggia, Italy, just 100 meters from the station. It offers refined comfort, fast Wi-Fi, private bathrooms, and a warm, welcoming atmosphere for both business travelers and tourists.`,
    image: HotelEuropaImg,
    tags: ['Hotel', 'Business', 'Italy'],
    github: '',
    demo: 'https://www.hoteleuropafoggia.com/',
    featured: false,
  },
  {
    id: 102,
    title: 'Printora',
    description: `Printora is your partner for professional digital printing in Italy. Specializing in DTF, banners, rigid supports, and more, Printora delivers high-quality, fast, and competitively priced printing solutions with an easy-to-use online editor.`,
    image: PrintoraImg,
    tags: ['Printing', 'E-Commerce', 'Italy'],
    github: '',
    demo: 'https://www.printora.it/',
    featured: false,
  },
  {
    id: 103,
    title: 'Psicologa Rosati',
    description: `A welcoming, safe space for therapy and personal growth. Simona Rosati offers in-person and online psychological support for anxiety, sadness, and self-discovery, with a focus on trust, respect, and attentive listening.`,
    image: PsicologaImg,
    tags: ['Psychology', 'Therapy', 'Italy'],
    github: '',
    demo: 'https://www.psicologasimonarosati.com/',
    featured: false,
  },
  {
    id: 104,
    title: 'Puerh Craft',
    description: `Puerh Craft delivers authentic, ethically sourced Pu-erh tea from Yunnan, China. Experience premium quality, expert selection, and a mindful tea ritual that supports holistic well-being and honors tradition and craftsmanship.`,
    image: PuerhcraftImg,
    tags: ['Tea', 'E-Commerce', 'China'],
    github: '',
    demo: 'https://puerhcraft.com/',
    featured: false,
  },
  {
    id: 105,
    title: 'Marketing Fort',
    description: `Marketing Fort is a results-driven digital agency that guarantees growth for ambitious business owners. Specializing in SEO, digital marketing, and custom strategies, they tie their success directly to client results—if they don’t deliver, they don’t get paid.`,
    image: MarketingFortImg,
    tags: ['Digital Agency', 'SEO', 'Growth'],
    github: '',
    demo: 'https://www.marketing-fort.com/',
    featured: false,
  },
  {
    id: 106,
    title: 'Ruizhi Healthcare',
    description: `A modern healthcare website designed for accessibility and patient engagement. This project is currently under development and will soon offer comprehensive healthcare solutions online.`,
    image: RuizhiHealthcareImg,
    tags: ['Healthcare', 'Medical', 'Under Development'],
    github: '',
    demo: '', // No link, button commented out
    featured: false,
  },
];

const ProjectsSection: React.FC = () => {
  const isPinned = usePinSectionOnEnter('projects', 10000);

  return (
    <section id="projects" className="min-h-screen flex items-center py-24 bg-black dark:bg-gray-950 text-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
            <span className="text-red-400">03.</span> Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full mb-12" />
          <div className="w-full max-w-5xl mx-auto" style={{ height: '600px', position: 'relative' }}>
            {isPinned && (
              <div className="pointer-events-none absolute left-0 right-0 top-[15px] flex items-start justify-center z-20">
                <div className="flex items-center gap-3 text-xs md:text-base tracking-[0.16em] uppercase text-white/75 bg-black/60 rounded-full px-6 py-2 shadow-lg animate-pulse">
                  <svg className="animate-spin w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  <span className="whitespace-nowrap">Auto-swapping cards: Project Showcase</span>
                </div>
              </div>
            )}
            <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false} width="100%">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="w-full min-h-[350px] md:min-h-[320px] md:w-full md:max-w-none bg-gradient-to-br from-gray-900/90 to-black/80 shadow-2xl border border-red-500/30 overflow-hidden flex flex-col cursor-pointer group mx-auto md:mx-0"
                  onClick={() => {
                    if (window.innerWidth < 768 && project.demo) {
                      window.open(project.demo, '_blank');
                    }
                  }}
                >
                  <div className="relative flex flex-col md:flex-row h-full w-full gap-4 md:gap-0 items-stretch md:items-center justify-center md:justify-start">
                    {/* Left: Image + Tags */}
                    <div className="relative h-52 md:h-full md:w-1/2 flex flex-col justify-between">
                      <div className="relative h-52 md:h-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center rounded-none md:rounded-l-2xl"
                        />
                        <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="backdrop-blur-md bg-black/40 px-3 py-1 rounded-full text-xs font-bold text-white border border-pink-400/40 shadow-sm uppercase tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="absolute bottom-3 left-3 bg-red-500/90 text-white text-xs px-3 py-1 rounded-full shadow font-bold tracking-widest uppercase">
                          {project.featured ? 'Featured' : 'Project'}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent pointer-events-none rounded-none md:rounded-l-2xl" />
                      </div>
                    </div>
                    {/* Right: Content */}
                    <div className="flex flex-col justify-between h-full px-4 py-5 md:px-10 md:py-7 bg-white/10 backdrop-blur-lg rounded-b-2xl md:rounded-none md:rounded-r-2xl border-t border-white/10 md:border-t-0 md:border-l md:w-1/2">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight leading-tight drop-shadow-lg text-center md:text-left relative inline-block font-sans">
                          <span className="pr-2">{project.title}</span>
                          <span className="absolute left-0 bottom-0 w-2/3 h-[3px] bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-80" />
                        </h3>
                        <p className="text-xs md:text-base font-semibold text-gray-200 mb-4 leading-relaxed tracking-normal text-center md:text-left font-mono line-clamp-2 md:line-clamp-none">
                          {/* Mobile: 2-line summary, Desktop: full description */}
<span className="block md:hidden">
  {(() => {
    switch (project.title) {
      case 'Hotel Europa':
        return '3-star hotel in Foggia, Italy. Comfort for business and leisure.';
      case 'Printora':
        return 'High-quality digital printing. Fast, easy, and affordable.';
      case 'Psicologa Simona Rosati':
        return 'Therapy and support for personal growth. Safe, welcoming space.';
      case 'Puerh Craft':
        return 'Authentic Pu-erh tea, ethically sourced from Yunnan.';
      case 'Marketing Fort':
        return 'Digital agency focused on results and business growth.';
      case 'Ruizhi Healthcare':
        return 'Modern healthcare platform (under development).';
      default:
        return project.description.slice(0, 90) + (project.description.length > 90 ? '...' : '');
    }
  })()}
</span>
<span className="hidden md:block">{project.description}</span>
                        </p>
                      </div>
                      <div className="flex gap-4 justify-center md:justify-start mt-auto">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-red-400 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold border border-white/10 shadow hover:from-pink-500 hover:to-red-500 transition-all duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 3h7v7m0 0L10 21l-7-7 11-11z"/></svg>
                          Visit website
                        </a>
                        <span className="block md:hidden w-full text-center text-xs text-pink-400 mt-1 mb-8 font-bold tracking-wider animate-pulse select-none pointer-events-none">
                          Tap card to view live website
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;