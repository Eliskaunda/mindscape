import { useRef } from "react";
import { useForm } from "react-hook-form";

function Signup() {
  const { emailRef, passwordRef } = useRef();

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <section className="mx-auto h-screen bg-red-600">
      <h1>Signup here</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="userName">Fullname</label>
          <input type="text" placeholder="John Doe" />
        </div>

        <div>
          <label htmlFor="email" ref={emailRef}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              min: {
                message: "Enter email address",
              },
            })}
          />
        </div>

        <div>
          <label htmlFor="password" ref={passwordRef}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              min: {
                message: "Password must be atleast 6 characters long",
              },
            })}
          />
        </div>
      </form>
    </section>
  );
}

export default Signup;
