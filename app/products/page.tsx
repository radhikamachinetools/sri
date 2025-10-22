import { promises as fs } from 'fs';
import path from 'path';
import ModernProductsPage from "../components/ModernProductsPage";

type Product = {
  _id: string;
  slug: string;
  name: string;
  category: string;
  imageUrl?: string;
  shortDescription: string;
};

async function getProducts(): Promise<Product[]> {
  try {
    const PRODUCTS_FILE = path.join(process.cwd(), 'data', 'products.json');
    const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
    const { products } = JSON.parse(data);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();
  return <ModernProductsPage products={products} />;
}