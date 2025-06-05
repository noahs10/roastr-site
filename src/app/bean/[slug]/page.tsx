import { mockBeanData, BeanSlug } from "@/data/mockBeanData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BrewLogCard from "@/components/BrewLogCard";
import type { PageProps } from "next";

export async function generateStaticParams() {
  return Object.keys(mockBeanData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps<{ slug: string }>
) {
  const { slug } = await params
  const bean = mockBeanData[slug as BeanSlug]

  if (!bean) {
    return {
      title: "Coffee Bean Not Found | roastr",
      description: "We couldn’t find that coffee bean. Explore honest reviews on Roastr.",
    };
  }

  return {
    title: `${bean.name} – ${bean.roaster} | roastr Reviews`,
    description: `Discover ${bean.name} by ${bean.roaster}. Real brews and reviews from the roastr community.`,
  };
}
export default async function BeanPage({ params }: PageProps<{ slug: string }>) {
  const { slug } = await params
  const bean = mockBeanData[slug as BeanSlug]

  if (!bean) return notFound();

  return (
    <main className="max-w-screen-md mx-auto px-4 sm:px-6 py-10 space-y-6">
      {/* Image */}
      <div className="relative h-[200px] sm:h-[300px] w-full rounded-lg border-2 border-gray-800">
        <Image
          src={bean.image}
          alt={bean.name}
          fill
          className="object-contain"
          sizes="(min-width: 768px) 500px, 100vw"
        />
      </div>

      {/* Header */}
      <div className="space-y-1">
        <p className="text-sm text-gray-600 underline">{bean.roaster}</p>
        <h1 className="text-2xl font-bold">{bean.name}</h1>
      </div>

      {/* Details */}
      <div className="text-sm text-gray-800 space-y-1">
        <p><strong>Origin:</strong> {bean.origin}</p>
        <p><strong>Variety:</strong> {bean.variety}</p>
        <p><strong>Elevation:</strong> {bean.elevation}</p>
        <p><strong>Process:</strong> {bean.process}</p>
        <p><strong>Taste Profile:</strong> {bean.tasteProfile.join(", ")}</p>
      </div>

      {/* Divider */}
      <hr className="my-8 border-t border-gray-800" /> 

      {/* Rating Section */}
      <div className="space-y-4">
        <p className="text-xl font-bold text-gray-500 text-center">roastr Community Rating</p>
        {/* Score Card */}
        <div className="bg-yellow-300 rounded-2xl py-4 px-6 text-center shadow-sm">
          <p className="text-3xl font-bold">{bean.score}</p>
          <p className="text-sm">"{bean.description}"</p>
          <p className="text-xs text-gray-700 mt-1 italic">({bean.ratings} ratings)</p>
        </div>
        {/* Summary */}
        <div className="text-sm text-black leading-relaxed space-y-4">
          <p>
            The roastr community mostly thinks this coffee is a well rounded coffee with prominent flavor of pomegranate widely mentioned. However body is considered thin and tea-like rather than bold. This is a decent coffee that you can try from People Temple Roastery.
          </p>
        {/* Review Button */}
        <div className="space-y-2">
          <p className="text-center font-semibold mt-8">
            Have you tried this bean?
          </p>
          <div className="flex justify-center">
            <Link
              href="/review"
              className="bg-white border border-black hover:bg-black hover:text-white px-2 py-2 rounded-md text-sm font-semibold transition-colors inline-block"
            >
              ✍️ Write a review
            </Link>
          </div>        
        </div>
          
        </div>
      </div>

      
      {/* Divider */}
      <hr className="my-8 border-t border-gray-800" />
      {/* Reviews */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Top Brew Logs</h2>
        <div className="space-y-4">
          {bean.reviews.map((review, i) => (
            <BrewLogCard key={i} {...review} />
          ))}
        </div>
        <p className="text-center mt-6 text-sm font-medium">
          <a href="#" className="underline">See all reviews</a>
        </p>
      </div>
      
    </main>

  );
}
