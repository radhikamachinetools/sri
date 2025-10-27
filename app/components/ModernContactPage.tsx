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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Validation
      if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
        throw new Error('Please fill in all required fields')
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          machineType: ''
        })
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
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
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Get expert consultation for your stone processing machinery needs
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-200 mb-1">24/7</div>
              <div className="text-sm text-orange-100">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-200 mb-1">500+</div>
              <div className="text-sm text-orange-100">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-200 mb-1">25+</div>
              <div className="text-sm text-orange-100">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-200 mb-1">100%</div>
              <div className="text-sm text-orange-100">Quality</div>
            </div>
          </div>
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
                <div className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center h-full flex flex-col border border-orange-100">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center shadow-md">
                    <div className="text-white">{method.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    {method.description}
                  </p>
                  <div className="text-sm font-medium text-gray-800 mb-4 flex-grow break-words">
                    {method.value}
                  </div>
                  <a href={method.action}>
                    <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300 text-sm">
                      Contact Now
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Message sent successfully! We'll contact you soon.</span>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Error: {errorMessage}</span>
                      <button onClick={() => setSubmitStatus('idle')} className="text-red-500 hover:text-red-700">✕</button>
                    </div>
                  </div>
                )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Machine Type of Interest
                      </label>
                      <select
                        name="machineType"
                        value={formData.machineType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What can we help you with?"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements, production capacity, or any specific questions..."
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        required
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 font-medium"
                    >
                      <Send className="inline mr-2 h-5 w-5" />
                      Send Message
                    </button>
                  </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Business Hours */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600 text-sm">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center text-green-700">
                    <Headphones className="h-4 w-4 mr-2" />
                    <span className="font-medium text-sm">24/7 Emergency Support</span>
                  </div>
                </div>
              </div>

              {/* What You Get */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What You Get:</h3>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Award className="h-8 w-8 mx-auto mb-2 text-orange-200" />
                    <div className="text-lg font-bold">25+</div>
                    <div className="text-orange-100 text-xs">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-orange-200" />
                    <div className="text-lg font-bold">ISO</div>
                    <div className="text-orange-100 text-xs">Certified</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-orange-200" />
                    <div className="text-lg font-bold">500+</div>
                    <div className="text-orange-100 text-xs">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <Star className="h-8 w-8 mx-auto mb-2 text-orange-200" />
                    <div className="text-lg font-bold">4.9</div>
                    <div className="text-orange-100 text-xs">Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg mb-8 text-orange-100">
            Our machinery experts are ready to help you
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+919983813366">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                <Phone className="inline mr-2 h-5 w-5" />
                Call +91 9983813366
              </button>
            </a>
            <a href="https://wa.me/919983813366">
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                <MessageCircle className="inline mr-2 h-5 w-5" />
                WhatsApp Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}