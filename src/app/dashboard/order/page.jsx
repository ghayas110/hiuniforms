"use client";

import React, { useState } from "react";

export default function OrderManagementPage() {
  const [orders, setOrders] = useState([]); // Orders state
  const [formData, setFormData] = useState({ id: null, customer: "", status: "Pending", total: "" }); // Form data
  const [isEditing, setIsEditing] = useState(false); // Edit mode state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or update an order
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === formData.id ? { ...order, ...formData } : order
        )
      );
    } else {
      setOrders((prev) => [...prev, { ...formData, id: Date.now() }]);
    }
    setFormData({ id: null, customer: "", status: "Pending", total: "" }); // Reset form
    setIsEditing(false);
    setIsModalOpen(false);
  };

  // Edit an order
  const handleEdit = (order) => {
    setFormData(order);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Delete an order
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders((prev) => prev.filter((order) => order.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Order Management</h1>

      {/* Add Order Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#A7D9E6] text-white px-4 py-2 rounded-md hover:bg-[#89c9d6]"
      >
        Add Order
      </button>

      {/* Orders Table */}
      <table className="w-full mt-4 bg-white shadow-md rounded-lg overflow-hidden text-black">
        <thead className="bg-[#A7D9E6] text-white">
          <tr>
            <th className="text-left px-4 py-2">Order ID</th>
            <th className="text-left px-4 py-2">Customer</th>
            <th className="text-left px-4 py-2">Status</th>
            <th className="text-left px-4 py-2">Total Price</th>
            <th className="text-left px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.customer}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 text-xs font-bold rounded ${
                    order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : order.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-4 py-2 font-bold">Rs {order.total}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => handleEdit(order)}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(order.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {orders.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No orders available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for Add/Edit Order */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4">
              {isEditing ? "Edit Order" : "Add Order"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="customer"
                  value={formData.customer}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#A7D9E6]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#A7D9E6]"
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Total Price</label>
                <input
                  type="number"
                  name="total"
                  value={formData.total}
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
                  className="bg-[#A7D9E6] text-white px-4 py-2 rounded-md hover:bg-[#89c9d6]"
                >
                  {isEditing ? "Update Order" : "Add Order"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
