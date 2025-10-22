"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Globe, Clock, ArrowRight } from "lucide-react";

type ContactSettings = {
  office: string;
  factory: string;
  phones: string[];
  email: string;
  website: string;
};

export default function ModernFooter() {
  const [contact, setContact] = useState<ContactSettings | null>(null);

  useEffect(() => {
    fetch('/api/admin/settings')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setContact(data.settings.contact);
        }
      })
      .catch(() => {
        // Fallback
        setContact({
          office: "Mali, Nagorion Ka Bass, Shiv Temple, Jodhpur 342001 India",
          factory: "Khasra No. 155/1, Plot No. 6-B, Ram Nagar Salawas Road, Sangriya, Jodhpur 342013 India",
          phones: ["+91 9983813366", "+91 9950329353"],
          email: "shreeradheyindustriesjodhpur@gmail.com",
          website: "www.shreeradheyindustriesjodhpur.com"
        });
      });
  }, []);

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    { name: "Stone Processing", href: "/services/stone-processing" },
    { name: "Custom Manufacturing", href: "/services/manufacturing" },
    { name: "Installation", href: "/services/installation" },
    { name: "Maintenance", href: "/services/maintenance" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/radhika-logo.png"
                alt="Shree Radhey Industries"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">Shree Radhey Industries</h3>
                <p className="text-sm text-gray-400">Engineering Excellence</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading manufacturer of premium stone processing machinery with over 25 years of industry expertise.
            </p>
            <div className="flex space-x-4">
              <Link
                href={`https://${contact?.website || '#'}`}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
              >
                <Globe size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            {contact && (
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-sm font-medium text-white mb-1">Office:</p>
                    <p className="text-sm text-gray-300">{contact.office}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-sm font-medium text-white mb-1">Factory:</p>
                    <p className="text-sm text-gray-300">{contact.factory}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary flex-shrink-0" size={18} />
                  <div>
                    {contact.phones.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone}`}
                        className="block text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary flex-shrink-0" size={18} />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="text-primary flex-shrink-0" size={18} />
                  <div className="text-sm text-gray-300">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Shree Radhey Industries. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}