"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavbarScroll, useNavbarState } from "../lib/useNavbarScroll";

const EnhancedNavbar = () => {
  const headerRef = useRef<HTMLElement>(null);
  
  // Enhanced scroll behavior
  const { isScrolled, isVisible, scrollDirection } = useNavbarScroll({
    threshold: 10,
    hideThreshold: 80,
    showOnTop: true,
    debounceMs: 8
  });

  // Navbar state management
  const {
    isMobileMenuOpen,
    activeDropdown,
    toggleMobileMenu,
    closeMobileMenu,
    toggleDropdown,
    closeDropdown
  } = useNavbarState();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Products", 
      href: "/products",
      hasDropdown: true,
      subItems: [
        { name: "Block Cutters", href: "/products/c-2300-block-cutter", icon: "🔧" },
        { name: "Polishing Machines", href: "/products/lpm-disk-polishing-machine", icon: "✨" },
        { name: "Wire Saw Machines", href: "/products/wsm-wire-saw-machine", icon: "⚡" },
        { name: "Processing Equipment", href: "/products/stone-processing-machine", icon: "🏭" }
      ]
    },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeDropdown]);

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top Info Bar */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-brand-accent text-secondary py-3 hidden lg:block border-b border-primary/15"
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-10">
            <motion.a 
              href="tel:+919983813366"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              <Phone size={14} className="text-primary" />
              <span>+91 9983813366</span>
            </motion.a>
            <motion.a 
              href="mailto:info@shreeradheyindustries.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              <Mail size={14} className="text-primary" />
              <span>info@shreeradheyindustries.com</span>
            </motion.a>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            <MapPin size={14} className="text-primary" />
            <span>Jodhpur, Rajasthan, India</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.header 
        ref={headerRef}
        initial={{ y: -100 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
        className={`navbar-fixed navbar-transition navbar-optimized gpu-accelerated ${
          isScrolled 
            ? "navbar-scrolled" 
            : "navbar-top"
        } ${
          isVisible ? 'navbar-show' : 'navbar-hide'
        }`}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 lg:space-x-3 flex-shrink-0 group"
              aria-label="Shree Radhey Industries - Home"
            >
              <motion.div 
                whileHover={{ scale: 1.08, rotate: 5 }}
                whileTap={{ scale: 0.92 }}
                className="relative logo-glow"
              >
                <Image
                  src="/images/radhika-logo.png"
                  alt="SRI Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl shadow-lg ring-2 ring-primary/30 group-hover:ring-primary/50 transition-all duration-300"
                  priority
                />
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 lg:w-3 lg:h-3 bg-green-500 rounded-full border-2 border-secondary animate-pulse shadow-sm"></div>
              </motion.div>
              <div className="hidden xs:block">
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" role="navigation">
              {navigation.map((item, index) => (
                <motion.div 
                  key={item.name} 
                  className="relative group nav-item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-brand-accent hover:text-primary font-semibold transition-all duration-300 px-3 xl:px-4 py-2.5 rounded-xl hover:bg-primary/10 relative group nav-link-hover nav-focus"
                    onMouseEnter={() => item.hasDropdown && toggleDropdown(item.name)}
                    onMouseLeave={() => item.hasDropdown && closeDropdown()}
                  >
                    <span className="text-sm xl:text-base relative z-10">{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 relative z-10 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </Link>
                  
                  {/* Enhanced Dropdown */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -15, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -15, scale: 0.9 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="absolute top-full left-0 mt-3 w-80 bg-secondary/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/30 z-50"
                          onMouseEnter={() => toggleDropdown(item.name)}
                          onMouseLeave={closeDropdown}
                        >
                          <div className="py-6">
                            <div className="px-6 pb-4 border-b border-primary/15">
                              <p className="text-xs font-bold text-primary uppercase tracking-wider">Our Products</p>
                              <p className="text-sm text-muted mt-1">Professional stone processing equipment</p>
                            </div>
                            {item.subItems?.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                                className="dropdown-item"
                              >
                                <Link
                                  href={subItem.href}
                                  className="flex items-center justify-between px-6 py-4 text-brand-accent hover:bg-primary/10 hover:text-primary transition-all duration-300 text-sm font-medium rounded-xl mx-3 hover:translate-x-2 group/item nav-focus"
                                >
                                  <div className="flex items-center space-x-3">
                                    <span className="text-lg">{subItem.icon}</span>
                                    <span>{subItem.name}</span>
                                  </div>
                                  <ArrowRight 
                                    size={14} 
                                    className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" 
                                  />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="navbar-button bg-gradient-to-r from-primary to-primary-dark text-secondary px-5 xl:px-7 py-3 xl:py-3.5 rounded-xl font-bold text-sm xl:text-base hover:shadow-2xl transition-all duration-400 nav-focus"
                >
                  <span className="relative z-10">Get Quote</span>
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={toggleMobileMenu}
              className="lg:hidden p-3 rounded-xl hover:bg-primary/10 transition-all duration-300 flex-shrink-0 touch-target hover:shadow-lg nav-focus"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} className="text-brand-accent" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} className="text-brand-accent" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden fixed inset-0 mobile-menu-backdrop z-[9997]"
                onClick={closeMobileMenu}
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="lg:hidden mobile-menu-panel absolute top-full left-0 right-0 z-[9998] shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto"
              >
                <div className="px-4 sm:px-6 py-6 space-y-3">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      className="border-b border-primary/15 last:border-b-0 pb-3 last:pb-0"
                    >
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => !item.hasDropdown && closeMobileMenu()}
                          className="block py-4 text-brand-accent hover:text-primary font-semibold transition-all duration-300 text-lg flex-1 nav-focus hover:translate-x-2 rounded-lg hover:bg-primary/5"
                        >
                          {item.name}
                        </Link>
                        {item.hasDropdown && (
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => toggleDropdown(item.name)}
                            className="p-3 hover:bg-primary/10 rounded-xl transition-all duration-300 touch-target hover:shadow-md nav-focus"
                            aria-label={activeDropdown === item.name ? "Close submenu" : "Open submenu"}
                          >
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform duration-300 text-brand-accent ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`} 
                            />
                          </motion.button>
                        )}
                      </div>
                      
                      <AnimatePresence>
                        {item.hasDropdown && activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="ml-4 space-y-2 border-l-2 border-primary/30 pl-4 overflow-hidden mt-3"
                          >
                            {item.subItems?.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                              >
                                <Link
                                  href={subItem.href}
                                  onClick={closeMobileMenu}
                                  className="flex items-center justify-between py-3 text-muted hover:text-primary transition-all duration-300 text-base hover:translate-x-2 transform nav-focus rounded-lg hover:bg-primary/5 px-2"
                                >
                                  <div className="flex items-center space-x-3">
                                    <span className="text-base">{subItem.icon}</span>
                                    <span>{subItem.name}</span>
                                  </div>
                                  <ArrowRight size={14} className="opacity-0 hover:opacity-100 transition-opacity" />
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="pt-6 border-t border-primary/30 mt-6"
                  >
                    <Link href="/contact" onClick={closeMobileMenu}>
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full navbar-button bg-gradient-to-r from-primary to-primary-dark text-secondary py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-400 nav-focus"
                      >
                        <span className="relative z-10">Get Quote</span>
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main content anchor for skip link */}
      <div id="main-content" className="sr-only">Main content starts here</div>
    </>
  );
};

export default EnhancedNavbar;