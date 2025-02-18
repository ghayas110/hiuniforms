"use client";

export default function SalesCard({ title, value, icon, bgColor, textColor }) {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${bgColor} flex items-center justify-between`}
    >
      {/* Icon */}
      <div
        className={`p-4 rounded-full ${textColor} bg-opacity-20 flex items-center justify-center`}
      >
        {icon}
      </div>

      {/* Metrics */}
      <div className="text-right">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
}
