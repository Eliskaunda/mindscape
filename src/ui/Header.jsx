import { Avatar, Badge } from "@mui/material";
import {
  Search,
  Bell,
  ChevronDown,
  MenuButton,
  CalendarCheck,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function Header({ handleShowNav, showNav }) {
  const navigate = useNavigate();
  return (
    <header className=" pt-2 flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        {/* {!showNav && (
          <div className="" onClick={handleShowNav}>
            <MenuButton />
          </div>
        )} */}

        <h1
          className="text-lg font-bold tracking-wider cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          Mindscape
        </h1>

        <form className="bg-white flex items-center gap-2 py-2 px-3 text-black focus:ring-1 focus:ring-orange   rounded-md">
          <Search />
          <input
            type="text"
            className="bg-transparent outline-none w-20 focus:w-40 focus:outline-none  text-sm font-medium duration-300 transition-all"
          />
        </form>
      </div>

      <div className="flex items-center gap-4 ">
        <CalendarCheck className="text-orange text-lg" />
        <div>
          <Badge variant="dot" color="primary">
            <Bell className="text-orange text-lg" />
          </Badge>
        </div>
        <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-md">
          <Avatar
            alt="Remy Sharp"
            src="#"
            sx={{ width: 30, height: 30, bgcolor: "#152a4f" }}
          />
          <p className=" hidden sm:block text-black font-semibolds tracking-wide">
            Felista Kaunda
          </p>

          <ChevronDown />
        </div>
      </div>
    </header>
  );
}

export default Header;
