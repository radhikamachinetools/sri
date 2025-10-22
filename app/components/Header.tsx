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
      {/* Top Contact Bar */}
      <div className="bg-orange-600 text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+91 9983813366, +91 9950329353</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>shreeradheyindustriesjodhpur@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Jodhpur, Rajasthan, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/images/radhika-logo.png"
                alt="Shree Radhey Industries"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-gray-900">
                  Shree Radhey Industries
                </h1>
                <p className="text-sm text-orange-600 font-medium">
                  Engineering Excellence Since 1995
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 font-semibold transition-colors py-2"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />}
                  </Link>
                  
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="py-2">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm"
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

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-md"
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