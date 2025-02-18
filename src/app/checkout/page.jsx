// pages/checkout.js
"use client";
import React, { useState } from "react";

const CheckoutPage = () => {
    const [paymentMethod, setPaymentMethod] = useState("card");

    return (
        <div className=" w-full px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white text-black">
            {/* Billing Address & Payment Method */}
            <div className="lg:col-span-2">
                <h1 className="text-3xl font-bold mb-6">Checkout</h1>

                {/* Billing Address */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Billing Address</h2>
                    <label className="block mt-4">
                        <span className="block text-gray-700 mb-2">Country</span>
                        <select className="w-full p-2 border rounded-md">
                            <option value="Pakistan">Pakistan</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                    </label>
                    <p className="text-gray-500 text-sm mt-2">
                        Udemy is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.
                    </p>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Payment Method</h2>

                    <div className="mt-4">
                        <label className="flex items-center mb-4">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="card"
                                checked={paymentMethod === "card"}
                                onChange={() => setPaymentMethod("card")}
                                className="mr-2"
                            />
                            <span>Cards</span>
                        </label>
                        {paymentMethod === "card" && (
                            <div className="p-4 border rounded-md">
                                <div className="mb-4">
                                    <label className="block text-sm mb-2">Card Number</label>
                                    <input
                                        type="text"
                                        placeholder="1234 5678 9012 3456"
                                        className="w-full p-2 border rounded-md"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm mb-2">Expiry Date</label>
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            className="w-full p-2 border rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm mb-2">CVC/CVV</label>
                                        <input
                                            type="text"
                                            placeholder="CVC"
                                            className="w-full p-2 border rounded-md"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm mb-2">Name on Card</label>
                                    <input
                                        type="text"
                                        placeholder="Name on Card"
                                        className="w-full p-2 border rounded-md"
                                    />
                                </div>
                            </div>
                        )}
                        <label className="flex items-center mt-4">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="paypal"
                                checked={paymentMethod === "paypal"}
                                onChange={() => setPaymentMethod("paypal")}
                                className="mr-2"
                            />
                            <span>PayPal</span>
                        </label>
                    </div>
                </div>

                {/* Order Details */}
                <div>
                    <h2 className="text-xl font-semibold">Order Details (1 item)</h2>
                    <div className="flex items-center justify-between p-4 border rounded-md mt-4">
                        <div className="flex items-center">
                            <img
                                src= "/images/lab-coat-polyester.webp"
                                alt="Course Thumbnail"
                                className="w-16 h-16 object-cover rounded-md"
                            />
                            <div className="ml-4">
                                <h3 className="text-lg font-bold">
                                    Lab Coat 100% Polyester
                                </h3>
                                <p className="text-sm text-gray-500">$22.99</p>
                            </div>
                        </div>
                        <p className="text-lg font-bold text-gray-800">$22.99</p>
                    </div>
                </div>
            </div>

            {/* Summary */}
            <div className="p-6 bg-white rounded-md shadow-md">
                <h2 className="text-lg font-bold mb-4">Summary</h2>
                <div className="mb-4">
                    <div className="flex justify-between text-sm">
                        <span>Original Price:</span>
                        <span>$129.99</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span>Discounts (82% Off):</span>
                        <span>-$107.00</span>
                    </div>
                </div>
                <div className="flex justify-between text-lg font-bold mb-6">
                    <span>Total (1 course):</span>
                    <span>$22.99</span>
                </div>
                <button className="bg-[#A7D9E6] text-white py-2 px-4 rounded-md w-full">
                    Complete Checkout
                </button>
                <p className="text-sm text-gray-500 mt-2 text-center">
                    30-Day Money-Back Guarantee
                </p>
            </div>
        </div>
    );
};

export default CheckoutPage;
