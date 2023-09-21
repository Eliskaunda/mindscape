import { Avatar } from "@mui/material";
import { ArrowLeft, ThreeDots, Send } from "react-bootstrap-icons";
import { CheckAll } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function Chat() {
  const navigate = useNavigate();
  return (
    <div className="my-3 px-3 overflow-hidden ">
      <h1 className="flex items-center gap-2 text-lg sm:text-lg">
        <ArrowLeft onClick={() => navigate(-1)} />
        <span>Chat</span>
      </h1>

      <div className="block sm:flex md:grid md:grid-cols-[auto_1fr] space-x-5 h-full">
        <Chats />
        <ChatContainer navigate={navigate} />
      </div>
    </div>
  );
}

function ChatContainer({ navigate }) {
  return (
    <div className="my-3 flex-grow overflow-y-auto w-full h-full">
      {/* CHAT TITLE */}
      <div
        className="flex items-center justify-between gap-4 px-2 py-3 border border-white"
        onClick={() => navigate("/app/profile")}
      >
        <Avatar />
        <div className="flex flex-col">
          <h1 className="text-lightBlue font-bold tracking-widest text-lg">
            Allison Nderitu
          </h1>
          <p className="tracking-wider text-sm text-black font-medium">
            Psychologist
          </p>
        </div>
        <ThreeDots className="text-xl" />
      </div>

      {/* CHAT SPACE */}
      <div className="flex flex-col justify-between w-full ">
        <div className="flex flex-col space-y-5 p-4">
          <div className="self-end bg-lightBlue text-white rounded-lg p-2 flex items-center">
            <p className="text-lg tracking-wider">I HAVE SENT THIS</p>
          </div>

          <div className="self-start bg-white p-2 rounded-lg flex items-center">
            <p className="text-lg tracking-wider">He has Sent this</p>
          </div>
        </div>

        <form className="my-3 py-2 px-3 w-full flex items-center bg-white rounded-lg ">
          <input
            type="text"
            className="bg-transparent w-full rounded-md text-black tracking-wider text-lg focus:outline-none "
          />
          <Send />
        </form>
      </div>
    </div>
  );
}

function Chats() {
  return (
    <div className="hidden sm:block my-4">
      <form className=" mb-4 flex items-center gap-3 w-full text-black">
        <input
          type="text"
          placeholder="Search Chat"
          className="text-black tracking-wide placeholder:text-black px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange rounded-lg w-40 focus:w-60 transition-all duration-300"
        />
        <button className="bg-blue text-white px-3 py-2 rounded-lg">
          {" "}
          Search
        </button>
      </form>

      <div className="my-2">
        <div className="flex items-start gap-3 rounded-md bg-white py-2 px-3">
          <Avatar />

          <div className="flex flex-col gap-2">
            <h1 className="text-lightBlue font-bold text-lg tracking-wider">
              Edwin Ndemo
            </h1>
            <p className="text-black font-medium text-sm tracking-wide flex flex-wrap">
              <span>I was to meet you yesterday but you did not show.</span>
              <CheckAll />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
