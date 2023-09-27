import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Chats } from "./Chats";
import { ChatBox } from "./ChatBox";

function Chat() {
  const navigate = useNavigate();
  return (
    <div className="my-3 px-3 h-screen sm:h-90vh">
      <h1 className="flex items-center gap-2 text-lg sm:text-sm">
        <ArrowLeft onClick={() => navigate(-1)} />
        <span>Chat</span>
      </h1>

      <div className="block sm:flex md:grid md:grid-cols-[auto_1fr] space-x-5 h-[calc(90vh-3rem)] ">
        <Chats />
        <ChatBox />
      </div>
    </div>
  );
}

export default Chat;
