import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <p className="text-sm text-gray-400">Engineering Excellence</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading manufacturer of stone processing machinery. Trusted by 500+ industries worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={16} />
                <div className="text-gray-400 text-sm">
                  <p>Mali, Nagorion Ka Bass, Shiv Temple</p>
                  <p>Jodhpur 342001, Rajasthan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-gray-400 flex-shrink-0" size={16} />
                <div className="text-gray-400 text-sm">
                  <p>+91 9983813366</p>
                  <p>+91 9950329353</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-gray-400 flex-shrink-0" size={16} />
                <a href="mailto:shreeradheyindustriesjodhpur@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  shreeradheyindustriesjodhpur@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Shree Radhey Industries. All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;