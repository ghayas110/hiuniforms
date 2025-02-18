"use client";

import React, { useState } from "react";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]); // State to store categories
  const [formData, setFormData] = useState({ id: null, name: "" }); // Form data
  const [isEditing, setIsEditing] = useState(false); // Edit mode state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or update a category
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update category
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === formData.id ? { ...cat, name: formData.name } : cat
        )
      );
    } else {
      // Add category
      setCategories((prev) => [
        ...prev,
        { id: Date.now(), name: formData.name },
      ]);
    }
    setFormData({ id: null, name: "" }); // Reset form
    setIsEditing(false);
    setIsModalOpen(false); // Close modal
  };

  // Edit a category
  const handleEdit = (category) => {
    setFormData(category);
    setIsEditing(true);
    setIsModalOpen(true); // Open modal
  };

  // Delete a category
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Category Management</h1>

      {/* Add Category Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#A7D9E6] text-white px-4 py-2 rounded-md hover:bg-[#A7D9E6]"
      >
        Add Category
      </button>

      {/* Categories Table */}
      <table className="w-full mt-4 bg-white shadow-md rounded-lg overflow-hidden text-black">
        <thead className="bg-[#A7D9E6] text-white">
          <tr>
            <th className="text-left px-4 py-2">ID</th>
            <th className="text-left px-4 py-2">Name</th>
            <th className="text-left px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border-b">
              <td className="px-4 py-2">{category.id}</td>
              <td className="px-4 py-2">{category.name}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => handleEdit(category)}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="bg-[#A7D9E6] text-white px-2 py-1 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {categories.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center py-4">
                No categories available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for Add/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4">
              {isEditing ? "Edit Category" : "Add Category"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#A7D9E6]"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#A7D9E6] text-white px-4 py-2 rounded-md hover:bg-[#A7D9E6]"
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
