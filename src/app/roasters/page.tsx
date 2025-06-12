import { Breadcrumbs } from '@/components/Breadcrumbs'
import RoasterCard from '@/components/RoasterCard'
import { fetchAllRoasters } from '@/lib/fetchAllRoasters'

export const metadata = {
  title: 'All Roasters | roastr',
}

export default async function RoastersPage() {
  const roasters = await fetchAllRoasters()

  return (
    <main className="max-w-screen-lg mx-auto px-4 sm:px-6 pt-20 space-y-6">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Roasters' }]} />
      <h1 className="text-2xl font-semibold">Roasters</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {roasters.map((roaster) => (
          <RoasterCard key={roaster.id} {...roaster} />
        ))}
      </div>
    </main>
  )
}