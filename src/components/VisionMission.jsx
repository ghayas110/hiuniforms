import Image from "next/image";

const clients = [
  { id: 1, src: "/images/tabba-heart.jpeg", alt: "Tabba Heart Institute" }, // Replace with actual image paths
  { id: 2, src: "/images/usman-memorial.png", alt: "Usman Memorial Hospital" },
  { id: 3, src: "/images/dhl-group.png", alt: "DHL Group" },
  { id: 4, src: "/images/childrens-hospital.png", alt: "Children's Hospital Karachi" },
];

const OurMission = () => {
  return (
    <section className="py-12 text-center px-4 bg-white text-black">
      {/* Title */}
      <h2 className="text-2xl font-bold uppercase mb-4">Our Mission</h2>

      {/* Description */}
      <p className="text-gray-600 max-w-3xl mx-auto">
        We celebrate, empower, and support healthcare professionals at every stage of their journey.
      </p>
      <p className="text-gray-600 max-w-3xl mx-auto mt-2">
        Our medical apparel combines comfort, durability, function, and style—all at an affordable price—to help you perform at your best.
      </p>

      {/* Clients Section */}
      <h3 className="text-lg font-bold mt-10 uppercase">Our Clients</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center mt-6 px-4">
        {clients.map((client) => (
          <div key={client.id} className="flex justify-center">
            <Image src={client.src} alt={client.alt} width={150} height={60} className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMission;
