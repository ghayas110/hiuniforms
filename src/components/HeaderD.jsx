"use client"; // Mark the component as a Client Component

import React from "react";

const HeaderD = ({ page, onPress }) => {
  return (
    <div>
      <header className="bg-white shadow-md p-4 flex items-center justify-between md:flex xl:flex sm:hidden">
        <h1 className="text-xl font-bold text-[#A7D9E6]">{page}</h1>
        <button
          className="text-[#A7D9E6]"
        //   onClick={onPress} // This now works because it's in a Client Component
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
            />
          </svg>
        </button>
      </header>
    </div>
  );
};

export default HeaderD;
