import { Avatar } from "@mui/material";

function Appointments() {
  return (
    <div className="mx-8 my-4">
      <div className="space-y-4">
        <h1 className="text-lg font-bold">Appointments</h1>
        <p>This is where you can manage your appointments.</p>
      </div>

      <div className="flex flex-1 flex-wrap gap-6 p-4 ">
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
      </div>
    </div>
  );
}

function AppointmentCard() {
  return (
    <div className="px-4 py-5 border shadow-black shadow-md w-80">
      <div className="flex items-baseline justify-between">
        <div className="">
          <div className="flex items-end gap-2 mb-2">
            <Avatar />
            <h1 className="text-">Allison Nderitu</h1>
          </div>

          <div className="flex flex-col gap-3">
            <p className="flex text-sm text-black font-light">
              Date: <span>18/10/2023</span>
            </p>
            <p className=" text-lightBlue font-medium">Upcoming</p>
            <p className="text-sm">
              Call: <span>+25478192390</span>
            </p>
          </div>
        </div>
        <button className="text-sm bg-orange px-3 py-2 rounded-full text-white">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Appointments;
