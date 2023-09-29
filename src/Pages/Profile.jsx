import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
function Profile() {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div className="flex items-center gap-3 my-3">
        <ArrowLeft onClick={() => navigate(-1)} />
        <h1 className="text-lightBlue text-lg tracking-wider">Profile</h1>
      </div>

      <div className="md:flex flex-col bg-white rounded-lg px-4 py-5">
        <div className="w-2/3">
          <div className="h-full">
            <Avatar />

            <div className="my-4">
              <h1 className="text-lightBlue text-xl tracking-widest font-bold">
                Allison Nderitu
              </h1>
              <p className="text-black text-lg tracking-widest font-semibold">
                Psychologist
              </p>
              <p className="text-sm text-black tracking-wider font-medium">
                Redcross
              </p>
              <button
                className="bg-blue text-white py-2 px-3 my-2 rounded-lg tracking-wider"
                onClick={() => navigate("/app/chat")}
              >
                Talk to Allison
              </button>
            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2  bg-grey px-3 pt-2 rounded-lg">
          <div className="">
            <h2 className="text-black text-lg font-semibold tracking-wider">
              About Allison
            </h2>
            <p className="tracking-widest text-black font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit
              assumenda quas voluptate qui, quae recusandae quos amet
              accusantium minima incidunt dignissimos eaque voluptatem dolore
              non? Repudiandae labore nam maiores.
            </p>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div className="md:ml-4 sm:my-4 md:border-l-2 border-orange px-3">
            <h2 className="text-black font-semibold text-lg tracking-wide">
              Experience
            </h2>

            <div className="flex flex-wrap items-center gap-5">
              <Experience />
              <Experience />
              <Experience />
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="py-3 px-2 flex space-x-3">
      <Avatar />
      <div className="flex flex-col gap-2">
        <h3 className="text-black text-lg">Redcross</h3>
        <p>Psychologist</p>
        <p className="text-lightBlue text-sm">2019-2023</p>
        <p>Nairobi based</p>
      </div>
    </div>
  );
}

export default Profile;
