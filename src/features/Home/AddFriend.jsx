import { Avatar } from "@mui/material";

export function AddFriend({ detail }) {
  return (
    <div className="flex flex-col justify-between items center bg-grey pt-4 px-4 h-52 w-[12rem] rounded-md mt-4">
      <div className="w-full flex flex-col items-center gap-6">
        <Avatar style={{ width: 55, height: 55 }} />
        <div className="flex flex-col items-center">
          <h1 className="text-lightBlue tracking-wide font-medium text-base">
            {detail.firstName} {detail.lastName}
          </h1>
          <p className="text-sm">Naivasha</p>
        </div>
      </div>
      <button className="outline-none border border-b-orange py-1">
        Talk to {detail.firstName}
      </button>
    </div>
  );
}
