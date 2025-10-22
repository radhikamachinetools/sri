import { promises as fs } from 'fs';
import path from 'path';

import ModernLayout from "./components/ModernLayout";
import SalesHomepage from "./components/SalesHomepage";
import ProductShowcase from "./components/ProductShowcase";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactCTASection from "./components/ContactCTASection";
import MediaSlider from "./components/MediaSlider";

type Product = {
  order: number;
  isFeatured: boolean;
  _id: string;
  slug: string;
  name: string;
  imageUrl?: string;
  shortDescription: string;
  category: string;
};

async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const PRODUCTS_FILE = path.join(process.cwd(), 'data', 'products.json');
    const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
    const { products } = JSON.parse(data);
    
    return products
      .filter((p: Product) => p.isFeatured)
      .sort((a: Product, b: Product) => (a.order || 0) - (b.order || 0));
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

async function getSettings() {
  try {
    const SETTINGS_FILE = path.join(process.cwd(), 'data', 'settings.json');
    const data = await fs.readFile(SETTINGS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Failed to fetch settings:", error);
    return {};
  }
}

export default async function HomePage() {
  const [featuredProducts, settings] = await Promise.all([
    getFeaturedProducts(),
    getSettings()
  ]);

  return (
    <ModernLayout>
      {/* New Sales-Focused Homepage */}
      <SalesHomepage featuredProducts={featuredProducts} settings={settings} />
      
      {/* Product Showcase */}
      <ProductShowcase 
        products={featuredProducts} 
        title="Featured Machinery"
        subtitle="Explore our premium stone processing equipment designed for maximum efficiency and ROI"
      />
      
      {/* Media Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-semibold mb-6">
              🏭 Behind the Scenes
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Factory in Action
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Take a look inside our state-of-the-art manufacturing facility where precision meets innovation
            </p>
          </div>
          <div className="relative">
            <MediaSlider />
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Contact CTA */}
      <ContactCTASection settings={settings} />
    </ModernLayout>
  );
}