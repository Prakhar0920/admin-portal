"use client";

export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-linear-to-br 
      from-slate-900 via-slate-800 to-indigo-900 px-6 py-16"
    >
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md 
      rounded-2xl shadow-2xl p-10">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          About This Project
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          This Admin Portal is a full-stack web application built to demonstrate
          authentication, role-based access control, and modern UI development
          using industry-relevant technologies.
        </p>

        {/* Tech Stack */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Tech Stack
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
          <li><strong>Frontend:</strong> Next.js (App Router), React</li>
          <li><strong>Styling:</strong> Tailwind CSS</li>
          <li><strong>Backend:</strong> Next.js API Routes</li>
          <li><strong>Database:</strong> PostgreSQL</li>
          <li><strong>ORM:</strong> Prisma</li>
          <li><strong>Auth:</strong> Custom authentication with role-based access</li>
        </ul>

        {/* Features */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
          <li>User registration and login</li>
          <li>Protected routes</li>
          <li>Admin-only dashboard</li>
          <li>User role management (Admin/User)</li>
          <li>Clean and responsive UI</li>
        </ul>

        {/* Purpose */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Project Purpose
        </h2>
        <p className="text-gray-600 leading-relaxed">
          This project was created as part of an internship assignment to
          demonstrate full-stack development skills, including frontend UI/UX,
          backend logic, database integration, and access control.
        </p>
      </div>
    </div>
  );
}
