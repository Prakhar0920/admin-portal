"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHuman, setIsHuman] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) router.push("/profile");
  }, [router]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!isHuman) {
      alert("Please verify you are human");
      return;
    }

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

   if (res.ok) {
     localStorage.setItem("user", JSON.stringify(data.user));
     window.dispatchEvent(new Event("auth-change"));
     router.push("/profile");
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 px-4">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white/95 backdrop-blur-md 
        rounded-2xl shadow-2xl p-8"
      >
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Welcome Back 👋
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1 mb-6">
          Login to access your admin dashboard
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-3 mb-4 border rounded-lg 
          text-gray-700 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-2 border rounded-lg 
          text-gray-700 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Forgot password */}
        <div className="text-right mb-4">
          <a
            href="/forgot-password"
            className="text-sm text-indigo-600 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* CAPTCHA */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            id="captcha"
            checked={isHuman}
            onChange={(e) => setIsHuman(e.target.checked)}
            className="accent-indigo-600"
          />
          <label htmlFor="captcha" className="text-sm text-gray-600">
            Verify you are human (demo)
          </label>
        </div>

        {/* Button */}
        <button
          disabled={!isHuman}
          className={`w-full py-3 rounded-lg font-semibold text-white 
          transition duration-200 ${
            isHuman
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Login
        </button>

        {/* Register */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-indigo-600 font-medium hover:underline"
          >
            Create one
          </a>
        </p>
      </form>
    </div>
  );
}
