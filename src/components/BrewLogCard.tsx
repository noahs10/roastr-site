'use client'

import { useState } from 'react'
import { getBrewLogScore } from "@/utils/supabase/brewLogScore"

export type BrewLogCardProps = {
  score: number
  content: string
  user: string
}

export default function BrewLogCard({ content, user, score }: BrewLogCardProps) {
  const [expanded, setExpanded] = useState(false)
  const {emoji, label} = getBrewLogScore(score)

  return (
    <div className="rounded-2xl border border-gray-200 px-5 py-4 text-left text-sm sm:text-base shadow-sm">
      <div className="text-base flex items-center gap-2 font-semibold text-black mb-2">
        <span>{emoji}</span>
        <span>{label}</span>
      </div>

      <p className={`text-sm text-gray-800 leading-snug ${!expanded ? 'line-clamp-3' : ''}`}>{content}</p>
      <p className="text-sm text-gray-400 mt-4">
        by <span className="font-semibold">{user}</span>
      </p>
      <button onClick={() => setExpanded(!expanded)} className="text-xs text-blue-600 font-medium mt-2 hover:underline active:scale-95 transition-transform duration-150">
        {expanded ? 'See less' : 'See more'}
      </button>
    </div>
  )
}