import { useEffect, useState } from "react";
import supabase from "../services/Supabase";
import { io } from "socket.io-client";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    getMessages();
    connectToSocket();
  }, []);

  async function getMessages() {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) console.log("Error: ", error);
    else setMessages(data);
  }

  async function connectToSocket() {
    const socket = io.connect("http://localhost:3000");

    socket.on("messages", async (message) => {
      await getMessages();
    });
  }

  async function sendMessage(e) {
    e.preventDefault();

    if (!content) return;

    const message = {
      content: content,
      user_id: user.id,
    };

    const { data, error } = await supabase.from("messages").insert([message]);

    if (error) console.log("Error: ", error);
    else {
      setContent("");
      await getMessages();
    }
  }

  async function signIn() {
    async function signIn() {
      const { user, error } = await supabase.auth.signIn({
        email: "user@example.com",
        password: "userpassword",
      });

      if (error) console.log("Error: ", error);
      else setUser(user);
    }

    if (error) console.log("Error: ", error);
    else setUser(user);
  }

  return (
    <div className="flex w-full h-[90vh]">
      <div className="w-[18rem] bg-red-900">Messages</div>

      <div className="w-full ">
        <header className="px-2 py-3 bg-slate-600 ">Header</header>

        <div className="flex flex-col justify-between h-[80vh]">
          <div className="h-full overflow-y-scroll flex flex-col">
            {messages.map((message, index) => (
              <div key={index}>
                <p>{message.content}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2 px-2">
            <form onSubmit={sendMessage}>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter message here"
                className="border 
                border-black rounded-md w-full py-2 px-1 placeholder:text-black focus:outline-none"
              />
              <button
                className="border p-2 rounded-md bg-black text-white font-bold"
                type="submit"
              >
                send
              </button>
            </form>
            {/* {user ? (
              <form onSubmit={sendMessage}>
                <input
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter message here"
                  className="border 
                border-black rounded-md w-full py-2 px-1 placeholder:text-black focus:outline-none"
                />
                <button
                  className="border p-2 rounded-md bg-black text-white font-bold"
                  type="submit"
                >
                  send
                </button>
              </form>
            ) : (
              <button
                className="border p-2 rounded-md bg-grey font-bold"
                onClick={signIn}
              >
                Sign In
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
