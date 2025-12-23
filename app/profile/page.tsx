"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.push("/login");
    } else {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      setImage(parsed.image || null);
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  async function handleUpload(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", user.email);

    const res = await fetch("/api/profile/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      setImage(data.image);
      const updatedUser = { ...user, image: data.image };
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 px-4">
      <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          My Profile
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Manage your account details
        </p>

        {/* Avatar Upload */}
        <div className="flex flex-col items-center mb-6">
          <label className="relative group cursor-pointer">
            <img
              src={image || "/avatar.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-sm font-medium">
                Change Photo
              </span>
            </div>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  handleUpload(e.target.files[0]);
                }
              }}
            />
          </label>

          <p className="text-xs text-gray-500 mt-2">
            Click on image to upload (PNG/JPG)
          </p>
        </div>

        {/* Info */}
        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between">
            <span className="font-semibold">Email</span>
            <span className="text-gray-600">{user.email}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold">Role</span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                user.role === "Admin"
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {user.role}
            </span>
          </div>
        </div>

        {/* Change Password */}
        <a
          href="/profile/change-password"
          className="block text-center mt-6 text-indigo-600 hover:underline font-medium"
        >
          Change Password
        </a>

        {/* Actions */}
        <div className="flex gap-4 mt-8">
          {user.role === "Admin" && (
            <a
              href="/admin"
              className="flex-1 text-center py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
            >
              Admin Panel
            </a>
          )}

          <button
            onClick={() => {
              localStorage.removeItem("user");
              router.push("/login");
            }}
            className="flex-1 py-2 rounded-lg border text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
