"use client";

import React, { useState } from "react";

export default function SettingsPage() {
  const [bannerImage, setBannerImage] = useState(null);
  const [storeSettings, setStoreSettings] = useState({
    storeName: "My E-Commerce",
    currency: "PKR",
    theme: "light",
    enableDiscounts: true,
    trackInventory: true,
    emailNotifications: true,
  });

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerImage(URL.createObjectURL(file));
    }
  };

  // Handle settings change
  const handleSettingsChange = (e) => {
    const { name, type, value, checked } = e.target;
    setStoreSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="container mx-auto p-6 bg-white text-black">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Banner Image Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Update Banner Image</h2>
        <div className="flex flex-col items-center">
          {bannerImage ? (
            <img src={bannerImage} alt="Banner Preview" className="w-full max-w-lg rounded-md shadow-md" />
          ) : (
            <div className="w-full max-w-lg h-40 bg-gray-300 flex items-center justify-center text-gray-600">
              No Image Selected
            </div>
          )}
          <input type="file" onChange={handleImageUpload} className="mt-4 border p-2 rounded-md" />
        </div>
      </div>

      {/* Store Settings Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Store Settings</h2>

        {/* Store Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Store Name</label>
          <input
            type="text"
            name="storeName"
            value={storeSettings.storeName}
            onChange={handleSettingsChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#A7D9E6]"
          />
        </div>

        {/* Currency */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Currency</label>
          <select
            name="currency"
            value={storeSettings.currency}
            onChange={handleSettingsChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#A7D9E6]"
          >
            <option value="PKR">PKR (Pakistan Rupee)</option>
            <option value="USD">USD (US Dollar)</option>
            <option value="EUR">EUR (Euro)</option>
          </select>
        </div>

        {/* Theme */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Theme</label>
          <select
            name="theme"
            value={storeSettings.theme}
            onChange={handleSettingsChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#A7D9E6]"
          >
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
          </select>
        </div>

        {/* Feature Toggles */}
        <h3 className="text-lg font-semibold mb-2">E-Commerce Features</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="enableDiscounts" checked={storeSettings.enableDiscounts} onChange={handleSettingsChange} />
            <span>Enable Discounts</span>
          </label>

          <label className="flex items-center space-x-3">
            <input type="checkbox" name="trackInventory" checked={storeSettings.trackInventory} onChange={handleSettingsChange} />
            <span>Track Inventory</span>
          </label>

          <label className="flex items-center space-x-3">
            <input type="checkbox" name="emailNotifications" checked={storeSettings.emailNotifications} onChange={handleSettingsChange} />
            <span>Enable Email Notifications</span>
          </label>
        </div>

        {/* Save Button */}
        <button className="mt-6 bg-[#A7D9E6] text-white px-4 py-2 rounded-md hover:bg-[#89c9d6]">
          Save Changes
        </button>
      </div>
    </div>
  );
}
