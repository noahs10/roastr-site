import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">🎉 Thank You!</h1>
      <p className="text-lg mb-6">We’ve received your brew log submission. We’ll be in touch soon.</p>

      <Link
        href="/"
        className="bg-white border border-black hover:bg-black hover:text-white px-2 py-2 rounded-md text-sm font-semibold transition-colors inline-block"
      >
    
        ← Back to Home
      </Link>
    </div>
  );
}