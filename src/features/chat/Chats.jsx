import { ChatMessage } from "./ChatMessage";

export function Chats() {
  return (
    <div className="hidden sm:block my-4">
      <form className=" mb-4 flex items-center gap-3 w-full text-black">
        <input
          type="text"
          placeholder="Search Chat"
          className="text-black sm:text-sm  tracking-wide placeholder:text-black px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange rounded-lg w-40 sm:w-52 sm:focus:w-52 focus:w-60 transition-all duration-300"
        />
        <button className="bg-orange text-white sm:text-xs  px-3 py-2 rounded-lg">
          {" "}
          Search
        </button>
      </form>

      <div>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
    </div>
  );
}
