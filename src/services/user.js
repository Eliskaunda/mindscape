import supabase from "./Supabase";

export async function CreateAccount() {
  const { data, error } = await supabase.auth.signUp({
    email: "someone@email.com",
    password: "XghOIcXdfskqWAjysoTk",
  });

  if (error) {
    console.error(error);
    throw new Error("Could not create account. Try again");
  }

  return data;
}

export async function LoginAccount() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "someone@email.com",
    password: "XghOIcXdfskqWAjysoTk",
  });

  if (error) {
    console.error(error);
    throw new Error("Email/phone number or password is incorrect try again");
  }

  return data;
}
