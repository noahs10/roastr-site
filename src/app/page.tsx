
//import UI components
import HeroSection from "@/components/HeroSection"
import RecentBrewLogCard from "@/components/RecentBrewLogCard"
import BeansSlider from "@/components/BeansSlider"

//import functions and data
import { fetchBeansWithRelations } from '@/lib/fetchBeansOfTheMonth'
import { fetchRecentBrewLogs } from '@/lib/fetchRecentBrewLogs'

// Top Beans and Recent Reviews
export default async function Home() {
  const beans = await fetchBeansWithRelations()
  const brew_logs = await fetchRecentBrewLogs()
  
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
        }))} />
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
          {brew_logs.map((brew_log, i) => (
            <RecentBrewLogCard
            key={i}
            roaster={brew_log.beans?.roaster?.name ?? 'Unknown Roaster'}
            bean={brew_log.beans?.name ?? 'Unknown Bean'}
            slug={brew_log.beans?.slug ?? '#'}
            content={brew_log.content}
            user={brew_log.user_id}
          />
          ))}
        </div>
      </section>


    </div>
    
    
  </main>
  )
}
