import { Avatar } from "@mui/material";

export function PatientMngmt() {
  const date = new Date();
  return (
    <section className="w-full">
      <div className="py-4 px-6 bg-slate-100 space-y-4">
        <div>
          <p>👋 Hey, Good Morning</p>
        </div>

        <div className="flex justify-between items-baseline ">
          <h1 className="font-bold">Martin Maingi</h1>

          <div>
            <p>
              {date.getDate()}/{date.getMonth().toString()},{date.getFullYear()}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-3 flex gap-3">
        <div className="px-2 py-1 rounded-md bg-orange text-white">
          <p>30</p>
          <h3 className="text-sm">Current patients</h3>
        </div>

        <div className="px-2 py-1 rounded-md bg-blue text-white">
          <p>10</p>
          <h3 className="text-sm">Upcoming appointments</h3>
        </div>
        <div className="bg-black text-white px-2 py-1 rounded-md">
          <p>20</p>
          <h3 className="text-sm">Past appointments</h3>
        </div>
      </div>

      <div className="px-6 py-3 w-full">
        <h1 className="my-3 text-bold capitalize">Today&apos;s appointments</h1>

        <div>
          <DisplayTable />
          <DisplayTable />
          <DisplayTable />
          <DisplayTable />
        </div>
      </div>
    </section>
  );
}

function DisplayTable() {
  return (
    <div className="flex items-baseline justify-between gap-2 border-b border-black py-3">
      <p className="text-sm px-1 py-2 ">10:00am</p>
      <div className="flex items-baseline gap-2">
        <Avatar style={{ width: 30, height: 30 }} />
        <h2 className="text-sm text-black font-medium">Allison Maina</h2>
      </div>
      <p className="hidden md:flex  items-baseline text-orange  text-sm">
        Upcoming...
      </p>
      <div className="flex justify-around gap-2">
        <button className="px-1 py-2 bg-blue text-white rounded-md text-sm">
          Reshedule
        </button>
        <button className="bg-orange text-sm uppercase px-1 py-2 rounded-md font-medium text-black">
          Cancel
        </button>
      </div>
    </div>
  );
}
