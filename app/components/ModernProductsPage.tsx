'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, Filter, Grid, List, ArrowRight, Phone, Download, 
  Eye, Star, Zap, Shield, Award, Factory, Settings
} from 'lucide-react'
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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))]
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
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
              🏭 Complete Machinery Range
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Our Machinery
              </span>
              <br />
              <span className="text-blue-400">Collection</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-slate-300 leading-relaxed">
              Discover our comprehensive range of stone processing machinery designed for every industrial need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                placeholder="Search machines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-slate-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="px-3"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="px-3"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-slate-600">
            Showing {filteredProducts.length} of {products.length} machines
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm overflow-hidden h-full">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        {product.imageUrl ? (
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={400}
                            height={300}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-64 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                            <Factory className="h-16 w-16 text-slate-400" />
                          </div>
                        )}
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                            {product.category}
                          </Badge>
                        </div>
                        {product.isFeatured && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-yellow-500 text-white flex items-center gap-1">
                              <Star className="h-3 w-3 fill-current" />
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-slate-600 mb-4 line-clamp-2">
                          {product.shortDescription}
                        </p>
                        
                        {/* Features */}
                        <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                          <div className="flex items-center">
                            <Zap className="h-4 w-4 mr-1 text-green-500" />
                            High Efficiency
                          </div>
                          <div className="flex items-center">
                            <Shield className="h-4 w-4 mr-1 text-blue-500" />
                            ISO Certified
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Link href={`/products/${product.slug}`} className="flex-1">
                            <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                          <Button variant="outline" size="sm">
                            <Phone className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 relative overflow-hidden">
                          {product.imageUrl ? (
                            <Image
                              src={product.imageUrl}
                              alt={product.name}
                              width={400}
                              height={250}
                              className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-64 md:h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                              <Factory className="h-16 w-16 text-slate-400" />
                            </div>
                          )}
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-blue-600 text-white">
                              {product.category}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3 p-8 flex flex-col justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                              {product.shortDescription}
                            </p>
                            
                            <div className="flex items-center gap-6 mb-6 text-sm text-slate-500">
                              <div className="flex items-center">
                                <Zap className="h-4 w-4 mr-2 text-green-500" />
                                High Efficiency
                              </div>
                              <div className="flex items-center">
                                <Shield className="h-4 w-4 mr-2 text-blue-500" />
                                ISO Certified
                              </div>
                              <div className="flex items-center">
                                <Award className="h-4 w-4 mr-2 text-purple-500" />
                                Premium Quality
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex gap-4">
                            <Link href={`/products/${product.slug}`}>
                              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8">
                                View Details
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                            <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white">
                              <Phone className="mr-2 h-4 w-4" />
                              Call Now
                            </Button>
                            <Button variant="outline">
                              <Download className="mr-2 h-4 w-4" />
                              Brochure
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Factory className="h-24 w-24 text-slate-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-600 mb-4">No machines found</h3>
              <p className="text-slate-500 mb-8">Try adjusting your search or filter criteria</p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We specialize in custom machinery solutions tailored to your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Discuss Custom Solution
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
              <Settings className="mr-2 h-5 w-5" />
              Request Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}