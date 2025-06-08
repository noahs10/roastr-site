import { notFound } from "next/navigation";
import Image from "next/image";
import BrewLogCard from "@/components/BrewLogCard";
import { getBeanBySlug, getBrewLogsForBean, getBeans } from "@/lib/api";

interface BeanParams {
  slug: string;
}

export async function generateStaticParams() {
  const beans = await getBeans();
  return beans.map((bean) => ({ slug: bean.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<BeanParams>;
}) {
  const { slug } = await params;
  const bean = await getBeanBySlug(slug);

  if (!bean) {
    return {
      title: "Coffee Bean Not Found | roastr",
      description:
        "We couldn’t find that coffee bean. Explore honest reviews on Roastr.",
    };
  }

  return {
    title: `${bean.name} – ${bean.roaster_name} | roastr Reviews`,
    description: `Discover ${bean.name} by ${bean.roaster_name}. Real brews and reviews from the roastr community.`,
  };
}

export default async function BeanPage({
  params,
}: {
  params: Promise<BeanParams>;
}) {
  const { slug } = await params;
  const bean = await getBeanBySlug(slug);
  const reviews = await getBrewLogsForBean(slug);

  if (!bean) return notFound();

  return (
    <main className="max-w-screen-md mx-auto px-4 sm:px-6 py-10 space-y-6 pt-20">
      {/* Image */}
      <div className="relative h-[200px] sm:h-[300px] w-full rounded-lg border-2 border-gray-800">
        <Image
          src={bean.image_url}
          alt={bean.name}
          fill
          className="object-contain"
          sizes="(min-width: 768px) 500px, 100vw"
        />
      </div>

      {/* Header */}
      <div className="space-y-1">
        <p className="text-sm text-gray-600 underline">{bean.roaster_name}</p>
        <h1 className="text-2xl font-bold">{bean.name}</h1>
      </div>

      {/* Details */}
      <div className="text-sm text-gray-800 space-y-1">
        <p>
          <strong>Origin:</strong> {bean.origin}
        </p>
        <p>
          <strong>Variety:</strong> {bean.variety}
        </p>
        <p>
          <strong>Process:</strong> {bean.process}
        </p>
        <p>
          <strong>Roast Profile:</strong> {bean.roast_profile}
        </p>
        <p>
          <strong>Taste Profile:</strong> {bean.taste_profile?.join(", ")}
        </p>
      </div>

      {/* Divider */}
      <hr className="my-8 border-t border-gray-800" />
      {/* Reviews */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Top Brew Logs</h2>
        <div className="space-y-4">
          {reviews.map((review, i) => (
            <BrewLogCard key={i} {...review} />
          ))}
        </div>
        <p className="text-center mt-6 text-sm font-medium">
          <a href="#" className="underline">
            See all reviews
          </a>
        </p>
      </div>
    </main>
  );
}
