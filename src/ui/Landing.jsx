import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex items-center justify-around h-2/3 py-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="w-1/2 flex flex-col items-start gap-5">
        <h1 className="text-3xl text-white font-bold  uppercase">
          Get psychological support to help you heal mentally
        </h1>

        {/* IF LOGGED  IN THEN GO TO CHATS PAGE IF NOT OPEN LOGIN FORM*/}
        <Link
          to="/chats"
          className="bg-orange px-3 py-2 rounded-full text-white capitalize font-medium"
        >
          Get started
        </Link>
      </div>

      <img src="/land.svg" alt="" className="w-1/3" />
    </div>
  );
}

export default Landing;
