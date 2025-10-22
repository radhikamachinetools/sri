import { promises as fs } from 'fs';
import path from 'path';

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
    <div className="bg-white">
      <SalesHomepage featuredProducts={featuredProducts} settings={settings} />
      
      <ProductShowcase 
        products={featuredProducts} 
        title="Featured Machinery"
        subtitle="Explore our premium stone processing equipment designed for maximum efficiency and ROI"
      />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Factory Tour
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Manufacturing Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See our precision manufacturing process in action
            </p>
          </div>
          <MediaSlider />
        </div>
      </section>
      
      <TestimonialsSection />
      <ContactCTASection settings={settings} />
    </div>
  );
}