import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Digital MadEasy (LondonLeadGenerations)',
    role: 'Software Intern',
    duration: 'Jan 2025 - Present',
    location: 'London, UK',
    description: [
      'Understanding and Hands-On WordPress Web Development.',
      'Understanding and Hands-On Shopify Web Development & Liquid File Programming.',
      'Understanding of Basic Design Principles and Web Functionalities.',
      'Responsive Web Development and trained with effective web debugging.',
    ],
  },
  // {
  //   id: 3,
  //   company: 'WebWorks Agency',
  //   role: 'Junior Web Developer',
  //   duration: 'Jun 2018 - Feb 2020',
  //   location: 'Boston, MA',
  //   description: [
  //     'Developed responsive websites for various clients using HTML, CSS, and JavaScript.',
  //     'Built custom WordPress themes and plugins to meet specific client requirements.',
  //     'Implemented tracking and analytics tools to help clients measure website performance.',
  //     'Participated in client meetings to gather requirements and present project progress.',
  //   ],
  // },
];

const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  
  return (
    <section id="experience" className="py-24 bg-gray-950 dark:bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.1, type: 'spring' }}
          >
            <span className="text-red-400">04.</span> Experience
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
            className="flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
          >
            {/* Tabs */}
            <motion.div className="md:w-1/4 mb-6 md:mb-0" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left px-4 py-3 mb-2 border-l-2 transition-all ${
                    activeTab === index
                      ? 'border-red-400 text-red-400 bg-red-400/10'
                      : 'border-gray-700 text-gray-400 hover:text-white hover:border-gray-400'
                  }`}
                  whileHover={{ scale: 1.06, backgroundColor: '#f8717122' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {exp.company}
                </motion.button>
              ))}
            </motion.div>
            {/* Content */}
            <motion.div
              className="md:w-3/4 bg-black dark:bg-black-900 p-6 rounded-lg border border-red-800"
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold">
                  {experiences[activeTab].role}{' '}
                  <span className="text-red-400">@ {experiences[activeTab].company}</span>
                </h3>
                <div className="flex flex-wrap items-center text-gray-400 mt-2 gap-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {experiences[activeTab].duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {experiences[activeTab].location}
                  </div>
                </div>
              </div>
              <motion.ul className="space-y-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                {experiences[activeTab].description.map((item, index) => (
                  <motion.li key={index} className="flex" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + index * 0.07 }}>
                    <span className="text-red-400 mr-2">▹</span>
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
          
          {/* Education / Certification Section */}
          <motion.div className="mt-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.7, type: 'spring' }}>
            <motion.h3 className="text-2xl font-bold mb-8" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, type: 'spring' }}>
              Education & Certifications
            </motion.h3>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[{
                title: 'B.E in Computer Science',
                org: 'Sri Shakthi Institute of Engineering and Technology',
                date: '2022 - 2026',
                desc: 'Pre-Final Year with honors. Specialized in Software engineering.'
              }, {
                title: 'Certificate of Internship Completion',
                org: 'Digital MadEasy (LondonLeadGenerations)',
                date: '2025',
                desc: 'Expertise in developing, designing, and debugging Web applications using Shopify and WordPress.'
              }, {
                title: 'UI / UX Design',
                org: 'Google',
                date: '2024',
                desc: 'The core concepts of UX design, focusing on user-centered principles. Learned about essential research methods, create wireframes and prototypes, and evaluate designs based on real user feedback.'
              }, {
                title: 'Advance Javascript',
                org: 'Scaler',
                date: '2024',
                desc: 'Certification acknowledges the hands-on skills of Advanced Javascript features'
              }].map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="bg-black dark:bg-gray-900 p-6 rounded-lg border border-gray-800 transition-all hover:border-red-400/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + idx * 0.1, duration: 0.6, type: 'spring' }}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 30px #f87171' }}
                >
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-red-400 mb-2">{item.org}</p>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.date}</span>
                  </div>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;