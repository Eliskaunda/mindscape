import supabase from "./Supabase";

export async function sendMessage(content, user_id) {
  let { data, error } = await supabase
    .from("messages")
    .insert([{ content: content, user_id: user_id }]);

  if (error) console.log("Error: ", error);
  else console.log("Success: ", data);
}

export async function receiveMessages() {
  let { data, error } = await supabase.from("messages").select("*");

  if (error) console.log("Error: ", error);
  else console.log("Success: ", data);
}
