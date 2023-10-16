import { Avatar, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Discover() {
  const navigate = useNavigate();

  function handleStartChat() {
    // GO TO PRIVATE CHAT WITH THE CHAT ID
    // navigate('/app/chat/:id')
    navigate("/chat");
  }
  return (
    <div className="my-2">
      <div className="bg-grey px-3 pb-7 w-[12rem] h-max rounded-md my-2 ">
        <div className="absolute translate-y-[-1.5rem]">
          <Avatar />
        </div>

        {/* <div className="relative translate-y-[1rem] space-y-2"> */}
        <div className="flex flex-col justify-between relative top-6 gap-3">
          <div className="space-y-1 border-b-2 p-b-1">
            <h2 className="text-base font-semibold text-lightBlue tracking-wider">
              Allison Nderitu
            </h2>

            <h3 className="text-black text-sm font-bold tracking-wider">
              Psychologist
            </h3>

            <h5 className="text-black font-light text-xs tracking-widest">
              Redcross
            </h5>
          </div>

          <Stack direction="row" spacing={1}>
            <Avatar />
            <Avatar />
            <Avatar />
          </Stack>

          <button
            className="border border-lightBlue rounded-md text-lightBlue px-2 py-1 my-3"
            onClick={handleStartChat}
          >
            Talk to Allison
          </button>
        </div>
      </div>
    </div>
  );
}
