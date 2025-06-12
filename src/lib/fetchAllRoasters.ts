import { createClient } from '../utils/supabase/server'

export type RoasterListItem = {
  id: string
  slug: string
  name: string
  logo_url: string
  location: string | null
}

export async function fetchAllRoasters(): Promise<RoasterListItem[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('roaster')
    .select('id, slug, name, logo_url, location')
    .order('name', { ascending: true })

  if (error || !data) {
    console.error('Error fetching roasters:', error?.message)
    return []
  }

  return data as RoasterListItem[]
}