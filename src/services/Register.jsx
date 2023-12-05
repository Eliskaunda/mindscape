import { useState } from "react";
import supabase from "./Supabase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const [phone, setPhone] = useState("");

  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message === "Email already in use") {
          console.error("This email is already in use");
        } else {
          console.error(error.message);
        }
        throw new Error("Account could not be created.");
      }
      navigate("/dashboard");

      return user, error;
    } else {
      const { user, error } = await supabase.auth.signUp({
        email,
        phone,
        password,
        options: {
          data: {
            full_name: name,
            role,
          },
        },
      });

      navigate("/dashboard");
      //   toast.success("Check user to verify ")
      console.log(user);
      if (error) {
        if (error.message === "Email already in use") {
          console.error("This email is already in use");
        } else {
          console.error(error.message);
        }
        throw new Error("Account could not be created.");
      }
      return user, error;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-black shadow-md w-1/2 grid place-item-center rounded px-8 pt-6 pb-8 mb-4 mx-auto my-2"
    >
      {!isLogin && (
        <div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="+2541234567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Select Role
            </label>
            <select
              name="role"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /> */}
          </div>
        </div>
      )}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between">
        {/* {error && <p>{error.message}</p>} */}
        <button
          className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {isLogin ? "Log In" : "Sign Up"}
        </button>
        <button
          className="text-sm text-blue-500 hover:text-blue-700 whitespace-no-wrap"
          type="button"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign Up instead" : "Log In instead"}
        </button>
      </div>
    </form>
  );
};

export default Register;
