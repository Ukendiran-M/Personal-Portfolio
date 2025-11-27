import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import StarBorder from './StarBorder';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      const res = await fetch('https://personal-portfolio-hzwa.onrender.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) {
        throw new Error('Failed to send email');
      }
  
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
  
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <section id="contact" className="py-24 bg-black dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.1, type: 'spring' }}
          >
            <span className="text-red-400">06.</span> Contact Me
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
            className="grid grid-cols-1 md:grid-cols-5 gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
          >
            <motion.div className="md:col-span-2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
              </p>
              <div className="space-y-6">
                <motion.div className="flex items-start" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
                  <div className="bg-gray-900 rounded-full p-3 mr-4">
                    <Mail size={20} className="text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:ukimanimaran@gmail.com" className="text-gray-300 hover:text-red-400 transition-colors">
                      Ukimanimaran@gmail.com
                    </a>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                  <div className="bg-gray-900 rounded-full p-3 mr-4">
                    <MapPin size={20} className="text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-300">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.45 }}>
                  <div className="bg-gray-900 rounded-full p-3 mr-4">
                    <Phone size={20} className="text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+919043747070" className="text-gray-300 hover:text-red-400 transition-colors">
                      +91 9043747070
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div className="md:col-span-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                {success && (
                  <motion.div className="mb-6 p-4 rounded-md bg-red-400 bg-opacity-10 text-red-400 flex items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <Send size={20} className="mr-2" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                {error && (
                  <motion.div className="mb-6 p-4 rounded-md bg-red-400 bg-opacity-10 text-red-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    {error}
                  </motion.div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent placeholder-gray-500 text-white"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.55 }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent placeholder-gray-500 text-white"
                      placeholder="Your email"
                    />
                  </motion.div>
                </div>
                <motion.div className="mb-6" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent placeholder-gray-500 text-white"
                    placeholder="Subject"
                  />
                </motion.div>
                <motion.div className="mb-6" initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.65 }}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent placeholder-gray-500 text-white resize-none"
                    placeholder="Your message"
                  ></textarea>
                </motion.div>
                <StarBorder
                  as={motion.button}
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full"
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <span
                    className={`flex items-center justify-center font-medium ${
                      loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </span>
                </StarBorder>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;