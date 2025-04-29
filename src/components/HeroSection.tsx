import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import profilePic from '../assets/Profile.png';

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Design. Build. Disrupt.";
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black text-white pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-60 right-1/3 w-72 h-72 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-red-500 font-semibold mb-4">Hello, my name is</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-red-500">
              UKENDIRAN
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-6">
              {typedText}<span className="animate-pulse">|</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              I'm a software engineer specializing in building exceptional digital experiences.
              Currently, I'm focused on Learning New Technologies and Building human-centered products.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
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
            
            <div className="flex space-x-6">
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
          
          <div className="relative group w-full md:w-1/3">
            <div className="relative max-w-sm mx-auto">
              {/* Profile image with overlay */}
              <div className="relative z-10 rounded-lg overflow-hidden">
                <img 
                  src={profilePic} alt="My Profile" 
                  className="w-full h-auto transition-all duration-300 group-hover:scale-105 opacity-60"
                />
                <div className="absolute inset-0 bg-opacity-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={30} className="text-red-500" />
      </a>
    </section>
  );
};

export default HeroSection;