'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  _id: string
  slug: string
  name: string
  imageUrl?: string
  shortDescription: string
  category: string
  specifications?: any
}

interface SalesHomepageProps {
  featuredProducts: Product[]
  settings?: any
}

export default function SalesHomepage({ featuredProducts, settings }: SalesHomepageProps) {
  const heroStats = settings?.hero?.stats || [
    { number: "500+", label: "Happy Clients" },
    { number: "25+", label: "Years Experience" },
    { number: "50+", label: "Machine Models" },
    { number: "24/7", label: "Support" }
  ];
  
  const contactInfo = settings?.contact || {
    phones: ["+91 9983813366"],
    email: "shreeradheyindustriesjodhpur@gmail.com"
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Premium Stone Processing
              <br />
              <span className="text-orange-200">Machinery</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-orange-100">
              Leading manufacturer of stone cutting, polishing & processing equipment with 25+ years of excellence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/contact">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  <Phone className="inline mr-2 h-5 w-5" />
                  Get Quote
                </button>
              </Link>
              <Link href="/products">
                <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                  View Products
                </button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {heroStats.map((stat: any, index: number) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * (index + 1) }}
                >
                  <div className="text-3xl font-bold text-orange-200 mb-1">{stat.number}</div>
                  <div className="text-sm text-orange-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-primary">Machines</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-leading technology for higher productivity and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "High Precision",
                description: "Advanced engineering ensures consistent quality and minimal waste"
              },
              {
                title: "Energy Efficient",
                description: "Optimized power consumption reduces operational costs"
              },
              {
                title: "Reliable Performance",
                description: "Built for continuous operation with minimal maintenance"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-primary">Machinery</span>
            </h2>
            <p className="text-lg text-gray-600">
              Smart stone processing solutions for modern industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 group"
              >
                <div className="relative overflow-hidden">
                  {product.imageUrl ? (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No Image</span>
                    </div>
                  )}
                  
                  {/* Overlay with hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category badge with animation */}
                  <motion.div 
                    className="absolute top-3 left-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="bg-gradient-to-r from-primary to-primary-dark text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      {product.category}
                    </span>
                  </motion.div>
                  
                  {/* Quick view button */}
                  <motion.div 
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <motion.h3 
                    className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {product.name}
                  </motion.h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  
                  {/* Smart features indicators */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center text-xs text-primary">
                      <div className="w-2 h-2 bg-primary rounded-full mr-1"></div>
                      High Efficiency
                    </div>
                    <div className="flex items-center text-xs text-primary-dark">
                      <div className="w-2 h-2 bg-primary-dark rounded-full mr-1"></div>
                      Smart Control
                    </div>
                  </div>
                  
                  <Link href={`/products/${product.slug}`}>
                    <motion.button 
                      className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-4 rounded-lg font-medium shadow-md"
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(234, 88, 12, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      Explore Machine
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Link href="/products">
              <motion.button 
                className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-3 rounded-lg font-medium shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                View All Machinery
                <ArrowRight className="inline ml-2 h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by businesses across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                company: "Granite Works Ltd",
                text: "Excellent machines with reliable performance. Our productivity increased by 40% after installation."
              },
              {
                name: "Priya Sharma",
                company: "Stone Craft Industries",
                text: "Outstanding quality and great after-sales support. Highly recommend for stone processing needs."
              },
              {
                name: "Amit Patel",
                company: "Marble Masters",
                text: "Professional service and top-quality machinery. Best investment we made for our business."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
              >
                <div className="mb-4">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 text-primary">
                        ⭐
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Your Free Consultation */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Free Consultation
            </h2>
            <p className="text-lg mb-8 text-orange-100">
              Expert advice for your stone processing requirements
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              {contactInfo?.phones?.[0] ? (
                <Link href={`tel:${contactInfo.phones[0]}`}>
                  <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    <Phone className="inline mr-2 h-5 w-5" />
                    Call {contactInfo.phones[0]}
                  </button>
                </Link>
              ) : (
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold opacity-50 cursor-not-allowed">
                  <Phone className="inline mr-2 h-5 w-5" />
                  Phone Unavailable
                </button>
              )}
              <Link href="/contact">
                <button className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Get Quote
                </button>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-orange-100 text-sm">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Custom Solutions</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Pan-India Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}