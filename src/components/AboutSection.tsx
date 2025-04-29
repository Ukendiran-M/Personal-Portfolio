import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-red-500">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-red-500 mb-12"></div>
          
          <div className="max-w-5xl">
            <p className="text-gray-300 text-lg mb-6">
              Hello there! I'm Ukendiran, a software engineer passionate about building exceptional digital experiences.
              As a student developer at Sri Shakthi Institute of Engineering and Technology, I'm currently working as a Software Intern at Digital MadEasy, London.
            </p>
            
            <p className="text-gray-300 text-lg mb-6">
              Fast-forward to today, My main focus these days is Learning more technologies as possible and building accessible, inclusive products 
              and digital experiences for a variety of clients.
            </p>
            
            <p className="text-gray-300 text-lg mb-6">
              I also recently learning and working more with the MERN stack.
            </p>
            
            <p className="text-gray-300 text-lg">
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6">
              {['JavaScript (ES6+)', 'Shopify and Wordpress Coding' , 'React', 'UI / UX', 'MondoDB', 'SQL'].map((tech) => (
                <div key={tech} className="flex items-center space-x-2">
                  <span className="text-red-500">▹</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;