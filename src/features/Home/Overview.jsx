import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { OpenFriend } from "./OpenFriend";
import { AddFriend } from "./AddFriend";
import { Discover } from "./Discover";

function Overview() {
  return (
    <div className="py-3 px-10 overflow-hidden">
      <div>
        <h1 className="text-lightBlue font-bold tracking-widest text-lg">
          Discover therapists
        </h1>
        <p className="text-black text-sm tracking-wide font-light">
          Get connected to professional private therapist sessions
        </p>
      </div>
      {/* DISCOVER DOCTORS */}
      <div className="flex gap-6 flex-wrap flex-1 justify-center sm:justify-normal my-3">
        <Discover />
        <Discover />
        <Discover />
        <Discover />
        <Discover />
        <Discover />
      </div>

      {/* FRIENDS */}
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-lightBlue font-bold tracking-widest text-lg">
            Discover friends
          </h1>

          <Link to="/chat" className="flex items-center gap-2">
            <p>View friends</p>
            <ArrowRight style={{ color: "black" }} />
          </Link>
        </div>

        <div className="flex gap-6 flex-wrap flex-1 justify-center sm:justify-normal ">
          <AddFriend />
          <OpenFriend />
          <AddFriend />
          <OpenFriend />
          <AddFriend />
          <OpenFriend />
        </div>
      </div>
    </div>
  );
}

export default Overview;
