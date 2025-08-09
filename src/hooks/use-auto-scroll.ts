import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useAutoScroll() {
  const location = useLocation();

  useEffect(() => {
    // Extract hash from URL
    const hash = location.hash.replace('#', '');
    
    if (hash) {
      // Small delay to ensure the component has rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);
}

export function useActiveSection() {
  const location = useLocation();
  
  return location.hash.replace('#', '') || null;
}
