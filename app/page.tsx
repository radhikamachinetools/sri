import { promises as fs } from 'fs';
import path from 'path';

import ModernHomepage from "./components/ModernHomepage";
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
      <ModernHomepage featuredProducts={featuredProducts} settings={settings} />
      
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              🏭 Factory Tour
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              Manufacturing <span className="text-blue-600">Excellence</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See our precision manufacturing process in action and witness the quality that sets us apart
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