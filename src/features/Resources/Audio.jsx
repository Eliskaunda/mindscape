import { Play, Search } from "react-bootstrap-icons";

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

function AudioCard() {
  return (
    <div className="flex items-center justify-between w-full md:w-1/2 py-6 px-4">
      <p>01</p>
      <img src="/headphone.jpg" alt="" className="w-16 h-16 rounded-md" />

      <div className="space-y-2">
        <h2>Mind at peace</h2>
        <p className="text-black font-light text-sm">
          Shared by: <span>Allison</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <p>03:28</p>
        <Play style={{ fontSize: "1.6rem" }} />
      </div>
    </div>
  );
}
