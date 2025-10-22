'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote, MapPin, Building, Users, Award, Shield, Clock } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "Granite World Industries",
    location: "Jaipur, Rajasthan",
    rating: 5,
    text: "Shree Radhey Industries transformed our production line. The C-2300 Block Cutter increased our efficiency by 45% and the quality is outstanding. Best investment we've made!",
    image: "/api/placeholder/80/80",
    industry: "Granite Processing"
  },
  {
    id: 2,
    name: "Suresh Patel",
    company: "Marble Masters Pvt Ltd",
    location: "Udaipur, Rajasthan",
    rating: 5,
    text: "The LPM Disk Polishing Machine delivers mirror-like finishes consistently. Their after-sales support is exceptional - truly a reliable partner for our business.",
    image: "/api/placeholder/80/80",
    industry: "Marble Finishing"
  },
  {
    id: 3,
    name: "Amit Sharma",
    company: "Stone Craft Enterprises",
    location: "Jodhpur, Rajasthan",
    rating: 5,
    text: "Working with Shree Radhey Industries for 3 years now. Their machines are built to last and the ROI is incredible. Highly recommend for serious stone processors.",
    image: "/api/placeholder/80/80",
    industry: "Stone Processing"
  },
  {
    id: 4,
    name: "Vikram Singh",
    company: "Royal Stone Works",
    location: "Kota, Rajasthan",
    rating: 5,
    text: "The precision and reliability of their wire saw machine is unmatched. Cut our processing time in half while maintaining superior quality standards.",
    image: "/api/placeholder/80/80",
    industry: "Stone Cutting"
  }
]

const stats = [
  { number: "500+", label: "Happy Clients", icon: <Users className="h-8 w-8" /> },
  { number: "25+", label: "Years Experience", icon: <Award className="h-8 w-8" /> },
  { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="h-8 w-8" /> },
  { number: "24/7", label: "Support Available", icon: <Clock className="h-8 w-8" /> }
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30 text-lg px-8 py-3 backdrop-blur-sm">
            ⭐ Client Success Stories
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            What Our <span className="text-blue-400">Clients Say</span>
          </h2>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from industry leaders who trust our machinery
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 h-full">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="h-12 w-12 text-blue-400 opacity-50" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-200 text-lg leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xl">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center text-slate-300 text-sm mb-1">
                          <Building className="h-4 w-4 mr-1" />
                          {testimonial.company}
                        </div>
                        <div className="flex items-center text-slate-400 text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30">
                      {testimonial.industry}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Trusted by Leading Companies Across India
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {[
              "Granite World Industries",
              "Marble Masters Pvt Ltd", 
              "Stone Craft Enterprises",
              "Royal Stone Works"
            ].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <div className="text-white font-semibold text-center">
                  {company}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}