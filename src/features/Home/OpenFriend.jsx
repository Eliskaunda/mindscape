import { Avatar } from "@mui/material";

export function OpenFriend() {
  return (
    <div className="flex flex-col justify-between items center bg-grey pt-4 px-4 h-52 w-[11rem] rounded-md mt-4">
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
