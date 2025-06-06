"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/solid"

export default function TopBar() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(pathname !== "/")

  useEffect(() => {
    if (pathname !== "/") {
      setVisible(true)
      return
    }
    const hero = document.getElementById("hero-section")
    if (!hero) {
      setVisible(true)
      return
    }

    const handleScroll = () => {
      const show = window.scrollY >= hero.clientHeight
      setVisible(show)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full transition-transform ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-screen-lg mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg">
            roastr
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/review"
              className="bg-white border border-black hover:bg-black hover:text-white px-3 py-1.5 rounded-md text-sm font-semibold transition-colors"
            >
              Write a review
            </Link>
            <button aria-label="Menu" className="p-2">
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
