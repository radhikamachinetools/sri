import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-brand-accent via-gray-800 to-brand-accent text-secondary">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <Image
                  src="/images/radhika-logo.png"
                  alt="Shree Radhey Industries"
                  width={48}
                  height={48}
                  className="rounded-2xl"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-brand-accent"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary">Shree Radhey Industries</h3>
                <p className="text-sm text-primary-light font-semibold">Engineering Excellence</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading manufacturer of stone processing machinery. Trusted by 500+ industries worldwide with cutting-edge technology.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-300 hover:text-primary-light transition-colors font-medium flex items-center group"><span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-primary-light"></span>About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-primary-light transition-colors font-medium flex items-center group"><span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-primary-light"></span>Products</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary-light transition-colors font-medium flex items-center group"><span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-primary-light"></span>Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-primary-light transition-colors font-medium flex items-center group"><span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-primary-light"></span>Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-secondary">Contact Info</h4>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-secondary" size={18} />
                </div>
                <div className="text-gray-300 text-sm">
                  <p className="font-semibold text-secondary">Mali, Nagorion Ka Bass, Shiv Temple</p>
                  <p>Jodhpur 342001, Rajasthan</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-wellness-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-secondary" size={18} />
                </div>
                <div className="text-gray-300 text-sm">
                  <p className="font-semibold text-secondary">+91 9983813366</p>
                  <p>+91 9950329353</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-secondary" size={18} />
                </div>
                <a href="mailto:shreeradheyindustriesjodhpur@gmail.com" className="text-gray-300 hover:text-primary-light transition-colors text-sm font-medium">
                  shreeradheyindustriesjodhpur@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-medium">
              &copy; {new Date().getFullYear()} Shree Radhey Industries. All Rights Reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/terms-and-conditions" className="text-gray-400 hover:text-primary-light text-sm transition-colors font-medium">Terms & Conditions</Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-primary-light text-sm transition-colors font-medium">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;