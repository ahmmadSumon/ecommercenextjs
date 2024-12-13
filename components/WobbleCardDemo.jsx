"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Link from "next/link";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 py-10 gap-4 max-w-7xl mx-auto w-full">
      {/* First WobbleCard */}
     
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
          <Link href="/kids">
        <div className="relative max-w-xs">
          <h2 className="text-left text-balance text-5xl font-semibold tracking-[-0.015em] text-white">
            Kiddooss 
          </h2>
        
          <p className="absolute top-20  z-20 max-w-80 text-left  bg-black/20 p-2 shadow  text-6xl  font-extrabold tracking-[-0.015em] text-red-500"> Shop Now</p>
        
        </div>
        <Image
          src="/images/slide1.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 -bottom-10 object-contain rounded-2xl"
        />
        {/* Additional Image */}
        </Link>
      </WobbleCard>
    

      {/* Second WobbleCard */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
      <Link href="/allproducts">
        <div className="relative">
       
          <h2 className="absolute bg-white/20 p-5  z-20 max-w-80 text-left   text-6xl  font-extrabold tracking-[-0.015em] text-red-500">
           70% off
          </h2>
            <p className="absolute top-20  z-20 max-w-80 text-left  bg-black/20 p-2 shadow  text-6xl  font-extrabold tracking-[-0.015em] text-red-500"> Shop Now</p>
       
        </div>
        {/* Additional Image */}
        <Image
          src="/images/slide2.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute inset-0 -right-4 -bottom-20 object-contain rounded-2xl"
        />
             </Link>
      </WobbleCard>

      {/* Third WobbleCard */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
      >
         <Link href="/womens">
        <div className="relative max-w-sm">
       
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
           Women's Collection
          </h2>
          <p className="absolute top-20  z-20 max-w-80 text-left  bg-black/20 p-2 shadow  text-6xl  font-extrabold tracking-[-0.015em] text-red-500"> Shop Now</p>
        
        </div>
        <Image
          src="/images/slide3.jpg"
          width={800}
          height={500}
          alt="linear demo image"
          className="absolute right-4 -bottom-10 object-contain rounded-2xl"
        />
        {/* Additional Image */}
        </Link>
      </WobbleCard>
    </div>
  );
}
