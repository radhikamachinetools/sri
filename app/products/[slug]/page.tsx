import Image from "next/image";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { promises as fs } from 'fs';
import path from 'path';
import ProductImageGallery from "./components/ProductImageGallery";

type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  images?: string[];
  keyFeatures?: string[];
  specifications?: Array<{spec: string; value: string}> | {
    power?: string;
    capacity?: string;
    weight?: string;
  };
};

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const PRODUCTS_FILE = path.join(process.cwd(), 'data', 'products.json');
    const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
    const { products } = JSON.parse(data);
    return products.find((p: Product) => p.slug === slug) || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="text-center bg-gradient-to-br from-secondary to-primary/5 rounded-2xl p-12 shadow-2xl border border-primary/20">
          <h1 className="text-3xl font-bold text-brand-accent mb-6">Product Not Found</h1>
          <Link href="/products" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-all duration-300 hover:translate-x-1">
            <ArrowLeft size={20} />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const allImages = product.images || [product.imageUrl];

  return (
    <div className="min-h-screen bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-8 font-semibold transition-all duration-300 hover:translate-x-1"
        >
          <ArrowLeft size={20} />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductImageGallery images={allImages} productName={product.name} />

          <div className="space-y-6">
            <div>
              <span className="text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full text-sm">{product.category}</span>
              <h1 className="text-4xl font-bold text-brand-accent mt-4">{product.name}</h1>
              <p className="text-xl text-muted mt-4 leading-relaxed">{product.shortDescription}</p>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-muted leading-relaxed">{product.description}</p>
            </div>

            {product.keyFeatures && product.keyFeatures.length > 0 && (
              <div className="bg-gradient-to-br from-secondary to-primary/5 rounded-2xl p-6 shadow-lg border border-primary/20">
                <h3 className="text-2xl font-bold text-brand-accent mb-6 flex items-center">
                  <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.keyFeatures.filter(feature => feature.trim()).map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <span className="text-primary mt-1 text-lg font-bold group-hover:scale-125 transition-transform duration-300">•</span>
                      <span className="text-brand-accent font-medium group-hover:text-primary transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.specifications && (
              <div className="bg-gradient-to-br from-secondary to-primary/5 rounded-2xl p-6 shadow-lg border border-primary/20">
                <h3 className="text-2xl font-bold text-brand-accent mb-6 flex items-center">
                  <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                  Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {Array.isArray(product.specifications) ? (
                    product.specifications.filter(spec => spec.spec && spec.value).map((spec, index) => (
                      <div key={index} className="bg-secondary/50 rounded-xl p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                        <span className="text-sm text-primary font-semibold uppercase tracking-wide">{spec.spec}</span>
                        <p className="font-bold text-brand-accent text-lg mt-1">{spec.value}</p>
                      </div>
                    ))
                  ) : (
                    <>
                      {product.specifications.power && (
                        <div className="bg-secondary/50 rounded-xl p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                          <span className="text-sm text-primary font-semibold uppercase tracking-wide">Power</span>
                          <p className="font-bold text-brand-accent text-lg mt-1">{product.specifications.power}</p>
                        </div>
                      )}
                      {product.specifications.capacity && (
                        <div className="bg-secondary/50 rounded-xl p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                          <span className="text-sm text-primary font-semibold uppercase tracking-wide">Capacity</span>
                          <p className="font-bold text-brand-accent text-lg mt-1">{product.specifications.capacity}</p>
                        </div>
                      )}
                      {product.specifications.weight && (
                        <div className="bg-secondary/50 rounded-xl p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                          <span className="text-sm text-primary font-semibold uppercase tracking-wide">Weight</span>
                          <p className="font-bold text-brand-accent text-lg mt-1">{product.specifications.weight}</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="bg-gradient-to-r from-primary to-primary-dark text-secondary rounded-2xl p-8 shadow-2xl border border-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-brand-accent">Interested in this machine?</h3>
                <p className="mb-8 text-brand-accent/80 text-lg leading-relaxed">Get in touch with our experts for pricing and customization options.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919983813366"
                    className="group flex items-center justify-center gap-3 bg-secondary text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                  >
                    <Phone size={20} className="group-hover:animate-pulse" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:rmt.jodhpur@gmail.com"
                    className="group flex items-center justify-center gap-3 bg-brand-accent text-secondary px-8 py-4 rounded-xl font-bold hover:bg-brand-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                  >
                    <Mail size={20} className="group-hover:animate-bounce" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}