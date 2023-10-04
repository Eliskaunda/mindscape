import Overview from "../features/Home/Overview";

function Homepage() {
  return (
    <div className="flex w-full h-screen">
      <div className="bg-grey h-max w-full text-black">
        <Overview />
      </div>
    </div>
  );
}

export default Homepage;
