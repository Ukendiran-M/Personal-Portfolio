import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import profilePic from '../assets/Profile.png';
import codeIcon from '../assets/profile-card-code-icon.svg';

import LiquidEther from './LiquidEther';
import DecryptedText from './DecryptedText';
import FallingText from './FallingText';
import Shuffle from './Shuffle';
import ProfileCard from './ProfileCard';
import StarBorder from './StarBorder';

const heroText = "Design. Build. Disrupt.";
const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen md:min-h-[80vh] lg:min-h-screen flex items-center bg-black text-white pt-24 pb-20 md:pt-28 md:pb-28"
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
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="w-full flex flex-col md:flex-row lg:flex-row lg:justify-between lg:items-center gap-8 md:gap-10 lg:gap-8 xl:gap-3 2xl:gap-4 px-2 sm:px-6 md:px-10 lg:pl-0">
          <div className="md:w-3/5 flex-1 text-left md:text-left lg:text-left md:flex md:flex-col md:justify-center md:items-start lg:items-start md:pr-6 lg:pr-4 xl:pr-1 2xl:pr-2 md:-ml-[30px] lg:ml-0">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-red-500"
            >
              <DecryptedText
                text="UKENDIRAN"
                animateOn="view"
                sequential
                speed={110}
                revealDirection="start"
              />
            </h1>
            <div className="text-2xl sm:text-3xl md:text-[1.75rem] lg:text-5xl font-bold text-gray-300 mb-6 text-left w-full">
              <FallingText
                text={heroText}
                trigger="hover"
                gravity={0.56}
                mouseConstraintStiffness={0.9}
                resetOnSelector="#home"
              />
              <span className="animate-pulse md:hidden lg:inline ml-1">|</span>
            </div>

            {/* ProfileCard for Mobile - Shows only on mobile below 768px */}
            <div className="block md:hidden w-full max-w-xs mx-auto mb-6">
              <ProfileCard
                avatarUrl={profilePic}
                miniAvatarUrl={profilePic}
                name="Ukendiran M"
                title="Software Engineer"
                handle="ukendiran"
                status="Online"
                contactText="Contact Me"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={true}
                iconUrl={codeIcon}
              />
            </div>

            <Shuffle
              text="I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on Learning New Technologies and Building human-centered products."
              className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0"
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
              className="flex flex-wrap gap-4 mb-10 justify-start"
            >
              <StarBorder as="a" href="#contact">
                Contact Me
              </StarBorder>
              <StarBorder as="a" href="#projects">
                View Projects
              </StarBorder>
            </div>
            <div
              className="flex space-x-6 justify-start"
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

          {/* ProfileCard for Tablet & Desktop - Shows only on md screens and above */}
          <div
            className="hidden md:flex relative group w-full max-w-xs sm:max-w-sm md:max-w-[16rem] md:w-64 lg:max-w-[14rem] xl:max-w-[16rem] 2xl:max-w-[18rem] lg:w-56 xl:w-64 2xl:w-[18rem] md:mb-0 justify-center items-center md:pl-4 lg:pl-2 xl:pl-1 2xl:pl-2"
          >
            <div className="relative max-w-xs sm:max-w-sm md:max-w-[16rem] lg:max-w-[14rem] xl:max-w-[16rem] 2xl:max-w-[18rem] xl:-translate-x-[50px]">
              <ProfileCard
                avatarUrl={profilePic}
                miniAvatarUrl={profilePic}
                name="Ukendiran M"
                title="Software Engineer"
                handle="ukendiran"
                status="Online"
                contactText="Contact Me"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={true}
                iconUrl={codeIcon}
              />
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
