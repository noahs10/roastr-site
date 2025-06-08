import Image from "next/image"
import Link from "next/link"

type BeanCardProps = {
  image_url: string
  roaster_name: string | null
  name: string
  slug: string
}

export default function BeanCard({
  image_url,
  roaster_name,
  name,
  slug,
}: BeanCardProps) {
  return (
    <Link href={`/bean/${slug}`} className="inline-block">
      <div
        className="
          min-w-[120px] max-w-[150px] h-[240px]
          sm:min-w-[200px] sm:max-w-[220px] sm:h-[320px]
          rounded-2xl border border-gray-200 bg-white
          shadow-sm overflow-hidden flex flex-col
          hover:border-neutral-900 hover:shadow-md transition-all duration-200
        "
      >
        {/* Image Section */}
        <div className="relative h-[100px] sm:h-[160px] w-full">
          <Image
            src={image_url}
            alt={name}
            fill
            className="object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col px-3 sm:px-5 py-5 text-left flex-1 ">
          <p className="text-[10px] sm:text-xs text-gray-500 truncate">
            {roaster_name}
          </p>

          <p className="font-semibold text-sm sm:text-base leading-snug line-clamp-2 break-words min-h-[2rem]">
            {name}
          </p>

          <div className="mt-auto" />
        </div>
      </div>
    </Link>
  )
}
