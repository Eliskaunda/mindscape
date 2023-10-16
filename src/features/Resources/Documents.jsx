import { Heart, Search } from "react-bootstrap-icons";

export default function Documents() {
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
        <DocumentCard />
        <DocumentCard />
        <DocumentCard />
        <DocumentCard />
      </div>
    </div>
  );
}

function DocumentCard() {
  return (
    <div className="bg-white shadow-lg rounded-md px-3 py-4 flex gap-4 w-60 md:w-[18rem]">
      <div className="space-y-6">
        <h1 className="font-bold text-black">Foods to improve brain health</h1>
        <p className="font-light text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex justify-center items-baseline gap-1 text-lightBlue">
        {/* <ThreeDotsVertical /> */}
        <Heart />
        <p>200</p>
      </div>
    </div>
  );
}
