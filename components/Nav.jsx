"use client";
import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiHeart, FiUser, FiMenu } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      className={`bg-white shadow-md px-6 py-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
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
              <Link href="/mens" className="font-bold text-gray-800 hover:text-gray-600">
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
                      <Link href="/order/process" className="text-gray-800 hover:text-gray-600">
                        Ordering Process
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/order/shipping" className="text-gray-800 hover:text-gray-600">
                        Shipping Info
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/order/returns" className="text-gray-800 hover:text-gray-600">
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
          <Link href="/" className="text-xl font-extrabold text-gray-800 hover:text-gray-600">
            betichrom fashion
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">
            <FiSearch size={20} />
          </Button>
          <Button variant="ghost">
            <FiShoppingCart size={20} />
          </Button>
          <Button variant="ghost">
            <FiHeart size={20} />
          </Button>
          <Button variant="ghost">
            <FiUser size={20} />
          </Button>
          <Button variant="default">SHOP</Button>
        </div>

        {/* Mobile Menu: Side Open Menu with Sheet Component */}
        <div className="md:hidden flex items-center">
            <div className="mx-2">
              <FiShoppingCart size={30} className="cursor-pointer" />
             </div>
              <div className="mx-2">
              <FiHeart size={30} className="cursor-pointer" />
             </div>
          <Sheet open={open} onOpenChange={setOpen}>
          
            <SheetTrigger>
              <FiMenu size={30} className="cursor-pointer bg-white " />
            </SheetTrigger>
             
            <SheetContent side="left" className="w-64 bg-black  p-6 shadow-lg space-y-4">
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
                <Link href="/winter" className="block text-white hover:text-gray-600">
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
                    <Link href="/order/process" className="block text-white hover:text-gray-600">
                      Ordering Process
                    </Link>
                    <Link href="/order/shipping" className="block text-white hover:text-gray-600">
                      Shipping Info
                    </Link>
                    <Link href="/order/returns" className="block text-white hover:text-gray-600">
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
