import React, { useState } from 'react';
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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-red-400">04.</span> Experience
          </h2>
          <div className="w-24 h-1 bg-red-400 mb-12"></div>
          
          <div className="flex flex-col md:flex-row gap-4">
            {/* Tabs */}
            <div className="md:w-1/4 mb-6 md:mb-0">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left px-4 py-3 mb-2 border-l-2 transition-all ${
                    activeTab === index
                      ? 'border-red-400 text-red-400 bg-red-400/10'
                      : 'border-gray-700 text-gray-400 hover:text-white hover:border-gray-400'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
            
            {/* Content */}
            <div className="md:w-3/4 bg-black dark:bg-black-900 p-6 rounded-lg border border-red-800">
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
              
              <ul className="space-y-4">
                {experiences[activeTab].description.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="text-red-400 mr-2">▹</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Education / Certification Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Education & Certifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black dark:bg-gray-900 p-6 rounded-lg border border-gray-800 transition-all hover:border-red-400/50">
                <h4 className="text-lg font-semibold mb-2">B.E in Computer Science</h4>
                <p className="text-red-400 mb-2">Sri Shakthi Institute of Engineering and Technology</p>
                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>2022 - 2026</span>
                </div>
                <p className="text-gray-300">
                  Pre-Final Year with honors. Specialized in Software engineering.
                </p>
              </div>
              
              <div className="bg-black dark:bg-gray-900 p-6 rounded-lg border border-gray-800 transition-all hover:border-red-400/50">
                <h4 className="text-lg font-semibold mb-2">Certificate of Internship Completion</h4>
                <p className="text-red-400 mb-2">Digital MadEasy (LondonLeadGenerations)</p>
                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>2025</span>
                </div>
                <p className="text-gray-300">
                  Expertise in developing, designing, and debugging Web applications using Shopify and WordPress.
                </p>
              </div>
              
              <div className="bg-black dark:bg-gray-900 p-6 rounded-lg border border-gray-800 transition-all hover:border-red-400/50">
                <h4 className="text-lg font-semibold mb-2">UI / UX Design</h4>
                <p className="text-red-400 mb-2">Google</p>
                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>2024</span>
                </div>
                <p className="text-gray-300">
                The core concepts of UX design, focusing on user-centered principles. Learned about essential research methods, create wireframes and prototypes, and evaluate designs based on real user feedback.
                </p>
              </div>
              
              <div className="bg-black dark:bg-gray-900 p-6 rounded-lg border border-gray-800 transition-all hover:border-red-400/50">
                <h4 className="text-lg font-semibold mb-2">Advance Javascript</h4>
                <p className="text-red-400 mb-2">Scaler</p>
                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>2024</span>
                </div>
                <p className="text-gray-300">
                    Certification acknowledges the hands-on skills of Advanced Javascript features
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;