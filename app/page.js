import Category from "@/components/Category";
import Herosection from "@/components/Herosection";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <Nav/>
     <Herosection/>
     <Category/>
    </div>
  );
}
