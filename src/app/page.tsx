"use client"

import HeroSection from "@/components/HeroSection"
import BeanCard from "@/components/BeanCard"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { beans } from "@/data/beans"


export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.5, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.5, spacing: 32 },
      },
    },
  })
  
  return (
    <main>
      <HeroSection />
    
      <div ref={sliderRef} className="keen-slider">
        {beans.map((bean, i) => (
          <div key={i} className="keen-slider__slide">
            <BeanCard {...bean} />
          </div>
        ))}
      </div>
    </main>
  )
}