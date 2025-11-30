import { useEffect, useRef, useState } from 'react';

export function usePinSectionOnEnter(sectionId: string, durationMs: number): boolean {
  const [isPinned, setIsPinned] = useState(false);
  const pinnedRef = useRef(false);
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    let timeout: any;
    let pinned = false;
    const onScroll = () => {
      if (pinned) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom > window.innerHeight / 2;
      if (inView && !pinnedRef.current) {
        pinned = true;
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
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timeout);
      document.body.style.overflow = '';
    };
  }, [sectionId, durationMs]);
  return isPinned;
}
