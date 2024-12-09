// Server Component
import { allProducts } from "../../../data"; // Import your mock product data
import ProductDetail from "./ProductDetails"; // Client Component

export default function ProductDetailPage({ params }) {
  const { id } = params; // Directly access params

  // Find the product with the matching ID
  const product = allProducts.find((product) => String(product.id) === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetail product={product} />;
}
