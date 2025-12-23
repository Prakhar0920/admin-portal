export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: December 2025
        </p>

        {/* Intro */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          We respect your privacy and are committed to protecting your personal
          information. This policy outlines how your data is collected, used,
          and safeguarded within the Admin Portal.
        </p>

        {/* Policy List */}
        <ul className="space-y-4 text-gray-600">
          <li className="flex gap-3">
            <span className="font-semibold text-indigo-600">1.</span>
            <span>
              Email addresses and login credentials are securely stored using
              industry-standard security practices.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-indigo-600">2.</span>
            <span>
              Passwords are encrypted and never stored in plain text.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-indigo-600">3.</span>
            <span>
              User data is never shared with third parties without consent.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="font-semibold text-indigo-600">4.</span>
            <span>
              Personal data is used strictly for authentication, authorization,
              and system functionality.
            </span>
          </li>
        </ul>

        {/* Footer Note */}
        <p className="text-gray-600 mt-8 leading-relaxed">
          By continuing to use this platform, you acknowledge and agree to this
          privacy policy. Updates may be made periodically without prior notice.
        </p>
      </div>
    </div>
  );
}
