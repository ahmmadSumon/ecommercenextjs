// Server Component
import { allProducts } from "../../../data"; // Your mock product data
import ProductDetail from './ProductDetails'; // Client Component

export default async function ProductDetailPage({ params }) {
  // Await params to ensure we get the resolved object
  const { id } = await params; // Await params to get the resolved value

  // Find the product with the matching ID
  const product = allProducts.find((product) => String(product.id) === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetail product={product} />;
}
