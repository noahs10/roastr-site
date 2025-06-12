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
  roastr_summary: string
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

export async function fetchBeanBySlug(slug: string) {
  const supabase = await createClient()

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
      roastr_summary,
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
    .eq('slug', slug)
    .maybeSingle() // ✅ safer than .single()
  if (error) {
    console.error('Error fetching bean by slug:', error.message)
    return null
  }

  if (!data) {
  return null
}
  return {
  ...data,
  roaster: Array.isArray(data.roaster) ? data.roaster[0] ?? null : data.roaster,
}
}