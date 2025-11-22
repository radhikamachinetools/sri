'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowRight, Phone, Download, Eye, Star, Zap, Shield, 
  Award, TrendingUp, Factory, Settings, Wrench
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  _id: string
  slug: string
  name: string
  imageUrl?: string
  shortDescription: string
  category: string
  specifications?: any
}

interface ProductShowcaseProps {
  products: Product[]
  title?: string
  subtitle?: string
}

export default function ProductShowcase({ products, title = "Premium Machinery", subtitle = "Discover our range of high-performance stone processing equipment" }: ProductShowcaseProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.3'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200 text-lg px-8 py-3">
            🏭 Industrial Excellence
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {products.slice(0, 4).map((product, index) => {
            // Validate product data
            if (!product || !product._id || !product.name) {
              console.warn('Invalid product data:', product);
              return (
                <div key={index} className="bg-gray-100 rounded-lg p-8 text-center">
                  <div className="text-gray-500">Product unavailable</div>
                </div>
              );
            }

            try {
              return (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
              <Card className="group hover:shadow-3xl transition-all duration-700 border-0 bg-white/90 backdrop-blur-sm overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="lg:flex h-full">
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative overflow-hidden">
                      {product.imageUrl ? (
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          width={600}
                          height={400}
                          className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-80 lg:h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                          <Factory className="h-24 w-24 text-slate-400" />
                        </div>
                      )}
                      
                      {/* Overlay with Quick Actions */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-6">
                        <div className="flex gap-3">
                          <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
                          {product.category || 'Uncategorized'}
                        </Badge>
                      </div>

                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-500 text-white shadow-lg flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current" />
                          4.9
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {product.name || 'Unnamed Product'}
                        </h3>
                        <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                          {product.shortDescription || 'No description available'}
                        </p>
                        
                        {/* Key Features */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="flex items-center text-sm text-slate-600">
                            <Zap className="h-4 w-4 mr-2 text-green-500" />
                            High Efficiency
                          </div>
                          <div className="flex items-center text-sm text-slate-600">
                            <Shield className="h-4 w-4 mr-2 text-blue-500" />
                            ISO Certified
                          </div>
                          <div className="flex items-center text-sm text-slate-600">
                            <Award className="h-4 w-4 mr-2 text-purple-500" />
                            Premium Quality
                          </div>
                          <div className="flex items-center text-sm text-slate-600">
                            <TrendingUp className="h-4 w-4 mr-2 text-orange-500" />
                            ROI Guaranteed
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <Link href={`/products/${product.slug || product._id}`} className="flex-1">
                            <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg py-3">
                              View Details
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </Link>
                          <Button className="bg-green-500 hover:bg-green-600 text-white px-6">
                            <Phone className="h-5 w-5" />
                          </Button>
                        </div>
                        
                        <div className="flex gap-4">
                          <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                            <Download className="mr-2 h-4 w-4" />
                            Brochure
                          </Button>
                          <Button variant="outline" className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                            Get Quote
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
                </motion.div>
              );
            } catch (error) {
              console.error('Error rendering product:', error, product);
              return (
                <div key={product._id || index} className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
                  <div className="text-red-600">Failed to load product</div>
                </div>
              );
            }
          })}
        </div>

        {/* Additional Products Grid */}
        {products.length > 4 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(4).map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
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
                          <Wrench className="h-16 w-16 text-slate-400" />
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600 text-white">
                          {product.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-2">
                        {product.shortDescription}
                      </p>
                      
                      <div className="flex gap-2">
                        <Link href={`/products/${product.slug}`} className="flex-1">
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                            Details
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
        )}
      </div>
    </section>
  )
}