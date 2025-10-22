'use client'

import { motion } from 'framer-motion'
import { Search, ArrowRight, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Product {
  _id: string
  slug: string
  name: string
  imageUrl?: string
  shortDescription: string
  category: string
  specifications?: any
  isFeatured?: boolean
}

interface ModernProductsPageProps {
  products: Product[]
}

export default function ModernProductsPage({ products }: ModernProductsPageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))]
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Products
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Premium stone processing machinery for industrial excellence
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">No Image</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  
                  <div className="flex gap-2">
                    <Link href={`/products/${product.slug}`} className="flex-1">
                      <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium">
                        View Details
                      </button>
                    </Link>
                    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <Phone className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search criteria</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us for specialized machinery tailored to your requirements
          </p>
          <Link href="/contact">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium">
              <Phone className="inline mr-2 h-5 w-5" />
              Get Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}