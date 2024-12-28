"use client";
import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiHeart, FiUser, FiMenu } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useCartStore from '../store/useStore'; // Path to your Zustand store
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import SearchComponent from "./Search";
import ThemeSwitcher from "./ThemeSwitcher";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const items = useCartStore((state) => state.items);
  const wishlist = useCartStore((state) => state.wishlist); // Access wishlist
  const addToWishlist = useCartStore((state) => state.addToWishlist);
  const removeFromWishlist = useCartStore((state) => state.removeFromWishlist);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!mounted) {
    return null; // Prevents the component from rendering during SSR
  }

  return (
    <nav
      className={`bg-white shadow-md md:px-6 px-2 py-6 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-10">
            <NavigationMenuItem>
              <Link href="/" className="font-bold text-gray-800 hover:text-gray-600">
                HOME
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/allproducts" className="font-bold text-gray-800 hover:text-gray-600">
                WINTER 24/25
              </Link>
            </NavigationMenuItem>

            {/* Shop Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-gray-800 hover:text-gray-600">
                SHOP
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 bg-white shadow-lg rounded-lg mt-2">
                <ul className="space-y-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/mens" className="text-gray-800 hover:text-gray-600">
                        Men&apos;s Fashion
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/womens" className="text-gray-800 hover:text-gray-600">
                        Women&apos;s Fashion
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/kids" className="text-gray-800 hover:text-gray-600">
                        Kids&apos; Fashion
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* How to Order Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-gray-800 hover:text-gray-600">
                How to Order
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 bg-white shadow-lg rounded-lg mt-2">
                <ul className="space-y-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/order" className="text-gray-800 hover:text-gray-600">
                        Ordering Process
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/order" className="text-gray-800 hover:text-gray-600">
                        Shipping Info
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/order" className="text-gray-800 hover:text-gray-600">
                        Returns & Refunds
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Middle Section */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="md:text-xl text-lg font-extrabold text-gray-800 hover:text-gray-600">
            betichrom fashion
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative" variant="ghost">
            <SearchComponent/>
          </div>
          <div variant="ghost">
            <div className="relative">
            <Link href="/cart">
              <FiShoppingCart size={24} className="cursor-pointer" />
              <span className="w-5 h-5 bg-black text-white rounded-full absolute left-3 -top-5 text-xs flex items-center justify-center font-semibold ring-2 ring-white ring-offset-2 transform scale-110 hover:scale-125 transition-all duration-300 ease-in-out">
                {items.length}
              </span>
              </Link>
            </div>
          </div>
          <div variant="ghost">
  <div className="relative">
    <Link href="/wishlist">
    <FiHeart size={24} className="cursor-pointer" />
    <span className="w-5 h-5 bg-black text-white rounded-full absolute left-3 -top-5 text-xs flex items-center justify-center font-semibold ring-2 ring-white ring-offset-2 transform scale-110 hover:scale-125 transition-all duration-300 ease-in-out">
      {wishlist.length}
    </span>
    </Link>
  </div>
</div>

          <div variant="ghost">
           
            <FiUser className="cursor-pointer" size={24} />
          </div>
          <Link href="/allproducts">
          <button className="relative rounded px-6 py-3 bg-black text-white text-sm font-medium tracking-wide overflow-hidden group">
            <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-8">
              Shop Now
            </span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Shop Now
            </span>
          </button>
          </Link>
        </div>

        {/* Mobile Menu: Side Open Menu with Sheet Component */}
        <div className="md:hidden flex items-center">
        <div className="relative">
            <Sheet>
              <SheetTrigger>
                <FiSearch size={24} className="cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="top" className="p-4 bg-white shadow-lg">
                <SearchComponent />
              </SheetContent>
            </Sheet>
          </div>
          <div className=" relative mx-1">
          <Link href="/wishlist">
            <FiHeart size={24} className="cursor-pointer" />
            <span className="w-5 h-5 bg-black text-white rounded-full absolute left-3 -top-5 text-xs flex items-center justify-center font-semibold ring-2 ring-white ring-offset-2 transform scale-110 hover:scale-125 transition-all duration-300 ease-in-out">
              {wishlist.length}
            </span>
            </Link>
          </div>
          <div className="relative mx-1">
          <Link href="/cart">
            <FiShoppingCart size={24} className="cursor-pointer" />
            <span className="w-5 h-5 bg-black text-white rounded-full absolute left-3 -top-5 text-xs flex items-center justify-center font-semibold ring-2 ring-white ring-offset-2 transform scale-110 hover:scale-125 transition-all duration-300 ease-in-out">
              {items.length}
            </span>
            </Link>
          </div>
         
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <FiMenu size={30} className="cursor-pointer bg-white mx-2 " />
            </SheetTrigger>

            <SheetContent side="left" className="w-64 bg-black p-6 shadow-lg space-y-4">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold text-white">
                  betichrom fashion
                </SheetTitle>
                <SheetDescription className="text-gray-600">
                  Explore our collections
                </SheetDescription>
              </SheetHeader>

              {/* Menu Links */}
              <div className="space-y-4">
                <Link href="/" className="block text-white hover:text-gray-600">
                  HOME
                </Link>
                <Link href="/allproducts" className="block text-white hover:text-gray-600">
                  WINTER 24/25
                </Link>
                <div>
                  <Button variant="ghost" className="w-full text-white text-left">
                    Shop
                  </Button>
                  <div className="space-y-2 pl-4">
                    <Link href="/mens" className="block text-white hover:text-gray-600">
                      Men&apos;s Fashion
                    </Link>
                    <Link href="/womens" className="block text-white hover:text-gray-600">
                      Women&apos;s Fashion
                    </Link>
                    <Link href="/kids" className="block text-white hover:text-gray-600">
                      Kids&apos; Fashion
                    </Link>
                  </div>
                </div>
                <div>
                  <Button variant="ghost" className="w-full text-white text-left">
                    How to Order
                  </Button>
                  <div className="space-y-2 pl-4">
                    <Link href="/order" className="block text-white hover:text-gray-600">
                      Ordering Process
                    </Link>
                    <Link href="/order" className="block text-white hover:text-gray-600">
                      Shipping Info
                    </Link>
                    <Link href="/order" className="block text-white hover:text-gray-600">
                      Returns & Refunds
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
