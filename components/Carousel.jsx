"use client";
import * as React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const slides = [
  {
    title: "Winter 24/25",
    buttonText: "Shop Now",
    image: "/images/slide1.jpg",
  },
  {
    title: "Casual COLLECTION",
    buttonText: "Shop Now",
    image: "/images/slide2.jpg",
  },
  {
    title: "Women COLLECTION",
    buttonText: "Shop Now",
    image: "/images/slide3.jpg",
  },
  {
    title: "KID'S COLLECTION",
    buttonText: "Shop Now",
    image: "/images/slide4.jpg",
  },
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-[80vh] relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <motion.div
              className="relative h-[80vh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} // Adjust duration for fade-in effect
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay Content */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-transparent via-black/50 to-black/80 text-white z-10 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  ease: "easeInOut",
                }}
              >
                <motion.h2
                  className="text-4xl md:text-6xl font-extrabold tracking-wide text-center mb-6 drop-shadow-lg"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                >
                  {slide.title}
                </motion.h2>
                <Link href="/allproducts">
                  <motion.button
                    className="flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {slide.buttonText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                      />
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
