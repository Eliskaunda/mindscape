import { MenuApp, ChevronLeft } from "react-bootstrap-icons";
import Header from "../../ui/Header";
import { useState } from "react";
import Navigation from "../../ui/Navigation";
import Overview from "./Overview";

function Homepage({ showNav, handleShowNav }) {
  return (
    // <div className=" bg-grey flex items-baseline h-screen">
    <div className="flex w-full h-screen">
      {/* <Navigation /> */}
      <div className="bg-grey h-max w-full px-3 text-black">
        <Header handleShowNav={handleShowNav} showNav={showNav} />
        {/* <PersistentDrawerLeft /> */}
        <Overview />
      </div>
    </div>
  );
}

export default Homepage;
