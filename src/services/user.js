import supabase from "./Supabase";

export async function createAccount({
  password,
  email,
  phone,
  firstName,
  lastName,
  location,
}) {
  const { data: userData, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        firstName,
        lastName,
        phone,
        location,
      },
    },
  });

  if (error) {
    if (error.message === "Email already in use") {
      console.error("This email is already in use");
    } else {
      console.error(error.message);
    }
    throw new Error("Account could not be created.");
  }

  return userData;
}

export async function LoginAccount({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    alert(error);
    throw new Error("Email or password is incorrect try again");
  }

  return data, error;
}

export async function getUser() {
  const { data: details, error } = await supabase.from("details").select("*");

  if (error) {
    console.error(error);
    throw new Error("Couldn't get user details");
  }

  return details;
}
