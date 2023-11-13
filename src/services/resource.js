import supabase from "./Supabase";

export async function getResources() {
  const { data: resources, error } = await supabase
    .from("resources")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Resource not found");
  }

  return resources;
}
