"use client";
import Image from "next/image";
import { FaShoppingCart, FaHeart, FaSyncAlt, FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Card = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <div className="text-center   rounded-md overflow-hidden" onClick={()=>router.push(`/product/${product.id}`)}>
      {/* Product Image with Hover Effect */}
      <div
        className="relative w-full h-72 overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="rounded-md transition-opacity duration-300"
        />

        {/* Bottom Bar - Appears on Image Hover */}
        <div
          className={`absolute bottom-0 left-0 w-full bg-white transition-transform duration-300 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          } flex justify-center items-center space-x-4 py-2`}
        >
          {/* Search (Quick View) */}
         

          {/* Compare */}
          <button className="p-2 text-gray-700 hover:text-black">
            <FaSyncAlt size={16} />
          </button>

          {/* Wishlist */}
          <button className="p-2 text-gray-700 hover:text-red-500">
            <FaHeart size={16} />
          </button>

          {/* Add to Cart */}
          <button className="flex items-center space-x-1 px-4 py-1 bg-gray-100 hover:bg-gray-300 rounded">
            <FaShoppingCart size={16} />
            <span className="text-sm font-medium">ADD TO CART</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <p className="text-xs text-gray-500 mt-3 uppercase">{product.category}</p>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-black font-bold">{product.price}</p>
    </div>
  );
};

export default Card;
