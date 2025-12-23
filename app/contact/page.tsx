"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div
      className="min-h-screen flex items-center justify-center 
      bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 px-4"
    >
      <div
        className="w-full max-w-md bg-white/95 backdrop-blur-md 
        rounded-2xl shadow-2xl p-8"
      >
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Contact Us 📩
        </h1>
        <p className="text-sm text-gray-500 text-center mt-1 mb-6">
          Have questions or feedback? We’d love to hear from you.
        </p>

        {/* Name */}
        <input
          type="text"
          className="w-full px-4 py-3 mb-4 border rounded-lg 
          text-gray-700 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500"
          placeholder="Your name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        {/* Email */}
        <input
          type="email"
          className="w-full px-4 py-3 mb-4 border rounded-lg 
          text-gray-700 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500"
          placeholder="Email address"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        {/* Message */}
        <textarea
          rows={4}
          className="w-full px-4 py-3 mb-6 border rounded-lg 
          text-gray-700 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500 resize-none"
          placeholder="Write your message here..."
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        {/* Button */}
        <button
          className="w-full py-3 rounded-lg font-semibold text-white 
          bg-indigo-600 hover:bg-indigo-700 transition duration-200"
        >
          Send Message
        </button>
        <iframe
          className="w-full h-64 rounded-xl mt-8 border"
          src="https://maps.google.com/maps?q=India&output=embed"
          loading="lazy"
        />

      </div>
    </div>
  );
}
