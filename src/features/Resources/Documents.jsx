import { useQuery } from "@tanstack/react-query";
import { Heart, Search } from "react-bootstrap-icons";
import { getResources } from "../../services/resource";
import Loader from "./../../ui/Loader";

export default function Documents() {
  const { data: document, isLoading } = useQuery({
    queryKey: ["resources"],
    queryFn: getResources,
  });
  if (isLoading) return <Loader />;
  return (
    <div className="space-y-4 mx-auto ">
      <h1>Documents</h1>
      <div>
        <form
          action=""
          className="border border-grey rounded-md w-[18rem] px-3 py-2 flex items-center"
        >
          <input
            type="text"
            placeholder="search document"
            className=" w-full focus:outline-none text-black"
          />
          <div className="text-lightBlue">
            <Search />
          </div>
        </form>
      </div>
      <div className="flex  flex-wrap gap-6 md:justify-normal mt-4">
        {document.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}

        {/* <DocumentCard />
        <DocumentCard />
        <DocumentCard /> */}
      </div>
    </div>
  );
}

function DocumentCard({ doc }) {
  const { title, description } = doc;
  return (
    <div className="bg-white shadow-lg rounded-md px-3 py-4 flex gap-4 w-60 md:w-[18rem]">
      <div className="space-y-6">
        <h1 className="font-bold text-black">{title}</h1>
        <p className="font-light text-sm">{description}</p>
      </div>
      <div className="flex justify-center items-baseline gap-1 text-lightBlue">
        {/* <ThreeDotsVertical /> */}
        <Heart />
        <p>200</p>
      </div>
    </div>
  );
}
