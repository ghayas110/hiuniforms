import HeaderD from "@/components/HeaderD";
import SalesCard from "@/components/SalesCard";
import { FaShoppingCart, FaUsers, FaDollarSign, FaChartLine } from "react-icons/fa";

export default function DashboardPage() {
  return (
    <>
   <HeaderD page={"Dashboard"}/>
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Sales */}
      <SalesCard
        title="Total Sales"
        value="$24,000"
        icon={<FaDollarSign size={24} />}
        bgColor="bg-[#A7D9E6]"
        textColor="text-[#A7D9E6]"
      />

      {/* New Orders */}
      <SalesCard
        title="New Orders"
        value="120"
        icon={<FaShoppingCart size={24} />}
        bgColor="bg-blue-500"
        textColor="text-blue-700"
      />

      {/* Total Customers */}
      <SalesCard
        title="Total Customers"
        value="540"
        icon={<FaUsers size={24} />}
        bgColor="bg-green-500"
        textColor="text-green-700"
      />

      {/* Growth */}
      <SalesCard
        title="Growth"
        value="18%"
        icon={<FaChartLine size={24} />}
        bgColor="bg-yellow-500"
        textColor="text-yellow-700"
      />
    </div>
    </>
  );
}
