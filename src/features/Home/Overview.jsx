import { Avatar, Stack } from "@mui/material";
import { ArrowRight } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

function Overview() {
  return (
    <div className="py-3 px-10 overflow-hidden">
      <div>
        <h1 className="text-lightBlue font-bold tracking-widest text-lg">
          Discover therapists
        </h1>
        <p className="text-black text-sm tracking-wide font-light">
          Get connected to professional private therapist sessions
        </p>
      </div>
      {/* DISCOVER DOCTORS */}
      <div className="flex gap-6 flex-wrap flex-1 justify-center sm:justify-normal my-3">
        <Discover />
        <Discover />
        <Discover />
        <Discover />
        <Discover />
        <Discover />
      </div>

      {/* FRIENDS */}
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-lightBlue font-bold tracking-widest text-lg">
            Discover friends
          </h1>

          <Link to="/chat" className="flex items-center gap-2">
            <p>View friends</p>
            <ArrowRight style={{ color: "black" }} />
          </Link>
        </div>

        <div className="flex gap-6 flex-wrap flex-1 justify-center sm:justify-normal ">
          <AddFriend />
          <OpenFriend />
          <AddFriend />
          <OpenFriend />
          <AddFriend />
          <OpenFriend />
        </div>
      </div>
    </div>
  );
}

function Discover() {
  const navigate = useNavigate();

  function handleStartChat() {
    // GO TO PRIVATE CHAT WITH THE CHAT ID
    // navigate('/app/chat/:id')
    navigate("/chat");
  }
  return (
    <div className="my-2">
      <div className="bg-white px-3 pb-7 w-[11rem] h-52 rounded-md my-2 ">
        <div className="absolute translate-y-[-1.5rem]">
          <Avatar />
        </div>

        {/* <div className="relative translate-y-[1rem] space-y-2"> */}
        <div className="flex flex-col justify-between relative top-6 gap-3">
          <div className="space-y-1">
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

function AddFriend() {
  return (
    <div className="flex flex-col justify-between items center bg-white pt-4 px-4 h-52 w-[11rem] rounded-md mt-4">
      <div className="w-full flex flex-col items-center gap-6">
        <Avatar style={{ width: 55, height: 55 }} />
        <div className="flex flex-col items-center">
          <h1 className="text-lightBlue tracking-wide font-medium text-base">
            Joseph Kangethe
          </h1>
          <p className="text-sm">Naivasha</p>
        </div>
      </div>
      <button className="outline-none border border-b-orange py-1">
        Add friend
      </button>
    </div>
  );
}

function OpenFriend() {
  return (
    <div className="flex flex-col justify-between items center bg-white pt-4 px-4 h-52 w-[11rem] rounded-md mt-4">
      <div className="w-full flex flex-col items-center gap-6">
        <Avatar style={{ width: 55, height: 55 }} />
        <div className="flex flex-col items-center">
          <h1 className="text-lightBlue tracking-wide font-medium text-base">
            Joseph Kangethe
          </h1>
          <p className="text-sm">Naivasha</p>
        </div>
      </div>
      <button className="outline-none border border-b-lightBlue py-1">
        Friends
      </button>
    </div>
  );
}

export default Overview;
