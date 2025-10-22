// app/components/HeroClient.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

type HeroSettings = {
  title: string;
  subtitle: string;
  ctaText: string;
  stats: { number: string; label: string }[];
};

export default function HeroClient() {
  const [settings, setSettings] = useState<HeroSettings | null>(null);

  useEffect(() => {
    fetch('/api/admin/settings')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setSettings(data.settings.hero);
        }
      })
      .catch(() => {
        // Fallback content
        setSettings({
          title: "Engineering Excellence in Stone Processing",
          subtitle: "Transform your production with cutting-edge machinery",
          ctaText: "Explore Solutions",
          stats: [
            { number: "25+", label: "Years Experience" },
            { number: "500+", label: "Happy Clients" },
            { number: "50+", label: "Machine Models" },
            { number: "24/7", label: "Support" }
          ]
        });
      });
  }, []);

  if (!settings) return <div className="h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div></div>;

  return (
    <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="space-y-8"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium"
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          Trusted by 500+ Industries Worldwide
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
          className="text-6xl sm:text-7xl lg:text-9xl font-black leading-[0.85] tracking-tight"
        >
          <span className="block text-white drop-shadow-2xl">
            {settings.title.split(' ').slice(0, 2).join(' ')}
          </span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            {settings.title.split(' ').slice(2).join(' ')}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl lg:text-3xl max-w-5xl mx-auto text-gray-100 leading-relaxed font-light"
        >
          {settings.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
        >
          <Link
            href="/products"
            className="group relative bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-5 px-10 rounded-2xl text-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 flex items-center gap-4 min-w-[280px] justify-center overflow-hidden"
          >
            <span className="relative z-10">{settings.ctaText}</span>
            <ArrowRight 
              size={24} 
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
          
          <Link
            href="/contact"
            className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold py-5 px-10 rounded-2xl text-xl hover:bg-white hover:text-gray-900 transition-all duration-500 flex items-center gap-4 min-w-[280px] justify-center"
          >
            <Play size={20} />
            Watch Demo
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 max-w-6xl mx-auto"
        >
          {settings.stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20"
            >
              <div className="text-4xl lg:text-5xl font-black text-primary mb-2">{stat.number}</div>
              <div className="text-base text-gray-200 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}