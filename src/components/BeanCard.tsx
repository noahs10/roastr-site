import Image from "next/image"
import Link from "next/link"

type BeanCardProps = {
  image: string
  roaster: string
  name: string
  score: number
  ratings: number
  description: string
  slug: string
}

export default function BeanCard({
  image,
  roaster,
  name,
  score,
  ratings,
  description,
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
            src={image}
            alt={name}
            fill
            className="object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col px-3 sm:px-5 py-5 text-left flex-1 ">
          <p className="text-[10px] sm:text-xs text-gray-500 truncate">
            {roaster}
          </p>

          <p className="font-semibold text-sm sm:text-base leading-snug line-clamp-2 break-words min-h-[2rem]">
            {name}
          </p>

          {/* Bottom-aligned Rating + Description */}
          <div className="mt-auto space-y-1">
            <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
              <span className="text-blue-600 font-bold">{score}</span>
              <span className="text-gray-400">({ratings} ratings)</span>
            </p>
            <p className="text-xs sm:text-sm text-gray-500 font-bold">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
