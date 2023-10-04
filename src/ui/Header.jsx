import { Avatar } from "@mui/material";
import { ChevronDown } from "react-bootstrap-icons";

import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex bg-white px-6 py-3 items-center justify-between">
      <div>
        <h1
          onClick={() => navigate("/dashboard")}
          className="text-lightBlue text-xl cursor-pointer"
        >
          Mindscape
        </h1>
      </div>

      <nav className="flex items-center gap-4">
        <NavLink to="/chats">Chats</NavLink>
        <NavLink to="/appointments">Appointments</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink>Notifications</NavLink>
      </nav>

      <div className="flex items-center gap-2">
        <Avatar />
        <p>Denis</p>
        <ChevronDown />
      </div>
    </header>
  );
}

export default Header;
