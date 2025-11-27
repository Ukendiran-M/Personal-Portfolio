import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import profilePic from '../assets/Profile.png';
import LiquidEther from './LiquidEther';
import DecryptedText from './DecryptedText';
import FallingText from './FallingText';
import Shuffle from './Shuffle';

const heroText = "Design. Build. Disrupt.";
const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black text-white pt-24 pb-20 md:pt-28 md:pb-28"
    >
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
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-10 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <p
              className="text-red-500 font-semibold mb-4"
            >
              <DecryptedText
                text={"Here's the Software Expertise,"}
                animateOn="view"
                sequential
                speed={90}
                revealDirection="start"
              />
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-red-500"
            >
              <DecryptedText
                text="UKENDIRAN"
                animateOn="view"
                sequential
                speed={110}
                revealDirection="start"
              />
            </h1>
            <h2
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-6 flex flex-wrap items-baseline justify-center md:justify-start gap-1"
            >
              <FallingText
                text={heroText}
                trigger="hover"
                gravity={0.56}
                mouseConstraintStiffness={0.9}
                resetOnSelector="#home"
              />
              <span
                className="animate-pulse"
              >
                |
              </span>
            </h2>
            <Shuffle
              text="I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on Learning New Technologies and Building human-centered products."
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0"
              tag="p"
              textAlign="left"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
            />
            <div
              className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start"
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
              className="flex space-x-6 justify-center md:justify-start"
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
            className="relative group w-full md:w-1/3 mb-10 md:mb-0 flex justify-center"
          >
            <div className="relative max-w-xs sm:max-w-sm mx-auto">
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