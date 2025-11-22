'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, Calendar, 
  Send, CheckCircle, Star, Download, Headphones, Factory
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
        setFormData({ name: '', email: '', phone: '', company: '', message: '', machineType: '' })
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-secondary via-gray-50 to-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar - Top */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {[
            { icon: Factory, number: "500+", label: "Happy Clients" },
            { icon: Star, number: "25+", label: "Years Experience" },
            { icon: CheckCircle, number: "99.9%", label: "Success Rate" },
            { icon: Headphones, number: "24/7", label: "Support" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-brand-accent mb-1">{stat.number}</div>
                <div className="text-sm text-muted font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content - Reversed Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info & Quick Actions - Left on Desktop, Top on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="xl:col-span-1 order-2 xl:order-1 space-y-6"
          >
            {/* Header */}
            <div className="text-center xl:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-accent mb-4">
                Ready to Transform Your <span className="text-primary">Business?</span>
              </h2>
              <p className="text-lg text-muted mb-6">
                Connect with our machinery experts and discover the perfect solution
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: Phone, title: "Call Now", info: contactInfo.phones[0], color: "bg-green-500" },
                { icon: Mail, title: "Email Us", info: contactInfo.email, color: "bg-blue-500" },
                { icon: MapPin, title: "Visit Us", info: contactInfo.office, color: "bg-primary" }
              ].map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-secondary rounded-xl p-4 border border-primary/20 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${contact.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-brand-accent">{contact.title}</div>
                        <div className="text-sm text-muted">{contact.info}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white h-14 text-lg font-bold">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Chat
              </Button>
              <Button className="bg-primary hover:bg-primary-dark text-secondary h-14 text-lg font-bold">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Visit
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right on Desktop, Bottom on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="xl:col-span-2 order-1 xl:order-2"
          >
            <Card className="bg-secondary/95 backdrop-blur-sm border border-primary/20 shadow-2xl">
              <CardContent className="p-8 lg:p-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-brand-accent mb-2">
                    Get Your <span className="text-primary">Free Consultation</span>
                  </h3>
                  <p className="text-muted">
                    Fill out the form and our experts will contact you within 24 hours
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-primary/10 border border-primary/30 text-primary p-4 rounded-xl mb-6 text-center"
                  >
                    <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                    <span className="font-bold">Message sent successfully! We'll contact you soon.</span>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6">
                    <span className="font-bold">Error: {errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-brand-accent mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="h-12 border-primary/30 focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-brand-accent mb-2">Phone Number *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="h-12 border-primary/30 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-brand-accent mb-2">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="h-12 border-primary/30 focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-brand-accent mb-2">Company Name</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company"
                        className="h-12 border-primary/30 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-brand-accent mb-2">Machine Type of Interest</label>
                    <select
                      name="machineType"
                      value={formData.machineType}
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
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
                    <label className="block text-sm font-bold text-brand-accent mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className="border-primary/30 focus:border-primary resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary-dark text-secondary py-4 px-6 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
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
        </div>

        {/* Bottom CTA - Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-accent mb-4">
              Why Choose Our Machinery?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Free consultation & site survey",
                "Custom machinery recommendations", 
                "Detailed quotation within 24 hours",
                "Pan-India installation & support",
                "1-year comprehensive warranty",
                "24/7 technical assistance"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-brand-accent font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary-dark text-secondary font-bold text-lg px-8 py-4">
              <Star className="mr-2 h-5 w-5" />
              Get Free Demo
            </Button>
            <Button className="bg-brand-accent hover:bg-brand-accent/80 text-secondary font-bold text-lg px-8 py-4">
              <Download className="mr-2 h-5 w-5" />
              Download Catalog
            </Button>
          </div>
        </motion.div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12 text-muted"
        >
          <div className="flex items-center justify-center mb-2">
            <Clock className="h-5 w-5 mr-2 text-primary" />
            <span className="font-bold">Business Hours</span>
          </div>
          <p>Monday - Saturday: 9:00 AM - 7:00 PM | Sunday: 10:00 AM - 5:00 PM</p>
        </motion.div>
      </div>
    </section>
  )
}