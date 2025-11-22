"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Factory, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { IMAGES } from "../lib/images";

interface Product {
  _id: string;
  name: string;
  slug: string;
  imageUrl?: string;
  shortDescription: string;
  category: string;
}

interface ModernHomepageProps {
  featuredProducts: Product[];
  settings: any;
}

const ModernHomepage = ({ featuredProducts, settings }: ModernHomepageProps) => {
  return (
    <div className="bg-secondary overflow-x-hidden">
      {/* Hero Banner Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-brand-accent via-gray-900 to-primary/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/90 to-transparent z-10"></div>
          <Image
            src={IMAGES.heroBackground}
            alt="Industrial Machinery Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-7 space-y-8 text-center lg:text-left"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center bg-primary text-secondary px-6 py-3 rounded-full text-sm font-bold shadow-lg"
              >
                <Star className="w-4 h-4 mr-2" />
                <span>Industry Leader Since 1995</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-black text-secondary leading-tight"
              >
                Advanced
                <span className="block text-primary">Stone Machinery</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-4">Solutions</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-lg sm:text-xl text-secondary/90 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Precision-engineered machinery for granite, marble, and stone processing. 
                Trusted by 500+ manufacturers worldwide for unmatched quality and performance.
              </motion.p>


            </motion.div>

            {/* Hero Stats Cards - Stacked Layout */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="lg:col-span-5 space-y-4"
            >
              {[
                { number: "500+", label: "Global Clients", icon: Users },
                { number: "25+", label: "Years Experience", icon: Award },
                { number: "99.9%", label: "Uptime Rate", icon: Zap },
                { number: "24/7", label: "Support", icon: Star }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-2xl p-4 flex items-center space-x-4"
                  >
                    <IconComponent className="w-10 h-10 text-primary flex-shrink-0" />
                    <div className="text-left">
                      <div className="text-2xl font-bold text-secondary">{stat.number}</div>
                      <div className="text-secondary/80 text-sm font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Action Buttons at the end */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Link href="/products">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(183, 149, 11, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-secondary px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center min-w-[200px]"
              >
                View Machinery
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(250, 243, 217, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/10 transition-all duration-300 flex items-center justify-center min-w-[200px]"
              >
                Get Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-accent mb-6">
              Complete <span className="text-primary">Manufacturing</span> Solutions
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              From cutting-edge machinery to comprehensive support services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Cutting",
                description: "Advanced block cutters and wire saw machines for accurate stone processing",
                icon: "🔧"
              },
              {
                title: "Surface Finishing", 
                description: "Line polishing machines for perfect surface quality and finish",
                icon: "✨"
              },
              {
                title: "Custom Solutions",
                description: "Tailored machinery solutions designed for your specific requirements",
                icon: "⚙️"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-brand-accent mb-4">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold text-brand-accent mb-4 lg:mb-0">
                  Featured <span className="text-primary">Equipment</span>
                </h2>
              </div>
              <Link href="/products">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-secondary px-6 py-3 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 mx-auto lg:mx-0"
                >
                  View All Products
                </motion.button>
              </Link>
            </div>
            <p className="text-xl text-muted max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
              Discover our most popular and advanced machinery solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-secondary rounded-3xl overflow-hidden shadow-xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.imageUrl || IMAGES.defaultProduct}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-secondary px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-accent mb-3">{product.name}</h3>
                  <p className="text-muted mb-4 line-clamp-2">{product.shortDescription}</p>
                  <Link href={`/products/${product.slug}`}>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-primary to-primary-dark text-secondary py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-brand-accent">
              Ready to Transform Your <span className="text-secondary">Production?</span>
            </h2>
            <p className="text-xl mb-8 text-brand-accent/80 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust our expertise and quality
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-secondary text-brand-accent px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/10 transition-all duration-300"
                >
                  Browse Catalog
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ModernHomepage;