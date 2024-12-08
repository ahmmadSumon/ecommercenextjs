import React from "react";
import Image from "next/image";
import Link from "next/link";

const Two = () => {
  const items = [
    {
      id: 1,
      title: "Hoodie",
      description: "Starting Price: 1200 TK",
      image: "/images/hoodie.jpg", // Replace with actual paths to your images
    },
    {
      id: 2,
      title: "Jacket",
      description: "Starting Price: 1500 TK",
      image: "/images/jacket.jpg", // Replace with actual paths to your images
    },
  ];

  return (
    <div className="py-8 px-4 bg-gray-50 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {items.map((item) => (
         
          <div
            key={item.id}
            className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
             <Link href="/mens">
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={400}
              className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Content */}
            <div className=" flex flex-col items-start justify-end  transition-opacity duration-300 p-4">
              <h3 className="text-4xl font-bold text-black">{item.title}</h3>
              <p className="text-2xl text-black mt-1">{item.description}</p>
            </div>
            </Link>
          </div>
         
        ))}
      </div>
      <div className=" md:max-w-7xl  mx-auto my-10 relative">
        <Link href="/mens">
        <Image
        src="/images/jeans.jpg"
        alt="jeans"
        width={2017}
        height={1173}
        className="w-full h-[400px] md:h-[500px] object-left md:object-cover hover:scale-105 transition-transform duration-300  rounded-xl  overflow-hidden"
        />
        <h2 className="absolute inset-0 w-36 top-[0%] left-[20%]  md:left-[40%] flex items-center justify-center text-6xl font-extrabold text-black">Jeans</h2>
        <p className="absolute inset-0 w-96 top-[30%] left-[5%]  md:left-[40%] flex items-center justify-center text-xl font-bold text-black">Starting Price: 1500 TK</p>
        </Link>
      </div>
      
    </div>
  );
};

export default Two;
