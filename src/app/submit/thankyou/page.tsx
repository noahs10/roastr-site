import { Link } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">🎉 Thank You!</h1>
      <p className="text-lg mb-6">We’ve received your brew log submission. We’ll be in touch soon.</p>
      <p className="text-lg mb-6">the team will do every</p>
      <Link
        href="/"
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
      >
        ← Back to Home
      </Link>
    </div>
  );
}