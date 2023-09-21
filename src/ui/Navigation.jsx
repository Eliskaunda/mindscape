import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
  Chat,
  LightningCharge,
  FileEarmark,
  Lock,
  X,
  List,
} from "react-bootstrap-icons";

function Navigation({ handleShowNav, showNav }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <div className="bg-grey h-screen w-15">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <List className="text-2xl text-blue mt-3" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
              sx={{ width: 140, backgroundColor: "#e9eef7" }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <NavContent handleShowNav={handleShowNav} />
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

function NavContent({ handleShowNav }) {
  return (
    <nav className="bg-blue text-grey w-max px-2 border border-offset-2 border-orange h-screen flex flex-col items-center justify-between  absolute sm:absolute bottom-0 top-0 z-30 py-4 transition-all duration-300 overflow-hidden">
      <ul className="w-max pb-2">
        <div className="flex items-center">
          <h1 className=" tracking-widest ">Mindscape</h1>
          <div onClick={handleShowNav}>
            <X className="text-2xl text-orange" />
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-2 items-start ">
          <li className=" px-1 py-2 active:border active:border-r-orange focus:bg-grey focus:text-black cursor-pointer flex items-end gap-2">
            <LightningCharge className="text-lg" />
            <span className="text-sm">Overview</span>
          </li>

          <li className=" px-1 py-2 active:border active:border-r-orange focus:bg-grey focus:text-black cursor-pointer flex items-end gap-2">
            <Chat className="text-lg" />

            <span className="text-sm">Chat</span>
          </li>

          <li className=" px-1 py-2 active:border active:border-r-orange focus:bg-grey focus:text-black cursor-pointer flex items-end gap-2">
            <FileEarmark className="text-lg" />
            <span className="text-sm">Resources</span>
          </li>

          <li className=" px-1 py-2 active:border active:border-r-orange focus:bg-grey focus:text-black cursor-pointer flex items-end gap-2">
            <Lock className="text-lg" />
            <span className="text-sm">Private Chat</span>
          </li>
        </div>
      </ul>

      <footer className="felx flex-col items-center">
        <h1>🧠Mindscape</h1>
        <p>&copy;2023</p>
      </footer>
    </nav>
  );
}

export default Navigation;
