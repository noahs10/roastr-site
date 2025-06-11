import { createClient } from '../utils/supabase/server'

export type SearchBean = {
  id: string
  slug: string
  name: string
  image_url: string
  average_score: number | null
  ratings_count: number | null
  roaster: {
    name: string
  } | null
}

export async function searchBeans(query: string, limit = 10): Promise<SearchBean[]> {
  const supabase = await createClient()

  if (!query) return []

  const { data, error } = await supabase
    .from('beans')
    .select(
      `id, slug, name, image_url, average_score, ratings_count, roaster:roaster_id(name)`
    )
    .or(`name.ilike.%${query}%, roaster.name.ilike.%${query}%`)
    .limit(limit)

  if (error || !data) {
    console.error('Error searching beans:', error?.message)
    return []
  }

  return data.map((bean) => ({
    ...bean,
    roaster: Array.isArray(bean.roaster) ? bean.roaster[0] ?? null : bean.roaster,
  })) as SearchBean[]
}
