import { Send } from "react-bootstrap-icons";

export default function Chat() {
  return (
    <div className="h-[91vh] relative top-0 translate-y-0 grid grid-cols-[auto_75vw]">
      <div className="absolute left-0">Messages</div>

      <div className="border-l-2 h-full absolute left-[25vw]   place-content-end">
        <div className="p-3 flex flex-col h-full  overflow-y-scroll">
          <Messages />
        </div>
        <form
          action=""
          className="absolute bottom-0 w-full px-4 py-6 bg-lightBlue flex items-center gap-1  "
        >
          <input
            type="text"
            placeholder="type here"
            className="bg-white w-full px-3 py-2 rounded-lg focus:outline-none text-black"
          />
          <Send style={{ fontSize: 20 }} />
        </form>
      </div>
    </div>
  );
}

function Messages() {
  return (
    <>
      <SentMessage />
      <ReceivedMessage />
      <SentMessage />
      <ReceivedMessage />
      <SentMessage />
      <ReceivedMessage />
    </>
  );
}

function ReceivedMessage() {
  return (
    <div className="self-start bg-grey  rounded-lg flex items-center w-1/2">
      <p className="text-sm sm:text-sm  p-2 tracking-wider">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
        laborum sed voluptatum at. Praesentium labore, neque beatae, placeat
        laudantium doloribus sunt molestiae incidunt officiis debitis quis
        laboriosam quaerat, asperiores vitae?
      </p>
    </div>
  );
}

function SentMessage() {
  return (
    <div className="self-end bg-lightBlue text-white rounded-lg p-2 m-1 flex items-center  w-1/2">
      <p className="text-sm sm:text-sm tracking-wider">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </div>
  );
}
