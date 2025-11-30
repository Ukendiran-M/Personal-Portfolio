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

const projects: Project[] = [
  {
    id: 1,
    title: 'Pharmacy Management System',
    description: 'Pharmacy management is used for selling pharmaceutical products, adding stocks, to know the expiry date of the product.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['HTML', 'CSS', 'Javascript', 'SQL'],
    github: 'https://github.com/Ukendiran-M/Pharmacy-Management-System',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Sports E-Commerce Platform',
    description: 'Souled is an E-commerce platform which used for selling sports clothing.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/Ukendiran-M/Souled-E-Commerce',
    demo: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Spyder AI with Object Detection Model',
    description: 'Spyder AI is a Voice assistant with Object Detection Model, which is developed by Python Scripts.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Yolo', 'Python', 'API Integration', 'Console-Based'],
    github: 'https://github.com/Ukendiran-M/Spyder-Voice-Assistant',
    demo: '#',
    featured: false,
  },
  // {
  //   id: 4,
  //   title: 'Portfolio Website',
  //   description: 'A personal portfolio website built with React and Tailwind CSS. Features include responsive design, dark/light mode, and animated page transitions.',
  //   image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   tags: ['React', 'Tailwind CSS', 'TypeScript'],
  //   github: '#',
  //   demo: '#',
  //   featured: false,
  // },
  // {
  //   id: 5,
  //   title: 'Recipe Finder App',
  //   description: 'A recipe finder application that allows users to search for recipes based on ingredients, dietary restrictions, and meal types. Features include user accounts and saved recipes.',
  //   image: 'https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   tags: ['React', 'Firebase', 'API Integration'],
  //   github: '#',
  //   demo: '#',
  //   featured: false,
  // },
  // {
  //   id: 6,
  //   title: 'Chat Application',
  //   description: 'A real-time chat application with features like private messaging, group chats, and file sharing. Built with React, Socket.IO, and Node.js.',
  //   image: 'https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   tags: ['React', 'Socket.IO', 'Node.js', 'Express'],
  //   github: '#',
  //   demo: '#',
  //   featured: true,
  // },
];

const ProjectsSection: React.FC = () => {
  const isPinned = usePinSectionOnEnter('projects', 5000);

  return (
    <section id="projects" className="min-h-screen flex items-center py-24 bg-black dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
            <span className="text-red-400">03.</span> Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full mb-12" />
          <div className="w-full max-w-5xl mx-auto" style={{ height: '600px', position: 'relative' }}>
            {isPinned && (
              <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-6 md:pb-8 z-20">
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
                <Card key={project.id} className="w-full max-w-5xl h-[26rem] md:h-[27.5rem] bg-gradient-to-br from-gray-900/90 to-black/80 shadow-2xl border border-red-500/30 overflow-hidden">
                  <div className="relative grid grid-cols-1 md:grid-cols-2 h-full w-full">
                    {/* Left: Image + Tags */}
                    <div className="relative h-52 md:h-full flex flex-col justify-between">
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
                    <div className="flex flex-col justify-between h-full px-8 py-7 bg-white/10 backdrop-blur-lg rounded-none md:rounded-r-2xl border-l border-white/10">
                      <div>
                        <h3 className="text-3xl font-extrabold text-white mb-3 drop-shadow-lg text-left relative inline-block">
                          <span className="pr-2">{project.title}</span>
                          <span className="absolute left-0 bottom-0 w-2/3 h-1 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full opacity-60" />
                        </h3>
                        <p className="text-gray-200 mb-6 text-base leading-relaxed line-clamp-4 text-left">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex gap-4 justify-start mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-black/70 border border-red-400 text-red-300 px-5 py-2 rounded-lg font-semibold hover:bg-red-500/80 hover:text-white hover:border-red-500 shadow transition-all duration-200"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.176 6.839 9.504.5.092.682-.217.682-.482 0-.238-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.193 22 16.442 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
                          GitHub
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-red-400 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold border border-white/10 shadow hover:from-pink-500 hover:to-red-500 transition-all duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 3h7v7m0 0L10 21l-7-7 11-11z"/></svg>
                          Live Demo
                        </a>
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