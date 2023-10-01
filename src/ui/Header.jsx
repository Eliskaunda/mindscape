import { Avatar, Badge } from "@mui/material";
import {
  Search,
  Bell,
  ChevronDown,
  CalendarCheck,
  FileEarmarkPlay,
} from "react-bootstrap-icons";
import { NavLink, useNavigate } from "react-router-dom";
import Popcontent from "./Popover";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-white px-3 py-2 flex items-center justify-between w-full">
      <div className="flex justify-between items-center sm:gap-8 gap-4 sm:w-1/2">
        <h1
          className="text-lg font-bold tracking-wider cursor-pointer"
          onClick={() => navigate("/")}
        >
          Mindscape
        </h1>

        <form className="bg-grey flex items-center gap-2 py-2 px-3 text-black focus:ring-1 focus:ring-orange   rounded-md">
          <Search />
          <input
            placeholder="Search"
            type="text"
            className="bg-transparent outline-none w-20 focus:w-40 focus:outline-none  text-sm font-medium duration-300 transition-all"
          />
        </form>
      </div>

      <Actions />
    </header>
  );
}

function Actions() {
  const navigate = useNavigate();
  return (
    <ul className="flex items-center gap-8 ">
      <NavLink onClick={() => navigate("/appointments")}>
        <Popcontent title="Appointments">
          <CalendarCheck className="text-black text-lg" />
        </Popcontent>
      </NavLink>

      <NavLink onClick={() => navigate("/resources")}>
        <Popcontent title="Resources">
          <FileEarmarkPlay className="text-black text-lg" />
        </Popcontent>
      </NavLink>

      <NavLink onClick={() => navigate("/notifications")}>
        <Popcontent title="Notifications">
          <Badge variant="dot" color="primary">
            <Bell className="text-black text-lg" />
          </Badge>
        </Popcontent>
      </NavLink>

      <li className="flex items-center gap-2 bg-white px-2 py-1 rounded-md">
        <Avatar
          alt="Remy Sharp"
          src="#"
          sx={{ width: 30, height: 30, bgcolor: "#152a4f" }}
        />
        <p className=" hidden sm:block text-black font-semibolds tracking-wide">
          Denis Kyusya
        </p>

        <ChevronDown />
      </li>
    </ul>
  );
}

export default Header;
