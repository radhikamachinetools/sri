"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Zap } from "lucide-react";

type Product = {
  _id: string;
  slug: string;
  name: string;
  category: string;
  imageUrl?: string;
  shortDescription: string;
};

type UniqueProductCardProps = {
  product: Product;
  index: number;
};

export default function UniqueProductCard({ product, index }: UniqueProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 45 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -20, 
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.imageUrl || "/images/placeholder.png"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-slate-800 text-sm font-bold border border-white/20">
            <Zap size={14} className="mr-2 text-blue-500" />
            {product.category}
          </span>
        </div>

        {/* Hover CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Link
            href={`/products/${product.slug}`}
            className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transform hover:scale-105 transition-transform shadow-xl"
          >
            View Details
            <ArrowUpRight size={20} />
          </Link>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          {product.shortDescription}
        </p>
        
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group/link"
        >
          Learn More
          <ArrowUpRight 
            size={18} 
            className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" 
          />
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/20 to-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </motion.div>
  );
}