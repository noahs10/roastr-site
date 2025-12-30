'use client'

import HomeRoasterCard from '@/components/HomeRoasterCard'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export type RoasterSliderData = {
  slug: string
  logo_url: string
  name: string
  location?: string | null
}

export default function RoasterSlider({ roasters }: { roasters: RoasterSliderData[] }) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 10,
    },
    breakpoints: {
      '(min-width: 425px)': { slides: { perView: 2.5, spacing: 10 } },
      '(min-width: 550px)': { slides: { perView: 3, spacing: 20 } },
      '(min-width: 640px)': { slides: { perView: 2.6, spacing: 28 } },
      '(min-width: 850px)': { slides: { perView: 3.4, spacing: 10 } },
    },
  })

  return (
    <>
      <div className="hidden md:flex gap-2 mb-4 justify-end">
        <button
          onClick={() => instanceRef.current?.prev()}
          aria-label="Previous"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 shadow"
        >
          ◀
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          aria-label="Next"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 shadow"
        >
          ▶
        </button>
      </div>
      <div ref={sliderRef} className="keen-slider overflow-visible">
        {roasters.map((roaster, i) => (
          <div key={i} className="keen-slider__slide !w-auto pr-4 pb-2">
            <HomeRoasterCard {...roaster} />
          </div>
        ))}
      </div>
    </>
  )
}