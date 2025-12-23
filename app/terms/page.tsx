export default function TermsPage() {
  return (
    <div
      className="min-h-screen bg-linear-to-br 
      from-slate-900 via-slate-800 to-indigo-900 px-6 py-16"
    >
      <div
        className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md 
        rounded-2xl shadow-2xl p-10"
      >
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: December 2025
        </p>

        {/* Intro */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          By accessing or using this Admin Portal, you agree to be bound by
          these terms and conditions. Please read them carefully before using
          the application.
        </p>

        {/* Terms List */}
        <ul className="space-y-4 text-gray-600">
          <li className="flex gap-3">
            <span className="font-semibold text-indigo-600">1.</span>
            <span>
              Users must provide accurate and complete information during
              registration.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-indigo-600">2.</span>
            <span>
              Passwords are securely stored using encryption and are never
              shared with third parties.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-indigo-600">3.</span>
            <span>
              Unauthorized access, misuse, or attempted breaches are strictly
              prohibited.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-indigo-600">4.</span>
            <span>
              Admin users have additional privileges and responsibilities
              within the system.
            </span>
          </li>
        </ul>

        {/* Footer Note */}
        <p className="text-gray-600 mt-8 leading-relaxed">
          These terms may be updated from time to time without prior notice.
          Continued use of the portal implies acceptance of the revised terms.
        </p>
      </div>
    </div>
  );
}
