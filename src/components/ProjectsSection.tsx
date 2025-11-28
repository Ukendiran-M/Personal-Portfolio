import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import StarBorder from './StarBorder';

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
    <section id="projects" className="min-h-screen flex items-center py-24 bg-black dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-2 flex items-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.1, type: 'spring' }}
          >
            <span className="text-red-400">03.</span> Projects
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full mb-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
            style={{ originX: 0 }}
          />
          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center mb-12 gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
          >
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
              <motion.button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-md transition-all ${
                  filter === tag
                    ? 'bg-red-400 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>
          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="bg-gray-900 dark:bg-black rounded-lg overflow-hidden border border-gray-800 group hover:border-red-400/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + idx * 0.08, duration: 0.6, type: 'spring' }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px #f87171' }}
              >
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
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
                  </motion.div>
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
              </motion.div>
            ))}
          </motion.div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found with the selected filter.</p>
              <StarBorder
                as="button"
                onClick={() => setFilter('all')}
                className="mt-4"
              >
                Show All Projects
              </StarBorder>
            </div>
          )}
          <div className="text-center mt-12">
            <StarBorder
              as="a"
              href="https://github.com/Ukendiran-M"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center"
            >
              <span className="inline-flex items-center">
                <Code size={20} className="mr-2" />
                See More on GitHub
              </span>
            </StarBorder>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;