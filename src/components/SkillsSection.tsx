import React from 'react';
import { Layout, Database, Terminal, Server } from 'lucide-react';
import InfiniteMenu from './InfiniteMenu';
import frontendImg from '../assets/frontend.png';
import backendImg from '../assets/backend.png';
import databaseImg from '../assets/database.png';
import platformbaseImg from '../assets/platformbased.png';
import techStackImg from '../assets/TechStack.png';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: <Layout className="w-6 h-6 text-teal-400" />,
    skills: [
      { name: 'HTML/CSS', level: 90, category: 'Frontend' },
      { name: 'JavaScript', level: 85, category: 'Frontend' },
      { name: 'React', level: 65, category: 'Frontend' },
      { name: 'TailWind', level: 40, category: 'Frontend' },
    ],
  },
  {
    name: 'Backend',
    icon: <Server className="w-6 h-6 text-purple-500" />,
    skills: [
      { name: 'WordPress', level: 85, category: 'Backend' },
      { name: 'Shopify Liquid', level: 80, category: 'Backend' },
      { name: 'Plugin Management', level: 85, category: 'Backend' },
    ],
  },
  {
    name: 'Database',
    icon: <Database className="w-6 h-6 text-blue-500" />,
    skills: [
      { name: 'MongoDB', level: 80, category: 'Database' },
      { name: 'MySQL', level: 70, category: 'Database' },
    ],
  },
  {
    name: 'Platform Based',
    icon: <Terminal className="w-6 h-6 text-yellow-500" />,
    skills: [
      { name: 'Debugging', level: 90, category: 'Tools & DevOps' },
      { name: 'Responsive', level: 75, category: 'Tools & DevOps' },
    ],
  },
  {
    name: 'Tech Stack',
    icon: <Terminal className="w-6 h-6 text-yellow-500" />,
    skills: [
      { name: 'Debugging', level: 90, category: 'Tools & DevOps' },
      { name: 'Responsive', level: 75, category: 'Tools & DevOps' },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const items = skillCategories.map(category => ({
    image:
      category.name === 'Frontend'
        ? frontendImg
        : category.name === 'Backend'
        ? backendImg
        : category.name === 'Database'
        ? databaseImg
        : category.name === 'Platform Based'
        ? platformbaseImg
        : category.name === 'Tech Stack'
        ? techStackImg
        : `https://picsum.photos/seed/${encodeURIComponent(category.name)}/900/900?grayscale`,

    link: '#contact',
    title: category.name,
    description: category.skills.map(skill => skill.name).join(' • '),
  }));

  return (
    <section id="skills" className="min-h-screen flex items-center py-24 bg-gray-950 dark:bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
            <span className="text-red-400 mr-3">02.</span> Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full mb-12" />

          <div className="relative w-full h-[480px] md:h-[560px]">
            <InfiniteMenu items={items} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;