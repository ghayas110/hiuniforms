"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginSignupModal from "./LoginSignUpModal";
import SearchSidebar from "./SearchSideBar";
import CartSidebar from "./CartSidebar";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const nav=[
    {
      id:1,
      title: "Home",
      link: "/",
    },
    {
      id:2,
      title: "Mens",
      link: "/product-category/men",
    },
    {
      id:3,
      title: "Women",
      link: "/product-category/women",
    },
    {
      id:4,
      title: "Accessories",
      link: "/product-category/accessories",
    },
    {
      id:5,
      title: "Contact Us",
      link: "/contact",
    },

   
  ]
  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-gray-400 text-sm py-2 px-4 flex justify-between">
        <div>
        <button onClick={() => setMobileMenuOpen(true)} className="md:hidden">
          &#9776;
        </button>
        </div>
        <div className="flex items-center space-x-4">
        {/* <span>Wishlist (0)</span> */}
        <button onClick={() => setIsModalOpen(true)} className="hover:text-white">
          Login / Sign Up
        </button>
        </div>
        <LoginSignupModal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md px-4  md:px-8 flex items-center justify-between py-6">
        {/* Mobile Hamburger */}
       

        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="H & I Uniforms" width={150} height={40} />
        </Link>
<div className="flex flex-row space-x-4 items-center justify-center">
<nav className="hidden md:flex space-x-6">
          {nav.map((item, index) => (
            <Link key={index} href={item.link} className="text-gray-700 hover:text-blue-500">
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 justify-center">
        <button onClick={() => setIsSearchOpen(true)} className="text-gray-700 hover:text-black">
            🔍
          </button>
          <button onClick={() => setIsCartOpen(true)} className="relative text-gray-700 hover:text-black  border-2 border-[#A7D9E6]  rounded-full p-2">
            🛒
            <span className="absolute -top-2 -right-2 bg-[#A7D9E6] text-white text-xs rounded-full px-2">2</span>
          </button>
        </div>
</div>
        {/* Navigation - Desktop */}
     
      </header>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white shadow-lg p-6 w-64 h-full z-50">
          <button onClick={() => setMobileMenuOpen(false)}>✖</button>
          <nav className="mt-6 space-y-4">
          {nav.map((item, index) => (
            <Link key={index} href={item.link} className="text-gray-700 hover:text-blue-500">
              {item.title}
            </Link>
          ))}
          </nav>
        </div>
      )}

      {/* Login/Signup Modal */}
   

      {/* Sidebar (Search/Cart) */}
      <SearchSidebar isOpen={isSearchOpen} closeSidebar={() => setIsSearchOpen(false)} />
      <CartSidebar isOpen={isCartOpen} closeSidebar={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
