import { createClient } from "@/utils/supabase/server";

export type Roaster = {
  id: string;
  name: string;
  slug: string;
  logo_url: string;
  location?: string | null;
  description?: string | null;
};

export async function fetchDiscoverRoasters(): Promise<Roaster[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("roaster")
    .select("id, name, slug, logo_url, location, description")
    .order("name", { ascending: true })
    .limit(5);

  if (error) {
    console.error("Error fetching discover roasters:", error);
    return [];
  }

  return data || [];
}   