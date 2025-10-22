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
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/radhika-logo.png"
                alt="Shree Radhey Industries"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">Shree Radhey Industries</h3>
                <p className="text-sm text-primary">Engineering Excellence</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading manufacturer of premium stone processing machinery with over 25 years of expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            {contact && (
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="text-primary flex-shrink-0" size={16} />
                  <div>
                    {contact.phones.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone}`}
                        className="block text-gray-300 hover:text-primary transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Mail className="text-primary flex-shrink-0" size={16} />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
                
                <div className="flex items-start space-x-2">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={16} />
                  <p className="text-gray-300">{contact.office}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Shree Radhey Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}