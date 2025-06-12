// components/Breadcrumbs.tsx
'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Crumb = {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-gray-500 truncate w-full overflow-hidden whitespace-nowrap text-ellipsis">
      <ol className="flex items-center gap-1 flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {item.href ? (
              <Link href={item.href} className="hover:underline font-medium text-gray-800">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
            {index < items.length - 1 && <ChevronRight className="w-4 h-4" />}
          </li>
        ))}
      </ol>
    </nav>
  )
}
