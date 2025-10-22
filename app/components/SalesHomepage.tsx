'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, Phone, Mail, MapPin, Star, Award, Shield, Wrench, 
  Clock, Users, CheckCircle, Factory, Zap, Target, TrendingUp,
  PlayCircle, Download, MessageCircle, Calendar
} from 'lucide-react'
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
    <div className="min-h-screen">
      {/* Hero Section - Sales Focused */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-8 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 border-blue-400/30 text-lg px-8 py-3 backdrop-blur-sm">
              🏭 India's Leading Stone Processing Machinery Manufacturer
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Stone Business
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto text-slate-300 leading-relaxed font-light">
              Premium stone cutting, polishing & processing machinery that delivers 
              <span className="text-blue-400 font-semibold"> 40% faster production </span>
              and <span className="text-indigo-400 font-semibold">guaranteed ROI</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-xl px-12 py-6 shadow-2xl">
                <Phone className="mr-3 h-6 w-6" />
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-xl px-12 py-6 backdrop-blur-sm">
                <PlayCircle className="mr-3 h-6 w-6" />
                Watch Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {heroStats.map((stat: any, index: number) => {
                const colors = ['text-blue-400', 'text-indigo-400', 'text-purple-400', 'text-pink-400'];
                return (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * (index + 1) }}
                  >
                    <div className={`text-4xl font-black ${colors[index % colors.length]} mb-2`}>{stat.number}</div>
                    <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Why Choose Our Machines?
              </span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Industry-leading technology that guarantees higher productivity and lower operational costs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <TrendingUp className="h-16 w-16 text-green-500" />,
                title: "40% Faster Production",
                description: "Advanced automation and precision engineering deliver significantly faster processing speeds",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Target className="h-16 w-16 text-blue-500" />,
                title: "99.9% Precision",
                description: "Computer-controlled systems ensure consistent quality and minimal material waste",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: <Zap className="h-16 w-16 text-purple-500" />,
                title: "30% Energy Savings",
                description: "Optimized power consumption reduces operational costs and environmental impact",
                color: "from-purple-500 to-pink-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center shadow-lg`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Machines - Sales Focus */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200 text-lg px-6 py-3">
              🔧 Best Selling Machines
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Premium Machinery
              </span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Discover our top-selling stone processing machines designed for maximum ROI and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.slice(0, 6).map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      {product.imageUrl ? (
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          width={500}
                          height={350}
                          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-72 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                          <Factory className="h-20 w-20 text-slate-400" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
                          {product.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500 text-white shadow-lg">
                          Best Seller
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-slate-600 mb-6 line-clamp-2 text-lg leading-relaxed">
                        {product.shortDescription}
                      </p>
                      
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                          <Link href={`/products/${product.slug}`}>
                            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-6 py-3">
                              View Details
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </Link>
                          <Button variant="outline" size="lg" className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white">
                            <Phone className="h-5 w-5" />
                          </Button>
                        </div>
                        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                          <Download className="mr-2 h-4 w-4" />
                          Download Brochure
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/products">
              <Button size="lg" className="bg-gradient-to-r from-slate-900 to-blue-900 hover:from-slate-800 hover:to-blue-800 text-xl px-12 py-6">
                View All Machines
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-indigo-900/30"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Industry <span className="text-blue-400">Solutions</span>
            </h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto">
              Specialized machinery for every stone processing need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Granite Processing", icon: "🏗️", description: "Heavy-duty machines for granite cutting and polishing" },
              { title: "Marble Finishing", icon: "✨", description: "Precision equipment for marble surface finishing" },
              { title: "Stone Cutting", icon: "⚡", description: "High-speed cutting solutions for all stone types" },
              { title: "Custom Solutions", icon: "🎯", description: "Tailored machinery for specific requirements" }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-6">{solution.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Ready to Boost Your Production?
            </h2>
            <p className="text-2xl mb-12 text-blue-100 leading-relaxed">
              Get expert consultation and find the perfect machinery for your stone processing needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 text-xl px-12 py-6 font-bold shadow-2xl">
                <Phone className="mr-3 h-6 w-6" />
                Call {contactInfo.phones[0]}
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-xl px-12 py-6 backdrop-blur-sm">
                <MessageCircle className="mr-3 h-6 w-6" />
                WhatsApp Us
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-xl px-12 py-6 backdrop-blur-sm">
                <Calendar className="mr-3 h-6 w-6" />
                Schedule Visit
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-blue-100">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-6 w-6 mr-3" />
                <span className="text-lg">Free Consultation</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-6 w-6 mr-3" />
                <span className="text-lg">Custom Solutions</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-6 w-6 mr-3" />
                <span className="text-lg">Pan-India Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}