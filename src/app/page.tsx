// "use client"

//import UI components
import HeroSection from "@/components/HeroSection"
import ReviewCard from "@/components/ReviewCard"
import BeansSlider from "@/components/BeansSlider"

//import functions and data
import { beans } from "@/data/beans"

import { mockBeanData } from "@/data/mockBeanData"

// Top Beans and Recent Reviews
export default function Home() {
  
// Mock reviews data
  const reviews = Object.values(mockBeanData).flatMap((bean) =>
    bean.reviews.map((review) => ({
      roaster: bean.roaster,
      bean: bean.name,
      slug: bean.slug,
      ...review,
    }))
  )

  return (
  <main >
    {/* Hero Section */}
    <HeroSection />

    <div className="mx-auto max-w-screen-lg px-4 sm:px-10 space-y-10 pt-6">
        
      {/* Beans Section */}
      <section className="relative overflow-visible">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Beans of The Month</h2>
            <p className="text-gray-600 text-xs">highly roastr rated beans, according to you!</p>
          </div>
        </div>

        <BeansSlider beans={beans} />
      </section>

      {/* Divider */}
      <hr className="my-8 border-t border-gray-200" />

      {/* Recent Reviews */}
      <section className="pb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Recent reviews</h2>
          {/* <button
          onClick={() => window.location.href = '/review'}
          className=" bg-white border border-black hover:bg-black hover:text-white px-2 py-2 rounded-md text-sm font-semibold transition-colors"
          >
          ✍️  Write a review
          </button> */}
        </div>
        <div className="space-y-6">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </section>


    </div>
    
    
  </main>
  )
}
