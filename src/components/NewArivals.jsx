import Image from "next/image";
import Card from "./Card";

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

const NewArrivals = () => {
  return (
    <section className="py-12 bg-white text-black">
      <h2 className="text-center text-2xl font-bold uppercase tracking-wider mb-6">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
         <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
