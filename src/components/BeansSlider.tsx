'use client'

import BeanCard from '@/components/BeanCard'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export type BeanOfMonth = {
  slug: string
  image: string
  roaster: string
  name: string
  // score: number
  // ratings: number
  // description: string
}

export default function BeansSlider({ beans }: { beans: BeanOfMonth[] }) {
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
        {beans.map((bean, i) => (
          <div key={i} className="keen-slider__slide !w-auto pr-4 pb-2">
            <BeanCard {...bean} />
          </div>
        ))}
      </div>
    </>
  )
}