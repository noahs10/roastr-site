'use client'

import { useState } from 'react'
import Link from 'next/link'

type ReviewCardProps = {
  roaster_name: string | null
  bean_name: string
  slug: string
  score: number
  content: string
  user_id: string
}

export default function ReviewCard({
  roaster_name,
  bean_name,
  slug,
  score,
  content,
  user_id,
}: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="rounded-2xl border border-gray-200 px-5 py-4 text-left text-sm sm:text-base">
      {/* Roaster and Bean */}
      <p className="text-xs text-gray-500 truncate">{roaster_name}</p>

      <Link href={`/bean/${slug}`}>
        <p className="text-sm font-semibold text-black mb-3 hover:underline">
          {bean_name}
        </p>
      </Link>

      {/* Score */}
      <p className="text-xs font-semibold text-black mb-2">Score: {score}</p>

      {/* Review Content */}
      <p className={`text-xs text-gray-800 leading-snug ${!expanded ? 'line-clamp-3' : ''}`}>
        {content}
      </p>

      {/* Reviewer */}
      <p className="text-xs text-gray-400 mt-1">
        by <span className="font-semibold">{user_id}</span>
      </p>

      {/* Toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs text-blue-600 font-medium mt-2"
      >
        {expanded ? 'See less' : 'See more'}
      </button>
    </div>
  )
}
