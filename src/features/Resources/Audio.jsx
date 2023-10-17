import { Search } from "react-bootstrap-icons";
import { AudioCard } from "./AudioCard";

export default function Audio() {
  return (
    <div>
      <div className="space-y-2">
        <h1>Listen to Podcasts to help you heal</h1>
        <form
          action=""
          className="border border-grey rounded-md w-[18rem] px-3 py-2 flex items-center"
        >
          <input
            type="text"
            placeholder="search for Podcast"
            className=" w-full focus:outline-none text-black"
          />
          <div className="text-lightBlue">
            <Search />
          </div>
        </form>
      </div>

      <div>
        <AudioCard />
        <AudioCard />
        <AudioCard />
        <AudioCard />
      </div>
    </div>
  );
}
