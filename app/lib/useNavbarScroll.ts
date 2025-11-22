import { useState, useEffect, useCallback, useRef } from 'react';

interface UseNavbarScrollOptions {
  threshold?: number;
  hideThreshold?: number;
  showOnTop?: boolean;
  debounceMs?: number;
}

export const useNavbarScroll = (options: UseNavbarScrollOptions = {}) => {
  const {
    threshold = 10,
    hideThreshold = 100,
    showOnTop = true,
    debounceMs = 10
  } = options;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTimeRef = useRef(0);

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const currentScrollY = window.scrollY;
    const currentTime = Date.now();
    
    // Debounce rapid scroll events
    if (currentTime - lastScrollTimeRef.current < debounceMs) {
      return;
    }
    lastScrollTimeRef.current = currentTime;
    
    // Set scrolled state for styling with hysteresis
    const newIsScrolled = currentScrollY > threshold;
    if (newIsScrolled !== isScrolled) {
      setIsScrolled(newIsScrolled);
    }
    
    // Determine scroll direction
    const direction = currentScrollY > lastScrollY ? 'down' : 'up';
    setScrollDirection(direction);
    
    // Enhanced auto-hide logic with smoother behavior
    const scrollDelta = Math.abs(currentScrollY - lastScrollY);
    
    if (showOnTop && currentScrollY < 80) {
      // Always show when near top
      setIsVisible(true);
    } else if (direction === 'down' && currentScrollY > hideThreshold && scrollDelta > 5) {
      // Hide when scrolling down with sufficient delta
      setIsVisible(false);
    } else if (direction === 'up' && scrollDelta > 3) {
      // Show when scrolling up with minimal delta
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY, threshold, hideThreshold, showOnTop, debounceMs, isScrolled]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Enhanced throttling with requestAnimationFrame
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add passive listener for better performance
    window.addEventListener('scroll', throttledHandleScroll, { 
      passive: true,
      capture: false 
    });
    
    // Initial call to set correct state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll]);

  // Add scroll end detection
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScrollEnd = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        // Show navbar after scroll ends if user is not at the very top
        if (window.scrollY > 50 && window.scrollY < hideThreshold) {
          setIsVisible(true);
        }
      }, 150);
    };

    window.addEventListener('scroll', handleScrollEnd, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScrollEnd);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [hideThreshold]);

  return {
    isScrolled,
    isVisible,
    lastScrollY,
    scrollDirection
  };
};



// Additional utility hook for navbar state management
export const useNavbarState = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);
  
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);
  
  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);
  
  const toggleDropdown = useCallback((dropdownName: string) => {
    setActiveDropdown(prev => prev === dropdownName ? null : dropdownName);
  }, []);
  
  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
        closeDropdown();
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMobileMenuOpen, closeMobileMenu, closeDropdown]);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMobileMenuOpen]);
  
  return {
    isMobileMenuOpen,
    activeDropdown,
    closeMobileMenu,
    toggleMobileMenu,
    closeDropdown,
    toggleDropdown
  };
};