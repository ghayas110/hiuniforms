"use client";
import Banner2 from "@/components/Banner2";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    queryType: "",
    mobile: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto: link
    const subject = encodeURIComponent(`New query Inquiry from ${formData.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nquery Type: ${formData.queryType}\n\nDetails:\n${formData.details}`
    );

    // Open default email client
    window.location.href = `mailto:ghayas110@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
<Banner2 title="Contact" />
    <section className="w-full  text-black px-6 md:px-16 py-16 bg-white">

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Side - Contact Info */}
        <div className="lg:w-1/3">
          <p className="text-gray-400 text-lg uppercase font-semibold">Getting in Touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
            Do you have a query in your mind?
          </h2>
          <div className="mt-6 space-y-4">
            <p className="flex items-center gap-2">📞 Telegram - <span className="text-cyan-400">@elegantmaster</span></p>
            <p className="flex items-center gap-2">✉️ Email - <span className="text-cyan-400">themaster@masterarts.co</span></p>
            <p className="flex items-center gap-2">📍 Location - <span className="text-cyan-400">Adelaide 5000, Australia</span></p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form onSubmit={handleSubmit} className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            required
            className="p-3 bg-white rounded-lg border border-gray-700 w-full text-white"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className="p-3 bg-white rounded-lg border border-gray-700 w-full text-white"
            onChange={handleChange}
          />
          <input
            type="text"
            name="queryType"
            placeholder="query Type*"
            required
            className="p-3 bg-white rounded-lg border border-gray-700 w-full text-white"
            onChange={handleChange}
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile*"
            required
            className="p-3 bg-white rounded-lg border border-gray-700 w-full text-white"
            onChange={handleChange}
          />
          <textarea
            name="details"
            placeholder="Write query Details*"
            required
            className="p-3 bg-white rounded-lg border border-gray-700 w-full text-white col-span-2"
            rows={4}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-cyan-400 text-black font-bold py-3 px-6 rounded-lg w-full md:w-auto col-span-2 flex items-center justify-center gap-2"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
    </>
  );
}
