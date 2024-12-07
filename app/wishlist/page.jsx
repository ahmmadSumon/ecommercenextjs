"use client";
import React from 'react';
import Image from 'next/image';
import useCartStore from '../../store/useStore';  // Adjust the import path to match your project structure
import { allProducts } from '../../data';  // Assuming allProducts contains your product data

const Wishlist = () => {
  const wishlistItems = useCartStore((state) => state.wishlist);
  const removeFromWishlist = useCartStore((state) => state.removeFromWishlist);
  const addToCart = useCartStore((state) => state.addItem);  // Add item to the cart from the wishlist

  return (
    <section className="bg-white py-8 mt-20 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Wishlist
        </h2>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="lg:w-3/4">
            {wishlistItems.length === 0 ? (
              <p>Your wishlist is empty</p>
            ) : (
              wishlistItems.map((item) => {
                // Find the product from allProducts array
                const product = allProducts.find((prod) => prod.id === item.id);
                console.log(product); // Check the product object

                if (!product) return null; // Return nothing if no product is found

                return (
                  <div key={item.id} className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                    <div className="space-y-6">
                      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <div className="shrink-0 md:order-1">
                            <div className="image-container relative h-40">
                              <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={100}
                                height={60}
                                layout="intrinsic"  // Adjust layout for proper responsiveness
                              />
                            </div>
                          </div>
                          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <h3 className="text-base font-medium text-gray-900 hover:underline dark:text-white">
                              {product.name}
                            </h3>
                          </div>
                          <div className="flex items-center gap-4 justify-between md:order-3 md:justify-end">
                            <div className="flex items-center ">
                              <button
                                type="button"
                                onClick={() => addToCart(product)}
                                className="inline-flex items-center text-md font-medium text-black hover:underline dark:text-indigo-500"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="text-end md:order-4">
                              <button
                                type="button"
                                onClick={() => removeFromWishlist(item.id)}
                                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
