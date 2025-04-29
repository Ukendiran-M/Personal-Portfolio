import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/Ukendiran-M" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ukendiran/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a 
              href="https://wa.me/+916380471087?text=Hello%20Ukendiran!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-teal-400 transition-colors"
            >
              {/* WhatsApp SVG Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
            <a href="mailto:ukimanimaran@gmail.com" className="hover:text-teal-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;