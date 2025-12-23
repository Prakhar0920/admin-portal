export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-black to-gray-900 text-white ag-scrollbar-invisible">
      {/* Hero Section */}
      <section className="text-center pt-24 pb-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Admin Portal
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A secure and role-based user management system built with modern web
          technologies.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="/login"
            className="bg-white text-black px-6 py-2 rounded font-medium hover:bg-gray-200"
          >
            Login
          </a>
          <a
            href="/register"
            className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black"
          >
            Register
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-700 rounded p-6 hover:border-white transition">
            <h3 className="text-xl font-semibold mb-2">User Management</h3>
            <p className="text-gray-400">
              Register, login, update profile, change password and manage roles
              securely.
            </p>
          </div>

          <div className="border border-gray-700 rounded p-6 hover:border-white transition">
            <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
            <p className="text-gray-400">
              Admin-only access to view users, search accounts and manage user
              roles.
            </p>
          </div>

          <div className="border border-gray-700 rounded p-6 hover:border-white transition">
            <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
            <p className="text-gray-400">
              Password hashing, CAPTCHA protection and role-based authorization.
            </p>
          </div>
        </div>
      </section>

      {/* Role Explanation */}
      <section className="bg-gray-950 border-t border-gray-800 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-3">For Users</h3>
            <ul className="text-gray-400 space-y-2 list-disc ml-5">
              <li>Register and login securely</li>
              <li>Manage your profile</li>
              <li>Change password anytime</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">For Admins</h3>
            <ul className="text-gray-400 space-y-2 list-disc ml-5">
              <li>View all registered users</li>
              <li>Search and manage roles</li>
              <li>Protect sensitive admin routes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
        © {new Date().getFullYear()} Admin Portal · Built with Next.js, Prisma &
        Tailwind CSS
      </footer>
    </div>
  );
}
