import React, { useState } from 'react';
import { Layout, Database, Terminal, Server } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}


const skillCategories = [
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
    name: 'Platform-based',
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
    name: 'Others',
    icon: <Terminal className="w-6 h-6 text-yellow-500" />,
    skills: [
      { name: 'Debugging', level: 90, category: 'Tools & DevOps' },
      { name: 'Responsive', level: 75, category: 'Tools & DevOps' },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 bg-gray-950 dark:bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-red-400">02.</span> Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-red-400 mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => {
              const isHovered = hoveredCategory === index;
              
              return (
                <div 
                  key={index} 
                  className={`bg-black dark:bg-gray-900 p-6 rounded-lg border transition-all duration-300 ease-out ${
                    isHovered ? 'border-red-400/60 shadow-lg' : 'border-red-800/30'
                  }`}
                  onMouseEnter={() => setHoveredCategory(index)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  style={{
                    boxShadow: isHovered ? '0 4px 20px -5px rgba(239, 68, 68, 0.15)' : 'none'
                  }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`}>
                      {category.icon}
                    </div>
                    <h3 className="ml-3 text-xl font-semibold text-red-400">{category.name}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="transition-all duration-300 ease-out">
                        <div className="flex justify-between mb-2">
                          <span>{skill.name}</span>
                          <span className="text-white-400">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full transition-all duration-700 ease-out"
                            style={{
                              width: isHovered ? `${skill.level}%` : '0%',
                              transitionDelay: `${skillIndex * 0.1}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;