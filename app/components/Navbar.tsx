"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const syncUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    syncUser();
    window.addEventListener("storage", syncUser);
    window.addEventListener("auth-change", syncUser);

    return () => {
      window.removeEventListener("storage", syncUser);
      window.removeEventListener("auth-change", syncUser);
    };
  }, []);

  function logout() {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("auth-change"));
    router.push("/login");
  }

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Left */}
      <Link href="/" className="font-bold text-xl">
        Admin Portal
      </Link>

      {/* Center Search (always visible) */}
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 rounded-lg text-black w-80 bg-white 
        focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Right */}
      <div className="flex items-center gap-5 text-sm">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>

        {!user ? (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        ) : (
          <>
            <Link href="/profile">Profile</Link>

            {/* Admin only */}
            {user.role === "ADMIN" && (
              <Link
                href="/admin"
                className="text-yellow-400 font-semibold"
              >
                Admin
              </Link>
            )}

            {/* Profile image only after upload */}
            {user.image && (
              <img
                src={user.image}
                alt="Profile"
                className="w-9 h-9 rounded-full border border-white object-cover"
              />
            )}

            <button
              onClick={logout}
              className="text-red-400 hover:text-red-500"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
