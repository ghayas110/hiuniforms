"use client";
import Image from "next/image";
import { useState } from "react";
import { FaThLarge, FaThList, FaSlidersH } from "react-icons/fa";
import Card from "./Card";
import { useParams } from "next/navigation";
const products = [
    {
      id: 1,
      image: "/images/polo-shirt.jpg", // Replace with actual image path
      category: "ACCESSORIES, MENS",
      name: "Polo Shirt",
      price: "Rs 1,000",
    },
    {
      id: 2,
      image: "/images/bed-sheet-kit.webp",
      category: "ACCESSORIES",
      name: "White Bed Sheet Kit",
      price: "Rs 750",
    },
    {
      id: 3,
      image: "/images/lab-coat-polyester.webp",
      category: "MENS, WOMENS",
      name: "Lab Coat 100% Polyester",
      price: "Rs 1,700",
    },
    {
      id: 4,
      image: "/images/work-wear-kit.webp",
      category: "ACCESSORIES",
      name: "Work Wear Kit",
      price: "Rs 4,000",
    },
    {
      id: 5,
      image: "/images/patient-gown-kit.webp",
      category: "MENS, WOMENS",
      name: "Patient Gown Kit",
      price: "Rs 2,000",
    },
    {
      id: 6,
      image: "/images/lab-coat-pc-twill.webp",
      category: "MENS, WOMENS",
      name: "Lab Coat Pc Twill",
      price: "Rs 1,900",
    },
    {
      id: 7,
      image: "/images/lab-coat-kt-fabric.webp",
      category: "MENS, WOMENS",
      name: "Lab Coat KT Fabric",
      price: "Rs 1,400",
    },
    {
      id: 8,
      image: "/images/scrub-kit-stretchable.webp",
      category: "MENS, WOMENS",
      name: "Scrub Kit Stretchable",
      price: "Rs 3,500",
    },
  ];

const ProductsSection = () => {
  const [gridView, setGridView] = useState(true);
  const [sortOption, setSortOption] = useState("default");
const { category } = useParams();
console.log(category)       
  return (
    <section className="py-12 px-4 bg-white text-black">
      {/* Top Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Left - View Toggle & Total Count */}
        <div className="flex items-center space-x-4">
          <button onClick={() => setGridView(true)} className={`${gridView ? "text-black" : "text-gray-500"} text-lg`}>
            <FaThLarge />
          </button>
          <button onClick={() => setGridView(false)} className={`${!gridView ? "text-black" : "text-gray-500"} text-lg`}>
            <FaThList />
          </button>
          <span className="text-gray-600 text-sm">Showing all {products.length} results</span>
        </div>

        {/* Right - Sorting & Filter */}
        <div className="flex items-center space-x-4">
          <label className="text-gray-600 text-sm">Show</label>
          <select className="border px-2 py-1 text-sm">
            <option value="20">20</option>
            <option value="40">40</option>
          </select>

          <select
            className="border px-2 py-1 text-sm"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default sorting</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>

          <button className="flex items-center px-3 py-1 border rounded text-sm">
            <FaSlidersH className="mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className={`${gridView ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" : "space-y-6"}`}>
        {products.map((product) => (
       <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
