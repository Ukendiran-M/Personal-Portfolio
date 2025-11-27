import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.1, type: 'spring' }}
          >
            <span className="text-red-400">02.</span> Skills & Expertise
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full mb-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
            style={{ originX: 0 }}
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
          >
            {skillCategories.map((category, index) => {
              const isHovered = hoveredCategory === index;
              return (
                <motion.div
                  key={index}
                  className={`bg-black dark:bg-gray-900 p-6 rounded-lg border transition-all duration-300 ease-out ${
                    isHovered
                      ? 'border-red-400/60 shadow-[0_4px_20px_-5px_rgba(239,68,68,0.35)]'
                      : 'border-red-800/30 shadow-none'
                  }`}
                  onMouseEnter={() => setHoveredCategory(index)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.6, type: 'spring' }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex items-center mb-6">
                    <motion.div
                      className={`transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`}
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{ type: 'spring' }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="ml-3 text-xl font-semibold text-red-400">{category.name}</h3>
                  </div>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="transition-all duration-300 ease-out"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + skillIndex * 0.06 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span>{skill.name}</span>
                          <span className="text-white-400">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full transition-all duration-700 ease-out"
                            animate={{ width: isHovered ? `${skill.level}%` : '0%' }}
                            transition={{ delay: skillIndex * 0.1, duration: 0.7, type: 'spring' }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;