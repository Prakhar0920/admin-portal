"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ChangePasswordPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  async function handleSubmit() {
    if (!oldPassword || !newPassword) {
      alert("Please fill all fields");
      return;
    }

    const res = await fetch("/api/auth/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        oldPassword,
        newPassword,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Password updated successfully. Please login again.");
      localStorage.removeItem("user");
      router.push("/login");
    } else {
      alert(data.message);
    }
  }

  if (!user) return null;

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
          Change Password 🔐
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1 mb-6">
          Keep your account secure by updating your password
        </p>

        {/* Old Password */}
        <input
          type="password"
          placeholder="Current password"
          className="w-full px-4 py-3 mb-4 border rounded-lg 
          text-gray-700 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        {/* New Password */}
        <input
          type="password"
          placeholder="New password"
          className="w-full px-4 py-3 mb-2 border rounded-lg 
          text-gray-700 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        {/* Hint */}
        <p className="text-xs text-gray-500 mb-6">
          Password should be at least 8 characters long.
        </p>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-lg font-semibold text-white 
          bg-indigo-600 hover:bg-indigo-700 transition duration-200"
        >
          Update Password
        </button>

        {/* Back */}
        <button
          onClick={() => router.push("/profile")}
          className="w-full mt-4 text-sm text-gray-600 hover:underline"
        >
          ← Back to Profile
        </button>
      </div>
    </div>
  );
}
