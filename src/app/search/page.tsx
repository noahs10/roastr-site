import Link from "next/link";
import BeanCard from "@/components/BeanCard";
import { searchBeans } from "@/lib/searchBeans";

export default async function QueryPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() || "";
  const beans = query ? await searchBeans(query) : [];

  return (
    <main className="max-w-screen-lg mx-auto px-4 sm:px-6 pt-24 space-y-6">
      <h1 className="text-xl font-semibold">
        Search Results{query ? ` for "${query}"` : ""}
      </h1>
      {/* Divider */}
      <hr className="my-8 border-t border-gray-200" />
      {beans.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {beans.map((bean) => (
            <BeanCard
              key={bean.id}
              slug={bean.slug}
              image={bean.image_url}
              roaster={bean.roaster?.name ?? "Unknown Roaster"}
              name={bean.name}
              average_score={Number(bean.average_score ?? 0)}
              ratings_count={Number(bean.ratings_count ?? 0)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="mb-4 text-sm text-gray-600">No results found.</p>
          <Link
            href="/review"
            className="bg-white border border-black hover:bg-black hover:text-white px-3 py-1.5 rounded-md text-sm font-semibold transition-colors"
          >
            ✍️ Write a review
          </Link>
        </div>
      )}
    </main>
  );
}
