'use client'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (config = {}) => {
  useEffect(() => {
    // Initialize ScrollReveal

    ScrollReveal().reveal('.home-content', config);

    // Clean up
    return () => ScrollReveal().destroy();
  }, [config]);

  // You can return any additional cleanup logic here
};

export default useScrollReveal;
