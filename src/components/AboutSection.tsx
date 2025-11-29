import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (window.innerWidth >= 768) {
        ScrollTrigger.create({
          trigger: el,
          start: 'top top',
          end: '+=220%',
          pin: true,
          scrub: true,
        });
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-black text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
            <span className="text-red-500 mr-3">01.</span> About Me
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full mb-8" />

          <div className="space-y-4 max-w-4xl">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={0}
              blurStrength={16}
              containerClassName=""
              textClassName="text-gray-100 text-2xl md:text-3xl leading-relaxed font-semibold"
            >
              {`I’m Ukendiran — a product-minded software engineer who designs and builds high-performance web experiences that help businesses reach measurable outcomes. I combine a user-first design approach with solid engineering practices to deliver websites and web apps that load fast, behave reliably, and convert visitors into customers.

Currently, I’m a software intern at Digital Madeasy (London) and a student at Sri Shakthi Institute of Engineering and Technology. In every project I take on, I focus on clear communication, pragmatic solutions, and shipping work that drives business value. I care deeply about accessibility, performance, and maintainability so clients can scale their product with confidence.

I work closely with founders and product teams to understand goals, translate them into actionable plans, and deliver results on time. If you’re looking for a reliable developer who treats your product like their own and prioritizes ROI, let’s connect — I’d love to learn about your project.`}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;