"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const router = useRouter()
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/query${query ? `?q=${encodeURIComponent(query)}` : ""}`)
  }

  return (
    <section id="hero-section" className="bg-black text-white px-6 py-10 md:py-20 text-center">
      {/* Logo */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">roastr</h1>

      {/* Subtitle */}
      <p className="text-xs md:text-lg text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
        explore indo’s best specialty coffee –<br className="md:hidden" />
        no B.S., just real human reviews.
      </p>

      {/* Search Input with Icon */}
      <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto mb-6">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search beans, roasters, or flavors..."
          className="w-full pl-12 pr-5 py-3 md:py-4 rounded-full text-sm md:text-base text-black bg-white placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </form>

      {/* Review count */}
      <p className="text-xs md:text-sm text-gray-400 mb-1">
        <span className="font-semibold text-white">3561</span> reviews made by coffee lovers like you
      </p>

      {/* CTA */}
      <p className="text-xs md:text-sm text-gray-300">
        Brewed something special?{" "}
        <a href="/review" className="text-blue-400 underline font-medium">
          Write a review
        </a>
      </p>
    </section>
  )
}
