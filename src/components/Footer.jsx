import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] text-gray-300 py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Section - Company Info */}
        <div>
          <Image src="/logo.png" alt="H & I Uniforms" width={150} height={40} />
          <p className="mt-4 text-sm">
            Junaid Plaza, Shop # A6-C, Main Rashid Minhas Rd,
            Block 6 Gulshan-e-Iqbal, Karachi
          </p>
          <p className="mt-2">📞 02134812011</p>
          <p className="mt-2">✉ info@hniuniforms.com</p>
        </div>

        {/* Middle Section - Navigation Menu */}
        <div>
          <h3 className="text-white font-semibold mb-4">MENU</h3>
          <ul className="space-y-2">
            {["Home", "Mens", "Women", "Accessories"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="hover:text-white">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">NEWSLETTER</h3>
          <p className="text-sm mb-4">
            Enjoy our newsletter to stay updated with the latest news and special sales. Let’s your email address here!
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="email"
              placeholder="Your email here..."
              className="px-4 py-2 w-full bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-[#00AEDA] text-white px-6 py-2 rounded-md">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
