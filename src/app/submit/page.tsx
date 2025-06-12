'use client'

import { useEffect } from 'react'

export default function SubmitBrewLogPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="h-screen w-screen overflow-hidden relative m-0">
      <iframe
        src="https://tally.so/r/3jqXgY?transparentBackground=1"
        title="Write a Brew Log"
        className="absolute top-0 left-0 w-full h-full border-none"
        allowFullScreen
      />
    </div>
  )
}
