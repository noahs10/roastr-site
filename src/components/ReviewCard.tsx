'use client'

import { useState } from 'react'
import Link from 'next/link'

type ReviewCardProps = {
  roaster: string
  bean: string
  slug: string
  emoji: string
  title: string
  content: string
  user: string
}

export default function ReviewCard({
  roaster,
  bean,
  slug,
  emoji,
  title,
  content,
  user,
}: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="rounded-2xl border border-gray-200 px-5 py-4 text-left text-sm sm:text-base">
      {/* Roaster and Bean */}
      <p className="text-xs text-gray-500 truncate">{roaster}</p>

      <Link href={`/bean/${slug}`}>
        <p className="text-sm font-semibold text-black mb-3 hover:underline">
          {bean}
        </p>
      </Link>

      {/* Emoji and Title */}
      <div className="text-xs flex items-center gap-2 font-semibold text-black mb-2">
        <span>{emoji}</span>
        <span>{title}</span>
      </div>

      {/* Review Content */}
      <p className={`text-xs text-gray-800 leading-snug ${!expanded ? 'line-clamp-3' : ''}`}>
        {content}
      </p>

      {/* Reviewer */}
      <p className="text-xs text-gray-400 mt-1">
        by <span className="font-semibold">{user}</span>
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
