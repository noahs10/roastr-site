import { supabase } from "./supabaseClient";

export type Bean = {
  id: number;
  created_at: string;
  name: string;
  slug: string;
  roaster_id: number;
  image_url: string;
  origin?: string | null;
  variety?: string | null;
  process?: string | null;
  roast_profile?: string | null;
  taste_profile?: string[] | null;
  roaster_name?: string | null;
};

export type BrewLog = {
  id: number;
  user_id: string;
  bean_id: number;
  score: number;
  content: string;
  created_at: string;
  bean_slug?: string;
  bean_name?: string;
  roaster_name?: string;
};

type BeanRow = Omit<Bean, "roaster_name"> & { roaster: { name: string } | null };
type BrewLogRow = BrewLog & { beans?: { slug: string; name: string; roaster?: { name: string } | null } };

export async function getBeans() {
  const { data, error } = await supabase
    .from("beans")
    .select(
      "id, created_at, name, slug, roaster_id, image_url, origin, variety, process, roast_profile, taste_profile, roaster:roaster_id(name)"
    )
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data as BeanRow[] | null)?.map((b) => ({
    ...b,
    roaster_name: b.roaster?.name ?? null,
  })) ?? [];
}

export async function getBeanBySlug(slug: string) {
  const { data, error } = await supabase
    .from("beans")
    .select(
      "id, created_at, name, slug, roaster_id, image_url, origin, variety, process, roast_profile, taste_profile, roaster:roaster_id(name)"
    )
    .eq("slug", slug)
    .single();

  if (error) throw error;
  if (!data) return null;
  const b = data as BeanRow;
  return { ...b, roaster_name: b.roaster?.name ?? null } as Bean;
}

export async function getBrewLogsForBean(slug: string) {
  const bean = await getBeanBySlug(slug);
  if (!bean) return [];
  const { data, error } = await supabase
    .from("brew_logs")
    .select("id, user_id, bean_id, score, content, created_at")
    .eq("bean_id", bean.id)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as BrewLog[];
}

export async function getRecentBrewLogs(limit = 5) {
  const { data, error } = await supabase
    .from("brew_logs")
    .select(
      "id, user_id, bean_id, score, content, created_at, beans!inner(slug,name, roaster:roaster_id(name))"
    )
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;
  return ((data as BrewLogRow[] | null) ?? []).map((log) => ({
    ...log,
    bean_slug: log.beans?.slug,
    bean_name: log.beans?.name,
    roaster_name: log.beans?.roaster?.name ?? null,
  }));
}
