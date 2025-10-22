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
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30 text-lg px-8 py-3 backdrop-blur-sm">
                🏭 About Shree Radhey Industries
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                  Crafting Excellence
                </span>
                <br />
                <span className="text-blue-400">Since 1998</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
                For over 25 years, we've been at the forefront of stone processing technology, 
                delivering innovative machinery solutions that transform businesses across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 backdrop-blur-sm">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Our Story
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="text-blue-600 mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-black text-slate-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              From a small workshop to India's leading stone machinery manufacturer
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 px-8">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Meet Our <span className="text-blue-400">Leadership</span>
            </h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto">
              The experienced team driving innovation in stone processing technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white font-bold text-4xl">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <div className="text-blue-400 font-semibold mb-4">
                      {member.position}
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-8">
              Ready to Partner With Us?
            </h2>
            <p className="text-2xl mb-12 text-blue-100">
              Join hundreds of satisfied customers who trust our expertise and quality
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button className="bg-white text-blue-600 hover:bg-slate-100 text-xl px-12 py-6 font-bold">
                <Phone className="mr-3 h-6 w-6" />
                Get in Touch
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-xl px-12 py-6 backdrop-blur-sm">
                <Building className="mr-3 h-6 w-6" />
                Visit Our Factory
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-blue-100">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-6 w-6 mr-3" />
                <span className="text-lg">25+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-6 w-6 mr-3" />
                <span className="text-lg">ISO Certified Quality</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-6 w-6 mr-3" />
                <span className="text-lg">24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}