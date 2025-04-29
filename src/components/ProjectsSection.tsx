import React, { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

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
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.tags.includes(filter));
  
  const uniqueTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  return (
    <section id="projects" className="py-24 bg-black dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-red-400">03.</span> Projects
          </h2>
          <div className="w-24 h-1 bg-red-400 mb-12"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === 'all' 
                  ? 'bg-red-400 text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === 'featured' 
                  ? 'bg-red-400 text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              Featured
            </button>
            {uniqueTags.slice(0, 6).map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-md transition-all ${
                  filter === tag 
                    ? 'bg-red-400 text-black' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg -gray-900 dark:bg-black rounded-lg overflow-hidden border border-gray-800 group hover:border-red-400/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)]"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-black bg-opacity-70 p-2 rounded-full transform transition-transform duration-300 hover:scale-110"
                      >
                        <Github size={20} className="text-white" />
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-black bg-opacity-70 p-2 rounded-full transform transition-transform duration-300 hover:scale-110"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 rounded-md bg-black-200 border border-red-400 text-red-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found with the selected filter.</p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 px-6 py-2 bg-red-400 text-black rounded-md transition-all hover:bg-red-500"
              >
                Show All Projects
              </button>
            </div>
          )}
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/Ukendiran-M" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-transparent border border-red-400 text-red-400 hover:bg-red-400/10 font-medium rounded-md transition-all"
            >
              <Code size={20} className="mr-2" />
              See More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;