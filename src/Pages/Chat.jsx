import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Chats } from "../features/chat/Chats";
import { ChatBox } from "../features/chat/ChatBox";
import { useState } from "react";

function Chat() {
  const navigate = useNavigate();
  const [showSide, setShowSide] = useState(true);

  function handleSHowside() {
    setShowSide(!showSide);
    console.log(showSide);
  }
  return (
    <div className="my-3 px-3 h-screen sm:h-90vh">
      <h1 className="flex items-center gap-2 text-lg sm:text-sm cursor-pointer">
        <ArrowLeft onClick={() => navigate(-1)} />
        <span onClick={handleSHowside}>Chats</span>
      </h1>

      <div className="block sm:flex md:grid md:grid-cols-[auto_1fr] space-x-5 md:h-[calc(90vh-3rem)] transition-all duration-300 mt-4">
        <Chats handleSHowside={handleSHowside} showSide={showSide} />
        <ChatBox />
      </div>
    </div>
  );
}

export default Chat;
