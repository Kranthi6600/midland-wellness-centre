// Hook for mobile menu management

import { useState, useEffect } from 'react';

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(prev => {
      const newState = !prev;
      
      // Prevent body scroll when menu is open
      if (newState) {
        document.body.style.overflow = 'hidden';
        document.body.classList.add('mobile-menu-visible');
      } else {
        document.body.style.overflow = '';
        document.body.classList.remove('mobile-menu-visible');
      }
      
      return newState;
    });
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    document.body.classList.remove('mobile-menu-visible');
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-visible');
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeMobileMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return {
    isOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
};
