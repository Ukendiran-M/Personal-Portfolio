import React from 'react';
import { Quote } from 'lucide-react';
import testPic from '../assets/Alfonso.jpeg';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alfonso Manzo",
    role: "CEO",
    company: "Digital MadEasy",
    image: testPic,
    content: "I worked with Ukendiran during this internship with Digital MadEasy. He is very hard working and reliable. He has an excellent knowledge of web coding which he can implement both on shopify and Wordpress."
  },
  // {
  //   id: 2,
  //   name: "Michael Chen",
  //   role: "Lead Developer",
  //   company: "InnovateSoft",
  //   image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   content: "Working with John was a great experience. His technical expertise and ability to collaborate effectively made our project a huge success."
  // },
  // {
  //   id: 3,
  //   name: "Emily Rodriguez",
  //   role: "Product Manager",
  //   company: "DigitalFlow",
  //   image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   content: "John's innovative approach to problem-solving and dedication to creating user-friendly solutions sets him apart. He's a valuable asset to any team."
  // }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-red-500">05.</span> Testimonials
          </h2>
          <div className="w-24 h-1 bg-red-500 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-red-500/50 transition-all duration-300"
              >
                <Quote className="text-red-500 mb-4" size={32} />
                
                <p className="text-gray-300 mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-red-500">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;