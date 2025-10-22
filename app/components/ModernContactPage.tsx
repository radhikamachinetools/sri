'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, Send, 
  CheckCircle, Factory, Headphones, Calendar, Globe,
  Star, Award, Shield, Users
} from 'lucide-react'
import { useState } from 'react'

const contactMethods = [
  {
    icon: <Phone className="h-8 w-8 text-green-500" />,
    title: "Call Us",
    description: "Speak directly with our experts",
    value: "+91 9983813366",
    action: "tel:+919983813366",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-blue-500" />,
    title: "WhatsApp",
    description: "Quick chat for instant support",
    value: "+91 9983813366",
    action: "https://wa.me/919983813366",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: <Mail className="h-8 w-8 text-purple-500" />,
    title: "Email Us",
    description: "Send detailed inquiries",
    value: "shreeradheyindustriesjodhpur@gmail.com",
    action: "mailto:shreeradheyindustriesjodhpur@gmail.com",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <MapPin className="h-8 w-8 text-orange-500" />,
    title: "Visit Us",
    description: "See our factory in person",
    value: "Jodhpur, Rajasthan",
    action: "#",
    color: "from-orange-500 to-red-500"
  }
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 5:00 PM" }
]

const features = [
  {
    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    text: "Free consultation & site survey"
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    text: "Custom machinery recommendations"
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    text: "Detailed quotation within 24 hours"
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    text: "Pan-India installation & support"
  }
]

export default function ModernContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    machineType: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30 text-lg px-8 py-3 backdrop-blur-sm">
              📞 Get in Touch
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Contact Our
              </span>
              <br />
              <span className="text-blue-400">Machinery Experts</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-slate-300 leading-relaxed">
              Ready to transform your stone processing business? Our team is here to help you find the perfect machinery solution.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-sm text-slate-400">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">500+</div>
                <div className="text-sm text-slate-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-sm text-slate-400">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {method.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {method.description}
                    </p>
                    <div className="text-lg font-semibold text-slate-800 mb-6">
                      {method.value}
                    </div>
                    <a href={method.action}>
                      <Button className={`w-full bg-gradient-to-r ${method.color} hover:opacity-90 text-white`}>
                        Contact Now
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-10">
                  <h2 className="text-4xl font-bold text-slate-900 mb-8">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="h-12 text-lg"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="h-12 text-lg"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="h-12 text-lg"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Company Name
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company"
                          className="h-12 text-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Machine Type of Interest
                      </label>
                      <select
                        name="machineType"
                        value={formData.machineType}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                      >
                        <option value="">Select machine type</option>
                        <option value="block-cutter">Block Cutting Machines</option>
                        <option value="polishing">Line Polishing Machines</option>
                        <option value="wire-saw">Wire Cutting Machines</option>
                        <option value="stone-processing">Stone Processing Equipment</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What can we help you with?"
                        className="h-12 text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements, production capacity, or any specific questions..."
                        rows={6}
                        className="resize-none text-lg"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-xl py-6"
                    >
                      <Send className="mr-3 h-6 w-6" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Business Hours */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-slate-900">Business Hours</h3>
                  </div>
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0">
                        <span className="font-semibold text-slate-700">{schedule.day}</span>
                        <span className="text-slate-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center text-green-700">
                      <Headphones className="h-5 w-5 mr-2" />
                      <span className="font-semibold">24/7 Emergency Support Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What You Get */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">What You Get:</h3>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        {feature.icon}
                        <span className="ml-3 text-slate-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <Award className="h-12 w-12 mx-auto mb-3 text-yellow-300" />
                      <div className="text-2xl font-bold">25+</div>
                      <div className="text-blue-100">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <Shield className="h-12 w-12 mx-auto mb-3 text-green-300" />
                      <div className="text-2xl font-bold">ISO</div>
                      <div className="text-blue-100">Certified</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-12 w-12 mx-auto mb-3 text-purple-300" />
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-blue-100">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <Star className="h-12 w-12 mx-auto mb-3 text-yellow-300" />
                      <div className="text-2xl font-bold">4.9</div>
                      <div className="text-blue-100">Rating</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-8">
              Need Immediate Assistance?
            </h2>
            <p className="text-2xl mb-12 text-green-100">
              Our machinery experts are standing by to help you make the right choice
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-white text-green-600 hover:bg-slate-100 text-xl px-12 py-6 font-bold">
                <Phone className="mr-3 h-6 w-6" />
                Call +91 9983813366
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white text-xl px-12 py-6 font-bold">
                <MessageCircle className="mr-3 h-6 w-6" />
                WhatsApp Now
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-xl px-12 py-6 backdrop-blur-sm">
                <Calendar className="mr-3 h-6 w-6" />
                Schedule Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}