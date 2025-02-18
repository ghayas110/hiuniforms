"use client";

import React, { useState } from "react";

export default function ProductPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", category: "Category 1", price: "$10" },
    { id: 2, name: "Product 2", category: "Category 2", price: "$20" },
  ]);

  const [form, setForm] = useState({ id: null, name: "", category: "", price: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === form.id ? { ...form } : product
        )
      );
      setIsEditing(false);
    } else {
      setProducts((prev) => [
        ...prev,
        { id: Date.now(), ...form },
      ]);
    }
    setForm({ id: null, name: "", category: "", price: "" });
    setIsModalOpen(false); // Close modal after submit
  };

  const handleEdit = (product) => {
    setForm(product);
    setIsEditing(true);
    setIsModalOpen(true); // Open modal for editing
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const openAddModal = () => {
    setForm({ id: null, name: "", category: "", price: "" });
    setIsEditing(false);
    setIsModalOpen(true); // Open modal for adding
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setForm({ id: null, name: "", category: "", price: "" });
  };

  return (
    <div className="container mx-auto p-4 bg-white
     text-black">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>

      {/* Add Product Button */}
      <button
        onClick={openAddModal}
        className="px-4 py-2 bg-[#A7D9E6] text-white rounded-md hover:bg-pink-600 mb-4"
      >
        Add Product
      </button>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md text-black">
          <thead className="bg-[#A7D9E6] text-white">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="text-center">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">{product.price}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleEdit(product)}
                    className="text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <h2 className="text-lg font-semibold mb-4">
              {isEditing ? "Edit Product" : "Add Product"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Product Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#A7D9E6]"
                required
              />
              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Category"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#A7D9E6]"
                required
              />
              <input
                type="text"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#A7D9E6]"
                required
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#A7D9E6] text-white rounded-md hover:bg-pink-600"
                >
                  {isEditing ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
