import Link from "next/link";

export default async function QueryPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const query = q || "";
  return (
    <main className="max-w-screen-lg mx-auto px-4 sm:px-6 pt-24 space-y-6">
      <h1 className="text-xl font-semibold">Search Results{query ? ` for "${query}"` : ""}</h1>
      <div className="text-center py-10">
        <p className="mb-4 text-sm text-gray-600">No results found.</p>
        <Link
          href="/review"
          className="bg-white border border-black hover:bg-black hover:text-white px-3 py-1.5 rounded-md text-sm font-semibold transition-colors"
        >
          ✍️ Write a review
        </Link>
      </div>
    </main>
  );
}
