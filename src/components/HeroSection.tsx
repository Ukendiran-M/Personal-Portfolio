import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import profilePic from '../assets/Profile.png';
import LiquidEther from './LiquidEther';

const heroText = "Design. Build. Disrupt.";
const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: 'spring', stiffness: 300 }
  })
};
const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black text-white pt-20 pb-28 overflow-hidden">
      {/* Official ReactBits Liquid Ether Canvas Background */}
      <div className="absolute inset-0 z-0">
        {/* @ts-ignore */}
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1">
            <p
              className="text-red-500 font-semibold mb-4"
            >
              Here's the Software Expertise,
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-red-500"
            >
              UKENDIRAN
            </h1>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-6 flex gap-1"
            >
              {heroText.split("").map((char, i) => (
                <span key={i}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              <span
                className="animate-pulse"
              >
                |
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              I'm a software engineer specializing in building exceptional digital experiences.
              Currently, I'm focused on Learning New Technologies and Building human-centered products.
            </p>
            <div
              className="flex flex-wrap gap-4 mb-12"
            >
              <a 
                href="#contact"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-all transform hover:scale-105"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-transparent border border-red-600 text-red-500 hover:bg-red-600/10 font-medium rounded-md transition-all transform hover:scale-105"
              >
                View Projects
              </a>
            </div>
            <div
              className="flex space-x-6"
            >
              <a href="https://github.com/Ukendiran-M" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ukendiran/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ukimanimaran@gmail.com" className="hover:text-red-500 transition-colors">
                <Mail size={24} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FileText size={24} />
              </a>
            </div>
          </div>
          <div
            className="relative group w-full md:w-1/3"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Profile image with overlay */}
              <div
                className="relative z-10 rounded-lg overflow-hidden"
              >
                <img 
                  src={profilePic} alt="My Profile" 
                  className="w-full h-auto opacity-65"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        aria-label="Scroll down"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
      >
        <ArrowDown size={30} className="text-red-500" />
      </motion.a>
    </section>
  );
};

export default HeroSection;