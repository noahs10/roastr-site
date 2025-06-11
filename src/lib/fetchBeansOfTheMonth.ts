import { createClient } from '../utils/supabase/server'

export type Bean = {
  id: string
  name: string
  slug: string
  image_url: string
  origin: string
  variety: string
  process: string
  roast_profile: string
  taste_profile: string
  average_score: number
  ratings_count: number
  roaster: {
    id: string
    name: string
    logo_url: string
  } | null
  brew_logs: {
    id: string
    user_id: string
    score: number
    content: string
    created_at: string
  }[]
}

export async function fetchBeansofTheMonth(): Promise<Bean[]> {
  const supabase = await createClient() // ✅ await because your version is async

  const { data, error } = await supabase
    .from('beans')
    .select(`
      id,
      name,
      slug,
      image_url,
      origin,
      variety,
      process,
      roast_profile,
      taste_profile,
      average_score,
      ratings_count,
      roaster:roaster_id (
        id,
        name,
        logo_url
      ),
      brew_logs (
        id,
        user_id,
        score,
        content,
        created_at
      )
    `)

  if (error) {
    console.error('Supabase fetch error:', error.message)
    return []
  }

  return (data ?? []).map((bean: any) => ({
    ...bean,
    roaster_id: bean.roaster_id,
  }))
}
