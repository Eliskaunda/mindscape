import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout({ showNav, handleShowNav }) {
  return (
    <div className="flex w-full h-screen">
      <div className="bg-grey w-full  text-black">
        <Header handleShowNav={handleShowNav} showNav={showNav} />
        <main className="py-4 px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
