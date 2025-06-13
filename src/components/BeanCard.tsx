import Image from "next/image"
import Link from "next/link"
import { getRoastrScore } from "@/utils/supabase/roastrScore"

type BeanCardProps = {
  image: string
  roaster: string
  name: string
  average_score: number
  ratings_count: number
  slug: string
}



export default function BeanCard({
  image,
  roaster,
  name,
  average_score,
  ratings_count,
  // description,
  slug,
}: BeanCardProps) {

  const {roastrEmoji, roastrScoreDesc} =
    getRoastrScore(average_score, ratings_count)

  return (

    <Link href={`/bean/${slug}`} className="inline-block active:scale-95 transition-transform duration-150 ease-in-out">
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
              <span className="text-blue-600 font-bold">{average_score}</span>
              <span className="text-xs text-gray-400">({ratings_count} ratings)</span>
            </p>
            <p className="text-xs sm:text-sm text-gray-500 font-bold">
              <span className="text-xs sm:text-sm text-gray-500 font-bold">{roastrScoreDesc}</span>&nbsp;&nbsp;&nbsp;
              <span className="text-blue-600 font-bold">{roastrEmoji}</span>              
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
