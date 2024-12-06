import Category from "@/components/Category";
import Herosection from "@/components/Herosection";
import Nav from "@/components/Nav";
import Two from "@/components/Two";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import Image from "next/image";
import { ProductGallery } from "./products/page";

export default function Home() {
  return (
    <div className="">
   
     <Herosection/>
     <Category/>
     <Two/>
     <WobbleCardDemo/>
     <ProductGallery/>
    </div>
  );
}
