"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  
  // Enhanced scroll detection with auto-hide
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      setIsScrolled(currentScrollY > 10);
      
      // Auto-hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or near top - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      setIsVisible(true); // Always show header when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Products", 
      href: "/products",
      hasDropdown: true,
      subItems: [
        { name: "Block Cutters", href: "/products/c-2300-block-cutter" },
        { name: "Polishing Machines", href: "/products/lpm-disk-polishing-machine" },
        { name: "Wire Saw Machines", href: "/products/wsm-wire-saw-machine" },
        { name: "Processing Equipment", href: "/products/stone-processing-machine" }
      ]
    },
    { name: "Services", href: "/service-center" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>


      {/* Main Navigation - Enhanced with auto-hide functionality */}
      <motion.header 
        ref={headerRef}
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
        className={`fixed top-0 left-0 right-0 z-[9999] will-change-transform ${
          isScrolled 
            ? "bg-secondary/95 backdrop-blur-xl shadow-2xl border-b border-primary/20" 
            : "bg-secondary/98 backdrop-blur-md shadow-lg"
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(12px) saturate(120%)',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(12px) saturate(120%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-between h-16 sm:h-18 lg:h-20"
          >
                {/* Logo - Enhanced with better animations and responsive sizing */}
                <Link href="/" className="flex items-center space-x-2 lg:space-x-3 flex-shrink-0 group">
                  <motion.div 
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    whileTap={{ scale: 0.92 }}
                    className="relative"
                  >
                    <Image
                      src="/images/radhika-logo.png"
                      alt="Shree Radhey Industries"
                      width={40}
                      height={40}
                      className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl shadow-lg ring-2 ring-primary/30 group-hover:ring-primary/50 transition-all duration-300"
                      priority
                    />
                    <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 lg:w-3 lg:h-3 bg-green-500 rounded-full border-2 border-secondary animate-pulse shadow-sm"></div>
                  </motion.div>
                  <div className="hidden sm:block">
                    <motion.h1 
                      whileHover={{ scale: 1.02 }}
                      className="text-lg sm:text-xl lg:text-2xl font-black text-brand-accent leading-tight group-hover:text-primary transition-colors duration-300"
                    >
                      SRI
                    </motion.h1>
                    <p className="text-xs sm:text-sm text-primary font-bold -mt-0.5 leading-none opacity-90">
                      INDUSTRIES
                    </p>
                  </div>
                </Link>

                {/* Desktop Navigation - Enhanced with better spacing and effects */}
                <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                  {navigation.map((item, index) => (
                    <motion.div 
                      key={item.name} 
                      className="relative group"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-1 text-brand-accent hover:text-primary font-semibold transition-all duration-300 px-3 xl:px-4 py-2.5 rounded-xl hover:bg-primary/10"
                      >
                        <span className="text-sm xl:text-base">{item.name}</span>
                        {item.hasDropdown && (
                          <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                        )}
                      </Link>
                      
                      {item.hasDropdown && (
                        <div className="absolute top-full left-0 mt-3 w-72 bg-secondary/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                          <div className="py-5">
                            <div className="px-4 pb-3 border-b border-primary/10">
                              <p className="text-xs font-bold text-primary uppercase tracking-wider">Our Products</p>
                            </div>
                            {item.subItems?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-6 py-3 text-brand-accent hover:bg-primary/10 hover:text-primary transition-all duration-300 text-sm font-medium"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Action Buttons */}
                <div className="hidden lg:flex items-center flex-shrink-0">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-primary to-primary-dark text-secondary px-5 xl:px-7 py-3 xl:py-3.5 rounded-xl font-bold text-sm xl:text-base hover:shadow-2xl transition-all duration-300"
                    >
                      Get Quote
                    </motion.button>
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                  {isMenuOpen ? (
                    <X size={24} className="text-brand-accent" />
                  ) : (
                    <Menu size={24} className="text-brand-accent" />
                  )}
                </motion.button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/30 z-[9997]"
                onClick={() => setIsMenuOpen(false)}
              />
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="lg:hidden bg-secondary/98 backdrop-blur-xl border-t border-primary/30 absolute top-full left-0 right-0 z-[9998] shadow-2xl"
              >
                <div className="px-4 py-6 space-y-3">
                  {navigation.map((item) => (
                    <div key={item.name} className="border-b border-primary/15 last:border-b-0 pb-3 last:pb-0">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                          className="block py-4 text-brand-accent hover:text-primary font-semibold text-lg flex-1"
                        >
                          {item.name}
                        </Link>
                        {item.hasDropdown && (
                          <button
                            onClick={() => setIsProductsOpen(!isProductsOpen)}
                            className="p-3 hover:bg-primary/10 rounded-xl transition-colors"
                          >
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform duration-300 text-brand-accent ${isProductsOpen ? 'rotate-180' : ''}`} 
                            />
                          </button>
                        )}
                      </div>
                      
                      {item.hasDropdown && isProductsOpen && (
                        <div className="ml-4 space-y-2 border-l-2 border-primary/30 pl-4 mt-3">
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-3 text-muted hover:text-primary transition-colors text-base"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <div className="pt-6 border-t border-primary/30 mt-6">
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-secondary py-4 rounded-xl font-bold text-lg shadow-lg">
                        Get Quote
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;