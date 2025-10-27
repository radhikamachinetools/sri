"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Star, Users, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";

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
  const stats = [
    { number: "500+", label: "Industries Served", icon: Users },
    { number: "25+", label: "Years Experience", icon: Award },
    { number: "99%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Zap },
  ];

  const features = [
    "Premium Quality Manufacturing",
    "Advanced Technology Integration", 
    "Comprehensive After-Sales Support",
    "Customized Solutions Available",
    "ISO Certified Processes",
    "Nationwide Service Network"
  ];

  return (
    <div className="bg-white">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Award className="w-4 h-4 mr-2" />
                Trusted by 500+ Industries Worldwide
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Premium
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"> Stone Processing</span>
                <br />Machinery
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Engineering excellence since 1995. We manufacture world-class stone processing equipment 
                that delivers exceptional performance, reliability, and ROI for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center">
                    Explore Products
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-teal-600 hover:text-teal-600 transition-all duration-300 flex items-center">
                    Get Quote
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/images/hero-machinery.jpg"
                  alt="Stone Processing Machinery"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg">
                  ✓ ISO Certified
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-slate-300 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Why Choose <span className="text-blue-600">Shree Radhey Industries</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We combine decades of engineering expertise with cutting-edge technology to deliver 
                machinery that exceeds expectations and drives business growth.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-lg font-semibold text-slate-700">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <Image
                  src="/images/factory-image.jpg"
                  alt="Manufacturing Excellence"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Featured <span className="text-blue-600">Machinery</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Discover our premium stone processing equipment designed for maximum efficiency and ROI
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.imageUrl || "/images/default-product.jpg"}
                    alt={product.name}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{product.name}</h3>
                  <p className="text-slate-600 mb-4">{product.shortDescription}</p>
                  <Link href={`/products/${product.slug}`}>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <button className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:from-slate-200 hover:to-slate-300 transition-all duration-300 border border-slate-300">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your stone processing needs and discover 
              how our machinery can boost your productivity and profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl">
                  Get Free Consultation
                </button>
              </Link>
              <Link href="/products">
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Browse Catalog
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ModernHomepage;