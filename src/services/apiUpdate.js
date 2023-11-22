import supabase from "./Supabase";

export async function createUpdate({ newDetails }) {
  const { data: details, error } = await supabase
    .from("details")
    .insert([{ ...newDetails }]);

  if (error) {
    console.error(error);
    throw new Error("Could not create details ");
  }
  return details;
}
