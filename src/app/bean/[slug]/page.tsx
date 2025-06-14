// import { mockBeanData, BeanSlug } from "@/data/mockBeanData";
import { notFound } from "next/navigation"
import { Info } from 'lucide-react'
import Image from "next/image";
import Link from "next/link";
import BrewLogCard from "@/components/BrewLogCard";
import { fetchBeanBySlug } from '@/lib/fetchBeanBySlug'
import { supabase } from '@/lib/supabaseClient'
import { getRoastrScore } from "@/utils/supabase/roastrScore"
import { Breadcrumbs } from '@/components/Breadcrumbs'


interface BeanParams {
  slug: string;
}

export async function generateStaticParams() {
  const { data, error } = await supabase.from('beans').select('slug')

  if (error || !data) return []

  return data.map((bean) => ({ slug: bean.slug }))
}

// 2. Set SEO metadata per bean
export async function generateMetadata({ params }: { params: Promise<BeanParams> }) {
  const { slug } = await params
  const bean = await fetchBeanBySlug(slug)

  if (!bean) {
    return {
      title: "Coffee Bean Not Found | roastr",
      description: "We couldn’t find that coffee bean. Explore honest reviews on Roastr.",
    };
  }

  return {
    title: `${bean.name} – ${bean.roaster?.name ?? "Unknown Roaster"} | roastr Reviews`,
    description: `Discover ${bean.name} by ${bean.roaster?.name ?? "Unknown Roaster"}. Real brews and reviews from the roastr community.`,
  };
}

function truncate(text: string, maxLength: number) {
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text
}

export default async function BeanPage({ params }: { params: Promise<BeanParams> }) {
  const { slug } = await params
  const bean = await fetchBeanBySlug(slug)
  const { average_score, roastrScoreDesc, ratings_count, bgColor } =
      getRoastrScore(bean?.average_score, bean?.ratings_count)
  const MAX_CRUMB_LENGTH = 20

  if (!bean) return notFound();

  return (
    <main className="max-w-screen-md mx-auto px-4 sm:px-6 py-10 space-y-6 pt-20">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Roasters', href: '/roasters' },
          { label: bean.roaster?.name ?? "Unknown Roaster", href: `/roasters/${bean.roaster?.slug}` },
          { label: truncate(bean.name, MAX_CRUMB_LENGTH) },
        ]}
      />
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
        <Link href={`/roasters/${bean.roaster?.slug}`}>
        <p className="inline-block text-sm text-gray-600 origin-center hover:underline hover:scale-95 active:scale-95 transition-transform duration-150">
          {bean.roaster?.name}
        </p>
      </Link>
        {/* <p className="text-sm text-gray-600 underline"></p> */}
        <h1 className="text-2xl font-bold">{bean.name}</h1>
      </div>

      {/* Details */}
      <div className="text-sm text-gray-800 space-y-1">
        <p><strong>Origin:</strong> {bean.origin}</p>
        <p><strong>Variety:</strong> {bean.variety}</p>
        <p><strong>Process:</strong> {bean.process}</p>
        <p><strong>Roast Profile:</strong> {bean.roast_profile}</p>
        <p><strong>Taste Profile:</strong> {bean.taste_profile}</p>
      </div>

      {/* Divider */}
      <hr className="my-8 border-t border-gray-800" /> 

      {/* Rating Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <p className="text-xl font-bold text-gray-500 text-center">roastr Community Rating</p>
          <a
            href="/about"
            className="inline-flex items-center justify-center w-6 h-6 rounded-full hover:bg-gray-200 transition-colors duration-150"
            title="Learn more about how ratings work"
          >
            <Info size={20} className="text-gray-500" />
          </a>
        </div>
        
        {/* Score Card */}
        <div className={`${bgColor} rounded-2xl py-4 px-6 text-center shadow-sm`}>
          <p className="text-3xl font-bold">{average_score}</p>
          <p className="text-sm">&quot;{roastrScoreDesc}&quot;</p>
          <p className="text-xs text-gray-700 mt-1 italic">({ratings_count} ratings)</p>
        </div>
        {/* Summary */}
        <div className="text-sm text-black leading-relaxed space-y-4">
          <p>
            {bean.roastr_summary || "No summary available for this bean."}
          </p>
        {/* Review Button */}
        <div className="space-y-2">
          <p className="text-center font-semibold mt-8">
            Have you tried this bean?
          </p>
          <div className="flex justify-center">
            <Link
              href="/submit"
              className="bg-white text-black border border-black active:scale-95 transition-transform duration-150 active:bg-gray-800 focus:ring-2 focus:ring-blue-400 hover:border-white hover:bg-black hover:text-white px-3 py-1.5 rounded-md text-sm font-semibold transition-color"
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
        <h2 className="text-lg font-semibold mb-4">Brew Logs of {bean.name}</h2>
        <div className="space-y-4">
          {bean.brew_logs.map((brew_log, i) => (
            <BrewLogCard
              key={i}
              {...brew_log}
              user={brew_log.user_id ?? "Anonymous"}
              score={brew_log.score}
            />
          ))}
        </div>
        <p className="text-center mt-6 text-sm font-medium">
          <a href="#" className="underline">See all reviews</a>
        </p>
      </div>
      
    </main>

  );
}
