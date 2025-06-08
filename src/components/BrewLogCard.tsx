'use client'

import { useState } from 'react'

export type BrewLogCardProps = {
  score: number
  content: string
  user_id: string
}

export default function BrewLogCard({ score, content, user_id }: BrewLogCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="rounded-2xl border border-gray-200 px-5 py-4 text-left text-sm sm:text-base shadow-sm">
      <div className="text-base font-semibold text-black mb-2">
        Score: {score}
      </div>

      <p className={`text-sm text-gray-800 leading-snug ${!expanded ? 'line-clamp-3' : ''}`}>{content}</p>
      <p className="text-sm text-gray-400 mt-4">
        by <span className="font-semibold">{user_id}</span>
      </p>
      <button onClick={() => setExpanded(!expanded)} className="text-xs text-blue-600 font-medium mt-2">
        {expanded ? 'See less' : 'See more'}
      </button>
    </div>
  )
}