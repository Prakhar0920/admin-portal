"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  function submit() {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    // Demo only – no real email sent
    setSubmitted(true);
  }

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
          Forgot Password 🔑
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1 mb-6">
          Enter your registered email to receive a reset link
        </p>

        {!submitted ? (
          <>
            {/* Email */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 mb-6 border rounded-lg 
              text-gray-700 focus:outline-none 
              focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Button */}
            <button
              onClick={submit}
              className="w-full py-3 rounded-lg font-semibold text-white 
              bg-indigo-600 hover:bg-indigo-700 transition duration-200"
            >
              Send Reset Link
            </button>
          </>
        ) : (
          <div className="text-center">
            <p className="text-green-600 font-medium mb-4">
              Reset link sent successfully! (Demo)
            </p>
            <p className="text-sm text-gray-500">
              Please check your inbox and follow the instructions.
            </p>
          </div>
        )}

        {/* Back to login */}
        <button
          onClick={() => router.push("/login")}
          className="w-full mt-6 text-sm text-gray-600 hover:underline"
        >
          ← Back to Login
        </button>
      </div>
    </div>
  );
}
