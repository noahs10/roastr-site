import Image from 'next/image'
import { notFound } from 'next/navigation'
import BeanCard from '@/components/BeanCard'
import { fetchRoasterBySlug } from '@/lib/fetchRoasterBySlug'
import { supabase } from '@/lib/supabaseClient'

interface RoasterParams {
  slug: string
}

export async function generateStaticParams() {
  const { data, error } = await supabase.from('roasters').select('slug')

  if (error || !data) return []

  return data.map((roaster) => ({ slug: roaster.slug }))
}

export async function generateMetadata({ params }: { params: Promise<RoasterParams> }) {
  const { slug } = await params
  const roaster = await fetchRoasterBySlug(slug)

  if (!roaster) {
    return {
      title: 'Roaster Not Found | roastr',
      description: 'We couldn\u2019t find that roaster. Explore more on roastr.',
    }
  }

  return {
    title: `${roaster.name} | roastr`,
    description: roaster.description ?? '',
  }
}

export default async function RoasterPage({ params }: { params: Promise<RoasterParams> }) {
  const { slug } = await params
  const roaster = await fetchRoasterBySlug(slug)

  if (!roaster) return notFound()

  return (
    <main className="max-w-screen-md mx-auto px-4 sm:px-6 py-10 space-y-6 pt-20">
      {/* Logo */}
      <div className="relative h-[200px] sm:h-[300px] w-full rounded-lg border-2 border-gray-800">
        <Image
          src={roaster.logo_url}
          alt={roaster.name}
          fill
          className="object-contain"
          sizes="(min-width: 768px) 500px, 100vw"
        />
      </div>

      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">{roaster.name}</h1>
        {roaster.location && <p className="text-sm text-gray-600">{roaster.location}</p>}
      </div>

      {/* Description */}
      <div className="text-sm text-gray-800 space-y-4">
        <p>{roaster.description}</p>
      </div>

      {/* Divider */}
      <hr className="my-8 border-t border-gray-800" />

      {/* Beans */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Beans</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {roaster.beans.map((bean, i) => (
            <BeanCard
              key={i}
              image={bean.image_url}
              roaster={roaster.name}
              name={bean.name}
              average_score={bean.average_score ?? 0}
              ratings_count={bean.ratings_count ?? 0}
              slug={bean.slug}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
