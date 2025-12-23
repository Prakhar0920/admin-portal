"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.email || !form.password) {
      alert("Please fill all required fields");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registration successful. Please login.");
      router.push("/login");
    } else {
      alert(data.message || "Registration failed");
    }
  };

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
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Create Account 🚀
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1 mb-6">
          Register to get started with the admin portal
        </p>

        {/* Name */}
        <input
          className="w-full px-4 py-3 mb-4 border rounded-lg 
          text-gray-700 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500"
          placeholder="Full name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        {/* Email */}
        <input
          type="email"
          className="w-full px-4 py-3 mb-4 border rounded-lg 
          text-gray-700 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500"
          placeholder="Email address"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        {/* Password */}
        <input
          type="password"
          className="w-full px-4 py-3 mb-6 border rounded-lg 
          text-gray-700 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500"
          placeholder="Create password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {/* Button */}
        <button
          className="w-full py-3 rounded-lg font-semibold text-white 
          bg-indigo-600 hover:bg-indigo-700 transition duration-200"
          onClick={submit}
        >
          Register
        </button>

        {/* Login link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
