"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  email: string;
  role: "ADMIN" | "MANAGER" | "USER";
  createdAt: string;
};

export default function AdminPage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.push("/login");
      return;
    }

    const parsed = JSON.parse(storedUser);
    setCurrentUser(parsed);

    // 🔐 Only ADMIN can access
    if (parsed.role !== "ADMIN") {
      router.push("/profile");
      return;
    }

    fetchUsers();
  }, [router]);

  async function fetchUsers() {
    const res = await fetch("/api/admin/users");
    const data = await res.json();
    setUsers(data);
  }

  async function changeRole(userId: number, role: "ADMIN" | "MANAGER" | "USER") {
    await fetch("/api/admin/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, role }),
    });

    fetchUsers();
  }

  async function deleteUser(userId: number) {
    const confirmDelete = confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    await fetch("/api/admin/users", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    fetchUsers();
  }

  const filteredUsers = users.filter((u) =>
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 px-6 py-12">
      <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage users and control access roles
          </p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search user by email..."
          className="w-full px-4 py-3 mb-6 border rounded-lg 
          text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Created</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3 text-gray-700">{user.email}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.role === "ADMIN"
                          ? "bg-red-100 text-red-600"
                          : user.role === "MANAGER"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="p-3 text-gray-600">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-3 text-center space-x-2">

                    {/* Role Change */}
                    {user.role !== "ADMIN" && (
                      <button
                        onClick={() => changeRole(user.id, "ADMIN")}
                        className="px-3 py-1.5 rounded-lg 
                        bg-green-600 text-white hover:bg-green-700 transition"
                      >
                        Make Admin
                      </button>
                    )}

                    {user.role !== "USER" && (
                      <button
                        onClick={() => changeRole(user.id, "USER")}
                        className="px-3 py-1.5 rounded-lg 
                        bg-yellow-500 text-white hover:bg-yellow-600 transition"
                      >
                        Make User
                      </button>
                    )}

                    {/* Delete */}
                    {user.email !== currentUser?.email && (
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="px-3 py-1.5 rounded-lg 
                        bg-red-600 text-white hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center p-6 text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
