'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  // Close on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      {/* Hamburger button (can be placed anywhere in layout) */}
      <button
        onClick={() => setOpen(true)}
        className="text-white p-2"
        aria-label="Open menu"
      >
        <Bars3Icon className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-gray-600/50 z-[9999]"
        />
      )}

      {/* Sidebar from left */}
      <div
        className={`fixed top-0 left-0 h-full bg-white text-black z-[9999] transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          w-64 md:w-80`
        }
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <XMarkIcon className="w-6 h-6 text-gray-600 hover:text-black" />
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-4 py-6 text-sm">
          <Link href="/roasters" onClick={() => setOpen(false)} className="hover:text-gray-700">
            Roasters
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-gray-700">
            About Us
          </Link>
        </nav>
      </div>
    </>
  )
}
