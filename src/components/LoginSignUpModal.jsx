"use client"
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginSignupModal = ({ isModalOpen, closeModal }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();
const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
})
const handdleSubmit = (e) => {
  e.preventDefault();

  if (isSignUp) {
    // Handle sign up logic here
  } else {
    // Handle login logic here
    closeModal();
    router.push("/dashboard");
  }

}
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#A7D9E6] bg-opacity-50 flex justify-center items-center z-[10000000]">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-5xl flex">
        
        {/* Close Button (Top-Left) */}
        <div className="absolute top-0 left-0 p-10 z-50 cursor-pointer" onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>

        {/* Left Form Section */}
        <div className="w-full md:w-1/2 p-8 flex justify-center flex-col">
          <h2 className="text-2xl font-bold mb-4">{isSignUp ? "Create an Account" : "Log in to your Account"}</h2>
          <p className="text-gray-600 mb-6">{isSignUp ? "Join us today!" : "Welcome back!"}</p>

          <form onSubmit={handdleSubmit}>
            {/* Name Field (Only for Sign Up) */}
            {isSignUp && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#A7D9E6]"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
            )}

            {/* Email Field */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#A7D9E6]"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* Password Field */}
            <div className="mb-4 relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#A7D9E6]"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}

              />
            </div>

            {/* Remember Me & Forgot Password (For Login) */}
            {!isSignUp && (
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="#" className="text-[#A7D9E6] hover:underline">
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="w-full bg-[#A7D9E6] text-white py-2 rounded-md">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>

          {/* Toggle Between Login & Signup */}
          <p className="mt-4 text-center">
            {isSignUp ? "Already have an account? " : "Don’t have an account? "}
            <span onClick={() => setIsSignUp(!isSignUp)} className="text-[#A7D9E6] hover:underline cursor-pointer">
              {isSignUp ? "Log in" : "Create an account"}
            </span>
          </p>
        </div>

        {/* Right Image Section (Hidden on Small Screens) */}
        <div className="hidden md:block w-1/2 bg-cover bg-center">
          <Image src="/doc1.jpg" alt="Modal Image" width={500} height={500} className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignupModal;
