'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Award, Users, Factory, Target, Zap, Shield, 
  TrendingUp, Globe, Phone, Mail, MapPin, Star,
  CheckCircle, ArrowRight, Calendar, Building
} from 'lucide-react'
import Image from 'next/image'

const milestones = [
  { year: "1998", title: "Company Founded", description: "Started with a vision to revolutionize stone processing" },
  { year: "2005", title: "First Major Contract", description: "Secured contract with leading granite processing company" },
  { year: "2010", title: "ISO Certification", description: "Achieved ISO 9001:2008 certification for quality management" },
  { year: "2015", title: "500+ Clients", description: "Reached milestone of serving 500+ satisfied customers" },
  { year: "2020", title: "Technology Upgrade", description: "Introduced AI-powered precision control systems" },
  { year: "2024", title: "Market Leader", description: "Established as leading stone machinery manufacturer in India" }
]

const values = [
  {
    icon: <Award className="h-12 w-12 text-blue-500" />,
    title: "Excellence",
    description: "We strive for perfection in every machine we manufacture, ensuring the highest quality standards."
  },
  {
    icon: <Users className="h-12 w-12 text-green-500" />,
    title: "Customer First",
    description: "Our customers' success is our priority. We provide comprehensive support and customized solutions."
  },
  {
    icon: <Zap className="h-12 w-12 text-yellow-500" />,
    title: "Innovation",
    description: "Continuous research and development to bring cutting-edge technology to stone processing."
  },
  {
    icon: <Shield className="h-12 w-12 text-purple-500" />,
    title: "Reliability",
    description: "Built to last with premium materials and rigorous testing for maximum durability."
  }
]

const stats = [
  { number: "25+", label: "Years Experience", icon: <Calendar className="h-8 w-8" /> },
  { number: "500+", label: "Happy Clients", icon: <Users className="h-8 w-8" /> },
  { number: "50+", label: "Machine Models", icon: <Factory className="h-8 w-8" /> },
  { number: "99.9%", label: "Uptime Rate", icon: <TrendingUp className="h-8 w-8" /> }
]

const team = [
  {
    name: "Rajesh Kumar",
    position: "Founder & CEO",
    description: "25+ years of experience in stone processing machinery manufacturing",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Suresh Patel",
    position: "Technical Director",
    description: "Expert in mechanical engineering and automation systems",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Amit Sharma",
    position: "Sales Director",
    description: "Specialist in customer relations and business development",
    image: "/api/placeholder/300/300"
  }
]

export default function ModernAboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Crafting Excellence
                <br />
                <span className="text-orange-200">Since 1998</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-orange-100 leading-relaxed">
                For over 25 years, we've been at the forefront of stone processing technology, 
                delivering innovative machinery solutions that transform businesses across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  <Phone className="inline mr-2 h-5 w-5" />
                  Contact Us
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="/images/about-us-bg.png"
                  alt="Shree Radhey Industries Factory"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-orange-100">
                  <div className="p-2">
                    <div className="text-primary mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a small workshop to India's leading stone machinery manufacturer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-orange-100"
              >
                <div className="text-2xl font-bold text-primary mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              >
                <div className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl text-center h-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-orange-100">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-primary">Leadership</span>
            </h2>
            <p className="text-lg text-gray-600">
              The experienced team driving innovation in stone processing technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              >
                <div className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-3 hover:rotate-1 border border-orange-100 group">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="text-primary font-semibold mb-3 text-sm">
                      {member.position}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-orange-200">Partner</span> With Us?
            </h2>
            <p className="text-lg mb-8 text-orange-100">
              Join hundreds of satisfied customers who trust our expertise and quality
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  <Phone className="inline mr-2 h-5 w-5" />
                  Get in Touch
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ duration: 0.3 }}
              >
                <button className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <Building className="inline mr-2 h-5 w-5" />
                  Visit Our Factory
                </button>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-orange-100">
              {[
                { text: "25+ Years Experience" },
                { text: "ISO Certified Quality" },
                { text: "24/7 Support" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="flex items-center justify-center"
                >
                  <CheckCircle className="h-5 w-5 mr-2 text-orange-200" />
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}