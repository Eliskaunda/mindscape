import Header from "../ui/Header";

import Overview from "../features/Home/Overview";

function Homepage({ showNav, handleShowNav }) {
  return (
    <div className="flex w-full h-screen">
      <div className="bg-grey h-max w-full text-black">
        <Header handleShowNav={handleShowNav} showNav={showNav} />
        <Overview />
      </div>
    </div>
  );
}

export default Homepage;
