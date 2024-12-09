"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-8 px-4 bg-gray-50">
      {/* Animated Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {items.map((item, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

          return (
            <motion.div
              key={item.id}
              ref={ref}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
                <div className="flex flex-col items-start justify-end transition-opacity duration-300 p-4">
                  <h3 className="text-4xl font-bold text-black">{item.title}</h3>
                  <p className="text-2xl text-black mt-1">{item.description}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Animated Full-Width Section */}
      <div className="md:max-w-7xl mx-auto my-10 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <Link href="/mens">
            <Image
              src="/images/jeans.jpg"
              alt="jeans"
              width={2017}
              height={1173}
              className="w-full h-[400px] md:h-[500px] object-left md:object-cover hover:scale-105 transition-transform duration-300 rounded-xl overflow-hidden"
            />
            <h2 className="absolute inset-0 w-36 top-[0%] left-[20%] md:left-[40%] flex items-center justify-center text-6xl font-extrabold text-black">
              Jeans
            </h2>
            <p className="absolute inset-0 w-96 top-[30%] left-[5%] md:left-[40%] flex items-center justify-center text-xl font-bold text-black">
              Starting Price: 1500 TK
            </p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Two;
