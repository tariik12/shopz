"use client";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/ui/search-bar";
import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TopNavigation = () => {
  const [open, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="container mx-auto  flex items-center justify-between">
      {/* Desktop Navigaton */}
      <div className="w-1/2 flex justify-start mx-[6.6vh]">
        <Link href={"/"}>
          <Image
            src={"https://cdn.shopz.com.bd/media/SHOPZ-LOGO-PNG-9f09e229.webp"}
            height={65}
            width={65}
            alt="ShopZ Logo"
            className="h-[8.7vh] w-auto"
          />
        </Link>
        {/* Logo */}
      </div>
      {/* Search bar */}
      <div
        tabIndex={0}
        className="flex w-full   focus-within:outline-2 focus-within:outline-primary/20 rounded-md"
      >
        {/* <SearchBar
          className="s"
          placeholder="Search for products..."
        /> */}
        <input
          type="search"
          placeholder="Search for products..."
          className=" appearance-none focus:outline-none focus:ring-0 shadow border-gray-200 w-full focus:border-primary border rounded-l-md  ps-3 py-2"
        />
        <Button className="px-4">
          <Search />
        </Button>
      </div>
      {/* Shoppoing and profile  buttons*/}

      <div className="w-1/2   flex items-center gap-[1.3vh] justify-end me-[8.8vh]">
        <Button
          variant={"outline"}
          className=" hover:bg-fourth/10 rounded-lg p-2 hover:text-primary"
        >
          <ShoppingCart className=" h-5 w-auto" />
        </Button>
        <Button
          variant={"outline"}
          onClick={toggle}
          className=" hover:bg-fourth/10 rounded-lg p-1 flex items-center gap-2 "
        >
          <User className="h-7 w-auto bg-fourth/20 text-fourth rounded-full p-1.5" />
          <ChevronDown
            className={`${open ? "rotate-180 tarnsition-5000" : ""} h-3 w-auto transform transition-transform duration-200 text-gray-500 `}
          />
        </Button>
        {open && (
          <div className="absolute let-0 top-15  rounded-lg bg-secondary shadow w-[35vh]">
            <div className="bg-fourth/10 p-4 rounded-t-lg">
              <h4 className="font-bold text-xl">Welcome!</h4>
              <p>Sign in to access your account</p>
            </div>
            <div className="p-4">
              <Button
                variant={"outline"}
                className="w-full bg-fourth/90 text-secondary p-2 rounded-md"
              >
                {" "}
                Sign In
              </Button>
              <Button
                variant={"outline"}
                className="w-full bg-secondary/90 mt-3 border-2 border-gray-100 text-third p-2 rounded-md"
              >
                {" "}
                Crate Account
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavigation;
