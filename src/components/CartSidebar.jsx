import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
const CartSidebar = ({ isOpen, closeSidebar }) => {
  if (!isOpen) return null;
const router = useRouter();
  // Example cart items (Can be replaced with dynamic cart data)
  const cartItems = [
    {
      id: 1,
      image: "/images/polo-shirt.jpg",
      name: "Patient Gown Kit",
      price: 2000,
      quantity: 2,
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-white text-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white shadow-lg w-80 p-6">
        {/* Close Button */}
        <button onClick={closeSidebar} className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl">
          ✖
        </button>

        {/* Cart Title */}
        <h2 className="text-md font-bold uppercase mb-4">2 Items in the Shopping Bag</h2>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center border-b pb-4 mb-4">
            <Image src={item.image} alt={item.name} width={70} height={70} className="rounded-md" />
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">
                {item.quantity} x <span className="font-bold">Rs {item.price.toLocaleString()}</span>
              </p>
            </div>
            <button className="text-gray-500 hover:text-black text-lg">✖</button>
          </div>
        ))}

        {/* Subtotal Section */}
        <div className="border-t pt-4 mb-4">
          <h3 className="text-md font-bold">
            SUBTOTAL : <span className="text-red-500">Rs {subtotal.toLocaleString()}</span>
          </h3>
        </div>

        {/* Buttons */}
        <button className="w-full border border-black text-black font-semibold py-2 mb-3 hover:bg-gray-200" onClick={() => {closeSidebar,router.push('/cart')} }>
          VIEW YOUR CART
        </button>
        <button className="w-full bg-red-500 text-white font-semibold py-2 hover:bg-red-600" onClick={()=> {closeSidebar,router.push('/checkout')}}>
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
