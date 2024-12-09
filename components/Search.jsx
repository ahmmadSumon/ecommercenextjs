"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { allProducts } from "../data";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const router = useRouter();

  const handleSearch = () => {
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
    setShowResults(true);
  };

  const handleProductClick = (id) => {
    router.push(`/products/${id}`);
    setShowResults(false); // Hide results dropdown after navigation
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-xs" ref={searchRef}>
      <input
        type="text"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Search products..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(); // Automatically update results on input change
        }}
      />
      <button
        onClick={handleSearch}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 hover:text-black"
      >
        Search
      </button>

      {showResults && filteredProducts.length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
          <ul>
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-10 h-10 mr-2 inline-block"
                />
                {product.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
