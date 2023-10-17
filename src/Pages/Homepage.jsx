import Overview from "../features/Home/Overview";
import Landing from "../ui/Landing";

function Homepage() {
  return (
    <div className=" w-full text-black">
      <Landing />
      <Overview />
    </div>
  );
}

export default Homepage;
