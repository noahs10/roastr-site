'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getBrewLogScore } from "@/utils/supabase/brewLogScore"

type RecentBrewLogsCardProps = {
  roaster: string
  bean: string
  slug: string
  content: string
  user: string
  score: number
}

export default function ReviewCard({
  roaster,
  bean,
  slug,
  content,
  user,
  score,
}: RecentBrewLogsCardProps) {
  const [expanded, setExpanded] = useState(false)
  const {emoji, label} =
      getBrewLogScore(score)
  return (
    <div>
      <Link
      href={`/bean/${slug}`}
      className="block active:scale-95 transition-transform duration-150 ease-in-out">  
      
      <div className="rounded-2xl border border-gray-200 px-5 py-4 text-left text-sm sm:text-base hover:border-black hover:shadow-md">
        {/* Roaster and Bean */}
        <p className="text-xs text-gray-500 truncate">{roaster}</p>
          <p className="text-sm font-semibold text-black mb-3">
            {bean}
          </p>

        {/* Emoji and Title */}
        <div className="text-xs flex items-center gap-2 font-semibold text-black mb-2">
          <span>{emoji}</span>
          <span>{label}</span>
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
    </Link>
    </div>
  )
}
