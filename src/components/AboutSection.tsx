import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-2 flex items-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.1, type: 'spring' }}
          >
            <span className="text-red-500">01.</span> About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full mb-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
            style={{ originX: 0 }}
          />
          <motion.div
            className="max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
          >
            <motion.p className="text-gray-300 text-lg mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              Hello there! I'm Ukendiran, a software engineer passionate about building exceptional digital experiences.
              As a student developer at Sri Shakthi Institute of Engineering and Technology, I'm currently working as a Software Intern at Digital MadEasy, London.
            </motion.p>
            <motion.p className="text-gray-300 text-lg mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
              Fast-forward to today, My main focus these days is Learning more technologies as possible and building accessible, inclusive products 
              and digital experiences for a variety of clients.
            </motion.p>
            <motion.p className="text-gray-300 text-lg mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
              I also recently learning and working more with the MERN stack.
            </motion.p>
            <motion.p className="text-gray-300 text-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.45 }}>
              Here are a few technologies I've been working with recently:
            </motion.p>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.5, type: 'spring' }}
            >
              {['JavaScript (ES6+)', 'Shopify and Wordpress Coding' , 'React', 'UI / UX', 'MondoDB', 'SQL'].map((tech) => (
                <div key={tech} className="flex items-center space-x-2">
                  <span className="text-red-500">▹</span>
                  <span>{tech}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;