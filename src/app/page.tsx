
//import UI components
import HeroSection from "@/components/HeroSection"
import RecentBrewLogCard from "@/components/RecentBrewLogCard"
import BeansSlider from "@/components/BeansSlider"
import { fetchDiscoverRoasters } from "@/lib/fetchDiscoverRoasters"

//import functions and data
import { fetchBeansofTheMonth } from '@/lib/fetchBeansOfTheMonth'
import { fetchRecentBrewLogs } from '@/lib/fetchRecentBrewLogs'
import RoasterCard from "@/components/RoasterCard"
import RoasterSlider from "@/components/RoasterSlider"

// Top Beans and Recent Reviews
export default async function Home() {
  const beans = await fetchBeansofTheMonth()
  const brew_logs = await fetchRecentBrewLogs()
  const discover_roasters = await fetchDiscoverRoasters()

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

        <BeansSlider beans={beans.map(bean => ({
          slug: bean.slug,
          image: bean.image_url, // ensure 'image' exists on bean
          roaster: bean.roaster?.name ?? 'Unknown Roaster',
          name: bean.name,
          ratings_count: bean.ratings_count,
          average_score: bean.average_score,
        }))} />
      </section>

      {/* Divider */}
      <hr className="my-8 border-t border-gray-200" />

      {/* Recent Reviews */}
      <section className="pb-10">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Discover Indo's Finest Roasters</h2>
          <p className="text-gray-600 text-xs">the hands behind your favorite beans</p>
        </div>
 
        <div className="space-y-6">
          <RoasterSlider roasters={discover_roasters.map(roaster => ({
            slug: roaster.slug,
            logo_url: roaster.logo_url,
            name: roaster.name,
            location: roaster.location
          }))} />
        </div>
      </section>
    </div>
  </main>
  )
}
