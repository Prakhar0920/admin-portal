"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Terms", path: "/terms" },
    { name: "Privacy", path: "/privacy" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  const results = pages.filter((page) =>
    page.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">
          Search Results for:{" "}
          <span className="text-indigo-400">{query}</span>
        </h1>

        {results.length > 0 ? (
          <ul className="space-y-3">
            {results.map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  className="block p-4 bg-gray-800 rounded hover:bg-gray-700 transition"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
}
