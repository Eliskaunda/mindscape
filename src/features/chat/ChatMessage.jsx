import { Avatar } from "@mui/material";
import { CheckAll } from "react-bootstrap-icons";

export function ChatMessage() {
  return (
    <div className="my-2">
      <div className="flex items-start gap-3 rounded-md bg-white py-2 px-3">
        <Avatar />

        <div className="flex flex-col gap-2">
          <h1 className="text-lightBlue font-bold sm:text-sm  text-lg tracking-wider ">
            Edwin Ndemo
          </h1>
          <p className="text-black font-medium text-xs tracking-wide flex ">
            <span>I was to meet you yesterday but you did not show.</span>
            <CheckAll className="text-lg" />
          </p>
        </div>
      </div>
    </div>
  );
}
