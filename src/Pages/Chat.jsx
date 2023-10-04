import {
  ArrowLeft,
  File,
  Paperclip,
  Send,
  ThreeDots,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Chats } from "../features/chat/Chats";
import { ChatBox, Messages } from "../features/chat/ChatBox";
import { useState } from "react";
import { ChatMessage } from "./../features/chat/ChatMessage";
import { Avatar } from "@mui/material";

function Chat() {
  // const navigate = useNavigate();
  // const [showSide, setShowSide] = useState(true);

  // function handleSHowside() {
  //   setShowSide(!showSide);
  //   console.log(showSide);
  // }
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-[40%_60%] sm:grid-cols-[auto_1fr]  overflow-hidden">
        <div className=" border-r-2 border-lightBlue">
          <ChatMessage />
        </div>

        <div className="relative">
          {/* CHAT HEADER SECTION */}
          <div className="flex items-center justify-between px-3 border-b-2 border-lightBlue py-2 fixed top-[5rem] z-10">
            <div className="flex items-center gap-2">
              <ArrowLeft />
              <Avatar />
              <h1>Allison maina</h1>
            </div>
            <ThreeDots />
          </div>

          <div className="sm:min-h-[81vh] min-h-screen flex flex-col justify-between ">
            <div className="flex-grow p-4 relative w-full  border-b border-gray-200 flex flex-col overflow-y-scroll ">
              {/* Display chat messages here */}
              <Sentmessage />
              <ReceivedMessage />
              <Sentmessage />
              <ReceivedMessage />
              <Sentmessage />
              <ReceivedMessage />
              <Sentmessage />
              <ReceivedMessage />
            </div>
            {/* <form className="flex items-center gap-2 bg-green rounded-md w-full px-3  py-2"> */}
            <form className="flex items-center gap-2 px-2">
              <Paperclip className="text-lg" />
              <input
                type="text"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <Send className="text-lg" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;

function Sentmessage() {
  return (
    <div className="self-end bg-lightBlue text-white rounded-lg p-2 m-1 flex items-center  w-1/2">
      <p className="text-sm sm:text-sm tracking-wider">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

function ReceivedMessage() {
  return (
    <div className="self-start bg-white  rounded-lg flex items-center w-1/2">
      <p className="text-sm sm:text-sm  p-2 tracking-wider">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
        laborum sed voluptatum at. Praesentium labore, neque beatae, placeat
        laudantium doloribus sunt molestiae incidunt officiis debitis quis
        laboriosam quaerat, asperiores vitae?
      </p>
    </div>
  );
}
