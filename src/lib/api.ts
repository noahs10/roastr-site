import { supabase } from "./supabaseClient";

export type Bean = {
  slug: string;
  image: string;
  roaster: string;
  name: string;
  score: number;
  ratings: number;
  description: string;
  origin?: string;
  variety?: string;
  elevation?: string;
  process?: string;
  tasteProfile?: string[];
};

export type Review = {
  id: number;
  bean_slug: string;
  emoji: string;
  title: string;
  content: string;
  user: string;
  roaster?: string;
  bean?: string;
  slug?: string;
};

export async function getBeans() {
  const { data, error } = await supabase
    .from("beans")
    .select("*")
    .order("score", { ascending: false });

  if (error) throw error;
  return data as Bean[];
}

export async function getBeanBySlug(slug: string) {
  const { data, error } = await supabase
    .from("beans")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw error;
  return data as Bean;
}

export async function getReviewsForBean(slug: string) {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("bean_slug", slug)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as Review[];
}

export async function getRecentReviews(limit = 5) {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data as Review[];
}
