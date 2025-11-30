import { useEffect, useRef, useState } from 'react';

export function usePinSectionOnEnter(sectionId: string, durationMs: number): boolean {
  const [isPinned, setIsPinned] = useState(false);
  const pinnedRef = useRef(false);
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    let timeout: any;
    let observer: IntersectionObserver | null = null;
    function pinSection() {
      if (pinnedRef.current) return;
      if (!section) return;
      pinnedRef.current = true;
      setIsPinned(true);
      document.body.style.overflow = 'hidden';
      window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
      timeout = setTimeout(() => {
        document.body.style.overflow = '';
        pinnedRef.current = false;
        setIsPinned(false);
      }, durationMs);
    }
    observer = new IntersectionObserver(
      entries => {
        if (entries[0].intersectionRatio >= 0.8 && !pinnedRef.current) {
          pinSection();
        }
        if (entries[0].intersectionRatio < 0.8) {
          pinnedRef.current = false;
        }
      },
      { threshold: 0.8, rootMargin: '0px' }
    );
    observer.observe(section);
    return () => {
      observer && observer.disconnect();
      clearTimeout(timeout);
      document.body.style.overflow = '';
    };
  }, [sectionId, durationMs]);
  return isPinned;
}

