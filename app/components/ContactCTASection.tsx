'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, Calendar, 
  Send, CheckCircle, ArrowRight, Factory, Headphones,
  FileText, Video, Download, Star
} from 'lucide-react'
import { useState } from 'react'

interface ContactCTASectionProps {
  settings?: any
}

export default function ContactCTASection({ settings }: ContactCTASectionProps) {
  const contactInfo = settings?.contact || {
    phones: ["+91 9983813366"],
    email: "shreeradheyindustriesjodhpur@gmail.com",
    office: "Jodhpur, Rajasthan"
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
        body: JSON.stringify({
          ...formData,
          subject: `Quote Request - ${formData.machineType || 'General Inquiry'}`
        })
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
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 text-white"
        >
          <div className="mb-4">
            <span className="text-2xl">🚀</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Ready to Transform Your Business?
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Get Your <span className="text-orange-200">Free Consultation</span>
          </h3>
          <p className="text-lg text-orange-100 max-w-3xl mx-auto">
            Connect with our machinery experts and discover the perfect solution for your stone processing needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Request a Quote
                </h3>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="h-12"
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
                        className="h-12"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="h-12"
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
                        className="h-12"
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
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="inline mr-2 h-5 w-5" />
                        Send Request
                      </>
                    )}
                  </button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Talk to Our Experts
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Call Now</div>
                      <div className="text-orange-200">{contactInfo.phones[0]}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-orange-200 text-sm">{contactInfo.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Visit Us</div>
                      <div className="text-orange-200">{contactInfo.office}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white h-16 text-lg">
                <MessageCircle className="mr-2 h-6 w-6" />
                WhatsApp
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 h-16 text-lg backdrop-blur-sm">
                <Calendar className="mr-2 h-6 w-6" />
                Schedule Visit
              </Button>
            </div>

            {/* Service Features */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-white mb-4">What You Get:</h4>
                <div className="space-y-3">
                  {[
                    "Free consultation & site survey",
                    "Custom machinery recommendations",
                    "Detailed quotation within 24 hours",
                    "Pan-India installation & support",
                    "1-year comprehensive warranty"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-orange-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">
                Ready to Boost Your Production?
              </h3>
              <p className="text-orange-100 text-lg">
                Join 500+ satisfied customers who trust our machinery
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4">
                <Star className="mr-2 h-5 w-5" />
                Get Free Demo
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 backdrop-blur-sm">
                <Download className="mr-2 h-5 w-5" />
                Download Catalog
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Operating Hours */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-orange-100"
        >
          <div className="flex items-center justify-center mb-2">
            <Clock className="h-5 w-5 mr-2" />
            <span className="font-semibold">Business Hours</span>
          </div>
          <p>Monday - Saturday: 9:00 AM - 7:00 PM | Sunday: 10:00 AM - 5:00 PM</p>
          <p className="mt-2 text-sm">
            <span className="inline-flex items-center">
              <Headphones className="h-4 w-4 mr-1" />
              24/7 Emergency Support Available
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}