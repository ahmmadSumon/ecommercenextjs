"use client";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import useCartStore from "../store/useStore"; // Import your Zustand store

const FloatingCartButton = () => {
  const items = useCartStore((state) => state.items);

  return (
    <div className="fixed top-[40%] right-2 z-50">
      <div className="relative">
        {/* Cart Icon Button */}
        <Link href="/cart">
          <button
            className="p-2 rounded-full shadow-lg bg-black text-white transition-transform transform hover:scale-105 hover:bg-gray-700"
            title="View Cart"
          >
            <FiShoppingCart size={24} />
          </button>
        </Link>

        {/* Badge */}
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {items.length}
          </span>
        )}
      </div>
    </div>
  );
};

export default FloatingCartButton;
