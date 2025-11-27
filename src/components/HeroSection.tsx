import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import profilePic from '../assets/Profile.png';

const heroText = "Design. Build. Disrupt.";
const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: 'spring', stiffness: 300 }
  })
};
const bgVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 0.12, transition: { duration: 1.2, type: 'spring' } }
};
const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black text-white pt-20 pb-28 overflow-hidden">
      {/* Animated creative background blobs */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"
          variants={bgVariants}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl"
          variants={bgVariants}
          transition={{ delay: 0.4, duration: 1.2, type: 'spring' }}
        />
        <motion.div
          className="absolute bottom-60 right-1/3 w-72 h-72 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl"
          variants={bgVariants}
          transition={{ delay: 0.8, duration: 1.2, type: 'spring' }}
        />
      </motion.div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.p
              className="text-red-500 font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Here's the Software Expertise,
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-red-500"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              UKENDIRAN
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-6 flex gap-1"
              initial="hidden"
              animate="visible"
            >
              {heroText.split("").map((char, i) => (
                <motion.span key={i} custom={i} variants={textVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span
                className="animate-pulse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
              >
                |
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              I'm a software engineer specializing in building exceptional digital experiences.
              Currently, I'm focused on Learning New Technologies and Building human-centered products.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
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
            </motion.div>
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
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
            </motion.div>
          </div>
          <motion.div
            className="relative group w-full md:w-1/3"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: 'spring' }}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Profile image with overlay */}
              <motion.div
                className="relative z-10 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring' }}
              >
                <img 
                  src={profilePic} alt="My Profile" 
                  className="w-full h-auto opacity-65"
                />
                <motion.div
                  className="absolute inset-0 bg-opacity-20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </div>
          </motion.div>
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