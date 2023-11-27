import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { OpenFriend } from "./OpenFriend";
import { AddFriend } from "./AddFriend";
import { Discover } from "./Discover";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/user";
import Loader from "../../ui/Loader";

function Overview() {
  const {
    isLoading,
    data: details,
    error,
  } = useQuery({
    queryKey: ["details"],
    queryFn: getUser,
  });

  if (isLoading) return <Loader />;
  return (
    <div className="py-3 px-10 overflow-hidden">
      <div>
        <h1 className="text-orange font-bold tracking-widest md:text-xl text-lg">
          Discover therapists
        </h1>
        <p className="text-black text-sm tracking-wide font-light">
          Get connected to professional private therapist sessions
        </p>
      </div>
      {/* DISCOVER DOCTORS */}
      <div className="flex gap-6 flex-wrap flex-1 justify-center sm:justify-normal my-3">
        {details.map((detail) => {
          return (
            detail.role === "doctor" && (
              <Discover key={detail.id} detail={detail} />
            )
          );
        })}
      </div>

      {/* FRIENDS */}
      <div className="border-t border-orange">
        <div className="flex items-center justify-between">
          <h1 className="text-orange font-bold tracking-widest text-lg md:text-xl ">
            Discover friends
          </h1>

          <Link to="/chat" className="flex items-center gap-2">
            <p>View friends</p>
            <ArrowRight style={{ color: "black" }} />
          </Link>
        </div>

        <div className="flex gap-6 flex-wrap flex-1 justify-center sm:justify-normal ">
          {details.map((detail) => {
            return (
              detail.role === "patient" && (
                <AddFriend key={detail.id} detail={detail} />
              )
            );
          })}
          {/* <AddFriend />
          <OpenFriend />
          <AddFriend />
          <OpenFriend />
          <AddFriend />
          <OpenFriend /> */}
        </div>
      </div>
    </div>
  );
}

export default Overview;
