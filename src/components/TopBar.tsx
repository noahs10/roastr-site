"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Sidebar from "./sideBar"

export default function TopBar() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(pathname !== "/")
  const isSubmitPage = pathname === "/submit"
  
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
    <div className="bg-black">
      <div className="max-w-screen-lg mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* Left: Sidebar toggle and Logo */}
        <div className="flex items-center gap-4">
          <Sidebar />
          <Link href="/" className="font-bold text-lg text-white hover:text-gray-300 transition-colors">
            roastr
          </Link>
        </div>

        {/* Right: Links */}
        <div className="flex items-center gap-4">

          {!isSubmitPage && (
            <Link
              href="/submit"
              className="bg-white border border-black active:scale-95 transition-transform duration-150 active:bg-gray-800 focus:ring-2 focus:ring-blue-400 hover:border-white hover:bg-black hover:text-white px-3 py-1.5 rounded-md text-sm font-semibold transition-colors"
            >
              ✍️ Write a review
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
)

}
