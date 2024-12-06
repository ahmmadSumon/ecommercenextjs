"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Winter Collection",
    description: "Explore the latest winter fashion trends.",
    image: "/images/slide1.jpg",
    link:  "/mens"
  },
  {
    id: 2,
    title: "Men's Collection",
    description: "Find comfortable and stylish casual wear.",
    image: "/images/slide1.jpg",
     link:  "/mens"
  },
  {
    id: 3,
    title: "Women's Collection",
    description: "Discover elegant and professional formal wear.",
    image: "/images/slide1.jpg",
     link:  "/womens"
  },
  {
    id: 4,
    title: "Kid's Collection",
    description: "Complete your look with our range of accessories.",
    image: "/images/slide1.jpg",
     link:  "/kids"
  },
];

export default function Category() {
  return (
    <div className="py-4 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link href={category.link} key={category.id}>
        
            <div
              key={category.id}
              className="relative group bg-gray-200 rounded-lg shadow-md overflow-hidden   transition-all duration-300 hover:bg-black  cursor-pointer  hover:text-white"
            >
           
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold ">
                  {category.title}
                </h3>
               
                
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
