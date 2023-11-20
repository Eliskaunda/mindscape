import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { Eye, EyeSlash, Google } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoginAccount } from "../../services/user";
import { toast } from "react-hot-toast";
import InputField from "./../../ui/InputField";

export default function Login() {
  const [showPswd, setShowPswd] = useState(false);
  const { emailRef, passwordRef } = useRef();

  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const {
    mutate: creatingUser,
    isLoading: isCreating,
    isError,
  } = useMutation({
    mutationFn: LoginAccount,
    onSuccess: () => {
      toast.success("Login succesful");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      reset();
    },

    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data, isError) {
    if (!isError) {
      creatingUser(data);
      navigate("/dashboard");
    }

    if (isError) {
      // alert(error);
      (err) => toast.error(err.message);
      navigate("/login");
    }
  }

  function onError(error) {
    console.log(error);
  }

  function handleShowPswd() {
    setShowPswd(!showPswd);
  }

  if (isCreating) return <p>Loading</p>;
  return (
    <form
      className="w-2/3 mx-auto rounded"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <h1 className="text-lg font-bold">Log in to your Account</h1>
      <div className="bg-grey px-3 py-6 w-full">
        <div className="flex flex-col justify-around gap-4">
          {/* EMAIL */}
          <div className="flex flex-col gap-4">
            <label className="text-black" htmlFor="email" ref={emailRef}>
              Email
            </label>

            <InputField error={errors?.email?.message}>
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: "This field is required",
                  min: {
                    message: "Enter your email",
                  },
                })}
                className="border border-grey rounded-md px-2 py-1 focus:outline-none w-64"
                disabled={isCreating}
              />
            </InputField>
            <p>{isError}</p>
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col gap-4">
            <label className="text-black" htmlFor="email" ref={passwordRef}>
              Password
            </label>
            <div className="flex items-center border border-grey rounded-md pl-1">
              <InputField error={errors?.password?.message}>
                <div className="flex items-center gap-1 bg-white pr-2">
                  <input
                    type={showPswd ? "text" : "password"}
                    name="password"
                    id="password"
                    {...register("password", {
                      required: "Enter password",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long.",
                      },
                    })}
                    className="bg-inherit px-2 py-1 focus:outline-none w-[15rem]"
                  />
                  {showPswd ? (
                    <EyeSlash onClick={handleShowPswd} />
                  ) : (
                    <Eye onClick={handleShowPswd} />
                  )}
                </div>
              </InputField>
            </div>
          </div>
        </div>

        <p className="py-4 text-sm">
          Don&apos;t have an account?
          <Link to="/register" className="border-b border-orange text-maroon ">
            Signup
          </Link>
        </p>
      </div>

      <div className="flex items-center gap-3 my-4 pl-6">
        <button className="bg-blue rounded-lg text-white b px-3 py-2 w-24">
          Login
        </button>
        <p>or</p>
        <button className="flex items-center gap-2 bg-lightBlue px-3 py-2 rounded-md w-[7rem]">
          <div className="text-black">
            <Google />
          </div>
          <span className="text-white">Google</span>
        </button>
      </div>
    </form>
  );
}
