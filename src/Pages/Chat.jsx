import { Avatar } from "@mui/material";
import { ChevronLeft, Plus, Send } from "react-bootstrap-icons";
import Messages from "../features/chat/Messages";
import { ReceivedMessage } from "../features/chat/ReceivedMessage";
import { SentMessage } from "../features/chat/SentMessage";
import { useState } from "react";

import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

export default function Chat() {
  const [userName, setUsername] = useState("");
  const [room, setRoom] = useState("");

  function handleAddFile() {
    <input type="file" name="" id="" />;
  }

  return (
    <div className="h-[91vh] relative top-0 translate-y-0 grid grid-cols-[auto_30vw] sm:grid-cols-[auto_75vw] ">
      {/* ON SMALL SCREEN THE MESSAGE COMPONENT WILL BE A DRAWER COMPONENT */}
      <Messages
        userName={userName}
        setUsername={setUsername}
        room={room}
        setRoom={setRoom}
        socket={socket}
      />

      <div className="border-l-2 h-full absolute left-[25vw]   place-content-end">
        <div className="bg-grey px-3 py-5 fixed w-[73vw]">
          <div className="flex items-center gap-4">
            <ChevronLeft />
            <div className="flex items-end gap-2">
              <Avatar style={{ width: 30, height: 30 }} />
              <h1 className="text-black font-semibold">Allison Nderitu</h1>
            </div>
          </div>
        </div>
        <div className="p-3 flex flex-col h-full overflow-y-scroll mb-3">
          <ChatRoom />
        </div>
        <form
          action=""
          className="absolute bottom-0 w-full px-4 py-5 bg-lightBlue flex items-center gap-1  "
        >
          <Plus onClick={handleAddFile} style={{ fontSize: "2rem" }} />
          <input
            type="text"
            placeholder="Type here"
            className="bg-white w-full px-3 py-2 rounded-lg focus:outline-none text-black"
          />
          <Send style={{ fontSize: 20 }} />
        </form>
      </div>
    </div>
  );
}

function ChatRoom() {
  return (
    <>
      <SentMessage />
      <ReceivedMessage />
      <SentMessage />
      <ReceivedMessage />
      <SentMessage />
      <ReceivedMessage />
      <SentMessage />
      <ReceivedMessage />
    </>
  );
}
