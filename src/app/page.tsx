"use client";

//import UI components
import HeroSection from "@/components/HeroSection";
import BeanCard from "@/components/BeanCard";
import ReviewCard from "@/components/ReviewCard";

//import functions and data
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { getBeans, getRecentBrewLogs, Bean, BrewLog } from "@/lib/api";

//Top Beans keenSlider config
export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 425px)": {
        slides: { perView: 2.5, spacing: 10 },
      },
      "(min-width: 550px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 640px)": {
        slides: { perView: 2.6, spacing: 28 },
      },
      "(min-width: 850px)": {
        slides: { perView: 3.4, spacing: 10 },
      },
    },
  });

  const [beansData, setBeansData] = useState<Bean[]>([]);
  const [reviews, setReviews] = useState<BrewLog[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const fetchedBeans = await getBeans();
        setBeansData(fetchedBeans);
        const fetchedReviews = await getRecentBrewLogs(5);
        setReviews(fetchedReviews);
      } catch (err) {
        console.error("Failed to fetch data", err);
      }
    }
    load();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      <div className="mx-auto max-w-screen-lg px-4 sm:px-10 space-y-10 pt-6">
        {/* Beans Section */}
        <section className="relative overflow-visible">
          {/* Header Row */}

          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">Beans of The Month</h2>
              <p className="text-gray-600 text-xs">
                highly roastr rated beans, according to you!
              </p>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex gap-2">
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
          </div>

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider overflow-visible">
            {beansData.map((bean, i) => (
              <div key={i} className="keen-slider__slide !w-auto pr-4 pb-2">
                <BeanCard {...bean} />
              </div>
            ))}
          </div>
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
  );
}
