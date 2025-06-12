import Image from 'next/image'
import { notFound } from 'next/navigation'
import BeanCard from '@/components/BeanCard'
import { fetchRoasterBySlug } from '@/lib/fetchRoasterBySlug'
import { supabase } from '@/lib/supabaseClient'
import { Breadcrumbs } from '@/components/Breadcrumbs'

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
    <main className="max-w-screen-md mx-auto px-4 sm:px-6 py-10 pt-20 space-y-10">

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Roasters', href: '/roasters' },
          { label: roaster.name },
        ]}
      />
  {/* Roaster Header Section */}
      <div className="flex gap-4 sm:gap-6 items-start">
        {/* Logo */}
        <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] border border-gray-300 rounded-md overflow-hidden relative">
          <Image
            src={roaster.logo_url}
            alt={roaster.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Name, Location, Description */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-2xl font-semibold">{roaster.name}</h1>
          <p className="text-sm text-gray-500">{roaster.location}</p>
          <p className="text-sm text-gray-700 mt-2">{roaster.description}</p>
        </div>
      </div>
      

      {/* Divider */}
      <hr className="my-8 border-t border-gray-800" />

      {/* Beans */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Beans by {roaster.name}</h2>
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
