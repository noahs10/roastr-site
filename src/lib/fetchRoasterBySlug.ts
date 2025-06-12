import { createClient } from '../utils/supabase/server'

export type RoasterBean = {
  slug: string
  name: string
  image_url: string
  average_score: number | null
  ratings_count: number | null
}

export type Roaster = {
  id: string
  slug: string
  name: string
  location: string | null
  description: string | null
  logo_url: string
  beans: RoasterBean[]
}

export async function fetchRoasterBySlug(slug: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('roasters')
    .select(`
      id,
      slug,
      name,
      location,
      description,
      logo_url,
      beans:beans(
        slug,
        name,
        image_url,
        average_score,
        ratings_count
      )
    `)
    .eq('slug', slug)
    .maybeSingle()

  if (error) {
    console.error('Error fetching roaster by slug:', error.message)
    return null
  }

  if (!data) {
    return null
  }

  return {
    ...data,
    beans: Array.isArray(data.beans) ? data.beans : []
  } as Roaster
}
