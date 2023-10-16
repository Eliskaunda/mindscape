export function ChatBox() {
  return (
    <div>
      <p>Message</p>
      {/* <Messages /> */}
    </div>
  );
}

export function Messages() {
  return (
    <>
      <SentMessage />
      <ReceivedMessage />
      <SentMessage />
      <ReceivedMessage />
    </>
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

{
  /* <>
      <div className="flex flex-col justify-between w-full h-full">
        <div>
          <div
            className="flex items-center justify-between gap-4 px-1 py-2 border border-white"
            onClick={() => navigate("/profile")}
          >
            <Avatar />
            <div className="flex flex-col">
              <h1 className="text-lightBlue font-bold tracking-widest text-lg sm:text-sm ">
                Allison Nderitu
              </h1>
              <p className="tracking-wider text-sm sm:text-xs text-black font-medium">
                Psychologist
              </p>
            </div>
            <ThreeDots className="text-xl" />
          </div>

          
        </div>

        <div>
          <form className="bg-white flex items-center px-3 py-2 rounded-md relative my-2">
            <input
              type="text"
              placeholder="Message"
              className="bg-transparent w-full text-black tracking-wider outline-none text-sm placeholder:text-black px-2 py-3 h-max flex flex-wrap "
            />
            <Send className="text-orange text-xl" />
          </form>
        </div>
      </div>
    </> */
}
