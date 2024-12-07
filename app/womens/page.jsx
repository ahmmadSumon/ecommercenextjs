"use client";
import { useEffect,useState } from "react";
import { Lens } from "../../components/ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { womenClothingItems } from "../../data"; // Import only the women's category
import Link from "next/link";

const Womens= ()=> {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true); // Set to true only on the client
    }, []);
  
    if (!isClient) {
      return null; // Optionally render nothing until the component is mounted on the client
    }

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <h1 className="text-center text-3xl text-white font-bold">Womens Collection</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6">
        {womenClothingItems.map((product) => (
          <LensDemo key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Womens
function LensDemo({ product }) {
  const [hovering, setHovering] = useState(false);

  return (
    <Link href={`/products/${product.id}`} passHref>
      <div className="cursor-pointer w-full relative rounded-3xl overflow-hidden max-w-xs mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-4 my-6">
        <Rays />
        <Beams />
        <div className="relative z-10">
          <Lens hovering={hovering} setHovering={setHovering}>
            <div className="h-40 w-full relative overflow-hidden rounded-2xl">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </Lens>
          <motion.div
            animate={{
              filter: hovering ? "blur(2px)" : "blur(0px)",
            }}
            className="py-2 relative z-20"
          >
            <h2 className="text-white text-lg text-left font-bold">
              {product.name}
            </h2>
            <p className="text-neutral-100 text-left mt-1 font-semibold">
              ${product.price.toFixed(2)}
            </p>
          </motion.div>
        </div>
      </div>
    </Link>
  );
}

// Reuse Beams and Rays components from your original code
const Beams = () => {
  return (
    <svg
      width="380"
      height="315"
      viewBox="0 0 380 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
    >
      <g filter="url(#filter0_f_120_7473)">
        <circle cx="34" cy="52" r="114" fill="#6925E7" />
      </g>
      <g filter="url(#filter1_f_120_7473)">
        <circle cx="332" cy="24" r="102" fill="#8A4BFF" />
      </g>
      <g filter="url(#filter2_f_120_7473)">
        <circle cx="191" cy="53" r="102" fill="#802FE3" />
      </g>
      <defs>
        <filter
          id="filter0_f_120_7473"
          x="-192"
          y="-174"
          width="452"
          height="452"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="56"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
        <filter
          id="filter1_f_120_7473"
          x="70"
          y="-238"
          width="524"
          height="524"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="80"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
        <filter
          id="filter2_f_120_7473"
          x="-71"
          y="-209"
          width="524"
          height="524"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="80"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
      </defs>
    </svg>
  );
};

const Rays = ({ className }) => {
  return (
    <svg
      width="380"
      height="397"
      viewBox="0 0 380 397"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute left-0 top-0  pointer-events-none z-[1]", className)}
    >
      {/* SVG Content */}
    </svg>
  );
};
