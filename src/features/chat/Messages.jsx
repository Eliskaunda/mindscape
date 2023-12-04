import { Avatar } from "@mui/material";

function Messages({ userName, setUsername, room, setRoom, socket }) {
  function joinRoom() {
    if (room !== "" && userName !== "") {
      socket.emit("join_room", { userName, room });
    }
  }

  return (
    <div className="col-start-1 col-end-2 w-full absolute left-0 px-2 py-1 flex flex-col gap-6 ">
      <h1 className="font-semibold text-lg">Messages</h1>

      <div className="">
        <input
          type="text"
          placeholder="search user"
          className="py-2 px-1 border w-full"
        />
      </div>

      <div className="border-b  flex gap-3" onClick={joinRoom}>
        <Avatar style={{ width: 32, height: 32 }} />
        <div className="flex flex-col">
          <h1>{userName}</h1>
          <p className="font-light text-sm">Hello denis...</p>
        </div>
      </div>
    </div>
  );
}

export default Messages;
