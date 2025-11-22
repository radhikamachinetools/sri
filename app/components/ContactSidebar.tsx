'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function ContactSidebar() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const contactItems = [
    {
      id: 'phone',
      icon: Phone,
      title: '+91 9983813366',
      subtitle: 'Call Now',
      href: 'tel:+919983813366',
      color: 'bg-primary',
      hoverColor: 'hover:bg-primary-dark'
    },
    {
      id: 'email',
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Send Message',
      href: 'mailto:info@shreeradheyindustries.com',
      color: 'bg-brand-accent',
      hoverColor: 'hover:bg-brand-accent/80'
    },
    {
      id: 'location',
      icon: MapPin,
      title: 'Jodhpur, RJ',
      subtitle: 'Our Location',
      href: '#',
      color: 'bg-primary/80',
      hoverColor: 'hover:bg-primary'
    }
  ]

  const toggleItem = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId)
  }

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 space-y-3">
      {contactItems.map((item, index) => {
        const Icon = item.icon
        const isExpanded = expandedItem === item.id
        
        return (
          <motion.div
            key={item.id}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="relative"
          >
            {/* Minimized Icon */}
            <motion.button
              onClick={() => toggleItem(item.id)}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`${item.color} ${item.hoverColor} text-secondary p-3 rounded-full shadow-2xl transition-all duration-300 border-2 border-primary/20`}
            >
              <Icon size={20} />
            </motion.button>

            {/* Expanded Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ width: 0, opacity: 0, x: -20 }}
                  animate={{ width: 'auto', opacity: 1, x: 0 }}
                  exit={{ width: 0, opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute left-16 top-0 bg-brand-accent/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/30 overflow-hidden"
                >
                  {item.href.startsWith('#') ? (
                    <div className="flex items-center p-4 min-w-[200px]">
                      <div className={`p-2 ${item.color} rounded-lg mr-3`}>
                        <Icon size={16} className="text-secondary" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-secondary block whitespace-nowrap">
                          {item.title}
                        </span>
                        <span className="text-xs text-primary/70">{item.subtitle}</span>
                      </div>
                    </div>
                  ) : (
                    <motion.a
                      href={item.href}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center p-4 min-w-[200px] hover:bg-primary/10 transition-colors"
                    >
                      <div className={`p-2 ${item.color} rounded-lg mr-3`}>
                        <Icon size={16} className="text-secondary" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-secondary block whitespace-nowrap">
                          {item.title}
                        </span>
                        <span className="text-xs text-primary/70">{item.subtitle}</span>
                      </div>
                    </motion.a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}