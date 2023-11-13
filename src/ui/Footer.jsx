import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-grey border-t border-black flex items-center justify-between px-4 py-5">
      <div>
        <h1>Mindscape</h1>
        <p>Join a vibrant community of mental health champions</p>
      </div>
      <nav>
        <ul>
          <h2>Company</h2>
          <Link>About</Link>
        </ul>
      </nav>
      <div></div>
      <div>
        <form
          action=""
          className="flex flex-col items-center focus:outline-none "
        >
          <label htmlFor="">Subscribe to get updates</label>
          <input
            type="email"
            placeholder="Enter your email"
            className=" px-3 py-2 focus:outline-none rounded-md focus:border-black text-sm"
          />
        </form>
      </div>
    </footer>
  );
}
