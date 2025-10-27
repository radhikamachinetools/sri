"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      try {
        setIsScrolled(window.scrollY > 20);
      } catch (error) {
        console.error('Error handling scroll event:', error);
      }
    };

    try {
      window.addEventListener("scroll", handleScroll);
      return () => {
        try {
          window.removeEventListener("scroll", handleScroll);
        } catch (error) {
          console.error('Error removing scroll listener:', error);
        }
      };
    } catch (error) {
      console.error('Error adding scroll listener:', error);
    }
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-3 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+91 9983813366, +91 9950329353</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>shreeradheyindustriesjodhpur@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} />
            <span>Jodhpur, Rajasthan, India</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
          : "bg-white"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src="/images/radhika-logo.png"
                  alt="Shree Radhey Industries"
                  width={50}
                  height={50}
                  className="rounded-full ring-2 ring-primary/20"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-gray-900">
                  Shree Radhey Industries
                </h1>
                <p className="text-sm text-primary font-medium">
                  Engineering Excellence
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-gray-700 hover:text-primary font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold mt-4"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}