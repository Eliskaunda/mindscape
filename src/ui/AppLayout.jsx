import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";

function AppLayout({ showNav, handleShowNav }) {
  return (
    <div className="flex w-full h-screen">
      {/* <Navigation /> */}
      <div className="bg-grey w-full px-3 sm:px-3 text-black">
        <Header handleShowNav={handleShowNav} showNav={showNav} />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
