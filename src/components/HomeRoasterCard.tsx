import Image from "next/image"
import Link from "next/link"

type HomeRoasterCardProps = {
  slug: string
  logo_url: string
  name: string
  location?: string | null
}

export default function BeanCard({
  slug,
  logo_url,
  name,
  location,
}: HomeRoasterCardProps) {

  return (

    <Link href={`/roasters/${slug}`} className="inline-block active:scale-95 transition-transform duration-150 ease-in-out">
      <div
        className="border border-gray-200 rounded-2xl p-4 flex flex-col items-center hover:border-neutral-900 hover:shadow-md transition-all"
      >
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-2">
          <Image src={logo_url} alt={name} fill className="object-contain" />
        </div>
        <p className="font-semibold text-sm text-center line-clamp-2 break-words">
          {name}
        </p>
        {location && (
          <p className="text-xs text-gray-500 text-center mt-1 line-clamp-1">
            {location}
          </p>
        )}
      </div>
    </Link>
  )
}
