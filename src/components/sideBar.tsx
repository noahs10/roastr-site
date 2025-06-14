'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Close on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Ensure portal is rendered client-side only
  useEffect(() => setMounted(true), [])

  return (
    <>
      {/* Hamburger button (can be placed anywhere in layout) */}
      <button
        onClick={() => setOpen(true)}
        className="text-white p-2 active:scale-95 transition-transform duration-150"
        aria-label="Open menu"
      >
        <Bars3Icon className="w-6 h-6" />
      </button>
      {mounted &&
        createPortal(
          <>
            {/* Overlay */}
            {open && (
              <div
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-gray-600/50 backdrop-blur-md z-[9999]"
              />
            )}

            {/* Sidebar from left */}
            <div
              className={`fixed top-0 left-0 h-full bg-white text-black z-[9999] transform transition-transform transition-opacity duration-300 ease-in-out
                ${open ? 'translate-x-0' : '-translate-x-full'}
                w-64 md:w-80`
              }
            >
              <div className="flex justify-between bg-black items-center px-4 py-3 border-b border-gray-200">
                <span className="text-white font-bold text-lg">roastr</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <XMarkIcon className="w-6 h-6 text-gray-200 hover:scale-80 transition-transform duration-150" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 px-4 py-6 text-base">
                <Link href="/" onClick={() => setOpen(false)} className="hover:scale-95 active:scale-95 transition-transform duration-150">
                  Home
                </Link>
                <Link href="/roasters" onClick={() => setOpen(false)} className="font-bold hover:scale-95 active:scale-95 transition-transform duration-150">
                  Roasters
                </Link>
                <Link href="/about" onClick={() => setOpen(false)} className="font-bold hover:scale-95 active:scale-95 transition-transform duration-150">
                  About Us
                </Link>
              </nav>
            </div>
          </>,
          document.body
        )}
    </>
  )
}
