import { Avatar, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Overview() {
  return (
    <div className="py-3 overflow-hidden">
      <div>
        <h1 className="text-lightBlue font-bold tracking-widest text-lg">
          Discover therapists
        </h1>
        <p className="text-black text-sm tracking-wide font-light">
          Get connected to professional private therapist sessions
        </p>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-4 my-4 overflow-hidden">
        <Discover />
        <Discover />
        <Discover />
        <Discover />

        <Discover />
        <Discover />
        <Discover />
        <Discover />
        <Discover />
        <Discover />
        <Discover />
        <Discover />
      </div>
    </div>
  );
}

function Discover() {
  const navigate = useNavigate();

  function handleStartChat() {
    // GO TO PRIVATE CHAT WITH THE CHAT ID
    // navigate('/app/chat/:id')
    navigate("/app/chat/");
  }
  return (
    <div className="my-2">
      <div className="bg-white px-3 pb-7 w-max rounded-md my-2">
        <div className="absolute translate-y-[-1.5rem]">
          <Avatar />
        </div>

        <div className="relative translate-y-[1rem] space-y-2">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-lightBlue tracking-wider">
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

export default Overview;
