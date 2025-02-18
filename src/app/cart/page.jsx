"use client";

import CartItem from '@/components/Cartitems';// Make sure this component matches the updated requirements
import Link from 'next/link';
import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Polo Shirt",
      size: "M",
      color: "Black",
      price: 49.99,
      originalPrice: 69.99,
      quantity: 1,
      image: "/images/polo-shirt.jpg",
    },
  ]);

  const [wishlist, setWishlist] = useState([
    {
      id: 2,
      title: "Lab Coat",
      size: "L",
      color: "Red",
      price: 59.99,
      originalPrice: 79.99,
      image: "/images/lab-coat-polyester.webp",
    },
    {
      id: 3,
      title: "Mesh Bodysuit",
      size: "S",
      color: "White",
      price: 39.99,
      originalPrice: 59.99,
      image: "/images/bodysuit.jpg",
    },
  ]);

  return (
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white text-black">
      <div className="lg:col-span-2">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          {/* Cart Items */}
          <div>
            <h2 className="text-xl font-semibold mt-6">
              {cartItems.length} Item(s) in Cart
            </h2>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          {/* Wishlist Items */}
          <div>
            <h2 className="text-xl font-semibold mt-6">Recently Wishlisted</h2>
            {wishlist.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      {/* Summary Section */}
      <div className="p-6 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-lg font-bold">Total:</h2>
        <p className="text-2xl font-bold text-[#A7D9E6]">
          ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
        </p>
        <p className="text-sm text-gray-500 line-through">
          ${cartItems.reduce((acc, item) => acc + item.originalPrice, 0).toFixed(2)}
        </p>
        <Link href="/checkout">
          <button className="bg-[#A7D9E6] text-white py-2 px-4 rounded-md mt-4">
            Checkout
          </button>
        </Link>
        <div className="mt-4">
          <h3 className="text-md font-semibold">Promotions</h3>
          <p className="text-sm">ACCAGE0923 is applied</p>
          <input
            type="text"
            placeholder="Enter Coupon"
            className="w-full p-2 border rounded-md mt-2"
          />
          <button className="bg-[#A7D9E6] text-white py-2 px-4 rounded-md mt-2">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
