import { supabase } from "@/lib/supabase/client";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function deleteProduct(id: number) {
  return supabase.from("products").delete().eq("id", id);
}
