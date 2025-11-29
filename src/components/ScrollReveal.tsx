import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  pin?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = '+=200%',
  wordAnimationEnd = '+=200%',
  pin = false,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';

    const paragraphs = text.split(/\n\s*\n/);
    let key = 0;
    const nodes: ReactNode[] = [];

    paragraphs.forEach((paragraph, paragraphIndex) => {
      const parts = paragraph.split(/(\s+)/);

      parts.forEach((part) => {
        if (part.match(/^\s+$/)) {
          nodes.push(part);
        } else if (part.length > 0) {
          nodes.push(
            <span className="inline-block word" key={key++}>
              {part}
            </span>
          );
        }
      });

      if (paragraphIndex < paragraphs.length - 1) {
        nodes.push(<br key={`br-${key++}`} />);
        nodes.push(<br key={`br-${key++}`} />);
      }
    });

    return nodes;
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const rotationStart = pin ? 'top center' : 'top bottom';
    const wordsStart = pin ? 'top center' : 'top bottom-=20%';
    const rotationEndValue = pin ? '+=400%' : rotationEnd;
    const wordsEndValue = pin ? '+=400%' : wordAnimationEnd;

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: rotationStart,
          end: rotationEndValue,
          scrub: true,
          pin,
        },
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>('.word');

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.12,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: wordsStart,
          end: wordsEndValue,
          scrub: true,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.12,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: wordsStart,
            end: wordsEndValue,
            scrub: true,
          },
        }
      );
    }

    return () => {
      const el = containerRef.current;
      if (!el) return;

      ScrollTrigger.getAll().forEach((trigger) => {
        if ((trigger as any).trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, pin]);

  const effectiveTextClassName =
    textClassName || 'text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold';

  return (
    <div ref={containerRef} className={containerClassName}>
      <p className={effectiveTextClassName}>{splitText}</p>
    </div>
  );
};

export default ScrollReveal;
