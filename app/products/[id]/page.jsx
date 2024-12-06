import ProductGallery from "@/app/allproducts/page";
import { allProducts } from "../../../data"; // Ensure this path is correct
import Image from "next/image";
import Link from "next/link";
import { FiTwitter, FiShoppingCart, FiHeart, FiFacebook, FiInstagram } from "react-icons/fi";

export default async function ProductDetailPage({ params }) {
  // Resolve params (if params is a Promise, this will wait for it)
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // Find the product with the matching ID
  const product = allProducts.find((product) => String(product.id) === id);

  // If no product found, handle gracefully (e.g., show a 404 page or a message)
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg mt-14 md:mt-20">
     
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Product Image */}
        <div className="relative w-full lg:w-1/2 h-[400px] md:h-[700px]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Product Details */}
        <div className="lg:w-1/2  pt-7 md:pt-40 px-5 bg-[#EBF5FB]">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-lg font-bold text-gray-900 mb-4">
            Price: ${product.price.toFixed(2)}
          </p>

          {/* Size Selection (if applicable) */}
          {product.sizes?.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2">Select Size:</h3>
              <select className="border border-gray-300 rounded-lg px-3 py-2 w-full">
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pb-5">
            <button
              className="px-4 py-2 bg-black flex justify-center items-center gap-3 text-white rounded-lg hover:bg-blue-700 transition"
              disabled={!product.sizes?.length} // Disable if no sizes are available
            >
              Add to Cart  <FiShoppingCart size={20} />
            </button>
            <button
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-green-700 transition"
            >
              Buy Now
            </button>
            <button
              className="px-4 py-2 flex justify-center items-center gap-3 bg-black text-white rounded-lg hover:bg-green-700 transition"
            >
            Add to Wishlist <FiHeart size={20} />
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FiFacebook size={24} className="text-blue-600" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FiInstagram size={24} className="text-red-500" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FiTwitter size={24} className="text-blue-400" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <ProductGallery/>
      </div>
    </div>
  );

}
