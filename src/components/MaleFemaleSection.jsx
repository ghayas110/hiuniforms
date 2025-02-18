import Link from "next/link";
import Image from "next/image";

const MaleFemaleSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* Male Section */}
      <Link href="/mens">
        <div className="relative group cursor-pointer">
          <Image
            src="/men.jpg" // Replace with actual path
            alt="Mens Section"
            width={1000}
            height={500}
            className="w-full h-auto transition duration-300 group-hover:brightness-110"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white text-black px-6 py-2 font-semibold text-lg">
              MENS
            </span>
          </div>
        </div>
      </Link>

      {/* Female Section */}
      <Link href="/womens">
        <div className="relative group cursor-pointer">
          <Image
            src="/women.jpg" // Replace with actual path
            alt="Womens Section"
            width={1000}
            height={500}
            className="w-full h-auto transition duration-300 group-hover:brightness-110"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white text-black px-6 py-2 font-semibold text-lg">
              WOMENS
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MaleFemaleSection;
