import { beans } from '@/data/beans'
import { createClient } from '../utils/supabase/server'

export type BrewLog = {
  id: string
  user_id: string
  content: string
  score: number | string
  created_at: string
  bean: {
    slug: string
    name: string
    image_url: string
    average_score?: number
    ratings_count?: number
    roaster: {
      name: string
    } | null
  } | null
}

export async function fetchRecentBrewLogs(limit = 2): Promise<BrewLog[]> {
  const supabase = await createClient() // ✅ await because your version is async

  const { data, error } = await supabase
    .from('brew_logs')
    .select(`
      id,
      user_id,
      score,
      content,
      created_at,
      beans (
        slug,
        name,
        image_url,
        average_score,
        ratings_count,
        roaster:roaster_id (
          name
        )
      )
    `)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching brew logs:', error.message)
    return []
  }

  return (data ?? []).map((bean: any) => ({
    ...bean,
    bean: Array.isArray(bean.beans) ? bean.beans[0] ?? null : bean.beans,
  }))
}
