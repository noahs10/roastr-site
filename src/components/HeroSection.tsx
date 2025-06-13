"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link";

export default function HeroSection() {
  const router = useRouter()
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/search${query ? `?q=${encodeURIComponent(query)}` : ""}`)
  }

  return (
    <section id="hero-section" className="relative bg-black text-white px-6 py-10 md:py-20 text-center">

      {/* 🔹 About Us link in top-right corner */}
      <Link
        href="/about"
        className="absolute top-3 right-7 text-xs md:text-sm text-gray-400 hover:text-white transition"
      >
        About Us
      </Link>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3">roastr</h1>

      {/* Subtitle */}
      <p className="text-xs md:text-lg text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
        Explore Indo's best specialty coffee, and share your Brew! <br className="md:hidden" />
      </p>

      {/* Search Input */}
      <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto mb-6">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="search"
          enterKeyHint="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search beans, roasters, or flavors..."
          className="w-full pl-12 pr-5 py-3 md:py-4 rounded-full text-base text-black bg-white placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </form>

      {/* Review count */}
      <p className="text-xs md:text-sm text-gray-400 mb-1">
        <span className="font-semibold text-white">3561</span> brew logs by coffee lovers like you
      </p>

      {/* CTA */}
      <p className="text-xs md:text-sm text-gray-300 mt-5 mb-3">Brewed something special?</p>
      <Link
        href="/submit"
        className="text-black bg-white border border-gray-300 active:scale-95 transition-transform duration-150 ease-in-out hover:bg-black hover:text-white px-3 py-1.5 rounded-md text-sm font-semibold transition-colors "
      >
        ✍️ Write a review
      </Link>
    </section>
  )
}
