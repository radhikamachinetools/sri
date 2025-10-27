"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Products", 
      href: "/products",
      hasDropdown: true,
      subItems: [
        { name: "C-2300 Block Cutter", href: "/products/c-2300-block-cutter" },
        { name: "LPM Disk Polishing Machine", href: "/products/lpm-disk-polishing-machine" },
        { name: "LPM Flicker Machine", href: "/products/lpm-flicker-machine" },
        { name: "Stone Processing Machine", href: "/products/stone-processing-machine" },
        { name: "WSM Wire Saw Machine", href: "/products/wsm-wire-saw-machine" }
      ]
    },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <>
      {/* OSH Wellness Style Top Contact Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-teal-200" />
                <span className="font-medium">+91 9983813366, +91 9950329353</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-teal-200" />
                <span className="font-medium">shreeradheyindustriesjodhpur@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={16} className="text-teal-200" />
              <span className="font-medium">Jodhpur, Rajasthan, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Main Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Modern Logo */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src="/images/radhika-logo.png"
                  alt="Shree Radhey Industries"
                  width={64}
                  height={64}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-slate-900">
                  Shree Radhey Industries
                </h1>
                <p className="text-sm text-teal-600 font-semibold">
                  Engineering Excellence Since 1995
                </p>
              </div>
            </Link>

            {/* OSH Wellness Style Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-slate-700 hover:text-teal-600 font-semibold transition-all duration-300 px-4 py-3 rounded-xl hover:bg-teal-50"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />}
                  </Link>
                  
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="py-4">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-6 py-4 text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200 text-sm font-medium rounded-xl mx-2"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* OSH Wellness Style CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-2xl font-bold hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                      className="block py-3 text-gray-700 hover:text-orange-600 font-semibold transition-colors"
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <button
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                        className="p-2 hover:bg-gray-100 rounded"
                      >
                        <ChevronDown size={16} className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {item.hasDropdown && isProductsOpen && (
                    <div className="ml-4 space-y-1 border-l-2 border-orange-100 pl-4">
                      {item.subItems?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2 text-gray-600 hover:text-orange-600 transition-colors text-sm"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;