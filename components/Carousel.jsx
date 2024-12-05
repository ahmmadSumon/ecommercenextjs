"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "Winter 24/25",
    buttonText: "Shop Now",
    image: "/images/slide1.jpg", // Replace with your actual image paths
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
    Autoplay({ delay:2000, stopOnInteraction: true })
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
            <div className="relative h-[80vh]">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-transparent via-black/50 to-black/80 text-white z-10 px-4">
  <h2 className="text-4xl  md:text-6xl font-extrabold tracking-wide text-center mb-6 drop-shadow-lg">
    {slide.title}
  </h2>
  <button className="flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 hover:scale-105 transition-all duration-300">
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
  </button>
</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
