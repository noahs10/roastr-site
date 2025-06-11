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

export async function fetchRecentBrewLogs(limit = 5): Promise<BrewLog[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('brew_logs')
    .select(`
      id,
      user_id,
      score,
      content,
      created_at,
      bean:bean_id (
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

  if (error || !data) {
    console.error('Error fetching brew logs:', error?.message)
    return []
  }

  // Type-safe normalization
  const logs: BrewLog[] = data.map((log) => {
    // Ensure bean is an object, not an array
    const beanRaw = log.bean;
    const beanObj = Array.isArray(beanRaw) ? beanRaw[0] : beanRaw;

    const bean = beanObj
      ? {
          ...beanObj,
          roaster: Array.isArray(beanObj.roaster)
            ? beanObj.roaster[0] ?? null
            : beanObj.roaster ?? null,
        }
      : null;

    return {
      id: log.id,
      user_id: log.user_id,
      content: log.content,
      score: log.score,
      created_at: log.created_at,
      bean,
    };
  })

  return logs
}
